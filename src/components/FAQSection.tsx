"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FAQSchema from "./FAQSchema";
import FAQAccordion from "./FAQAccordion";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import PhoneLink from "./PhoneLink";

const FAQSection = () => {
  const whatsappHref = getWhatsAppUrl(
    "Hi Masterpet! I have a question about your services. [From Masterpet Website]"
  );
  return (
    <section className="mp-section bg-white" id="faq" aria-label="Frequently Asked Questions">
      <Container>
        <SectionHeading
          kicker="Support"
          title="Frequently Asked Questions"
          description="Everything you need to know about our at-home pet grooming services. Can't find the answer you're looking for? Get in touch with our friendly team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <FAQAccordion />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-brand-blue">
                    Still Have Questions?
                  </CardTitle>
                  <CardDescription className="font-body text-brand-blue/65">
                    Our team is here to help with any questions about our services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={whatsappHref}
                    onClick={() => trackWhatsappClick()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-brand-blue/[0.08] hover:bg-[#F6F7F9] transition-colors group"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-blue" />
                    <div className="flex-1 min-w-0">
                      <div className="font-body text-sm font-semibold text-brand-blue">WhatsApp</div>
                      <p className="font-body text-xs text-brand-blue/55">Quick booking and support</p>
                    </div>
                  </a>
                  <PhoneLink className="flex items-center gap-3 p-3 rounded-xl border border-brand-blue/[0.08] hover:bg-[#F6F7F9] transition-colors group">
                    <Phone className="h-4 w-4 text-brand-blue" />
                    <div className="flex-1 min-w-0">
                      <div className="font-body text-sm font-semibold text-brand-blue">Call Us</div>
                      <p className="font-body text-xs text-brand-blue/55" data-google-ads-phone-label>
                        {COMPANY_INFO.phoneDisplay}
                      </p>
                    </div>
                  </PhoneLink>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-brand-blue/[0.08] hover:bg-[#F6F7F9] transition-colors group"
                  >
                    <Mail className="h-4 w-4 text-brand-blue" />
                    <div className="flex-1 min-w-0">
                      <div className="font-body text-sm font-semibold text-brand-blue">Email</div>
                      <p className="font-body text-xs text-brand-blue/55">Send us a message</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <div className="rounded-2xl border border-brand-blue/[0.08] bg-[#F6F7F9] p-6">
                <blockquote className="font-body text-sm text-brand-blue/75 leading-relaxed mb-4">
                  &ldquo;The team was incredibly gentle with my anxious Frenchies. The at-home service
                  eliminated all the stress of traveling to a salon. All 5 of my pups came back happy
                  and smelling amazing!&rdquo;
                </blockquote>
                <div className="font-heading text-sm font-semibold text-brand-blue">Jeff Mathew</div>
                <div className="font-body text-xs text-brand-blue/50">Parent of 5 French Bulldogs</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <FAQSchema />
    </section>
  );
};

export default FAQSection;
