import { COMPANY_INFO } from "@/lib/constants";

const WebSiteSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.siteName,
    alternateName: COMPANY_INFO.brandName,
    url: `${COMPANY_INFO.website}/`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default WebSiteSchema;
