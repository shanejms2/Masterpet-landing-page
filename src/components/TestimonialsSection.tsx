import Image from "next/image";
import Container from "./Container";

const testimonials = [
  {
    name: "Bimitha Sandeep",
    pet: "Bella",
    review:
      "I am one of those pet parents who is so anxious about my pet. My pet name is Bella and she has anxiety issues, so whenever I take her out for grooming she gets anxiety attacks. This time I decided to give her grooming at home with Masterpet. The team explained the process, arrived on time, and created a comfortable, friendly atmosphere. I was so surprised that my pet was so calm with the entire process. She was well groomed according to my requirements. I highly recommend this service to all pet parents in Ernakulam. Thank you to all the staff and groomers who made my money worth booking your service. Keep the good work going!",
    rating: 5,
    date: "2024-04-19",
    photo: "/testimonials/bella_2.png",
    beforePhoto: "/testimonials/bella_1.png",
  },
  {
    name: "Anju Mathew",
    pet: "Leo",
    review:
      "We had a fantastic experience with Masterpet. They came with their fully equipped vehicle on time. The staff is very cordial, thoroughly professional and knows how to handle pets well. The grooming cubicle is extremely clean. They delivered exceptional service and Leo was looking handsome as ever after his spa. Very reasonably priced for a home service. I would surely recommend Masterpet to anyone looking for a stress-free grooming service at home.",
    rating: 5,
    date: "2024-02-01",
    photo: "/testimonials/leo_1.png",
  },
];

const googleReviewsUrl = "https://maps.app.goo.gl/m5kjDim291wRDYBt8";

const TestimonialsSection = () => (
  <section className="w-full bg-white py-8 md:py-12" id="reviews" aria-label="Customer Testimonials">
    <Container>
      <h2 className="font-heading text-3xl md:text-4xl text-brand-blue text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col items-start border border-gray-200 hover:scale-[1.02] hover:bg-gray-50 transition-shadow transition-transform focus-within:ring-2 focus-within:ring-brand-blue w-full mb-4 md:mb-0"
            tabIndex={0}
            aria-label={`Testimonial from ${t.name}`}
            itemScope
            itemType="http://schema.org/Review"
          >
            <meta itemProp="datePublished" content={t.date} />
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={t.photo}
                alt={`Photo of ${t.pet}`}
                width={56}
                height={56}
                className="rounded-full object-cover border-2 border-brand-green w-14 h-14 md:w-18 md:h-18"
              />
              <div>
                <span className="font-heading text-brand-blue text-lg" itemProp="author">{t.name}</span>
                <div className="font-body text-brand-blue text-sm">Pet: {t.pet}</div>
                <div className="flex items-center mt-1" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">★</span>
                  ))}
                  <meta itemProp="ratingValue" content={t.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>
            </div>
            <blockquote className="font-body text-brand-blue text-base mb-2" itemProp="reviewBody">
              {t.review}
            </blockquote>
          </article>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading bg-brand-green text-brand-blue px-6 py-3 rounded-full shadow hover:bg-brand-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors text-base w-full sm:w-auto text-center"
          aria-label="See all reviews on Google"
        >
          See all reviews on Google
        </a>
      </div>
    </Container>
    {/* Review Schema Markup for SEO */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Masterpet - Mobile At Home Pet Grooming Ernakulam",
        "review": testimonials.map(t => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": t.name },
          "datePublished": t.date,
          "reviewBody": t.review,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": t.rating,
            "bestRating": 5
          },
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Masterpet - Mobile At Home Pet Grooming Ernakulam"
          }
        }))
      })
    }} />
  </section>
);

export default TestimonialsSection; 