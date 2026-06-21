"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import InstitutionCard from "./InstitutionCard";
import { Institution, InstitutionType } from "@/data/institutions";

interface InstitutionGridProps {
    institutions: Institution[];
    title: string;
    subtitle: string;
    baseUrl: string;
    filters?: { label: string; value: InstitutionType | 'all' }[];
}

export default function InstitutionGrid({
    institutions,
    title,
    subtitle,
    baseUrl,
    filters
}: InstitutionGridProps) {
    const [activeFilter, setActiveFilter] = useState<InstitutionType | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter institutions
    const filteredInstitutions = institutions.filter(inst => {
        const matchesFilter = activeFilter === 'all' || inst.type === activeFilter;
        const matchesSearch = searchQuery === '' ||
            inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inst.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inst.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-8 bg-white border-b sticky top-16 z-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                aria-label="Search institutions"
                                placeholder="Search institutions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>

                        {/* Filters */}
                        {filters && (
                            <div className="flex flex-wrap gap-2 justify-center">
                                {filters.map((filter) => (
                                    <button
                                        type="button"
                                        key={filter.value}
                                        onClick={() => setActiveFilter(filter.value)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.value
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="py-4 container mx-auto px-6">
                <p className="text-gray-600">
                    Showing <span className="font-semibold">{filteredInstitutions.length}</span> institutions
                </p>
            </section>

            {/* Institution Grid */}
            <section className="pb-20 container mx-auto px-6">
                {filteredInstitutions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredInstitutions.map((institution, index) => (
                            <InstitutionCard
                                key={institution.slug}
                                institution={institution}
                                index={index}
                                baseUrl={baseUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No institutions found matching your criteria.</p>
                        <button
                            type="button"
                            onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
