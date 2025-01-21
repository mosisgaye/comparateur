import OfferCard from "@/components/bouygues/OfferCard"
import SectionTitle from "@/components/bouygues/SectionTitle"

export default function Home() {
  const mobileOffers = [
    {
      title: "100 Go pour 11,99€/mois",
      description: "Profitez d'un forfait complet avec 100 Go en 5G sans engagement.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=265008&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=265008",
    },
    {
      title: "200 Go pour 13,99€/mois",
      description: "Accédez à plus de data en 5G pour un prix compétitif.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264463&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264463",
    },
    {
      title: "300 Go pour 18,99€/mois",
      description: "Une offre idéale pour les gros consommateurs de data.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=264432&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=264432",
    },
    {
      title: "20 Go pour 7,99€/mois",
      description: "Une offre économique pour un usage modéré.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=262842&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=262842",
    },
    {
      title: "2 Go pour 1,99€/mois",
      description: "L'offre parfaite pour rester connecté à petit prix.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=262765&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=262765",
    },
  ]

  const fiberOffers = [
    {
      title: "Internet Fibre à 23,99€/mois",
      description: "Passez à la vitesse supérieure avec la fibre Bouygues Telecom.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=263363&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=263363",
    },
    {
      title: "Internet Fibre à 17,99€/mois",
      description: "Une offre fibre à un prix attractif pour votre foyer.",
      imageUrl: "https://tracking.publicidees.com/banner.php?partid=63879&progid=5334&promoid=248162&noret=",
      ctaUrl: "https://tracking.publicidees.com/clic.php?partid=63879&progid=5334&promoid=248162",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <SectionTitle title="Forfaits mobiles sans engagement" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {mobileOffers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>

      <SectionTitle title="Offres fibre sans engagement" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fiberOffers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  )
}

