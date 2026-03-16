import type { Metadata } from "next";
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact ${COMPANY_INFO.brandName} | At-Home Pet Grooming in ${COMPANY_INFO.serviceCity}`,
  description: `Contact ${COMPANY_INFO.brandName} for at-home pet grooming in ${COMPANY_INFO.serviceCity}. Call ${COMPANY_INFO.phoneDisplay}, email ${COMPANY_INFO.email}, or message us on WhatsApp.`,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: `Contact ${COMPANY_INFO.brandName}`,
    description: `Reach ${COMPANY_INFO.brandName} for at-home pet grooming in ${COMPANY_INFO.serviceCity}.`,
    url: absoluteUrl("/contact"),
    siteName: COMPANY_INFO.siteName,
    images: [
      {
        url: absoluteUrl(COMPANY_INFO.logoPath),
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.brandName} logo`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${COMPANY_INFO.brandName}`,
    description: `Reach ${COMPANY_INFO.brandName} for at-home pet grooming in ${COMPANY_INFO.serviceCity}.`,
    images: [absoluteUrl(COMPANY_INFO.logoPath)],
    creator: COMPANY_INFO.socialHandle,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
