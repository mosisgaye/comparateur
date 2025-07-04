import { Phone, Wifi, MessageSquare, Star, Zap, Shield } from 'lucide-react';
import type { Offre } from '@/app/lib/types/offers';
import { motion } from 'framer-motion';

interface OfferCardProps {
  offer: Offre;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Badge pour les offres star */}
      {offer.isStar && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Meilleure offre
          </div>
        </div>
      )}

      {/* Header avec logo opérateur */}
      <div className="relative p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg"></div>
            <img 
              src={offer.operateur.logo} 
              alt={offer.operateur.nom}
              className="relative h-12 w-auto object-contain bg-white rounded-xl p-2 shadow-sm"
            />
          </div>
          
          {offer.promo && (
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              PROMO
            </div>
          )}
        </div>

        {/* Nom de l'offre */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {offer.nom}
        </h3>
      </div>

      {/* Contenu principal */}
      <div className="px-6 pb-6">
        {/* Prix */}
        <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {offer.prix}€
            </span>
            <span className="text-lg text-gray-600 font-medium">/mois</span>
          </div>
          
          {offer.promo && (
            <div className="mt-2 text-sm text-green-600 font-semibold">
              Promo: {offer.promo.prix}€ pendant {offer.promo.duree} mois
            </div>
          )}
        </div>

        {/* Caractéristiques */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wifi className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-900">{offer.internet}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-900">{offer.appels}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-900">{offer.smsMms}</span>
            </div>
          </div>
        </div>

        {/* Services additionnels */}
        {(offer.services.compatible5G || offer.services.internetIllimite) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {offer.services.compatible5G && (
              <div className="flex items-center gap-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                5G
              </div>
            )}
            {offer.services.internetIllimite && (
              <div className="flex items-center gap-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                <Shield className="w-3 h-3" />
                Illimité
              </div>
            )}
          </div>
        )}

        {/* Bouton CTA */}
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 group-hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              Voir l'offre
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </span>
          </button>
        </a>
      </div>

      {/* Effet de hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </motion.div>
  );
}