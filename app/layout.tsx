import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

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
      <Head>
        {/* Scripts existants */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PJ9RE52R47"
        ></script>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="081766f4-b9a1-41f5-b8d2-3dadb5bd1e10"
          data-blockingmode="auto"
          type="text/javascript"
        />

        {/* Script Mailchimp */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){
          m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,
          p.parentNode.insertBefore(m,p)
        }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/936adaeb91bfeb4db358a8ed7/1a3171a0f3d273130ffb6a988.js");`,
          }}
        />
      </Head>

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
      </body>
    </html>
  );
}
