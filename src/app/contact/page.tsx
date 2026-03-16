"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { COMPANY_INFO } from "@/lib/constants";

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
    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-white py-8 md:py-12 min-h-[80vh]" aria-label="Contact Us">
      <Container>
        <h1 className="font-heading text-3xl md:text-4xl text-brand-blue text-center mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <form
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-gray-200"
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
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={name}
              onChange={e => setName(e.target.value)}
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
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              aria-label="Your phone number (optional)"
            />
            <label className="font-body text-brand-blue text-sm font-medium" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[100px]"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              aria-required="true"
              aria-label="Your message"
            />
            {error && <div className="text-red-500 text-sm" role="alert">{error}</div>}
            <button
              type="submit"
              className="mt-2 font-heading bg-brand-green text-brand-blue px-6 py-3 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-base w-full text-center"
              aria-label="Send message on WhatsApp"
            >
              Send via WhatsApp
            </button>
          </form>
          {/* Direct Contact Info & Map */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="font-heading text-xl text-brand-blue mb-2">Direct Contact</h2>
              <div className="flex flex-col gap-2 text-brand-blue font-body text-base">
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-green underline-offset-2" aria-label="Call Masterpet">📞 {COMPANY_INFO.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} className="hover:text-brand-green underline-offset-2" aria-label="WhatsApp Masterpet">💬 WhatsApp us</a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-green underline-offset-2" aria-label="Email Masterpet">✉️ {COMPANY_INFO.email}</a>
                <span>Hours: {COMPANY_INFO.hoursDisplay} (Open all days)</span>
                <span>Address: {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLocality}, {COMPANY_INFO.addressRegion} {COMPANY_INFO.postalCode}</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden w-full" aria-label="Google Map showing Masterpet location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.9909698333727!2d76.35700777545053!3d10.099824271308185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fe07f8500d5%3A0x2325c1d55999e999!2sMasterpet%20-%20Mobile%20At%20Home%20Pet%20Grooming%20Ernakulam!5e0!3m2!1sen!2sin!4v1749926164503!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masterpet Location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage; 