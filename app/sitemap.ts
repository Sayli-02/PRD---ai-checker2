import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { siteOrigin } from "@/lib/base-path";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = siteOrigin(brand.url);
  const posts = await getPosts();
  return [
    { url: site },
    { url: `${site}/blog` },
    ...posts.map((p) => ({ url: `${site}/blog/${p.slug}`, lastModified: p.updated })),
    { url: `${site}/privacy` },
    { url: `${site}/terms` },
  ];
}
