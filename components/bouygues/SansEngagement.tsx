import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Signal, Plane, Phone } from 'lucide-react'

const plans = [
  {
    price: 1.99,
    data: '2Go',
    network: '4G',
    europeanData: '2 Go',
    url: 'https://tracking.publicidees.com/clic.php?promoid=155848&progid=5334&partid=63879', 
  },
  {
    price: 6.99,
    data: '20Go',
    network: '4G',
    europeanData: '16 Go',
    url: 'https://tracking.publicidees.com/clic.php?promoid=155848&progid=5334&partid=63879', 
  },
  {
    price: 9.99,
    data: '200Go',
    network: '5G',
    europeanData: '30 Go',
    isPopular: true,
    url: 'https://tracking.publicidees.com/clic.php?promoid=155848&progid=5334&partid=63879', 
  },
  {
    price: 17.99,
    data: '300Go',
    network: '5G',
    europeanData: '35 Go',
    url: 'https://tracking.publicidees.com/clic.php?promoid=155848&progid=5334&partid=63879', 
  },
]

export default function SansEngagement() {
  return (
    <div className="bg-gradient-to-r from-[#f3f4f6] to-[#e3f2fd] py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1a237e]">
            Nos forfaits mobiles sans engagement
          </h1>
          <Badge className="bg-[#ffecb3] text-[#ff9800] border-none px-4 py-2 rounded-full text-sm font-medium">
            Nouveau : eSIM disponible
          </Badge>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 bg-white border border-gray-200 sm:max-w-xs mx-auto"
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#ffa000] to-[#ff5722] text-white px-4 py-1 text-sm font-medium rounded-bl-2xl">
                  Populaire
                </div>
              )}
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#1a237e]">
                        {plan.price.toFixed(2)}€
                        <span className="text-lg font-normal text-gray-500">
                          /mois
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">Sans engagement</div>
                    </div>
                    <Badge
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        plan.network === '5G'
                          ? 'bg-[#c8e6c9] text-[#2e7d32]'
                          : 'bg-[#bbdefb] text-[#1e88e5]'
                      }`}
                    >
                      {plan.network}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-medium text-gray-700">
                      <Signal className="h-5 w-5 text-[#8bc34a]" />
                      Data : {plan.data}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Signal className="h-5 w-5" />
                      Qualité du réseau Bouygues Telecom
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Plane className="h-5 w-5" />
                      {plan.europeanData} utilisables en Europe/DOM
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone className="h-5 w-5" />
                      Appels & SMS/MMS illimités en France métropolitaine
                    </div>
                  </div>
                </div>

                <a href={plan.url} target="_blank">
                  <Button className="w-full bg-gradient-to-r from-[#ff9800] to-[#ff5722] hover:opacity-90 text-white font-medium py-3 rounded-full text-lg">
                    Choisir ce forfait
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

