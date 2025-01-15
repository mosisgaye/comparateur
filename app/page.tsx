import { Metadata } from 'next';
import Banner from '@/components/Banner';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Rating from '@/components/Rating';
import AdBanner from '@/components/AdBanner';
import { Feedback } from '@/components/Feedback';
import { ChatWidget } from '@/components/ChatWidget';

import {
  bannerContent,
  featureSectionContent,
  ratingContent,
  newsletterSignupContent,
} from '@/constants/index';
import Faq from '@/components/Faq';

export const metadata: Metadata = {
  title: 'ComparePrix - Comparez et économisez',
  description: 'Trouvez les meilleures offres et comparez les prix sur ComparePrix',
  
};



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section aria-labelledby="banner-title" className="relative">
        <Banner
          title={bannerContent.title}
          description={bannerContent.description}
        />
      </section>

      <section aria-labelledby="features-title" className="py-12">
        <FeatureSection
          title={featureSectionContent.title}
          description={featureSectionContent.description}
        />
      </section>

      <section aria-labelledby="rating-title" className="py-12 bg-white">
        <Rating
          title={ratingContent.title}
          description={ratingContent.description}
        />
      </section>

      <section aria-label="Offres spéciales" className="py-8">
        <AdBanner />
      </section>

      <section aria-labelledby="newsletter-title" className="py-12 bg-gray-50">
        <NewsletterSignup
          title={newsletterSignupContent.title}
          description={newsletterSignupContent.description}
        />
      </section>

      <div className="fixed bottom-24 right-6 z-40">
        <Feedback />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
      
    </main>
  );
}

