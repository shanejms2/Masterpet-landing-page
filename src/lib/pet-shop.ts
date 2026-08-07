import { COMPANY_INFO } from "@/lib/constants";

/** Physical Masterpet pet shop (Vennala) — distinct from mobile grooming service area copy */
export const PET_SHOP = {
  name: "Masterpet Pet Shop",
  headline: "Pet Shop in Vennala, Kochi",
  description:
    "Your neighbourhood pet store in Vennala for food, treats, accessories, and everyday pet essentials — plus at-home grooming across Kochi.",
  addressLine1: "Vadakkadath Building, 42/563, Vennala High School Rd",
  addressLandmark: "Opposite St. Mathews Church",
  addressLocality: "Vennala",
  addressCity: "Kochi",
  addressRegion: "Kerala",
  postalCode: "682028",
  addressCountry: "IN",
  fullAddress:
    "Vadakkadath Building, 42/563, Vennala High School Rd, opposite St. Mathews Church, Vennala, Kochi, Ernakulam, Kerala 682028",
  hoursDisplay: COMPANY_INFO.hoursDisplay,
  openingHoursSchema: COMPANY_INFO.openingHoursSchema,
  phone: COMPANY_INFO.phone,
  phoneDisplay: COMPANY_INFO.phoneDisplay,
  mapsUrl: COMPANY_INFO.googleBusinessUrl,
  latitude: 9.9945,
  longitude: 76.3258,
  path: "/pet-shop-kochi",
} as const;

export type NearbyArea = {
  name: string;
  blurb: string;
};

/** Localities near Vennala — used for local intent + conversion CTAs */
export const VENNALA_NEARBY_AREAS: NearbyArea[] = [
  { name: "Palarivattom", blurb: "5–10 min from the shop" },
  { name: "Kaloor", blurb: "Easy hop from Kaloor Junction" },
  { name: "Kathrikadavu", blurb: "Neighbouring Vennala" },
  { name: "Chakkaraparambu", blurb: "Close by for quick pickups" },
  { name: "Elamakkara", blurb: "Short ride to Vennala" },
  { name: "Mamangalam", blurb: "Nearby residential pocket" },
  { name: "Thrikkakara", blurb: "Convenient for east Kochi" },
  { name: "Edappally", blurb: "North of Vennala" },
  { name: "Pipeline Road", blurb: "Quick access corridor" },
  { name: "Vyttila", blurb: "South Kochi, easy drive" },
  { name: "Kadavanthra", blurb: "Central Kochi access" },
  { name: "Ponekkara", blurb: "Close residential area" },
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
