export const metadata = {
  title: "Box Internet - ComparePrix",
  description:
    "Découvrez les meilleures offres de box internet et comparez les prix des opérateurs pour trouver la box qui vous convient le mieux.",
  keywords: [
    "box internet",
    "comparateur de box",
    "meilleure box internet",
    "prix box internet",
    "comparatif box internet",
    "meilleur opérateur box",
    "offres box internet",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Box Internet - ComparePrix",
    description:
      "Comparez les meilleures offres de box internet et trouvez celle qui vous convient le mieux.",
    url: "https://compareprix.net/box-internet",
    type: "website",
  },
};

import NewsletterSignup from "@/components/NewsletterSignup";
import { createClient } from "@supabase/supabase-js";
import { featureSectionContent } from "@/constants/index";

export interface BoxInternetOffer {
  id: number;
  url_image: string;
  offer_name: string;
  wifi_type: string;
  connection_type: string;
  speed: string;
  price: string;
  conditions: string | null;
  affiliation_url: string | undefined;
  details_url: string | undefined;
}

export default async function MobilePlans() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Récupérer les données des offres
  const { data: offers, error } = await supabase
    .from("box_internet")
    .select("*");

  // Vérification des erreurs
  if (error) {
    return (
      <p className="text-red-500">
        Erreur lors du chargement des données : {error.message}
      </p>
    );
  }

  // Vérification si les offres sont vides
  if (!offers || offers.length === 0) {
    return <p className="text-gray-500">Aucune offre disponible</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Bannière publicitaire SFR */}
      <div className="mb-8">
        <a
          rel="sponsored"
          href="https://www.awin1.com/cread.php?s=2332994&v=7315&q=309018&r=1749047"
        >
          <img
            src="https://www.awin1.com/cshow.php?s=2332994&v=7315&q=309018&r=1749047"
            alt="Publicité SFR"
            className="w-full h-auto object-contain"
          />
        </a>
      </div>

      {/* Utilisation du titre et de la description de FeatureSection */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        {featureSectionContent.title}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        {featureSectionContent.description}
      </p>
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
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {offer.offer_name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Wi-Fi: {offer.wifi_type}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Connexion: {offer.connection_type}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Vitesse: {offer.speed}
              </p>
              <p className="text-lg font-bold text-blue-600">
                {offer.price} €/mois
              </p>
              {offer.conditions && (
                <p className="text-xs text-gray-400 mt-1">
                  Conditions: {offer.conditions}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
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
                  target="_blank"
                  rel="rel= sponsored"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewsletterSignup title={""} description={""} />
    </div>
  );
}
