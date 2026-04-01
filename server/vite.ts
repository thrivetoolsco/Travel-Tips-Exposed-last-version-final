import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);

      // SSR: load the server entry and render the React tree to a string
      let finalPage = page;
      try {
        const serverEntry = await vite.ssrLoadModule("/src/entry-server.tsx");
        const { html: appHtml, helmet } = serverEntry.render(url);

        const headTags = helmet
          ? [
              helmet.title.toString(),
              helmet.priority.toString(),
              helmet.meta.toString(),
              helmet.link.toString(),
              helmet.script.toString(),
            ]
              .filter(Boolean)
              .join("\n    ")
          : "";

        finalPage = page
          .replace("<!--head-outlet-->", headTags)
          .replace("<!--ssr-outlet-->", appHtml);
      } catch (ssrErr) {
        // If SSR rendering fails, fall back to the client-only shell
        console.error("[SSR] Render error, falling back to client shell:", ssrErr);
        finalPage = page
          .replace("<!--head-outlet-->", "")
          .replace("<!--ssr-outlet-->", "");
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(finalPage);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
