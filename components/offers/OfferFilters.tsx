import type { Filtres } from '@/app/lib/types/offers';
import { motion } from 'framer-motion';
import { Filter, SortAsc, Users, Zap } from 'lucide-react';

interface OfferFiltersProps {
  filters: Filtres;
  onFilterChange: (filterType: string, value: string) => void;
}

export function OfferFilters({ filters, onFilterChange }: OfferFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6"
    >
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Titre des filtres */}
        <div className="flex items-center gap-2 text-gray-700 font-semibold mr-4">
          <Filter className="w-5 h-5 text-blue-600" />
          <span>Filtrer par :</span>
        </div>

        {/* Filtre Opérateurs */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <select
            className="relative bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-gray-200 rounded-2xl px-6 py-3 pr-10 font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            onChange={(e) => onFilterChange('operateurs', e.target.value)}
          >
            <option value="">🏢 Tous les opérateurs</option>
            {filters.operateurs.map((operateur) => (
              <option key={operateur.id} value={operateur.slug}>
                {operateur.nom}
              </option>
            ))}
          </select>
          <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Filtre Opérateurs spécifiques */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <select
            className="relative bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-gray-200 rounded-2xl px-6 py-3 pr-10 font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            onChange={(e) => onFilterChange('additionalFilters', e.target.value)}
          >
            <option value="">📱 Opérateurs populaires</option>
            <option value="orange">🟠 Orange</option>
            <option value="bouygues">🔵 Bouygues Telecom</option>
            <option value="sfr">🔴 SFR</option>
            <option value="free">⚫ Free</option>
          </select>
          <Zap className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Tri par prix */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <select
            className="relative bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-gray-200 rounded-2xl px-6 py-3 pr-10 font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            onChange={(e) => onFilterChange('tri', e.target.value)}
          >
            <option value="asc">💰 Prix croissant</option>
            <option value="desc">💎 Prix décroissant</option>
          </select>
          <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Filtres avancés */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <select
            className="relative bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-gray-200 rounded-2xl px-6 py-3 pr-10 font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            onChange={(e) => onFilterChange('additionalFilters', e.target.value)}
          >
            <option value="">⚡ Filtres avancés</option>
            <option value="sansEngagement">🔓 Sans engagement</option>
            <option value="plusDe100Go">📊 Plus de 100 Go</option>
            <option value="compatible5G">🚀 Compatible 5G</option>
          </select>
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Indicateur de filtres actifs */}
      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          {filters.nbOffreMatching} offres disponibles
        </span>
      </div>
    </motion.div>
  );
}