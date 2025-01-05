import React from "react";
import { Download, Wifi, Tv } from "lucide-react";
import OfferCard from "./OfferCard";
import { offers } from "./offersData";

const BboxOffers = () => {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-Black mb-16">
          Découvrez nos offres Bbox
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <OfferCard key={index} offer={offer} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default BboxOffers;