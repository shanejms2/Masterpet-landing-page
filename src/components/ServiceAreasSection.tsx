import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

const serviceAreas = [
  {
    name: "Edapally",
    slug: "edapally",
    description: "Professional grooming services in Edapally and surrounding areas",
    landmarks: ["Edapally Junction", "Edapally Market", "Edapally Railway Station"],
  },
  {
    name: "Kaloor",
    slug: "kaloor", 
    description: "Mobile grooming services in Kaloor and nearby neighborhoods",
    landmarks: ["Kaloor Junction", "Kaloor Market", "Kaloor Stadium"],
  },
  {
    name: "Aluva",
    slug: "aluva",
    description: "At-home pet grooming in Aluva and surrounding areas",
    landmarks: ["Aluva Town", "Aluva Railway Station", "Aluva Market"],
  },
  {
    name: "Ernakulam",
    slug: "ernakulam",
    description: "Professional grooming services in Ernakulam city area",
    landmarks: ["Ernakulam Junction", "Ernakulam Market", "Marine Drive"],
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50/50 to-green-50/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-4">
            Service Areas in Kochi
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/80 max-w-3xl mx-auto">
            We provide professional at-home pet grooming services across major areas in Kochi. 
            Find your area below and book your grooming session today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-blue">
                  {area.name}
                </h3>
              </div>
              
              <p className="text-brand-blue/80 mb-4 font-body">
                {area.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-fractul font-semibold text-brand-blue mb-2 text-sm">
                  Popular Areas:
                </h4>
                <ul className="space-y-1">
                  {area.landmarks.map((landmark, index) => (
                    <li key={index} className="text-sm text-brand-blue/70 font-body">
                      • {landmark}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link
                  href={`/kochi-pet-grooming/${area.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-green text-brand-blue rounded-lg font-fractul font-medium hover:bg-brand-green/90 transition-colors text-sm"
                  tabIndex={0}
                  aria-label={`Learn more about grooming services in ${area.name}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href={`https://wa.me/918590643269?text=${encodeURIComponent(`Hi Masterpet! I want to book a grooming session in ${area.name}. [From Masterpet Website]`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg font-fractul font-medium hover:bg-brand-blue/90 transition-colors text-sm"
                  tabIndex={0}
                  aria-label={`Book grooming session in ${area.name}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-brand-blue mb-4">
              Don't see your area?
            </h3>
            <p className="font-body text-brand-blue/80 mb-6">
              We're constantly expanding our service areas. Contact us to check if we serve your location or to request service in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918590643269?text=Hi%20Masterpet!%20Do%20you%20provide%20grooming%20services%20in%20my%20area?%20[From%20Masterpet%20Website]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-brand-blue rounded-lg font-fractul font-medium hover:bg-brand-green/90 transition-colors"
                tabIndex={0}
                aria-label="Contact us to check service availability in your area"
              >
                Check Availability
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="tel:+918590643269"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-fractul font-medium hover:bg-brand-blue/90 transition-colors"
                tabIndex={0}
                aria-label="Call us to check service availability"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceAreasSection;
