/** @type {import('next').NextConfig} */

module.exports = nextConfig

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  }
}


module.exports = withContentlayer(nextConfig)
