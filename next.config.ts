import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgix.ranker.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
