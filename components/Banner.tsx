'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cardData } from '@/constants/index';
import { Bird, ChartColumnStacked, PiggyBank, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000); // Augmentation de l'intervalle pour réduire les animations fréquentes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#151d53] via-[#1b28b5] to-[#3244ec] text-white py-10 px-6 md:px-16">
      <div className="flex-1 mb-6 md:mb-0 md:pr-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Opter <span className="text-[#8cd147]">ComparePrix.net </span>
        </h1>
        <ul className="space-y-2 mb-6 text-base">
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><ShieldCheck /></span> Qualité et fiabilité
          </li>
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><Bird /></span> Service 100% gratuit
          </li>
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><PiggyBank /></span> Jusqu’à 400€ d'économies
          </li>
          <li className="flex items-start">
            <span className="text-[#8cd147] mr-2"><ChartColumnStacked /></span> Comparaison Facile et Rapide
          </li>
        </ul>
        <Link href="/partner" passHref>
          <button className="bg-[#8cd147] px-4 py-2 text-base rounded-full shadow-lg transition-all duration-300">
            Prêt à économiser ?
          </button>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-48">
          <AnimatePresence>
            {cardData.map((card, index) =>
              index === currentIndex ? (
                <motion.div
                  key={card.id}
                  className="absolute w-full h-full bg-white rounded-lg shadow-xl flex flex-col justify-center items-center text-black p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={card.logo} alt={`${card.title} logo`} className="w-12 h-12 mb-2" width={48} height={48} loading="lazy" />
                  <div className="text-base font-semibold text-gray-700">{card.title}</div>
                  <div className="text-3xl font-bold text-blue-600">{card.data}</div>
                  <div className="text-lg font-medium text-gray-800 mt-1">{card.price} / mois</div>
                  <div className="text-sm text-gray-600 mt-2 text-center">{card.details}</div>
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
