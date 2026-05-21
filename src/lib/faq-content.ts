export type FaqItem = {
  question: string;
  answer: string;
};

/** Single source of truth for homepage / Kochi FAQ UI and FAQPage JSON-LD. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does at-home pet grooming with Masterpet work?",
    answer:
      "Simply book your slot via WhatsApp or phone. Our fully equipped grooming van arrives at your doorstep at the scheduled time. Your pet is groomed by certified professionals in a safe, hygienic environment—no travel or stress! The entire process takes 1-2 hours depending on your pet's size and grooming needs.",
  },
  {
    question: "Is your team qualified to handle anxious or sensitive pets?",
    answer:
      "Absolutely! Our team includes an experienced veterinarian (10+ years in practice) and professional groomers trained to handle pets with anxiety or special needs. We create a calm, friendly atmosphere and use gentle techniques to ensure your pet feels comfortable throughout the entire grooming process.",
  },
  {
    question: "What safety and hygiene measures do you follow?",
    answer:
      "We maintain the highest standards of safety and hygiene. All equipment is sanitized between pets, we use premium quality grooming products, and follow strict protocols in our mobile salon. Each pet is treated with care and comfort as our top priority, ensuring a safe and clean environment.",
  },
  {
    question: "How can I pay for the service?",
    answer:
      "We accept UPI and Cash payments. Payment details will be shared after your grooming session is complete. We also offer package deals for regular customers and special pricing for first-time bookings. All transactions are secure and transparent.",
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "You can cancel or reschedule your appointment up to 24 hours in advance at no extra charge. Please contact us as early as possible if your plans change. We understand that emergencies happen, and we'll work with you to find a suitable alternative time.",
  },
  {
    question: "Do you groom both dogs and cats?",
    answer:
      "Yes! We provide professional grooming services for both dogs and cats. Our team is trained to handle different breeds and temperaments. We use specialized techniques and products suitable for each species to ensure the best results and comfort for your pet.",
  },
  {
    question: "What areas do you serve in Ernakulam?",
    answer:
      "We serve most areas in Ernakulam district including Kochi city, Fort Kochi, Mattancherry, Edapally, Kakkanadu, Palarivattom, Thripunithura, Kaloor, Thrikkakara, Eroor, Varapuzha, Eloor, MG Road, Vypin, Marine Drive, and surrounding areas. Please contact us with your specific location, and we'll confirm if we can provide service in your area. We're constantly expanding our service areas.",
  },
  {
    question: "How long does a typical grooming session take?",
    answer:
      "A typical grooming session takes 1-2 hours depending on your pet's size, breed, and the specific services requested. Mini grooming sessions are usually faster (45-60 minutes), while full grooming with additional services may take up to 2 hours. We'll give you an estimated time when you book.",
  },
  {
    question: "Where can I find pet grooming near me in Kochi?",
    answer:
      "Masterpet provides at-home pet grooming services across Kochi and Ernakulam district. We come directly to your doorstep, so you don't need to travel anywhere! Our service areas include Edapally, Kaloor, Ernakulam, Kakkanad, Fort Kochi, Vytilla, Maradu, Thrippunithura, Aluva, Angamaly, and many more locations. Simply contact us with your address, and we'll confirm if we serve your area.",
  },
  {
    question: "Do you offer dog nail cutting near me?",
    answer:
      "Yes! We provide professional dog nail cutting services as part of our grooming packages. Our experienced groomers use proper techniques and equipment to safely trim your dog's nails without causing any discomfort. This service is included in our Full Groom package and can also be booked as a standalone service. We come to your home, so your dog stays comfortable in familiar surroundings.",
  },
  {
    question: "Is there mobile pet grooming near me in Kochi?",
    answer:
      "Yes! Masterpet is Kochi's premier mobile pet grooming service. We bring our fully equipped grooming van to your doorstep, eliminating the stress of traveling with your pet. Our mobile service covers Kochi city, Ernakulam, and surrounding areas including Edapally, Kaloor, Kakkanad, Fort Kochi, Vytilla, Maradu, and more. Book your slot and we'll come to you!",
  },
  {
    question: "What's included in your pet grooming home service?",
    answer:
      "Our home service includes everything you'd get at a salon, but in the comfort of your home. Services include bathing, haircutting, nail trimming, ear cleaning, teeth brushing, and more. We bring all necessary equipment, premium grooming products, and professional expertise. The service is hygienic, safe, and stress-free for your pet. We also clean up after ourselves, leaving your home as we found it.",
  },
  {
    question: "How do I find the best pet grooming near me?",
    answer:
      "Look for convenience, expertise, and safety! Masterpet offers the best of all three. We come to your home (no travel stress), our team includes a veterinarian with 10+ years experience, and we use professional equipment in a hygienic environment. We serve Kochi, Ernakulam, and surrounding areas. Read our customer reviews and book a session to experience the difference!",
  },
  {
    question: "Do you provide dog grooming near me in Ernakulam?",
    answer:
      "Absolutely! We provide comprehensive dog grooming services throughout Ernakulam district. Our services include bathing, haircutting, nail trimming, ear cleaning, and more. We come to your home in Ernakulam, Kochi, Edapally, Kaloor, Kakkanad, and surrounding areas. Our team is trained to handle all dog breeds and sizes, ensuring your furry friend gets the best care possible.",
  },
  {
    question: "What makes your nail cutting service safe for dogs?",
    answer:
      "Our nail cutting service is performed by experienced professionals who understand dog anatomy. We use proper nail clippers and techniques to avoid cutting the quick (the sensitive part of the nail). We work slowly and gently, and if your dog is anxious, we can take breaks. The service is included in our grooming packages, or you can book it separately. We come to your home, so your dog stays relaxed in familiar surroundings.",
  },
];

export function buildFaqPageSchema(faqs: FaqItem[] = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
