"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";
import Link from "next/link";

const universities = [
    "YES INTERNATIONAL COLLEGE",
    "XIAMEN UNIVERSITY MALAYSIA (XMUM)",
    "UNIVERSITY UTARA MALAYSIA (UUM)",
    "UNIVERSITY TUN ABDUL RAZAK (UNIRAZAK)",
    "UNIVERSITY TENAGA NATIONAL (UNITEN)",
    "UNIVERSITY TECHNOLOGY MALAYSIA (UTM)",
    "UNIVERSITY SULTAN ZAINAL ABIDIN (UNISZA)",
    "UNIVERSITY SELANGOR (UNISEL)",
    "UNIVERSITY OF CYBERJAYA",
    "UNIVERSITY MALAYSIA-WALES",
    "UNIVERSITY MALAYSIA OF COMPUTER SCIENCE & ENGINEERING (UNIMY)",
    "UNIVERSITY MALAYA (UM)",
    "UNIVERSITY KUALA LUMPUR (UNIKL)",
    "TAYLOR'S UNIVERSITY",
    "SUNWAY UNIVERSITY",
    "SEGI UNIVERSITY",
    "NILAI UNIVERSITY (NU)",
    "MULTIMEDIA UNIVERSITY (MMU)",
    "MONT ROYALE INTERNATIONAL COLLEGE",
    "LONDON SCHOOL OF BUSINESS AND FINANCE MALAYSIA (LSBF)",
    "LINCOLN UNIVERSITY COLLEGE",
    "INTI INTERNATIONAL UNIVERSITY",
    "INTERNATIONAL ISLAMIC UNIVERSITY (IIUM)",
    "CITY UNIVERSITY",
    "BRIGHTON INTERNATIONAL SCHOOL",
    "ASIA PACIFIC UNIVERSITY (APU)",
    "UNIVERSITY TUN HUSSEIN ONN MALAYSIA (UTHM)",
];

export default function StudyMalaysiaPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-primary pt-40 pb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Study in Malaysia
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md mb-10">
                            Discover world-class education at our partnered universities and colleges across Malaysia.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-secondary text-white hover:bg-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                        >
                            <GraduationCap size={24} /> Get Admission Help
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* University List Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-base">Our Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                            Partner Universities & Colleges
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {universities.map((uni, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow hover:border-primary/30 group cursor-default"
                            >
                                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="font-semibold text-gray-700 text-sm leading-snug">
                                    {uni}
                               </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
