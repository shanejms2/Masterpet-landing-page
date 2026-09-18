"use client";

import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Mini Groom",
    description: "Essential care for a fresh, clean, and happy pet",
    price: 1599,
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "No travel stress for your pet",
    ],
    notIncluded: [
      "Sanitary trimming",
      "Paw trimming",
      "Mouth area trimming",
      "Full body trim",
      "Haircut and styling",
      "Paw massage",
      "Teeth brushing/spray",
    ],
    popular: false,
    cta: "Book Mini Groom",
    whatsappMessage: "Hi! I want to book the Mini Groom package. [From Masterpet Website]",
  },
  {
    name: "Hygiene Package",
    description: "Mini Groom plus hygiene-focused fur trimming",
    price: 1999,
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "No travel stress for your pet",
      "Sanitary Trim",
      "Paw Trim",
      "Mouth Area Trim",
    ],
    notIncluded: [
      "Full body trim",
      "Haircut and styling",
      "Paw massage",
      "Teeth brushing/spray",
    ],
    popular: false,
    cta: "Book Hygiene Package",
    whatsappMessage: "Hi! I want to book the Hygiene Package. [From Masterpet Website]",
  },
  {
    name: "Full Groom",
    description: "The ultimate spa experience for your pet",
    price: 2599,
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "No travel stress for your pet",
      "Sanitary Trim",
      "Paw Trim",
      "Mouth Area Trim",
      "Haircut and Styling",
      "Paw Massage",
      "Teeth Brushing/Spray",
      "Professional styling consultation",
    ],
    notIncluded: [
              "Your pet's complaints about being too handsome/beautiful",
    ],
    popular: true,
    cta: "Book Full Groom",
    whatsappMessage: "Hi! I want to book the Full Groom package. [From Masterpet Website]",
  },
];

const addOns = [
  {
    name: "Medicated Bath",
    price: 200,
    description: "Specialized medicated shampoo for skin.",
    features: ["Soothes irritated skin", "Reduces itching", "Treats infections", "Suitable for sensitive skin"],
  },
  {
    name: "Teeth Brushing",
    price: 200,
    description: "Professional dental care for your pet.",
    features: ["Removes plaque", "Fresh breath", "Oral health check", "Dental care tips"],
  },
  {
    name: "Detangling/Dematting",
    price: 200,
    description: "Professional detangling for severely matted fur.",
    features: ["Per hour service", "Gentle handling", "Prevents skin issues", "Restores coat health"],
  },
];

const PricingSection = () => {
  return (
    <section className="mp-section-muted" id="pricing" aria-label="Grooming Packages and Pricing">
      <Container>
        <SectionHeading
          kicker="Packages"
          title="Choose Your Perfect Grooming Package"
          description="Professional at-home grooming services tailored to your pet's needs. All packages include our certified groomer, premium products, and complete convenience."
        />

        <div className="mb-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col",
                plan.popular && "border-brand-green bg-brand-green/10"
              )}
            >
              <CardHeader className="flex flex-col items-center gap-3 pb-4 text-center">
                {plan.popular && (
                  <Badge variant="brand">Most Popular</Badge>
                )}
                <CardTitle className="font-fractul text-2xl text-brand-blue">{plan.name}</CardTitle>
                <CardDescription className="font-body text-brand-blue/70">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="font-fractul text-4xl font-bold text-brand-blue">
                    ₹{plan.price}
                  </span>
                  <span className="font-body text-brand-blue/60 ml-2">
                    /session
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <div className="font-heading text-sm font-semibold text-brand-blue mb-3">What's included:</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => {
                        // Check if this is a trimming service in Hygiene Package
                        const isTrimmingService = plan.name === "Hygiene Package" && 
                          ["Sanitary Trim", "Paw Trim", "Mouth Area Trim"].includes(feature);
                        
                        // Check if this is a premium service in Full Groom Package
                        const isPremiumService = plan.name === "Full Groom" && 
                          ["Haircut and Styling", "Paw Massage", "Teeth Brushing/Spray", "Professional styling consultation"].includes(feature);
                        
                        return (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                            <span className={`font-body text-sm text-brand-blue ${
                              isTrimmingService || isPremiumService
                                ? "font-bold bg-brand-green/20 px-2 py-1 rounded-md" 
                                : ""
                            }`}>
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="font-heading text-sm font-semibold text-brand-blue mb-3">Not included:</div>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-brand-blue/60">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  asChild
                  className={`w-full font-heading rounded-full ${
                    plan.popular
                      ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                      : "bg-white text-brand-blue border border-brand-blue/15 hover:bg-brand-blue hover:text-white"
                  }`}
                  size="lg"
                >
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    onClick={() => trackWhatsappClick()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="text-center mb-12">
          <h3 className="font-fractul font-bold text-2xl md:text-3xl text-brand-blue mb-4">
            Additional Services
          </h3>
          <p className="font-body text-brand-blue/70 max-w-2xl mx-auto">
            Enhance your pet's grooming experience with these specialized add-on services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addOn) => (
            <Card key={addOn.name}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="font-fractul text-xl text-brand-blue">{addOn.name}</CardTitle>
                  <span className="font-fractul text-2xl font-bold text-brand-blue">
                    ₹{addOn.price}
                    {addOn.name === "Detangling/Dematting" && <span className="text-sm">/hr</span>}
                  </span>
                </div>
                <CardDescription className="font-body text-brand-blue/70">
                  {addOn.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  {addOn.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-green flex-shrink-0" />
                      <span className="font-body text-sm text-brand-blue">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full font-heading rounded-full border-brand-blue/15 text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <a
                    href={getWhatsAppUrl(
                      `Hi! I want to add the ${addOn.name} to my grooming package. [From Masterpet Website]`
                    )}
                    onClick={() => trackWhatsappClick()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Booking
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-fractul font-bold text-2xl md:text-3xl text-brand-blue mb-12 tracking-tight">
              Why Choose Masterpet?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center rounded-2xl border border-brand-blue/[0.08] bg-white p-8">
                <div className="w-12 h-12 bg-[#F6F7F9] rounded-xl flex items-center justify-center mb-5">
                  <Check className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="font-heading text-xl md:text-2xl text-brand-blue mb-4">Certified Groomers</h4>
                <p className="font-body text-base md:text-lg text-brand-blue/70 max-w-xs">
                  All our groomers are certified professionals with years of experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center rounded-2xl border border-brand-blue/[0.08] bg-white p-8">
                <div className="w-12 h-12 bg-[#F6F7F9] rounded-xl flex items-center justify-center mb-5">
                  <Check className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="font-heading text-xl md:text-2xl text-brand-blue mb-4">Premium Products</h4>
                <p className="font-body text-base md:text-lg text-brand-blue/70 max-w-xs">
                  We use only high-quality, pet-safe grooming products and equipment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center rounded-2xl border border-brand-blue/[0.08] bg-white p-8">
                <div className="w-12 h-12 bg-[#F6F7F9] rounded-xl flex items-center justify-center mb-5">
                  <Check className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="font-heading text-xl md:text-2xl text-brand-blue mb-4">100% Satisfaction</h4>
                <p className="font-body text-base md:text-lg text-brand-blue/70 max-w-xs">
                  Trusted by 2000+ pet parents across Kerala with excellent reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection; 