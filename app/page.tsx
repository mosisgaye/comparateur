import Article from "@/components/Article";
import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import PopularRating from "@/components/PopularRating";
import Rating from "@/components/Rating";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <HeroSection 
          title="Comparez les Meilleurs Téléphones et Box Internet" 
          description="Utilisez notre comparateur pour trouver les meilleures offres de téléphones et de box internet en France."
        />
        <Carousel 
          title="Découvrez les Meilleures Offres de Téléphones" 
          description="Comparez les prix et les forfaits des meilleurs téléphones du marché."
        />
        <PopularRating 
          title="Les Téléphones les Plus Populaires" 
          description="Découvrez les téléphones les mieux notés par nos utilisateurs."
        />
        <Rating 
          title="Évaluez Votre Téléphone" 
          description="Partagez votre avis sur les téléphones que vous avez testés."
        />
        <Article 
          title="Guide d'Achat : Comment Choisir Votre Box Internet" 
          description="Trouvez la box internet qui vous convient le mieux grâce à notre guide d'achat."
        />
        <NewsletterSignup 
          title="Inscrivez-vous à notre Newsletter" 
          description="Recevez les dernières offres et conseils sur les téléphones et box internet."
        />     
      </main>
    </>
  );
}