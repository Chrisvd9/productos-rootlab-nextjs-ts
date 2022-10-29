/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: ''
      },
    ],
  },

}

module.exports = nextConfig
