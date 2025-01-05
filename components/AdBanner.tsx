// components/OffersSection.tsx
import Image from 'next/image'

const offers = [
  {
    id: 1,
    href: "https://www.awin1.com/cread.php?s=3408192&v=7315&q=309019&r=1749047",
    imgSrc: "https://www.awin1.com/cshow.php?s=3408192&v=7315&q=309019&r=1749047",
    altText: "SFR FR Offer 1",
  },
  {
    id: 2,
    href: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=263564",
    imgSrc: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=263564&noret=",
    altText: "Public Ideas Offer",
  },
  {
    id: 3,
    href: "https://www.awin1.com/cread.php?s=2856460&v=7315&q=309012&r=1749047",
    imgSrc: "https://www.awin1.com/cshow.php?s=2856460&v=7315&q=309012&r=1749047",
    altText: "SFR FR Offer 2",
  },

];

const AdBanner: React.FC = () => {
  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Nos Offres Spéciales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <a href={offer.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={offer.imgSrc}
                  alt={offer.altText}
                  width={500}
                  height={250}
                  layout="intrinsic"
                  className="w-full h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdBanner;
