'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cardData, ratingContent } from '@/constants/index';

interface BannerProps {
  title: string;
  description: string;
}

const Rating: React.FC<BannerProps> = ({ title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-800">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto px-4">{description}</p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="flex justify-center w-full md:w-auto">
              <div className="relative w-72 h-80">
                <AnimatePresence>
                  {cardData.map(
                    (card, index) =>
                      index === currentIndex && (
                        <motion.div
                          key={card.id}
                          className="absolute w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black p-6 transition-all"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6 }}
                        >
                          <img src={card.logo} alt={`${card.title} logo`} className="w-16 h-16 mb-4" />
                          <div className="text-lg font-semibold text-gray-700">{card.title}</div>
                          <div className="text-5xl font-extrabold text-blue-600">{card.data}</div>
                          <div className="text-2xl font-semibold text-gray-800 mt-2">{card.price} / mois</div>
                          <div className="text-md text-gray-600 mt-4 text-center">{card.details}</div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rating;
