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
            Scroll to explore our grooming sessions and see how we bring professional care right to your doorstep
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
                        muted
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
                        <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                          {video.duration}
                        </div>
                        
                        {/* Mute/Unmute Button */}
                        <button
                          type="button"
                          aria-label={muted[video.id] ? "Unmute video" : "Mute video"}
                          onClick={(e) => handleMuteToggle(video.id, e)}
                          className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-colors duration-200"
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
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-15">
                        <h3 className="font-heading text-base font-bold text-white mb-1">
                          {video.title}
                        </h3>
                        <p className="font-body text-sm text-white/80">
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
          
          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-blue w-8' 
                    : 'bg-brand-blue/30 hover:bg-brand-blue/50'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
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
            Book Your Session
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection; 