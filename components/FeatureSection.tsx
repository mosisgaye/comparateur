import React from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description }) => (
  <div className="max-w-7xl mx-auto px-6 py-16">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
        <Sparkles className="w-4 h-4" />
        Nos Services Premium
      </div>
      
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Box Internet Fibre",
          description: "Découvrez les meilleures offres de forfait internet avec box internet fibre, incluant des débits allant jusqu'à 8 Gb/s.",
          buttonText: "Voir les offres",
          imageUrl: "/images/fibre.jpg",
          gradient: "from-blue-500 to-cyan-500",
          delay: 0.2
        },
        {
          title: "Box Internet À petit prix",
          description: "Découvrez les meilleures offres de forfait internet avec box internet fibre, incluant des débits allant jusqu'à 8 Gb/s.",
          buttonText: "Voir les offres",
          imageUrl: "/images/cheap.jpg",
          gradient: "from-green-500 to-emerald-500",
          delay: 0.4
        },
        {
          title: "Box Internet Sans Engagement",
          description: "Bénéficiez d'abonnements sans obligation. Évaluez les différentes options et sélectionnez la box qui vous correspond le mieux",
          buttonText: "Voir les offres",
          imageUrl: "/images/no-commitment.jpg",
          gradient: "from-purple-500 to-pink-500",
          delay: 0.6
        }
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.delay }}
        >
          <FeatureCard
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            imageUrl={card.imageUrl}
            gradient={card.gradient}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default FeatureSection;