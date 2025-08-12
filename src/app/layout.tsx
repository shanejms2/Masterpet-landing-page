import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import MainWrapper from "@/components/MainWrapper";
import NAPSchema from "@/components/NAPSchema";
import FooterWrapper from '@/components/FooterWrapper';
import AnnouncementBannerWrapper from "@/components/AnnouncementBannerWrapper";

export const metadata: Metadata = {
  title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
  description: "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by 1000+ pet parents. Book your session today!",
  keywords: ["pet grooming near me", "dog grooming kochi", "cat grooming ernakulam", "at-home pet grooming", "mobile pet grooming", "dog nail cutting near me", "pet grooming home service", "Masterpet", "Kochi pet grooming"],
  authors: [{ name: "Masterpet Care Private Limited" }],
  creator: "Masterpet Care Private Limited",
  publisher: "Masterpet Care Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://masterpet.co.in'),
  alternates: {
    canonical: 'https://masterpet.co.in',
  },
  openGraph: {
    title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
    description: "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by 1000+ pet parents. Book your session today!",
    url: 'https://masterpet.co.in',
    siteName: 'Masterpet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Masterpet - Professional At-Home Pet Grooming Service in Kochi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
    description: "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by 1000+ pet parents. Book your session today!",
    images: ['/og-image.jpg'],
    creator: '@masterpet_official',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <NAPSchema />
        <link rel="apple-touch-icon" sizes="180x180" href="/brand_assets/Profile/Favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brand_assets/Profile/Favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brand_assets/Profile/Favicon/favicon-16x16.png" />
        <link rel="manifest" href="/brand_assets/Profile/Favicon/site.webmanifest" />
        <meta name="theme-color" content="#caf857" />
        <meta name="msapplication-TileColor" content="#1b1582" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0GBLF1WP82"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0GBLF1WP82');
            `,
          }}
        />
      </head>
      <body className="font-gliker bg-background min-h-screen">
        <AnnouncementBannerWrapper />
        <NavbarWrapper />
        {/*
          The background color is set using the semantic Tailwind class 'bg-background',
          which references the CSS variable --background for easy theming and configuration.
        */}
        <MainWrapper>
          {children}
        </MainWrapper>
        <FooterWrapper />
      </body>
    </html>
  );
}
