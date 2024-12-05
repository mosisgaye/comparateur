import type { Filtres } from '@/app/lib/types/offers';

interface OfferFiltersProps {
  filters: Filtres;
  onFilterChange: (filterType: string, value: string) => void;
}

export function OfferFilters({ filters, onFilterChange }: OfferFiltersProps) {
  return (
    <div className="bg-blue-700 p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Bouton Testez votre adresse */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
          Testez votre adresse
        </button>

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

        {/* Filtre Réseaux */}
     

        {/* Plus de filtres */}
        <div className="relative">
          <button className="px-4 py-3 bg-white text-blue-700 border border-gray-300 rounded shadow hover:bg-gray-100">
            Plus de filtres
          </button>
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
      </div>
    </div>
  );
}
