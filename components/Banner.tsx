'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {cardData} from "@/constants/index";
import { Bird, ChartColumnStacked, PiggyBank, ShieldCheck } from "lucide-react";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#151d53] via-[#1b28b5] to-[#3244ec] text-white py-16 px-8 md:px-20">
     
      <div className="flex-1 mb-8 md:mb-0 md:pr-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
         Opter <span className="text-[#8cd147]">ComparePrix.net </span>
        </h1>
        <ul className="space-y-3 mb-8 text-lg">
        
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><ShieldCheck /></span> Qualité et fiabilité
          </li>
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><Bird /></span> Service 100% gratuit
          </li>
       
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><PiggyBank /></span> Jusqu’à 200€ d'économies
          </li>


          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><ChartColumnStacked /></span> Comparaison Facile et Rapide
          </li>
         
        </ul>
        <Link href="/partner" passHref>
  <button className="aicha bg-[#8cd147] px-6 py-3 text-lg rounded-full shadow-2xl transition-all duration-300">
    Prêt à économiser ?
  </button>
</Link>
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
