import { OfferCard } from './OfferCard';
import type { Offre } from '@/app/lib/types/offers';

interface OffersListProps {
  offers: Offre[];
}

export function OffersList({ offers }: OffersListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}