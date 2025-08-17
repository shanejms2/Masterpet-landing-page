export interface AreaConfig {
  name: string;
  slug: string;
  description: string;
  neighborhoods: string[];
  testimonials: {
    text: string;
    author: string;
    location: string;
  }[];
  communityPartnerships: string[];
  serviceCoverage: string[];
  localHighlights: string[];
}

export const areaConfig: AreaConfig[] = [
    {
    name: "Edapally",
    slug: "edapally",
    description: "",
    neighborhoods: [
      "Edapally Junction",
      "Edapally Market Area",
      "Edapally Railway Colony",
      "Edapally Church Road",
      "Edapally Bus Stand Area"
    ],
    testimonials: [
      {
        text: "Amazing service in Edapally! My dog was so comfortable at home. The groomer was professional and thorough.",
        author: "Priya",
        location: "Edapally Junction"
      },
      {
        text: "Best grooming service in Edapally. They came right to my doorstep and my cat loved the experience!",
        author: "Rajesh",
        location: "Edapally Market"
      },
      {
        text: "Highly recommend Masterpet in Edapally. Professional, hygienic, and my dog looks amazing!",
        author: "Sarah",
        location: "Edapally Railway Colony"
      }
    ],
    communityPartnerships: [
      "Edapally Residents Association",
      "Edapally Market Traders",
      "Edapally Railway Colony Welfare"
    ],
    serviceCoverage: [
      "Edapally Junction and surrounding areas",
      "Edapally Market and nearby neighborhoods", 
      "Edapally Railway Station area",
      "Edapally Church Road",
      "Edapally Bus Stand vicinity"
    ],
    localHighlights: [
      "Convenient access from Edapally Junction",
      "Serving Edapally Market area",
      "Coverage around Edapally Railway Station",
      "Professional service in residential areas"
    ]
  },
  {
    name: "Kaloor",
    slug: "kaloor",
    description: "",
    neighborhoods: [
      "Kaloor Junction",
      "Kaloor Market Area", 
      "Kaloor Stadium Road",
      "Kaloor Church Colony",
      "Kaloor Bus Stand Area"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kaloor! My dog was so relaxed at home. Highly recommend!",
        author: "Anita",
        location: "Kaloor Junction"
      },
      {
        text: "Best pet grooming in Kaloor. Professional service and my cat looks beautiful!",
        author: "Mohammed",
        location: "Kaloor Market"
      },
      {
        text: "Amazing experience with Masterpet in Kaloor. They came to my home and did a fantastic job!",
        author: "Lisa",
        location: "Kaloor Stadium Road"
      }
    ],
    communityPartnerships: [
      "Kaloor Residents Welfare Association",
      "Kaloor Market Traders Union",
      "Kaloor Stadium Area Residents"
    ],
    serviceCoverage: [
      "Kaloor Junction and surrounding areas",
      "Kaloor Market and nearby neighborhoods",
      "Kaloor Stadium Road area",
      "Kaloor Church Colony",
      "Kaloor Bus Stand vicinity"
    ],
    localHighlights: [
      "Easy access from Kaloor Junction",
      "Serving Kaloor Market area",
      "Coverage around Kaloor Stadium",
      "Professional service in residential colonies"
    ]
  },
  {
    name: "Aluva",
    slug: "aluva",
    description: "",
    neighborhoods: [
      "Aluva Town Center",
      "Aluva Railway Colony",
      "Aluva Market Area",
      "Aluva Church Road",
      "Aluva Bus Stand Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Aluva! My dog was so happy at home. Professional and caring!",
        author: "Thomas",
        location: "Aluva Town"
      },
      {
        text: "Best pet grooming in Aluva. They came to my home and my cat loved the experience!",
        author: "Maria",
        location: "Aluva Railway Colony"
      },
      {
        text: "Highly recommend Masterpet in Aluva. Excellent service and my dog looks amazing!",
        author: "David",
        location: "Aluva Market"
      }
    ],
    communityPartnerships: [
      "Aluva Town Residents Association",
      "Aluva Market Traders",
      "Aluva Railway Colony Welfare"
    ],
    serviceCoverage: [
      "Aluva Town Center and surrounding areas",
      "Aluva Railway Station area",
      "Aluva Market and nearby neighborhoods",
      "Aluva Church Road",
      "Aluva Bus Stand vicinity"
    ],
    localHighlights: [
      "Convenient access from Aluva Town",
      "Serving Aluva Railway Colony",
      "Coverage around Aluva Market",
      "Professional service in residential areas"
    ]
  },
  {
    name: "Ernakulam",
    slug: "ernakulam",
    description: "",
    neighborhoods: [
      "Ernakulam Junction",
      "Ernakulam Market Area",
      "Marine Drive Area",
      "Ernakulam Church Road",
      "Ernakulam Bus Stand Area"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Ernakulam! My dog was so comfortable at home. Professional service!",
        author: "John",
        location: "Ernakulam Junction"
      },
      {
        text: "Best pet grooming in Ernakulam. They came to my home and my cat looks beautiful!",
        author: "Susan",
        location: "Marine Drive"
      },
      {
        text: "Amazing experience with Masterpet in Ernakulam. Highly recommend their service!",
        author: "Michael",
        location: "Ernakulam Market"
      }
    ],
    communityPartnerships: [
      "Ernakulam Residents Association",
      "Ernakulam Market Traders",
      "Marine Drive Residents Welfare"
    ],
    serviceCoverage: [
      "Ernakulam Junction and surrounding areas",
      "Ernakulam Market and nearby neighborhoods",
      "Marine Drive area",
      "Ernakulam Church Road",
      "Ernakulam Bus Stand vicinity"
    ],
    localHighlights: [
      "Easy access from Ernakulam Junction",
      "Serving Marine Drive area",
      "Coverage around Ernakulam Market",
      "Professional service in city center"
    ]
  },
  {
    name: "Alangad",
    slug: "alangad",
    description: "",
    neighborhoods: [
      "Alangad Junction",
      "Alangad Market Area",
      "Alangad Railway Colony"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Alangad! My dog was so comfortable at home.",
        author: "Rahul",
        location: "Alangad Junction"
      },
      {
        text: "Best pet grooming in Alangad. Professional and caring service!",
        author: "Priya",
        location: "Alangad Market"
      },
      {
        text: "Highly recommend Masterpet in Alangad. Amazing experience!",
        author: "Suresh",
        location: "Alangad Railway Colony"
      }
    ],
    communityPartnerships: [
      "Alangad Residents Association",
      "Alangad Market Traders"
    ],
    serviceCoverage: [
      "Alangad Junction and surrounding areas",
      "Alangad Market and nearby neighborhoods",
      "Alangad Railway Station area"
    ],
    localHighlights: [
      "Convenient access from Alangad Junction",
      "Serving Alangad Market area",
      "Coverage around Alangad Railway Station"
    ]
  },
  {
    name: "Kakkanad",
    slug: "kakkanad",
    description: "",
    neighborhoods: [
      "Kakkanad Junction",
      "Infopark Area",
      "Kakkanad Market Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kakkanad! My cat loved the experience.",
        author: "Anita",
        location: "Kakkanad Junction"
      },
      {
        text: "Best pet grooming in Kakkanad. Professional service!",
        author: "Rajesh",
        location: "Infopark"
      },
      {
        text: "Amazing experience with Masterpet in Kakkanad. Highly recommend!",
        author: "Lisa",
        location: "Kakkanad Market"
      }
    ],
    communityPartnerships: [
      "Kakkanad Residents Welfare",
      "Infopark Community"
    ],
    serviceCoverage: [
      "Kakkanad Junction and surrounding areas",
      "Infopark and nearby neighborhoods",
      "Kakkanad Market area"
    ],
    localHighlights: [
      "Easy access from Kakkanad Junction",
      "Serving Infopark area",
      "Coverage around Kakkanad Market"
    ]
  },
  {
    name: "Fort Kochi",
    slug: "fort-kochi",
    description: "",
    neighborhoods: [
      "Fort Kochi Beach Area",
      "Chinese Fishing Nets Area",
      "St. Francis Church Area"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Fort Kochi! My dog looks amazing.",
        author: "Thomas",
        location: "Fort Kochi Beach"
      },
      {
        text: "Best pet grooming in Fort Kochi. Professional and caring!",
        author: "Maria",
        location: "Chinese Fishing Nets"
      },
      {
        text: "Highly recommend Masterpet in Fort Kochi. Excellent service!",
        author: "David",
        location: "St. Francis Church"
      }
    ],
    communityPartnerships: [
      "Fort Kochi Heritage Association",
      "Fort Kochi Beach Community"
    ],
    serviceCoverage: [
      "Fort Kochi Beach and surrounding areas",
      "Chinese Fishing Nets area",
      "St. Francis Church vicinity"
    ],
    localHighlights: [
      "Convenient access from Fort Kochi Beach",
      "Serving heritage area",
      "Coverage around tourist attractions"
    ]
  },
  {
    name: "Kalamassery",
    slug: "kalamassery",
    description: "",
    neighborhoods: [
      "Kalamassery Junction",
      "Kalamassery Market Area",
      "Kalamassery Railway Colony"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kalamassery! My dog was so happy.",
        author: "John",
        location: "Kalamassery Junction"
      },
      {
        text: "Best pet grooming in Kalamassery. Professional service!",
        author: "Susan",
        location: "Kalamassery Market"
      },
      {
        text: "Amazing experience with Masterpet in Kalamassery. Highly recommend!",
        author: "Michael",
        location: "Kalamassery Railway Colony"
      }
    ],
    communityPartnerships: [
      "Kalamassery Residents Association",
      "Kalamassery Market Traders"
    ],
    serviceCoverage: [
      "Kalamassery Junction and surrounding areas",
      "Kalamassery Market and nearby neighborhoods",
      "Kalamassery Railway Station area"
    ],
    localHighlights: [
      "Easy access from Kalamassery Junction",
      "Serving Kalamassery Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Thrikkakara",
    slug: "thrikkakara",
    description: "",
    neighborhoods: [
      "Thrikkakara Junction",
      "Thrikkakara Market Area",
      "Thrikkakara Temple Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Thrikkakara! My cat looks beautiful.",
        author: "Rahul",
        location: "Thrikkakara Junction"
      },
      {
        text: "Best pet grooming in Thrikkakara. Professional and caring!",
        author: "Priya",
        location: "Thrikkakara Market"
      },
      {
        text: "Highly recommend Masterpet in Thrikkakara. Excellent service!",
        author: "Suresh",
        location: "Thrikkakara Temple"
      }
    ],
    communityPartnerships: [
      "Thrikkakara Residents Welfare",
      "Thrikkakara Market Traders"
    ],
    serviceCoverage: [
      "Thrikkakara Junction and surrounding areas",
      "Thrikkakara Market and nearby neighborhoods",
      "Thrikkakara Temple area"
    ],
    localHighlights: [
      "Convenient access from Thrikkakara Junction",
      "Serving Thrikkakara Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Angamaly",
    slug: "angamaly",
    description: "",
    neighborhoods: [
      "Angamaly Junction",
      "Angamaly Market Area",
      "Angamaly Railway Colony"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Angamaly! My dog was so comfortable.",
        author: "Rahul",
        location: "Angamaly Junction"
      },
      {
        text: "Best pet grooming in Angamaly. Professional and caring service!",
        author: "Priya",
        location: "Angamaly Market"
      },
      {
        text: "Highly recommend Masterpet in Angamaly. Amazing experience!",
        author: "Suresh",
        location: "Angamaly Railway Colony"
      }
    ],
    communityPartnerships: [
      "Angamaly Residents Association",
      "Angamaly Market Traders"
    ],
    serviceCoverage: [
      "Angamaly Junction and surrounding areas",
      "Angamaly Market and nearby neighborhoods",
      "Angamaly Railway Station area"
    ],
    localHighlights: [
      "Easy access from Angamaly Junction",
      "Serving Angamaly Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Kodungallur",
    slug: "kodungallur",
    description: "",
    neighborhoods: [
      "Kodungallur Junction",
      "Kodungallur Market Area",
      "Kodungallur Temple Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kodungallur! My cat looks beautiful.",
        author: "Anita",
        location: "Kodungallur Junction"
      },
      {
        text: "Best pet grooming in Kodungallur. Professional service!",
        author: "Rajesh",
        location: "Kodungallur Market"
      },
      {
        text: "Amazing experience with Masterpet in Kodungallur. Highly recommend!",
        author: "Lisa",
        location: "Kodungallur Temple"
      }
    ],
    communityPartnerships: [
      "Kodungallur Residents Welfare",
      "Kodungallur Market Traders"
    ],
    serviceCoverage: [
      "Kodungallur Junction and surrounding areas",
      "Kodungallur Market and nearby neighborhoods",
      "Kodungallur Temple area"
    ],
    localHighlights: [
      "Convenient access from Kodungallur Junction",
      "Serving Kodungallur Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Perumbavoor",
    slug: "perumbavoor",
    description: "",
    neighborhoods: [
      "Perumbavoor Junction",
      "Perumbavoor Market Area",
      "Perumbavoor Railway Colony"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Perumbavoor! My dog looks amazing.",
        author: "Thomas",
        location: "Perumbavoor Junction"
      },
      {
        text: "Best pet grooming in Perumbavoor. Professional and caring!",
        author: "Maria",
        location: "Perumbavoor Market"
      },
      {
        text: "Highly recommend Masterpet in Perumbavoor. Excellent service!",
        author: "David",
        location: "Perumbavoor Railway Colony"
      }
    ],
    communityPartnerships: [
      "Perumbavoor Residents Association",
      "Perumbavoor Market Traders"
    ],
    serviceCoverage: [
      "Perumbavoor Junction and surrounding areas",
      "Perumbavoor Market and nearby neighborhoods",
      "Perumbavoor Railway Station area"
    ],
    localHighlights: [
      "Easy access from Perumbavoor Junction",
      "Serving Perumbavoor Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Kothamangalam",
    slug: "kothamangalam",
    description: "",
    neighborhoods: [
      "Kothamangalam Junction",
      "Kothamangalam Market Area",
      "Kothamangalam Bus Stand Area"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kothamangalam! My dog was so happy.",
        author: "John",
        location: "Kothamangalam Junction"
      },
      {
        text: "Best pet grooming in Kothamangalam. Professional service!",
        author: "Susan",
        location: "Kothamangalam Market"
      },
      {
        text: "Amazing experience with Masterpet in Kothamangalam. Highly recommend!",
        author: "Michael",
        location: "Kothamangalam Bus Stand"
      }
    ],
    communityPartnerships: [
      "Kothamangalam Residents Welfare",
      "Kothamangalam Market Traders"
    ],
    serviceCoverage: [
      "Kothamangalam Junction and surrounding areas",
      "Kothamangalam Market and nearby neighborhoods",
      "Kothamangalam Bus Stand area"
    ],
    localHighlights: [
      "Convenient access from Kothamangalam Junction",
      "Serving Kothamangalam Market area",
      "Coverage around Bus Stand"
    ]
  },
  {
    name: "Thrippunithura",
    slug: "thrippunithura",
    description: "",
    neighborhoods: [
      "Thrippunithura Junction",
      "Thrippunithura Market Area",
      "Thrippunithura Palace Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Thrippunithura! My cat loved the experience.",
        author: "Rahul",
        location: "Thrippunithura Junction"
      },
      {
        text: "Best pet grooming in Thrippunithura. Professional and caring!",
        author: "Priya",
        location: "Thrippunithura Market"
      },
      {
        text: "Highly recommend Masterpet in Thrippunithura. Excellent service!",
        author: "Suresh",
        location: "Thrippunithura Palace"
      }
    ],
    communityPartnerships: [
      "Thrippunithura Residents Association",
      "Thrippunithura Market Traders"
    ],
    serviceCoverage: [
      "Thrippunithura Junction and surrounding areas",
      "Thrippunithura Market and nearby neighborhoods",
      "Thrippunithura Palace area"
    ],
    localHighlights: [
      "Easy access from Thrippunithura Junction",
      "Serving Thrippunithura Market area",
      "Coverage around Palace area"
    ]
  },
  {
    name: "Vaikom",
    slug: "vaikom",
    description: "",
    neighborhoods: [
      "Vaikom Junction",
      "Vaikom Market Area",
      "Vaikom Temple Area"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Vaikom! My dog looks beautiful.",
        author: "Anita",
        location: "Vaikom Junction"
      },
      {
        text: "Best pet grooming in Vaikom. Professional service!",
        author: "Rajesh",
        location: "Vaikom Market"
      },
      {
        text: "Amazing experience with Masterpet in Vaikom. Highly recommend!",
        author: "Lisa",
        location: "Vaikom Temple"
      }
    ],
    communityPartnerships: [
      "Vaikom Residents Welfare",
      "Vaikom Market Traders"
    ],
    serviceCoverage: [
      "Vaikom Junction and surrounding areas",
      "Vaikom Market and nearby neighborhoods",
      "Vaikom Temple area"
    ],
    localHighlights: [
      "Convenient access from Vaikom Junction",
      "Serving Vaikom Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Vypin",
    slug: "vypin",
    description: "",
    neighborhoods: [
      "Vypin Junction",
      "Vypin Market Area",
      "Vypin Beach Area"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Vypin! My dog was so comfortable.",
        author: "Thomas",
        location: "Vypin Junction"
      },
      {
        text: "Best pet grooming in Vypin. Professional and caring!",
        author: "Maria",
        location: "Vypin Market"
      },
      {
        text: "Highly recommend Masterpet in Vypin. Amazing experience!",
        author: "David",
        location: "Vypin Beach"
      }
    ],
    communityPartnerships: [
      "Vypin Residents Association",
      "Vypin Market Traders"
    ],
    serviceCoverage: [
      "Vypin Junction and surrounding areas",
      "Vypin Market and nearby neighborhoods",
      "Vypin Beach area"
    ],
    localHighlights: [
      "Easy access from Vypin Junction",
      "Serving Vypin Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Vytilla",
    slug: "vytilla",
    description: "",
    neighborhoods: [
      "Vytilla Junction",
      "Vytilla Market Area",
      "Vytilla Hub Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Vytilla! My cat looks amazing.",
        author: "John",
        location: "Vytilla Junction"
      },
      {
        text: "Best pet grooming in Vytilla. Professional service!",
        author: "Susan",
        location: "Vytilla Market"
      },
      {
        text: "Amazing experience with Masterpet in Vytilla. Highly recommend!",
        author: "Michael",
        location: "Vytilla Hub"
      }
    ],
    communityPartnerships: [
      "Vytilla Residents Welfare",
      "Vytilla Market Traders"
    ],
    serviceCoverage: [
      "Vytilla Junction and surrounding areas",
      "Vytilla Market and nearby neighborhoods",
      "Vytilla Hub area"
    ],
    localHighlights: [
      "Convenient access from Vytilla Junction",
      "Serving Vytilla Market area",
      "Coverage around Hub area"
    ]
  },
  {
    name: "Maradu",
    slug: "maradu",
    description: "",
    neighborhoods: [
      "Maradu Junction",
      "Maradu Market Area",
      "Maradu Temple Area"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Maradu! My dog was so happy.",
        author: "Rahul",
        location: "Maradu Junction"
      },
      {
        text: "Best pet grooming in Maradu. Professional and caring!",
        author: "Priya",
        location: "Maradu Market"
      },
      {
        text: "Highly recommend Masterpet in Maradu. Excellent service!",
        author: "Suresh",
        location: "Maradu Temple"
      }
    ],
    communityPartnerships: [
      "Maradu Residents Association",
      "Maradu Market Traders"
    ],
    serviceCoverage: [
      "Maradu Junction and surrounding areas",
      "Maradu Market and nearby neighborhoods",
      "Maradu Temple area"
    ],
    localHighlights: [
      "Easy access from Maradu Junction",
      "Serving Maradu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "North Paravur",
    slug: "north-paravur",
    description: "",
    neighborhoods: [
      "North Paravur Junction",
      "North Paravur Market Area",
      "North Paravur Beach Area"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in North Paravur! My cat loved it.",
        author: "Anita",
        location: "North Paravur Junction"
      },
      {
        text: "Best pet grooming in North Paravur. Professional service!",
        author: "Rajesh",
        location: "North Paravur Market"
      },
      {
        text: "Amazing experience with Masterpet in North Paravur. Highly recommend!",
        author: "Lisa",
        location: "North Paravur Beach"
      }
    ],
    communityPartnerships: [
      "North Paravur Residents Welfare",
      "North Paravur Market Traders"
    ],
    serviceCoverage: [
      "North Paravur Junction and surrounding areas",
      "North Paravur Market and nearby neighborhoods",
      "North Paravur Beach area"
    ],
    localHighlights: [
      "Convenient access from North Paravur Junction",
      "Serving North Paravur Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Ambalameddu",
    slug: "ambalameddu",
    description: "",
    neighborhoods: [
      "Ambalameddu Junction",
      "Ambalameddu Market Area",
      "Ambalameddu Temple Area"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Ambalameddu! My dog was so comfortable.",
        author: "Rahul",
        location: "Ambalameddu Junction"
      },
      {
        text: "Best pet grooming in Ambalameddu. Professional and caring service!",
        author: "Priya",
        location: "Ambalameddu Market"
      },
      {
        text: "Highly recommend Masterpet in Ambalameddu. Amazing experience!",
        author: "Suresh",
        location: "Ambalameddu Temple"
      }
    ],
    communityPartnerships: [
      "Ambalameddu Residents Association",
      "Ambalameddu Market Traders"
    ],
    serviceCoverage: [
      "Ambalameddu Junction and surrounding areas",
      "Ambalameddu Market and nearby neighborhoods",
      "Ambalameddu Temple area"
    ],
    localHighlights: [
      "Easy access from Ambalameddu Junction",
      "Serving Ambalameddu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Ambaloor",
    slug: "ambaloor",
    description: "",
    neighborhoods: [
      "Ambaloor Junction",
      "Ambaloor Market",
      "Ambaloor Railway Station"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Ambaloor! My cat looks beautiful.",
        author: "Anita",
        location: "Ambaloor Junction"
      },
      {
        text: "Best pet grooming in Ambaloor. Professional service!",
        author: "Rajesh",
        location: "Ambaloor Market"
      },
      {
        text: "Amazing experience with Masterpet in Ambaloor. Highly recommend!",
        author: "Lisa",
        location: "Ambaloor Railway Station"
      }
    ],
    communityPartnerships: [
      "Ambaloor Residents Welfare",
      "Ambaloor Market Traders"
    ],
    serviceCoverage: [
      "Ambaloor Junction and surrounding areas",
      "Ambaloor Market and nearby neighborhoods",
      "Ambaloor Railway Station area"
    ],
    localHighlights: [
      "Convenient access from Ambaloor Junction",
      "Serving Ambaloor Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Arayankavu",
    slug: "arayankavu",
    description: "",
    neighborhoods: [
      "Arayankavu Junction",
      "Arayankavu Market",
      "Arayankavu Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Arayankavu! My dog looks amazing.",
        author: "Thomas",
        location: "Arayankavu Junction"
      },
      {
        text: "Best pet grooming in Arayankavu. Professional and caring!",
        author: "Maria",
        location: "Arayankavu Market"
      },
      {
        text: "Highly recommend Masterpet in Arayankavu. Excellent service!",
        author: "David",
        location: "Arayankavu Temple"
      }
    ],
    communityPartnerships: [
      "Arayankavu Residents Association",
      "Arayankavu Market Traders"
    ],
    serviceCoverage: [
      "Arayankavu Junction and surrounding areas",
      "Arayankavu Market and nearby neighborhoods",
      "Arayankavu Temple area"
    ],
    localHighlights: [
      "Easy access from Arayankavu Junction",
      "Serving Arayankavu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Aroor",
    slug: "aroor",
    description: "",
    neighborhoods: [
      "Aroor Junction",
      "Aroor Market",
      "Aroor Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Aroor! My dog was so happy.",
        author: "John",
        location: "Aroor Junction"
      },
      {
        text: "Best pet grooming in Aroor. Professional service!",
        author: "Susan",
        location: "Aroor Market"
      },
      {
        text: "Amazing experience with Masterpet in Aroor. Highly recommend!",
        author: "Michael",
        location: "Aroor Beach"
      }
    ],
    communityPartnerships: [
      "Aroor Residents Welfare",
      "Aroor Market Traders"
    ],
    serviceCoverage: [
      "Aroor Junction and surrounding areas",
      "Aroor Market and nearby neighborhoods",
      "Aroor Beach area"
    ],
    localHighlights: [
      "Convenient access from Aroor Junction",
      "Serving Aroor Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Athani",
    slug: "athani",
    description: "",
    neighborhoods: [
      "Athani Junction",
      "Athani Market",
      "Athani Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Athani! My cat loved the experience.",
        author: "Rahul",
        location: "Athani Junction"
      },
      {
        text: "Best pet grooming in Athani. Professional and caring!",
        author: "Priya",
        location: "Athani Market"
      },
      {
        text: "Highly recommend Masterpet in Athani. Excellent service!",
        author: "Suresh",
        location: "Athani Temple"
      }
    ],
    communityPartnerships: [
      "Athani Residents Association",
      "Athani Market Traders"
    ],
    serviceCoverage: [
      "Athani Junction and surrounding areas",
      "Athani Market and nearby neighborhoods",
      "Athani Temple area"
    ],
    localHighlights: [
      "Easy access from Athani Junction",
      "Serving Athani Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Ayappankavu",
    slug: "ayappankavu",
    description: "",
    neighborhoods: [
      "Ayappankavu Junction",
      "Ayappankavu Market",
      "Ayappankavu Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Ayappankavu! My dog looks beautiful.",
        author: "Anita",
        location: "Ayappankavu Junction"
      },
      {
        text: "Best pet grooming in Ayappankavu. Professional service!",
        author: "Rajesh",
        location: "Ayappankavu Market"
      },
      {
        text: "Amazing experience with Masterpet in Ayappankavu. Highly recommend!",
        author: "Lisa",
        location: "Ayappankavu Temple"
      }
    ],
    communityPartnerships: [
      "Ayappankavu Residents Welfare",
      "Ayappankavu Market Traders"
    ],
    serviceCoverage: [
      "Ayappankavu Junction and surrounding areas",
      "Ayappankavu Market and nearby neighborhoods",
      "Ayappankavu Temple area"
    ],
    localHighlights: [
      "Convenient access from Ayappankavu Junction",
      "Serving Ayappankavu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Chellanam",
    slug: "chellanam",
    description: "",
    neighborhoods: [
      "Chellanam Junction",
      "Chellanam Market",
      "Chellanam Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Chellanam! My dog was so comfortable.",
        author: "Thomas",
        location: "Chellanam Junction"
      },
      {
        text: "Best pet grooming in Chellanam. Professional and caring!",
        author: "Maria",
        location: "Chellanam Market"
      },
      {
        text: "Highly recommend Masterpet in Chellanam. Amazing experience!",
        author: "David",
        location: "Chellanam Beach"
      }
    ],
    communityPartnerships: [
      "Chellanam Residents Association",
      "Chellanam Market Traders"
    ],
    serviceCoverage: [
      "Chellanam Junction and surrounding areas",
      "Chellanam Market and nearby neighborhoods",
      "Chellanam Beach area"
    ],
    localHighlights: [
      "Easy access from Chellanam Junction",
      "Serving Chellanam Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Chempu",
    slug: "chempu",
    description: "",
    neighborhoods: [
      "Chempu Junction",
      "Chempu Market",
      "Chempu Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Chempu! My cat looks amazing.",
        author: "John",
        location: "Chempu Junction"
      },
      {
        text: "Best pet grooming in Chempu. Professional service!",
        author: "Susan",
        location: "Chempu Market"
      },
      {
        text: "Amazing experience with Masterpet in Chempu. Highly recommend!",
        author: "Michael",
        location: "Chempu Temple"
      }
    ],
    communityPartnerships: [
      "Chempu Residents Welfare",
      "Chempu Market Traders"
    ],
    serviceCoverage: [
      "Chempu Junction and surrounding areas",
      "Chempu Market and nearby neighborhoods",
      "Chempu Temple area"
    ],
    localHighlights: [
      "Convenient access from Chempu Junction",
      "Serving Chempu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Cherai",
    slug: "cherai",
    description: "",
    neighborhoods: [
      "Cherai Junction",
      "Cherai Market",
      "Cherai Beach"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Cherai! My dog was so happy.",
        author: "Rahul",
        location: "Cherai Junction"
      },
      {
        text: "Best pet grooming in Cherai. Professional and caring!",
        author: "Priya",
        location: "Cherai Market"
      },
      {
        text: "Highly recommend Masterpet in Cherai. Excellent service!",
        author: "Suresh",
        location: "Cherai Beach"
      }
    ],
    communityPartnerships: [
      "Cherai Residents Association",
      "Cherai Market Traders"
    ],
    serviceCoverage: [
      "Cherai Junction and surrounding areas",
      "Cherai Market and nearby neighborhoods",
      "Cherai Beach area"
    ],
    localHighlights: [
      "Easy access from Cherai Junction",
      "Serving Cherai Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Cheranalloor",
    slug: "cheranalloor",
    description: "",
    neighborhoods: [
      "Cheranalloor Junction",
      "Cheranalloor Market",
      "Cheranalloor Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Cheranalloor! My cat loved it.",
        author: "Anita",
        location: "Cheranalloor Junction"
      },
      {
        text: "Best pet grooming in Cheranalloor. Professional service!",
        author: "Rajesh",
        location: "Cheranalloor Market"
      },
      {
        text: "Amazing experience with Masterpet in Cheranalloor. Highly recommend!",
        author: "Lisa",
        location: "Cheranalloor Temple"
      }
    ],
    communityPartnerships: [
      "Cheranalloor Residents Welfare",
      "Cheranalloor Market Traders"
    ],
    serviceCoverage: [
      "Cheranalloor Junction and surrounding areas",
      "Cheranalloor Market and nearby neighborhoods",
      "Cheranalloor Temple area"
    ],
    localHighlights: [
      "Convenient access from Cheranalloor Junction",
      "Serving Cheranalloor Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Chottanikkara",
    slug: "chottanikkara",
    description: "",
    neighborhoods: [
      "Chottanikkara Junction",
      "Chottanikkara Market",
      "Chottanikkara Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Chottanikkara! My dog looks beautiful.",
        author: "Thomas",
        location: "Chottanikkara Junction"
      },
      {
        text: "Best pet grooming in Chottanikkara. Professional and caring!",
        author: "Maria",
        location: "Chottanikkara Market"
      },
      {
        text: "Highly recommend Masterpet in Chottanikkara. Excellent service!",
        author: "David",
        location: "Chottanikkara Temple"
      }
    ],
    communityPartnerships: [
      "Chottanikkara Residents Association",
      "Chottanikkara Market Traders"
    ],
    serviceCoverage: [
      "Chottanikkara Junction and surrounding areas",
      "Chottanikkara Market and nearby neighborhoods",
      "Chottanikkara Temple area"
    ],
    localHighlights: [
      "Easy access from Chottanikkara Junction",
      "Serving Chottanikkara Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Chullikal",
    slug: "chullikal",
    description: "",
    neighborhoods: [
      "Chullikal Junction",
      "Chullikal Market",
      "Chullikal Railway Station"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Chullikal! My dog was so comfortable.",
        author: "John",
        location: "Chullikal Junction"
      },
      {
        text: "Best pet grooming in Chullikal. Professional service!",
        author: "Susan",
        location: "Chullikal Market"
      },
      {
        text: "Amazing experience with Masterpet in Chullikal. Highly recommend!",
        author: "Michael",
        location: "Chullikal Railway Station"
      }
    ],
    communityPartnerships: [
      "Chullikal Residents Welfare",
      "Chullikal Market Traders"
    ],
    serviceCoverage: [
      "Chullikal Junction and surrounding areas",
      "Chullikal Market and nearby neighborhoods",
      "Chullikal Railway Station area"
    ],
    localHighlights: [
      "Convenient access from Chullikal Junction",
      "Serving Chullikal Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Edakochi",
    slug: "edakochi",
    description: "",
    neighborhoods: [
      "Edakochi Junction",
      "Edakochi Market",
      "Edakochi Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Edakochi! My cat looks amazing.",
        author: "Rahul",
        location: "Edakochi Junction"
      },
      {
        text: "Best pet grooming in Edakochi. Professional and caring!",
        author: "Priya",
        location: "Edakochi Market"
      },
      {
        text: "Highly recommend Masterpet in Edakochi. Amazing experience!",
        author: "Suresh",
        location: "Edakochi Beach"
      }
    ],
    communityPartnerships: [
      "Edakochi Residents Association",
      "Edakochi Market Traders"
    ],
    serviceCoverage: [
      "Edakochi Junction and surrounding areas",
      "Edakochi Market and nearby neighborhoods",
      "Edakochi Beach area"
    ],
    localHighlights: [
      "Easy access from Edakochi Junction",
      "Serving Edakochi Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Edathala",
    slug: "edathala",
    description: "",
    neighborhoods: [
      "Edathala Junction",
      "Edathala Market",
      "Edathala Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Edathala! My dog was so happy.",
        author: "Anita",
        location: "Edathala Junction"
      },
      {
        text: "Best pet grooming in Edathala. Professional service!",
        author: "Rajesh",
        location: "Edathala Market"
      },
      {
        text: "Amazing experience with Masterpet in Edathala. Highly recommend!",
        author: "Lisa",
        location: "Edathala Temple"
      }
    ],
    communityPartnerships: [
      "Edathala Residents Welfare",
      "Edathala Market Traders"
    ],
    serviceCoverage: [
      "Edathala Junction and surrounding areas",
      "Edathala Market and nearby neighborhoods",
      "Edathala Temple area"
    ],
    localHighlights: [
      "Convenient access from Edathala Junction",
      "Serving Edathala Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Edayar",
    slug: "edayar",
    description: "",
    neighborhoods: [
      "Edayar Junction",
      "Edayar Market",
      "Edayar Railway Station"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Edayar! My dog looks beautiful.",
        author: "Thomas",
        location: "Edayar Junction"
      },
      {
        text: "Best pet grooming in Edayar. Professional and caring!",
        author: "Maria",
        location: "Edayar Market"
      },
      {
        text: "Highly recommend Masterpet in Edayar. Excellent service!",
        author: "David",
        location: "Edayar Railway Station"
      }
    ],
    communityPartnerships: [
      "Edayar Residents Association",
      "Edayar Market Traders"
    ],
    serviceCoverage: [
      "Edayar Junction and surrounding areas",
      "Edayar Market and nearby neighborhoods",
      "Edayar Railway Station area"
    ],
    localHighlights: [
      "Easy access from Edayar Junction",
      "Serving Edayar Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Elamakkara",
    slug: "elamakkara",
    description: "",
    neighborhoods: [
      "Elamakkara Junction",
      "Elamakkara Market",
      "Elamakkara Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Elamakkara! My dog was so comfortable.",
        author: "Rahul",
        location: "Elamakkara Junction"
      },
      {
        text: "Best pet grooming in Elamakkara. Professional and caring service!",
        author: "Priya",
        location: "Elamakkara Market"
      },
      {
        text: "Highly recommend Masterpet in Elamakkara. Amazing experience!",
        author: "Suresh",
        location: "Elamakkara Temple"
      }
    ],
    communityPartnerships: [
      "Elamakkara Residents Association",
      "Elamakkara Market Traders"
    ],
    serviceCoverage: [
      "Elamakkara Junction and surrounding areas",
      "Elamakkara Market and nearby neighborhoods",
      "Elamakkara Temple area"
    ],
    localHighlights: [
      "Easy access from Elamakkara Junction",
      "Serving Elamakkara Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Eloor",
    slug: "eloor",
    description: "",
    neighborhoods: [
      "Eloor Junction",
      "Eloor Market",
      "Eloor Industrial Area"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Eloor! My cat looks beautiful.",
        author: "Anita",
        location: "Eloor Junction"
      },
      {
        text: "Best pet grooming in Eloor. Professional service!",
        author: "Rajesh",
        location: "Eloor Market"
      },
      {
        text: "Amazing experience with Masterpet in Eloor. Highly recommend!",
        author: "Lisa",
        location: "Eloor Industrial Area"
      }
    ],
    communityPartnerships: [
      "Eloor Residents Welfare",
      "Eloor Market Traders"
    ],
    serviceCoverage: [
      "Eloor Junction and surrounding areas",
      "Eloor Market and nearby neighborhoods",
      "Eloor Industrial Area"
    ],
    localHighlights: [
      "Convenient access from Eloor Junction",
      "Serving Eloor Market area",
      "Coverage around Industrial Area"
    ]
  },
  {
    name: "Ernakulam South",
    slug: "ernakulam-south",
    description: "",
    neighborhoods: [
      "Ernakulam South Junction",
      "Ernakulam South Market",
      "Ernakulam South Railway Station"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Ernakulam South! My dog looks amazing.",
        author: "Thomas",
        location: "Ernakulam South Junction"
      },
      {
        text: "Best pet grooming in Ernakulam South. Professional and caring!",
        author: "Maria",
        location: "Ernakulam South Market"
      },
      {
        text: "Highly recommend Masterpet in Ernakulam South. Excellent service!",
        author: "David",
        location: "Ernakulam South Railway Station"
      }
    ],
    communityPartnerships: [
      "Ernakulam South Residents Association",
      "Ernakulam South Market Traders"
    ],
    serviceCoverage: [
      "Ernakulam South Junction and surrounding areas",
      "Ernakulam South Market and nearby neighborhoods",
      "Ernakulam South Railway Station area"
    ],
    localHighlights: [
      "Easy access from Ernakulam South Junction",
      "Serving Ernakulam South Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Eroor",
    slug: "eroor",
    description: "",
    neighborhoods: [
      "Eroor Junction",
      "Eroor Market",
      "Eroor Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Eroor! My dog was so happy.",
        author: "John",
        location: "Eroor Junction"
      },
      {
        text: "Best pet grooming in Eroor. Professional service!",
        author: "Susan",
        location: "Eroor Market"
      },
      {
        text: "Amazing experience with Masterpet in Eroor. Highly recommend!",
        author: "Michael",
        location: "Eroor Temple"
      }
    ],
    communityPartnerships: [
      "Eroor Residents Welfare",
      "Eroor Market Traders"
    ],
    serviceCoverage: [
      "Eroor Junction and surrounding areas",
      "Eroor Market and nearby neighborhoods",
      "Eroor Temple area"
    ],
    localHighlights: [
      "Convenient access from Eroor Junction",
      "Serving Eroor Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kacheripady",
    slug: "kacheripady",
    description: "",
    neighborhoods: [
      "Kacheripady Junction",
      "Kacheripady Market",
      "Kacheripady Bus Stand"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kacheripady! My cat loved the experience.",
        author: "Rahul",
        location: "Kacheripady Junction"
      },
      {
        text: "Best pet grooming in Kacheripady. Professional and caring!",
        author: "Priya",
        location: "Kacheripady Market"
      },
      {
        text: "Highly recommend Masterpet in Kacheripady. Excellent service!",
        author: "Suresh",
        location: "Kacheripady Bus Stand"
      }
    ],
    communityPartnerships: [
      "Kacheripady Residents Association",
      "Kacheripady Market Traders"
    ],
    serviceCoverage: [
      "Kacheripady Junction and surrounding areas",
      "Kacheripady Market and nearby neighborhoods",
      "Kacheripady Bus Stand area"
    ],
    localHighlights: [
      "Easy access from Kacheripady Junction",
      "Serving Kacheripady Market area",
      "Coverage around Bus Stand"
    ]
  },
  {
    name: "Kadavantra",
    slug: "kadavantra",
    description: "",
    neighborhoods: [
      "Kadavantra Junction",
      "Kadavantra Market",
      "Kadavantra Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Kadavantra! My dog looks beautiful.",
        author: "Anita",
        location: "Kadavantra Junction"
      },
      {
        text: "Best pet grooming in Kadavantra. Professional service!",
        author: "Rajesh",
        location: "Kadavantra Market"
      },
      {
        text: "Amazing experience with Masterpet in Kadavantra. Highly recommend!",
        author: "Lisa",
        location: "Kadavantra Temple"
      }
    ],
    communityPartnerships: [
      "Kadavantra Residents Welfare",
      "Kadavantra Market Traders"
    ],
    serviceCoverage: [
      "Kadavantra Junction and surrounding areas",
      "Kadavantra Market and nearby neighborhoods",
      "Kadavantra Temple area"
    ],
    localHighlights: [
      "Convenient access from Kadavantra Junction",
      "Serving Kadavantra Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kalady",
    slug: "kalady",
    description: "",
    neighborhoods: [
      "Kalady Junction",
      "Kalady Market",
      "Kalady Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kalady! My dog was so comfortable.",
        author: "Thomas",
        location: "Kalady Junction"
      },
      {
        text: "Best pet grooming in Kalady. Professional and caring!",
        author: "Maria",
        location: "Kalady Market"
      },
      {
        text: "Highly recommend Masterpet in Kalady. Amazing experience!",
        author: "David",
        location: "Kalady Temple"
      }
    ],
    communityPartnerships: [
      "Kalady Residents Association",
      "Kalady Market Traders"
    ],
    serviceCoverage: [
      "Kalady Junction and surrounding areas",
      "Kalady Market and nearby neighborhoods",
      "Kalady Temple area"
    ],
    localHighlights: [
      "Easy access from Kalady Junction",
      "Serving Kalady Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kanjiramattom",
    slug: "kanjiramattom",
    description: "",
    neighborhoods: [
      "Kanjiramattom Junction",
      "Kanjiramattom Market",
      "Kanjiramattom Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kanjiramattom! My cat looks amazing.",
        author: "John",
        location: "Kanjiramattom Junction"
      },
      {
        text: "Best pet grooming in Kanjiramattom. Professional service!",
        author: "Susan",
        location: "Kanjiramattom Market"
      },
      {
        text: "Amazing experience with Masterpet in Kanjiramattom. Highly recommend!",
        author: "Michael",
        location: "Kanjiramattom Temple"
      }
    ],
    communityPartnerships: [
      "Kanjiramattom Residents Welfare",
      "Kanjiramattom Market Traders"
    ],
    serviceCoverage: [
      "Kanjiramattom Junction and surrounding areas",
      "Kanjiramattom Market and nearby neighborhoods",
      "Kanjiramattom Temple area"
    ],
    localHighlights: [
      "Convenient access from Kanjiramattom Junction",
      "Serving Kanjiramattom Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kannamaly",
    slug: "kannamaly",
    description: "",
    neighborhoods: [
      "Kannamaly Junction",
      "Kannamaly Market",
      "Kannamaly Beach"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Kannamaly! My dog was so happy.",
        author: "Rahul",
        location: "Kannamaly Junction"
      },
      {
        text: "Best pet grooming in Kannamaly. Professional and caring!",
        author: "Priya",
        location: "Kannamaly Market"
      },
      {
        text: "Highly recommend Masterpet in Kannamaly. Excellent service!",
        author: "Suresh",
        location: "Kannamaly Beach"
      }
    ],
    communityPartnerships: [
      "Kannamaly Residents Association",
      "Kannamaly Market Traders"
    ],
    serviceCoverage: [
      "Kannamaly Junction and surrounding areas",
      "Kannamaly Market and nearby neighborhoods",
      "Kannamaly Beach area"
    ],
    localHighlights: [
      "Easy access from Kannamaly Junction",
      "Serving Kannamaly Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Kathrikadavu",
    slug: "kathrikadavu",
    description: "",
    neighborhoods: [
      "Kathrikadavu Junction",
      "Kathrikadavu Market",
      "Kathrikadavu Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kathrikadavu! My cat loved it.",
        author: "Anita",
        location: "Kathrikadavu Junction"
      },
      {
        text: "Best pet grooming in Kathrikadavu. Professional service!",
        author: "Rajesh",
        location: "Kathrikadavu Market"
      },
      {
        text: "Amazing experience with Masterpet in Kathrikadavu. Highly recommend!",
        author: "Lisa",
        location: "Kathrikadavu Temple"
      }
    ],
    communityPartnerships: [
      "Kathrikadavu Residents Welfare",
      "Kathrikadavu Market Traders"
    ],
    serviceCoverage: [
      "Kathrikadavu Junction and surrounding areas",
      "Kathrikadavu Market and nearby neighborhoods",
      "Kathrikadavu Temple area"
    ],
    localHighlights: [
      "Convenient access from Kathrikadavu Junction",
      "Serving Kathrikadavu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kizhakambalam",
    slug: "kizhakambalam",
    description: "",
    neighborhoods: [
      "Kizhakambalam Junction",
      "Kizhakambalam Market",
      "Kizhakambalam Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kizhakambalam! My dog looks beautiful.",
        author: "Thomas",
        location: "Kizhakambalam Junction"
      },
      {
        text: "Best pet grooming in Kizhakambalam. Professional and caring!",
        author: "Maria",
        location: "Kizhakambalam Market"
      },
      {
        text: "Highly recommend Masterpet in Kizhakambalam. Excellent service!",
        author: "David",
        location: "Kizhakambalam Temple"
      }
    ],
    communityPartnerships: [
      "Kizhakambalam Residents Association",
      "Kizhakambalam Market Traders"
    ],
    serviceCoverage: [
      "Kizhakambalam Junction and surrounding areas",
      "Kizhakambalam Market and nearby neighborhoods",
      "Kizhakambalam Temple area"
    ],
    localHighlights: [
      "Easy access from Kizhakambalam Junction",
      "Serving Kizhakambalam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kolenchery",
    slug: "kolenchery",
    description: "",
    neighborhoods: [
      "Kolenchery Junction",
      "Kolenchery Market",
      "Kolenchery Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Kolenchery! My dog was so comfortable.",
        author: "John",
        location: "Kolenchery Junction"
      },
      {
        text: "Best pet grooming in Kolenchery. Professional service!",
        author: "Susan",
        location: "Kolenchery Market"
      },
      {
        text: "Amazing experience with Masterpet in Kolenchery. Highly recommend!",
        author: "Michael",
        location: "Kolenchery Temple"
      }
    ],
    communityPartnerships: [
      "Kolenchery Residents Welfare",
      "Kolenchery Market Traders"
    ],
    serviceCoverage: [
      "Kolenchery Junction and surrounding areas",
      "Kolenchery Market and nearby neighborhoods",
      "Kolenchery Temple area"
    ],
    localHighlights: [
      "Convenient access from Kolenchery Junction",
      "Serving Kolenchery Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kumbalam",
    slug: "kumbalam",
    description: "",
    neighborhoods: [
      "Kumbalam Junction",
      "Kumbalam Market",
      "Kumbalam Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kumbalam! My cat looks amazing.",
        author: "Rahul",
        location: "Kumbalam Junction"
      },
      {
        text: "Best pet grooming in Kumbalam. Professional and caring!",
        author: "Priya",
        location: "Kumbalam Market"
      },
      {
        text: "Highly recommend Masterpet in Kumbalam. Amazing experience!",
        author: "Suresh",
        location: "Kumbalam Beach"
      }
    ],
    communityPartnerships: [
      "Kumbalam Residents Association",
      "Kumbalam Market Traders"
    ],
    serviceCoverage: [
      "Kumbalam Junction and surrounding areas",
      "Kumbalam Market and nearby neighborhoods",
      "Kumbalam Beach area"
    ],
    localHighlights: [
      "Easy access from Kumbalam Junction",
      "Serving Kumbalam Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Kumblangi",
    slug: "kumblangi",
    description: "",
    neighborhoods: [
      "Kumblangi Junction",
      "Kumblangi Market",
      "Kumblangi Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kumblangi! My dog was so happy.",
        author: "Anita",
        location: "Kumblangi Junction"
      },
      {
        text: "Best pet grooming in Kumblangi. Professional service!",
        author: "Rajesh",
        location: "Kumblangi Market"
      },
      {
        text: "Amazing experience with Masterpet in Kumblangi. Highly recommend!",
        author: "Lisa",
        location: "Kumblangi Temple"
      }
    ],
    communityPartnerships: [
      "Kumblangi Residents Welfare",
      "Kumblangi Market Traders"
    ],
    serviceCoverage: [
      "Kumblangi Junction and surrounding areas",
      "Kumblangi Market and nearby neighborhoods",
      "Kumblangi Temple area"
    ],
    localHighlights: [
      "Convenient access from Kumblangi Junction",
      "Serving Kumblangi Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kundanoor",
    slug: "kundanoor",
    description: "",
    neighborhoods: [
      "Kundanoor Junction",
      "Kundanoor Market",
      "Kundanoor Railway Station"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Kundanoor! My dog looks beautiful.",
        author: "Thomas",
        location: "Kundanoor Junction"
      },
      {
        text: "Best pet grooming in Kundanoor. Professional and caring!",
        author: "Maria",
        location: "Kundanoor Market"
      },
      {
        text: "Highly recommend Masterpet in Kundanoor. Excellent service!",
        author: "David",
        location: "Kundanoor Railway Station"
      }
    ],
    communityPartnerships: [
      "Kundanoor Residents Association",
      "Kundanoor Market Traders"
    ],
    serviceCoverage: [
      "Kundanoor Junction and surrounding areas",
      "Kundanoor Market and nearby neighborhoods",
      "Kundanoor Railway Station area"
    ],
    localHighlights: [
      "Easy access from Kundanoor Junction",
      "Serving Kundanoor Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Kurupumpadi",
    slug: "kurupumpadi",
    description: "",
    neighborhoods: [
      "Kurupumpadi Junction",
      "Kurupumpadi Market",
      "Kurupumpadi Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Kurupumpadi! My dog was so comfortable.",
        author: "Rahul",
        location: "Kurupumpadi Junction"
      },
      {
        text: "Best pet grooming in Kurupumpadi. Professional and caring service!",
        author: "Priya",
        location: "Kurupumpadi Market"
      },
      {
        text: "Highly recommend Masterpet in Kurupumpadi. Amazing experience!",
        author: "Suresh",
        location: "Kurupumpadi Temple"
      }
    ],
    communityPartnerships: [
      "Kurupumpadi Residents Association",
      "Kurupumpadi Market Traders"
    ],
    serviceCoverage: [
      "Kurupumpadi Junction and surrounding areas",
      "Kurupumpadi Market and nearby neighborhoods",
      "Kurupumpadi Temple area"
    ],
    localHighlights: [
      "Easy access from Kurupumpadi Junction",
      "Serving Kurupumpadi Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Kuzhur",
    slug: "kuzhur",
    description: "",
    neighborhoods: [
      "Kuzhur Junction",
      "Kuzhur Market",
      "Kuzhur Railway Station"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Kuzhur! My cat looks beautiful.",
        author: "Anita",
        location: "Kuzhur Junction"
      },
      {
        text: "Best pet grooming in Kuzhur. Professional service!",
        author: "Rajesh",
        location: "Kuzhur Market"
      },
      {
        text: "Amazing experience with Masterpet in Kuzhur. Highly recommend!",
        author: "Lisa",
        location: "Kuzhur Railway Station"
      }
    ],
    communityPartnerships: [
      "Kuzhur Residents Welfare",
      "Kuzhur Market Traders"
    ],
    serviceCoverage: [
      "Kuzhur Junction and surrounding areas",
      "Kuzhur Market and nearby neighborhoods",
      "Kuzhur Railway Station area"
    ],
    localHighlights: [
      "Convenient access from Kuzhur Junction",
      "Serving Kuzhur Market area",
      "Coverage around Railway Station"
    ]
  },
  {
    name: "Manjumel",
    slug: "manjumel",
    description: "",
    neighborhoods: [
      "Manjumel Junction",
      "Manjumel Market",
      "Manjumel Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Manjumel! My dog looks amazing.",
        author: "Thomas",
        location: "Manjumel Junction"
      },
      {
        text: "Best pet grooming in Manjumel. Professional and caring!",
        author: "Maria",
        location: "Manjumel Market"
      },
      {
        text: "Highly recommend Masterpet in Manjumel. Excellent service!",
        author: "David",
        location: "Manjumel Temple"
      }
    ],
    communityPartnerships: [
      "Manjumel Residents Association",
      "Manjumel Market Traders"
    ],
    serviceCoverage: [
      "Manjumel Junction and surrounding areas",
      "Manjumel Market and nearby neighborhoods",
      "Manjumel Temple area"
    ],
    localHighlights: [
      "Easy access from Manjumel Junction",
      "Serving Manjumel Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Marine Drive",
    slug: "marine-drive",
    description: "",
    neighborhoods: [
      "Marine Drive Junction",
      "Marine Drive Market",
      "Marine Drive Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Marine Drive! My dog was so happy.",
        author: "John",
        location: "Marine Drive Junction"
      },
      {
        text: "Best pet grooming in Marine Drive. Professional service!",
        author: "Susan",
        location: "Marine Drive Market"
      },
      {
        text: "Amazing experience with Masterpet in Marine Drive. Highly recommend!",
        author: "Michael",
        location: "Marine Drive Beach"
      }
    ],
    communityPartnerships: [
      "Marine Drive Residents Welfare",
      "Marine Drive Market Traders"
    ],
    serviceCoverage: [
      "Marine Drive Junction and surrounding areas",
      "Marine Drive Market and nearby neighborhoods",
      "Marine Drive Beach area"
    ],
    localHighlights: [
      "Convenient access from Marine Drive Junction",
      "Serving Marine Drive Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Mattancherry",
    slug: "mattancherry",
    description: "",
    neighborhoods: [
      "Mattancherry Junction",
      "Mattancherry Market",
      "Mattancherry Palace"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Mattancherry! My cat loved the experience.",
        author: "Rahul",
        location: "Mattancherry Junction"
      },
      {
        text: "Best pet grooming in Mattancherry. Professional and caring!",
        author: "Priya",
        location: "Mattancherry Market"
      },
      {
        text: "Highly recommend Masterpet in Mattancherry. Excellent service!",
        author: "Suresh",
        location: "Mattancherry Palace"
      }
    ],
    communityPartnerships: [
      "Mattancherry Residents Association",
      "Mattancherry Market Traders"
    ],
    serviceCoverage: [
      "Mattancherry Junction and surrounding areas",
      "Mattancherry Market and nearby neighborhoods",
      "Mattancherry Palace area"
    ],
    localHighlights: [
      "Easy access from Mattancherry Junction",
      "Serving Mattancherry Market area",
      "Coverage around Palace area"
    ]
  },
  {
    name: "Mulanthuruthy",
    slug: "mulanthuruthy",
    description: "",
    neighborhoods: [
      "Mulanthuruthy Junction",
      "Mulanthuruthy Market",
      "Mulanthuruthy Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Mulanthuruthy! My dog looks beautiful.",
        author: "Anita",
        location: "Mulanthuruthy Junction"
      },
      {
        text: "Best pet grooming in Mulanthuruthy. Professional service!",
        author: "Rajesh",
        location: "Mulanthuruthy Market"
      },
      {
        text: "Amazing experience with Masterpet in Mulanthuruthy. Highly recommend!",
        author: "Lisa",
        location: "Mulanthuruthy Temple"
      }
    ],
    communityPartnerships: [
      "Mulanthuruthy Residents Welfare",
      "Mulanthuruthy Market Traders"
    ],
    serviceCoverage: [
      "Mulanthuruthy Junction and surrounding areas",
      "Mulanthuruthy Market and nearby neighborhoods",
      "Mulanthuruthy Temple area"
    ],
    localHighlights: [
      "Convenient access from Mulanthuruthy Junction",
      "Serving Mulanthuruthy Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Mulavukadu",
    slug: "mulavukadu",
    description: "",
    neighborhoods: [
      "Mulavukadu Junction",
      "Mulavukadu Market",
      "Mulavukadu Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Mulavukadu! My dog was so comfortable.",
        author: "Thomas",
        location: "Mulavukadu Junction"
      },
      {
        text: "Best pet grooming in Mulavukadu. Professional and caring!",
        author: "Maria",
        location: "Mulavukadu Market"
      },
      {
        text: "Highly recommend Masterpet in Mulavukadu. Amazing experience!",
        author: "David",
        location: "Mulavukadu Beach"
      }
    ],
    communityPartnerships: [
      "Mulavukadu Residents Association",
      "Mulavukadu Market Traders"
    ],
    serviceCoverage: [
      "Mulavukadu Junction and surrounding areas",
      "Mulavukadu Market and nearby neighborhoods",
      "Mulavukadu Beach area"
    ],
    localHighlights: [
      "Easy access from Mulavukadu Junction",
      "Serving Mulavukadu Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Nedumbassery",
    slug: "nedumbassery",
    description: "",
    neighborhoods: [
      "Nedumbassery Junction",
      "Nedumbassery Market",
      "Nedumbassery Airport"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Nedumbassery! My cat looks amazing.",
        author: "John",
        location: "Nedumbassery Junction"
      },
      {
        text: "Best pet grooming in Nedumbassery. Professional service!",
        author: "Susan",
        location: "Nedumbassery Market"
      },
      {
        text: "Amazing experience with Masterpet in Nedumbassery. Highly recommend!",
        author: "Michael",
        location: "Nedumbassery Airport"
      }
    ],
    communityPartnerships: [
      "Nedumbassery Residents Welfare",
      "Nedumbassery Market Traders"
    ],
    serviceCoverage: [
      "Nedumbassery Junction and surrounding areas",
      "Nedumbassery Market and nearby neighborhoods",
      "Nedumbassery Airport area"
    ],
    localHighlights: [
      "Convenient access from Nedumbassery Junction",
      "Serving Nedumbassery Market area",
      "Coverage around Airport area"
    ]
  },
  {
    name: "Nettoor",
    slug: "nettoor",
    description: "",
    neighborhoods: [
      "Nettoor Junction",
      "Nettoor Market",
      "Nettoor Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Nettoor! My dog was so happy.",
        author: "Rahul",
        location: "Nettoor Junction"
      },
      {
        text: "Best pet grooming in Nettoor. Professional and caring!",
        author: "Priya",
        location: "Nettoor Market"
      },
      {
        text: "Highly recommend Masterpet in Nettoor. Excellent service!",
        author: "Suresh",
        location: "Nettoor Temple"
      }
    ],
    communityPartnerships: [
      "Nettoor Residents Association",
      "Nettoor Market Traders"
    ],
    serviceCoverage: [
      "Nettoor Junction and surrounding areas",
      "Nettoor Market and nearby neighborhoods",
      "Nettoor Temple area"
    ],
    localHighlights: [
      "Easy access from Nettoor Junction",
      "Serving Nettoor Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Pachalam",
    slug: "pachalam",
    description: "",
    neighborhoods: [
      "Pachalam Junction",
      "Pachalam Market",
      "Pachalam Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Pachalam! My cat loved it.",
        author: "Anita",
        location: "Pachalam Junction"
      },
      {
        text: "Best pet grooming in Pachalam. Professional service!",
        author: "Rajesh",
        location: "Pachalam Market"
      },
      {
        text: "Amazing experience with Masterpet in Pachalam. Highly recommend!",
        author: "Lisa",
        location: "Pachalam Temple"
      }
    ],
    communityPartnerships: [
      "Pachalam Residents Welfare",
      "Pachalam Market Traders"
    ],
    serviceCoverage: [
      "Pachalam Junction and surrounding areas",
      "Pachalam Market and nearby neighborhoods",
      "Pachalam Temple area"
    ],
    localHighlights: [
      "Convenient access from Pachalam Junction",
      "Serving Pachalam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Palachuvadu",
    slug: "palachuvadu",
    description: "",
    neighborhoods: [
      "Palachuvadu Junction",
      "Palachuvadu Market",
      "Palachuvadu Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Palachuvadu! My dog looks beautiful.",
        author: "Thomas",
        location: "Palachuvadu Junction"
      },
      {
        text: "Best pet grooming in Palachuvadu. Professional and caring!",
        author: "Maria",
        location: "Palachuvadu Market"
      },
      {
        text: "Highly recommend Masterpet in Palachuvadu. Excellent service!",
        author: "David",
        location: "Palachuvadu Temple"
      }
    ],
    communityPartnerships: [
      "Palachuvadu Residents Association",
      "Palachuvadu Market Traders"
    ],
    serviceCoverage: [
      "Palachuvadu Junction and surrounding areas",
      "Palachuvadu Market and nearby neighborhoods",
      "Palachuvadu Temple area"
    ],
    localHighlights: [
      "Easy access from Palachuvadu Junction",
      "Serving Palachuvadu Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Palarivattom",
    slug: "palarivattom",
    description: "",
    neighborhoods: [
      "Palarivattom Junction",
      "Palarivattom Market",
      "Palarivattom Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Palarivattom! My dog was so comfortable.",
        author: "John",
        location: "Palarivattom Junction"
      },
      {
        text: "Best pet grooming in Palarivattom. Professional service!",
        author: "Susan",
        location: "Palarivattom Market"
      },
      {
        text: "Amazing experience with Masterpet in Palarivattom. Highly recommend!",
        author: "Michael",
        location: "Palarivattom Temple"
      }
    ],
    communityPartnerships: [
      "Palarivattom Residents Welfare",
      "Palarivattom Market Traders"
    ],
    serviceCoverage: [
      "Palarivattom Junction and surrounding areas",
      "Palarivattom Market and nearby neighborhoods",
      "Palarivattom Temple area"
    ],
    localHighlights: [
      "Convenient access from Palarivattom Junction",
      "Serving Palarivattom Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Pallikara",
    slug: "pallikara",
    description: "",
    neighborhoods: [
      "Pallikara Junction",
      "Pallikara Market",
      "Pallikara Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Pallikara! My cat looks amazing.",
        author: "Rahul",
        location: "Pallikara Junction"
      },
      {
        text: "Best pet grooming in Pallikara. Professional and caring!",
        author: "Priya",
        location: "Pallikara Market"
      },
      {
        text: "Highly recommend Masterpet in Pallikara. Amazing experience!",
        author: "Suresh",
        location: "Pallikara Beach"
      }
    ],
    communityPartnerships: [
      "Pallikara Residents Association",
      "Pallikara Market Traders"
    ],
    serviceCoverage: [
      "Pallikara Junction and surrounding areas",
      "Pallikara Market and nearby neighborhoods",
      "Pallikara Beach area"
    ],
    localHighlights: [
      "Easy access from Pallikara Junction",
      "Serving Pallikara Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Palluruthy",
    slug: "palluruthy",
    description: "",
    neighborhoods: [
      "Palluruthy Junction",
      "Palluruthy Market",
      "Palluruthy Beach"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Palluruthy! My dog was so happy.",
        author: "Anita",
        location: "Palluruthy Junction"
      },
      {
        text: "Best pet grooming in Palluruthy. Professional service!",
        author: "Rajesh",
        location: "Palluruthy Market"
      },
      {
        text: "Amazing experience with Masterpet in Palluruthy. Highly recommend!",
        author: "Lisa",
        location: "Palluruthy Beach"
      }
    ],
    communityPartnerships: [
      "Palluruthy Residents Welfare",
      "Palluruthy Market Traders"
    ],
    serviceCoverage: [
      "Palluruthy Junction and surrounding areas",
      "Palluruthy Market and nearby neighborhoods",
      "Palluruthy Beach area"
    ],
    localHighlights: [
      "Convenient access from Palluruthy Junction",
      "Serving Palluruthy Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Panampilly Nagar",
    slug: "panampilly-nagar",
    description: "",
    neighborhoods: [
      "Panampilly Nagar Junction",
      "Panampilly Nagar Market",
      "Panampilly Nagar Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Panampilly Nagar! My dog looks beautiful.",
        author: "Thomas",
        location: "Panampilly Nagar Junction"
      },
      {
        text: "Best pet grooming in Panampilly Nagar. Professional and caring!",
        author: "Maria",
        location: "Panampilly Nagar Market"
      },
      {
        text: "Highly recommend Masterpet in Panampilly Nagar. Excellent service!",
        author: "David",
        location: "Panampilly Nagar Temple"
      }
    ],
    communityPartnerships: [
      "Panampilly Nagar Residents Association",
      "Panampilly Nagar Market Traders"
    ],
    serviceCoverage: [
      "Panampilly Nagar Junction and surrounding areas",
      "Panampilly Nagar Market and nearby neighborhoods",
      "Panampilly Nagar Temple area"
    ],
    localHighlights: [
      "Easy access from Panampilly Nagar Junction",
      "Serving Panampilly Nagar Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Panangad",
    slug: "panangad",
    description: "",
    neighborhoods: [
      "Panangad Junction",
      "Panangad Market",
      "Panangad Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Panangad! My cat loved it.",
        author: "John",
        location: "Panangad Junction"
      },
      {
        text: "Best pet grooming in Panangad. Professional service!",
        author: "Susan",
        location: "Panangad Market"
      },
      {
        text: "Amazing experience with Masterpet in Panangad. Highly recommend!",
        author: "Michael",
        location: "Panangad Beach"
      }
    ],
    communityPartnerships: [
      "Panangad Residents Welfare",
      "Panangad Market Traders"
    ],
    serviceCoverage: [
      "Panangad Junction and surrounding areas",
      "Panangad Market and nearby neighborhoods",
      "Panangad Beach area"
    ],
    localHighlights: [
      "Convenient access from Panangad Junction",
      "Serving Panangad Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Pandikudy",
    slug: "pandikudy",
    description: "",
    neighborhoods: [
      "Pandikudy Junction",
      "Pandikudy Market",
      "Pandikudy Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Pandikudy! My dog looks amazing.",
        author: "Rahul",
        location: "Pandikudy Junction"
      },
      {
        text: "Best pet grooming in Pandikudy. Professional and caring!",
        author: "Priya",
        location: "Pandikudy Market"
      },
      {
        text: "Highly recommend Masterpet in Pandikudy. Excellent service!",
        author: "Suresh",
        location: "Pandikudy Temple"
      }
    ],
    communityPartnerships: [
      "Pandikudy Residents Association",
      "Pandikudy Market Traders"
    ],
    serviceCoverage: [
      "Pandikudy Junction and surrounding areas",
      "Pandikudy Market and nearby neighborhoods",
      "Pandikudy Temple area"
    ],
    localHighlights: [
      "Easy access from Pandikudy Junction",
      "Serving Pandikudy Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Piravam",
    slug: "piravam",
    description: "",
    neighborhoods: [
      "Piravam Junction",
      "Piravam Market",
      "Piravam Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Piravam! My dog was so comfortable.",
        author: "Anita",
        location: "Piravam Junction"
      },
      {
        text: "Best pet grooming in Piravam. Professional service!",
        author: "Rajesh",
        location: "Piravam Market"
      },
      {
        text: "Amazing experience with Masterpet in Piravam. Highly recommend!",
        author: "Lisa",
        location: "Piravam Temple"
      }
    ],
    communityPartnerships: [
      "Piravam Residents Welfare",
      "Piravam Market Traders"
    ],
    serviceCoverage: [
      "Piravam Junction and surrounding areas",
      "Piravam Market and nearby neighborhoods",
      "Piravam Temple area"
    ],
    localHighlights: [
      "Convenient access from Piravam Junction",
      "Serving Piravam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Pukkattupady",
    slug: "pukkattupady",
    description: "",
    neighborhoods: [
      "Pukkattupady Junction",
      "Pukkattupady Market",
      "Pukkattupady Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Pukkattupady! My cat looks beautiful.",
        author: "Thomas",
        location: "Pukkattupady Junction"
      },
      {
        text: "Best pet grooming in Pukkattupady. Professional and caring!",
        author: "Maria",
        location: "Pukkattupady Market"
      },
      {
        text: "Highly recommend Masterpet in Pukkattupady. Amazing experience!",
        author: "David",
        location: "Pukkattupady Temple"
      }
    ],
    communityPartnerships: [
      "Pukkattupady Residents Association",
      "Pukkattupady Market Traders"
    ],
    serviceCoverage: [
      "Pukkattupady Junction and surrounding areas",
      "Pukkattupady Market and nearby neighborhoods",
      "Pukkattupady Temple area"
    ],
    localHighlights: [
      "Easy access from Pukkattupady Junction",
      "Serving Pukkattupady Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Puthenkurish",
    slug: "puthenkurish",
    description: "",
    neighborhoods: [
      "Puthenkurish Junction",
      "Puthenkurish Market",
      "Puthenkurish Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Puthenkurish! My dog was so happy.",
        author: "John",
        location: "Puthenkurish Junction"
      },
      {
        text: "Best pet grooming in Puthenkurish. Professional service!",
        author: "Susan",
        location: "Puthenkurish Market"
      },
      {
        text: "Amazing experience with Masterpet in Puthenkurish. Highly recommend!",
        author: "Michael",
        location: "Puthenkurish Temple"
      }
    ],
    communityPartnerships: [
      "Puthenkurish Residents Welfare",
      "Puthenkurish Market Traders"
    ],
    serviceCoverage: [
      "Puthenkurish Junction and surrounding areas",
      "Puthenkurish Market and nearby neighborhoods",
      "Puthenkurish Temple area"
    ],
    localHighlights: [
      "Convenient access from Puthenkurish Junction",
      "Serving Puthenkurish Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Ravipuram",
    slug: "ravipuram",
    description: "",
    neighborhoods: [
      "Ravipuram Junction",
      "Ravipuram Market",
      "Ravipuram Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Ravipuram! My dog looks beautiful.",
        author: "Rahul",
        location: "Ravipuram Junction"
      },
      {
        text: "Best pet grooming in Ravipuram. Professional and caring!",
        author: "Priya",
        location: "Ravipuram Market"
      },
      {
        text: "Highly recommend Masterpet in Ravipuram. Excellent service!",
        author: "Suresh",
        location: "Ravipuram Temple"
      }
    ],
    communityPartnerships: [
      "Ravipuram Residents Association",
      "Ravipuram Market Traders"
    ],
    serviceCoverage: [
      "Ravipuram Junction and surrounding areas",
      "Ravipuram Market and nearby neighborhoods",
      "Ravipuram Temple area"
    ],
    localHighlights: [
      "Easy access from Ravipuram Junction",
      "Serving Ravipuram Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "South Vazhakulam",
    slug: "south-vazhakulam",
    description: "",
    neighborhoods: [
      "South Vazhakulam Junction",
      "South Vazhakulam Market",
      "South Vazhakulam Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in South Vazhakulam! My cat loved it.",
        author: "Anita",
        location: "South Vazhakulam Junction"
      },
      {
        text: "Best pet grooming in South Vazhakulam. Professional service!",
        author: "Rajesh",
        location: "South Vazhakulam Market"
      },
      {
        text: "Amazing experience with Masterpet in South Vazhakulam. Highly recommend!",
        author: "Lisa",
        location: "South Vazhakulam Temple"
      }
    ],
    communityPartnerships: [
      "South Vazhakulam Residents Welfare",
      "South Vazhakulam Market Traders"
    ],
    serviceCoverage: [
      "South Vazhakulam Junction and surrounding areas",
      "South Vazhakulam Market and nearby neighborhoods",
      "South Vazhakulam Temple area"
    ],
    localHighlights: [
      "Convenient access from South Vazhakulam Junction",
      "Serving South Vazhakulam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Thammanam",
    slug: "thammanam",
    description: "",
    neighborhoods: [
      "Thammanam Junction",
      "Thammanam Market",
      "Thammanam Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Thammanam! My dog looks amazing.",
        author: "Thomas",
        location: "Thammanam Junction"
      },
      {
        text: "Best pet grooming in Thammanam. Professional and caring!",
        author: "Maria",
        location: "Thammanam Market"
      },
      {
        text: "Highly recommend Masterpet in Thammanam. Excellent service!",
        author: "David",
        location: "Thammanam Temple"
      }
    ],
    communityPartnerships: [
      "Thammanam Residents Association",
      "Thammanam Market Traders"
    ],
    serviceCoverage: [
      "Thammanam Junction and surrounding areas",
      "Thammanam Market and nearby neighborhoods",
      "Thammanam Temple area"
    ],
    localHighlights: [
      "Easy access from Thammanam Junction",
      "Serving Thammanam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Thevakkal",
    slug: "thevakkal",
    description: "",
    neighborhoods: [
      "Thevakkal Junction",
      "Thevakkal Market",
      "Thevakkal Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Thevakkal! My dog was so comfortable.",
        author: "John",
        location: "Thevakkal Junction"
      },
      {
        text: "Best pet grooming in Thevakkal. Professional service!",
        author: "Susan",
        location: "Thevakkal Market"
      },
      {
        text: "Amazing experience with Masterpet in Thevakkal. Highly recommend!",
        author: "Michael",
        location: "Thevakkal Temple"
      }
    ],
    communityPartnerships: [
      "Thevakkal Residents Welfare",
      "Thevakkal Market Traders"
    ],
    serviceCoverage: [
      "Thevakkal Junction and surrounding areas",
      "Thevakkal Market and nearby neighborhoods",
      "Thevakkal Temple area"
    ],
    localHighlights: [
      "Convenient access from Thevakkal Junction",
      "Serving Thevakkal Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Thevara",
    slug: "thevara",
    description: "",
    neighborhoods: [
      "Thevara Junction",
      "Thevara Market",
      "Thevara Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Thevara! My cat looks beautiful.",
        author: "Rahul",
        location: "Thevara Junction"
      },
      {
        text: "Best pet grooming in Thevara. Professional and caring!",
        author: "Priya",
        location: "Thevara Market"
      },
      {
        text: "Highly recommend Masterpet in Thevara. Amazing experience!",
        author: "Suresh",
        location: "Thevara Beach"
      }
    ],
    communityPartnerships: [
      "Thevara Residents Association",
      "Thevara Market Traders"
    ],
    serviceCoverage: [
      "Thevara Junction and surrounding areas",
      "Thevara Market and nearby neighborhoods",
      "Thevara Beach area"
    ],
    localHighlights: [
      "Easy access from Thevara Junction",
      "Serving Thevara Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Thiruvankulam",
    slug: "thiruvankulam",
    description: "",
    neighborhoods: [
      "Thiruvankulam Junction",
      "Thiruvankulam Market",
      "Thiruvankulam Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Thiruvankulam! My dog was so happy.",
        author: "Anita",
        location: "Thiruvankulam Junction"
      },
      {
        text: "Best pet grooming in Thiruvankulam. Professional service!",
        author: "Rajesh",
        location: "Thiruvankulam Market"
      },
      {
        text: "Amazing experience with Masterpet in Thiruvankulam. Highly recommend!",
        author: "Lisa",
        location: "Thiruvankulam Temple"
      }
    ],
    communityPartnerships: [
      "Thiruvankulam Residents Welfare",
      "Thiruvankulam Market Traders"
    ],
    serviceCoverage: [
      "Thiruvankulam Junction and surrounding areas",
      "Thiruvankulam Market and nearby neighborhoods",
      "Thiruvankulam Temple area"
    ],
    localHighlights: [
      "Convenient access from Thiruvankulam Junction",
      "Serving Thiruvankulam Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Thoppumpady",
    slug: "thoppumpady",
    description: "",
    neighborhoods: [
      "Thoppumpady Junction",
      "Thoppumpady Market",
      "Thoppumpady Beach"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Thoppumpady! My dog looks beautiful.",
        author: "Thomas",
        location: "Thoppumpady Junction"
      },
      {
        text: "Best pet grooming in Thoppumpady. Professional and caring!",
        author: "Maria",
        location: "Thoppumpady Market"
      },
      {
        text: "Highly recommend Masterpet in Thoppumpady. Excellent service!",
        author: "David",
        location: "Thoppumpady Beach"
      }
    ],
    communityPartnerships: [
      "Thoppumpady Residents Association",
      "Thoppumpady Market Traders"
    ],
    serviceCoverage: [
      "Thoppumpady Junction and surrounding areas",
      "Thoppumpady Market and nearby neighborhoods",
      "Thoppumpady Beach area"
    ],
    localHighlights: [
      "Easy access from Thoppumpady Junction",
      "Serving Thoppumpady Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Thuthiyoor",
    slug: "thuthiyoor",
    description: "",
    neighborhoods: [
      "Thuthiyoor Junction",
      "Thuthiyoor Market",
      "Thuthiyoor Temple"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Thuthiyoor! My cat loved it.",
        author: "John",
        location: "Thuthiyoor Junction"
      },
      {
        text: "Best pet grooming in Thuthiyoor. Professional service!",
        author: "Susan",
        location: "Thuthiyoor Market"
      },
      {
        text: "Amazing experience with Masterpet in Thuthiyoor. Highly recommend!",
        author: "Michael",
        location: "Thuthiyoor Temple"
      }
    ],
    communityPartnerships: [
      "Thuthiyoor Residents Welfare",
      "Thuthiyoor Market Traders"
    ],
    serviceCoverage: [
      "Thuthiyoor Junction and surrounding areas",
      "Thuthiyoor Market and nearby neighborhoods",
      "Thuthiyoor Temple area"
    ],
    localHighlights: [
      "Convenient access from Thuthiyoor Junction",
      "Serving Thuthiyoor Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Unnichira",
    slug: "unnichira",
    description: "",
    neighborhoods: [
      "Unnichira Junction",
      "Unnichira Market",
      "Unnichira Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Unnichira! My dog looks amazing.",
        author: "Rahul",
        location: "Unnichira Junction"
      },
      {
        text: "Best pet grooming in Unnichira. Professional and caring!",
        author: "Priya",
        location: "Unnichira Market"
      },
      {
        text: "Highly recommend Masterpet in Unnichira. Excellent service!",
        author: "Suresh",
        location: "Unnichira Temple"
      }
    ],
    communityPartnerships: [
      "Unnichira Residents Association",
      "Unnichira Market Traders"
    ],
    serviceCoverage: [
      "Unnichira Junction and surrounding areas",
      "Unnichira Market and nearby neighborhoods",
      "Unnichira Temple area"
    ],
    localHighlights: [
      "Easy access from Unnichira Junction",
      "Serving Unnichira Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Vaduthala",
    slug: "vaduthala",
    description: "",
    neighborhoods: [
      "Vaduthala Junction",
      "Vaduthala Market",
      "Vaduthala Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Vaduthala! My dog was so comfortable.",
        author: "Anita",
        location: "Vaduthala Junction"
      },
      {
        text: "Best pet grooming in Vaduthala. Professional service!",
        author: "Rajesh",
        location: "Vaduthala Market"
      },
      {
        text: "Amazing experience with Masterpet in Vaduthala. Highly recommend!",
        author: "Lisa",
        location: "Vaduthala Temple"
      }
    ],
    communityPartnerships: [
      "Vaduthala Residents Welfare",
      "Vaduthala Market Traders"
    ],
    serviceCoverage: [
      "Vaduthala Junction and surrounding areas",
      "Vaduthala Market and nearby neighborhoods",
      "Vaduthala Temple area"
    ],
    localHighlights: [
      "Convenient access from Vaduthala Junction",
      "Serving Vaduthala Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Varapuzha",
    slug: "varapuzha",
    description: "",
    neighborhoods: [
      "Varapuzha Junction",
      "Varapuzha Market",
      "Varapuzha Beach"
    ],
    testimonials: [
      {
        text: "Excellent grooming service in Varapuzha! My cat looks beautiful.",
        author: "Thomas",
        location: "Varapuzha Junction"
      },
      {
        text: "Best pet grooming in Varapuzha. Professional and caring!",
        author: "Maria",
        location: "Varapuzha Market"
      },
      {
        text: "Highly recommend Masterpet in Varapuzha. Amazing experience!",
        author: "David",
        location: "Varapuzha Beach"
      }
    ],
    communityPartnerships: [
      "Varapuzha Residents Association",
      "Varapuzha Market Traders"
    ],
    serviceCoverage: [
      "Varapuzha Junction and surrounding areas",
      "Varapuzha Market and nearby neighborhoods",
      "Varapuzha Beach area"
    ],
    localHighlights: [
      "Easy access from Varapuzha Junction",
      "Serving Varapuzha Market area",
      "Coverage around Beach area"
    ]
  },
  {
    name: "Vazhakkala",
    slug: "vazhakkala",
    description: "",
    neighborhoods: [
      "Vazhakkala Junction",
      "Vazhakkala Market",
      "Vazhakkala Temple"
    ],
    testimonials: [
      {
        text: "Fantastic grooming service in Vazhakkala! My dog was so happy.",
        author: "John",
        location: "Vazhakkala Junction"
      },
      {
        text: "Best pet grooming in Vazhakkala. Professional service!",
        author: "Susan",
        location: "Vazhakkala Market"
      },
      {
        text: "Amazing experience with Masterpet in Vazhakkala. Highly recommend!",
        author: "Michael",
        location: "Vazhakkala Temple"
      }
    ],
    communityPartnerships: [
      "Vazhakkala Residents Welfare",
      "Vazhakkala Market Traders"
    ],
    serviceCoverage: [
      "Vazhakkala Junction and surrounding areas",
      "Vazhakkala Market and nearby neighborhoods",
      "Vazhakkala Temple area"
    ],
    localHighlights: [
      "Convenient access from Vazhakkala Junction",
      "Serving Vazhakkala Market area",
      "Coverage around Temple area"
    ]
  },
  {
    name: "Vennala",
    slug: "vennala",
    description: "",
    neighborhoods: [
      "Vennala Junction",
      "Vennala Market",
      "Vennala Temple"
    ],
    testimonials: [
      {
        text: "Outstanding grooming service in Vennala! My dog looks beautiful.",
        author: "Rahul",
        location: "Vennala Junction"
      },
      {
        text: "Best pet grooming in Vennala. Professional and caring!",
        author: "Priya",
        location: "Vennala Market"
      },
      {
        text: "Highly recommend Masterpet in Vennala. Excellent service!",
        author: "Suresh",
        location: "Vennala Temple"
      }
    ],
    communityPartnerships: [
      "Vennala Residents Association",
      "Vennala Market Traders"
    ],
    serviceCoverage: [
      "Vennala Junction and surrounding areas",
      "Vennala Market and nearby neighborhoods",
      "Vennala Temple area"
    ],
    localHighlights: [
      "Easy access from Vennala Junction",
      "Serving Vennala Market area",
      "Coverage around Temple area"
    ]
  }
];

// Helper function to get area by slug
export const getAreaBySlug = (slug: string): AreaConfig | undefined => {
  return areaConfig.find(area => area.slug === slug);
};

// Helper function to get all area slugs
export const getAllAreaSlugs = (): string[] => {
  return areaConfig.map(area => area.slug);
};

// Helper function to get area names
export const getAllAreaNames = (): string[] => {
  return areaConfig.map(area => area.name);
};
