'use client';

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import InstagramReelsRow from "./InstagramReelsRow";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";

const VideoShowcaseSection: React.FC = () => {
  return (
    <section className="mp-section-muted" id="showcase" aria-label="See Us In Action">
      <Container>
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16">
          <p className="mp-kicker mb-3">Instagram</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
            See Us In Action
          </h2>
          <p className="mb-6 max-w-2xl font-body text-lg text-brand-blue/70 md:text-xl">
            Watch our latest grooming Reels from {COMPANY_INFO.socialHandle}.
          </p>
          <Button asChild variant="brand">
            <a
              href={COMPANY_INFO.socialUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram data-icon="inline-start" />
              Follow {COMPANY_INFO.socialHandle}
            </a>
          </Button>
        </div>

        <InstagramReelsRow />

        <div className="mt-16 text-center">
          <p className="mb-6 font-body text-lg text-brand-blue/70">
            Ready to give your pet the same professional care?
          </p>
          <Button
            size="lg"
            className="mp-cta-accent"
            onClick={() => {
              trackWhatsappClick();
              window.open(getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]"), '_blank');
            }}
          >
            Book Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection;
