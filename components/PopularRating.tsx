import React from 'react';

const PopularRating = () => {
  return (
    <div className="h-auto px-[125px] py-[100px] flex-col justify-center items-center gap-10 flex bg-[#f0f4f7] dark:bg-[#012737]">
      {/* Section Titre */}
      <div className="text-center mb-10">
        <h2 className="text-black dark:text-white text-4xl font-bold leading-tight">
          Choisissez L'énergie Verte Qui Vous Convient
        </h2>
        <p className="dark:text-gray-300 text-black text-lg leading-relaxed mt-4">
          Un fournisseur d'énergie verte qui vous propose des offres d’énergie 100% renouvelables, issues de productions locales ou européennes.
        </p>
      </div>

      {/* Section Offres */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {/* Offre 1 - Électricité Verte */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <div className="flex justify-center">
            <img src="/images/icons/elec.svg" alt="Électricité" className="w-16 h-16" />
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Électricité verte</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            100% renouvelable <br /> Origine Europe ou France
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button className="px-6 py-2 bg-[#00e3b1] text-white font-semibold rounded-full shadow-lg hover:bg-[#00cc9a] transition duration-300">
              Voir l'offre électricité verte
            </button>
          </div>
        </div>

        {/* Offre 2 - Gaz Vert */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <div className="flex justify-center">
            <img src="/images/icons/gaz.svg" alt="Gaz" className="w-16 h-16" />
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Gaz vert</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            15% ou 100% renouvelable <br /> Origine France
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button className="px-6 py-2 bg-[#00e3b1] text-white font-semibold rounded-full shadow-lg hover:bg-[#00cc9a] transition duration-300">
              Voir l'offre gaz renouvelable
            </button>
          </div>
        </div>

        {/* Offre 3 - Bois de Chauffage */}
        <div className="w-80 h-auto p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <div className="flex justify-center">
            <img src="/images/icons/boi.svg" alt="Bois" className="w-16 h-16" />
          </div>
          <h3 className="text-inherit text-xl font-semibold mt-4 text-center">Bois de chauffage</h3>
          <p className="text-gray-700 text-base mt-2 text-center">
            100% renouvelable <br /> Origine France
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button className="px-6 py-2 bg-[#00e3b1] text-white font-semibold rounded-full shadow-lg hover:bg-[#00cc9a] transition duration-300">
              Voir l'offre bois de chauffage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRating;
