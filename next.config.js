/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '/app/images',
        pathname: '/random/**',
      },
    ],
    domains: ['source.unsplash.com'],
  },
};

module.exports = nextConfig;