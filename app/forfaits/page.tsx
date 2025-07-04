'use client';
import { useEffect, useState } from 'react';
import { fetchMobileOffers } from '@/app/lib/api/offers';
import { OffersList } from '@/components/offers/OffersList';
import { OfferFilters } from '@/components/offers/OfferFilters';
import type { Commercial, Offre, Filtres } from '@/app/lib/types/offers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, TrendingUp } from 'lucide-react';

export default function ForfaitsPage() {
  const [data, setData] = useState<Commercial | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filtres | null>(null);
  const [filteredOffers, setFilteredOffers] = useState<Offre[]>([]);
  const [displayedOffers, setDisplayedOffers] = useState<Offre[]>([]);
  const [offerLimit, setOfferLimit] = useState(12);

  useEffect(() => {
    async function loadOffers() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchMobileOffers();
        setData(response.commercial);
        setFilters(response.commercial.filtres);
        setFilteredOffers(response.commercial.offres);
        setDisplayedOffers(response.commercial.offres.slice(0, offerLimit));
      } catch (err) {
        setError('Impossible de charger les offres. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    }
    loadOffers();
  }, [offerLimit]);

  const handleShowMore = () => {
    setDisplayedOffers(filteredOffers.slice(0, displayedOffers.length + 9));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilterLoading(true);
    setTimeout(() => {
      let updatedOffers = [...(data?.offres || [])];
      if (filterType === 'operateurs' && value) {
        updatedOffers = updatedOffers.filter((offer) =>
          offer.operateur.slug === value || offer.operateur.slugOperateur === value
        );
      }
      if (filterType === 'tri') {
        updatedOffers.sort((a, b) => (value === 'asc' ? a.prix - b.prix : b.prix - a.prix));
      }
      setFilteredOffers(updatedOffers);
      setDisplayedOffers(updatedOffers.slice(0, offerLimit));
      setFilterLoading(false);
    }, 800);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section Skeleton */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Skeleton height={60} width={400} className="mx-auto mb-4" />
            <Skeleton height={24} width={600} className="mx-auto" />
          </div>
        </div>

        {/* Content Skeleton */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <Skeleton height={80} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton height={300} className="rounded-2xl" />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-2xl p-12 max-w-md mx-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Erreur de chargement</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              Forfaits Mobiles Premium
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Forfaits Mobiles
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Nouvelle Génération
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection exclusive des meilleurs forfaits mobiles. 
              Comparez, économisez et profitez de la 5G ultra-rapide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              {[
                { icon: Zap, number: "200+", label: "Offres comparées" },
                { icon: Shield, number: "100%", label: "Gratuit et fiable" },
                { icon: TrendingUp, number: "400€", label: "Économies moyennes" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {filters && <OfferFilters filters={filters} onFilterChange={handleFilterChange} />}
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filterLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                  <Skeleton height={200} className="rounded-xl mb-4" />
                  <Skeleton height={24} width="80%" className="mb-2" />
                  <Skeleton height={20} width="60%" />
                </div>
              ))}
            </div>
          ) : (
            <OffersList offers={displayedOffers} />
          )}
        </motion.div>

        {/* Load More Button */}
        {displayedOffers.length < filteredOffers.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleShowMore}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            >
              <span className="text-lg">Voir plus d'offres</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.div>
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}