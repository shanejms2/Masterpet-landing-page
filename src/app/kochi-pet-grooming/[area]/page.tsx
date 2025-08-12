import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NAPSchema from "@/components/NAPSchema";
import KochiHeroSection from '@/components/KochiHeroSection';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import AreaCarousel from '@/components/AreaCarousel';
import CommunitiesMarquee from '@/components/CommunitiesMarquee';
import VideoShowcaseSection from '@/components/VideoShowcaseSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import { areaConfig } from '@/lib/areaConfig';

interface PageProps {
  params: Promise<{
    area: string;
  }>;
}

// Generate static params for all areas
export async function generateStaticParams() {
  return areaConfig.map((area) => ({
    area: area.slug,
  }));
}

// Generate metadata for each area
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = areaConfig.find(a => a.slug === areaSlug);
  
  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `At-Home Pet Grooming in ${area.name}, Kochi | Professional Mobile Grooming Services`,
    description: `Professional at-home pet grooming in ${area.name}, Kochi. Trusted by pet parents in ${area.name}. Hygienic, stress-free grooming for your dogs and cats at your doorstep. Book your grooming session in ${area.name} today!`,
    keywords: [
      `pet grooming ${area.name}`,
      `pet grooming ${area.name} Kochi`,
      `mobile pet grooming ${area.name}`,
      `dog grooming ${area.name}`,
      `cat grooming ${area.name}`,
      `at-home grooming ${area.name}`,
      `pet grooming services ${area.name}`,
    ],
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
      canonical: `/kochi-pet-grooming/${area.slug}`,
    },
    openGraph: {
      title: `At-Home Pet Grooming in ${area.name}, Kochi | Professional Mobile Grooming Services`,
      description: `Professional at-home pet grooming in ${area.name}, Kochi. Trusted by pet parents in ${area.name}. Hygienic, stress-free grooming for your dogs and cats at your doorstep.`,
      url: `https://www.masterpet.co.in/kochi-pet-grooming/${area.slug}`,
      siteName: 'Masterpet',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Professional At-Home Pet Grooming Services in ${area.name}, Kochi`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `At-Home Pet Grooming in ${area.name}, Kochi | Professional Mobile Grooming Services`,
      description: `Professional at-home pet grooming in ${area.name}, Kochi. Trusted by pet parents in ${area.name}. Hygienic, stress-free grooming for your dogs and cats at your doorstep.`,
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
}

export default async function AreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = areaConfig.find(a => a.slug === areaSlug);
  
  if (!area) {
    notFound();
  }

  return (
    <>
      <NAPSchema />
      <BreadcrumbNavigation 
        items={[
          { label: "Kochi Pet Grooming", href: "/kochi-pet-grooming" },
          { label: `${area.name} Pet Grooming` }
        ]} 
      />
      <KochiHeroSection area={area.name} />
      <AreaCarousel currentArea={area.slug} />
      <CommunitiesMarquee />
      <VideoShowcaseSection />
      <PhotoGallerySection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
