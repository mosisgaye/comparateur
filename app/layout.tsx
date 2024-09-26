import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head"; // Import the Head component

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://compareprix.net";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Compareprix | comparateur des offres en énergie et en télécommunication",
  description: "Comparateur des offres en énergie et en télécommunication en France et en Belgique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <Head>
        {/* Adding the Cookiebot script in the <head> */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="081766f4-b9a1-41f5-b8d2-3dadb5bd1e10"
          data-blockingmode="auto"
          type="text/javascript"
        />
        {/* Google Tag Manager script in the <head> */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P4RJN9DT');`
        }} />
      </Head>
      <body className="bg-background text-foreground dark:bg-[#012737]">
        {/* Google Tag Manager (noscript) just after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4RJN9DT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
      </body>
    </html>
  );
}
