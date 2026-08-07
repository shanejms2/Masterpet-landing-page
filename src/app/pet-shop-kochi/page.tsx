import type { Metadata } from "next";
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import PetShopPageContent from "@/components/pet-shop/PetShopPageContent";
import { absoluteUrl, COMPANY_INFO } from "@/lib/constants";
import { PET_SHOP } from "@/lib/pet-shop";

const title = "Pet Shop in Vennala, Kochi | Masterpet Pet Store";
const description =
  "Masterpet pet shop in Vennala, Kochi — pet food, treats, accessories & essentials. Opposite St. Mathews Church, Vennala High School Rd. Serving Palarivattom, Kaloor, Edappally & nearby.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pet shop Kochi",
    "pet store Kochi",
    "pet shop Vennala",
    "pet store Vennala",
    "pet shop Palarivattom",
    "pet shop Kaloor",
    "pet shop Edappally",
    "dog food Kochi",
    "cat food Kochi",
    "Masterpet Kochi",
  ],
  alternates: {
    canonical: PET_SHOP.path,
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(PET_SHOP.path),
    siteName: COMPANY_INFO.siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Masterpet Pet Shop in Vennala, Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
    creator: COMPANY_INFO.socialHandle,
  },
};

function PetShopJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Masterpet Kochi – Pet Store",
    image: absoluteUrl(COMPANY_INFO.logoPath),
    url: absoluteUrl(PET_SHOP.path),
    telephone: PET_SHOP.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.addressLine1,
      addressLocality: PET_SHOP.addressLocality,
      addressRegion: PET_SHOP.addressRegion,
      postalCode: PET_SHOP.postalCode,
      addressCountry: PET_SHOP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PET_SHOP.latitude,
      longitude: PET_SHOP.longitude,
    },
    openingHours: PET_SHOP.openingHoursSchema,
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "Place", name: "Vennala" },
      { "@type": "Place", name: "Palarivattom" },
      { "@type": "Place", name: "Kaloor" },
      { "@type": "Place", name: "Edappally" },
    ],
    sameAs: [COMPANY_INFO.googleBusinessUrl],
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY_INFO.legalName,
      url: COMPANY_INFO.website,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PetShopKochiPage() {
  return (
    <>
      <PetShopJsonLd />
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: absoluteUrl() },
          {
            name: "Pet Shop Kochi",
            url: absoluteUrl(PET_SHOP.path),
          },
        ]}
      />
      <BreadcrumbNavigation
        items={[{ label: "Pet Shop Kochi", href: PET_SHOP.path }]}
      />
      <PetShopPageContent />
    </>
  );
}
