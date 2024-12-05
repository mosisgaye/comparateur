'use client';

import { useEffect, useState } from 'react';
import { fetchBoxOffers } from '@/app/lib/api/offers';
import type { Commercial } from '@/app/lib/types/box-internet';
import FilterBar from '@/components/offreBox/FilterBar';
import OfferGrid from '@/components/offreBox/OfferGrid';

export default function BoxPage() {
  const [data, setData] = useState<Commercial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ operateur: '', techno: '' });

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await fetchBoxOffers();
        setData(response.commercial);
      } catch {
        setError('Impossible de charger les offres. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    }

    loadOffers();
  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const filteredOffers = data?.offres.filter((offer) => {
    const matchesOperateur = filters.operateur ? offer.operateur.nom === filters.operateur : true;
    const matchesTechno = filters.techno ? offer.typeTechno === filters.techno : true;
    return matchesOperateur && matchesTechno;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Box Internet</h1>
          <p className="text-lg text-gray-600">
            Comparez et trouvez le Box Internet qui vous correspond
          </p>
        </div>
        <FilterBar
          operateurs={data!.filtres.operateurs}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <OfferGrid offers={filteredOffers || []} />
      </div>
    </div>
  );
}
