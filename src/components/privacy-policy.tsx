import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last Updated: March 22, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                <p>
                    Welcome to Masterpet! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our pet care app.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6">
                    <li>Personal Information: Name, email address, phone number, and payment details.</li>
                    <li>Pet Information: Pet names, breeds, ages, and care preferences.</li>
                    <li>Usage Data: Information about how you interact with the app, such as booking history and preferences.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="list-disc pl-6">
                    <li>Provide and improve our pet care services.</li>
                    <li>Process bookings and payments.</li>
                    <li>Send you updates, promotions, and notifications.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
                <p>
                    We do not sell your personal information. We may share it with trusted service providers (e.g., payment processors or pet caregivers) only as necessary to deliver our services.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
                <p>
                    You can access, update, or delete your personal information by contacting us at support@masterpet.co.in
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
                <p>
                    For questions about this Privacy Policy, please email us at support@masterpet.co.in
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;