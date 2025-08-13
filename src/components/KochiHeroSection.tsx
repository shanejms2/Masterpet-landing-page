"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Star, ArrowRight } from "lucide-react";
import Container from "./Container";
import type { gsap } from 'gsap';

interface KochiHeroSectionProps {
  area?: string;
}

const KochiHeroSection = ({ area }: KochiHeroSectionProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const secondaryCtaRef = useRef<HTMLAnchorElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    import('gsap').then((gsap) => {
      tl = gsap.default.timeline();
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
    });
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  // Determine content based on props
  const getHeading = () => {
    if (area) {
      return (
        <>
          At-Home Pet Grooming
          <span className="block text-brand-green">in {area}</span>
        </>
      );
    }
    return (
      <>
        At-Home Pet Grooming
        <span className="block text-brand-green">in Kochi</span>
      </>
    );
  };

  const getBadgeText = () => {
    if (area) {
      return `Trusted by Pet Parents in ${area}`;
    }
    return "Trusted by 1000+ Pet Parents in Kochi";
  };

  const getParagraphText = () => {
    if (area) {
      return `Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep in ${area}, Kochi!`;
    }
    return "Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep across Kochi!";
  };

  const getWhatsAppText = () => {
    if (area) {
      return `Hi Masterpet! I want to book a grooming session in ${area}. [From Masterpet Website]`;
    }
    return "Hi Masterpet! I want to book a grooming session in Kochi. [From Masterpet Website]";
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(getWhatsAppText());
    return `https://wa.me/918590643269?text=${text}`;
  };

  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center py-4 md:py-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
      id="hero"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Mascot */}
          <div
            ref={mascotRef}
            className="flex justify-center lg:justify-start items-center order-2 lg:order-1"
            tabIndex={0}
            aria-label="Masterpet mascot on a couch with a cat, representing comfort and care"
          >
            <Image
              src="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg"
              alt="Masterpet mascot on a couch with a cat, representing comfort and care"
              width={480}
              height={400}
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl"
              priority
              loading="eager"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left order-1 lg:order-2">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 text-brand-blue border border-brand-green/30 mb-6"
            >
              <Star className="h-4 w-4 text-brand-green" />
              <span className="font-body text-sm font-semibold">{getBadgeText()}</span>
            </div>
            
            <h1
              ref={headingRef}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-blue font-bold mb-6 leading-tight"
            >
              {getHeading()}
            </h1>
            
            <p
              ref={paragraphRef}
              className="font-body text-lg sm:text-xl md:text-2xl text-brand-blue/80 mb-8 max-w-2xl"
            >
              {getParagraphText()}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                ref={buttonRef}
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading bg-brand-blue text-white px-8 py-4 rounded-full shadow-lg hover:bg-brand-green hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green transition-all duration-300 text-lg sm:text-xl gap-3 group"
                tabIndex={0}
                aria-label="Book Now on WhatsApp"
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
                aria-label="See Pricing"
              >
                View Packages
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default KochiHeroSection;
