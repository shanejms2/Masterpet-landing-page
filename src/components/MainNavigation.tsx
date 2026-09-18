"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import Container from "./Container";
import Logo from "./ui/Logo";
import { X, Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS } from "./navConfig";
import { usePathname } from "next/navigation";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import PhoneLink from "./PhoneLink";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []
      );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      hamburgerRef.current?.focus();
    };
  }, [mobileOpen, closeMobileMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!mobileMenuRef.current?.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen, closeMobileMenu]);

  const [menuAnnouncement, setMenuAnnouncement] = useState("");
  useEffect(() => {
    setMenuAnnouncement(mobileOpen ? "Navigation menu opened" : "Navigation menu closed");
  }, [mobileOpen]);

  const pathname = usePathname();

  const linkActiveClass = (href: string, base: string) =>
    base +
    (pathname === href
      ? "text-brand-blue font-semibold"
      : "text-brand-blue/60 hover:text-brand-blue");

  return (
    <header className="sticky top-0 left-0 w-full z-50 border-b border-brand-blue/[0.08] bg-white/95 backdrop-blur-md font-fractul">
      <nav className="py-3" aria-label="Main navigation">
        <Container>
          <div className="w-full flex flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-md"
              aria-label="Masterpet Home"
            >
              <Logo size="sm-medium" aria-label="Masterpet Logo" />
            </Link>
            <div className="hidden lg:flex flex-1 justify-center items-center gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkActiveClass(
                    link.href,
                    "whitespace-nowrap font-fractul text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm outline-none "
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <PhoneLink className="hidden items-center gap-2 text-sm font-medium text-brand-blue/70 hover:text-brand-blue transition-colors xl:flex">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
              </PhoneLink>
              <a
                href={getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick()}
                className="hidden lg:inline-flex mp-cta-accent !px-4 !py-2 text-sm"
                aria-label="Book grooming session on WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                Book
              </a>
            </div>
            <button
              ref={hamburgerRef}
              className="lg:hidden p-2 rounded-md hover:bg-[#F6F7F9] focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              tabIndex={mobileOpen ? -1 : 0}
              aria-hidden={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6 text-brand-blue" aria-hidden="true" /> : <Menu className="h-6 w-6 text-brand-blue" aria-hidden="true" />}
            </button>
          </div>
        </Container>
      </nav>

      <div
        id="mobile-nav"
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col pt-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileOpen}
        tabIndex={-1}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex items-center justify-between px-6 mb-8">
          <Logo size="sm-medium" aria-label="Masterpet Logo" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-[#F6F7F9] focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <X className="h-6 w-6 text-brand-blue" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 flex flex-col w-full gap-1 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkActiveClass(
                link.href,
                "px-3 py-3 rounded-lg font-fractul text-lg font-medium transition-colors w-full text-left "
              )}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 px-6 pb-28 mt-auto w-full">
          <PhoneLink className="mp-cta-secondary w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
          </PhoneLink>
          <a
            href={getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsappClick();
              closeMobileMenu();
            }}
            className="mp-cta-accent w-full"
            aria-label="Book grooming session on WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            Book on WhatsApp
          </a>
        </div>
        <span className="sr-only" aria-live="polite">{menuAnnouncement}</span>
      </div>
    </header>
  );
}
