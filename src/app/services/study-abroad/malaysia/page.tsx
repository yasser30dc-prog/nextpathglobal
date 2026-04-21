"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Clock, BookOpen, Calendar, Globe } from "lucide-react";
import Link from "next/link";
import { partnerInstitutions } from "@/data/malaysia-partners";

export default function StudyMalaysiaPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="pt-40 pb-24 text-white relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/malaysia-study-hero.png')" }}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
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
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-base">Our Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                            Partner Universities & Colleges
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Carefully curated and sorted by global ranking. Explore the rich heritage, specialized intakes, and vibrant programs of these premier institutions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {partnerInstitutions.map((uni, idx) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-6 md:p-8 flex flex-col gap-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-4">
                                            {uni.domain ? (
                                                <div className="bg-white p-2 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 w-16 h-16 flex items-center justify-center shrink-0 overflow-hidden relative group-hover:scale-105 transition-transform">
                                                    <img 
                                                        src={`https://logo.clearbit.com/${uni.domain}`} 
                                                        alt={`${uni.shortName} Logo`}
                                                        className="max-w-full max-h-full object-contain"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                    <div className="hidden absolute inset-0 bg-primary/10 text-primary flex items-center justify-center">
                                                        <Building2 size={28} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-primary/10 p-3 rounded-xl text-primary w-16 h-16 flex items-center justify-center shrink-0 relative group-hover:scale-105 transition-transform">
                                                    <Building2 size={28} />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                    {uni.name} <span className="text-gray-500 text-lg font-medium">({uni.shortName})</span>
                                                </h3>
                                            </div>
                                        </div>
                                        {uni.qsRanking && uni.qsRanking !== "Not Globally Ranked" && (
                                            <div className="hidden md:flex flex-col items-end">
                                                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Ranking</span>
                                                <span className="text-lg font-bold text-secondary flex items-center gap-1">
                                                    <Globe size={16} /> {typeof uni.qsRanking === 'number' ? `#${uni.qsRanking}` : uni.qsRanking}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Ranking Badge */}
                                    {uni.qsRanking && uni.qsRanking !== "Not Globally Ranked" && (
                                        <div className="md:hidden inline-block bg-gray-50 px-3 py-1 rounded-full w-max border border-gray-200">
                                            <span className="text-sm font-bold text-secondary flex items-center gap-1">
                                                <Globe size={14} /> Global Rank: {typeof uni.qsRanking === 'number' ? `#${uni.qsRanking}` : uni.qsRanking}
                                            </span>
                                        </div>
                                    )}

                                    <p className="text-gray-700 text-base mb-2 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-gray-50">
                                        {uni.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-sm pt-4 border-t border-gray-100">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-0.5">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-900 mb-1">History & Founding</span>
                                                <span className="text-gray-600 leading-snug block">{uni.history}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-orange-50 p-2 rounded-lg text-orange-600 mt-0.5">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-gray-900 mb-1">Intakes</span>
                                                    <span className="text-gray-600">{uni.intakes.join(", ")}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="bg-purple-50 p-2 rounded-lg text-purple-600 mt-0.5">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-gray-900 mb-1">Key Faculties & Programs</span>
                                                    <span className="text-gray-600">{uni.programs.join(" • ")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
