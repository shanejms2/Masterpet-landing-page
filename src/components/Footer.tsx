"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { areaConfig } from "@/lib/areaConfig";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import PhoneLink from "./PhoneLink";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FEATURED_AREA_COUNT = 6;

const socials = [
  { href: "https://instagram.com/masterpet_official", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61555806585903", label: "Facebook", icon: Facebook },
  { href: "https://www.youtube.com/@Masterpetofficial", label: "YouTube", icon: Youtube },
  { href: "https://www.linkedin.com/company/masterpet-care/", label: "LinkedIn", icon: Linkedin },
];

const quickLinks = [
  { href: "/pet-shop-kochi", label: "Pet Shop" },
  { href: "/crm", label: "CRM" },
  { href: "/contact", label: "Contact" },
  { href: "/#pricing", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/return-policy", label: "Return Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
];

const featuredAreas = areaConfig.slice(0, FEATURED_AREA_COUNT);
const moreAreas = areaConfig.slice(FEATURED_AREA_COUNT);
const areaLinkClass =
  "text-sm text-white/65 transition-colors hover:text-white";

const Footer = () => (
  <>
    <footer className="w-full bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Image
              src="/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png"
              alt="Masterpet Logo"
              width={48}
              height={48}
              className="size-12"
            />
            <p className="font-body text-sm text-white/70">Pet Care, Mastered.</p>
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Button key={social.href} asChild variant="ghost-on-dark" size="icon">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-green">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-green">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <PhoneLink className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white">
                <Phone className="size-4 text-brand-green" />
                <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
              </PhoneLink>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                onClick={() => trackWhatsappClick()}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <FaWhatsapp className="size-4 text-brand-green" />
                <span>WhatsApp us</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-brand-green" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a
                href={COMPANY_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <span>
                  {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLocality},{" "}
                  {COMPANY_INFO.addressCity}, {COMPANY_INFO.addressRegion}{" "}
                  {COMPANY_INFO.postalCode}
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-green">
              Service Areas
            </h3>
            <nav aria-label="Featured service areas" className="flex flex-col gap-2">
              <Link href="/kochi-pet-grooming" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                All Kochi Areas
              </Link>
              {featuredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/kochi-pet-grooming/${area.slug}`}
                  className={areaLinkClass}
                >
                  Pet Grooming in {area.name}
                </Link>
              ))}
            </nav>
            {moreAreas.length > 0 && (
              <details className="group">
                <summary
                  className={`${areaLinkClass} flex cursor-pointer list-none items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm [&::-webkit-details-marker]:hidden`}
                >
                  <ChevronDown
                    className="size-4 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                  More service areas ({moreAreas.length})
                </summary>
                <nav
                  aria-label="All service areas"
                  className="mt-2 flex max-h-52 flex-col gap-2 overflow-y-auto pr-1"
                >
                  {moreAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/kochi-pet-grooming/${area.slug}`}
                      className={areaLinkClass}
                    >
                      Pet Grooming in {area.name}
                    </Link>
                  ))}
                </nav>
              </details>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-green">
              Business Hours
            </h3>
            <p className="text-sm text-white/70">{COMPANY_INFO.hoursDisplay}</p>
            <p className="text-sm text-white/70">Open all days</p>
            <Separator className="bg-white/10" />
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-green">
              Legal
            </h4>
            <nav className="flex flex-col gap-1.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="mt-12 bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 pt-8 md:flex-row">
          <p className="text-sm text-white/45">
            &copy; {new Date().getFullYear()} Masterpet Care Private Limited. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-white/45">
            Made with
            <Heart className="size-4 fill-brand-green text-brand-green" />
            for pets
          </p>
        </div>
      </div>
    </footer>

    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-blue/10 bg-background p-3 md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Button asChild variant="outline" className="flex-1 rounded-full">
          <PhoneLink>
            <Phone data-icon="inline-start" />
            Call
            <span className="sr-only" data-google-ads-phone-label>
              {COMPANY_INFO.phoneDisplay}
            </span>
          </PhoneLink>
        </Button>
        <Button asChild variant="brand" className="flex-1">
          <a
            href={getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick()}
            aria-label="Book grooming session on WhatsApp"
          >
            <FaWhatsapp data-icon="inline-start" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </>
);

export default Footer;
