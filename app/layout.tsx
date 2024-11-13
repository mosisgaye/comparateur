import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
    <html lang="fr" className={GeistSans.className} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-P4RJN9DT" />
      <body>
        {/* Intégration du script CookieHub */}
        <Script src="https://cdn.cookiehub.eu/c2/04c588a3.js" strategy="afterInteractive" />
        <Script id="cookiehub-init" strategy="afterInteractive">
          {`
            document.addEventListener("DOMContentLoaded", function(event) {
              var cpm = {};
              window.cookiehub.load(cpm);
            });
          `}
        </Script>
        
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