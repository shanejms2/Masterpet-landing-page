"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Container from "./Container";
import { areaConfig } from "@/lib/areaConfig";

interface AreaCarouselProps {
  currentArea?: string;
  showSearch?: boolean;
}

const AreaCarousel = ({ currentArea, showSearch = true }: AreaCarouselProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter areas based on search term
  const filteredAreas = areaConfig.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check scroll position and update navigation buttons
  const checkScrollPosition = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Scroll to specific position
  const scrollTo = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300; // Adjust based on card width
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  // Auto-scroll to current area
  useEffect(() => {
    if (currentArea && carouselRef.current) {
      const currentAreaElement = carouselRef.current.querySelector(
        `[data-area="${currentArea}"]`
      ) as HTMLElement;
      
      if (currentAreaElement) {
        currentAreaElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentArea]);

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50/50 to-green-50/50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-4">
            Service Areas in Kochi
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/80 max-w-3xl mx-auto mb-6">
            We provide professional at-home pet grooming services across major areas in Kochi. 
            Find your area below and book your grooming session today!
          </p>
          
          {showSearch && (
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-blue/50" />
              <input
                type="text"
                placeholder="Search your area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollTo('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-label="Scroll to previous areas"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollTo('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-label="Scroll to next areas"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredAreas.map((area) => {
              const isCurrentArea = currentArea === area.slug;
              
              return (
                <div
                  key={area.slug}
                  data-area={area.slug}
                  className={`
                    relative flex-shrink-0 w-80 rounded-3xl p-6 transition-all duration-500 transform hover:scale-105 my-4
                    ${isCurrentArea 
                      ? 'bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/5 border-2 border-brand-green shadow-xl shadow-brand-green/20' 
                      : 'bg-gradient-to-br from-white via-gray-50/50 to-brand-blue/5 border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-green/30'
                    }
                  `}
                >


                  {/* Area Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      p-3 rounded-2xl shadow-lg
                      ${isCurrentArea 
                        ? 'bg-gradient-to-br from-brand-green to-brand-green/80 text-white' 
                        : 'bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white'
                      }
                    `}>
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className={`
                        font-heading text-2xl font-bold
                        ${isCurrentArea 
                          ? 'text-brand-blue' 
                          : 'text-brand-blue/90'
                        }
                      `}>
                        {area.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Service Highlights */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                      <span className="text-brand-blue/80 font-fractul font-medium text-sm">At-Home Service</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                      <span className="text-brand-blue/80 font-fractul font-medium text-sm">Hygienic & Safe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                      <span className="text-brand-blue/80 font-fractul font-medium text-sm">Stress-Free Experience</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/kochi-pet-grooming/${area.slug}`}
                      className={`
                        group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl font-fractul font-semibold transition-all duration-300 text-sm
                        ${isCurrentArea 
                          ? 'bg-brand-green text-brand-blue shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 hover:scale-105' 
                          : 'bg-brand-green text-brand-blue shadow-md hover:shadow-lg hover:scale-105'
                        }
                      `}
                      tabIndex={0}
                      aria-label={`Learn more about grooming services in ${area.name}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href={`https://wa.me/918590643269?text=${encodeURIComponent(`Hi Masterpet! I want to book a grooming session in ${area.name}. [From Masterpet Website]`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl font-fractul font-semibold transition-all duration-300 text-sm
                        ${isCurrentArea 
                          ? 'bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:scale-105' 
                          : 'bg-gradient-to-r from-brand-blue/90 to-brand-blue text-white shadow-md hover:shadow-lg hover:scale-105'
                        }
                      `}
                      tabIndex={0}
                      aria-label={`Book grooming session in ${area.name}`}
                    >
                      <span>Book Now</span>
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No Results Message */}
        {filteredAreas.length === 0 && searchTerm && (
          <div className="text-center py-8">
            <p className="text-brand-blue/70 font-body">
              No areas found for "{searchTerm}". Try searching for a different area.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-brand-green hover:text-brand-green/80 font-fractul font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* View All Areas Link */}
        <div className="text-center mt-8">
          <Link
            href="/kochi-pet-grooming"
            className="inline-flex items-center gap-2 text-brand-blue/70 hover:text-brand-blue transition-colors font-fractul text-sm"
            tabIndex={0}
            aria-label="View all Kochi pet grooming services"
          >
            <span>View all Kochi services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AreaCarousel;
