import Container from "./Container";

const packages = [
  {
    name: "Mini Groom Package",
    price: 1599,
    description: "Essential care for a fresh, clean, and happy pet.",
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
    ],
    cta: "Book Mini Groom",
  },
  {
    name: "Hygiene Package",
    price: 1999,
    description: "Mini Groom plus hygiene-focused fur trimming.",
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "Sanitary Trim",
      "Paw Trim",
      "Mouth Area Trim",
    ],
    cta: "Book Hygiene Cut",
  },
  {
    name: "Zero Trim Package",
    price: 2299,
    description: "Mini Groom plus complete fur removal for a short-haired look.",
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "Sanitary Trim",
      "Paw Trim",
      "Mouth Area Trim",
      "Full Body Trim",
    ],
    cta: "Book Zero Trim",
  },
  {
    name: "Full Groom Package",
    price: 2599,
    description: "The ultimate spa experience for your pet.",
    features: [
      "Bathing",
      "Ear Cleaning",
      "Eye Cleaning",
      "Nail Care",
      "Health Checkup",
      "Deshedding",
      "Sanitary Trim",
      "Paw Trim",
      "Mouth Area Trim",
      "Haircut and Styling",
      "Paw Massage",
      "Teeth Brushing/Spray",
    ],
    cta: "Book Full Groom",
  },
];

const addOns = [
  {
    name: "Medicated Bath",
    price: 200,
    description: "Medicated shampoo to soothe irritated skin, reduce itching, and help treat infections. Ideal for sensitive skin or allergies.",
  },
  {
    name: "Teeth Brushing",
    price: 200,
    description: "Professional teeth cleaning and oral care for your pet's dental health.",
  },
  {
    name: "Detangling/Dematting",
    price: 200,
    description: "Professional detangling and dematting service, charged per hour for severely matted fur.",
  },
];

const whatsappBase = "https://wa.me/918590643269?text=";

const ServicesSection = () => (
  <section className="w-full bg-white py-8 md:py-12" id="services" aria-label="Our Grooming Packages">
    <Container>
      <h2 className="font-fractul font-bold text-2xl sm:text-3xl md:text-4xl text-brand-blue text-center mb-8 md:mb-10">
        Our Grooming Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col items-start border border-gray-200 hover:scale-[1.02] hover:bg-gray-50 transition-shadow transition-transform focus-within:ring-2 focus-within:ring-brand-blue w-full mb-4 md:mb-0"
            tabIndex={0}
            aria-label={pkg.name + ' grooming package'}
          >
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-brand-blue mb-2">{pkg.name}</h3>
            <div className="font-body text-brand-blue text-base sm:text-lg mb-1">₹{pkg.price} <span className="text-sm">(Incl. GST)</span></div>
            <p className="font-body text-brand-blue mb-3 text-sm sm:text-base">{pkg.description}</p>
            <ul className="mb-4 space-y-1">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-brand-blue font-body text-xs sm:text-sm">
                  <span aria-hidden="true" className="text-brand-green text-lg">✔</span> {feature}
                </li>
              ))}
            </ul>
            <a
              href={`${whatsappBase}${encodeURIComponent('Hi! I want to book the ' + pkg.name + ' package. [From Masterpet Website]')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-heading bg-brand-green text-brand-blue px-5 py-2 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-base w-full text-center"
              tabIndex={0}
              aria-label={`Book ${pkg.name} on WhatsApp`}
            >
              {/* The WhatsApp message includes a source tag for tracking */}
              Book Now
            </a>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-8 md:mt-10">
        <h3 className="font-fractul font-bold text-xl sm:text-2xl md:text-3xl text-brand-blue text-center mb-6">
          Package Add-Ons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {addOns.map((addOn) => (
            <div
              key={addOn.name}
              className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-col items-start w-full hover:scale-[1.02] hover:bg-gray-50 transition-shadow transition-transform"
            >
              <h4 className="font-heading text-base sm:text-lg md:text-xl text-brand-blue mb-1">
                {addOn.name} <span className="font-body text-sm sm:text-base text-brand-blue">– ₹{addOn.price}{addOn.name === "Detangling/Dematting" ? "/hr" : ""}</span>
              </h4>
              <p className="font-body text-brand-blue mb-3 text-sm sm:text-base">{addOn.description}</p>
              <a
                href={`${whatsappBase}${encodeURIComponent(`Hi! I want to add the ${addOn.name} to my grooming package. [From Masterpet Website]`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading bg-brand-green text-brand-blue px-4 py-2 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-sm w-full text-center"
                tabIndex={0}
                aria-label={`Add ${addOn.name} on WhatsApp`}
              >
                Add to Booking
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default ServicesSection; 