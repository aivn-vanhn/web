import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
