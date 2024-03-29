/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc','previews.123rf.com','m.media-amazon.com'],
    dangerouslyAllowSVG: true,
  }
}



module.exports = withContentlayer(nextConfig)

