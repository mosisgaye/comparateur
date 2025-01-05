import React from "react";

const BouyguesTelecomPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Offre Bouygues Telecom</h1>
      <a
        href="https://tracking.publicidees.com/clic.php?promoid=200235&progid=5334&partid=63879"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Bouygues Telecom
      </a>
      <img
        src="https://tracking.publicidees.com/link.php?promoid=200235&progid=5334&partid=63879"
        alt="Tracking Pixel"
        height="1"
        width="1"
       
      />
    </div>
  );
};

export default BouyguesTelecomPage;
