import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    return Date.now().toString();
  },
  env: {
    NEXT_PUBLIC_BUILD_ID: process.env.BUILD_ID || Date.now().toString(),
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
