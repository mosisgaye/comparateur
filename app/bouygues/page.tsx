'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { loadExternalScript } from '@/utils/scriptLoader';
import Banner1 from '@/components/Banner1';

const SansEngagement = dynamic(() => import('@/components/bouygues/SansEngagement'), {
  loading: () => <p>Chargement des offres sans engagement...</p>,
});
const FiberOffers = dynamic(() => import('@/components/Fiber-offers'), {
  loading: () => <p>Chargement des offres fibre...</p>,
});
const Boxg = dynamic(() => import('@/components/bouygues/Boxg'), {
  loading: () => <p>Chargement des box Bouygues...</p>,
});

interface BouyguesOffer {
  id: string;
  href: string;
  imgSrc: string;
  alt: string;
}

const bouyguesOffers: BouyguesOffer[] = [
  {
    id: '264468',
    href: 'https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264468',
    imgSrc: 'https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264468&noret=',
    alt: 'Bouygues Offre 1',
  },
  {
    id: '264437',
    href: 'https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264437',
    imgSrc: 'https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264437&noret=',
    alt: 'Bouygues Offre 2',
  },
  {
    id: '264406',
    href: 'https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264406',
    imgSrc: 'https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264406&noret=',
    alt: 'Bouygues Offre 3',
  },
];

const BouyguesPage: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    loadExternalScript("https://tracking.publicidees.com/showcode.php?partid=63879&progid=5334&promoid=165600")
      .then(() => setScriptLoaded(true))
      .catch((error) => console.error('Failed to load external script:', error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
      <section aria-labelledby="offers-title" className="space-y-6">
        <h2 id="offers-title" className="text-3xl font-semibold text-center text-gray-800">
          Découvrez nos offres Bouygues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bouyguesOffers.map((offer) => (
            <a
              key={offer.id}
              href={offer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Image
                src={offer.imgSrc}
                alt={offer.alt}
                width={400}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </a>
          ))}
        </div>
      </section>

      <Banner1 />
      
      <SansEngagement />
      
      <FiberOffers />
      
      <Boxg />

      {scriptLoaded && <div id="publicidees-script-container" />}
    </div>
  );
};

export default BouyguesPage;

