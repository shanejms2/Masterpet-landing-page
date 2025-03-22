import React from "react";

const CancellationPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Cancellation Policy</h1>
            <p className="text-gray-600 mb-4">Last Updated: March 22, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Cancellation by Users</h2>
                <p>
                    You may cancel a booked service through the Masterpet app. The following rules apply:
                </p>
                <ul className="list-disc pl-6">
                    <li>Cancellations made more than 24 hours before the scheduled service are fully refundable.</li>
                    <li>Cancellations made less than 24 hours before the scheduled service incur a 50% fee.</li>
                    <li>No-shows or cancellations within 2 hours of the service are non-refundable.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Cancellation by Masterpet</h2>
                <p>
                    We reserve the right to cancel a service due to unforeseen circumstances (e.g., caregiver unavailability or emergencies). In such cases, you will receive a full refund or the option to reschedule.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. How to Cancel</h2>
                <p>
                    To cancel a booking, go to the &quot;Bookings&quot; section of the Masterpet app and select &quot;Cancel.&quot; For assistance, contact support@masterpet.co.in.
                </p>
            </section>
        </div>
    );
};

export default CancellationPolicy;