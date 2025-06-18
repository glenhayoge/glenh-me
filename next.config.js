/** @type {import('next').NextConfig} */

// module.exports = nextConfig

// const { withContentlayer } = require('next-contentlayer');
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

    // Handle .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    // Handle contentlayer generated files
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
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = withContentlayer(nextConfig)

module.exports = withContentlayer(nextConfig);
