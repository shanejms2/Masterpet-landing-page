import React from "react";
import { COMPANY_INFO } from "@/lib/constants";

const RefundPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
            <p className="text-gray-600 mb-4">Last Updated: March 22, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Eligibility for Refunds</h2>
                <p>Refunds are available under the following conditions:</p>
                <ul className="list-disc pl-6">
                    <li>Service cancelled more than 24 hours in advance (full refund).</li>
                    <li>Service cancelled by Masterpet due to unavailability or other issues (full refund).</li>
                    <li>Service not provided as described (partial or full refund, at our discretion).</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Non-Refundable Cases</h2>
                <p>Refunds will not be issued for:</p>
                <ul className="list-disc pl-6">
                    <li>No-shows or cancellations within 2 hours of the scheduled service.</li>
                    <li>Services completed as agreed upon.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Refund Process</h2>
                <p>
                    To request a refund, contact us at {COMPANY_INFO.email} within 7 days of the service date. Refunds will be processed to your original payment method within 5-10 business days.
                </p>
            </section>
        </div>
    );
};

export default RefundPolicy;