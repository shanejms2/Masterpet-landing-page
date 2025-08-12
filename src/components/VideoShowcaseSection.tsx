'use client';

import React, { useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Container from "./Container";

const videos = [
  {
    id: 1,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Hungry%20Cochin.mp4',
    title: 'Masterpet and Hungry Cochin',
    description: 'Mobile grooming service in action',
    poster: '/brand_assets/Icons/ball/ball.png',
    duration: '0:48',
  },
  {
    id: 2,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Bipin%20Shoot%20Cat%20v2%20(1).mp4',
    title: 'An afternoon with Manikuttan',
    description: 'At-home grooming at DLF flats',
    poster: '/brand_assets/Icons/bone/bone.png',
    duration: '0:43',
  },
  {
    id: 3,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Bipin%20ASMR.mp4',
    title: 'Shih Tzu ASMR grooming',
    description: 'Relaxing grooming session',
    poster: '/brand_assets/Icons/comb/comb.png',
    duration: '0:43',
  },
  {
    id: 4,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Tattoo%20Artist.mp4',
    title: 'Persian Cat Bella testimonial',
    description: 'Customer satisfaction story',
    poster: '/brand_assets/Icons/fish/fish.png',
    duration: '0:52',
  },
  {
    id: 5,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos//Masterpet%20Animated.mp4',
    title: 'Masterpet at Kochi',
    description: 'Brand presence and coverage',
    poster: '/brand_assets/Icons/paw/paw.png',
    duration: '0:38',
  },
  {
    id: 6,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/othalanga%20facial%20for%20Bella.mp4',
    title: 'Bella\'s Facial Treatment',
    description: 'Professional facial grooming for pets',
    poster: '/brand_assets/Icons/comb/comb.png',
    duration: '0:45',
  },
  {
    id: 7,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/pomeranian%20grooming.mp4',
    title: 'Pomeranian Grooming Session',
    description: 'Complete grooming for fluffy Pomeranian',
    poster: '/brand_assets/Icons/shears/shears.png',
    duration: '0:50',
  },
  {
    id: 8,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/pug%20grooming.mp4',
    title: 'Pug Grooming Transformation',
    description: 'Professional grooming for adorable Pug',
    poster: '/brand_assets/Icons/paw/paw.png',
    duration: '0:42',
  },
  {
    id: 9,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/Puppy,%20a%20beagle%20video%20copy%202.mp4',
    title: 'Beagle Puppy Grooming',
    description: 'Gentle grooming for young Beagle puppy',
    poster: '/brand_assets/Icons/ball/ball.png',
    duration: '0:48',
  },
  {
    id: 10,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/Tessa%20Grooming%202.mp4',
    title: 'Tessa\'s Grooming Session',
    description: 'Professional grooming for Tessa',
    poster: '/brand_assets/Icons/shampoo/shampoo.png',
    duration: '0:55',
  },
  {
    id: 11,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/grooming%20truck.mp4',
    title: 'Our Mobile Grooming Van',
    description: 'Take a tour of our fully equipped grooming truck',
    poster: '/brand_assets/Icons/van/van.png',
    duration: '0:40',
  },
  {
    id: 12,
    src: 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos/dashund%20grooming.mp4',
    title: 'Dachshund Grooming',
    description: 'Professional grooming for long-bodied Dachshund',
    poster: '/brand_assets/Icons/bone/bone.png',
    duration: '0:47',
  },
];

const VideoShowcaseSection: React.FC = () => {
  const [playing, setPlaying] = useState<{ [id: number]: boolean }>({});
  const [muted, setMuted] = useState<{ [id: number]: boolean }>({});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const handleVideoPlay = useCallback((videoId: number) => {
    setPlaying(prev => ({ ...prev, [videoId]: true }));
  }, []);

  const handleVideoPause = useCallback((videoId: number) => {
    setPlaying(prev => ({ ...prev, [videoId]: false }));
  }, []);



  const getRemainingTime = useCallback((videoId: number): string => {
    const videoData = videos.find(v => v.id === videoId);
    return videoData?.duration || '0:00';
  }, []);

  const handlePlayPause = useCallback((videoId: number) => {
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement | null;
    if (video) {
      if (playing[videoId]) {
        video.pause();
      } else {
        // Pause all other videos first
        videos.forEach(v => {
          if (v.id !== videoId) {
            const otherVideo = document.getElementById(`video-${v.id}`) as HTMLVideoElement | null;
            if (otherVideo) {
              otherVideo.pause();
              handleVideoPause(v.id);
            }
          }
        });
        video.play();
        

      }
    }
  }, [playing, handleVideoPause]);

  const handleMuteToggle = useCallback((videoId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement | null;
    if (video) {
      video.muted = !video.muted;
      setMuted(prev => ({ ...prev, [videoId]: video.muted }));
    }
  }, []);

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  const [lastWheelTime, setLastWheelTime] = useState(0);

  const handleWheel = useCallback((event: React.WheelEvent) => {
    if (!api) return;
    
    // Prevent default scroll behavior
    event.preventDefault();
    
    const now = Date.now();
    // Only allow wheel navigation every 500ms to prevent rapid firing
    if (now - lastWheelTime < 500) return;
    
    setLastWheelTime(now);
    
    // Navigate based on wheel direction
    if (event.deltaY > 0) {
      // Scroll down/right - go to next
      api.scrollNext();
    } else {
      // Scroll up/left - go to previous
      api.scrollPrev();
    }
  }, [api, lastWheelTime]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [lastTouchTime, setLastTouchTime] = useState(0);

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    if (!api) return;
    
    const touch = event.touches[0];
    setTouchStartX(touch.clientX);
  }, [api]);

  const handleTouchEnd = useCallback((event: React.TouchEvent) => {
    if (!api || touchStartX === null) return;
    
    const now = Date.now();
    // Only allow touch navigation every 300ms to prevent rapid firing
    if (now - lastTouchTime < 300) {
      setTouchStartX(null);
      return;
    }
    
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    
    // Minimum swipe distance of 100px
    if (Math.abs(deltaX) > 100) {
      setLastTouchTime(now);
      
      if (deltaX > 0) {
        // Swipe right - go to previous
        api.scrollPrev();
      } else {
        // Swipe left - go to next
        api.scrollNext();
      }
    }
    
    setTouchStartX(null);
  }, [api, touchStartX, lastTouchTime]);

  // Initialize muted state to false for all videos
  React.useEffect(() => {
    const initialMutedState: { [id: number]: boolean } = {};
    videos.forEach(video => {
      initialMutedState[video.id] = false;
    });
    setMuted(initialMutedState);
  }, []);



  React.useEffect(() => {
    if (!api) return;
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50" id="videos" aria-label="See Us In Action">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-fractul text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6">
            See Us In Action
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-2xl mx-auto">
            Scroll to explore our grooming sessions and see how we bring professional care right to your doorstep.
          </p>
        </div>
        
        {/* Video Gallery */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
            setApi={setApi}
            className="w-full group"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {videos.map((video) => (
                <CarouselItem 
                  key={video.id} 
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative group/video">
                    {/* Video Container - Instagram-like aspect ratio (4:5) */}
                    <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover/video:scale-[1.02]">
                      <video
                        id={`video-${video.id}`}
                        src={video.src}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={video.title}
                        title={video.title}
                        onPlay={() => handleVideoPlay(video.id)}
                        onPause={() => handleVideoPause(video.id)}

                      >
                        <track kind="captions" srcLang="en" label="English" />
                      </video>
                      
                      {/* Top Controls - Always Visible */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                        {/* Duration Badge */}
                        <div className="bg-black/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full drop-shadow-lg border border-white/10">
                          {getRemainingTime(video.id)}
                        </div>
                        
                        {/* Mute/Unmute Button */}
                        <button
                          type="button"
                          aria-label={muted[video.id] ? "Unmute video" : "Mute video"}
                          onClick={(e) => handleMuteToggle(video.id, e)}
                          className="bg-black/85 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-black/95 transition-all duration-200 drop-shadow-lg border border-white/10"
                        >
                          {muted[video.id] ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      
                      {/* Center Play/Pause Button */}
                      <button
                        type="button"
                        aria-label={playing[video.id] ? "Pause video" : "Play video"}
                        onClick={() => handlePlayPause(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/video:opacity-100 transition-all duration-300 z-10"
                      >
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:bg-white transition-colors duration-200">
                          {playing[video.id] ? (
                            <Pause className="h-6 w-6 text-brand-blue" />
                          ) : (
                            <Play className="h-6 w-6 text-brand-blue ml-1" />
                          )}
                        </div>
                      </button>
                      
                      {/* Bottom Content Overlay - Always Visible */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 p-4 z-15">
                        <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
                          {video.title}
                        </h3>
                        <p className="font-body text-sm md:text-base text-white/95 drop-shadow-md">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="left-4 md:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:bg-white" />
            <CarouselNext className="right-4 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:bg-white" />
          </Carousel>
          
          {/* Custom Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`
                  relative transition-all duration-300 ease-out
                  ${index === currentIndex 
                    ? 'w-12 h-3 bg-brand-green rounded-full shadow-lg shadow-brand-green/30' 
                    : 'w-3 h-3 bg-brand-blue/20 hover:bg-brand-blue/40 rounded-full hover:scale-110'
                  }
                `}
                aria-label={`Go to video ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="font-body text-lg text-brand-blue/70 mb-6">
            Ready to give your pet the same professional care?
          </p>
          <Button 
            size="lg"
            className="bg-brand-green text-brand-blue hover:bg-brand-blue hover:text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20want%20to%20book%20a%20grooming%20session.%20[From%20Masterpet%20Website]', '_blank')}
          >
                            Book Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection; 