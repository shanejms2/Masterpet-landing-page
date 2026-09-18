"use client";
import { useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";
import MascotScene from "./MascotScene";
import type { gsap } from "gsap";
import { getWhatsAppUrl as buildWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";

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
    import("gsap").then((gsap) => {
      if (!mascotRef.current) return;
      tl = gsap.default.timeline();
      tl.fromTo(mascotRef.current, { opacity: 0.6, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    });
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  const getHeading = () => {
    if (area) {
      return (
        <>
          At-Home Pet Grooming
          <span className="block">in {area}</span>
        </>
      );
    }
    return (
      <>
        At-Home Pet Grooming
        <span className="block">in Kochi</span>
      </>
    );
  };

  const getBadgeText = () => {
    if (area) {
      return `Trusted by Pet Parents in ${area}`;
    }
    return "Trusted by 2000+ Pet Parents in Kochi";
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

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-24" id="hero">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 size-[28rem] rounded-full bg-brand-green/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-sky-200/40 blur-3xl"
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left order-1">
            <p ref={badgeRef} className="mp-kicker mb-5">
              {getBadgeText()}
            </p>

            <h1
              ref={headingRef}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brand-blue font-bold mb-5 leading-[1.1] tracking-tight"
            >
              {getHeading()}
            </h1>

            <p ref={paragraphRef} className="font-body text-lg text-brand-blue/65 mb-8 max-w-lg leading-relaxed">
              {getParagraphText()}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                ref={buttonRef}
                href={buildWhatsAppUrl(getWhatsAppText())}
                target="_blank"
                rel="noopener noreferrer"
                className="mp-cta-accent"
                tabIndex={0}
                aria-label="Book Now on WhatsApp"
                onClick={() => trackWhatsappClick()}
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Book Grooming
              </a>

              <a
                ref={secondaryCtaRef}
                href="#pricing"
                className="mp-cta-secondary"
                tabIndex={0}
                aria-label="See Pricing"
              >
                View Packages
              </a>
            </div>
          </div>

          <div
            ref={mascotRef}
            className="flex justify-center lg:justify-end items-center order-2"
            tabIndex={0}
            aria-label="Masterpet mascot on a couch with a cat, representing comfort and care"
          >
            <MascotScene />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default KochiHeroSection;
