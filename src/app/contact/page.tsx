"use client";
import { useState } from "react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { COMPANY_INFO } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    const text = `Hi Masterpet!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    trackWhatsappClick();
    window.open(url, "_blank");
  };

  const inputClass =
    "border border-brand-blue/15 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue";

  return (
    <div className="bg-white pb-12">
      <PageHero
        kicker="Contact"
        title="Contact Us"
        description={`Book at-home pet grooming in ${COMPANY_INFO.serviceCity} by phone, WhatsApp, or the form below.`}
      />
      <section className="py-12 md:py-16" aria-label="Contact Us">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <form
              className="mp-card p-6 md:p-8 flex flex-col gap-4"
              onSubmit={handleSubmit}
              aria-label="Contact form"
              noValidate
            >
              <label className="font-body text-brand-blue text-sm font-medium" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={inputClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
                aria-label="Your name"
              />
              <label className="font-body text-brand-blue text-sm font-medium" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                aria-label="Your email address"
              />
              <label className="font-body text-brand-blue text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={inputClass}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Your phone number (optional)"
              />
              <label className="font-body text-brand-blue text-sm font-medium" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`${inputClass} min-h-[120px]`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-required="true"
                aria-label="Your message"
              />
              {error && (
                <div className="text-red-500 text-sm" role="alert">
                  {error}
                </div>
              )}
              <button type="submit" className="mt-2 mp-cta-accent w-full" aria-label="Send message on WhatsApp">
                Send via WhatsApp
              </button>
            </form>
            <div className="flex flex-col gap-6">
              <div className="mp-card p-6 md:p-8">
                <h2 className="font-heading text-xl text-brand-blue mb-4">Direct Contact</h2>
                <div className="flex flex-col gap-4 text-brand-blue font-body text-sm md:text-base">
                  <PhoneLink className="inline-flex items-center gap-3 hover:text-brand-blue/70">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
                  </PhoneLink>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                    onClick={() => trackWhatsappClick()}
                    className="inline-flex items-center gap-3 hover:text-brand-blue/70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp us</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="inline-flex items-center gap-3 hover:text-brand-blue/70">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                  <span className="inline-flex items-start gap-3">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                    Hours: {COMPANY_INFO.hoursDisplay} (Open all days)
                  </span>
                  <span className="inline-flex items-start gap-3">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                    Address: {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLocality}, {COMPANY_INFO.addressCity},{" "}
                    {COMPANY_INFO.addressRegion} {COMPANY_INFO.postalCode}
                  </span>
                </div>
              </div>
              <div
                className="rounded-2xl overflow-hidden border border-brand-blue/[0.08]"
                aria-label="Google Map showing Masterpet location"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.5!2d76.3228652!3d10.0023627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fe07f8500d5:0x2325c1d55999e999!2sMasterpet!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Masterpet Location on Google Maps"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
