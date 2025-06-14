import NAPSchema from "@/components/NAPSchema";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <NAPSchema />
      <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Terms & Conditions</h1>
        <div className="max-w-2xl w-full text-[#1b1582] font-fractul text-base md:text-lg leading-relaxed bg-white/80 rounded-xl shadow p-6">
          <p className="mb-4 font-semibold">Last updated: June 14, 2025</p>
          <p className="mb-4">Welcome to Masterpet - Mobile At Home Pet Grooming Ernakulam. By using our website and services, you agree to the following terms and conditions.</p>
          <h2 className="font-bold mt-6 mb-2">1. Services</h2>
          <p className="mb-4">We provide at-home pet grooming services as described on our website. Service availability may vary by location.</p>
          <h2 className="font-bold mt-6 mb-2">2. Appointments & Cancellations</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Appointments can be booked online or by phone.</li>
            <li>Please notify us at least 24 hours in advance to cancel or reschedule.</li>
            <li>Late cancellations or no-shows may incur a fee.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">3. Payment</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment is due upon completion of services.</li>
            <li>We accept cash, UPI, and other payment methods as specified.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">4. Pet Health & Safety</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Please inform us of any health issues, allergies, or behavioral concerns your pet may have.</li>
            <li>We reserve the right to refuse service if a pet poses a risk to our staff or itself.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">5. Liability</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>While we take utmost care, we are not liable for pre-existing conditions, injuries, or health issues that arise during or after grooming.</li>
            <li>Owners are responsible for providing accurate information about their pets.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">6. User Conduct</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>You agree not to misuse our website or services.</li>
            <li>You will not use our site for unlawful purposes.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">7. Intellectual Property</h2>
          <p className="mb-4">All content on this website is the property of Masterpet and may not be used without permission.</p>
          <h2 className="font-bold mt-6 mb-2">8. Changes to Terms</h2>
          <p className="mb-4">We may update these Terms & Conditions at any time. Changes will be posted on this page with an updated date.</p>
          <h2 className="font-bold mt-6 mb-2">9. Governing Law</h2>
          <p className="mb-4">These terms are governed by the laws of Kerala, India.</p>
          <h2 className="font-bold mt-6 mb-2">10. Contact Us</h2>
          <p className="mb-2">For questions about these Terms & Conditions, contact us at:</p>
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