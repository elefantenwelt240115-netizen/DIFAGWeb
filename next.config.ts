import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deutsche-foerderberatung.de",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
