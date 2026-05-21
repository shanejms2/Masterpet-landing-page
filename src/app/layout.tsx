import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import NavbarWrapper from "@/components/NavbarWrapper";
import NAPSchema from "@/components/NAPSchema";
import FooterWrapper from "@/components/FooterWrapper";
import AnnouncementBannerWrapper from "@/components/AnnouncementBannerWrapper";
import { lora, notoSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
  description:
    "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by pet parents across Kochi and surrounding areas. Book your session today!",
  keywords: [
    "pet grooming near me",
    "dog grooming kochi",
    "cat grooming ernakulam",
    "at-home pet grooming",
    "mobile pet grooming",
    "dog nail cutting near me",
    "pet grooming home service",
    "Masterpet",
    "Kochi pet grooming",
  ],
  authors: [{ name: "Masterpet Care Private Limited" }],
  creator: "Masterpet Care Private Limited",
  publisher: "Masterpet Care Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.masterpet.co.in"),
  alternates: {
    canonical: "https://www.masterpet.co.in",
  },
  openGraph: {
    title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
    description:
      "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by pet parents across Kochi and surrounding areas. Book your session today!",
    url: "https://www.masterpet.co.in",
    siteName: "Masterpet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Masterpet - Professional At-Home Pet Grooming Service in Kochi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
    description:
      "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by pet parents across Kochi and surrounding areas. Book your session today!",
    images: ["/og-image.jpg"],
    creator: "@masterpet_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#caf857",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${lora.variable}`}>
      <head>
        <NAPSchema />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://obyaomptxztycjjakykm.supabase.co" />
        <link
          rel="preload"
          href="/fonts/Gliker-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Fractul-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/brand_assets/Profile/Favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/brand_assets/Profile/Favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/brand_assets/Profile/Favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/brand_assets/Profile/Favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1b1582" />
      </head>
      <body className="font-gliker bg-background min-h-screen">
        <AnnouncementBannerWrapper />
        <NavbarWrapper />
        <main>{children}</main>
        <FooterWrapper />
        <SpeedInsights />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GBLF1WP82"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GBLF1WP82', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              transport_type: 'beacon'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
