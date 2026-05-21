import Image from "next/image";
import Container from "./Container";
import { getWhatsAppUrl } from "@/lib/constants";

const whatsappLink = getWhatsAppUrl(
  "Hi Masterpet! I want to book a grooming session with Masterpet. [From Masterpet Website]"
);

const FinalCTASection = () => (
  <section className="w-full py-16 md:py-24" aria-label="Final Call to Action">
    <Container>
      <div className="bg-brand-green/20 rounded-2xl p-8 md:p-12 border border-brand-green/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-left">
            <h2 className="font-fractul font-bold text-3xl md:text-4xl text-brand-blue mb-4">
              Ready to Give Your Pet the Best Grooming Experience?
            </h2>
            <p className="font-body text-lg text-brand-blue/70 mb-6">
              Book your at-home grooming session with Masterpet today and let your pet enjoy professional care, comfort, and a whole lot of love—right at your doorstep!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 text-lg font-semibold"
              aria-label="Book grooming session on WhatsApp"
            >
              Book Now
            </a>
          </div>
          
          {/* Mascot Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/brand_assets/Mascot/withaheart/MP_withaheart.png"
                alt="Happy dog mascot with heart"
                width={300}
                height={300}
                className="w-64 h-64 object-contain drop-shadow-lg"
              />
              <div className="absolute -top-2 -left-2 text-pink-400 text-2xl animate-pulse">✨</div>
              <div className="absolute -top-4 -right-4 text-pink-400 text-xl animate-pulse delay-100">✨</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default FinalCTASection; 