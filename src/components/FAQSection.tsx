import { MessageCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "./Container";
import FAQSchema from "./FAQSchema";
import FAQAccordion from "./FAQAccordion";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick booking and support",
    href: getWhatsAppUrl("Hi Masterpet! I have a question about your services. [From Masterpet Website]"),
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    href: `mailto:${COMPANY_INFO.email}`,
  },
];

const FAQSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24" id="faq" aria-label="Frequently Asked Questions">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-green/20 text-brand-blue border-brand-green/30">
            Got Questions?
          </Badge>
          <h2 className="font-fractul font-bold text-3xl md:text-4xl lg:text-5xl text-brand-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-3xl mx-auto">
            Everything you need to know about our at-home pet grooming services.
            Can&apos;t find the answer you&apos;re looking for? Get in touch with our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FAQAccordion />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-brand-green/20 bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
                <CardHeader className="text-center">
                  <CardTitle className="font-fractul text-2xl text-brand-blue mb-2">
                    Still Have Questions?
                  </CardTitle>
                  <CardDescription className="font-body text-brand-blue/70">
                    Our friendly team is here to help you with any questions about our services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <method.icon className="h-4 w-4 text-brand-blue group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-body text-sm font-semibold text-brand-blue truncate">
                          {method.title}
                        </div>
                        <p className="font-body text-xs text-brand-blue/60 truncate">
                          {method.description}
                        </p>
                      </div>
                      <div className="text-xs font-body text-brand-blue/60 group-hover:text-brand-blue transition-colors">
                        →
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="font-body text-brand-blue/80 leading-relaxed">
                    &ldquo;The team was incredibly gentle with my anxious Frenchies. The at-home service
                    eliminated all the stress of traveling to a salon. All 5 of my pups came back happy
                    and smelling amazing!&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-green font-fractul text-lg">🐕</span>
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-brand-blue">
                        Jeff Mathew
                      </div>
                      <div className="font-body text-xs text-brand-blue/60">
                        Parent of 5 French Bulldogs
                      </div>
                    </div>
                  </div>
                </div>
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
