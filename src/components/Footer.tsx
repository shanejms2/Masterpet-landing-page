import Image from "next/image";
import Link from "next/link";

const socials = [
  { href: "https://instagram.com/masterpet_official", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "https://www.facebook.com/profile.php?id=61555806585903", label: "Facebook", icon: "/icons/facebook.svg" },
  { href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40Masterpetofficial&h=AT33jAGNp2g5ZPtea3eY2fAdwsoQ50sRc479nOoXLFjhtgsxv1vuA-kabnadp30a9p8Re4d_071ypuTnevQfJqvJRE9BTSEmQ1fMr2SFxDPiD4PjUfF3wT4lPyNbV_seyUUCvo1hra58D2h97YMQhpALpw", label: "YouTube", icon: "/icons/youtube.svg" },
  { href: "https://www.linkedin.com/company/masterpet-care/", label: "LinkedIn", icon: "/icons/linkedin.svg" },
];

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const Footer = () => (
  <footer className="w-full bg-brand-green/20 text-[#00008d] pt-12 pb-6">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
      {/* Brand/Logo */}
      <div className="flex flex-col items-start md:items-center gap-2 mb-6 md:mb-0">
        <Image
          src="/brand_assets/Word-Mark/Green/MP_Wordmark(Green_fill).png"
          alt="Masterpet Logo"
          width={140}
          height={40}
          className="mb-2"
        />
        <span className="font-heading text-lg text-[#00008d]">Pet Care, Mastered.</span>
      </div>
      {/* Contact Info */}
      <div className="flex flex-col gap-2 mb-6 md:mb-0">
        <span className="font-heading text-base mb-1 text-[#00008d]">Contact</span>
        <a href="tel:+918590643269" className="font-body hover:underline text-base text-[#00008d]" aria-label="Call Masterpet">+91 85906 43269</a>
        <a href="mailto:hello@masterpet.co.in" className="font-body hover:underline text-base text-[#00008d]" aria-label="Email Masterpet">hello@masterpet.co.in</a>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col gap-2 mb-6 md:mb-0">
        <span className="font-heading text-base mb-1 text-[#00008d]">Quick Links</span>
        {quickLinks.map(link => (
          <a key={link.href} href={link.href} className="font-body hover:underline text-base text-[#00008d]" aria-label={link.label}>{link.label}</a>
        ))}
      </div>
      {/* Social & Legal */}
      <div className="flex flex-col gap-2">
        <span className="font-heading text-base mb-1 text-[#00008d]">Follow Us</span>
        <div className="flex gap-3 mb-2">
          {socials.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:opacity-80">
              <Image src={s.icon} alt={s.label} width={28} height={28} />
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-1 mt-2">
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-body text-xs hover:underline text-[#00008d]" aria-label={link.label}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-[#00008dcc] mt-8">
      &copy; {new Date().getFullYear()} Masterpet Care Private Limited. All rights reserved.
    </div>
  </footer>
);

export default Footer; 