import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.googletagmanager.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/**',
      },
    ]
  },
};

export default nextConfig;
