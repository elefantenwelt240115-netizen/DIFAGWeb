import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deutsche-foerderberatung.de",
      },
    ],
  },
};

export default nextConfig;
