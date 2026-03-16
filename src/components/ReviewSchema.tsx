import React from "react";
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

interface ReviewSchemaProps {
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews = [] }) => {
  // Default reviews if none provided
  const defaultReviews = [
    {
      author: "Bimitha Sandeep",
      rating: 5,
      reviewBody: "My Bella has anxiety issues and gets stressed during grooming. Masterpet's at-home service was a game-changer! The team was so patient and created such a calm environment. Bella was relaxed throughout the entire process. Highly recommend to all pet parents!",
      datePublished: "2024-11-15"
    },
    {
      author: "Anju Mathew", 
      rating: 5,
      reviewBody: "Exceptional service! The grooming van was spotless, staff was professional, and Leo looked absolutely handsome after his spa. Very reasonably priced for such quality home service. Will definitely book again!",
      datePublished: "2025-02-10"
    },
    {
      author: "Priya Thomas",
      rating: 5, 
      reviewBody: "First time trying at-home grooming and I'm impressed! The convenience is unmatched. Max was so comfortable in his own environment. The groomer was skilled and gentle. Perfect service!",
      datePublished: "2025-03-05"
    }
  ];

  const reviewData = reviews.length > 0 ? reviews : defaultReviews;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.brandName,
    "alternateName": COMPANY_INFO.legalName,
    "url": COMPANY_INFO.website,
    "image": absoluteUrl(COMPANY_INFO.logoPath),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "4", 
      "ratingCount": "512",
      "reviewCount": "512"
    },
    "review": reviewData.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ReviewSchema;
