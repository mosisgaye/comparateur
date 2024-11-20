import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';


const Header = dynamic(() => import("@/components/Header"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://compareprix.net";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ComparePrix | Comparateur de Téléphones et Box Internet",
  description:
    "Trouvez les meilleures offres de téléphones et de box internet en France. Comparez les prix, les forfaits et les opérateurs pour faire le meilleur choix.",
  keywords: [
    "comparateur",
    "forfait mobile",
    "meilleur téléphone",
    "comparatif",
    "smartphone",
    "meilleur opérateur",
    "prix",
    "box internet",
    "énergie",
  ].join(", "),
  robots: "index, follow",
  openGraph: {
    title: "ComparePrix | Comparateur de Téléphones et Box Internet",
    description:
      "Comparez les meilleurs forfaits mobiles et box internet pour trouver l'offre qui vous convient.",
    url: "https://compareprix.net/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ComparePrix - Comparateur Télécom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@compareprix",
    title: "ComparePrix",
    description:
      "Découvrez les meilleures offres de téléphones et box internet en France.",
    image: "/images/og-image.jpg",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
       <Head>   
        <link rel="canonical" href="https://compareprix.net" />
      </Head>
      <GoogleTagManager gtmId="GTM-P4RJN9DT" />
      <body className="bg-gray-50">     
       <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-PJ9RE52R47" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
