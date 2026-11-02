import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/base-path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  basePath: BASE_PATH || undefined,
  async redirects() {
    return BASE_PATH
      ? [{ source: "/", destination: BASE_PATH, permanent: false, basePath: false }]
      : [];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
