/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NOTION_APP_API_KEY: process.env.NOTION_APP_API_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID
  }
}

module.exports = nextConfig
