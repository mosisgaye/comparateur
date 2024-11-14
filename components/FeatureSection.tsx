import React from 'react';
import FeatureCard from './FeatureCard';

interface FeatureSectionProps {
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description }) => (
  <div className="text-center py-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 mb-8">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <FeatureCard
        title="Box Internet Fibre"
        description="Découvrez les meilleures offres de box internet fibre avec des débits allant jusqu'à 8 Gb/s. Comparez les prix et choisissez sans engagement."
        buttonText="Voir les offres fibre"
        imageUrl="/images/fibre.jpg"
      />
      <FeatureCard
        title="Box Internet Pas Chères"
        description="Trouvez des box internet à petit prix. Comparez les meilleures offres et économisez sur votre abonnement."
        buttonText="Les box à moins"
        imageUrl="/images/cheap.jpg"
      />
      <FeatureCard
        title="Box Internet Sans Engagement"
        description="Profitez d'abonnements sans engagement. Comparez les offres et choisissez la box qui vous convient le mieux."
        buttonText="Voir les offres"
        imageUrl="/images/no-commitment.jpg"
      />
    </div>
  </div>
);

export default FeatureSection;
