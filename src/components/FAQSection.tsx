"use client";
import { useState } from "react";
import Container from "./Container";

const faqs = [
  {
    q: "How does at-home pet grooming with Masterpet work?",
    a: "Simply book your slot via WhatsApp or phone. Our fully equipped grooming van arrives at your doorstep at the scheduled time. Your pet is groomed by certified professionals in a safe, hygienic environment—no travel or stress!",
  },
  {
    q: "Is your team qualified to handle anxious or sensitive pets?",
    a: "Yes! Our team includes an experienced veterinarian (10+ years in practice) and professional groomers trained to handle pets with anxiety or special needs. We create a calm, friendly atmosphere for every pet.",
  },
  {
    q: "What safety and hygiene measures do you follow?",
    a: "We use sanitized equipment, high-quality products, and maintain strict hygiene protocols in our grooming van. Each pet is treated with care and comfort as our top priority.",
  },
  {
    q: "How can I pay for the service?",
    a: "We accept UPI and Cash. Payment details will be shared after your grooming session is complete.",
  },
  {
    q: "What is your cancellation or rescheduling policy?",
    a: "You can cancel or reschedule your appointment up to 24 hours in advance at no extra charge. Please contact us as early as possible if your plans change.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-8 md:py-12" id="faq" aria-label="Frequently Asked Questions">
      <Container>
        <h2 className="font-heading text-3xl md:text-4xl text-brand-blue text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="mb-6 border-b border-brand-green">
              <button
                className="w-full text-left font-heading text-lg text-brand-blue py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-header-${idx}`}
                onClick={() => handleToggle(idx)}
              >
                {faq.q}
                <span className="ml-2 text-brand-green text-2xl">{open === idx ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-screen py-3' : 'max-h-0'}`}
              >
                <p className="font-body text-brand-blue text-base px-2">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection; 