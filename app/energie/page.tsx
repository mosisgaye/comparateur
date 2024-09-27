import React from 'react'
import HeroSection from '@/components/HeroSection'
import EnergyTool from '@/components/EnergyTool'
import type { Metadata } from 'next'

// Exportation de l'objet Metadata
export const metadata: Metadata = {
  title: "Comparateur d'offres énergie - Trouvez les meilleurs tarifs gaz et électricité",
  description: "Comparez les offres d'énergie pour trouver les meilleurs tarifs de gaz et d'électricité en France. Utilisez notre outil pour économiser sur vos factures.",
}

const Page = () => {
  return (
    <div>
      <HeroSection />
      <EnergyTool />
    </div>
  )
}

export default Page
