import { Metadata } from 'next';
import Banner from '@/components/Banner';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Rating from '@/components/Rating';
import AdBanner from '@/components/AdBanner';
import { Feedback } from '@/components/Feedback';
import { ChatWidget } from '@/components/ChatWidget';
import Faq from '@/components/Faq';

import {
  bannerContent,
  featureSectionContent,
  ratingContent,
  newsletterSignupContent,
} from '@/constants/index';

export const metadata: Metadata = {
  title: 'ComparePrix - Comparez et économisez',
  description: 'Trouvez les meilleures offres et comparez les prix sur ComparePrix',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section avec animation */}
      <section aria-labelledby="banner-title" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <Banner
          title={bannerContent.title}
          description={bannerContent.description}
        />
      </section>

      {/* Features Section avec design moderne */}
      <section aria-labelledby="features-title" className="py-20 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <FeatureSection
            title={featureSectionContent.title}
            description={featureSectionContent.description}
          />
        </div>
      </section>

      {/* Rating Section avec glassmorphism */}
      <section aria-labelledby="rating-title" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative z-10">
          <Rating
            title={ratingContent.title}
            description={ratingContent.description}
          />
        </div>
      </section>

      {/* Ad Banner Section */}
      <section aria-label="Offres spéciales" className="py-16 bg-white/80 backdrop-blur-sm">
        <AdBanner />
      </section>

      {/* FAQ Section */}
      <section aria-label="Questions fréquentes" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <Faq />
      </section>

      {/* Newsletter Section avec design premium */}
      <section aria-labelledby="newsletter-title" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 py-20">
          <NewsletterSignup
            title={newsletterSignupContent.title}
            description={newsletterSignupContent.description}
          />
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed bottom-24 right-6 z-40">
        <Feedback />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </main>
  );
}