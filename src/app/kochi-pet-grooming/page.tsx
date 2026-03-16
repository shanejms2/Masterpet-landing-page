import type { Metadata } from "next";
import KochiHeroSection from '@/components/KochiHeroSection';
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
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: `At-Home Pet Grooming in ${COMPANY_INFO.serviceCity} | Professional Mobile Grooming Services`,
  description: "Professional at-home pet grooming in Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep across Kochi and surrounding areas. Book your grooming session today!",
  keywords: ["pet grooming Kochi", "mobile pet grooming Kochi", "dog grooming Kochi", "cat grooming Kochi", "at-home grooming Kochi", "pet grooming services Kochi"],
  authors: [{ name: COMPANY_INFO.legalName }],
  creator: COMPANY_INFO.legalName,
  publisher: COMPANY_INFO.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(COMPANY_INFO.website),
  alternates: {
    canonical: '/kochi-pet-grooming',
  },
  openGraph: {
    title: `At-Home Pet Grooming in ${COMPANY_INFO.serviceCity} | Professional Mobile Grooming Services`,
    description: "Professional at-home pet grooming in Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep across Kochi and surrounding areas.",
    url: absoluteUrl('/kochi-pet-grooming'),
    siteName: COMPANY_INFO.siteName,
    images: [
      {
        url: absoluteUrl(COMPANY_INFO.logoPath),
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.brandName} logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
      title: `At-Home Pet Grooming in ${COMPANY_INFO.serviceCity} | Professional Mobile Grooming Services`,
      description: "Professional at-home pet grooming in Kochi. Hygienic, stress-free grooming for dogs and cats at your doorstep across Kochi and surrounding areas.",
      images: [absoluteUrl(COMPANY_INFO.logoPath)],
      creator: COMPANY_INFO.socialHandle,
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
};

export default function KochiPetGrooming() {
  return (
    <>
      <BreadcrumbNavigation 
        items={[
          { label: "Kochi Pet Grooming", href: "/kochi-pet-grooming" }
        ]} 
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
