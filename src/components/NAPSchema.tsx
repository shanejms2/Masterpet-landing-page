import React from "react";
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

const NAPSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.brandName,
    "alternateName": COMPANY_INFO.legalName,
    "description": COMPANY_INFO.businessDescription,
    "image": absoluteUrl(COMPANY_INFO.logoPath),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.addressLine1,
      "addressLocality": COMPANY_INFO.addressLocality,
      "addressRegion": COMPANY_INFO.addressRegion,
      "postalCode": COMPANY_INFO.postalCode,
      "addressCountry": COMPANY_INFO.addressCountry
    },
    "telephone": COMPANY_INFO.phoneDisplay,
    "email": COMPANY_INFO.email,
    "url": COMPANY_INFO.website,
    "openingHours": COMPANY_INFO.openingHoursSchema,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.1065,
      "longitude": 76.3516
    },
    "sameAs": [
      COMPANY_INFO.googleBusinessUrl,
      COMPANY_INFO.justdialUrl,
      `https://wa.me/${COMPANY_INFO.whatsappNumber}`
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "512",
      "reviewCount": "512"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Bimitha Sandeep"
        },
        "datePublished": "2024-11-15",
        "reviewBody": "My Bella has anxiety issues and gets stressed during grooming. Masterpet's at-home service was a game-changer! The team was so patient and created such a calm environment. Bella was relaxed throughout the entire process. Highly recommend to all pet parents!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Anju Mathew"
        },
        "datePublished": "2025-02-10",
        "reviewBody": "Exceptional service! The grooming van was spotless, staff was professional, and Leo looked absolutely handsome after his spa. Very reasonably priced for such quality home service. Will definitely book again!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Priya Thomas"
        },
        "datePublished": "2025-03-05",
        "reviewBody": "First time trying at-home grooming and I'm impressed! The convenience is unmatched. Max was so comfortable in his own environment. The groomer was skilled and gentle. Perfect service!"
      }
    ],
    "serviceType": "Pet Grooming Service",
    "areaServed": [
      {
        "@type": "City",
        "name": COMPANY_INFO.serviceCity
      },
      {
        "@type": "AdministrativeArea",
        "name": COMPANY_INFO.serviceRegion
      },
      {
        "@type": "City",
        "name": COMPANY_INFO.addressLocality
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pet Grooming Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mini Groom",
            "description": "Essential care for a fresh, clean, and happy pet"
          },
          "price": "1599",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hygiene Package",
            "description": "Mini Groom plus hygiene-focused fur trimming"
          },
          "price": "1999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Groom",
            "description": "The ultimate spa experience for your pet"
          },
          "price": "2599",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default NAPSchema; 