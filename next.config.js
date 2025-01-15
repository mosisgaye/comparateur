/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Laissez false si vous souhaitez utiliser l'optimisation d'images par Next.js
    domains: ['www.awin1.com', 'tracking.publicidees.com'], // Ajoutez ici les domaines externes autorisés
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://telecom.bemove.fr/:path*', 
      },
    ];
  },
};

module.exports = nextConfig;
