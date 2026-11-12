import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.hindustantimes.com",
      },
      {
        protocol: "https",
        hostname: "rudrapurproperty.com",
      },
      {
        protocol: "https",
        hostname: "www.chardham-pilgrimage-tour.com",
      },
      {
        protocol: "https",
        hostname: "cdn.tripuntold.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/venues/concert",
        destination: "/venues/concord",
        permanent: true,
      },
      {
        source: "/venues/upcoming-ballroom",
        destination: "/venues/vyah-ballroom",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
