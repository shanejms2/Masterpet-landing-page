"use client";

import Container from "./Container";
import PhotoGalleryCarousel, { type GalleryImage } from "./PhotoGalleryCarousel";
import { getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/grooming truck outside with dog.jpg",
    alt: "Masterpet mobile grooming van with happy dog - professional at-home pet grooming service in Kochi",
  },
  {
    id: 2,
    src: "/gallery/persian 2.jpg",
    alt: "Persian cat professional grooming - before and after transformation by Masterpet mobile grooming",
  },
  {
    id: 3,
    src: "/gallery/persian cat.jpeg",
    alt: "Persian cat grooming transformation - professional cat grooming service by Masterpet in Ernakulam",
  },
  {
    id: 4,
    src: "/gallery/shih tzu.jpg",
    alt: "Shih Tzu dog grooming before and after - professional dog grooming results from Masterpet care",
  },
  {
    id: 5,
    src: "/gallery/siberian husky.jpg",
    alt: "Siberian Husky grooming session - professional dog grooming at home service by Masterpet",
  },
  {
    id: 6,
    src: "/gallery/after bath dog.jpg",
    alt: "Dog after professional bath and grooming - clean and happy pet from Masterpet mobile grooming",
  },
  {
    id: 7,
    src: "/gallery/grooming truck outside trees.jpeg",
    alt: "Masterpet mobile grooming van parked outside - professional at-home pet grooming service in Kochi",
  },
  {
    id: 8,
    src: "/gallery/lab.jpg",
    alt: "Labrador dog grooming session - professional dog grooming at home service in Ernakulam",
  },
  {
    id: 9,
    src: "/gallery/after bath dog 2.jpg",
    alt: "Dog after professional grooming session - clean and well-groomed pet from Masterpet care services",
  },
  {
    id: 10,
    src: "/gallery/shih tzu 2.jpg",
    alt: "Shih Tzu dog grooming transformation - professional dog grooming service by Masterpet in Kochi",
  },
  {
    id: 11,
    src: "/gallery/shih tzu 3.jpg",
    alt: "Shih Tzu dog after professional grooming - clean and well-styled pet from Masterpet care",
  },
  {
    id: 12,
    src: "/gallery/persian cat 2.jpg",
    alt: "Persian cat grooming session - professional cat grooming service by Masterpet in Ernakulam",
  },
  {
    id: 13,
    src: "/gallery/ghibili dog.png",
    alt: "Cute dog grooming session - professional pet grooming service by Masterpet in Ernakulam",
  },
  {
    id: 14,
    src: "/gallery/cute dog 2.jpeg",
    alt: "Adorable dog after grooming - professional pet grooming service by Masterpet in Kochi",
  },
  {
    id: 15,
    src: "/gallery/grooming truck outside night.png",
    alt: "Masterpet mobile grooming van at night - professional pet grooming service available in Kochi",
  },
  {
    id: 16,
    src: "/gallery/grooming truck outside.png",
    alt: "Masterpet mobile grooming van - professional at-home pet grooming service in Ernakulam",
  },
  {
    id: 17,
    src: "/gallery/grooming truck outside trees.jpeg",
    alt: "Masterpet mobile grooming van parked outside - professional at-home pet grooming service in Kochi",
  },
  {
    id: 18,
    src: "/gallery/poodle.jpg",
    alt: "Poodle grooming transformation - professional dog grooming service in Kochi by Masterpet",
  },
];

const PhotoGallerySection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="gallery" aria-label="Grooming Photo Gallery">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-fractul text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6">
            Our Work Gallery
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-2xl mx-auto">
            Take a look at our mobile grooming van and the happy pets we&apos;ve groomed.
            Professional care that comes right to your doorstep!
          </p>
        </div>

        <PhotoGalleryCarousel images={galleryImages} />

        <div className="text-center mt-16">
          <p className="font-body text-lg text-brand-blue/70 mb-6">
            Ready to give your pet the same professional treatment?
          </p>
          <a
            href={getWhatsAppUrl("Hi Masterpet! I want to book a grooming session. [From Masterpet Website]")}
            onClick={() => trackWhatsappClick()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-green text-brand-blue hover:bg-brand-blue hover:text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Pet&apos;s Transformation
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PhotoGallerySection;
