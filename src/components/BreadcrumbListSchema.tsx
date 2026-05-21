export type BreadcrumbSchemaItem = {
  name: string;
  url: string;
};

type BreadcrumbListSchemaProps = {
  items: BreadcrumbSchemaItem[];
};

const BreadcrumbListSchema = ({ items }: BreadcrumbListSchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default BreadcrumbListSchema;
