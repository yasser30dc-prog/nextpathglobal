"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap, Building2, Clock, BookOpen,
    Calendar, Globe, MapPin, Banknote, Star, Landmark
} from "lucide-react";
import Link from "next/link";
import { ukUniversityPartners } from "@/data/uk-partners";

export default function StudyUKPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* ── Hero Section ── */}
            <section
                className="pt-40 pb-28 text-white relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/uk-study-hero.webp')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/75 via-[#0d1b2a]/60 to-[#0d1b2a]/80" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f0d485] text-sm font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            🇬🇧 Study Abroad Programme
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                            Study in the{" "}
                            <span className="text-[#c9a84c]">United Kingdom</span>
                        </h1>
                        <p className="text-xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Gain a world-class education at some of the most prestigious universities on the planet.
                            From Oxford's dreaming spires to London's global stage — your future starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/student-assessment"
                                className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                            >
                                <GraduationCap size={22} /> Start Free Assessment
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all inline-flex items-center gap-3"
                            >
                                Get Admission Help
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="bg-[#0d1b2a] py-8 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                        {[
                            { icon: <Building2 size={22} className="text-[#c9a84c]" />, value: `${ukUniversityPartners.length}+`, label: "Partner Universities" },
                            { icon: <Star size={22} className="text-[#c9a84c]" />, value: "Top 10", label: "Global Rankings" },
                            { icon: <Globe size={22} className="text-[#c9a84c]" />, value: "600,000+", label: "Int'l Students / Year" },
                            { icon: <GraduationCap size={22} className="text-[#c9a84c]" />, value: "Russell Group", label: "Elite Universities" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="flex flex-col items-center gap-2"
                            >
                                {stat.icon}
                                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                                <span className="text-white/60 text-sm">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Partner Universities ── */}
            <section id="universities" className="py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our UK Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
                            Partner Universities &amp; Colleges
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base">
                            Sorted by global QS ranking. Explore history, programs, tuition fees, and campus life at each of our prestigious UK university partners.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {ukUniversityPartners.map((uni, idx) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.4) }}
                                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-[#0d1b2a] to-[#1a3355] px-6 md:px-8 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* University Logo */}
                                        <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                                            <img
                                                src={`https://logo.clearbit.com/${uni.domain}`}
                                                alt={`${uni.shortName} logo`}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                    if (fallback) fallback.classList.remove("hidden");
                                                }}
                                            />
                                            <div className="hidden text-[#0d1b2a]">
                                                <Landmark size={22} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{uni.name}</h3>
                                            <span className="text-[#c9a84c] text-sm font-medium flex items-center gap-1">
                                                <MapPin size={13} /> {uni.location} · Est. {uni.established}
                                            </span>
                                        </div>
                                    </div>
                                    {uni.qsRanking && (
                                        <div className="hidden md:flex flex-col items-end shrink-0">
                                            <span className="text-white/50 text-xs uppercase tracking-wider">QS World Rank</span>
                                            <span className="text-[#c9a84c] text-2xl font-extrabold">
                                                #{uni.qsRanking}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Rank Badge */}
                                {uni.qsRanking && (
                                    <div className="md:hidden flex items-center gap-1 px-6 pt-4">
                                        <Globe size={14} className="text-primary" />
                                        <span className="text-sm font-bold text-primary">QS Rank #{uni.qsRanking}</span>
                                    </div>
                                )}

                                {/* Card Body */}
                                <div className="p-6 md:p-8 flex flex-col gap-6">
                                    {/* Description */}
                                    <p className="text-gray-700 text-base leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        {uni.description}
                                    </p>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2 border-t border-gray-100">

                                        {/* History */}
                                        <div className="flex items-start gap-3">
                                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-0.5 shrink-0">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-900 mb-1">History &amp; Founding</span>
                                                <span className="text-gray-600 leading-snug">{uni.history}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            {/* Intakes */}
                                            <div className="flex items-start gap-3">
                                                <div className="bg-orange-50 p-2 rounded-lg text-orange-500 mt-0.5 shrink-0">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-gray-900 mb-1">Intakes</span>
                                                    <span className="text-gray-600">{uni.intakes.join(", ")}</span>
                                                </div>
                                            </div>

                                            {/* Tuition */}
                                            <div className="flex items-start gap-3">
                                                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 mt-0.5 shrink-0">
                                                    <Banknote className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-gray-900 mb-1">Tuition Fees</span>
                                                    <span className="text-gray-600">{uni.tuitionRange}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Programs */}
                                        <div className="flex items-start gap-3 md:col-span-2">
                                            <div className="bg-purple-50 p-2 rounded-lg text-purple-600 mt-0.5 shrink-0">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-900 mb-2">Key Programs</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {uni.programs.map((prog) => (
                                                        <span
                                                            key={prog}
                                                            className="bg-purple-50 border border-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
                                                        >
                                                            {prog}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Campus Life */}
                                        <div className="flex items-start gap-3 md:col-span-2">
                                            <div className="bg-rose-50 p-2 rounded-lg text-rose-500 mt-0.5 shrink-0">
                                                <Star className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-900 mb-1">Campus Life</span>
                                                <span className="text-gray-600 leading-snug">{uni.campusLife}</span>
                                            </div>
                                        </div>

                                        {/* Nearby Attractions */}
                                        <div className="flex items-start gap-3 md:col-span-2">
                                            <div className="bg-amber-50 p-2 rounded-lg text-amber-600 mt-0.5 shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-900 mb-2">Nearby Attractions</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {uni.attractions.map((place) => (
                                                        <span
                                                            key={place}
                                                            className="bg-amber-50 border border-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full"
                                                        >
                                                            📍 {place}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer CTA */}
                                <div className="bg-gray-50 border-t border-gray-100 px-6 md:px-8 py-4 flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">
                                        Interested in {uni.shortName}?
                                    </span>
                                    <Link
                                        href="/contact"
                                        className="bg-[#0d1b2a] hover:bg-[#1a3355] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-sm inline-flex items-center gap-2"
                                    >
                                        <GraduationCap size={16} /> Apply Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="bg-[#0d1b2a] py-20 px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Study in the <span className="text-[#c9a84c]">UK?</span>
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
                        Get a free, personalized assessment of your academic credentials and discover the best program options for you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/student-assessment"
                            className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-bold py-4 px-12 rounded-full text-lg transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                        >
                            <GraduationCap size={22} /> Start Free Assessment
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-12 rounded-full text-lg transition-all inline-flex items-center gap-3"
                        >
                            Contact Advisors
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
