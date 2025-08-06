import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import MainWrapper from "@/components/MainWrapper";
import NAPSchema from "@/components/NAPSchema";
import FooterWrapper from '@/components/FooterWrapper';
import AnnouncementBanner from "@/components/AnnouncementBanner";

export const metadata: Metadata = {
  title: "Masterpet - At-Home Pet Grooming in Kochi",
  description: "Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep. Trusted by 1000+ pet parents & top communities in Kerala.",
  keywords: ["pet grooming", "at-home grooming", "Kochi", "dog grooming", "cat grooming", "Masterpet"],
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
    canonical: '/',
  },
  openGraph: {
    title: "Masterpet - At-Home Pet Grooming in Kochi",
    description: "Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep. Trusted by 1000+ pet parents & top communities in Kerala.",
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
    title: "Masterpet - At-Home Pet Grooming in Kochi",
    description: "Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep. Trusted by 1000+ pet parents & top communities in Kerala.",
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
      </head>
      <body className="font-gliker bg-background min-h-screen">
        <AnnouncementBanner />
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
