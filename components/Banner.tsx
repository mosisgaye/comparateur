'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {cardData} from "@/constants/index";

interface BannerProps {
  title: string;
  description: string;
}


const Banner: React.FC<BannerProps> = ({ title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-blue-700 text-white py-16 px-8 md:px-20">
      {/* Left Side: Text Content */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trouvez les meilleures offres de <span className="text-yellow-300">mobile et box internet</span>.
        </h2>
        <ul className="space-y-3 mb-8 text-lg">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✔</span> Service 100% gratuit et en ligne
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✔</span> Économisez jusqu’à 100€/mois
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✔</span> Comparez les box internet et forfait mobile
          </li>
        </ul>
        <button className="bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-3 text-lg rounded-full shadow-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-300">
          Comparer les forfaits
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-80 h-64">
          <AnimatePresence>
            {cardData.map((card, index) =>
              index === currentIndex ? (
                <motion.div
                  key={card.id}
                  className="absolute w-full h-full bg-white rounded-xl shadow-2xl flex flex-col justify-center items-center text-black p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={card.logo} alt={`${card.title} logo`} className="w-16 h-16 mb-4" />
                  <div className="text-lg font-semibold text-gray-700">{card.title}</div>
                  <div className="text-5xl font-extrabold text-blue-600">{card.data}</div>
                  <div className="text-2xl font-semibold text-gray-800 mt-2">{card.price} / mois</div>
                  <div className="text-md text-gray-600 mt-4">{card.details}</div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Banner;
