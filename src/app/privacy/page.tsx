import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy-policy";
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_INFO.brandName}`,
  description: `Read the privacy policy for ${COMPANY_INFO.brandName}, including how we handle customer information for at-home pet grooming services.`,
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
  openGraph: {
    title: `Privacy Policy | ${COMPANY_INFO.brandName}`,
    description: `Read the privacy policy for ${COMPANY_INFO.brandName}.`,
    url: absoluteUrl("/privacy"),
    siteName: COMPANY_INFO.siteName,
    images: [
      {
        url: absoluteUrl(COMPANY_INFO.logoPath),
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.brandName} logo`,
      },
    ],
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
      <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Privacy Policy</h1>
      <PrivacyPolicy />
    </main>
  );
} 