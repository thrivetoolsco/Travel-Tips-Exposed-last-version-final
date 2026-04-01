import { renderToString } from "react-dom/server";
import App from "./App";

type LocationHook = () => [string, (to: string) => void];

function makeStaticLocationHook(path: string): LocationHook {
  return () => [path, () => {}];
}

export function render(url: string) {
  const pathname = url.split("?")[0];
  const helmetContext: Record<string, any> = {};
  const locationHook = makeStaticLocationHook(pathname);

  const html = renderToString(
    <App helmetContext={helmetContext} locationHook={locationHook} />
  );

  return { html, helmet: helmetContext.helmet };
}
