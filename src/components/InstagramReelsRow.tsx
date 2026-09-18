"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  INSTAGRAM_REELS,
  instagramReelEmbedUrl,
  instagramReelPermalink,
} from "@/lib/instagram-reels";

function InstagramReelCard({
  shortcode,
  title,
}: {
  shortcode: string;
  title: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const permalink = instagramReelPermalink(shortcode);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={hostRef} className="group/reel relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-2xl transition-transform duration-500 group-hover/reel:scale-[1.02]">
        {shouldLoad ? (
          <iframe
            src={instagramReelEmbedUrl(shortcode)}
            title={title}
            className="absolute inset-x-0 w-full border-0"
            style={{ top: "-3.5rem", height: "calc(100% + 8rem)" }}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <Skeleton className="absolute inset-0 rounded-none" />
        )}
      </div>
      <a
        href={permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Open {title} on Instagram
      </a>
    </article>
  );
}

export default function InstagramReelsRow() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastWheelTime, setLastWheelTime] = useState(0);

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!api) return;
      event.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 500) return;
      setLastWheelTime(now);
      if (event.deltaY > 0) {
        api.scrollNext();
      } else {
        api.scrollPrev();
      }
    },
    [api, lastWheelTime]
  );

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
        }}
        setApi={setApi}
        className="group w-full"
        onWheel={handleWheel}
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {INSTAGRAM_REELS.map((reel) => (
            <CarouselItem
              key={reel.shortcode}
              className="basis-[85%] pl-4 sm:basis-1/2 md:pl-6 lg:basis-1/3"
            >
              <InstagramReelCard
                shortcode={reel.shortcode}
                title={reel.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 border-0 bg-white/90 opacity-0 shadow-xl backdrop-blur-sm transition-opacity duration-300 hover:bg-white group-hover:opacity-100 md:left-6" />
        <CarouselNext className="right-4 border-0 bg-white/90 opacity-0 shadow-xl backdrop-blur-sm transition-opacity duration-300 hover:bg-white group-hover:opacity-100 md:right-6" />
      </Carousel>

      <div className="flex items-center justify-center gap-3">
        {INSTAGRAM_REELS.map((reel, index) => (
          <button
            key={reel.shortcode}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-300 ease-out",
              index === currentIndex
                ? "h-3 w-12 bg-brand-green shadow-lg shadow-brand-green/30"
                : "size-3 bg-brand-blue/20 hover:scale-110 hover:bg-brand-blue/40"
            )}
            aria-label={`Go to Reel ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
