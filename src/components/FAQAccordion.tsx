"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQ_ITEMS } from "@/lib/faq-content";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((faq, index) => (
        <Card key={index} className="border-gray-200 hover:border-brand-blue/50 transition-all duration-300">
          <CardHeader className="pb-4">
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <CardTitle className="font-body font-semibold text-lg text-brand-blue pr-4">
                {faq.question}
              </CardTitle>
              <ChevronDown
                className={`h-5 w-5 text-brand-green transition-transform duration-200 flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
          </CardHeader>
          <CardContent
            className={`pt-0 transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            <div id={`faq-content-${index}`} className="font-body text-brand-blue/70 leading-relaxed">
              {faq.answer}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
