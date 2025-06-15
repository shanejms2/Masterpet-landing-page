'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from "./ui/button";
import Container from "./Container";

const videos = [
  {
    id: 1,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Hungry%20Cochin.mp4',
    caption: 'Masterpet and Hungry Cochin',
    poster: '/brand_assets/Icons/ball/ball.png',
  },
  {
    id: 2,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Bipin%20Shoot%20Cat%20v2%20(1).mp4',
    caption: 'An afternoon with Manikuttan at DLF flats',
    poster: '/brand_assets/Icons/bone/bone.png',
  },
  {
    id: 3,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Bipin%20ASMR.mp4',
    caption: 'Shih Tzu ASMR grooming session',
    poster: '/brand_assets/Icons/comb/comb.png',
  },
  {
    id: 4,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Tattoo%20Artist.mp4',
    caption: 'Persian Cat Bella testimonial',
    poster: '/brand_assets/Icons/fish/fish.png',
  },
  {
    id: 5,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Masterpet%20Animated.mp4',
    caption: 'Masterpet at Kochi',
    poster: '/brand_assets/Icons/paw/paw.png',
  },
];

const VideoShowcaseSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [playing, setPlaying] = useState<{ [id: number]: boolean }>({});
  const cardWidth = 300; // px
  const cardGap = 24; // px (gap-6)
  const maxStartIndex = Math.max(0, videos.length - 1);
  const shiftIndex = Math.min(startIndex, maxStartIndex);
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex < maxStartIndex;
  const totalShift = shiftIndex * (cardWidth + cardGap);
  const rightPadding = 0;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // containerWidth is no longer used
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (canGoLeft) setStartIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    if (canGoRight) setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  return (
    <section className="w-full py-8 md:py-12" aria-label="See Us In Action">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-2">
          <h2 className="font-fractul text-[36px] font-bold text-brand-blue text-center mt-0 mr-0 mb-10 ml-0">
            See Us In Action
          </h2>
        </div>
        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <Button onClick={handlePrev} disabled={!canGoLeft} variant="secondary" size="icon" aria-label="Previous videos" className="mx-4">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
          <div ref={containerRef} className="relative max-w-[900px] w-full overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out scroll-smooth snap-x snap-mandatory"
              style={{ transform: `translateX(-${totalShift}px)`, paddingRight: rightPadding }}
            >
              {videos.map((video) => (
                <figure
                  key={video.id}
                  className="flex-shrink-0 w-[300px] rounded-2xl box-border overflow-hidden relative hover:scale-102 hover:shadow-xl active:scale-95 select-none transition-all duration-200 outline-none snap-start"
                  tabIndex={0}
                  aria-label={video.caption}
                >
                  <div className="relative group">
                    <video
                      id={`video-${video.id}`}
                      src={video.src}
                      className="w-full aspect-[9/16] object-contain object-center"
                      controls
                      muted
                      loop
                      playsInline
                      aria-label={video.caption}
                      title={video.caption}
                      tabIndex={0}
                      onPlay={() => setPlaying((prev) => ({ ...prev, [video.id]: true }))}
                      onPause={() => setPlaying((prev) => ({ ...prev, [video.id]: false }))}
                    >
                      <track kind="captions" srcLang="en" label="English" />
                    </video>
                    {/* Play button overlay (shows only when paused) */}
                    {!playing[video.id] && (
                      <button
                        type="button"
                        aria-label="Play video"
                        tabIndex={0}
                        onClick={() => {
                          const v = document.getElementById(`video-${video.id}`) as HTMLVideoElement | null;
                          if (v) v.play();
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-10"
                        style={{ pointerEvents: 'none' }}
                      >
                        <svg
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="drop-shadow-lg"
                        >
                          <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85" />
                          <polygon points="22,18 40,28 22,38" fill="#2563eb" />
                        </svg>
                      </button>
                    )}
                  </div>
                </figure>
              ))}
            </div>
          </div>
          <Button onClick={handleNext} disabled={!canGoRight} variant="secondary" size="icon" aria-label="Next videos" className="mx-4">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection; 