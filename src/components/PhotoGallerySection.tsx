"use client";

import React, { useState, useCallback } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import { getWhatsAppUrl } from "@/lib/constants";

// Gallery data with actual grooming photos
const galleryImages = [
  {
    id: 1,
    src: "/gallery/grooming truck outside with dog.jpg",
    alt: "Masterpet mobile grooming van with happy dog - professional at-home pet grooming service in Kochi"
  },
  {
    id: 2,
    src: "/gallery/persian 2.jpg",
    alt: "Persian cat professional grooming - before and after transformation by Masterpet mobile grooming"
  },
  {
    id: 3,
    src: "/gallery/persian cat.jpeg",
    alt: "Persian cat grooming transformation - professional cat grooming service by Masterpet in Kochi"
  },
  {
    id: 4,
    src: "/gallery/shih tzu.jpg",
    alt: "Shih Tzu dog grooming before and after - professional dog grooming results from Masterpet care"
  },
  {
    id: 5,
    src: "/gallery/siberian husky.jpg",
    alt: "Siberian Husky grooming session - professional dog grooming at home service by Masterpet"
  },
  {
    id: 6,
    src: "/gallery/after bath dog.jpg",
    alt: "Dog after professional bath and grooming - clean and happy pet from Masterpet mobile grooming"
  },
  {
    id: 7,
    src: "/gallery/grooming truck outside trees.jpeg",
    alt: "Masterpet mobile grooming van parked outside - professional at-home pet grooming service in Kochi"
  },
  {
    id: 8,
    src: "/gallery/lab.jpg",
    alt: "Labrador dog grooming session - professional dog grooming at home service in Kochi"
  },
  {
    id: 9,
    src: "/gallery/after bath dog 2.jpg",
    alt: "Dog after professional grooming session - clean and well-groomed pet from Masterpet care services"
  },
  {
    id: 10,
    src: "/gallery/shih tzu 2.jpg",
    alt: "Shih Tzu dog grooming transformation - professional dog grooming service by Masterpet in Kochi"
  },
  {
    id: 11,
    src: "/gallery/shih tzu 3.jpg",
    alt: "Shih Tzu dog after professional grooming - clean and well-styled pet from Masterpet care"
  },
  {
    id: 12,
    src: "/gallery/persian cat 2.jpg",
    alt: "Persian cat grooming session - professional cat grooming service by Masterpet in Kochi"
  },
  {
    id: 13,
    src: "/gallery/ghibili dog.png",
    alt: "Cute dog grooming session - professional pet grooming service by Masterpet in Kochi"
  },
  {
    id: 14,
    src: "/gallery/cute dog 2.jpeg",
    alt: "Adorable dog after grooming - professional pet grooming service by Masterpet in Kochi"
  },
  {
    id: 15,
    src: "/gallery/grooming truck outside night.png",
    alt: "Masterpet mobile grooming van at night - professional pet grooming service available in Kochi"
  },
  {
    id: 16,
    src: "/gallery/grooming truck outside.png",
    alt: "Masterpet mobile grooming van - professional at-home pet grooming service in Kochi"
  },
  {
    id: 17,
    src: "/gallery/grooming truck outside trees.jpeg",
    alt: "Masterpet mobile grooming van parked outside - professional at-home pet grooming service in Kochi"
  },
  {
    id: 18,
    src: "/gallery/poodle.jpg",
    alt: "Poodle grooming transformation - professional dog grooming service in Kochi by Masterpet"
  }
];

const PhotoGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="gallery" aria-label="Grooming Photo Gallery">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-fractul text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6">
            Our Work Gallery
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-2xl mx-auto">
            Take a look at our mobile grooming van and the happy pets we've groomed. 
            Professional care that comes right to your doorstep!
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-6xl mx-auto">
          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority={currentIndex === 0}
              />
            </div>
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>


          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-brand-blue scale-105' 
                    : 'hover:scale-105 hover:ring-1 hover:ring-brand-blue/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-brand-blue/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`
                  relative transition-all duration-300 ease-out
                  ${index === currentIndex 
                    ? 'w-12 h-3 bg-brand-green rounded-full shadow-lg shadow-brand-green/30' 
                    : 'w-3 h-3 bg-brand-blue/20 hover:bg-brand-blue/40 rounded-full hover:scale-110'
                  }
                `}
                aria-label={`Go to image ${index + 1}`}
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
            Ready to give your pet the same professional treatment?
          </p>
          <Button 
            size="lg"
            className="bg-brand-green text-brand-blue hover:bg-brand-blue hover:text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open(getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]"), '_blank')}
          >
                          Book Your Pet's Transformation
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PhotoGallerySection;
