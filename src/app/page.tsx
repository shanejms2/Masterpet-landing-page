import NAPSchema from "@/components/NAPSchema";
import dynamic from "next/dynamic";
import HeroSection from '../components/HeroSection';
import CommunitiesMarquee from '../components/CommunitiesMarquee';
import PhotoGallerySection from '../components/PhotoGallerySection';
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import GoogleMapsSection from '../components/GoogleMapsSection';
import FinalCTASection from '../components/FinalCTASection';

// Lazy load heavy components to reduce initial bundle size
const VideoShowcaseSection = dynamic(() => import('../components/VideoShowcaseSection'), {
  loading: () => (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full loading-skeleton mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Videos...</h2>
          <p className="text-gray-600">Preparing our grooming showcase</p>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <NAPSchema />
      <HeroSection />
      <CommunitiesMarquee />
      <VideoShowcaseSection />
      <PhotoGallerySection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <GoogleMapsSection />
      <FinalCTASection />
    </>
  );
}
