import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Wifi, Gauge } from 'lucide-react'
import Link from "next/link"

export default function BoxOffers() {
  const offers = [
    {
      title: "4G box -26 ans",
      description: "Branchez et surfez en illimité en 4G",
      price: "25",
      cents: "99",
      image: "https://www.bouyguestelecom.fr/static/wbm/assets/offres-internet/offres/4g-box/images/4g-box-front_D@2x.png",
      features: [
        {
          icon: <Gauge className="w-5 h-5 text-[#1b365d]" />,
          text: "Haut débit 4G jusqu'à"
        }
      ]
    },
    {
      title: "5G box -26 ans",
      description: "Branchez et surfez en illimité en 5G",
      price: "29",
      cents: "99",
      image: "https://bouyguestelecom.fr/static/wbm/media/fai/5g-box.webp",
      features: [
        {
          icon: <Gauge className="w-5 h-5 text-[#1b365d]" />,
          text: "Très haut débit 5G jusqu'à +1,1 Gb/s ↑58 Mb/s"
        },
        {
          icon: <Wifi className="w-5 h-5 text-[#1b365d]" />,
          text: "WiFi 6"
        }
      ]
    }
  ]

  return (
    <section className="mx-auto px-4 py-16 bg-gradient-to-r from-[#f3f4f6] to-[#e3f2fd]">
      <h1 className="text-4xl font-bold text-center text-[#1b365d] mb-12">
        Nos offres -26 ans
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <Card key={offer.title} className="border-0 shadow-lg">
            <CardHeader className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#1b365d]">{offer.title}</h2>
                <p className="text-gray-600">{offer.description}</p>
              </div>
              <div className="h-48 flex items-center justify-center">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-40 object-contain"
                />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#1b365d]">
                    {offer.price}
                  </span>
                  <span className="text-2xl font-bold text-[#1b365d]">
                    €{offer.cents}
                  </span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <p className="text-gray-600 mt-1">Sans engagement</p>
              </div>
              <Link href={''} className="target=">
              <Button 
                className="w-full bg-[#ff6f00] hover:bg-[#ff8f00] text-white font-medium rounded-full"
              >
                Choisir cette box
              </Button>
              </Link>
              <div className="mt-6 space-y-4 bg-gray-50 p-4 rounded-lg">
                {offer.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>

          
          </Card>
        ))}
      </div>
    </section>
  )
}

