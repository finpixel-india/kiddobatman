import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change image optimization if needed for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
