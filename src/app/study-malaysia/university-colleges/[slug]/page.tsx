"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin, Calendar, Globe, Star, ArrowLeft, CheckCircle2,
    GraduationCap, Clock, BookOpen, Award, ExternalLink
} from "lucide-react";
import {
    getInstitutionBySlug,
    institutionColors,
    institutionTypeLabels
} from "@/data/institutions";

export default function UniversityCollegeDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const institution = getInstitutionBySlug(slug);

    if (!institution) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Institution Not Found</h1>
                    <Link href="/study-malaysia/university-colleges" className="text-primary hover:underline">
                        ← Back to University Colleges
                    </Link>
                </div>
            </div>
        );
    }

    const colors = institutionColors[institution.type];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Large Short Name Watermark */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <span className="text-white/10 text-[20rem] font-bold tracking-wider select-none">
                        {institution.shortName}
                    </span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back Button */}
                    <Link
                        href="/study-malaysia/university-colleges"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to University Colleges</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        {/* Type Badge */}
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                            {institutionTypeLabels[institution.type]}
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{institution.name}</h1>
                        <p className="text-2xl font-light mb-6 text-white/80">({institution.shortName})</p>

                        <div className="flex flex-wrap gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} />
                                <span>{institution.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={20} />
                                <span>Established {institution.established}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                                <Calendar size={24} />
                            </div>
                            <p className="text-gray-500 text-sm">Established</p>
                            <p className="font-bold text-lg">{institution.established}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                                <MapPin size={24} />
                            </div>
                            <p className="text-gray-500 text-sm">Location</p>
                            <p className="font-bold text-lg">{institution.location}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                                <Award size={24} />
                            </div>
                            <p className="text-gray-500 text-sm">Type</p>
                            <p className="font-bold text-lg">{institutionTypeLabels[institution.type]}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                                <GraduationCap size={24} />
                            </div>
                            <p className="text-gray-500 text-sm">Programs</p>
                            <p className="font-bold text-lg">{institution.programs.length}+ Fields</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="text-primary" size={24} />
                                About {institution.shortName}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {institution.description}
                            </p>
                        </motion.div>

                        {/* History */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="text-primary" size={24} />
                                History
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {institution.history}
                            </p>
                        </motion.div>

                        {/* Programs Offered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <GraduationCap className="text-primary" size={24} />
                                Programs Offered
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {institution.programs.map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-3 text-center text-gray-700 font-medium"
                                    >
                                        {program}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Star className="text-primary" size={24} />
                                Key Highlights
                            </h2>
                            <ul className="space-y-3">
                                {institution.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-600">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Intakes */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Clock className="text-primary" size={20} />
                                Available Intakes
                            </h3>
                            <div className="space-y-2">
                                {institution.intakes.map((intake, index) => (
                                    <div
                                        key={index}
                                        className="bg-primary/5 text-primary font-medium rounded-lg p-3 text-center"
                                    >
                                        {intake}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Website Link */}
                        {institution.website && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <h3 className="text-lg font-bold mb-4">Official Website</h3>
                                <a
                                    href={institution.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary hover:underline"
                                >
                                    <ExternalLink size={16} />
                                    <span>Visit Website</span>
                                </a>
                            </motion.div>
                        )}

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white"
                        >
                            <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                            <p className="text-white/80 mb-4 text-sm">
                                Let NextPath Global guide you through the admission process for {institution.shortName}.
                            </p>
                            <Link
                                href="/student-assessment"
                                className="block bg-white text-primary text-center font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Get Free Consultation
                            </Link>
                            <a
                                href="https://wa.me/601116695249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-green-500 text-white text-center font-bold py-3 rounded-lg hover:bg-green-600 transition-colors mt-3"
                            >
                                WhatsApp Us
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
