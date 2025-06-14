import React from "react";

const NAPSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Masterpet - Mobile At Home Pet Grooming Ernakulam",
    "image": "/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anu Villa, XVI / 80, Nethaji Rd, near YMCA Indoor Stadium, Periyar Nagar",
      "addressLocality": "Aluva",
      "addressRegion": "Kerala",
      "postalCode": "683101",
      "addressCountry": "IN"
    },
    "telephone": "+91 85906 43269",
    "url": "https://masterpet.co.in/",
    "openingHours": "Mo-Su 09:00-20:30",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.1065,
      "longitude": 76.3516
    },
    "sameAs": [
      "https://wa.me/918590643269"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default NAPSchema; 