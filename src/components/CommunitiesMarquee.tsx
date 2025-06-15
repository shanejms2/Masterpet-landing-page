"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "./Container";

// Auto-imported logo files (update this list if you add/remove files)
const logoFiles = [
  { src: "/communities_logo/DLF Logo.svg", alt: "DLF New Town Heights" },
  { src: "/communities_logo/olive.png", alt: "Olive Kalista" },
  { src: "/communities_logo/tata_tritvam.jpg", alt: "Tata Tritvam" },
  { src: "/communities_logo/tata_realty.png", alt: "Tata Realty" },
  { src: "/communities_logo/malabar.jpg", alt: "Malabar Developers" },
  { src: "/communities_logo/purva.jpg", alt: "Purva Grandbay" },
  { src: "/communities_logo/kent.jpg", alt: "Kent Palm Villas" },
  { src: "/communities_logo/galaxy.jpg", alt: "Galaxy Kingston" },
  { src: "/communities_logo/mather.png", alt: "Mather Serenade" },
  { src: "/communities_logo/noel.jpg", alt: "Noel Greenature" },
  { src: "/communities_logo/sfs.jpg", alt: "SFS Flats" },
  { src: "/communities_logo/green_vistas.jpg", alt: "Green Vistas" },
  { src: "/communities_logo/abad.png", alt: "ABAD Chancellor" },
  { src: "/communities_logo/midream.jpg", alt: "Indus MinDream Villas" },
  { src: "/communities_logo/kristal.jpg", alt: "Kristal Garnet Villas" },
];

const CommunitiesMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Animated entry: refs for each logo
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Store observers for cleanup
  const observers = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    let tween: null | { pause: () => void; resume: () => void; kill: () => void } = null;
    import('gsap').then((gsap) => {
      const marquee = marqueeRef.current;
      if (!marquee) return;
      const marqueeWidth = marquee.scrollWidth / 2;
      tween = gsap.default.to(marquee, {
        x: -marqueeWidth,
        duration: 30,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.default.utils.unitize(x => parseFloat(x) % -marqueeWidth),
        },
      });
      // Pause on hover
      const handleMouseEnter = () => {
        if (tween) tween.pause();
      };
      const handleMouseLeave = () => {
        if (tween) tween.resume();
      };
      marquee.addEventListener("mouseenter", handleMouseEnter);
      marquee.addEventListener("mouseleave", handleMouseLeave);
      // Cleanup
      return () => {
        marquee.removeEventListener("mouseenter", handleMouseEnter);
        marquee.removeEventListener("mouseleave", handleMouseLeave);
        if (tween) tween.kill();
      };
    });
  }, []);

  // Animated entry: Intersection Observer for each logo
  useEffect(() => {
    import('gsap').then((gsap) => {
      logoRefs.current.forEach((el) => {
        if (!el) return;
        gsap.default.set(el, { opacity: 0, scale: 0.9 });
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.default.to(el, { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(el);
        observers.current.push(observer);
      });
    });
    return () => {
      observers.current.forEach((observer) => observer.disconnect());
      observers.current = [];
    };
  }, []);

  // Duplicate logos for seamless loop
  const logos = [...logoFiles, ...logoFiles];

  return (
    <section className="w-full bg-white py-8 md:py-12" aria-label="Trusted Communities">
      <Container>
        <div className="flex flex-col items-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="font-fractul text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue text-center tracking-wide">
            Trusted by Leading Communities
          </h2>
        </div>
        <div className="overflow-x-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center gap-4 sm:gap-6 lg:gap-8 py-2"
            style={{ width: "max-content" }}
          >
            {logos.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                ref={el => {
                  logoRefs.current.push(el);
                }}
                className="flex-shrink-0 flex items-center justify-center h-12 w-20 sm:h-14 sm:w-28 lg:h-16 lg:w-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain h-12 sm:h-14 lg:h-16 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                  width={120}
                  height={64}
                  priority={idx < 3}
                  loading={idx < 3 ? undefined : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitiesMarquee; 