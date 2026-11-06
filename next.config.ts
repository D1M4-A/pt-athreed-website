import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.GITHUB_PAGES === "true"
    ? { basePath: "/pt-athreed-website" }
    : {}),
  cacheComponents: process.env.GITHUB_PAGES !== "true",
  partialPrefetching: process.env.GITHUB_PAGES !== "true",
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
