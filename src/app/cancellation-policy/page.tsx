import Footer from "@/components/Footer";

export default function CancellationPolicy() {
  return (
    <>
      <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Cancellation Policy</h1>
        <div className="max-w-2xl w-full text-[#1b1582] font-fractul text-base md:text-lg leading-relaxed bg-white/80 rounded-xl shadow p-6">
          <p className="mb-4 font-semibold">Last updated: June 14, 2025</p>
          <p className="mb-4">At Masterpet - Mobile At Home Pet Grooming Ernakulam, we value your time and strive to provide reliable service. Please review our Cancellation Policy below.</p>
          <h2 className="font-bold mt-6 mb-2">1. Appointment Cancellations</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.</li>
            <li>Cancellations made less than 24 hours before the scheduled time may be subject to a cancellation fee.</li>
            <li>Repeated last-minute cancellations may result in refusal of future bookings.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">2. No-Shows</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>If you are not available at the scheduled time and location, and do not notify us, it will be considered a no-show.</li>
            <li>No-shows may be charged the full service fee or a cancellation fee.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">3. Cancellations by Masterpet</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>In rare cases, we may need to cancel or reschedule your appointment due to unforeseen circumstances (e.g., vehicle issues, staff illness, weather).</li>
            <li>We will notify you as soon as possible and offer to reschedule at your convenience.</li>
            <li>If we cancel and you have prepaid, you will receive a full refund.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">4. Contact Us</h2>
          <p className="mb-2">If you have any questions or need to cancel or reschedule, please contact us at:</p>
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