import Container from "./Container";

const packages = [
  {
    name: "Mini Groom",
    price: 1399,
    description: "Essential care for a fresh, clean, and happy pet.",
    features: [
      "Bath with Shampoo and Conditioner",
      "Blow Dry",
      "Combing and Brushing",
      "Ear and Eye Cleaning",
      "Nail Clipping",
      "Health Checkup",
    ],
    cta: "Book Mini Groom",
  },
  {
    name: "Hygiene Cut",
    price: 1799,
    description: "Mini Groom plus hygiene-focused fur trimming.",
    features: [
      "All Mini Groom services",
      "Trimming of fur on paws, around mouth, and sanitary area",
    ],
    cta: "Book Hygiene Cut",
  },
  {
    name: "Zero Trim",
    price: 2099,
    description: "Mini Groom plus complete fur removal for a short-haired look.",
    features: [
      "All Mini Groom services",
      "Complete fur removal for a clean, short-haired look",
    ],
    cta: "Book Zero Trim",
  },
  {
    name: "Full Groom",
    price: 2399,
    description: "The ultimate spa experience for your pet.",
    features: [
      "All Mini Groom services",
      "Deshedding",
      "Dematting",
      "Sanitary Clipping",
      "Haircuts and Styling",
      "Paw Massage",
      "Teeth Brushing/Mouth Spray",
    ],
    cta: "Book Full Groom",
  },
];

const addOn = {
  name: "Medicated Bath Add-On",
  price: 150,
  description:
    "Medicated shampoo to soothe irritated skin, reduce itching, and help treat infections. Ideal for sensitive skin or allergies.",
  cta: "Add Medicated Bath",
};

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
      <div className="max-w-2xl mx-auto mt-8 md:mt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col items-start w-full hover:scale-[1.02] hover:bg-gray-50 transition-shadow transition-transform">
          <h4 className="font-heading text-base sm:text-lg md:text-xl text-brand-blue mb-1">{addOn.name} <span className="font-body text-sm sm:text-base text-brand-blue">– ₹{addOn.price}</span></h4>
          <p className="font-body text-brand-blue mb-3 text-sm sm:text-base">{addOn.description}</p>
          <a
            href={`${whatsappBase}${encodeURIComponent('Hi! I want to add the Medicated Bath to my grooming package. [From Masterpet Website]')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading bg-brand-green text-brand-blue px-5 py-2 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-base w-full text-center"
            tabIndex={0}
            aria-label="Add Medicated Bath on WhatsApp"
          >
            {/* The WhatsApp message includes a source tag for tracking */}
            Add to Booking
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default ServicesSection; 