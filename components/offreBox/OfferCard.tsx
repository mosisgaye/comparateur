import React from 'react';
import type { Offre } from '@/app/lib/types/box-internet';

interface OfferCardProps {
  offer: Offre;
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all flex flex-col items-center text-center">
      {/* Logo de l'opérateur */}
      <div className="mb-4">
        <img
          src={offer.operateur.logo}
          alt={offer.operateur.nom}
          className="h-10 w-auto"
        />
      </div>

      {/* Titre de l'offre */}
      <h2 className="text-xl font-bold text-black mb-2">WIFI 7</h2>

      {/* Prix */}
      <p className="text-2xl font-bold text-blue-600 mb-4">{offer.prix} €/mois</p>

      {/* Détails supplémentaires */}
      <div className="text-sm text-black space-y-1 mb-6">
        <p>
          <span className="font-bold">Vitesse de téléchargement :</span> {offer.vitesseFormattee}
        </p>
        <p>
          <span className="font-bold">Upload :</span> {offer.uploadFormate}
        </p>
        <p>
          <span className="font-bold">Technologie :</span> {offer.typeTechno}
        </p>
      </div>

      {/* Actions */}
      <div className="flex space-x-4 w-full justify-center">
        <a
          href={offer.urlDetail}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Voir l'offre
        </a>
        <button className="flex-1 px-4 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">
          Être rappelé
        </button>
      </div>
    </div>
  );
}
