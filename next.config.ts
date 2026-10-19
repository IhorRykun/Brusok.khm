import type { NextConfig } from "next";

const repository = "Brusok.khm";
const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? `/${repository}` : "";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        basePath,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: githubPages,
  },
};

export default nextConfig;
