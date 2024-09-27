import React from 'react'
import DaisyconTool from '@/components/DaisyconTool'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'

// Exportation de l'objet Metadata
export const metadata: Metadata = {
  title: "Comparateur d'offres télécom - Trouvez les meilleurs forfaits mobiles et internet",
  description: "Comparez les offres des opérateurs télécom pour trouver les meilleurs forfaits mobiles et internet en France. Profitez de notre outil pour économiser sur vos abonnements.",
}

const Page = () => {
  return (
    <div>
      <HeroSection />
      <DaisyconTool />
    </div>
  )
}

export default Page
