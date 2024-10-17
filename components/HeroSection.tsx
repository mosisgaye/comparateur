import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 dark:bg-[#012737] py-12 transition-colors duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Texte de gauche */}
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comparez les meilleurs offres des meilleurs votes
          </h1>
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✔</span> Service 100% gratuit et en ligne
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Comparez tous les fournisseurs d’électricité et de gaz
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Économisez jusqu’à 100€/mois
            </li>
          </ul>
        </div>

        {/* Boîte de droite avec image */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          {/* Carte d'options */}
          <div className="grid grid-cols-3 gap-4 bg-white dark:bg-[#012737] shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl text-blue-600 dark:text-white">⚡</div>
              <div className="font-semibold text-gray-700 dark:text-gray-300 mt-2">Électricité</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl text-blue-600 dark:text-white">🔥</div>
              <div className="font-semibold text-gray-700 dark:text-gray-300 mt-2">Gaz</div>
            </div>
            <div className="flex flex-col items-center">
            <div className="text-3xl text-blue-600 dark:text-white">📶</div>
              <div className="font-semibold text-gray-700 dark:text-gray-300 mt-2">Télécoms</div>
            </div>
          </div>

          {/* Image */}
          {/* Tu peux insérer ici une image avec Next.js si besoin */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
