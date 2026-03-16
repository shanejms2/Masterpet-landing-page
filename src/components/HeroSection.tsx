"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Star, ArrowRight } from "lucide-react";
import Container from "./Container";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const secondaryCtaRef = useRef<HTMLAnchorElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Lazy load GSAP to prevent render blocking
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        
        // Only animate if component is still mounted
        if (mascotRef.current) {
          const tl = gsap.timeline();
          tl.fromTo(
            mascotRef.current,
            { opacity: 0, scale: 0.95, x: -50 },
            { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power3.out" }
          )
            .fromTo(
              headingRef.current,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
              "-=0.6"
            )
            .fromTo(
              paragraphRef.current,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
              "-=0.5"
            )
            .fromTo(
              badgeRef.current,
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" },
              "-=0.5"
            )
            .fromTo(
              buttonRef.current,
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" },
              "-=0.5"
            )
            .fromTo(
              secondaryCtaRef.current,
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" },
              "-=0.6"
            );
        }
      } catch {
        console.warn('GSAP failed to load, falling back to CSS animations');
        // Fallback to CSS animations if GSAP fails
        setIsLoaded(true);
      }
    };

    // Load GSAP after a small delay to prioritize critical content
    const timer = setTimeout(loadGSAP, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center py-4 md:py-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
      id="hero"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Mascot with optimized loading */}
          <div
            ref={mascotRef}
            className="flex justify-center lg:justify-start items-center order-2 lg:order-1"
            tabIndex={0}
            aria-label="Masterpet mascot on a couch with a cat, representing comfort and care"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Loading skeleton */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 rounded-lg loading-skeleton" />
              )}
              
              <Image
                src="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg"
                alt="Masterpet mascot on a couch with a cat, representing comfort and care"
                width={480}
                height={400}
                className={`w-full h-auto drop-shadow-2xl transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                priority
                loading="eager"
                onLoad={handleImageLoad}
                onError={() => setIsLoaded(true)}
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left order-1 lg:order-2">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 text-brand-blue border border-brand-green/30 mb-6"
            >
              <Star className="h-4 w-4 text-brand-green" />
              <span className="font-body text-sm font-semibold">Trusted by 1000+ Pet Parents</span>
            </div>
            
            <h1
              ref={headingRef}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-blue font-bold mb-6 leading-tight"
            >
              At-Home{" "}
              Pet Grooming{" "}
              <span className="text-brand-green">in Kochi</span>
            </h1>
            
            <p
              ref={paragraphRef}
              className="font-body text-lg md:text-xl text-brand-blue mb-8 leading-relaxed"
            >
              Experience stress-free, hygienic grooming for your beloved pets right at your doorstep. 
              Our professional groomers bring the salon experience to your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                ref={buttonRef}
                href={getWhatsAppUrl("Hi Masterpet! I am interested in booking a pet grooming session. [From Masterpet Website]")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 text-lg sm:text-xl gap-3 group"
                tabIndex={0}
                aria-label="Book grooming session on WhatsApp"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(e.currentTarget.href, '_blank');
                  }
                }}
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true" />
                Book Grooming
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              
              <a
                ref={secondaryCtaRef}
                href="#pricing"
                className="inline-flex items-center justify-center font-heading bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white hover:border-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 text-lg sm:text-xl gap-2"
                tabIndex={0}
                aria-label="View pricing and packages"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Packages
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-brand-blue font-body flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                <span>Professional Groomers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                <span>Premium Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                <span>100% Hygienic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                <span>No Travel Stress in {COMPANY_INFO.serviceCity}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection; 