'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Phone, Download } from 'lucide-react'

// Définition des types pour les données des offres
type Feature = {
  icon: JSX.Element;
  text: string;
  details?: string;
};

type Offer = {
  price: string;
  cents: string;
  title: string;
  subtitle: string;
  features: Feature[];
};

const offers: Record<string, Offer> = {
  'pure-fiber': {
    price: '23',
    cents: '99',
    title: 'B&YOU Pure fibre',
    subtitle: 'Enfin un super flux, sans superflu',
    features: [
      {
        icon: <Download className="w-5 h-5" />,
        text: 'Fibre ultra-rapide jusqu\'à',
        details: '↓ 8 Gb/s ↑ 1 Gb/s',
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        text: 'WIFI 6E + répéteur en option',
      },
      {
        icon: <Phone className="w-5 h-5" />,
        text: 'Assistance 24h/24 via l\'application et par téléphone les 2 premiers mois',
      },
    ],
  },
  'fiber-tv': {
    price: '29',
    cents: '99',
    title: 'Série spéciale Bbox',
    subtitle: 'Le WiFi n°1 sans engagement',
    features: [
      {
        icon: <Download className="w-5 h-5" />,
        text: 'Fibre très rapide jusqu\'à',
        details: '↓ 1 Gb/s ↑ 700 Mb/s',
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        text: 'WIFI 6',
      },
      {
        icon: <Tv className="w-5 h-5" />,
        text: 'Box TV 4K + 180 chaines',
      },
      {
        icon: <Phone className="w-5 h-5" />,
        text: 'Assistance 24h/24 via l\'application et par téléphone les 2 premiers mois',
      },
    ],
  },
};

export default function FiberOffers() {
  const [selectedOffer, setSelectedOffer] = useState<keyof typeof offers>('pure-fiber');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#003B73]">
        {"Nos offres fibre sans engagement"}
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
          {"Quelle offre vous faut-il ?"}
        </h2>
        <RadioGroup
          defaultValue="pure-fiber"
          onValueChange={(value: string) => setSelectedOffer(value as keyof typeof offers)}
          className="flex justify-center gap-4"
        >
          <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <RadioGroupItem value="pure-fiber" id="pure-fiber" />
            <span className="font-medium">Pure fibre</span>
          </label>
          <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <RadioGroupItem value="fiber-tv" id="fiber-tv" />
            <span className="font-medium">Fibre + TV</span>
          </label>
        </RadioGroup>
      </div>

      <Card className="overflow-hidden transition-all duration-300">
        <CardHeader className="bg-[#003B73] text-white text-center p-8">
          <div className="flex justify-center items-baseline mb-4">
            <span className="text-5xl font-bold">{offers[selectedOffer].price}</span>
            <span className="text-2xl font-semibold">{"€"}</span>
            <span className="text-2xl font-semibold">{offers[selectedOffer].cents}</span>
            <span className="text-lg ml-2">/mois</span>
          </div>
          <p className="text-sm opacity-90">sans engagement</p>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-bold mb-2 text-[#003B73]">
            {offers[selectedOffer].title}
          </CardTitle>
          <p className="text-gray-600 mb-6">{offers[selectedOffer].subtitle}</p>

          <div className="space-y-6">
            {offers[selectedOffer].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#003B73]">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-gray-700">{feature.text}</p>
                  {feature.details && (
                    <p className="text-sm text-gray-500">{feature.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-8 bg-gradient-to-r from-[#ff9800] to-[#ff5722] rounded-3xl text-slate-50 text-xl">
            {"Voir les détails de l'offre"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
