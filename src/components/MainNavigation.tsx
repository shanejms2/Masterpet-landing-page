"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import Container from "./Container";
import Logo from './ui/Logo';
import { X, Menu, Phone } from "lucide-react";
import { NAV_LINKS } from "./navConfig";
import { usePathname } from "next/navigation";
import { COMPANY_INFO } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  // Focus trap, escape, scroll lock, and focus restore
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

  // Close mobile menu on outside click
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
      ? "bg-brand-green text-brand-blue font-bold shadow-sm"
      : "hover:bg-brand-green/10 text-brand-blue hover:text-brand-blue/80");

  const renderDesktopNavLinks = () =>
    NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={linkActiveClass(
          link.href,
          "px-4 py-2 rounded-lg font-fractul text-base font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 outline-none "
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-none shadow-none font-fractul">
      <nav
        className="flex flex-col sm:flex-row justify-center items-center py-2.5 md:py-2"
        aria-label="Main navigation"
      >
        <Container>
          <div className="w-full flex flex-row items-center justify-between gap-2 sm:gap-4">
            <Link href="/" className="flex items-center justify-center sm:justify-start w-auto focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-lg transition py-2 md:py-3" aria-label="Masterpet Home">
              <Logo size="sm-medium" aria-label="Masterpet Logo" />
            </Link>
            <div className="hidden md:flex flex-1 justify-center items-center gap-2 sm:gap-3">
              {renderDesktopNavLinks()}
            </div>
            <div className="hidden md:flex flex-row items-center w-auto sm:ml-4 gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                onClick={() => trackPhoneClick()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 hover:bg-brand-green/20 text-brand-blue font-fractul font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 outline-none group"
                aria-label={`Call ${COMPANY_INFO.brandName} at ${COMPANY_INFO.phoneDisplay}`}
              >
                <Phone className="h-4 w-4 text-brand-green group-hover:text-brand-green/80 transition-colors" aria-hidden="true" />
                <span className="text-sm">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
            <button
              ref={hamburgerRef}
              className="md:hidden p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 transition-colors hover:bg-brand-green/10"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              tabIndex={mobileOpen ? -1 : 0}
              aria-hidden={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-8 w-8 text-brand-blue" aria-hidden="true" /> : <Menu className="h-8 w-8 text-brand-blue" aria-hidden="true" />}
            </button>
          </div>
        </Container>
      </nav>

      <div
        id="mobile-nav"
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col pt-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileOpen}
        tabIndex={-1}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex items-center justify-between px-6 mb-2">
          <Logo size="sm-medium" aria-label="Masterpet Logo" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 transition-colors hover:bg-brand-green/10"
          >
            <X className="h-7 w-7 text-brand-blue" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 flex flex-col w-full gap-2 px-6 mt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkActiveClass(
                link.href,
                "px-4 py-3 rounded-lg font-fractul text-lg font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 outline-none w-full text-left "
              )}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 px-6 pb-8 mt-auto w-full">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            onClick={() => trackPhoneClick()}
            className="flex items-center gap-3 w-full justify-center py-3 px-4 rounded-full bg-brand-green/10 hover:bg-brand-green/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 text-brand-blue font-fractul font-medium shadow-sm"
            aria-label={`Call ${COMPANY_INFO.brandName} at ${COMPANY_INFO.phoneDisplay}`}
          >
            <Phone className="h-5 w-5 text-brand-green" aria-hidden="true" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
            <span className="ml-auto px-2 py-1 rounded-full bg-brand-green/20 text-xs font-medium">Call us</span>
          </a>
        </div>
        <span className="sr-only" aria-live="polite">{menuAnnouncement}</span>
      </div>
    </header>
  );
}
