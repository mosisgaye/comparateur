import React from 'react';
import { FiWind, FiSun, FiBatteryCharging } from 'react-icons/fi'; // Icons representing energy

const PopularRating = () => {
  return (
    <div className="h-auto px-[125px] py-[100px] flex-col justify-center items-center gap-10 flex bg-[#f0f4f7] dark:bg-[#012737] ">
      {/* Section Titre */}
      <div className="text-center mb-10">
        <h2 className="text-inherit text-4xl font-bold leading-tight">
          Comparez les Meilleures Offres d'Énergie en Belgique
        </h2>
        <p className="text-[#fff] text-lg leading-relaxed mt-4">
          Trouvez les meilleures offres pour économiser sur vos factures d'énergie tout en soutenant des solutions durables et innovantes.
        </p>
      </div>

      {/* Bouton d'Appel à l'Action */}
      <div className="mt-6">
        <button className="px-8 py-4 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-[#ff6565] transition duration-300">
          Voir Toutes les Offres
        </button>
      </div>

      {/* Section Offres */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {/* Offre 1 */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ">
          <div className="flex justify-center">
            <FiWind size={60} color="#006400" /> {/* Icône Éolienne */}
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Offre Énergie Éolienne</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            Profitez d'une énergie propre et renouvelable grâce à nos offres d'énergie éolienne à des prix compétitifs.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-[#111] font-semibold text-xl">À partir de 35€/mois</span>
          </div>
        </div>

        {/* Offre 2 */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <div className="flex justify-center">
            <FiSun size={60} color="#FFA500" /> {/* Icône Énergie Solaire */}
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Offre Énergie Solaire</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            Réduisez vos coûts avec nos solutions solaires. Comparez les offres et faites un choix éclairé pour votre maison.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-[#111] font-semibold text-xl">À partir de 45€/mois</span>
          </div>
        </div>

        {/* Offre 3 */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <div className="flex justify-center">
            <FiBatteryCharging size={60} color="#FF6347" /> {/* Icône Stockage Énergie */}
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Offre Stockage d'Énergie</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            Optimisez l'utilisation de l'énergie avec nos solutions de stockage. Découvrez les meilleures options pour votre foyer.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-[#111] text-center font-semibold text-xl">À partir de 50€/mois</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRating;
