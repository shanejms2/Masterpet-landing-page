import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { areaConfig } from "@/lib/areaConfig";

const socials = [
  { href: "https://instagram.com/masterpet_official", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "https://www.facebook.com/profile.php?id=61555806585903", label: "Facebook", icon: "/icons/facebook.svg" },
  { href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40Masterpetofficial&h=AT33jAGNp2g5ZPtea3eY2fAdwsoQ50sRc479nOoXLFjhtgsxv1vuA-kabnadp30a9p8Re4d_071ypuTnevQfJqvJRE9BTSEmQ1fMr2SFxDPiD4PjUfF3wT4lPyNbV_seyUUCvo1hra58D2h97YMQhpALpw", label: "YouTube", icon: "/icons/youtube.svg" },
  { href: "https://www.linkedin.com/company/masterpet-care/", label: "LinkedIn", icon: "/icons/linkedin.svg" },
];

const quickLinks = [
  { href: "/contact", label: "Contact" },
  { href: "#pricing", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/return-policy", label: "Return Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
];

// Use all areas for maximum SEO benefit
const footerAreas = areaConfig;

const Footer = () => (
  <footer className="w-full border-t bg-[#D9EEFC]">
    <div className="container mx-auto px-4 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png"
              alt="Masterpet Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <p className="text-sm text-[#00008D] text-center font-medium">
              Pet Care, Mastered.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00008D]/80 hover:text-[#00008D] transition-colors"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-[#00008D]">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-[#00008D]">Contact</h3>
          <div className="space-y-3">
            <a
              href="tel:+918590643269"
              className="flex items-center gap-2 text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 85906 43269</span>
            </a>
            <a
              href="https://wa.me/918590643269"
              className="flex items-center gap-2 text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>WhatsApp us</span>
            </a>
            <a
              href="mailto:hello@masterpet.co.in"
              className="flex items-center gap-2 text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@masterpet.co.in</span>
            </a>
            <a
              href="https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Aluva, Kerala</span>
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-[#00008D]">Service Areas</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/kochi-pet-grooming"
              className="text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors font-medium"
            >
              All Kochi Areas
            </Link>
            {footerAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/kochi-pet-grooming/${area.slug}`}
                className="text-sm text-[#00008D]/80 hover:text-[#00008D] transition-colors"
              >
                Pet Grooming in {area.name}
              </Link>
            ))}

          </nav>
        </div>

        {/* Business Hours & Legal */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-[#00008D]">Business Hours</h3>
          <div className="space-y-2">
            <p className="text-sm text-[#00008D]/80">
              9:30 AM – 7:30 PM
            </p>
            <p className="text-sm text-[#00008D]/80">
              Open all days
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-heading font-semibold text-[#00008D] text-sm mb-2">Legal</h4>
            <nav className="flex flex-col space-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#00008D]/70 hover:text-[#00008D] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#00008D]/70 text-center md:text-left">
            &copy; {new Date().getFullYear()} Masterpet Care Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-[#00008D]/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-brand-green fill-brand-green" />
            <span>for pets</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 