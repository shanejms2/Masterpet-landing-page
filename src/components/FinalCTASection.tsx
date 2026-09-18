"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import PhoneLink from "./PhoneLink";

const whatsappLink = getWhatsAppUrl(
  "Hi Masterpet! I want to book a grooming session with Masterpet. [From Masterpet Website]"
);

const FinalCTASection = () => (
  <section className="bg-background py-16 md:py-20 pb-28 md:pb-20" aria-label="Final Call to Action">
    <Container>
      <div className="overflow-hidden rounded-3xl bg-brand-blue text-white">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12 lg:p-14">
            <Badge variant="on-dark" className="w-fit">
              Book today
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Give Your Pet the Best Grooming Experience?
            </h2>
            <p className="max-w-xl font-body text-base leading-relaxed text-white/70 md:text-lg">
              Book your at-home grooming session with Masterpet today and let your pet enjoy professional care, comfort, and a whole lot of love—right at your doorstep!
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" variant="brand">
                <a
                  href={whatsappLink}
                  onClick={() => trackWhatsappClick()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book grooming session on WhatsApp"
                >
                  <FaWhatsapp data-icon="inline-start" />
                  Book Now
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="on-dark">
                <PhoneLink>
                  <Phone data-icon="inline-start" />
                  Call {COMPANY_INFO.phoneDisplay}
                  <span className="sr-only" data-google-ads-phone-label>
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </PhoneLink>
              </Button>
            </div>
          </div>
          <div className="relative hidden min-h-[280px] items-end justify-center lg:flex">
            <Image
              src="/brand_assets/Mascot/withaheart/MP_withaheart.png"
              alt="Happy dog mascot with heart"
              width={300}
              height={300}
              className="size-72 object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default FinalCTASection;
