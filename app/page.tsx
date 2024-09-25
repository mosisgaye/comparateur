import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import PopularRating from "@/components/PopularRating";


export default async function Index() {
  return (
    <>
  
      <main className="flex-1 flex flex-col gap-6 px-4">
        <HeroSection />
        <Carousel />
        <NewsletterSignup />
        <PopularRating />
       
        
      </main>
    </>
  );
}
