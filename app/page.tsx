export const metadata = {
  title: "ComparePrix - Comparateur de Forfaits Mobiles",
  description:
    "Découvrez les meilleurs forfaits mobiles et comparez les offres des opérateurs télécoms pour trouver le forfait qui vous convient le mieux.",
  keywords: [
    "comparateur",
    "forfait mobile",
    "meilleur téléphone",
    "comparatif",
    "smartphone",
    "meilleur opérateur",
    "prix",
    "box internet",
    "énergie",
  ].join(", "), // Mettez les mots-clés sous forme de chaîne
  robots: "index, follow",
  openGraph: {
    title: "ComparePrix - Comparateur de Forfaits Mobiles",
    description:
      "Comparez les meilleurs forfaits mobiles et trouvez l'offre qui vous convient le mieux.",
    url: "https://compareprix.net/",
    type: "website",
  },
};

import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import FeatureSection from "@/components/FeatureSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Rating from "@/components/Rating";

import {
  bannerContent,
  carouselContent,
  featureSectionContent,
  ratingContent,
  articleContent,
  newsletterSignupContent,
} from "@/constants/index";

export default function Index() {
  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <Banner
        title={bannerContent.title}
        description={bannerContent.description}
      />
      <Carousel
        title={carouselContent.title}
        description={carouselContent.description}
      />
      <FeatureSection
        title={featureSectionContent.title}
        description={featureSectionContent.description}
      />
      <Rating
        title={ratingContent.title}
        description={ratingContent.description}
      />
      <Article
        title={articleContent.title}
        description={articleContent.description}
      />
      <NewsletterSignup
        title={newsletterSignupContent.title}
        description={newsletterSignupContent.description}
      />
    </main>
  );
}
