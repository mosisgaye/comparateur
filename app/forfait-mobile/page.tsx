import NewsletterSignup from '@/components/NewsletterSignup';
import { createClient } from '@/utils/supabase/server';

interface Offer {
  affiliation_url: string | undefined;
  id: number;
  data_volume: string;
  prix_mensuel: number;
  offer_label: string;
  details_url: string;
  image_url: string;
  provider: string;
}

export default async function MobilePlans() {
  const supabase = createClient();
  const { data: offers, error } = await supabase.from('forfait-mobile').select('*');

  if (error) {
    return <p className="text-red-500">Erreur lors du chargement des données : {error.message}</p>;
  }

  if (!offers || offers.length === 0) {
    return <p className="text-gray-500">Aucune offre disponible</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-8">
        <a
          rel="sponsored"
          href="https://www.awin1.com/cread.php?s=2467984&v=7315&q=309012&r=1749047"
          target="_blank"
        >
          <img
            src="https://www.awin1.com/cshow.php?s=2467984&v=7315&q=309012&r=1749047"
            alt="SFR Offer"
            className="mx-auto"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Comparez les Meilleurs Forfaits Mobiles des Opérateurs Télécoms
      </h1>
      <p className="text-lg text-center mb-6 text-gray-600">
        Utilisez notre comparateur pour trouver le forfait mobile qui vous convient le mieux et économisez sur votre abonnement.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer: Offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {offer.offer_label && (
              <span className="mb-4 px-4 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                {offer.offer_label}
              </span>
            )}
            <img
              src={offer.image_url}
              alt={`Logo de ${offer.provider}`}
              className="w-20 h-20 mb-4 object-contain"
            />
            <p className="text-gray-600 text-lg mb-4">{offer.data_volume}</p>
            <p className="text-blue-600 text-3xl font-bold mb-4">{`${offer.prix_mensuel} €`}</p>
            <a
              href={offer.details_url}
              className="mb-2 inline-block w-full text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l'offre
            </a>
            <a
              href={offer.affiliation_url}
              className="text-blue-500 hover:underline text-sm mt-1"
              
            >
              En savoir plus
            </a>
          </div>
        ))}
      </div>
      <NewsletterSignup title={''} description={''} />
    </div>
  );
}
