import dynamic from 'next/dynamic';
import Head from 'next/head';
import Banner from '@/components/Banner';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Rating from '@/components/Rating';

import {
  bannerContent,
  carouselContent,
  featureSectionContent,
  ratingContent,
  newsletterSignupContent,
} from '@/constants/index';
import AdBanner from '@/components/AdBanner';

export default function Index() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://compareprix.net" />
      </Head>
      <main className="flex-1 flex flex-col gap-6 px-4">
        {/* Section Bannière */}
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
            description={ratingContent.description}
          />
        </section>   
          <AdBanner />
 
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
