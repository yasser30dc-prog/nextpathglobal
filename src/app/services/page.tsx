"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap, Briefcase, Globe, ShieldCheck, Plane, 
    FileText, Home, Crown, Building2, Ticket, Hotel, 
    BadgeCheck, FileSignature, ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}

interface ServiceCategory {
    categoryName: string;
    description: string;
    coverImage: string;
    services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
    {
        categoryName: "Global Education & Residency",
        description: "Explore world-class academic institutions and long-term golden residency programs worldwide.",
        coverImage: "/assets/cover-education-residency.png",
        services: [
            {
                title: "Student Consultancy",
                description: "Comprehensive university admission guidance and visa support for top destinations including Spain, Malaysia, and China. We handle your entire application process.",
                icon: <GraduationCap size={32} className="text-[#c9a84c]" />,
                link: "/services/study-abroad"
            },
            {
                title: "MM2H (Malaysia My Second Home)",
                description: "Complete advisory and application coordination for Malaysia's prestigious long-term residency program. Live, retire, or invest in Malaysia with our expert immigration guidance.",
                icon: <Home size={32} className="text-[#c9a84c]" />,
                link: "/services/mm2h"
            },
            {
                title: "PVIP (Premium Visa Program)",
                description: "Residency consultation for Malaysia's Premium Visa Program. Secure up to 20 years of elite residency for global investors, entrepreneurs, and high-net-worth individuals.",
                icon: <Crown size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            }
        ]
    },
    {
        categoryName: "Corporate Mobility & Work Permits",
        description: "Professional work permit acquisition and compliant business registration for global professionals and founders.",
        coverImage: "/assets/cover-corporate-mobility.png",
        services: [
            {
                title: "Employment Pass",
                description: "End-to-end work visa sponsorship coordination (EP Category I, II, & III) for expatriates, executives, and skilled corporate talents looking to establish their careers in Malaysia.",
                icon: <ShieldCheck size={32} className="text-[#c9a84c]" />,
                link: "/services/employment-pass"
            },
            {
                title: "European Work Permit Process",
                description: "Fully compliant work permit filing, employer matching guidance, and relocation coordination for major European nations looking for qualified international skilled workforce.",
                icon: <Globe size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            },
            {
                title: "Business Set Up",
                description: "Corporate incorporation services in Malaysia. We assist with company registration (SSM), local corporate banking setups, trade licensing, and foreign ownership compliance.",
                icon: <Building2 size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            }
        ]
    },
    {
        categoryName: "Travel & Hospitality",
        description: "Fast-track holiday visas, worldwide hotel bookings, and airline ticketing for seamless journeys.",
        coverImage: "/assets/cover-travel-hospitality.png",
        services: [
            {
                title: "Tourist Visa Process",
                description: "Hassle-free, premium tourist visa documentation and processing for popular destinations worldwide, ensuring maximum approval rates and swift turnaround times.",
                icon: <Plane size={32} className="text-[#c9a84c]" />,
                link: "/services/tourist-visa"
            },
            {
                title: "Air Ticket",
                description: "Competitive worldwide airfares, customized flight routes, and flexible packages with leading commercial airlines for both individual and corporate travels.",
                icon: <Ticket size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            },
            {
                title: "Hotel Booking (Worldwide)",
                description: "Exclusive corporate rates and pre-screened room reservations at top-rated hotels, boutique resorts, and luxury stays across the globe, tailored to your itinerary.",
                icon: <Hotel size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            }
        ]
    },
    {
        categoryName: "Legal & Attestation Services",
        description: "Official legalizations, document attestations, and governmental certifications for international use.",
        coverImage: "/assets/cover-legal-attestation.png",
        services: [
            {
                title: "Good Conduct Certificate",
                description: "Complete assistance in obtaining police clearance certificates, background checks, and official good conduct verifications from global authorities.",
                icon: <BadgeCheck size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            },
            {
                title: "Document Attestation",
                description: "Notarization, legalisation, and Ministry of Foreign Affairs (MOFA) attestation for academic degrees, birth/marriage certificates, and commercial contracts.",
                icon: <FileSignature size={32} className="text-[#c9a84c]" />,
                link: "/contact"
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            
            {/* ── Hero Cover Section ── */}
            <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
                <Image
                    src="/assets/services-hero.webp"
                    alt="NextPath Global Immigration & Visa Services"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Modern Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/75 via-[#0d1b2a]/55 to-gray-50" />

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f0d485] text-sm font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            Expert Guidance, Global Reach
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
                            Our <span className="text-[#c9a84c]">Services</span>
                        </h1>
                        <p className="text-white/85 max-w-2xl mx-auto text-lg leading-relaxed">
                            Comprehensive immigration, visa, residency, and relocation consulting designed to fulfill your global aspirations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Services Layout ── */}
            <div className="container mx-auto px-6 -mt-16 relative z-25 max-w-5xl">
                
                {serviceCategories.map((category, catIdx) => (
                    <div key={catIdx} className="mb-16">

                        {/* Category Cover Image Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6 shadow-md"
                        >
                            <Image
                                src={category.coverImage}
                                alt={category.categoryName}
                                fill
                                className="object-cover object-center"
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/80 via-[#0d1b2a]/40 to-transparent" />
                            {/* Category heading overlaid on image */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="border-l-4 border-[#c9a84c] pl-4">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow">
                                        {category.categoryName}
                                    </h2>
                                    <p className="text-white/80 text-sm mt-1">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Grid list of services */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Icon Container */}
                                        <div className="mb-6 bg-[#0d1b2a]/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-gray-50 shadow-sm">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    {/* Action Button */}
                                    <Link
                                        href={service.link || "/contact"}
                                        className="text-[#c9a84c] font-semibold text-sm hover:text-[#b8943d] transition-colors inline-flex items-center gap-2 group"
                                    >
                                        Enquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Bottom Call to Action ── */}
            <section className="container mx-auto px-6 mt-12 max-w-5xl">
                <div className="bg-[#0d1b2a] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-[#1a3355] to-[#0d1b2a] opacity-90" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Start Your <span className="text-[#c9a84c]">Global Journey?</span>
                        </h2>
                        <p className="text-white/70 mb-8 text-base leading-relaxed">
                            Schedule a free advisory session with our certified experts to map out your immigration, work, or study pathways compliantly.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-bold py-3.5 px-10 rounded-full transition-all inline-flex items-center gap-2 hover:-translate-y-0.5 shadow-md"
                        >
                            <GraduationCap size={18} /> Schedule Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
