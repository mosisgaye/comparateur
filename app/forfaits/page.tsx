'use client';
import { useEffect, useState } from 'react';
import { fetchMobileOffers } from '@/app/lib/api/offers';
import { OffersList } from '@/components/offers/OffersList';
import { OfferFilters } from '@/components/offers/OfferFilters';
import type { Commercial, Offre, Filtres } from '@/app/lib/types/offers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ForfaitsPage() {
  const [data, setData] = useState<Commercial | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false); // Nouvel état pour l'effet suspense
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filtres | null>(null);
  const [filteredOffers, setFilteredOffers] = useState<Offre[]>([]);
  const [displayedOffers, setDisplayedOffers] = useState<Offre[]>([]);
  const [offerLimit, setOfferLimit] = useState(9);

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
    setFilterLoading(true); // Activer l'effet suspense
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
      setFilterLoading(false); // Désactiver l'effet suspense
    }, 1000); // Ajouter un délai d'1 seconde pour l'effet suspense
  };

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton height={200} width="100%" className="rounded-lg" />
              <Skeleton height={20} width={250} />
              <Skeleton height={20} width={200} />
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8 text-center text-red-600">
        <p className="text-lg font-semibold">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Réessayer
        </button>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Forfaits Mobiles</h1>
        {filters && <OfferFilters filters={filters} onFilterChange={handleFilterChange} />}
        {filterLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton height={200} width="100%" className="rounded-lg" />
                <Skeleton height={20} width={250} />
                <Skeleton height={20} width={200} />
              </div>
            ))}
          </div>
        ) : (
          <OffersList offers={displayedOffers} />
        )}
        {displayedOffers.length < filteredOffers.length && (
              <div className="text-center mt-8">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              >
                 Voir plus
              </button>
            </div>
        )}
      </div>
    </div>
  );
}
