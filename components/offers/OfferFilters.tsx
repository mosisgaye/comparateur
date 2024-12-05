import type { Filtres } from '@/app/lib/types/offers';

interface OfferFiltersProps {
  filters: Filtres;
  onFilterChange: (filterType: string, value: string) => void;
}

export function OfferFilters({ filters, onFilterChange }: OfferFiltersProps) {
  return (
    <div className="sticky top-0 bg-blue-700 p-4 rounded-lg shadow-md border border-gray-200 z-10">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Filtre Opérateurs */}
        <div className="relative">
          <select
            className="px-4 py-3 bg-white text-blue-700 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onFilterChange('operateurs', e.target.value)}
          >
            <option value="">Choisir un opérateur</option>
            {filters.operateurs.map((operateur) => (
              <option key={operateur.id} value={operateur.slug}>
                {operateur.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Tri */}
        <div className="relative">
          <select
            className="px-4 py-3 bg-white text-blue-700 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onFilterChange('tri', e.target.value)}
          >
            <option value="asc">Croissant</option>
            <option value="desc">Décroissant</option>
          </select>
        </div>

        {/* Plus de filtres */}
        <div className="relative">
          <select
            className="px-4 py-3 bg-white text-blue-700 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onFilterChange('additionalFilters', e.target.value)}
          >
            <option value="">Plus de filtres</option>
            <option value="sansEngagement">Sans engagement</option>
            <option value="plusDe100Go">Plus de 100 Go</option>
            <option value="compatible5G">Compatible 5G</option>
          </select>
        </div>
      </div>
    </div>
  );
}
