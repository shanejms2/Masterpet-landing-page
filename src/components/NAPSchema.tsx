import {
  buildAggregateRatingSchema,
  buildFeaturedReviewSchema,
} from "@/lib/business-schema";
import { absoluteUrl, COMPANY_INFO } from "@/lib/constants";

const NAPSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Masterpet Kochi – Pet Store, Pet Grooming and At-Home Mobile Grooming",
    image: absoluteUrl(COMPANY_INFO.logoPath),
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.addressLine1,
      addressLocality: COMPANY_INFO.addressLocality,
      addressRegion: COMPANY_INFO.addressRegion,
      postalCode: COMPANY_INFO.postalCode,
      addressCountry: COMPANY_INFO.addressCountry,
    },
    telephone: COMPANY_INFO.phoneDisplay,
    url: COMPANY_INFO.website,
    openingHours: COMPANY_INFO.openingHoursSchema,
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.latitude,
      longitude: COMPANY_INFO.longitude,
    },
    sameAs: [
      COMPANY_INFO.googleBusinessUrl,
      `https://wa.me/${COMPANY_INFO.whatsappNumber}`,
      ...COMPANY_INFO.socialUrls,
    ],
    priceRange: "₹₹",
    aggregateRating: buildAggregateRatingSchema(),
    review: buildFeaturedReviewSchema(),
    serviceType: "Pet Grooming Service",
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Ernakulam" },
      { "@type": "Place", name: "Vennala" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet Grooming Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Groom",
            description: "Essential care for a fresh, clean, and happy pet",
          },
          price: "1599",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hygiene Package",
            description: "Mini Groom plus hygiene-focused fur trimming",
          },
          price: "1999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Groom",
            description: "The ultimate spa experience for your pet",
          },
          price: "2599",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default NAPSchema;
