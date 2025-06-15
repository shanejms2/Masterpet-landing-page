"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";
import type { gsap } from 'gsap';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const secondaryCtaRef = useRef<HTMLAnchorElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    import('gsap').then((gsap) => {
      tl = gsap.default.timeline();
      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
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
        )
        .fromTo(
          mascotRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power1.out" },
          "-=0.4"
        );
    });
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section
      className="w-full min-h-[90vh] relative flex flex-col-reverse md:flex-row items-center justify-between py-4 md:py-6 overflow-hidden bg-white"
      id="hero"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          {/* Mascot SVG on the left for mobile, right for desktop */}
          <div
            ref={mascotRef}
            className="w-full md:w-1/2 flex justify-center items-center z-0 mb-4 md:mb-0"
            tabIndex={0}
            aria-label="Masterpet mascot on a couch with a cat, representing comfort and care"
          >
            <Image
              src="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg"
              alt="Masterpet mascot on a couch with a cat, representing comfort and care"
              width={480}
              height={400}
              className="w-3/4 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto mx-auto drop-shadow-xl"
              priority
              loading="eager"
            />
          </div>
          <div className="w-full md:w-1/2 z-10 flex flex-col items-start mb-4 md:mb-0">
            <h1
              ref={headingRef}
              className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-blue font-bold mb-4 leading-tight text-center md:text-left w-full"
            >
              At-Home Pet Grooming in Kochi
            </h1>
            <p
              ref={paragraphRef}
              className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-blue font-light mb-4 text-center md:text-left w-full"
            >
              Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep.
            </p>
            <p
              className="inline-flex items-center gap-2 py-1 rounded-full bg-muted/60 text-sm font-medium text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors mb-4"
              aria-live="polite"
              tabIndex={0}
            >
              <span className="text-yellow-400/80 text-base" aria-hidden="true">★</span>
              Trusted by 1000+ pet parents & top communities in Kerala
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
              <a
                ref={buttonRef}
                href="https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20want%20to%20book%20a%20grooming%20session.%20[From%20Masterpet%20Website]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-lg sm:text-xl w-full sm:w-auto text-center gap-2"
                tabIndex={0}
                aria-label="Book Now on WhatsApp"
              >
                <FaWhatsapp className="text-2xl" aria-hidden="true" />
                Book Now
              </a>
              <a
                ref={secondaryCtaRef}
                href="#services"
                className="inline-block font-heading bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-lg sm:text-xl w-full sm:w-auto text-center"
                tabIndex={0}
                aria-label="See Services"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* No custom background, inherit global background */}
    </section>
  );
};

export default HeroSection; 