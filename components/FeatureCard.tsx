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

export default FeatureCard;
