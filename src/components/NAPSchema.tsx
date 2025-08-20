import React from "react";

const NAPSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Masterpet - Mobile At Home Pet Grooming Ernakulam",
    "image": "https://www.masterpet.co.in/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anu Villa, XVI / 80, Nethaji Rd, near YMCA Indoor Stadium, Periyar Nagar",
      "addressLocality": "Aluva",
      "addressRegion": "Kerala",
      "postalCode": "683101",
      "addressCountry": "IN"
    },
    "telephone": "+91 85906 43269",
    "url": "https://www.masterpet.co.in/",
    "openingHours": "Mo-Su 09:00-20:30",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.1065,
      "longitude": 76.3516
    },
    "sameAs": [
      "https://wa.me/918590643269"
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "413",
      "reviewCount": "413"
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
        "name": "Kochi"
      },
      {
        "@type": "City", 
        "name": "Ernakulam"
      },
      {
        "@type": "City",
        "name": "Aluva"
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