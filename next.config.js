/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.ariase.com', 'images.ctfassets.net', 'www.awin1.com', 'tracking.publicidees.com'], // Ajoutez vos domaines ici (supprimez "https://")
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
