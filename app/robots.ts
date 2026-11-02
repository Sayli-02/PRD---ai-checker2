import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { BASE_PATH, siteOrigin, withBase } from "@/lib/base-path";

// "*" covers AI crawlers (GPTBot, PerplexityBot, Google-Extended, ClaudeBot...): they are allowed on purpose.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: BASE_PATH ? `${BASE_PATH}/` : "/",
      disallow: [withBase("/api/"), withBase("/check"), withBase("/check/"), withBase("/styleguide")],
    },
    sitemap: `${siteOrigin(brand.url)}/sitemap.xml`,
  };
}
