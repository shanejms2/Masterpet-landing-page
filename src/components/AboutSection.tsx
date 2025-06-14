import Image from "next/image";
import Container from "./Container";

const stats = [
  { label: "1000+ Happy Pets Groomed", icon: "🐾" },
  { label: "5-Star Reviews on Google & Just Dial", icon: "⭐" },
  { label: "Trusted by 20+ Communities", icon: "🏢" },
  { label: "Expert Vet on Our Team (10+ yrs)", icon: "🩺" },
];

const AboutSection = () => (
  <section className="w-full bg-background py-8 md:py-12" id="about" aria-label="About Masterpet">
    {/*
      The background color for this section uses the semantic Tailwind class 'bg-section-background',
      which references the CSS variable --section-background for easy theming and configuration.
    */}
    <Container>
      <h2 className="font-heading text-3xl md:text-4xl text-brand-blue text-center mb-8">
        About Masterpet
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 mb-8 md:mb-0">
          <p className="font-body text-brand-blue text-lg mb-4">
            At Masterpet, we believe every pet deserves the best care—right at home. Our mission is to make grooming stress-free, hygienic, and joyful for both pets and their parents. With a fully equipped grooming van, professional groomers, and a commitment to safety and comfort, we bring the spa to your doorstep.
          </p>
          <p className="font-body text-brand-blue text-base mb-4">
            Our team includes an experienced veterinarian (10+ years in practice), ensuring your pet&apos;s health and well-being are always our top priority.
          </p>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow text-brand-blue font-body text-base">
                <span className="text-2xl" aria-hidden="true">{stat.icon}</span> {stat.label}
              </div>
            ))}
          </div>
          <blockquote className="font-heading text-xl text-brand-blue mt-4 border-l-4 border-brand-green pl-4">
            &quot;Pet Care, Mastered&quot;
          </blockquote>
        </div>
        {/* Mascot Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/brand_assets/Mascot/alltogether/MP_All_Together.png"
            alt="Masterpet Mascots Together"
            width={240}
            height={240}
            className="object-contain drop-shadow-xl w-40 h-40 md:w-[340px] md:h-[340px]"
            priority
          />
        </div>
      </div>
    </Container>
  </section>
);

export default AboutSection; 