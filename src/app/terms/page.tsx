import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions - Next Path Global",
    description: "Terms & Conditions for NextPath Global Sdn. Bhd. - Learn about our service terms, policies, and user agreements.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Terms &amp; Conditions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Effective Date: 12th December 2025
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Welcome to NextPath Global Sdn. Bhd. ("we", "our", "us").
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            By accessing or using our website, you agree to be bound by the following Terms and Conditions.
                            If you do not agree with any part of these terms, please do not use our website or services.
                        </p>
                    </section>

                    {/* 1. Company Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            1. Company Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            NextPath Global Sdn. Bhd. provides professional student consultancy and travel agency services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our consultancy assists students with university admissions, visa guidance, and academic planning, while our travel division provides flight bookings, accommodation, and related travel arrangements.
                        </p>
                    </section>

                    {/* 2. Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            By using our website or engaging with our services, you confirm that you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Have read, understood, and agreed to these Terms &amp; Conditions.</li>
                            <li>Are of legal age (18 years or older) or have parental/guardian consent to use our services.</li>
                        </ul>
                    </section>

                    {/* 3. Scope of Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. Scope of Services
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Our services include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                            <li>University admission consultation and application assistance</li>
                            <li>Visa guidance and document processing</li>
                            <li>Flight ticketing, hotel booking, and travel insurance services</li>
                            <li>General travel and tour arrangements</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Please note that NextPath Global Sdn. Bhd. acts as an intermediary between clients and third-party providers such as universities, embassies, airlines, and accommodation partners.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We do not control the operations, policies, or decisions of these third parties.
                        </p>
                    </section>

                    {/* 4. Service Fees and Payments */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. Service Fees and Payments
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>All service fees are clearly stated and must be paid as per the agreed terms before services are rendered.</li>
                            <li>Payments made are non-refundable, except under specific conditions mentioned in our refund policy or as required by law.</li>
                            <li>We reserve the right to change service fees at any time, with notice provided through our website or directly to clients.</li>
                        </ul>
                    </section>

                    {/* 5. Client Responsibilities */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Client Responsibilities
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Clients are responsible for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                            <li>Providing accurate, complete, and truthful information.</li>
                            <li>Submitting all required documents within the given timeframe.</li>
                            <li>Ensuring passport and visa validity for travel.</li>
                            <li>Reviewing all bookings, applications, and confirmations carefully before approval.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            We will not be liable for losses resulting from incorrect, false, or incomplete information provided by the client.
                        </p>
                    </section>

                    {/* 6. Third-Party Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. Third-Party Services
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Our website and services may involve third-party institutions, airlines, or travel service providers.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            While we work only with trusted partners, NextPath Global Sdn. Bhd. is not responsible for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                            <li>Delays, cancellations, or policy changes made by third parties.</li>
                            <li>Decisions made by embassies, universities, or immigration authorities.</li>
                            <li>Airline schedule changes, baggage policies, or flight delays.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Clients are encouraged to read and understand the respective third-party terms and conditions before finalizing any service.
                        </p>
                    </section>

                    {/* 7. Cancellations & Refunds */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Cancellations &amp; Refunds
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Refund eligibility depends on the type of service and stage of processing.</li>
                            <li>Once applications (university, visa, or flight bookings) are submitted, refunds may not be possible.</li>
                            <li>For travel bookings, airline and hotel refund rules will apply according to their individual policies.</li>
                            <li>Processing fees or administrative charges may be deducted from any approved refund.</li>
                        </ul>
                    </section>

                    {/* 8. Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            While we strive to provide professional, accurate, and reliable services, Nextpath Global Sdn. Bhd. shall not be liable for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                            <li>Any loss, damage, or expense resulting from third-party actions or force majeure events.</li>
                            <li>Delays caused by government procedures, embassy processing times, or travel restrictions.</li>
                            <li>Errors or omissions beyond our reasonable control.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Our total liability shall not exceed the amount paid by the client for the specific service in question.
                        </p>
                    </section>

                    {/* 9. Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Intellectual Property
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            All content on this website — including text, images, graphics, logos, and design — is the property of NextPath Global Sdn. Bhd. and protected by applicable copyright laws.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            No part of this website may be copied, distributed, or used for commercial purposes without prior written consent.
                        </p>
                    </section>

                    {/* 10. Privacy & Data Protection */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            10. Privacy &amp; Data Protection
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We take your privacy seriously.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Personal information collected through our website or services is handled in accordance with our Privacy Policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By using our services, you consent to our data collection and processing practices.
                        </p>
                    </section>

                    {/* 11. Website Usage */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            11. Website Usage
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Users agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                            <li>Engage in any illegal, fraudulent, or harmful activity.</li>
                            <li>Attempt to hack, disrupt, or misuse the website or its data.</li>
                            <li>Post false, misleading, or defamatory content.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to suspend access or take legal action against any misuse of our platform.
                        </p>
                    </section>

                    {/* 12. Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            12. Changes to Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may update these Terms &amp; Conditions periodically.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            All revisions will be posted on this page with an updated "Effective Date."
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Your continued use of our website and services after such updates constitutes your acceptance of the new terms.
                        </p>
                    </section>

                    {/* 13. Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            13. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            These Terms &amp; Conditions are governed by and interpreted under the laws of Malaysia.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Any disputes shall be resolved in the appropriate courts of Kuala Lumpur, Malaysia.
                        </p>
                    </section>

                    {/* 14. Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            14. Contact Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For any questions or concerns regarding these Terms &amp; Conditions, please contact us at:
                        </p>
                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                                <span className="mr-2">📧</span>
                                <div>
                                    <span className="font-semibold">Email:</span>{" "}
                                    <a href="mailto:info@nextpathglobal.my" className="text-primary hover:underline">
                                        info@nextpathglobal.my
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-2">🏢</span>
                                <div>
                                    <span className="font-semibold">Address:</span>{" "}
                                    Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-2">📞</span>
                                <div>
                                    <span className="font-semibold">Phone:</span>{" "}
                                    <a href="tel:+60111669524" className="text-primary hover:underline">
                                        +60 11 1669 5249
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Last Updated */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Last updated: 12th December 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
