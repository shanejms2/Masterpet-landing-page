import {
  AGGREGATE_REVIEW_COUNT,
  buildAggregateRatingSchema,
  buildFeaturedReviewSchema,
} from "@/lib/business-schema";

const NAPSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Masterpet - Mobile At Home Pet Grooming Ernakulam",
    image: "https://www.masterpet.co.in/logo.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Anu Villa, XVI / 80, Nethaji Rd, near YMCA Indoor Stadium, Periyar Nagar",
      addressLocality: "Aluva",
      addressRegion: "Kerala",
      postalCode: "683101",
      addressCountry: "IN",
    },
    telephone: "+91 85906 43269",
    url: "https://www.masterpet.co.in/",
    openingHours: "Mo-Su 09:00-20:30",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.1065,
      longitude: 76.3516,
    },
    sameAs: ["https://wa.me/918590643269"],
    priceRange: "₹₹",
    aggregateRating: buildAggregateRatingSchema(),
    review: buildFeaturedReviewSchema(),
    serviceType: "Pet Grooming Service",
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Ernakulam" },
      { "@type": "City", name: "Aluva" },
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
