"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

interface FAQItem {
    question: string;
    answer: string | JSX.Element;
}

interface FAQSection {
    title: string;
    icon: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "About NextPath Global Sdn Bhd",
        icon: "📍",
        items: [
            {
                question: "Q1. What is NextPath Global Sdn Bhd?",
                answer: "NextPath Global Sdn Bhd is a Malaysia-based consultancy and travel service company specializing in student admission support, visa processing, and professional migration programs."
            },
            {
                question: "Q2. Where is your office located?",
                answer: "Our head office is located in Kuala Lumpur, Malaysia. We also have partner representatives in Bangladesh and other countries for local support."
            }
        ]
    },
    {
        title: "Study Abroad Services",
        icon: "🎓",
        items: [
            {
                question: "Q3. Which countries do you provide student admission support for?",
                answer: "We currently assist students to study in Malaysia, the United Kingdom, Australia, Finland, Spain, France, Ireland & selected European universities."
            },
            {
                question: "Q4. What are the benefits of applying through NextPath Global?",
                answer: "We ensure a transparent process — direct dealings with universities, no hidden fees, and complete guidance from admission to arrival."
            },
            {
                question: "Q5. Do you charge any service fees for student admission?",
                answer: "In most cases, our admission services are free of charge when applying through partner universities."
            }
        ]
    },
    {
        title: "Work & Professional Visa",
        icon: "💼",
        items: [
            {
                question: "Q6. What types of professional visas do you process?",
                answer: "We help with Malaysia's Category 2 Professional Visa, employment passes, and selected Europe work permits under verified companies."
            },
            {
                question: "Q7. How long does a professional visa process take?",
                answer: "Processing time varies by category, but typically takes 3–4 months once all required documents are submitted."
            },
            {
                question: "Q8. Can NextPath help me find a verified employer or sponsor?",
                answer: "Yes, we collaborate with licensed companies to ensure safe and legitimate employment opportunities."
            }
        ]
    },
    {
        title: "Travel & Visit Visa",
        icon: "✈️",
        items: [
            {
                question: "Q9. Which visit visas can you help apply for?",
                answer: "We assist with Malaysia, Thailand, Singapore, Japan, China, Turkey, Cambodia, Laos, Brunei, Hongkong, Sri Lanka, Pakistan, Nepal, Turkey, Egypt, Kenya, Qatar, The USA, Canada and Schengen visit visas — depending on your travel plan and eligibility."
            },
            {
                question: "Q10. Do you arrange air tickets and accommodation?",
                answer: "Yes, we can help book affordable flights and arrange accommodation through our travel partners."
            }
        ]
    },
    {
        title: "Documents & Requirements",
        icon: "🧾",
        items: [
            {
                question: "Q11. What documents do I need for a student visa or professional visa?",
                answer: (
                    <div>
                        <p className="mb-3">You will typically need:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>A valid passport</li>
                            <li>Academic certificates or job offer letter</li>
                            <li>Recent passport-size photos</li>
                            <li>Bank statement (3–6 months)</li>
                            <li>Health screening (if applicable)</li>
                        </ul>
                    </div>
                )
            },
            {
                question: "Q12. Can you verify my documents before submission?",
                answer: "Absolutely. Our team reviews every application to ensure all documents meet embassy or immigration requirements."
            }
        ]
    },
    {
        title: "Customer Support",
        icon: "💬",
        items: [
            {
                question: "Q13. How can I contact NextPath Global?",
                answer: (
                    <div>
                        <p className="mb-3">You can reach us via:</p>
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
                )
            },
            {
                question: "Q14. Do you provide online consultation?",
                answer: "Yes! We offer free online consultation through WhatsApp, Zoom, or Google Meet for your convenience."
            }
        ]
    },
    {
        title: "General",
        icon: "🌍",
        items: [
            {
                question: "Q15. Is NextPath Global a licensed company?",
                answer: "Yes, NextPath Global Sdn Bhd is a legally registered company in Malaysia under SSM (Companies Commission of Malaysia)."
            },
            {
                question: "Q16. How can I stay updated about new programs and offers?",
                answer: "Follow our official Facebook page or visit our website regularly for the latest updates on scholarships, job openings, and visa promotions."
            }
        ]
    }
];

function FAQAccordionItem({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string | JSX.Element;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
                <ChevronDown
                    size={20}
                    className={`text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                    {typeof answer === 'string' ? <p>{answer}</p> : answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (sectionIndex: number, itemIndex: number) => {
        const key = `${sectionIndex}-${itemIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

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
                    {faqData.map((section, sectionIndex) => (
                        <section key={sectionIndex}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-primary">{section.icon}</span>
                                {section.title}
                            </h2>
                            <div className="space-y-4">
                                {section.items.map((item, itemIndex) => (
                                    <FAQAccordionItem
                                        key={itemIndex}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={openItems[`${sectionIndex}-${itemIndex}`] || false}
                                        onToggle={() => toggleItem(sectionIndex, itemIndex)}
                                    />
                                ))}
                            </div>
                            {sectionIndex < faqData.length - 1 && <hr className="border-gray-200 mt-10" />}
                        </section>
                    ))}
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
