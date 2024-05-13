/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
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

export default nextConfig
