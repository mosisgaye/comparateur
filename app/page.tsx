import Head from "next/head";
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
import HomePage from "./blog/page";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://compareprix.net" />
      </Head>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <section aria-labelledby="banner">
          <Banner
            title={bannerContent.title}
            description={bannerContent.description}
          />
        </section>

        {/* Section Fonctionnalités */}
        <section aria-labelledby="features">
          <FeatureSection
            title={featureSectionContent.title}
            description={featureSectionContent.description}
          />
        </section>

        {/* Section Avis & Notations */}
        <section aria-labelledby="rating">
          <Rating
            title={ratingContent.title}
            description={ratingContent.description} />
        </section>

        {/* Section Blog */}  
        <HomePage />
        {/* Section Carrousel */}
        <section aria-labelledby="carousel">
          <Carousel
            title={carouselContent.title}
            description={carouselContent.description}
          />
        </section>
        {/* Section Newsletter */}
        <section aria-labelledby="newsletter" className="py-10">
          <NewsletterSignup
            title={newsletterSignupContent.title}
            description={newsletterSignupContent.description}
          />
        </section>
      </main>
    </>
  );
}
