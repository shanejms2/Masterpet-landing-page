"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  CalendarIcon, 
  TruckIcon, 
  ScissorsIcon, 
  HeartIcon 
} from "lucide-react";
import Container from "./Container";

const steps = [
  {
    icon: CalendarIcon,
    title: "Book Your Slot",
    description: "Contact us via WhatsApp or phone to schedule your pet's grooming session at your convenience.",
  },
  {
    icon: TruckIcon,
    title: "We Come to You",
    description: "Our fully equipped grooming van arrives at your doorstep, no travel stress for your pet!",
  },
  {
    icon: ScissorsIcon,
    title: "Professional Grooming",
    description: "Certified groomers provide a hygienic, stress-free grooming experience in our mobile salon.",
  },
  {
    icon: HeartIcon,
    title: "Happy, Clean Pet",
    description: "Your pet returns home fresh, clean, and happy; ready for cuddles and adventures!",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24" id="process" aria-label="How Our Grooming Process Works">
      <Container>
        <div className="space-y-8 text-center mb-12">
          <h2 className="font-fractul font-bold text-3xl md:text-4xl lg:text-5xl text-brand-blue">
            How It Works
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 mx-auto max-w-3xl">
            Our simple 4-step process ensures your pet gets the best grooming experience 
            without leaving the comfort of your home. Professional, convenient, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-0 border-gray-200 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <step.icon className="text-brand-blue h-8 w-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-fractul text-sm font-bold text-brand-blue bg-brand-green px-2 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-blue">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-brand-blue/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection; 