export const COMPANY_INFO = {
  brandName: "Masterpet",
  legalName: "Masterpet Care Private Limited",
  website: "https://www.masterpet.co.in",
  siteName: "Masterpet",
  phone: "+918590643269",
  /** Must match Google Ads phone_conversion_number exactly (including spaces) */
  phoneDisplay: "+91 85906 43269",
  whatsappNumber: "918590643269",
  email: "hello@masterpet.co.in",
  socialHandle: "@masterpet_official",
  hoursDisplay: "9:00 AM - 9:00 PM",
  openingHoursSchema: "Mo-Su 09:00-21:00",
  /** Primary public NAP — matches Google Business Profile (Vennala shop) */
  addressLine1: "Vadakkadath Building, 42/563, Vennala High School Rd, opposite St. Mathews Church",
  addressLocality: "Vennala",
  addressCity: "Kochi",
  addressRegion: "Kerala",
  postalCode: "682028",
  addressCountry: "IN",
  latitude: 9.9945,
  longitude: 76.3258,
  serviceCity: "Kochi",
  serviceRegion: "Ernakulam district",
  serviceAreaText: "Kochi and surrounding areas in Ernakulam district, Kerala, India",
  businessDescription:
    "Pet store and professional at-home pet grooming for dogs and cats in Kochi and surrounding areas.",
  logoPath: "/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png",
  googleBusinessUrl: "https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7",
  justdialUrl: "https://jsdl.in/DT-25AZFB2UZUC",
  socialUrls: [
    "https://instagram.com/masterpet_official",
    "https://www.facebook.com/profile.php?id=61555806585903",
    "https://www.youtube.com/@Masterpetofficial",
    "https://www.linkedin.com/company/masterpet-care/",
  ],
} as const;

/** Google Ads website call conversion (forwarding number) */
export const GOOGLE_ADS = {
  conversionId: "AW-16630949671",
  phoneConversionSendTo: "AW-16630949671/5VVtCKX6ltccEKfOoPo9",
  phoneConversionNumber: COMPANY_INFO.phoneDisplay,
} as const;

export const absoluteUrl = (path = "") => {
  if (!path) return COMPANY_INFO.website;
  if (path.startsWith("http")) return path;

  return `${COMPANY_INFO.website}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const getFullAddress = () =>
  `${COMPANY_INFO.addressLine1}, ${COMPANY_INFO.addressLocality}, ${COMPANY_INFO.addressCity}, ${COMPANY_INFO.addressRegion} ${COMPANY_INFO.postalCode}`;
