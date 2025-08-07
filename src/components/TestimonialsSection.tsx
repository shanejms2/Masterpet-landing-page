"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const testimonials = [
  {
    id: 1,
    name: "Bimitha Sandeep",
    pet: "Bella",
    role: "Pet Parent",
    avatar: "/testimonials/bella_2.png",
            content: "My Bella has anxiety issues and gets stressed during grooming. Masterpet's at-home service was a game-changer! The team was so patient and created such a calm environment. Bella was relaxed throughout the entire process. Highly recommend to all pet parents!",
    rating: 5,
    date: "November 2024",
    verified: true,
  },
  {
    id: 2,
    name: "Anju Mathew",
    pet: "Leo",
    role: "Pet Parent",
    avatar: "/testimonials/leo_1.png",
    content: "Exceptional service! The grooming van was spotless, staff was professional, and Leo looked absolutely handsome after his spa. Very reasonably priced for such quality home service. Will definitely book again!",
    rating: 5,
    date: "February 2025",
    verified: true,
  },
  {
    id: 3,
    name: "Priya Thomas",
    pet: "Max",
    role: "Pet Parent",
    avatar: "/testimonials/bella_1.png", // Using existing image as placeholder
            content: "First time trying at-home grooming and I'm impressed! The convenience is unmatched. Max was so comfortable in his own environment. The groomer was skilled and gentle. Perfect service!",
    rating: 5,
    date: "March 2025",
    verified: true,
  },
];



const platformRatings = [
  {
    platform: "Google Maps",
    rating: 5.0,
    reviews: 168,
    icon: "/icons/google_maps.png",
    color: "bg-blue-500",
    link: "https://maps.app.goo.gl/h4QxTZVmMNWcaA1Q7",
    verified: true,
  },
  {
    platform: "Justdial",
    rating: 5.0,
    reviews: 245,
    icon: "/icons/justdial.png", // You'll need to add this icon
    color: "bg-yellow-500",
    link: "https://www.justdial.com/Ernakulam/Masterpet-Mobile-At-Home-Pet-Grooming-Ernakulam-Near-YMCA-Indoor-Stadium-Aluva/0484PX484-X484-241005012209-C8K9_BZDET?trkid=&term=&ncatid=11002277&area=&search=Showing%20Results%20for%20%22Masterpet%20Care%20Pvt%20Ltd%22%20in%20Kochi&mncatname=Masterpet%20Care%20Pvt%20Ltd&ftterm=Masterpet%20Care%20Pvt%20Ltd&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24" id="testimonials" aria-label="Customer Testimonials and Reviews">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-green/20 text-brand-blue border-brand-green/30">
            <Star className="w-3 h-3 mr-1" />
            Trusted by 1000+ Pet Parents
          </Badge>
          <h2 className="font-fractul font-bold text-3xl md:text-4xl lg:text-5xl text-brand-blue mb-4">
            What Pet Parents Say
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-blue/70 max-w-3xl mx-auto">
            Real experiences from pet parents who chose Masterpet for their furry family members. 
            See why our at-home grooming service is the preferred choice in Ernakulam.
          </p>
        </div>



        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-200 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.pet} - ${testimonial.name}'s pet`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-brand-green"
                    />
                    <div>
                      <CardTitle className="font-heading text-base text-brand-blue">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="font-body text-sm text-brand-blue/70">
                        {testimonial.role} • {testimonial.pet}
                      </CardDescription>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="bg-brand-green/20 text-brand-blue border-brand-green/30 text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-body text-sm text-brand-blue/60 ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>
                <div className="font-body text-xs text-brand-blue/50">
                  {testimonial.date}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="font-body text-sm text-brand-blue leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Ratings Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-blue mb-4">
              Rated & Reviewed on
            </h3>
            <p className="font-body text-lg text-brand-blue/70">
              See what customers say about us on trusted platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platformRatings.map((platform) => (
              <Card key={platform.platform} className="border-gray-200 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={platform.icon}
                        alt={`${platform.platform} icon`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-brand-blue">
                          {platform.platform}
                        </h4>
                        {platform.verified && (
                          <Badge variant="secondary" className="bg-brand-green/20 text-brand-blue border-brand-green/30 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue/60 hover:text-brand-blue transition-colors"
                      aria-label={`View reviews on ${platform.platform}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(platform.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="font-heading text-lg font-bold text-brand-blue">
                      {platform.rating.toFixed(1)}
                    </span>
                    <span className="font-body text-sm text-brand-blue/60">
                      ({platform.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-brand-blue/70">
                      Based on {platform.reviews} customer reviews
                    </div>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading bg-brand-green text-brand-blue px-4 py-2 rounded-full text-sm hover:bg-brand-blue hover:text-white transition-all duration-300"
                    >
                      View Reviews
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default TestimonialsSection; 