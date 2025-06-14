import Image from "next/image";
import Container from "./Container";

const steps = [
  {
    title: "Book Your Slot",
    description: "Contact us via WhatsApp or phone to schedule your pet's grooming session.",
    img: "/brand_assets/Mascot/withaheart/MP_withaheart.png",
    alt: "Book your slot mascot",
  },
  {
    title: "We Arrive at Your Doorstep",
    description: "Our grooming van comes to your home at the scheduled time—no travel needed!",
    img: "/brand_assets/Mascot/dogpeeping/MP_dogpeeping.png",
    alt: "Grooming van arrives mascot",
  },
  {
    title: "Professional Grooming",
    description: "Certified groomers provide a hygienic, stress-free grooming experience in our fully equipped van.",
    img: "/brand_assets/Mascot/headphones/MP_headphones.png",
    alt: "Professional grooming mascot",
  },
  {
    title: "Happy, Clean Pet!",
    description: "Your pet returns home fresh, clean, and happy—ready for cuddles!",
    img: "/brand_assets/Mascot/flyingonbone/MP_flyingonbone.png",
    alt: "Happy clean pet mascot",
  },
];

const ProcessSection = () => (
  <section className="w-full bg-background py-8 md:py-12" id="process" aria-label="How It Works">
    {/*
      The background color for this section uses the semantic Tailwind class 'bg-section-background',
      which references the CSS variable --section-background for easy theming and configuration.
    */}
    <Container>
      <h2 className="font-heading text-3xl md:text-4xl text-brand-blue text-center mb-10">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col items-start border border-gray-200 hover:scale-[1.02] hover:bg-gray-50 transition-shadow transition-transform focus-within:ring-2 focus-within:ring-brand-blue w-full mb-4 md:mb-0"
            tabIndex={0}
            aria-label={step.title}
          >
            <Image
              src={step.img}
              alt={step.alt}
              width={100}
              height={100}
              className="mb-4 object-contain drop-shadow-xl w-20 h-20 md:w-[120px] md:h-[120px]"
              priority={idx === 0}
            />
            <h3 className="font-heading text-lg md:text-2xl text-brand-blue mb-2 text-center">{step.title}</h3>
            <p className="font-body text-brand-blue text-center text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default ProcessSection; 