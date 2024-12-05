import React from 'react';
import type { Offre } from '@/app/lib/types/box-internet';
import OfferCard from './OfferCard';

interface OfferGridProps {
  offers: Offre[];
}

export default function OfferGrid({ offers }: OfferGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
