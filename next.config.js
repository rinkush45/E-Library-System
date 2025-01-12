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
    domains: ['www.istockphoto.com', 'drive.google.com'],
  },
};

module.exports = nextConfig;