import React from "react";
import { OfferType } from "@/components/bouygues/types";

interface OfferCardProps {
  offer: OfferType;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <img
            src={offer.image}
            alt={offer.name}
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-2xl font-bold text-blue-900">{offer.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{offer.description}</p>
        
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <div className="text-3xl font-bold text-blue-900 mb-2">
            {offer.price}
            <span className="text-sm font-normal text-gray-600 ml-2">
              /mois
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Puis {offer.after12Months} après 12 mois
          </p>
          <p className="text-sm text-gray-600">
            Engagement : {offer.engagement}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {offer.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <feature.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        <a
          href={offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-orange-500 text-white text-center py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Je choisis cette offre
        </a>
      </div>
    </div>
  );
};

export default OfferCard;