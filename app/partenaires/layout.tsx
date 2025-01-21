import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offres Bouygues - ComparePrix',
  description: 'Découvrez les meilleures offres Bouygues sur ComparePrix. Comparez et économisez sur vos forfaits mobiles et box internet.',
  openGraph: {
    title: 'Offres Bouygues - ComparePrix',
    description: 'Découvrez les meilleures offres Bouygues sur ComparePrix. Comparez et économisez sur vos forfaits mobiles et box internet.',
    images: [
      {
        url: 'https://compareprix.net/images/bouygues-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Offres Bouygues sur ComparePrix',
      },
    ],
  },
};

export default function BouyguesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}

