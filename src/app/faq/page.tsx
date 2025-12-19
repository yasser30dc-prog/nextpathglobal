import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions - NextPath Global",
    description: "Find answers to common questions about NextPath Global's services including study abroad, professional visa, travel, and customer support.",
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-16 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-5xl mb-4">🧭</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions (FAQ)
                    </h1>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about our services
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

                    {/* About NextPath Global */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">📍</span>
                            About NextPath Global Sdn Bhd
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q1. What is NextPath Global Sdn Bhd?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    NextPath Global Sdn Bhd is a Malaysia-based consultancy and travel service company specializing in student admission support, visa processing, and professional migration programs.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q2. Where is your office located?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our head office is located in Kuala Lumpur, Malaysia. We also have partner representatives in Bangladesh and other countries for local support.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* Study Abroad Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">🎓</span>
                            Study Abroad Services
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q3. Which countries do you provide student admission support for?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We currently assist students to study in Malaysia, the United Kingdom, Australia, Finland, Spain, France, Ireland & selected European universities.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q4. What are the benefits of applying through NextPath Global?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We ensure a transparent process — direct dealings with universities, no hidden fees, and complete guidance from admission to arrival.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q5. Do you charge any service fees for student admission?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    In most cases, our admission services are free of charge when applying through partner universities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* Work & Professional Visa */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">💼</span>
                            Work & Professional Visa
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q6. What types of professional visas do you process?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We help with Malaysia's Category 2 Professional Visa, employment passes, and selected Europe work permits under verified companies.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q7. How long does a professional visa process take?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Processing time varies by category, but typically takes 3–4 months once all required documents are submitted.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q8. Can NextPath help me find a verified employer or sponsor?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes, we collaborate with licensed companies to ensure safe and legitimate employment opportunities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* Travel & Visit Visa */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">✈️</span>
                            Travel & Visit Visa
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q9. Which visit visas can you help apply for?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We assist with Malaysia, Thailand, Singapore, Japan, China, Turkey, Cambodia, Laos, Brunei, Hongkong, Sri Lanka, Pakistan, Nepal, Turkey, Egypt, Kenya, Qatar, The USA, Canada and Schengen visit visas — depending on your travel plan and eligibility.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q10. Do you arrange air tickets and accommodation?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes, we can help book affordable flights and arrange accommodation through our travel partners.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* Documents & Requirements */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">🧾</span>
                            Documents & Requirements
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q11. What documents do I need for a student visa or professional visa?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You will typically need:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>A valid passport</li>
                                    <li>Academic certificates or job offer letter</li>
                                    <li>Recent passport-size photos</li>
                                    <li>Bank statement (3–6 months)</li>
                                    <li>Health screening (if applicable)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q12. Can you verify my documents before submission?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Absolutely. Our team reviews every application to ensure all documents meet embassy or immigration requirements.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* Customer Support */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">💬</span>
                            Customer Support
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q13. How can I contact NextPath Global?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You can reach us via:
                                </p>
                                <div className="space-y-2 ml-4">
                                    <div className="flex items-start">
                                        <span className="mr-2">📧</span>
                                        <div>
                                            <span className="font-semibold">Email:</span>{" "}
                                            <a href="mailto:info@nextpathglobal.com" className="text-primary hover:underline">
                                                info@nextpathglobal.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-2">📞</span>
                                        <div>
                                            <span className="font-semibold">Phone:</span>{" "}
                                            <a href="tel:+60111669524" className="text-primary hover:underline">
                                                +60 11 1669 5249
                                            </a>
                                            ,{" "}
                                            <a href="tel:+60174627457" className="text-primary hover:underline">
                                                +60 17 462 7457
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-2">📍</span>
                                        <div>
                                            <span className="font-semibold">Office Hours:</span> Sunday – Thursday, 10 AM to 6 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q14. Do you provide online consultation?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes! We offer free online consultation through WhatsApp, Zoom, or Google Meet for your convenience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200" />

                    {/* General */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="text-primary">🌍</span>
                            General
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q15. Is NextPath Global a licensed company?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes, NextPath Global Sdn Bhd is a legally registered company in Malaysia under SSM (Companies Commission of Malaysia).
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Q16. How can I stay updated about new programs and offers?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Follow our official Facebook page or visit our website regularly for the latest updates on scholarships, job openings, and visa promotions.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                        <p className="mb-6 text-white/90">
                            Don't hesitate to reach out. Our team is here to help!
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
