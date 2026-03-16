import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import HeroScrollHandler from '@/components/HeroScrollHandler';
import { areaConfig, type AreaConfig } from '@/lib/areaConfig';
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

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
    title: `At-Home Pet Grooming in ${area.name}, ${COMPANY_INFO.serviceCity} | ${COMPANY_INFO.brandName}`,
    description: `Explore Masterpet service availability in ${area.name}, ${COMPANY_INFO.serviceCity}. For booking and full package details, visit our main ${COMPANY_INFO.serviceCity} pet grooming page.`,
    keywords: [
      `pet grooming ${area.name}`,
      `pet grooming ${area.name} Kochi`,
      `mobile pet grooming ${area.name}`,
      `dog grooming ${area.name}`,
      `cat grooming ${area.name}`,
      `at-home grooming ${area.name}`,
      `pet grooming services ${area.name}`,
    ],
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
      canonical: absoluteUrl(`/kochi-pet-grooming/${area.slug}`),
    },
    openGraph: {
      title: `At-Home Pet Grooming in ${area.name}, ${COMPANY_INFO.serviceCity} | ${COMPANY_INFO.brandName}`,
      description: `Explore Masterpet service availability in ${area.name}, ${COMPANY_INFO.serviceCity}. For booking and full package details, visit our main ${COMPANY_INFO.serviceCity} pet grooming page.`,
      url: absoluteUrl(`/kochi-pet-grooming/${area.slug}`),
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
      title: `At-Home Pet Grooming in ${area.name}, ${COMPANY_INFO.serviceCity} | ${COMPANY_INFO.brandName}`,
      description: `Explore Masterpet service availability in ${area.name}, ${COMPANY_INFO.serviceCity}. For booking and full package details, visit our main ${COMPANY_INFO.serviceCity} pet grooming page.`,
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
}

export default async function AreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = areaConfig.find(a => a.slug === areaSlug) as AreaConfig | undefined;
  
  if (!area) {
    notFound();
  }

  return (
    <>
      <HeroScrollHandler />
      <BreadcrumbNavigation 
        items={[
          { label: "Kochi Pet Grooming", href: "/kochi-pet-grooming" },
          { label: `${area.name} Pet Grooming` }
        ]} 
      />
      <KochiHeroSection area={area.name} />
      {/* Localized area content */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-blue font-bold mb-3">
              At-Home Pet Grooming in {area.name}
            </h2>
            <p className="font-body text-base md:text-lg text-brand-blue/80">
              {area.description && area.description.trim().length > 0
                ? area.description
                : `We serve pet parents in ${area.name} and nearby neighborhoods with at-home grooming for dogs and cats. Our mobile team visits popular pockets like ${area.neighborhoods.slice(0, 3).join(", ")} and surrounding residential areas, so your pet can be groomed without leaving home.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-lg text-brand-blue mb-3">Neighborhoods We Visit</h3>
              <ul className="list-disc pl-5 space-y-1 font-body text-sm text-brand-blue/80">
                {area.serviceCoverage.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg text-brand-blue mb-3">Local Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 font-body text-sm text-brand-blue/80">
                {area.localHighlights.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg text-brand-blue mb-3">What Pet Parents Say</h3>
              <ul className="space-y-3 font-body text-sm text-brand-blue/80">
                {area.testimonials.slice(0, 2).map((t) => (
                  <li key={t.author + t.location}>
                    <p className="mb-1">“{t.text}”</p>
                    <p className="text-xs text-brand-blue/60">
                      — {t.author}, {t.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
