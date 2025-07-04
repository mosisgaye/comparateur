import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  gradient?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  gradient = "from-blue-500 to-purple-500"
}) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
  >
    {/* Image avec overlay gradient */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      {/* Badge flottant */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
        Premium
      </div>
    </div>

    {/* Contenu */}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group/btn relative inline-flex items-center gap-3 bg-gradient-to-r ${gradient} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
      >
        <span className="relative z-10">{buttonText}</span>
        <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
        
        {/* Effet de hover */}
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
      </motion.button>
    </div>

    {/* Effet de bordure animée */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
  </motion.div>
);

export default FeatureCard;