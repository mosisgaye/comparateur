import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 max-w-xs mx-auto">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <button
        className="mt-4 px-4 py-2 bg-[#B83280] text-white hover:bg-[#B83280] transition duration-300"
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default FeatureCard;
