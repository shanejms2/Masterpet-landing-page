"use client";

import { useEffect, useRef } from 'react';
import Container from './Container';

interface GoogleMapsSectionProps {
  className?: string;
}

interface Landmark {
  name: string;
  lat: number;
  lng: number;
  type: "area" | "landmark";
  landmarks?: string[];
  category?: "transport" | "attraction" | "business" | "sports";
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

      // Comprehensive landmarks database based on areaConfig
      const landmarks: Landmark[] = [
        // Major Service Areas
        { name: "Edapally", lat: 10.0259, lng: 76.3075, type: "area", landmarks: ["Edapally Junction", "Edapally Market", "Edapally Railway Station", "Edapally Church Road", "Edapally Bus Stand"] },
        { name: "Kaloor", lat: 10.0168, lng: 76.3018, type: "area", landmarks: ["Kaloor Junction", "Kaloor Market", "Kaloor Stadium", "Kaloor Church Colony", "Kaloor Bus Stand"] },
        { name: "Aluva", lat: 10.1065, lng: 76.3516, type: "area", landmarks: ["Aluva Town Center", "Aluva Railway Station", "Aluva Market", "Aluva Church Road", "Aluva Bus Stand"] },
        { name: "Ernakulam", lat: 9.9312, lng: 76.2673, type: "area", landmarks: ["Ernakulam Junction", "Ernakulam Market", "Marine Drive", "Ernakulam Church Road", "Ernakulam Bus Stand"] },
        { name: "Kakkanad", lat: 10.0168, lng: 76.3618, type: "area", landmarks: ["Kakkanad Junction", "Infopark", "Kakkanad Market"] },
        { name: "Fort Kochi", lat: 9.9312, lng: 76.2673, type: "area", landmarks: ["Fort Kochi Beach", "Chinese Fishing Nets", "St. Francis Church", "Mattancherry Palace"] },
        { name: "Vytilla", lat: 9.9667, lng: 76.3167, type: "area", landmarks: ["Vytilla Junction", "Vytilla Market", "Vytilla Hub"] },
        { name: "Maradu", lat: 9.8833, lng: 76.3167, type: "area", landmarks: ["Maradu Junction", "Maradu Market", "Maradu Temple"] },
        { name: "Thrippunithura", lat: 9.9500, lng: 76.3500, type: "area", landmarks: ["Thrippunithura Junction", "Thrippunithura Market", "Thrippunithura Palace"] },
        
        // Additional Major Areas
        { name: "Kalamassery", lat: 10.0667, lng: 76.3167, type: "area", landmarks: ["Kalamassery Junction", "Kalamassery Market", "Kalamassery Railway Station"] },
        { name: "Angamaly", lat: 10.2000, lng: 76.4000, type: "area", landmarks: ["Angamaly Junction", "Angamaly Market", "Angamaly Railway Station"] },
        { name: "Perumbavoor", lat: 10.1167, lng: 76.4667, type: "area", landmarks: ["Perumbavoor Junction", "Perumbavoor Market", "Perumbavoor Railway Station"] },
        { name: "Kothamangalam", lat: 10.0667, lng: 76.6167, type: "area", landmarks: ["Kothamangalam Junction", "Kothamangalam Market", "Kothamangalam Bus Stand"] },
        { name: "Vaikom", lat: 9.7500, lng: 76.4000, type: "area", landmarks: ["Vaikom Junction", "Vaikom Market", "Vaikom Temple"] },
        { name: "Vypin", lat: 10.0833, lng: 76.1833, type: "area", landmarks: ["Vypin Junction", "Vypin Market", "Vypin Beach"] },
        { name: "North Paravur", lat: 10.1500, lng: 76.2333, type: "area", landmarks: ["North Paravur Junction", "North Paravur Market", "North Paravur Beach"] },
        
        // Key Landmarks and Points of Interest
        { name: "Cochin International Airport", lat: 10.1550, lng: 76.3910, type: "landmark", category: "transport" },
        { name: "Ernakulam Junction Railway Station", lat: 9.9674, lng: 76.2454, type: "landmark", category: "transport" },
        { name: "Aluva Railway Station", lat: 10.1065, lng: 76.3516, type: "landmark", category: "transport" },
        { name: "Marine Drive", lat: 9.9312, lng: 76.2673, type: "landmark", category: "attraction" },
        { name: "Fort Kochi Beach", lat: 9.9312, lng: 76.2673, type: "landmark", category: "attraction" },
        { name: "Chinese Fishing Nets", lat: 9.9312, lng: 76.2673, type: "landmark", category: "attraction" },
        { name: "St. Francis Church", lat: 9.9312, lng: 76.2673, type: "landmark", category: "attraction" },
        { name: "Mattancherry Palace", lat: 9.9312, lng: 76.2673, type: "landmark", category: "attraction" },
        { name: "Infopark Kochi", lat: 10.0168, lng: 76.3618, type: "landmark", category: "business" },
        { name: "Kaloor Stadium", lat: 10.0168, lng: 76.3018, type: "landmark", category: "sports" },
        { name: "Thrippunithura Palace", lat: 9.9500, lng: 76.3500, type: "landmark", category: "attraction" },
        { name: "Vaikom Temple", lat: 9.7500, lng: 76.4000, type: "landmark", category: "attraction" },
        { name: "Vypin Beach", lat: 10.0833, lng: 76.1833, type: "landmark", category: "attraction" },
        { name: "North Paravur Beach", lat: 10.1500, lng: 76.2333, type: "landmark", category: "attraction" },
        { name: "Cherai Beach", lat: 10.1333, lng: 76.1833, type: "landmark", category: "attraction" },
        { name: "Kumbalangi", lat: 9.8833, lng: 76.3167, type: "landmark", category: "attraction" },
        { name: "Willingdon Island", lat: 9.9500, lng: 76.2833, type: "landmark", category: "business" },
        { name: "Cochin Port", lat: 9.9500, lng: 76.2833, type: "landmark", category: "business" },
        { name: "Vytilla Hub", lat: 9.9667, lng: 76.3167, type: "landmark", category: "transport" },
        { name: "Edapally Junction", lat: 10.0259, lng: 76.3075, type: "landmark", category: "transport" },
        { name: "Kaloor Junction", lat: 10.0168, lng: 76.3018, type: "landmark", category: "transport" },
        { name: "Kakkanad Junction", lat: 10.0168, lng: 76.3618, type: "landmark", category: "transport" },
        { name: "Angamaly Junction", lat: 10.2000, lng: 76.4000, type: "landmark", category: "transport" },
        { name: "Perumbavoor Junction", lat: 10.1167, lng: 76.4667, type: "landmark", category: "transport" },
        { name: "Kothamangalam Junction", lat: 10.0667, lng: 76.6167, type: "landmark", category: "transport" },
        { name: "Vaikom Junction", lat: 9.7500, lng: 76.4000, type: "landmark", category: "transport" },
        { name: "Vypin Junction", lat: 10.0833, lng: 76.1833, type: "landmark", category: "transport" },
        { name: "North Paravur Junction", lat: 10.1500, lng: 76.2333, type: "landmark", category: "transport" }
      ];

      // Add landmarks to map with different styles based on type
      landmarks.forEach((landmark: Landmark) => {
        let iconConfig;
        let infoContent;

        if (landmark.type === "area") {
          // Service area markers
          iconConfig = {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#caf857",
            fillOpacity: 0.8,
            strokeColor: "#1b1582",
            strokeWeight: 2
          };
          
          infoContent = `
            <div style="padding: 10px; max-width: 250px;">
              <h4 style="margin: 0 0 8px 0; color: #1b1582; font-weight: bold;">${landmark.name}</h4>
              <p style="margin: 0 0 5px 0; font-size: 12px; color: #caf857;">✓ Pet Grooming Service Area</p>
              <p style="margin: 0 0 5px 0; font-size: 11px;">📍 Key Landmarks:</p>
              <ul style="margin: 0; padding-left: 15px; font-size: 10px;">
                ${landmark.landmarks?.slice(0, 3).map((l: string) => `<li>${l}</li>`).join('') || ''}
              </ul>
              <p style="margin: 5px 0 0 0; font-size: 10px; color: #666;">At-Home Service Available</p>
            </div>
          `;
        } else {
          // Individual landmark markers
          const categoryColors: { [key: string]: string } = {
            transport: "#4285f4",
            attraction: "#ea4335", 
            business: "#34a853",
            sports: "#fbbc05"
          };
          
          iconConfig = {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: categoryColors[landmark.category || "business"] || "#666",
            fillOpacity: 0.7,
            strokeColor: "#fff",
            strokeWeight: 1
          };
          
          infoContent = `
            <div style="padding: 8px; max-width: 200px;">
              <h4 style="margin: 0 0 5px 0; color: #1b1582; font-size: 14px;">${landmark.name}</h4>
              <p style="margin: 0; font-size: 11px; text-transform: capitalize;">${landmark.category}</p>
              <p style="margin: 3px 0 0 0; font-size: 10px; color: #caf857;">Nearby Pet Grooming Available</p>
            </div>
          `;
        }

        const marker = new window.google.maps.Marker({
          position: { lat: landmark.lat, lng: landmark.lng },
          map: map,
          title: landmark.name,
          icon: iconConfig
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
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
          <h2 className="font-fractul font-bold text-3xl md:text-4xl lg:text-5xl text-brand-blue mb-4">
            Find Pet Grooming Near Me
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/80 max-w-3xl mx-auto mb-6">
            Professional at-home pet grooming services available across Kochi and surrounding areas. 
            We come to your doorstep for stress-free grooming!
          </p>
        </div>

        <div className="w-full">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div 
              ref={mapRef} 
              className="w-full h-96 md:h-[600px] relative"
              role="img"
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
      </Container>
    </section>
  );
};

export default GoogleMapsSection;
