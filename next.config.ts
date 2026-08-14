import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Beyond-Fitness";

const nextConfig: NextConfig = {
  // Monorepo / parent-git lockfile: keep Turbopack rooted on this app
  turbopack: {
    root: path.join(__dirname),
  },
  // Static export for GitHub Pages preview deploys
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
