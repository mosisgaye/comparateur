import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Rating from "@/components/Rating";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
      
        <Banner 
          title="Comparez les Meilleurs Téléphones et Box Internet" 
          description="Utilisez notre comparateur pour trouver les meilleures offres de téléphones et de box internet en France. Économisez jusqu'à 400€ sur vos abonnements【2†source】."
        />
        <Carousel 
          title="Découvrez les Meilleures Offres de Téléphones" 
          description="Comparez les prix et les forfaits des meilleurs téléphones du marché. Profitez de ventes privées exclusives et de promotions Black Friday【6†source】【14†source】."
        />
        <FeatureSection 
          title="Les Téléphones les Plus Populaires" 
          description="Découvrez les téléphones les mieux notés par nos utilisateurs. Inclut des évaluations pour les derniers modèles et les meilleures ventes【49†source】."
        />
        <Rating 
          title="Évaluez Votre Téléphone" 
          description="Partagez votre avis sur les téléphones que vous avez testés. Aidez d'autres consommateurs à faire des choix éclairés【2†source】."
        />
        <Article 
          title="Guide d'Achat : Comment Choisir Votre Box Internet" 
          description="Trouvez la box internet qui vous convient le mieux grâce à notre guide d'achat complet. Apprenez tout sur la fibre optique et comment augmenter le débit de votre connexion【20†source】."
        />
        <NewsletterSignup 
          title="Inscrivez-vous à notre Newsletter" 
          description="Recevez les dernières offres et conseils sur les téléphones et box internet. Restez informé des dernières actualités et guides d'achat【18†source】."
        />     
      </main>
    </>
  );
}