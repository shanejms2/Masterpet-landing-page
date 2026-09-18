import type { Metadata } from "next";
import { COMPANY_INFO, absoluteUrl } from "@/lib/constants";
import CrmPageContent from "@/components/crm/CrmPageContent";

const title = "Masterpet CRM | Simplified Pet Business CRM with AI, Accounting & Zoho Migration";
const description =
  "Masterpet CRM is a simpler CRM for 500+ pet businesses. An AI agent creates charts, looks up your accounting books, and answers questions about your data. Includes accounting, import/export, and migrations from Zoho and other CRMs. Pricing on request — email hello@masterpet.co.in.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pet shop CRM",
    "grooming salon software",
    "pet business bookings",
    "pet inventory management",
    "pet customer loyalty",
    "Masterpet CRM",
    "pet business accounting",
    "Zoho CRM migration",
    "AI CRM for pet shops",
  ],
  alternates: {
    canonical: absoluteUrl("/crm"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/crm"),
    siteName: COMPANY_INFO.siteName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Masterpet CRM for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pet shops, grooming salons, boarding and daycare, and mixed pet businesses that want bookings, inventory, customers, loyalty, and accounting in one place — without a steep learning curve.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Masterpet CRM AI agent do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It sits inside Masterpet CRM. It creates charts, looks up your accounting books, and answers questions about your data — bookings, stock, customers, loyalty, and the ledger.",
      },
    },
    {
      "@type": "Question",
      name: "Can we migrate from Zoho or another CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Masterpet CRM supports import and export, and we help with migrations from other CRMs such as Zoho.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Masterpet CRM subscription cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Plans are tailored to your locations and team size. Email ${COMPANY_INFO.email} or call ${COMPANY_INFO.phoneDisplay} for pricing.`,
      },
    },
    {
      "@type": "Question",
      name: "Is Masterpet CRM the same as Masterpet grooming in Kochi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. At-home grooming is Masterpet's consumer service. Masterpet CRM is a separate software product for other pet-related companies.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Masterpet CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: absoluteUrl("/crm"),
  description,
  provider: {
    "@type": "Organization",
    name: COMPANY_INFO.legalName,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    url: COMPANY_INFO.website,
  },
  offers: {
    "@type": "Offer",
    url: absoluteUrl("/crm"),
    availability: "https://schema.org/InStock",
    description: `Custom subscription pricing. Contact ${COMPANY_INFO.email} or ${COMPANY_INFO.phoneDisplay}.`,
  },
};

export default function CrmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CrmPageContent />
    </>
  );
}
