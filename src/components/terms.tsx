import React from "react";
import { COMPANY_INFO } from "@/lib/constants";

const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-600 mb-4">Last Updated: March 22, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                <p>
                    By using Masterpet, you agree to these Terms and Conditions. If you do not agree, please do not use the app.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Services</h2>
                <p>
                    Masterpet provides pet care services, including booking caregivers, scheduling appointments, and managing pet profiles. We reserve the right to modify or discontinue services at any time.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6">
                    <li>Provide accurate information when creating an account or booking services.</li>
                    <li>Use the app only for lawful purposes.</li>
                    <li>Be responsible for the care and safety of your pets during services.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Payment</h2>
                <p>
                    All payments for services must be made through the app. Fees are non-refundable except as outlined in our Refund Policy.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
                <p>
                    Masterpet is not liable for any injury, loss, or damage to pets or property during services, except in cases of gross negligence by our staff.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
                <p>
                    For questions about these Terms and Conditions, email us at {COMPANY_INFO.email}.
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;