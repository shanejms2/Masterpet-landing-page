"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Users, Award } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const testimonials = [
  {
    id: 1,
    name: "Bimitha Sandeep",
    pet: "Bella",
    role: "Pet Parent",
    avatar: "/testimonials/bella_2.png",
    content: "My Bella has anxiety issues and gets stressed during grooming. Masterpet&apos;s at-home service was a game-changer! The team was so patient and created such a calm environment. Bella was relaxed throughout the entire process. Highly recommend to all pet parents!",
    rating: 5,
    date: "April 2024",
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
    date: "February 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Priya Thomas",
    pet: "Max",
    role: "Pet Parent",
    avatar: "/testimonials/bella_1.png", // Using existing image as placeholder
    content: "First time trying at-home grooming and I&apos;m impressed! The convenience is unmatched. Max was so comfortable in his own environment. The groomer was skilled and gentle. Perfect service!",
    rating: 5,
    date: "March 2024",
    verified: true,
  },
];

const stats = [
  {
    label: "Happy Pets",
    value: "1000+",
    icon: Heart,
    description: "Pets groomed with love",
  },
  {
    label: "Satisfied Customers",
    value: "500+",
    icon: Users,
    description: "Pet parents who trust us",
  },
  {
    label: "Average Rating",
    value: "5.0",
    icon: Star,
    description: "Out of 5 stars",
  },
  {
    label: "Years Experience",
    value: "3+",
    icon: Award,
    description: "Professional grooming",
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-gray-200 hover:border-brand-blue/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-fractul text-2xl md:text-3xl font-bold text-brand-blue">
                    {stat.value}
                  </div>
                  <div className="font-heading text-sm font-semibold text-brand-blue">
                    {stat.label}
                  </div>
                  <div className="font-body text-xs text-brand-blue/60">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {/* CTA Section */}
        <div className="bg-brand-green/20 rounded-2xl p-8 md:p-12 border border-brand-green/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-left">
              <h3 className="font-fractul font-bold text-3xl md:text-4xl text-brand-blue mb-4">
                Ready to Give Your Pet the Best Grooming Experience?
              </h3>
              <p className="font-body text-lg text-brand-blue/70 mb-6">
                Book your at-home grooming session with Masterpet today and let your pet enjoy professional care, comfort, and a whole lot of love—right at your doorstep!
              </p>
              <a
                href="https://wa.me/918590643269?text=Hi%20Masterpet!%20I%20want%20to%20book%20a%20grooming%20session.%20[From%20Masterpet%20Website]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-heading bg-brand-green text-brand-blue px-8 py-4 rounded-full shadow-lg hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 text-lg font-semibold"
                aria-label="Book grooming session on WhatsApp"
              >
                Book Now
              </a>
            </div>
            
            {/* Mascot Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/brand_assets/Mascot/withaheart/MP_withaheart.png"
                  alt="Happy dog mascot with heart"
                  width={300}
                  height={300}
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
                <div className="absolute -top-2 -left-2 text-pink-400 text-2xl animate-pulse">✨</div>
                <div className="absolute -top-4 -right-4 text-pink-400 text-xl animate-pulse delay-100">✨</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 