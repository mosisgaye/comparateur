import React from 'react'
import HeroSection from '@/components/HeroSection'
import KwankoTool from '@/components/KwankoTool'
import type { Metadata } from 'next'

// Exportation de l'objet Metadata
export const metadata: Metadata = {
  title: "Comparateur eSIM - Trouvez les meilleures offres eSIM pour mobiles en France",
  description: "Comparez les offres eSIM des opérateurs mobiles en France. Utilisez notre outil pour choisir la meilleure solution eSIM et profitez d'une connectivité mobile instantanée sans carte SIM physique.",
}

const Page = () => {
  return (
    <div>
      <HeroSection title={''} description={''} />
      <KwankoTool />
    </div>
  )
}

export default Page
