import type { Metadata } from "next";
import KochiHeroSection from '@/components/KochiHeroSection';
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";
import AreaCarousel from '@/components/AreaCarousel';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import CommunitiesMarquee from '@/components/CommunitiesMarquee';
import VideoShowcaseSection from '@/components/VideoShowcaseSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import GoogleMapsSection from '@/components/GoogleMapsSection';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata: Metadata = {
  title: "At-Home Pet Grooming in Kochi | Professional Mobile Grooming Services",
  description: "Professional at-home pet grooming in Kochi. Trusted by 1000+ pet parents across Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep. Book your grooming session today!",
  keywords: ["pet grooming Kochi", "mobile pet grooming Kochi", "dog grooming Kochi", "cat grooming Kochi", "at-home grooming Kochi", "pet grooming services Kochi"],
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
    canonical: '/kochi-pet-grooming',
  },
  openGraph: {
    title: "At-Home Pet Grooming in Kochi | Professional Mobile Grooming Services",
    description: "Professional at-home pet grooming in Kochi. Trusted by 1000+ pet parents across Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep.",
    url: 'https://www.masterpet.co.in/kochi-pet-grooming',
    siteName: 'Masterpet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional At-Home Pet Grooming Services in Kochi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "At-Home Pet Grooming in Kochi | Professional Mobile Grooming Services",
    description: "Professional at-home pet grooming in Kochi. Trusted by 1000+ pet parents across Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep.",
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

export default function KochiPetGrooming() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://www.masterpet.co.in" },
          { name: "Kochi Pet Grooming", url: "https://www.masterpet.co.in/kochi-pet-grooming" },
        ]}
      />
      <BreadcrumbNavigation
        items={[{ label: "Kochi Pet Grooming", href: "/kochi-pet-grooming" }]}
      />
      <KochiHeroSection />
      <AreaCarousel />
      <CommunitiesMarquee />
      <VideoShowcaseSection />
      <PhotoGallerySection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <GoogleMapsSection />
      <FinalCTASection />
    </>
  );
}
