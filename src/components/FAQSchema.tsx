import { buildFaqPageSchema } from "@/lib/faq-content";

const FAQSchema = () => {
  const schemaData = buildFaqPageSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default FAQSchema;
