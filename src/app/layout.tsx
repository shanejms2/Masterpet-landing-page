import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
        
        {/* Critical resource preloading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://obyaomptxztycjjakykm.supabase.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts with font-display: swap */}
        <link rel="preload" href="/fonts/Gliker-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Fractul-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        
        {/* Google Fonts for Blog - Noto Sans and Lora */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload critical images */}
        <link rel="preload" href="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg" as="image" type="image/svg+xml" />
        
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
            /* Critical CSS for above-the-fold content - optimized for performance */
            * { box-sizing: border-box; }
            
            html { 
              scroll-behavior: smooth; 
              text-rendering: optimizeSpeed;
            }
            
            body { 
              margin: 0; 
              padding: 0;
              font-family: 'Gliker', Arial, Helvetica, sans-serif;
              text-rendering: optimizeSpeed;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #fff;
              min-height: 100vh;
            }
            
            /* Optimize font loading with font-display: swap */
            @font-face {
              font-family: 'Gliker';
              src: url('/fonts/Gliker-Regular.woff2') format('woff2');
              font-display: swap;
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Fractul';
              src: url('/fonts/Fractul-Regular.ttf') format('truetype');
              font-display: swap;
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            
            /* Blog-specific fonts */
            .font-noto-sans { font-family: 'Noto Sans', Arial, sans-serif; }
            .font-lora { font-family: 'Lora', Georgia, serif; }
            
            /* Critical utility classes */
            .font-gliker { font-family: 'Gliker', Arial, sans-serif; }
            .font-fractul { font-family: 'Fractul', Arial, sans-serif; }
            .bg-background { background-color: #fff; }
            .bg-section-background { background-color: #0A0A90; }
            .text-brand-blue { color: #0A0A90; }
            .min-h-screen { min-height: 100vh; }
            
            /* Prevent layout shift for images */
            img { 
              max-width: 100%; 
              height: auto; 
              display: block;
            }
            
            /* Performance optimizations */
            .will-change-transform { will-change: transform; }
            .will-change-opacity { will-change: opacity; }
            .contain-layout { contain: layout; }
            .contain-paint { contain: paint; }
            
            /* Smooth transitions */
            .transition-smooth { 
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
            }
            
            /* Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
            
            /* Critical loading states */
            .loading-skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            
            /* Optimize for mobile */
            @media (max-width: 768px) {
              body { font-size: 16px; }
            }
          `
        }} />
        
        {/* Optimized Google Analytics - loaded asynchronously with minimal impact */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GBLF1WP82"
          strategy="afterInteractive"
          defer
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0GBLF1WP82', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                transport_type: 'beacon'
              });
            `,
          }}
        />
        
        {/* Performance monitoring */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals
              if ('PerformanceObserver' in window) {
                try {
                  const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                      if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                      }
                      if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                      }
                    }
                  });
                  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
                } catch (e) {
                  console.warn('Performance monitoring failed:', e);
                }
              }
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
