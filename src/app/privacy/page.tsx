import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Next Path Global",
    description: "Privacy Policy for Next Path Global Sdn. Bhd. - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600">
                        Effective Date: 12th December 2025
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Welcome to Nextpath Global Sdn. Bhd. ("we", "our", or "us").
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We respect your privacy and are committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services, including student consultancy and travel arrangements.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By using our website or services, you agree to the collection and use of your information in accordance with this policy.
                        </p>
                    </section>

                    {/* 2. Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. Information We Collect
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect the following types of personal information from you:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    a. Personal Identification Information
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>Full name</li>
                                    <li>Date of birth</li>
                                    <li>Passport or identification number</li>
                                    <li>Nationality</li>
                                    <li>Contact details (email address, phone number, home address)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    b. Academic & Professional Information
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>Educational background</li>
                                    <li>Academic transcripts or certificates</li>
                                    <li>University or course preferences</li>
                                    <li>Employment history (if applicable)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    c. Travel Information
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>Flight details</li>
                                    <li>Visa documents</li>
                                    <li>Accommodation preferences</li>
                                    <li>Travel history</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    d. Technical Data
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Device information</li>
                                    <li>Website usage data through cookies and analytics tools</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>To provide student consultancy services (university selection, admission processing, visa assistance)</li>
                            <li>To arrange travel services (flight booking, hotel reservations, insurance, etc.)</li>
                            <li>To communicate with you regarding updates, offers, or documentation</li>
                            <li>To improve our website and service quality</li>
                            <li>To comply with legal, regulatory, and immigration requirements</li>
                        </ul>
                    </section>

                    {/* 4. How We Protect Your Data */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. How We Protect Your Data
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            While we strive to use commercially acceptable means to protect your data, please note that no electronic storage or transmission over the internet is 100% secure.
                        </p>
                    </section>

                    {/* 5. Sharing of Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Sharing of Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may share your personal data only with trusted third parties such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                            <li>Partner universities and educational institutions</li>
                            <li>Embassy and visa application centers</li>
                            <li>Airlines and travel service providers</li>
                            <li>Government and regulatory bodies (when required by law)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed font-semibold">
                            We do not sell, rent, or trade your personal information to any other parties.
                        </p>
                    </section>

                    {/* 6. Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. Data Retention
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your personal data will be retained only for as long as necessary to fulfill the purposes it was collected for, or as required by applicable laws.
                        </p>
                    </section>

                    {/* 7. Your Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Your Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                            <li>Access and request a copy of your personal data</li>
                            <li>Correct any inaccurate or outdated information</li>
                            <li>Withdraw consent (subject to legal or contractual limitations)</li>
                            <li>Request deletion of your personal data (where applicable)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            To exercise these rights, please contact us at{" "}
                            <a href="mailto:info@nextpathglobal.my" className="text-primary hover:underline font-medium">
                                info@nextpathglobal.my
                            </a>.
                        </p>
                    </section>

                    {/* 8. Cookies Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Cookies Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Our website may use cookies to enhance user experience and improve functionality.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            You can choose to disable cookies through your browser settings, but certain parts of the website may not function properly.
                        </p>
                    </section>

                    {/* 9. Links to Other Websites */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Links to Other Websites
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Our website may contain links to external sites.
                            We are not responsible for the privacy practices or content of such third-party websites.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We encourage you to read their privacy policies before providing any personal information.
                        </p>
                    </section>

                    {/* 10. Changes to This Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            10. Changes to This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted on this page with an updated "Effective Date".
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Your continued use of our services after any modifications indicates your acceptance of those changes.
                        </p>
                    </section>

                    {/* 11. Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            11. Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions, concerns, or feedback about this Privacy Policy, please contact us at:
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
