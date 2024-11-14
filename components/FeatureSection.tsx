// components/FeatureSection.tsx

import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, buttonText, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
        {buttonText}
      </button>
    </div>
  </div>
);

const FeatureSection: React.FC = () => (
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