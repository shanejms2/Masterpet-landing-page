"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "./Container";

const faqs = [
  {
    question: "How does at-home pet grooming with Masterpet work?",
    answer: "Simply book your slot via WhatsApp or phone. Our fully equipped grooming van arrives at your doorstep at the scheduled time. Your pet is groomed by certified professionals in a safe, hygienic environment—no travel or stress! The entire process takes 1-2 hours depending on your pet's size and grooming needs."
  },
  {
    question: "Is your team qualified to handle anxious or sensitive pets?",
    answer: "Absolutely! Our team includes an experienced veterinarian (10+ years in practice) and professional groomers trained to handle pets with anxiety or special needs. We create a calm, friendly atmosphere and use gentle techniques to ensure your pet feels comfortable throughout the entire grooming process."
  },
  {
    question: "What safety and hygiene measures do you follow?",
    answer: "We maintain the highest standards of safety and hygiene. All equipment is sanitized between pets, we use premium quality grooming products, and follow strict protocols in our mobile salon. Each pet is treated with care and comfort as our top priority, ensuring a safe and clean environment."
  },
  {
    question: "How can I pay for the service?",
    answer: "We accept UPI and Cash payments. Payment details will be shared after your grooming session is complete. We also offer package deals for regular customers and special pricing for first-time bookings. All transactions are secure and transparent."
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer: "You can cancel or reschedule your appointment up to 24 hours in advance at no extra charge. Please contact us as early as possible if your plans change. We understand that emergencies happen, and we'll work with you to find a suitable alternative time."
  },
  {
    question: "Do you groom both dogs and cats?",
    answer: "Yes! We provide professional grooming services for both dogs and cats. Our team is trained to handle different breeds and temperaments. We use specialized techniques and products suitable for each species to ensure the best results and comfort for your pet."
  },
  {
    question: "What areas do you serve in Ernakulam?",
    answer: "We serve most areas in Ernakulam district including Kochi city, Fort Kochi, Mattancherry, Edapally, Kakkanadu, Palarivattom, Thripunithura, Kaloor, Thrikkakara, Eroor, Varapuzha, Eloor, MG Road, Vypin, Marine Drive, and surrounding areas. Please contact us with your specific location, and we'll confirm if we can provide service in your area. We're constantly expanding our service areas."
  },
  {
    question: "How long does a typical grooming session take?",
    answer: "A typical grooming session takes 1-2 hours depending on your pet's size, breed, and the specific services requested. Mini grooming sessions are usually faster (45-60 minutes), while full grooming with additional services may take up to 2 hours. We'll give you an estimated time when you book."
  },
  {
    question: "Where can I find pet grooming near me in Kochi?",
    answer: "Masterpet provides at-home pet grooming services across Kochi and Ernakulam district. We come directly to your doorstep, so you don't need to travel anywhere! Our service areas include Edapally, Kaloor, Ernakulam, Kakkanad, Fort Kochi, Vytilla, Maradu, Thrippunithura, Aluva, Angamaly, and many more locations. Simply contact us with your address, and we'll confirm if we serve your area."
  },
  {
    question: "Do you offer dog nail cutting near me?",
    answer: "Yes! We provide professional dog nail cutting services as part of our grooming packages. Our experienced groomers use proper techniques and equipment to safely trim your dog's nails without causing any discomfort. This service is included in our Full Groom package and can also be booked as a standalone service. We come to your home, so your dog stays comfortable in familiar surroundings."
  },
  {
    question: "Is there mobile pet grooming near me in Kochi?",
    answer: "Yes! Masterpet is Kochi's premier mobile pet grooming service. We bring our fully equipped grooming van to your doorstep, eliminating the stress of traveling with your pet. Our mobile service covers Kochi city, Ernakulam, and surrounding areas including Edapally, Kaloor, Kakkanad, Fort Kochi, Vytilla, Maradu, and more. Book your slot and we'll come to you!"
  },
  {
    question: "What's included in your pet grooming home service?",
    answer: "Our home service includes everything you'd get at a salon, but in the comfort of your home. Services include bathing, haircutting, nail trimming, ear cleaning, teeth brushing, and more. We bring all necessary equipment, premium grooming products, and professional expertise. The service is hygienic, safe, and stress-free for your pet. We also clean up after ourselves, leaving your home as we found it."
  },
  {
    question: "How do I find the best pet grooming near me?",
    answer: "Look for convenience, expertise, and safety! Masterpet offers the best of all three. We come to your home (no travel stress), our team includes a veterinarian with 10+ years experience, and we use professional equipment in a hygienic environment. We serve Kochi, Ernakulam, and surrounding areas. Read our customer reviews and book a session to experience the difference!"
  },
  {
    question: "Do you provide dog grooming near me in Ernakulam?",
    answer: "Absolutely! We provide comprehensive dog grooming services throughout Ernakulam district. Our services include bathing, haircutting, nail trimming, ear cleaning, and more. We come to your home in Ernakulam, Kochi, Edapally, Kaloor, Kakkanad, and surrounding areas. Our team is trained to handle all dog breeds and sizes, ensuring your furry friend gets the best care possible."
  },
  {
    question: "What makes your nail cutting service safe for dogs?",
    answer: "Our nail cutting service is performed by experienced professionals who understand dog anatomy. We use proper nail clippers and techniques to avoid cutting the quick (the sensitive part of the nail). We work slowly and gently, and if your dog is anxious, we can take breaks. The service is included in our grooming packages, or you can book it separately. We come to your home, so your dog stays relaxed in familiar surroundings."
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick booking and support",
    action: "Chat Now",
    href: "https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20have%20a%20question%20about%20your%20services.%20[From%20Masterpet%20Website]"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    action: "Call Now",
    href: "tel:+918590643269"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    action: "Email Us",
    href: "mailto:info@masterpet.in"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-background py-16 md:py-24" id="faq" aria-label="Frequently Asked Questions">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-green/20 text-brand-blue border-brand-green/30">
            Got Questions?
          </Badge>
          <h2 className="font-fractul font-bold text-3xl md:text-4xl lg:text-5xl text-brand-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-3xl mx-auto">
            Everything you need to know about our at-home pet grooming services. 
            Can't find the answer you're looking for? Get in touch with our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-gray-200 hover:border-brand-blue/50 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <button
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
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </CardHeader>
                  <CardContent className={`pt-0 transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}>
                    <div id={`faq-content-${index}`} className="font-body text-brand-blue/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA Section */}
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
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <method.icon className="h-4 w-4 text-brand-blue group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body text-sm font-semibold text-brand-blue truncate">
                          {method.title}
                        </h4>
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

              {/* Testimonial */}
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <blockquote className="font-body text-brand-blue/80 leading-relaxed">
                    &ldquo;The team was incredibly gentle with my anxious Frenchies. The at-home service eliminated all the stress of traveling to a salon. All 5 of my pups came back happy and smelling amazing!&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-green font-fractul text-lg">🐕</span>
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-brand-blue">Jeff Mathew</div>
                      <div className="font-body text-xs text-brand-blue/60">Parent of 5 French Bulldogs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </section>
  );
};

export default FAQSection; 