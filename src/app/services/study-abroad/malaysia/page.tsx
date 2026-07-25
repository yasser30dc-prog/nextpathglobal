"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { partnerInstitutions } from "@/data/malaysia-partners";
import UniversityProfileCard from "@/components/UniversityProfileCard";

export default function StudyMalaysiaPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState<string>("all");

    const filteredInstitutions = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return partnerInstitutions.filter((uni) => {
            const matchesQuery =
                !query ||
                uni.name.toLowerCase().includes(query) ||
                (uni.englishName && uni.englishName.toLowerCase().includes(query)) ||
                uni.shortName.toLowerCase().includes(query) ||
                uni.programs.some((p) => p.toLowerCase().includes(query)) ||
                (uni.location && uni.location.toLowerCase().includes(query));

            const matchesType =
                filterType === "all" ||
                uni.type === filterType ||
                (filterType === "international" && uni.type === "international");

            return matchesQuery && matchesType;
        });
    }, [searchQuery, filterType]);

    return (
        <div className="min-h-screen bg-[#eef1f7] pb-24">
            {/* Hero Section */}
            <section
                className="pt-40 pb-24 text-white relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/malaysia-study-hero.webp')" }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f6c74a] text-sm font-semibold mb-6 backdrop-blur-md">
                            <Sparkles size={16} /> Study in Malaysia
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                            Study in Malaysia
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md mb-10 leading-relaxed font-light">
                            Discover world-class education at our partnered universities and colleges across Malaysia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/student-assessment"
                                className="bg-[#e8a90c] hover:bg-[#d49a0a] text-[#0d1e42] font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-3"
                            >
                                <GraduationCap size={24} /> Start Free Assessment
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-10 rounded-full text-lg transition-all inline-flex items-center gap-3 backdrop-blur-sm"
                            >
                                Get Admission Help
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* University Profile Cards Listing */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-[#20408a] font-bold tracking-widest uppercase text-xs">
                            OUR PARTNERS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-[#132a5c]">
                            Partner Universities &amp; Colleges
                        </h2>
                        <p className="text-[#586179] max-w-2xl mx-auto text-base">
                            Carefully curated and sorted by global ranking. Explore the rich heritage, specialized intakes, and vibrant programs of these premier institutions.
                        </p>
                    </div>

                    {/* Search & Filter Controls */}
                    <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#e7eaf2] shadow-sm mb-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="relative w-full md:w-80">
                            <Search
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#586179]"
                                size={18}
                            />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search university, city, or program..."
                                className="w-full pl-10 pr-4 py-2.5 bg-[#f3f6fc] border border-[#e7eaf2] rounded-xl text-sm text-[#1f2a44] placeholder-[#586179] focus:outline-none focus:border-[#20408a] transition-colors"
                            />
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-2 flex-wrap justify-center w-full md:w-auto">
                            {[
                                { key: "all", label: "All Institutions" },
                                { key: "public", label: "Public" },
                                { key: "private", label: "Private" },
                                { key: "international", label: "International" },
                                { key: "college", label: "Colleges" },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setFilterType(tab.key)}
                                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                        filterType === tab.key
                                            ? "bg-[#132a5c] text-white shadow-md"
                                            : "bg-[#f3f6fc] text-[#586179] hover:bg-[#eaf0fb] border border-[#e7eaf2]"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Count Badge */}
                    <div className="text-center text-xs font-medium text-[#586179] mb-8">
                        Showing <strong className="text-[#132a5c]">{filteredInstitutions.length}</strong> partner institutions
                    </div>

                    {/* Cards Stack */}
                    <div className="space-y-8">
                        {filteredInstitutions.map((uni, idx) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: Math.min(idx * 0.04, 0.4) }}
                            >
                                <UniversityProfileCard uni={uni} />
                            </motion.div>
                        ))}

                        {filteredInstitutions.length === 0 && (
                            <div className="text-center py-16 bg-white rounded-2xl border border-[#e7eaf2] p-8 max-w-2xl mx-auto">
                                <p className="text-lg font-semibold text-[#132a5c] mb-2">No institutions found</p>
                                <p className="text-sm text-[#586179]">
                                    Try adjusting your search query or switching filters to view all partner universities.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="bg-[#132a5c] py-20 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#132a5c] via-[#20408a] to-[#0d1e42] opacity-90" />
                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
                            Ready to Study in Malaysia?
                        </h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg font-light leading-relaxed">
                            Get a free, personalized assessment of your academic credentials and discover the best program options for you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/student-assessment"
                                className="bg-[#e8a90c] hover:bg-[#d49a0a] text-[#0d1e42] font-bold py-4 px-12 rounded-full text-lg transition-all shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-3"
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
                </div>
            </section>
        </div>
    );
}
