"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY_INFO } from "@/lib/constants";

const links = [
  { href: "#modules", label: "Product" },
  { href: "#ai", label: "AI" },
  { href: "#pricing", label: "Pricing" },
];

const crmMailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent("Masterpet CRM enquiry")}`;

const CrmNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <nav
        className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Masterpet CRM"
      >
        <Link href="/crm" className="flex items-center gap-2 rounded-md">
          <Logo size="sm-medium" />
          <Badge variant="secondary">CRM</Badge>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline">
            <PhoneLink>
              <Phone data-icon="inline-start" />
              <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
            </PhoneLink>
          </Button>
          <Button asChild>
            <a href={crmMailto}>Email us</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Masterpet CRM</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {links.map((link) => (
                <Button key={link.href} asChild variant="ghost" className="justify-start">
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </Button>
              ))}
              <Button asChild variant="outline">
                <PhoneLink>
                  Call <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
                </PhoneLink>
              </Button>
              <Button asChild>
                <a href={crmMailto}>Email {COMPANY_INFO.email}</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default CrmNav;
