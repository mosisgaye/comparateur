// components/Banner.tsx
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-8 rounded-lg shadow-lg text-white flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Comparez les Meilleurs Téléphones et Box Internet</h1>
      <p className="mb-6 text-lg">
        Trouvez les meilleures offres de téléphones et box internet en France avec notre comparateur simple et rapide.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center justify-center">
          <span className="text-green-400 mr-2">✔</span> Service 100% gratuit et en ligne
        </li>
        <li className="flex items-center justify-center">
          <span className="text-green-400 mr-2">✔</span> Comparez tous les fournisseurs d’électricité et de gaz
        </li>
        <li className="flex items-center justify-center">
          <span className="text-green-400 mr-2">✔</span> Économisez jusqu’à 100€/mois
        </li>
        <li className="flex items-center justify-center">
          <span className="text-green-400 mr-2">✔</span> Trouvez le meilleur forfait mobile adapté à vos besoins
        </li>
        <li className="flex items-center justify-center">
          <span className="text-green-400 mr-2">✔</span> Comparez les box internet pour une connexion optimale
        </li>
      </ul>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg">
        Parlez à un expert
      </button>
    </div>
  );
};

export default HeroSection;
