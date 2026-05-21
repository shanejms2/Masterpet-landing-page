"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Users, Building2 } from "lucide-react";
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

const stats = [
  {
    value: "15+",
    label: "Premium Communities",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    value: "2000+",
    label: "Happy Pet Parents",
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    icon: Star,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const CommunitiesMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Animated entry: refs for each logo
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Store observers for cleanup
  const observers = useRef<IntersectionObserver[]>([]);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let tween: null | { pause: () => void; resume: () => void; kill: () => void } = null;
    import('gsap').then((gsap) => {
      const marquee = marqueeRef.current;
      if (!marquee) return;
      const marqueeWidth = marquee.scrollWidth / 2;
      tween = gsap.default.to(marquee, {
        x: -marqueeWidth,
        duration: 40, // Slower, more elegant speed
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
        gsap.default.set(el, { opacity: 0, scale: 0.8 });
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.default.to(el, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.3 }
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

  // Stats animation
  useEffect(() => {
    import('gsap').then((gsap) => {
      statsRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.default.set(el, { opacity: 0, y: 30 });
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.default.to(el, { 
                  opacity: 1, 
                  y: 0, 
                  duration: 0.6, 
                  ease: "power2.out",
                  delay: index * 0.1
                });
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
  }, []);

  // Duplicate logos for seamless loop
  const logos = [...logoFiles, ...logoFiles];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50/30 py-12 md:py-16" id="communities" aria-label="Trusted Communities">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-fractul text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 tracking-tight">
            Trusted by Leading Communities
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-2xl mx-auto">
            Partnering with premium residential communities across Kochi to deliver exceptional pet care services.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-x-hidden">
            <div
              ref={marqueeRef}
              className="flex items-center gap-8 md:gap-12 lg:gap-16 py-4"
              style={{ width: "max-content" }}
            >
              {logos.map((logo, idx) => (
                <div
                  key={`${logo.alt}-${idx}`}
                  ref={el => {
                    logoRefs.current.push(el);
                  }}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  {/* Logo Container with Consistent Dimensions */}
                  <div className="relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md hover:border-brand-green/20 transition-all duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      width={192}
                      height={96}
                      priority={idx < 6}
                      loading={idx < 6 ? undefined : "lazy"}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 md:mt-20">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    ref={el => {
                      statsRefs.current[index] = el;
                    }}
                    className={`group relative p-6 md:p-8 rounded-2xl border-2 ${stat.bgColor} ${stat.borderColor} hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Value */}
                    <div className="text-center mb-2">
                      <div className="font-fractul text-3xl md:text-4xl font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-300">
                        {stat.value}
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-center">
                      <div className="font-body text-sm md:text-base text-brand-blue/70 group-hover:text-brand-blue/90 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-green/30 rounded-2xl transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitiesMarquee; 