"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, ShieldCheck, Plane, FileText, Home, Crown } from "lucide-react";
import Link from "next/link";

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
        title: "Flight Booking",
        description: "Find and book the best flight deals worldwide with our trusted partners.",
        icon: <Plane size={40} className="text-primary" />,
        link: "/flight-booking"
    },
    {
        title: "Document Attestation",
        description: "Legalization and attestation of documents for international use.",
        icon: <FileText size={40} className="text-primary" />,
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our <span className="text-primary">Services</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We offer a wide range of immigration and visa consulting services to meet your specific needs.
                    </p>
                </motion.div>

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
