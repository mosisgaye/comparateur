'use client';
import React from 'react';
import { cardData } from '@/constants/index';
import { motion } from 'framer-motion';

interface BannerProps {
  title: string;
  description: string;
}

const Rating: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-800">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto px-4">{description}</p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="w-full md:w-72 h-auto bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.3, // Ajoute un délai pour chaque carte
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <img src={card.logo} alt={`${card.title} logo`} className="w-16 h-16 mb-4" />
            <div className="text-lg font-semibold text-gray-700">{card.title}</div>
            <div className="text-5xl font-extrabold text-blue-600">{card.data}</div>
            <div className="text-2xl font-semibold text-gray-800 mt-2">{card.price} / mois</div>
            <div className="text-md text-gray-600 mt-4 text-center">{card.details}</div>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
              Voir Offre
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
