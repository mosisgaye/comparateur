/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://telecom.bemove.fr/:path*', // Redirige vers l'API backend
      },
    ];
  },
};

module.exports = nextConfig;  // Ensure it's exported correctly
