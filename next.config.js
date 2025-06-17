/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer2');

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, 
  },
  experimental: {
    typedRoutes: false,
  },
  webpack: (config, { isServer }) => {
    // Handle JSON imports
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    // Add this to handle .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Add this to handle contentlayer generated files
    config.module.rules.push({
      test: /\.contentlayer\/generated\/.*\.mjs$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'previews.123rf.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
