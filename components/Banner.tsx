'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cardData } from '@/constants/index';
import { Bird, PiggyBank, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Comparateur N°1 en France
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Opter{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  ComparePrix.net
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Avantages avec icônes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, text: "Qualité et fiabilité", color: "text-green-400" },
                { icon: Bird, text: "Service 100% gratuit", color: "text-blue-400" },
                { icon: PiggyBank, text: "Jusqu'à 400€ d'économies", color: "text-yellow-400" },
                { icon: TrendingUp, text: "Comparaison facile et rapide", color: "text-purple-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/forfaits" passHref>
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/25">
                  <span className="text-lg">Prêt à économiser ?</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Carte animée */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-64">
              <AnimatePresence mode="wait">
                {cardData.map((card, index) =>
                  index === currentIndex ? (
                    <motion.div
                      key={card.id}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
                      initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
                          <Image 
                            src={card.logo} 
                            alt={`${card.title} logo`} 
                            className="relative w-16 h-16 object-contain" 
                            width={64} 
                            height={64} 
                            loading="lazy" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                          <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {card.data}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            {card.price} <span className="text-sm text-gray-600">/ mois</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{card.details}</p>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                          Voir l'offre
                        </button>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>

              {/* Indicateurs */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {cardData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;