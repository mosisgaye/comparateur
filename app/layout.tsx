import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://compareprix.net";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    "Compareprix | comparateur des offres en énergie et en télécommunication",
  description:
    "Comparateur des offres en énergie et en télécommunication en France et en Belgique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-P4RJN9DT" />
      <body className="bg-background text-foreground dark:bg-[#012737]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=d747ff48-3194-452d-be17-cf1203ca346b"
        />
        <GoogleAnalytics gaId="G-PJ9RE52R47" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
