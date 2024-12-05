import React, { useState } from "react";
import type { Operateur } from "@/app/lib/types/box-internet";

interface FilterBarProps {
  operateurs: Operateur[];
  onFilterChange: (filterType: string, value: string) => void;
  filters: { operateur: string; techno: string };
}

export default function FilterBar({
  operateurs,
  onFilterChange,
  filters,
}: FilterBarProps) {
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false); // État pour le tri

  return (
    <div className="bg-blue-700 p-4 flex flex-wrap items-center justify-center gap-4 shadow-md">
      {/* Bouton Testez votre adresse */}
      <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
        Testez votre adresse
      </button>

      {/* Filtre opérateurs */}
      <div className="relative">
        <select
          className="px-4 py-2 bg-white text-blue-700 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onFilterChange("operateur", e.target.value)}
          value={filters.operateur}
        >
          <option value="">Opérateurs</option>
          {operateurs.map((op) => (
            <option key={op.id} value={op.nom}>
              {op.nom}
            </option>
          ))}
        </select>
      </div>

      {/* Filtre réseaux */}
      <div className="relative">
        <select
          className="px-4 py-2 bg-white text-blue-700 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onFilterChange("techno", e.target.value)}
          value={filters.techno}
        >
          <option value="">Réseaux</option>
          <option value="fibre">Fibre</option>
          <option value="ADSL">ADSL</option>
          <option value="satellite">Satellite</option>
          <option value="cable">Câble</option>
          <option value="4gbox">4G Box</option>
        </select>
      </div>

      {/* Autres filtres */}
      <div className="relative">
        <button
          className="px-4 py-2 bg-white text-blue-700 border border-gray-300 rounded shadow hover:bg-gray-100"
          onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
        >
          Plus de filtres
        </button>
        {isMoreFiltersOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-md p-4 z-10">
            <p className="font-semibold text-blue-700 mb-2">Options :</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) =>
                    onFilterChange("moreFilters", "Internet seul")
                  }
                />
                Internet seul
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) =>
                    onFilterChange("moreFilters", "Sans engagement")
                  }
                />
                Sans engagement
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) =>
                    onFilterChange("moreFilters", "Avec Wi-Fi rapide")
                  }
                />
                Avec Wi-Fi rapide
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) =>
                    onFilterChange("moreFilters", "Avec un forfait 4G/5G inclus")
                  }
                />
                Avec un forfait 4G/5G inclus
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Trier */}
      <div className="relative">
        <button
          className="px-4 py-2 bg-white text-blue-700 border border-gray-300 rounded shadow hover:bg-gray-100"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          Tri
        </button>
        {isSortOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md p-2 z-10">
            <p className="font-semibold text-blue-700">Trier par :</p>
            <ul>
              <li>
                <button
                  onClick={() => {
                    onFilterChange("sort", "Prix croissant");
                    setIsSortOpen(false); // Fermer la liste après sélection
                  }}
                  className="w-full text-left hover:bg-gray-100 py-1 px-2 rounded"
                >
                  Prix croissant
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFilterChange("sort", "Prix décroissant");
                    setIsSortOpen(false);
                  }}
                  className="w-full text-left hover:bg-gray-100 py-1 px-2 rounded"
                >
                  Prix décroissant
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFilterChange("sort", "Popularité");
                    setIsSortOpen(false);
                  }}
                  className="w-full text-left hover:bg-gray-100 py-1 px-2 rounded"
                >
                  Popularité
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
