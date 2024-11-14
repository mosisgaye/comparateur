// components/FeatureSection.tsx

import React from 'react';
import FeatureCard from './FeatureCard';


interface FeatureSectionProps {
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description }) =>(
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl p-6">
      <FeatureCard
        title="Box Internet Fibre"
        description="Découvrez les meilleures offres de box internet fibre avec des débits allant jusqu'à 8 Gb/s. Comparez les prix et choisissez sans engagement."
        buttonText="Voir les offres fibre"
        imageUrl="/images/fibre.jpg" // Remplacez par l'URL de votre image
      />
      <FeatureCard
        title="Box Internet Pas Chères"
        description="Trouvez des box internet à petit prix. Comparez les meilleures offres et économisez sur votre abonnement."
        buttonText="Les box à moins"
        imageUrl="/images/cheap.jpg" // Remplacez par l'URL de votre image
      />
      <FeatureCard
        title="Box Internet Sans Engagement"
        description="Profitez d'abonnements sans engagement. Comparez les offres et choisissez la box qui vous convient le mieux."
        buttonText="Voir les offres"
        imageUrl="/images/no-commitment.jpg" // Remplacez par l'URL de votre image
      />
    </div>
  </div>
);

export default FeatureSection;
