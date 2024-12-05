'use client'
import { useEffect, useState } from 'react';
import { fetchMobileOffers } from '@/app/lib/api/offers';
import { OffersList } from '@/components/offers/OffersList';
import { OfferFilters } from '@/components/offers/OfferFilters';
import type { Commercial } from '@/app/lib/types/offers';

export default function ForfaitsPage() {
  const [data, setData] = useState<Commercial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await fetchMobileOffers();
        setData(response.commercial);
      } catch (err) {
        setError('Impossible de charger les offres. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    }

    loadOffers();
  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    // Implement filter logic here
    console.log('Filter changed:', filterType, value);
  };

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Forfaits Mobiles
          </h1>
          <p className="text-lg text-gray-600">
            Comparez et trouvez le forfait mobile qui vous correspond
          </p>
        </div>

        <div className="space-y-8">
  <section>
    {data && <OfferFilters filters={data.filtres} onFilterChange={handleFilterChange} />}
  </section>
  <section>
    {data && <OffersList offers={data.offres} />}
  </section>
</div>

      </div>
    </div>
  );
}