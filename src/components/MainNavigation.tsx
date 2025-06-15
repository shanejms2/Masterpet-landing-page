"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Container from "./Container";
import Logo from './ui/Logo';
import Image from 'next/image';
import { X, Menu } from "lucide-react";
import { NAV_LINKS } from "./navConfig";
import { usePathname } from "next/navigation";

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>("a,button");
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (!focusable) return;
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [mobileOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!mobileMenuRef.current?.contains(e.target as Node) && !hamburgerRef.current?.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Announce mobile menu state
  const [menuAnnouncement, setMenuAnnouncement] = useState("");
  useEffect(() => {
    setMenuAnnouncement(mobileOpen ? "Navigation menu opened" : "Navigation menu closed");
  }, [mobileOpen]);

  // Desktop nav rendering
  const pathname = usePathname();
  const renderNavLinks = () => {
    return NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={
          `px-4 py-2 rounded font-fractul text-base transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue outline-none ` +
          (pathname === link.href ? "bg-brand-green text-brand-blue font-bold" : "hover:bg-brand-green/20 text-brand-blue")
        }
        tabIndex={0}
        aria-label={link.label}
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex flex-col sm:flex-row justify-center items-center py-2.5 md:py-2 bg-white border-none shadow-none font-fractul"
      aria-label="Main navigation"
      role="navigation"
    >
      <Container>
        <div className="w-full flex flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center sm:justify-start w-auto focus-visible:ring-2 focus-visible:ring-brand-blue rounded transition py-2 md:py-3" tabIndex={0} aria-label="Masterpet Home">
            <Logo size="sm-medium" tabIndex={0} aria-label="Masterpet Logo" />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-2 sm:gap-3">
            {renderNavLinks()}
          </div>
          {/* Combined Call & WhatsApp pill (tablet/desktop only, minimal icons only) */}
          <div className="hidden md:flex flex-row items-center w-auto sm:ml-4 gap-2">
            <a
              href="tel:+918590643269"
              className="flex items-center justify-center rounded-full p-2 hover:bg-brand-green/10 transition focus-visible:ring-2 focus-visible:ring-brand-green outline-none"
              aria-label="Call Masterpet at +91 85906 43269"
              tabIndex={0}
            >
              <Image src="/icons/call.svg" alt="" width={24} height={24} className="h-6 w-6 mr-2" aria-hidden="true" />
              <span className="font-fractul font-normal text-brand-primary text-base">+91 85906 43269</span>
            </a>
          </div>
          {/* Hamburger for mobile */}
          <button
            ref={hamburgerRef}
            className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-8 w-8 text-brand-blue" /> : <Menu className="h-8 w-8 text-brand-blue" />}
          </button>
        </div>
      </Container>
      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col pt-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
        tabIndex={-1}
        style={{ minHeight: "100vh" }}
      >
        {/* Header: Logo + Close */}
        <div className="flex items-center justify-between px-6 mb-2">
          <Logo size="sm-medium" tabIndex={0} aria-label="Masterpet Logo" />
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
            <X className="h-7 w-7 text-brand-primary" />
          </button>
        </div>
        {/* Menu Items */}
        <nav className="flex-1 flex flex-col w-full gap-2 px-6 mt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                `px-4 py-3 rounded font-fractul text-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue outline-none w-full text-left ` +
                (pathname === link.href ? "bg-brand-green text-brand-blue font-bold" : "hover:bg-brand-green/20 text-brand-blue")
              }
              tabIndex={0}
              aria-label={link.label}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col gap-3 px-6 pb-8 mt-auto w-full">
          <a
            href="tel:+918590643269"
            className="flex items-center gap-2 w-full justify-center py-3 rounded-full bg-brand-green/10 hover:bg-brand-green/20 transition focus-visible:ring-2 focus-visible:ring-brand-green text-brand-primary font-normal text-base"
            aria-label="Call Masterpet at +91 85906 43269"
            tabIndex={0}
          >
            <Image src="/icons/call.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden="true" />
            +91 85906 43269
            <span className="ml-2 px-2 py-0.5 rounded bg-brand-green/10 text-xs font-normal">Call us</span>
          </a>
          <a
            href="https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20want%20to%20book%20a%20grooming%20session.%20[From%20Masterpet%20Website]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center py-3 rounded-full bg-brand-green/10 hover:bg-brand-green/20 transition focus-visible:ring-2 focus-visible:ring-brand-green text-brand-primary font-normal text-base"
            aria-label="Chat with Masterpet on WhatsApp"
            tabIndex={0}
          >
            <Image src="/icons/whatsapp_green.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden="true" />
            WhatsApp
            <span className="ml-2 px-2 py-0.5 rounded bg-brand-green/10 text-xs font-normal">Chat</span>
          </a>
        </div>
        <span className="sr-only" aria-live="polite">{menuAnnouncement}</span>
      </div>
    </nav>
  );
} 