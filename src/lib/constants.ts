export const COMPANY_INFO = {
  brandName: "Masterpet",
  legalName: "Masterpet Care Private Limited",
  website: "https://www.masterpet.co.in",
  siteName: "Masterpet",
  phone: "+918590643269",
  phoneDisplay: "+91 85906 43269",
  whatsappNumber: "918590643269",
  email: "hello@masterpet.co.in",
  socialHandle: "@masterpet_official",
  hoursDisplay: "9:00 AM - 9:00 PM",
  openingHoursSchema: "Mo-Su 09:00-21:00",
  addressLine1: "Anu Villa, XVI / 80, Nethaji Rd, near YMCA Indoor Stadium, Periyar Nagar",
  addressLocality: "Aluva",
  addressRegion: "Kerala",
  postalCode: "683101",
  addressCountry: "IN",
  serviceCity: "Kochi",
  serviceRegion: "Ernakulam district",
  serviceAreaText: "Kochi and surrounding areas in Ernakulam district, Kerala, India",
  businessDescription:
    "Professional, hygienic, and stress-free at-home pet grooming for dogs and cats in Kochi and surrounding areas.",
  logoPath: "/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png",
  googleBusinessUrl: "https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7",
  justdialUrl: "https://jsdl.in/DT-25AZFB2UZUC",
} as const;

export const absoluteUrl = (path = "") => {
  if (!path) return COMPANY_INFO.website;
  if (path.startsWith("http")) return path;

  return `${COMPANY_INFO.website}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;