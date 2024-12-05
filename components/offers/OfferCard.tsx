import { Phone, Wifi, MessageSquare } from 'lucide-react';
import type { Offre } from '@/app/lib/types/offers';

interface OfferCardProps {
  offer: Offre;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <img 
          src={offer.operateur.logo} 
          alt={offer.operateur.nom}
          className="h-9 object-contain"
        />
        {offer.isStar && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Meilleure offre
          </span>
        )}
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <Wifi className="w-5 h-5 text-blue-600" />
          <span>{offer.internet}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-green-600" />
          <span>{offer.appels}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-purple-600" />
          <span>{offer.smsMms}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-2xl font-bold text-blue-600">{offer.prix}€<span className="text-sm text-gray-600">/mois</span></p>
          {offer.promo && (
            <p className="text-sm text-green-600">
              Promo: {offer.promo.prix}€ pendant {offer.promo.duree} mois
            </p>
          )}
        </div>
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voir l'offre
        </a>
      </div>
    </div>
  );
}