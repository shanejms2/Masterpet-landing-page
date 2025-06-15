import Image from "next/image";
import Link from "next/link";

const socials = [
  { href: "https://instagram.com/masterpet_official", label: "Instagram", icon: "/icons/instagram.svg", hover: "hover:text-[#E1306C]" },
  { href: "https://www.facebook.com/profile.php?id=61555806585903", label: "Facebook", icon: "/icons/facebook.svg", hover: "hover:text-[#1877F3]" },
  { href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40Masterpetofficial&h=AT33jAGNp2g5ZPtea3eY2fAdwsoQ50sRc479nOoXLFjhtgsxv1vuA-kabnadp30a9p8Re4d_071ypuTnevQfJqvJRE9BTSEmQ1fMr2SFxDPiD4PjUfF3wT4lPyNbV_seyUUCvo1hra58D2h97YMQhpALpw", label: "YouTube", icon: "/icons/youtube.svg", hover: "hover:text-[#FF0000]" },
  { href: "https://www.linkedin.com/company/masterpet-care/", label: "LinkedIn", icon: "/icons/linkedin.svg", hover: "hover:text-[#0077B5]" },
];

const quickLinks = [
  { href: "/contact", label: "Contact" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/return-policy", label: "Return & Refund Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
];

const Footer = () => (
  <footer className="relative w-full bg-[#F0FFB3] pt-8 pb-4 rounded-t-3xl shadow-[0_-2px_24px_0_rgba(0,0,0,0.06)] border-t border-[#e0f2be] overflow-hidden px-4">
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
    {/* Mascot - Mobile (above all content) */}
    <div className="block md:hidden w-16 h-16 mx-auto mb-6 mt-2 relative z-10 pointer-events-none select-none">
      <Image src="/brand_assets/Mascot/bothwaving/MP_bothwaving.svg" alt="Masterpet Mascot" fill style={{objectFit:'contain'}} loading="lazy" />
    </div>
    {/* Mascot - Desktop */}
    <div className="hidden md:block absolute bottom-0 right-0 z-10 w-40 h-40 pointer-events-none select-none">
      <Image src="/brand_assets/Mascot/bothwaving/MP_bothwaving.svg" alt="Masterpet Mascot" fill style={{objectFit:'contain'}} loading="lazy" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 gap-y-0 md:gap-y-6">
      {/* Contact Info - NAP details */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 space-y-2">
        <span className="font-gliker text-base md:text-base font-semibold md:font-bold mb-1 text-[#00008D]">Contact</span>
        <a
          href="https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gliker text-[1.05rem] text-[#1b1582] leading-tight mb-1 hover:text-[#4bb36d] transition-colors duration-150 underline-offset-2 hover:underline text-center md:text-left"
          aria-label="View Masterpet location on Google Maps"
        >
          Masterpet - Mobile At Home Pet Grooming Ernakulam
        </a>
        <div className="font-fractul text-xs text-[#1b1582] leading-relaxed font-normal mb-2">
          Anu Villa, XVI / 80,<br />
          Nethaji Rd, near YMCA Indoor Stadium,<br />
          Periyar Nagar, Aluva, Kerala 683101
        </div>
        <div className="flex flex-col gap-2 mb-2">
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
        <div className="text-xs text-[#1b1582] font-normal mb-1 font-fractul">Hours: 9:00 AM – 8:30 PM <span className="font-normal">(Open all days)</span></div>
        <a href="https://masterpet.co.in/" className="flex items-center gap-2 text-sm text-[#1b1582] hover:text-[#4bb36d] transition-colors duration-150 font-fractul group mt-1" aria-label="Visit Masterpet website">
          <span className="text-[1.1rem] opacity-70 group-hover:opacity-100">🌐</span>
          <span className="underline-offset-2 group-hover:underline">https://masterpet.co.in/</span>
        </a>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start gap-1 mb-4 md:mb-0 space-y-2">
        <span className="font-gliker text-base md:text-base font-semibold md:font-bold mb-1 text-[#00008D]">Quick Links</span>
        {quickLinks.map(link => (
          <a key={link.href} href={link.href} className="font-fractul hover:text-[#4bb36d] hover:underline underline-offset-2 text-sm text-[#1b1582] font-medium transition-colors duration-150" aria-label={link.label}>{link.label}</a>
        ))}
        {/* Google Map Embed (smaller, at bottom of Quick Links) */}
        <div className="mt-4 rounded-lg overflow-hidden w-full max-w-xs mx-auto my-2" aria-label="Google Map showing Masterpet location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.9909698333727!2d76.35700777545053!3d10.099824271308185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fe07f8500d5%3A0x2325c1d55999e999!2sMasterpet%20-%20Mobile%20At%20Home%20Pet%20Grooming%20Ernakulam!5e0!3m2!1sen!2sin!4v1749926164503!5m2!1sen!2sin"
            width="100%"
            height="120"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Masterpet Location on Google Maps"
          ></iframe>
        </div>
      </div>
      {/* Social & Legal */}
      <div className="flex flex-col gap-2 items-center md:items-start mb-2 md:mb-0 space-y-2">
        <span className="font-gliker text-base md:text-base font-semibold md:font-bold mb-1 text-[#00008D]">Follow Us</span>
        <div className="flex gap-3 mb-2">
          {socials.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`transition-colors duration-150 ${s.hover}`}>
              <Image src={s.icon} alt={s.label} width={24} height={24} />
            </a>
          ))}
        </div>
        {/* Divider and Legal Links */}
        <div className="w-full border-t border-[#e0f2be] my-2"></div>
        <span className="font-gliker text-xs md:text-xs font-semibold md:font-bold mb-1 text-[#00008D]">Legal</span>
        <div className="flex flex-col gap-1 mt-0">
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-fractul text-xs hover:text-[#4bb36d] hover:underline underline-offset-2 text-[#1b1582] font-medium transition-colors duration-150" aria-label={link.label}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
    {/* Divider for mobile */}
    <div className="block md:hidden border-t border-[#e0f2be] my-6"></div>
    <div className="relative z-10 text-center text-xs text-[#1b1582bb] mt-6 font-fractul tracking-wide font-normal">
      &copy; {new Date().getFullYear()} Masterpet Care Private Limited. All rights reserved.
    </div>
  </footer>
);

export default Footer; 