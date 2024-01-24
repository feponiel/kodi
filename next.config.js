/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'source.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
