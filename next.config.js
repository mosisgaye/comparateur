/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.ariase.com'], // Ajoutez vos domaines ici
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Attrape toutes les requêtes vers `/api/...`
        destination: 'https://telecom.bemove.fr/:path*', // Redirige vers l'API backend
      },
    ];
  },
};

module.exports = nextConfig;
