import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://compareprix.net";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Compareprix | Comparateur de Téléphones et Box Internet",
  description: "Trouvez les meilleures offres de téléphones et de box internet en France. Comparez les prix, les forfaits et les opérateurs pour faire le meilleur choix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-P4RJN9DT" />
      <body>      
       
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-PJ9RE52R47" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}