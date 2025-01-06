'use client';

import React, { useEffect } from 'react';
import Banner1 from '@/components/Banner1';
import SansEngagement from '@/components/bouygues/SansEngagement';
import FiberOffers from '@/components/Fiber-offers';
import Boxg from '@/components/bouygues/Boxg';

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tracking.publicidees.com/showcode.php?partid=63879&progid=5334&promoid=165600";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-8 ">
      {/* Banner Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Découvrez nos offres</h2>
        <div className="flex justify-center gap-4">
          {/* Bouygues Ads */}
          <a href="https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264468" target="_blank" className="transition-transform transform hover:scale-105">
            <img src="https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264468&noret=" alt="Bouygues Offre 1" className="w-full max-w-md rounded-lg shadow-lg" />
          </a>
          <a href="https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264437" target="_blank" className="transition-transform transform hover:scale-105">
            <img src="https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264437&noret=" alt="Bouygues Offre 2" className="w-full max-w-md rounded-lg shadow-lg" />
          </a>
          <a href="https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264406" target="_blank" className="transition-transform transform hover:scale-105">
            <img src="https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264406&noret=" alt="Bouygues Offre 3" className="w-full max-w-md rounded-lg shadow-lg" />
          </a>
        </div>
      </div>
      <Banner1 />
      <SansEngagement />
      <FiberOffers />
      <Boxg />
    </div>
  );
};

export default Page;
