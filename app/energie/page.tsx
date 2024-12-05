// energie/page.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <iframe
        src="https://services.bemove.fr/ouverture-compteurs-energie-compareprix"
        width="100%"
        height="800px"
        frameBorder="0"
        className="rounded-lg shadow-lg"
        title="Landing Page"
      />
    </div>
  );
};

export default LandingPage;
