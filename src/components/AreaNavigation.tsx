import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import Container from "./Container";
import { areaConfig } from "@/lib/areaConfig";

interface AreaNavigationProps {
  currentArea?: string;
}

const AreaNavigation = ({ currentArea }: AreaNavigationProps) => {
  return (
    <section className="w-full py-8 bg-gradient-to-r from-blue-50/30 to-green-50/30 border-b border-gray-100">
      <Container>
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl md:text-3xl text-brand-blue font-bold mb-2">
            Find Grooming Near You
          </h2>
          <p className="font-body text-brand-blue/80">
            Choose your area for personalized grooming services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areaConfig.map((area) => {
            const isCurrentArea = currentArea === area.slug;
            
            return (
              <Link
                key={area.slug}
                href={`/kochi-pet-grooming/${area.slug}`}
                className={`
                  group relative p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg
                  ${isCurrentArea 
                    ? 'border-brand-green bg-brand-green/10 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-brand-green/50 hover:bg-brand-green/5'
                  }
                `}
                tabIndex={0}
                aria-label={`Navigate to ${area.name} pet grooming services`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${isCurrentArea 
                      ? 'bg-brand-green text-brand-blue' 
                      : 'bg-brand-green/20 text-brand-green group-hover:bg-brand-green group-hover:text-brand-blue'
                    }
                  `}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className={`
                    font-heading font-bold text-sm
                    ${isCurrentArea 
                      ? 'text-brand-blue' 
                      : 'text-brand-blue/80 group-hover:text-brand-blue'
                    }
                  `}>
                    {area.name}
                  </h3>
                </div>
                
                <p className="text-xs text-brand-blue/70 mb-3 line-clamp-2">
                  {area.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`
                    text-xs font-medium px-2 py-1 rounded-full
                    ${isCurrentArea 
                      ? 'bg-brand-green text-brand-blue' 
                      : 'bg-brand-blue/10 text-brand-blue/70 group-hover:bg-brand-blue group-hover:text-white'
                    }
                  `}>
                    {isCurrentArea ? 'Current' : 'View'}
                  </span>
                  
                  <ChevronRight className={`
                    w-4 h-4 transition-transform group-hover:translate-x-1
                    ${isCurrentArea 
                      ? 'text-brand-green' 
                      : 'text-brand-blue/50 group-hover:text-brand-green'
                    }
                  `} />
                </div>
                
                {isCurrentArea && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-green rounded-full border-2 border-white"></div>
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-6">
          <Link
            href="/kochi-pet-grooming"
            className="inline-flex items-center gap-2 text-brand-blue/70 hover:text-brand-blue transition-colors font-fractul text-sm"
            tabIndex={0}
            aria-label="View all Kochi pet grooming services"
          >
            <span>View all Kochi services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AreaNavigation;
