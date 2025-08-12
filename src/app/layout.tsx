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
  metadataBase: new URL('https://www.masterpet.co.in'),
  alternates: {
    canonical: 'https://www.masterpet.co.in',
  },
  openGraph: {
    title: "Masterpet - At-Home Pet Grooming in Kochi | Professional Dog & Cat Grooming",
    description: "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi. Trusted by 1000+ pet parents. Book your session today!",
    url: 'https://www.masterpet.co.in',
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
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://obyaomptxztycjjakykm.supabase.co" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Fractul-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gliker-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/brand_assets/Profile/Favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brand_assets/Profile/Favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brand_assets/Profile/Favicon/favicon-16x16.png" />
        <link rel="manifest" href="/brand_assets/Profile/Favicon/site.webmanifest" />
        <meta name="theme-color" content="#caf857" />
        <meta name="msapplication-TileColor" content="#1b1582" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Critical CSS inlined to prevent render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: 'Gliker', Arial, sans-serif; }
            .font-gliker { font-family: 'Gliker', Arial, sans-serif; }
            .bg-background { background-color: #fff; }
            .text-brand-blue { color: #0A0A90; }
            .min-h-screen { min-height: 100vh; }
            
            /* Prevent layout shift */
            img { max-width: 100%; height: auto; }
            
            /* Smooth scrolling */
            html { scroll-behavior: smooth; }
            
            /* Optimize font loading */
            @font-face {
              font-family: 'Gliker';
              src: url('/fonts/Gliker-Regular.woff2') format('woff2');
              font-display: swap;
              font-weight: 400;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'Fractul';
              src: url('/fonts/Fractul-Regular.ttf') format('truetype');
              font-display: swap;
              font-weight: 400;
              font-style: normal;
            }
          `
        }} />
        
        {/* Optimized Google Analytics - loaded asynchronously */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GBLF1WP82"
          async
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0GBLF1WP82', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />
      </head>
      <body className="font-gliker bg-background min-h-screen">
        <AnnouncementBannerWrapper />
        <NavbarWrapper />
        <MainWrapper>
          {children}
        </MainWrapper>
        <FooterWrapper />
      </body>
    </html>
  );
}
