"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import Container from "@/components/Container";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import {
  PET_SHOP,
  PET_SHOP_CATEGORIES,
  PET_SHOP_FAQS,
  PET_SHOP_REACH_TIPS,
  VENNALA_NEARBY_AREAS,
} from "@/lib/pet-shop";

const shopWhatsApp = getWhatsAppUrl(
  "Hi Masterpet! I want to visit / enquire about the pet shop in Vennala. [From Pet Shop page]"
);

const directionsWhatsApp = (area: string) =>
  getWhatsAppUrl(
    `Hi Masterpet! I'm near ${area} and looking for the Vennala pet shop / pet supplies. [From Pet Shop page]`
  );

export default function PetShopPageContent() {
  const heroBrandRef = useRef<HTMLParagraphElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroCopyRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const gsapModule = await import("gsap");
        if (cancelled) return;
        const gsap = gsapModule.default;
        gsap.fromTo(
          [heroBrandRef.current, heroTitleRef.current, heroCopyRef.current, heroCtaRef.current],
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      } catch {
        // CSS fallback: elements remain visible
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* Hero — full-bleed, brand-first */}
      <section
        className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-[#D9EEFC] via-white to-brand-green/25"
        aria-label="Masterpet Pet Shop Vennala"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url('/brand_assets/Pattern/PATTERN.svg')",
            backgroundSize: "420px",
          }}
          aria-hidden
        />
        <Container className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col justify-center py-12 md:py-16">
          <div className="max-w-3xl">
            <p
              ref={heroBrandRef}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-4 tracking-tight"
            >
              Masterpet
            </p>
            <h1
              ref={heroTitleRef}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-tight mb-5"
            >
              Pet Shop in Vennala, Kochi
            </h1>
            <p
              ref={heroCopyRef}
              className="font-body text-lg md:text-xl text-brand-blue/80 max-w-xl mb-8 leading-relaxed"
            >
              Food, treats, accessories, and everyday essentials for your pets —
              opposite St. Mathews Church on Vennala High School Road.
            </p>
            <div
              ref={heroCtaRef}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <PhoneLink className="inline-flex items-center justify-center gap-3 font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white transition-all duration-300 text-lg">
                <Phone className="h-5 w-5" aria-hidden />
                Call Shop
                <span className="sr-only" data-google-ads-phone-label>
                  {PET_SHOP.phoneDisplay}
                </span>
              </PhoneLink>
              <a
                href={shopWhatsApp}
                onClick={() => trackWhatsappClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-heading bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white transition-all duration-300 text-lg"
              >
                <FaWhatsapp className="text-xl" aria-hidden />
                WhatsApp
              </a>
              <a
                href={PET_SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-heading text-brand-blue px-6 py-4 underline-offset-4 hover:underline text-lg"
              >
                <Navigation className="h-5 w-5" aria-hidden />
                Get directions
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Visit */}
      <section className="w-full py-16 md:py-24 bg-white" aria-label="Shop location and hours">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-3">
              Visit us in Vennala
            </h2>
            <p className="font-body text-lg text-brand-blue/70 mb-10">
              Walk in for pet supplies, or message us before you come so we can
              keep your favourites ready.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-brand-blue/10 pt-10">
            <div>
              <div className="flex items-center gap-2 text-brand-blue mb-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0" aria-hidden />
                <h3 className="font-heading text-xl font-semibold">Address</h3>
              </div>
              <p className="font-body text-brand-blue/80 leading-relaxed">
                {PET_SHOP.addressLine1}
                <br />
                {PET_SHOP.addressLandmark}
                <br />
                {PET_SHOP.addressLocality}, {PET_SHOP.addressCity},{" "}
                {PET_SHOP.addressRegion} {PET_SHOP.postalCode}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-blue mb-3">
                <Clock className="h-5 w-5 text-brand-green shrink-0" aria-hidden />
                <h3 className="font-heading text-xl font-semibold">Hours</h3>
              </div>
              <p className="font-body text-brand-blue/80 leading-relaxed">
                Open daily
                <br />
                {PET_SHOP.hoursDisplay}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-blue mb-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0" aria-hidden />
                <h3 className="font-heading text-xl font-semibold">Contact</h3>
              </div>
              <PhoneLink className="font-body text-brand-blue/80 hover:text-brand-blue underline-offset-2 hover:underline block mb-2">
                <span data-google-ads-phone-label>{PET_SHOP.phoneDisplay}</span>
              </PhoneLink>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-body text-brand-blue/80 hover:text-brand-blue underline-offset-2 hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* What we stock */}
      <section
        className="w-full py-16 md:py-24 bg-gradient-to-b from-[#D9EEFC]/50 to-white"
        aria-label="What you can find at the shop"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-3">
              What you&apos;ll find
            </h2>
            <p className="font-body text-lg text-brand-blue/70">
              A neighbourhood pet shop stocked for daily care — not just
              grooming day.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            {PET_SHOP_CATEGORIES.map((item) => (
              <li key={item.title} className="border-l-4 border-brand-green pl-5">
                <h3 className="font-heading text-xl font-semibold text-brand-blue mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-brand-blue/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How to reach */}
      <section
        className="w-full py-16 md:py-24 bg-white"
        aria-label="How to reach Masterpet Vennala"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-3">
              How to reach the shop
            </h2>
            <p className="font-body text-lg text-brand-blue/70">
              Easy to find if you know Vennala High School Road and St. Mathews
              Church.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
            {PET_SHOP_REACH_TIPS.map((tip) => (
              <li key={tip.title} className="border-l-4 border-brand-blue/20 pl-5">
                <h3 className="font-heading text-xl font-semibold text-brand-blue mb-1">
                  {tip.title}
                </h3>
                <p className="font-body text-brand-blue/70">{tip.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Nearby areas — conversion CTAs + grooming links */}
      <section
        className="w-full py-16 md:py-24 bg-gradient-to-b from-[#D9EEFC]/40 to-white"
        id="near-vennala"
        aria-label="Areas near Vennala pet shop"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-3">
              Near Vennala? We&apos;re close
            </h2>
            <p className="font-body text-lg text-brand-blue/70">
              Pet parents from these neighbourhoods visit us for supplies —
              message us your area, or book at-home grooming nearby.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENNALA_NEARBY_AREAS.map((area) => (
              <li
                key={area.name}
                className="border-b border-brand-blue/10 pb-4"
              >
                <span className="block font-heading text-lg font-semibold text-brand-blue">
                  {area.name}
                </span>
                <span className="font-body text-sm text-brand-blue/60 block mb-3">
                  {area.blurb}
                </span>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href={directionsWhatsApp(area.name)}
                    onClick={() => trackWhatsappClick()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-brand-blue underline-offset-2 hover:underline inline-flex items-center gap-1"
                  >
                    WhatsApp
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                  {area.groomingSlug ? (
                    <Link
                      href={`/kochi-pet-grooming/${area.groomingSlug}`}
                      className="font-body text-brand-blue/70 underline-offset-2 hover:underline hover:text-brand-blue"
                    >
                      At-home grooming in {area.name}
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="w-full py-16 md:py-24 bg-white"
        aria-label="Pet shop frequently asked questions"
      >
        <Container>
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-3">
              Pet shop FAQs
            </h2>
            <p className="font-body text-lg text-brand-blue/70">
              Quick answers before you visit or message us.
            </p>
          </div>
          <dl className="max-w-3xl space-y-8">
            {PET_SHOP_FAQS.map((item) => (
              <div key={item.question}>
                <dt className="font-heading text-xl font-semibold text-brand-blue mb-2">
                  {item.question}
                </dt>
                <dd className="font-body text-brand-blue/75 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Grooming cross-sell */}
      <section
        className="w-full py-16 md:py-20 bg-brand-blue text-white"
        aria-label="At-home grooming"
      >
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Need grooming too?
              </h2>
              <p className="font-body text-lg text-white/80">
                Same Masterpet team — professional at-home pet grooming across
                Kochi, including homes near Vennala.
              </p>
            </div>
            <Link
              href="/kochi-pet-grooming"
              className="inline-flex items-center justify-center gap-2 font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors shrink-0"
            >
              At-home grooming
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#D9EEFC] to-brand-green/20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Come say hi in Vennala
              </h2>
              <p className="font-body text-lg text-brand-blue/70 mb-8 max-w-lg">
                Call, WhatsApp, or follow directions to Masterpet on Vennala
                High School Road — open {PET_SHOP.hoursDisplay}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <PhoneLink className="inline-flex items-center justify-center gap-2 font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full text-lg hover:bg-brand-blue hover:text-white transition-colors">
                  <Phone className="h-5 w-5" aria-hidden />
                  {PET_SHOP.phoneDisplay}
                </PhoneLink>
                <a
                  href={PET_SHOP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-heading border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-full text-lg hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <Image
                src={COMPANY_INFO.logoPath}
                alt="Masterpet"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
