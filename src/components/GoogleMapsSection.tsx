"use client";

import { useEffect, useRef } from 'react';
import Container from './Container';

interface GoogleMapsSectionProps {
  className?: string;
}

const GoogleMapsSection = ({ className = "" }: GoogleMapsSectionProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
        console.warn('Google Maps API key not configured. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file');
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // Hide fallback content
      const fallback = mapRef.current.querySelector('div');
      if (fallback) {
        fallback.style.display = 'none';
      }

      // Masterpet business location (Aluva)
      const masterpetLocation = { lat: 10.1065, lng: 76.3516 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: masterpetLocation,
        zoom: 11,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });

      // Add main business marker
      const mainMarker = new window.google.maps.Marker({
        position: masterpetLocation,
        map: map,
        title: "Masterpet - Mobile At Home Pet Grooming",
        icon: {
          url: '/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png',
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20)
        }
      });

      // Add info window for main location
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #1b1582; font-weight: bold;">Masterpet</h3>
            <p style="margin: 0 0 5px 0; font-size: 14px;">Mobile At Home Pet Grooming</p>
            <p style="margin: 0 0 5px 0; font-size: 12px;">📍 Anu Villa, XVI / 80, Nethaji Rd, Aluva</p>
            <p style="margin: 0 0 5px 0; font-size: 12px;">📞 +91 85906 43269</p>
            <p style="margin: 0; font-size: 12px; color: #caf857; font-weight: bold;">Serving Kochi & Surrounding Areas</p>
          </div>
        `
      });

      mainMarker.addListener('click', () => {
        infoWindow.open(map, mainMarker);
      });

      // Add service area markers (major areas)
      const serviceAreas = [
        { name: "Edapally", lat: 10.0259, lng: 76.3075 },
        { name: "Kaloor", lat: 10.0168, lng: 76.3018 },
        { name: "Ernakulam", lat: 9.9312, lng: 76.2673 },
        { name: "Kakkanad", lat: 10.0168, lng: 76.3618 },
        { name: "Fort Kochi", lat: 9.9312, lng: 76.2673 },
        { name: "Vytilla", lat: 9.9667, lng: 76.3167 },
        { name: "Maradu", lat: 9.8833, lng: 76.3167 },
        { name: "Thrippunithura", lat: 9.9500, lng: 76.3500 }
      ];

      serviceAreas.forEach(area => {
        const marker = new window.google.maps.Marker({
          position: { lat: area.lat, lng: area.lng },
          map: map,
          title: `Pet Grooming in ${area.name}`,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#caf857",
            fillOpacity: 0.8,
            strokeColor: "#1b1582",
            strokeWeight: 2
          }
        });

        const areaInfoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h4 style="margin: 0 0 5px 0; color: #1b1582;">${area.name}</h4>
              <p style="margin: 0; font-size: 12px;">Pet Grooming Services Available</p>
              <p style="margin: 5px 0 0 0; font-size: 11px; color: #caf857;">✓ At-Home Service</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          areaInfoWindow.open(map, marker);
        });
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className={`w-full py-16 bg-gradient-to-br from-blue-50/50 to-green-50/50 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-4">
            Find Pet Grooming Near Me
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/80 max-w-3xl mx-auto mb-6">
            Professional at-home pet grooming services available across Kochi and surrounding areas. 
            We come to your doorstep for stress-free grooming!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-blue/70">
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand-green rounded-full"></div>
              Main Location
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-green rounded-full"></div>
              Service Areas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div 
                ref={mapRef} 
                className="w-full h-96 md:h-[500px] relative"
                aria-label="Google Maps showing Masterpet service areas in Kochi"
              >
                {/* Fallback when map can't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-brand-blue mb-2">Service Areas Map</h3>
                    <p className="text-sm text-brand-blue/70 mb-4">
                      Interactive map showing our service coverage across Kochi
                    </p>
                    <p className="text-xs text-brand-blue/50">
                      Map loading... Please ensure Google Maps API key is configured
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-heading text-xl font-bold text-brand-blue mb-4">
                Service Coverage
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-fractul font-semibold text-brand-blue">Kochi City</h4>
                    <p className="text-sm text-brand-blue/70">Ernakulam, Kaloor, Edapally, Kakkanad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-fractul font-semibold text-brand-blue">Fort Kochi</h4>
                    <p className="text-sm text-brand-blue/70">Mattancherry, Fort Kochi Beach Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-fractul font-semibold text-brand-blue">Suburban Areas</h4>
                    <p className="text-sm text-brand-blue/70">Vytilla, Maradu, Thrippunithura</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-fractul font-semibold text-brand-blue">Aluva & Beyond</h4>
                    <p className="text-sm text-brand-blue/70">Aluva, Angamaly, Perumbavoor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-heading text-xl font-bold text-brand-blue mb-4">
                Why Choose At-Home Grooming?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-brand-green text-lg mt-0.5">✓</span>
                  <span className="text-sm text-brand-blue">No travel stress for your pet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green text-lg mt-0.5">✓</span>
                  <span className="text-sm text-brand-blue">Professional equipment at your doorstep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green text-lg mt-0.5">✓</span>
                  <span className="text-sm text-brand-blue">Convenient scheduling around your time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green text-lg mt-0.5">✓</span>
                  <span className="text-sm text-brand-blue">Hygienic and safe environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/90 rounded-2xl p-6 text-white">
              <h3 className="font-heading text-xl font-bold mb-4">
                Book Your Session
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Ready for professional pet grooming near you? Contact us to schedule your at-home grooming session.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20want%20to%20book%20a%20grooming%20session%20near%20me.%20[From%20Masterpet%20Website]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-green text-brand-blue text-center py-3 px-4 rounded-lg font-fractul font-semibold hover:bg-brand-green/90 transition-colors"
                  tabIndex={0}
                  aria-label="Book grooming session on WhatsApp"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+918590643269"
                  className="block w-full bg-white/20 text-white text-center py-3 px-4 rounded-lg font-fractul font-semibold hover:bg-white/30 transition-colors"
                  tabIndex={0}
                  aria-label="Call Masterpet for booking"
                >
                  Call +91 85906 43269
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMapsSection;
