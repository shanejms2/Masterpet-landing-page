import { COMPANY_INFO } from "@/lib/constants";

/** Physical Masterpet pet shop (Vennala) — aligned with sitewide COMPANY_INFO NAP */
export const PET_SHOP = {
  name: "Masterpet Pet Shop",
  headline: "Pet Shop in Vennala, Kochi",
  description:
    "Your neighbourhood pet store in Vennala for food, treats, accessories, and everyday pet essentials — plus at-home grooming across Kochi.",
  addressLine1: "Vadakkadath Building, 42/563, Vennala High School Rd",
  addressLandmark: "Opposite St. Mathews Church",
  addressLocality: COMPANY_INFO.addressLocality,
  addressCity: COMPANY_INFO.addressCity,
  addressRegion: COMPANY_INFO.addressRegion,
  postalCode: COMPANY_INFO.postalCode,
  addressCountry: COMPANY_INFO.addressCountry,
  fullAddress: `${COMPANY_INFO.addressLine1}, ${COMPANY_INFO.addressLocality}, ${COMPANY_INFO.addressCity}, ${COMPANY_INFO.addressRegion} ${COMPANY_INFO.postalCode}`,
  hoursDisplay: COMPANY_INFO.hoursDisplay,
  openingHoursSchema: COMPANY_INFO.openingHoursSchema,
  phone: COMPANY_INFO.phone,
  phoneDisplay: COMPANY_INFO.phoneDisplay,
  mapsUrl: COMPANY_INFO.googleBusinessUrl,
  latitude: COMPANY_INFO.latitude,
  longitude: COMPANY_INFO.longitude,
  path: "/pet-shop-kochi",
} as const;

export type NearbyArea = {
  name: string;
  blurb: string;
  /** Matching /kochi-pet-grooming/[slug] when available */
  groomingSlug?: string;
};

/** Localities near Vennala — local intent + conversion CTAs */
export const VENNALA_NEARBY_AREAS: NearbyArea[] = [
  { name: "Palarivattom", blurb: "5–10 min from the shop", groomingSlug: "palarivattom" },
  { name: "Kaloor", blurb: "Easy hop from Kaloor Junction", groomingSlug: "kaloor" },
  { name: "Kathrikadavu", blurb: "Neighbouring Vennala" },
  { name: "Chakkaraparambu", blurb: "Close by for quick pickups" },
  { name: "Elamakkara", blurb: "Short ride to Vennala" },
  { name: "Mamangalam", blurb: "Nearby residential pocket" },
  { name: "Thrikkakara", blurb: "Convenient for east Kochi", groomingSlug: "thrikkakara" },
  { name: "Edappally", blurb: "North of Vennala", groomingSlug: "edapally" },
  { name: "Pipeline Road", blurb: "Quick access corridor" },
  { name: "Vyttila", blurb: "South Kochi, easy drive", groomingSlug: "vytilla" },
  { name: "Kadavanthra", blurb: "Central Kochi access", groomingSlug: "kadavantra" },
  { name: "Ponekkara", blurb: "Close residential area" },
  { name: "Vennala", blurb: "Our shop neighbourhood", groomingSlug: "vennala" },
  { name: "Kakkanad", blurb: "East Kochi / Infopark side", groomingSlug: "kakkanad" },
];

export const PET_SHOP_CATEGORIES = [
  {
    title: "Pet food & nutrition",
    description: "Dog and cat food, treats, and everyday nutrition essentials.",
  },
  {
    title: "Accessories & gear",
    description: "Collars, leashes, bowls, beds, and travel must-haves.",
  },
  {
    title: "Grooming essentials",
    description: "Shampoos, brushes, and care products used by our groomers.",
  },
  {
    title: "At-home grooming",
    description: "Book mobile grooming across Kochi — same Masterpet team.",
  },
] as const;

export const PET_SHOP_REACH_TIPS = [
  {
    title: "Landmark",
    detail: "Opposite St. Mathews Church on Vennala High School Road.",
  },
  {
    title: "From Palarivattom",
    detail: "A short drive toward Vennala — ask Maps for “Masterpet Kochi” or Vennala High School Rd.",
  },
  {
    title: "From Kaloor / Edappally",
    detail: "Head toward Vennala via the main corridor; the shop is near St. Mathews Church.",
  },
  {
    title: "Parking & visit",
    detail: "Street access on Vennala High School Rd. WhatsApp us before you come if you need something specific.",
  },
] as const;

export const PET_SHOP_FAQS = [
  {
    question: "What are your pet shop hours?",
    answer: `We're open daily ${COMPANY_INFO.hoursDisplay}.`,
  },
  {
    question: "What do you sell at the Vennala shop?",
    answer:
      "Pet food, treats, accessories, bowls, collars, and grooming essentials for dogs and cats. Ask in-store or on WhatsApp for current stock.",
  },
  {
    question: "Is this the same place I book at-home grooming?",
    answer:
      "Yes — Masterpet. Visit the Vennala shop for supplies, or book mobile at-home grooming across Kochi from the same team.",
  },
  {
    question: "How do I get directions?",
    answer:
      "Search Masterpet on Google Maps, or use Get directions on this page. We're opposite St. Mathews Church, Vennala High School Road.",
  },
] as const;
