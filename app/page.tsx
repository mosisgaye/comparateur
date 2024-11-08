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
        <HeroSection />
        <Carousel />
        <PopularRating />
        <Rating />
        <Article />
        <NewsletterSignup />     
      </main>
    </>
  );
}
