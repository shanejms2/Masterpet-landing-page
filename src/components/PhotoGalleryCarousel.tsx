"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type PhotoGalleryCarouselProps = {
  images: GalleryImage[];
};

export default function PhotoGalleryCarousel({ images }: PhotoGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative mb-8">
        <div className="aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={800}
            height={600}
            className="w-full h-full object-contain"
            priority={currentIndex === 0}
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => goToImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-brand-blue scale-105"
                : "hover:scale-105 hover:ring-1 hover:ring-brand-blue/50"
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
                <div className="w-3 h-3 bg-brand-blue rounded-full" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            className={`relative transition-all duration-300 ease-out ${
              index === currentIndex
                ? "w-12 h-3 bg-brand-green rounded-full shadow-lg shadow-brand-green/30"
                : "w-3 h-3 bg-brand-blue/20 hover:bg-brand-blue/40 rounded-full hover:scale-110"
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
