import Image from "next/image";

const whatsappLink = "https://wa.me/918590643269?text=Hi!%20I%20want%20to%20book%20a%20grooming%20session%20with%20Masterpet.%20[From%20Masterpet%20Website]";

const FinalCTASection = () => (
  <section className="w-full bg-brand-green/20 py-12" aria-label="Final Call to Action">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h2 className="font-heading text-3xl md:text-4xl text-brand-blue mb-4">
          Ready to Give Your Pet the Best Grooming Experience?
        </h2>
        <p className="font-body text-brand-blue text-lg mb-6">
          Book your at-home grooming session with Masterpet today and let your pet enjoy professional care, comfort, and a whole lot of love—right at your doorstep!
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-xl w-full md:w-auto text-center"
          aria-label="Book Now on WhatsApp"
        >
          {/* The WhatsApp message includes a source tag for tracking */}
          Book Now
        </a>
      </div>
      {/* Mascot Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/brand_assets/Mascot/withaheart/MP_withaheart.png"
          alt="Masterpet Mascot with Heart"
          width={160}
          height={160}
          className="object-contain drop-shadow-xl w-32 h-32 md:w-[200px] md:h-[200px]"
          priority
        />
      </div>
    </div>
  </section>
);

export default FinalCTASection; 