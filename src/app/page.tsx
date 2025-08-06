import NAPSchema from "@/components/NAPSchema";
// import NavBar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import CommunitiesMarquee from '../components/CommunitiesMarquee';
import VideoShowcaseSection from '../components/VideoShowcaseSection';
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
// import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      <NAPSchema />
      {/* <NavBar /> */}
      <HeroSection />
      <CommunitiesMarquee />
      <VideoShowcaseSection />
      <PricingSection />
      <ProcessSection />
      {/* <AboutSection /> */}
      <TestimonialsSection />
      <FAQSection />
      {/* NAP Info Section removed, now in Footer */}
    </>
  );
}
