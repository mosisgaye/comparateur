import React from 'react';
import FeatureCard from './FeatureCard';

interface FeatureSectionProps {
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description }) => (
  <div className="text-center py-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-600 mb-8">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <FeatureCard
        title="Box Internet Fibre"
        description="Découvrez les meilleures offres de forfait internet avec box internet fibre, incluant des débits allant jusqu'à 8 Gb/s. Comparez les prix des opérateurs comme Orange et Bouygues, et choisissez sans engagement."
        buttonText="Voir les offres"
        imageUrl="/images/fibre.jpg"
      />
      <FeatureCard
        title="Box Internet A petit prix"
        description="Découvrez les meilleures offres de forfait internet avec box internet fibre, incluant des débits allant jusqu'à 8 Gb/s. Comparez les prix des opérateurs comme Orange et Bouygues, et choisissez sans engagement."
        buttonText="Voir les offres"
        imageUrl="/images/cheap.jpg"
      />
      <FeatureCard
        title="Box Internet Sans Engagement"
        description="Bénéficiez d'abonnements sans obligation. Évaluez les différentes options et sélectionnez la box qui vous correspond le mieux"
        buttonText="Voir les offres"
        imageUrl="/images/no-commitment.jpg"
      />
    </div>
  </div>
);

export default FeatureSection;
