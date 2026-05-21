/** Shared review data for LocalBusiness JSON-LD (keep in sync with visible testimonials). */

export type FeaturedReview = {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
};

/** Platform review counts shown on the testimonials section (Google + Justdial). */
export const PLATFORM_REVIEW_COUNTS = {
  googleMaps: 231,
  justdial: 332,
} as const;

export const AGGREGATE_REVIEW_COUNT =
  PLATFORM_REVIEW_COUNTS.googleMaps + PLATFORM_REVIEW_COUNTS.justdial;

export const AGGREGATE_RATING_VALUE = "5.0";

export const FEATURED_REVIEWS: FeaturedReview[] = [
  {
    author: "Bimitha Sandeep",
    rating: 5,
    reviewBody:
      "My Bella has anxiety issues and gets stressed during grooming. Masterpet's at-home service was a game-changer! The team was so patient and created such a calm environment. Bella was relaxed throughout the entire process. Highly recommend to all pet parents!",
    datePublished: "2024-11-15",
  },
  {
    author: "Anju Mathew",
    rating: 5,
    reviewBody:
      "Exceptional service! The grooming van was spotless, staff was professional, and Leo looked absolutely handsome after his spa. Very reasonably priced for such quality home service. Will definitely book again!",
    datePublished: "2025-02-10",
  },
  {
    author: "Priya Thomas",
    rating: 5,
    reviewBody:
      "First time trying at-home grooming and I'm impressed! The convenience is unmatched. Max was so comfortable in his own environment. The groomer was skilled and gentle. Perfect service!",
    datePublished: "2025-03-05",
  },
];

export function buildFeaturedReviewSchema(reviews: FeaturedReview[] = FEATURED_REVIEWS) {
  return reviews.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
  }));
}

export function buildAggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING_VALUE,
    bestRating: "5",
    worstRating: "1",
    ratingCount: AGGREGATE_REVIEW_COUNT.toString(),
    reviewCount: AGGREGATE_REVIEW_COUNT.toString(),
  };
}
