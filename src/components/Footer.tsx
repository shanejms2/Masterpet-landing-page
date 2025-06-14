import Image from "next/image";
import Link from "next/link";

const socials = [
  { href: "https://instagram.com/masterpet_official", label: "Instagram", icon: "/icons/instagram.svg", hover: "hover:text-[#E1306C]" },
  { href: "https://www.facebook.com/profile.php?id=61555806585903", label: "Facebook", icon: "/icons/facebook.svg", hover: "hover:text-[#1877F3]" },
  { href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40Masterpetofficial&h=AT33jAGNp2g5ZPtea3eY2fAdwsoQ50sRc479nOoXLFjhtgsxv1vuA-kabnadp30a9p8Re4d_071ypuTnevQfJqvJRE9BTSEmQ1fMr2SFxDPiD4PjUfF3wT4lPyNbV_seyUUCvo1hra58D2h97YMQhpALpw", label: "YouTube", icon: "/icons/youtube.svg", hover: "hover:text-[#FF0000]" },
  { href: "https://www.linkedin.com/company/masterpet-care/", label: "LinkedIn", icon: "/icons/linkedin.svg", hover: "hover:text-[#0077B5]" },
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
  <footer className="relative w-full bg-[#F0FFB3] pt-12 pb-6 rounded-t-3xl shadow-[0_-2px_24px_0_rgba(0,0,0,0.06)] border-t border-[#e0f2be] overflow-hidden">
    {/* Sparkle Pattern Overlay */}
    <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
      <svg width="100%" height="100%" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="30" r="2" fill="#DAF676" />
        <circle cx="200" cy="80" r="1.5" fill="#DAF676" />
        <circle cx="400" cy="50" r="2.5" fill="#DAF676" />
        <circle cx="550" cy="100" r="1.5" fill="#DAF676" />
        <circle cx="300" cy="20" r="1.5" fill="#DAF676" />
      </svg>
    </div>
    {/* Mascot - Desktop */}
    <div className="hidden md:block absolute bottom-0 right-0 z-10 w-40 h-40 pointer-events-none select-none">
      <Image src="/brand_assets/Mascot/bothwaving/MP_bothwaving.svg" alt="Masterpet Mascot" fill style={{objectFit:'contain'}} />
    </div>
    {/* Mascot - Mobile */}
    <div className="block md:hidden w-24 h-24 mx-auto mb-2 pointer-events-none select-none">
      <Image src="/brand_assets/Mascot/bothwaving/MP_bothwaving.svg" alt="Masterpet Mascot" fill style={{objectFit:'contain'}} />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 gap-y-6">
      {/* Contact Info - NAP details */}
      <div className="flex flex-col mb-6 md:mb-0">
        <span className="font-gliker text-base font-bold mb-1 text-[#00008D]">Contact</span>
        <a
          href="https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gliker text-[1.05rem] text-[#1b1582] leading-tight mb-1 hover:text-[#4bb36d] transition-colors duration-150 underline-offset-2 hover:underline"
          aria-label="View Masterpet location on Google Maps"
        >
          Masterpet - Mobile At Home Pet Grooming Ernakulam
        </a>
        <div className="font-fractul text-xs text-[#1b1582] leading-relaxed font-normal mb-3">
          Anu Villa, XVI / 80,<br />
          Nethaji Rd, near YMCA Indoor Stadium,<br />
          Periyar Nagar, Aluva, Kerala 683101
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <a href="tel:+918590643269" className="flex items-center gap-2 text-sm text-[#1b1582] hover:text-[#4bb36d] transition-colors duration-150 font-fractul group" aria-label="Call Masterpet">
            <span className="text-[1.1rem] opacity-70 group-hover:opacity-100">📞</span>
            <span className="underline-offset-2 group-hover:underline">+91 85906 43269</span>
          </a>
          <a href="https://wa.me/918590643269" className="flex items-center gap-2 text-sm text-[#1b1582] hover:text-[#4bb36d] transition-colors duration-150 font-fractul group" aria-label="WhatsApp Masterpet">
            <span className="text-[1.1rem] opacity-70 group-hover:opacity-100">💬</span>
            <span className="underline-offset-2 group-hover:underline">WhatsApp us</span>
          </a>
          <a href="mailto:hello@masterpet.co.in" className="flex items-center gap-2 text-sm text-[#1b1582] hover:text-[#4bb36d] transition-colors duration-150 font-fractul group" aria-label="Email Masterpet">
            <span className="text-[1.1rem] opacity-70 group-hover:opacity-100">✉️</span>
            <span className="underline-offset-2 group-hover:underline">hello@masterpet.co.in</span>
          </a>
        </div>
        <div className="text-xs text-[#1b1582] font-normal mb-2 font-fractul">Hours: 9:00 AM – 8:30 PM <span className="font-normal">(Open all days)</span></div>
        <a href="https://masterpet.co.in/" className="flex items-center gap-2 text-sm text-[#1b1582] hover:text-[#4bb36d] transition-colors duration-150 font-fractul group mt-1" aria-label="Visit Masterpet website">
          <span className="text-[1.1rem] opacity-70 group-hover:opacity-100">🌐</span>
          <span className="underline-offset-2 group-hover:underline">https://masterpet.co.in/</span>
        </a>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col gap-1 mb-6 md:mb-0">
        <span className="font-gliker text-base font-bold mb-1 text-[#00008D]">Quick Links</span>
        {quickLinks.map(link => (
          <a key={link.href} href={link.href} className="font-fractul hover:text-[#4bb36d] hover:underline underline-offset-2 text-sm text-[#1b1582] font-medium transition-colors duration-150" aria-label={link.label}>{link.label}</a>
        ))}
      </div>
      {/* Social & Legal */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <span className="font-gliker text-base font-bold mb-1 text-[#00008D]">Follow Us</span>
        <div className="flex gap-3 mb-2">
          {socials.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`transition-colors duration-150 ${s.hover}`}>
              <Image src={s.icon} alt={s.label} width={24} height={24} />
            </a>
          ))}
        </div>
        {/* Divider and Legal Links */}
        <div className="w-full border-t border-[#e0f2be] my-2"></div>
        <span className="font-gliker text-xs font-bold mb-1 text-[#00008D]">Legal</span>
        <div className="flex flex-col gap-1 mt-0">
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-fractul text-xs hover:text-[#4bb36d] hover:underline underline-offset-2 text-[#1b1582] font-medium transition-colors duration-150" aria-label={link.label}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
    {/* Divider for mobile */}
    <div className="block md:hidden border-t border-[#e0f2be] my-6"></div>
    <div className="relative z-10 text-center text-xs text-[#1b1582bb] mt-8 font-fractul tracking-wide font-normal">
      &copy; {new Date().getFullYear()} Masterpet Care Private Limited. All rights reserved.
    </div>
  </footer>
);

export default Footer; 