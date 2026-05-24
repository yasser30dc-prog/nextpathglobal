"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, ShieldCheck, Plane, FileText, Home, Crown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const allServices = [
    {
        title: "Student Visa",
        description: "Comprehensive support for students aspiring to study abroad. From university selection to visa application.",
        icon: <GraduationCap size={40} className="text-primary" />,
    },
    {
        title: "MM2H (Malaysia My Second Home)",
        description: "Live, retire, or invest in Malaysia with a 10-year renewable visa. Enjoy tax-free car import, property ownership, and world-class healthcare.",
        icon: <Home size={40} className="text-primary" />,
    },
    {
        title: "PVIP (Premium Visa Programme)",
        description: "The ultimate 20-year residency for global investors. 100% foreign ownership, no minimum stay, and work/business rights.",
        icon: <Crown size={40} className="text-primary" />,
    },
    {
        title: "Business Visa",
        description: "Facilitating global business travel and expansion with expert visa consulting.",
        icon: <Briefcase size={40} className="text-primary" />,
    },
    {
        title: "Immigration",
        description: "Permanent residency and immigration pathways for Canada, Australia, UK, and more.",
        icon: <Globe size={40} className="text-primary" />,
    },
    {
        title: "Employment Pass",
        description: "Professional work permits for skilled workers seeking employment in Malaysia.",
        icon: <ShieldCheck size={40} className="text-primary" />,
        link: "/services/employment-pass"
    },
    {
        title: "Study Abroad",
        description: "Your gateway to world-class education in Malaysia. We assist with university applications, student visas, and accommodation.",
        icon: <GraduationCap size={40} />,
        link: "/services/study-abroad"
    },
    {
        title: "MM2H Program",
        description: "Malaysia My Second Home (MM2H) program consultation and application assistance for long-term residency.",
        icon: <Home size={40} />,
        link: "/services/mm2h"
    },
    {
        title: "Tourist Visa",
        description: "Hassle-free tourist visa processing for your dream vacations.",
        icon: <Plane size={40} className="text-primary" />,
    },
    {
        title: "Document Attestation",
        description: "Legalization and attestation of documents for international use.",
        icon: <FileText size={40} className="text-primary" />,
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Cover Section */}
            <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
                {/* Cover Image */}
                <Image
                    src="/assets/services-hero.webp"
                    alt="NextPath Global Immigration & Visa Services"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark Overlay with fade to white at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/70 via-[#0d1b2a]/50 to-white" />

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-3">
                            Expert Guidance, Global Reach
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 drop-shadow-lg">
                            Our <span className="text-[#c9a84c]">Services</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                            We offer a wide range of immigration and visa consulting services to meet your specific needs.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 pb-20 -mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                            <Link
                                href="/contact"
                                className="text-primary font-medium hover:text-white transition-colors"
                            >
                                Get Consultation &rarr;
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
