import React from "react";

const FAQSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does at-home pet grooming with Masterpet work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply book your slot via WhatsApp or phone. Our fully equipped grooming van arrives at your doorstep at the scheduled time. Your pet is groomed by certified professionals in a safe, hygienic environment—no travel or stress! The entire process takes 1-2 hours depending on your pet's size and grooming needs."
        }
      },
      {
        "@type": "Question",
        "name": "Is your team qualified to handle anxious or sensitive pets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our team includes an experienced veterinarian (10+ years in practice) and professional groomers trained to handle pets with anxiety or special needs. We create a calm, friendly atmosphere and use gentle techniques to ensure your pet feels comfortable throughout the entire grooming process."
        }
      },
      {
        "@type": "Question",
        "name": "What safety and hygiene measures do you follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain the highest standards of safety and hygiene. All equipment is sanitized between pets, we use premium quality grooming products, and follow strict protocols in our mobile salon. Each pet is treated with care and comfort as our top priority, ensuring a safe and clean environment."
        }
      },
      {
        "@type": "Question",
        "name": "How can I pay for the service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept UPI and Cash payments. Payment details will be shared after your grooming session is complete. We also offer package deals for regular customers and special pricing for first-time bookings. All transactions are secure and transparent."
        }
      },
      {
        "@type": "Question",
        "name": "What is your cancellation or rescheduling policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can cancel or reschedule your appointment up to 24 hours in advance at no extra charge. Please contact us as early as possible if your plans change. We understand that emergencies happen, and we'll work with you to find a suitable alternative time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you groom both dogs and cats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide professional grooming services for both dogs and cats. Our team is trained to handle different breeds and temperaments. We use specialized techniques and products suitable for each species to ensure the best results and comfort for your pet."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve in Kochi and nearby locations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Kochi and surrounding areas in Ernakulam district, including Fort Kochi, Mattancherry, Edapally, Kakkanadu, Palarivattom, Thripunithura, Kaloor, Thrikkakara, Eroor, Varapuzha, Eloor, MG Road, Vypin, Marine Drive, and more. Please contact us with your specific location, and we'll confirm if we can provide service in your area."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical grooming session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical grooming session takes 1-2 hours depending on your pet's size, breed, and the specific services requested. Mini grooming sessions are usually faster (45-60 minutes), while full grooming with additional services may take up to 2 hours. We'll give you an estimated time when you book."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find pet grooming near me in Kochi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Masterpet provides at-home pet grooming services across Kochi and surrounding areas in Ernakulam district. We come directly to your doorstep, so you don't need to travel anywhere. Our service areas include Edapally, Kaloor, Kakkanad, Fort Kochi, Vytilla, Maradu, Thrippunithura, Aluva, Angamaly, and many more locations. Simply contact us with your address, and we'll confirm if we serve your area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer dog nail cutting near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide professional dog nail cutting services as part of our grooming packages. Our experienced groomers use proper techniques and equipment to safely trim your dog's nails without causing any discomfort. This service is included in our Full Groom package and can also be booked as a standalone service. We come to your home, so your dog stays comfortable in familiar surroundings."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default FAQSchema;
