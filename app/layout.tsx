import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsappWidget from "@/components/whatsapp-widget";
import MobileBottomBar from "@/components/mobile-bottom-bar";
import CookieConsent from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "مشاريع مدينة مصر للإسكان والتعمير | تاج سيتي وسراي وذا بترفلاي — أسعار وأنظمة سداد 2026",
  description:
    "كل مشاريع مدينة مصر للإسكان والتعمير في مكان واحد: تاج سيتي، سراي، ذا بترفلاي، تلالا ومول D2N. مساحات وأنظمة سداد تبدأ من 5% مقدم. اطلب كتالوج الأسعار المحدث.",
  keywords: [
    "مدينة مصر للإسكان والتعمير",
    "تاج سيتي",
    "كمبوند سراي",
    "ذا بترفلاي",
    "تلالا",
    "مول D2N",
    "أسعار مدينة مصر",
  ],
  openGraph: {
    title: "مشاريع مدينة مصر للإسكان والتعمير",
    description:
      "تاج سيتي، سراي، ذا بترفلاي، تلالا ومول D2N — مساحات وأسعار استرشادية وأنظمة سداد حتى 12 سنة.",
    type: "website",
    locale: "ar_EG",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0b1420" />
      </head>
      <body>
        {/* Google Ads / Analytics — بدّل المعرف في lib/site.ts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtagId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gtagId}');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappWidget />
        <MobileBottomBar />
        <CookieConsent />
      </body>
    </html>
  );
}
