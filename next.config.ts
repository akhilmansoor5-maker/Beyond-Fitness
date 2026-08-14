import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Monorepo / parent-git lockfile: keep Turbopack rooted on this app
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
