import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, TruckIcon, ScissorsIcon, HeartIcon } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

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
    <section className="mp-section bg-white" id="process" aria-label="How Our Grooming Process Works">
      <Container>
        <SectionHeading
          kicker="How it works"
          title="How It Works"
          description="Our simple 4-step process ensures your pet gets the best grooming experience without leaving the comfort of your home. Professional, convenient, and stress-free."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-0">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-[#F6F7F9] rounded-xl flex items-center justify-center">
                    <step.icon className="text-brand-blue h-5 w-5" />
                  </div>
                  <span className="font-heading text-xs font-semibold text-brand-blue/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-blue">{step.title}</h3>
                <p className="font-body text-sm text-brand-blue/65 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
