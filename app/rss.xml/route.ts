import { brand } from "@/config/brand";
import { siteOrigin } from "@/lib/base-path";
import { getPosts } from "@/lib/blog";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const site = siteOrigin(brand.url);
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const link = `${site}/blog/${p.slug}`;
      return `<item><title>${esc(p.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(brand.name)} blog</title><link>${site}/blog</link><description>${esc(brand.description)}</description><language>en-in</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
