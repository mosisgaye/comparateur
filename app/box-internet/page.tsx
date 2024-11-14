import NewsletterSignup from '@/components/NewsletterSignup';
import { createClient } from '@supabase/supabase-js';

// Interface pour définir la structure des offres
export interface BoxInternetOffer {
  id: number;
  url_image: string;
  offer_name: string;
  wifi_type: string;
  connection_type: string;
  speed: string;
  price: string;
  conditions: string | null;
  button_labels: string[];
  labels: string[];
  info_link: string;
}

export default async function MobilePlans() {
  // Créer un client Supabase à l'aide des variables d'environnement
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Récupérer les données des offres
  const { data: offers, error } = await supabase.from('box_internet').select('*');

  // Vérification des erreurs
  if (error) {
    return <p className="text-red-500">Erreur lors du chargement des données : {error.message}</p>;
  }

  // Vérification si les offres sont vides
  if (!offers || offers.length === 0) {
    return <p className="text-gray-500">Aucune offre disponible</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Bannière publicitaire SFR */}
      <div className="mb-8">
        <a rel="sponsored" href="https://www.awin1.com/cread.php?s=2332994&v=7315&q=309018&r=1749047">
          <img
            src="https://www.awin1.com/cshow.php?s=2332994&v=7315&q=309018&r=1749047"
            alt="Publicité SFR"
            className="w-full h-auto object-contain"
          />
        </a>
      </div>

      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Nos Offres Internet</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer: BoxInternetOffer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out border border-gray-200"
          >
            <img
              src={offer.url_image}
              alt={offer.offer_name}
              className="w-auto h-32 object-contain bg-gray-50 p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{offer.offer_name}</h2>
              <p className="text-sm text-gray-500 mb-2">Wi-Fi: {offer.wifi_type}</p>
              <p className="text-sm text-gray-500 mb-2">Connexion: {offer.connection_type}</p>
              <p className="text-sm text-gray-500 mb-2">Vitesse: {offer.speed}</p>
              <p className="text-lg font-bold text-blue-600">{offer.price} €/mois</p>
              {offer.conditions && (
                <p className="text-xs text-gray-400 mt-1">Conditions: {offer.conditions}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {offer.button_labels.map((label, index) => (
                  <button
                    key={index}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg font-medium text-sm transition duration-200 hover:bg-blue-700 focus:outline-none"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">En savoir plus</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewsletterSignup title={''} description={''} />
    </div>
  );
}
