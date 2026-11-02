// Empty = site at /. Set to "/v2" if this app shares a host with the old site.
export const BASE_PATH = "";

/** Prefix a root-relative path. Next.js Link and router.push already do this; fetch, img, and <a> do not. */
export function withBase(path: string) {
  if (!BASE_PATH || !path.startsWith("/") || path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

/** Origin + /v2. Use for JSON-LD, sitemap, RSS — not for Next.js Link hrefs. */
export function siteOrigin(origin: string) {
  return `${origin.replace(/\/$/, "")}${BASE_PATH}`;
}
