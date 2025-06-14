import NAPSchema from "@/components/NAPSchema";
// import NavBar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import CommunitiesMarquee from '../components/CommunitiesMarquee';
import VideoShowcaseSection from '../components/VideoShowcaseSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
// import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NAPSchema />
      {/* <NavBar /> */}
      <HeroSection />
      <CommunitiesMarquee />
      <VideoShowcaseSection />
      <ServicesSection />
      <ProcessSection />
      {/* <AboutSection /> */}
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <div className="w-full flex justify-center items-end bg-section-background">
        {/*
          The background color for this section uses the semantic Tailwind class 'bg-section-background',
          which references the CSS variable --section-background for easy theming and configuration.
        */}
        <Image
          src="/brand_assets/Mascot/alltogether/MP_All_Together.svg"
          alt="Masterpet Mascot Illustration"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
      {/* NAP Info Section removed, now in Footer */}
      <Footer />
    </>
  );
}
