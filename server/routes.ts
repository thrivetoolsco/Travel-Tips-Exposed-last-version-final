import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { BASE_URL, sitemapUrls } from "../shared/sitemap-urls";
import { registerSsrPages } from "./ssr-pages";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // SSR routes for blog posts (must be before the static catch-all)
  if (process.env.NODE_ENV === "production") {
    registerSsrPages(app);
  }

  app.get('/sitemap.xml', (_req, res) => {
    const urlEntries = sitemapUrls
      .map(({ path, lastmod, changefreq, priority }) => {
        const loc = `${BASE_URL}${path}`;
        const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
        return (
          `  <url>\n` +
          `    <loc>${loc}</loc>${lastmodTag}\n` +
          `    <changefreq>${changefreq}</changefreq>\n` +
          `    <priority>${priority.toFixed(1)}</priority>\n` +
          `  </url>`
        );
      })
      .join("\n");

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n` +
      urlEntries +
      `\n\n</urlset>\n`;

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  return httpServer;
}
