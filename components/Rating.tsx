'use client';
import React from 'react';
import { cardData } from '@/constants/index';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

interface BannerProps {
  title: string;
  description: string;
}

const Rating: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
          <Award className="w-4 h-4" />
          Sélection Premium 2025
        </div>
        
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Users, number: "2M+", label: "Utilisateurs satisfaits", color: "from-blue-500 to-cyan-500" },
          { icon: TrendingUp, number: "98%", label: "Taux de satisfaction", color: "from-green-500 to-emerald-500" },
          { icon: Star, number: "4.9/5", label: "Note moyenne", color: "from-yellow-500 to-orange-500" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4 + index * 0.1,
              duration: 0.6,
              ease: 'easeOut',
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            {/* Badge premium */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Top
              </div>
            </div>

            {/* Header avec logo */}
            <div className="relative p-8 pb-4">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
                <div className="relative w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto">
                  <img 
                    src={card.logo} 
                    alt={`${card.title} logo`} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
            </div>

            {/* Prix et données */}
            <div className="px-8 pb-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {card.data}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {card.price} <span className="text-sm text-gray-600">/ mois</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{card.details}</p>
              </div>

              {/* Bouton CTA */}
              <a 
                href='https://www.awin1.com/awclick.php?gid=474635&mid=66178&awinaffid=1749047&linkid=3485789&clickref' 
                target='_blank'
                className="block w-full"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Voir Offre
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </span>
                </motion.button>
              </a>
            </div>

            {/* Effet de hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rating;