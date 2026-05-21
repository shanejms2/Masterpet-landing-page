// Company information
export const COMPANY_INFO = {
  name: "Masterpet",
  legalName: "Masterpet Care Private Limited",
  phone: "+91 85906 43269",
  email: "hello@masterpet.co.in",
  googleBusinessUrl: "https://maps.app.goo.gl/4XhBMTabRKG3wcxf9",
  whatsappUrl: "https://wa.me/918590643269?text=[From%20Masterpet%20Website]", // Source tag for tracking
  website: "https://www.masterpet.co.in",
  justdialUrl: "https://jsdl.in/DT-25AZFB2UZUC"
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/918590643269?text=${encodeURIComponent(message)}`; 