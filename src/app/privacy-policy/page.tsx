import NAPSchema from "@/components/NAPSchema";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <NAPSchema />
      <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Privacy Policy</h1>
        <div className="max-w-2xl w-full text-[#1b1582] font-fractul text-base md:text-lg leading-relaxed bg-white/80 rounded-xl shadow p-6">
          <p className="mb-4 font-semibold">Last updated: June 14, 2025</p>
          <p className="mb-4">At Masterpet - Mobile At Home Pet Grooming Ernakulam (“we”, “us”, or “our”), your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
          <h2 className="font-bold mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><b>Personal Information:</b> Name, phone number, email address, address, pet details, and any other information you provide when booking or contacting us.</li>
            <li><b>Usage Data:</b> Information about how you use our website, such as IP address, browser type, pages visited, and time spent.</li>
            <li><b>Cookies:</b> We may use cookies to enhance your experience and analyze site usage.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and manage our grooming services.</li>
            <li>Communicate with you about appointments, updates, and promotions.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">3. Sharing Your Information</h2>
          <p className="mb-4">We do <b>not</b> sell or rent your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who assist in delivering our services (e.g., payment processors).</li>
            <li>Legal authorities if required by law.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
          <h2 className="font-bold mt-6 mb-2">5. Your Rights</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Request access to or correction of your personal data.</li>
            <li>Request deletion of your data, subject to legal requirements.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <h2 className="font-bold mt-6 mb-2">6. Children&apos;s Privacy</h2>
          <p className="mb-4">Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>
          <h2 className="font-bold mt-6 mb-2">7. Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          <h2 className="font-bold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
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