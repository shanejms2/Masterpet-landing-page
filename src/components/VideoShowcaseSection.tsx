'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import Container from "./Container";
import { getWhatsAppUrl } from "@/lib/constants";

const videos = [
  {
    id: 1,
    src: '/api/proxy-video/Hungry%20Cochin.mp4',
    title: 'Masterpet and Hungry Cochin',
    description: 'Mobile grooming service in action',
    duration: '0:48',
  },
  {
    id: 2,
    src: '/api/proxy-video/Bipin%20Shoot%20Cat%20v2%20(1).mp4',
    title: 'An afternoon with Manikuttan',
    description: 'At-home grooming at DLF flats',
    duration: '0:43',
  },
  {
    id: 3,
    src: '/api/proxy-video/Bipin%20ASMR.mp4',
    title: 'Shih Tzu ASMR grooming',
    description: 'Relaxing grooming session',
    duration: '0:43',
  },
  {
    id: 4,
    src: '/api/proxy-video/Tattoo%20Artist.mp4',
    title: 'Persian Cat Bella testimonial',
    description: 'Customer satisfaction story',
    duration: '0:52',
  },
  {
    id: 5,
    src: '/api/proxy-video/Masterpet%20Animated.mp4',
    title: 'Masterpet at Kochi',
    description: 'Brand presence and coverage',
    duration: '0:38',
  },
  {
    id: 6,
    src: '/api/proxy-video/othalanga%20facial%20for%20Bella.mp4',
    title: 'Bella\'s Facial Treatment',
    description: 'Professional facial grooming for pets',
    duration: '0:45',
  },
  {
    id: 7,
    src: '/api/proxy-video/pomeranian%20grooming.mp4',
    title: 'Pomeranian Grooming Session',
    description: 'Complete grooming for fluffy Pomeranian',
    duration: '0:50',
  },
  {
    id: 8,
    src: '/api/proxy-video/pug%20grooming.mp4',
    title: 'Pug Grooming Transformation',
    description: 'Professional grooming for adorable Pug',
    duration: '0:42',
  },
  {
    id: 9,
    src: '/api/proxy-video/Puppy,%20a%20beagle%20video%20copy%202.mp4',
    title: 'Beagle Puppy Grooming',
    description: 'Gentle grooming for young Beagle puppy',
    duration: '0:48',
  },
  {
    id: 10,
    src: '/api/proxy-video/Tessa%20Grooming%202.mp4',
    title: 'Tessa\'s Grooming Session',
    description: 'Professional grooming for Tessa',
    duration: '0:55',
  },
  {
    id: 11,
    src: '/api/proxy-video/grooming%20truck.mp4',
    title: 'Our Mobile Grooming Van',
    description: 'Take a tour of our fully equipped grooming truck',
    duration: '0:40',
  },
  {
    id: 12,
    src: '/api/proxy-video/dashund%20grooming.mp4',
    title: 'Dachshund Grooming',
    description: 'Professional grooming for long-bodied Dachshund',
    duration: '0:47',
  },
];

const VideoShowcaseSection: React.FC = () => {
  const [playing, setPlaying] = useState<{ [id: number]: boolean }>({});
  const [muted, setMuted] = useState<{ [id: number]: boolean }>({});
  const [loading, setLoading] = useState<{ [id: number]: boolean }>({});
  const [loaded, setLoaded] = useState<{ [id: number]: boolean }>({});
  const [postersReady, setPostersReady] = useState<{ [id: number]: boolean }>({});
  const [loadingQueue, setLoadingQueue] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const videoRefs = useRef<{ [id: number]: HTMLVideoElement | null }>({});
  const maxConcurrentLoads = 2; // Maximum number of videos loading at once

  // Fix hydration by ensuring client-side only features
  useEffect(() => {
    setIsClient(true);
  }, []);

  const addToLoadingQueue = useCallback((videoId: number) => {
    setLoadingQueue(prev => {
      if (prev.includes(videoId)) return prev;
      return [...prev, videoId];
    });
  }, []);

  const removeFromLoadingQueue = useCallback((videoId: number) => {
    setLoadingQueue(prev => prev.filter(id => id !== videoId));
  }, []);

  const processLoadingQueue = useCallback(() => {
    if (loadingQueue.length === 0) return;
    
    const currentlyLoading = Object.values(loading).filter(Boolean).length;
    const canLoadMore = currentlyLoading < maxConcurrentLoads;
    
    if (canLoadMore) {
      const nextVideoId = loadingQueue[0];
      const video = videoRefs.current[nextVideoId];
      if (video && !loaded[nextVideoId]) {
        video.preload = 'metadata';
        removeFromLoadingQueue(nextVideoId);
      }
    }
  }, [loadingQueue, loading, loaded, removeFromLoadingQueue]);

  // Process loading queue when it changes
  useEffect(() => {
    if (!isClient) return;
    processLoadingQueue();
  }, [loadingQueue, processLoadingQueue, isClient]);

  const handleVideoPlay = useCallback((videoId: number) => {
    setPlaying(prev => ({ ...prev, [videoId]: true }));
  }, []);

  const handleVideoPause = useCallback((videoId: number) => {
    setPlaying(prev => ({ ...prev, [videoId]: false }));
  }, []);

  const handleVideoLoadStart = useCallback((videoId: number) => {
    setLoading(prev => ({ ...prev, [videoId]: true }));
  }, []);

  const handleVideoCanPlay = useCallback((videoId: number) => {
    setLoading(prev => ({ ...prev, [videoId]: false }));
    setLoaded(prev => ({ ...prev, [videoId]: true }));
  }, []);

  const getRemainingTime = useCallback((videoId: number): string => {
    const videoData = videos.find(v => v.id === videoId);
    return videoData?.duration || '0:00';
  }, []);

  const handlePlayPause = useCallback((videoId: number) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (playing[videoId]) {
        video.pause();
      } else {
        // Pause all other videos first
        videos.forEach(v => {
          if (v.id !== videoId) {
            const otherVideo = videoRefs.current[v.id];
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
    const video = videoRefs.current[videoId];
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



  // Initialize muted state to false for all videos
  React.useEffect(() => {
    if (!isClient) return;
    
    const initialMutedState: { [id: number]: boolean } = {};
    videos.forEach(video => {
      initialMutedState[video.id] = false;
    });
    setMuted(initialMutedState);
  }, [isClient]);

  // Preload current video and adjacent videos
  useEffect(() => {
    if (!isClient) return;

    const preloadVideos = [currentIndex];
    if (currentIndex > 0) preloadVideos.push(currentIndex - 1);
    if (currentIndex < videos.length - 1) preloadVideos.push(currentIndex + 1);

    preloadVideos.forEach(index => {
      const videoId = videos[index].id;
      if (!loaded[videoId] && !loading[videoId]) {
        addToLoadingQueue(videoId);
      }
    });
  }, [currentIndex, loaded, loading, addToLoadingQueue, isClient]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
            if (!loaded[videoId] && !loading[videoId]) {
              addToLoadingQueue(videoId);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before video comes into view
        threshold: 0.1,
      }
    );

    // Observe all video containers
    Object.keys(videoRefs.current).forEach((videoId) => {
      const video = videoRefs.current[parseInt(videoId)];
      if (video) {
        observer.observe(video);
      }
    });

    return () => observer.disconnect();
  }, [loaded, loading, addToLoadingQueue, isClient]);

  React.useEffect(() => {
    if (!api || !isClient) return;
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect, isClient]);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50" id="showcase" aria-label="See Us In Action">
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
                      {/* Loading Spinner */}
                      {(loading[video.id] || loadingQueue.includes(video.id) || !postersReady[video.id]) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-30">
                          <Loader2 className="h-8 w-8 text-brand-blue animate-spin" />
                          {loadingQueue.includes(video.id) && !loading[video.id] && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              Queued
                            </div>
                          )}
                          {!postersReady[video.id] && !loading[video.id] && !loadingQueue.includes(video.id) && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              Loading Poster
                            </div>
                          )}
                        </div>
                      )}
                      
                      <video
                        ref={(el) => { videoRefs.current[video.id] = el; }}
                        src={video.src}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="none"
                        aria-label={video.title}
                        title={video.title}
                        onPlay={() => handleVideoPlay(video.id)}
                        onPause={() => handleVideoPause(video.id)}
                        onLoadStart={() => handleVideoLoadStart(video.id)}
                        onCanPlay={() => handleVideoCanPlay(video.id)}
                        onLoadedData={() => handleVideoCanPlay(video.id)}
                        onLoadedMetadata={() => {
                          // Capture the first frame as poster
                          const videoEl = videoRefs.current[video.id];
                          if (videoEl && !videoEl.poster) {
                            try {
                              // Ensure video is at the first frame
                              videoEl.currentTime = 0;
                              
                              const canvas = document.createElement('canvas');
                              canvas.width = videoEl.videoWidth || 400;
                              canvas.height = videoEl.videoHeight || 500;
                              const ctx = canvas.getContext('2d');
                              if (ctx) {
                                // Draw the first frame
                                ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
                                videoEl.poster = canvas.toDataURL('image/jpeg', 0.8);
                                setPostersReady(prev => ({ ...prev, [video.id]: true }));
                              }
                            } catch (error) {
                              console.log('Could not capture video frame:', error);
                              // Still mark as ready to avoid infinite loading
                              setPostersReady(prev => ({ ...prev, [video.id]: true }));
                            }
                          }
                        }}
                        onError={(e) => {
                          // Fallback if video fails to load
                          const videoEl = e.currentTarget;
                          if (videoEl && !videoEl.poster) {
                            try {
                              // Create a fallback poster with video title
                              const canvas = document.createElement('canvas');
                              canvas.width = 400;
                              canvas.height = 500;
                              const ctx = canvas.getContext('2d');
                              if (ctx) {
                                // Create gradient background
                                const gradient = ctx.createLinearGradient(0, 0, 0, 500);
                                gradient.addColorStop(0, '#1b1582');
                                gradient.addColorStop(1, '#caf857');
                                ctx.fillStyle = gradient;
                                ctx.fillRect(0, 0, 400, 500);
                                
                                // Add text
                                ctx.fillStyle = 'white';
                                ctx.font = 'bold 24px Arial';
                                ctx.textAlign = 'center';
                                ctx.fillText(video.title, 200, 250);
                                
                                videoEl.poster = canvas.toDataURL();
                              }
                            } catch (error) {
                              console.log('Could not create fallback poster:', error);
                            }
                          }
                        }}
                        data-video-id={video.id}
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
            onClick={() => window.open(getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]"), '_blank')}
          >
            Book Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcaseSection; 