import Footer from "@/components/Footer";

export default function ReturnPolicy() {
  return (
    <>
      <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Return & Refund Policy</h1>
        <div className="max-w-2xl w-full text-[#1b1582] font-fractul text-base md:text-lg leading-relaxed bg-white/80 rounded-xl shadow p-6">
          <p className="mb-4 font-semibold">Last updated: June 14, 2025</p>
          <p className="mb-4">At Masterpet - Mobile At Home Pet Grooming Ernakulam, we strive to provide the best possible service for you and your pet. Please read our Return & Refund Policy carefully.</p>
          <h2 className="font-bold mt-6 mb-2">1. Service Satisfaction</h2>
          <p className="mb-4">If you are not satisfied with the grooming service provided, please contact us within 24 hours of your appointment. We will do our best to address your concerns and offer a suitable resolution, which may include a complimentary touch-up or re-grooming session.</p>
          <h2 className="font-bold mt-6 mb-2">2. Refunds</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Refunds are considered on a case-by-case basis for services not rendered as agreed or in the event of a cancellation by Masterpet.</li>
            <li>No refunds will be issued for completed services unless there is a clear service failure or safety concern.</li>
            <li>Refunds, if approved, will be processed to the original payment method within 7-10 business days.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">3. Cancellations</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Please notify us at least 24 hours in advance to cancel or reschedule your appointment.</li>
            <li>Late cancellations or no-shows may be subject to a cancellation fee.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">4. Contact Us</h2>
          <p className="mb-2">If you have any questions or concerns about our Return & Refund Policy, please contact us at:</p>
          <ul className="list-disc pl-6">
            <li><b>Email:</b> hello@masterpet.co.in</li>
            <li><b>Phone:</b> +91 85906 43269</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}