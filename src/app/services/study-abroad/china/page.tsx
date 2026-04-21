"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, Clock, BookOpen, Calendar, Globe, MapPin, Award, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { chinaPartners, chinaDiplomaPartners, chinaMbbsPartners, ChinaPartnerInstitution } from "@/data/china-partners";

type TabType = 'bachelor' | 'diploma' | 'mbbs';

export default function StudyChinaPage() {
    const [activeTab, setActiveTab] = useState<TabType>('diploma');
    const [selectedUni, setSelectedUni] = useState<ChinaPartnerInstitution | null>(null);

    const getActiveData = () => {
        switch (activeTab) {
            case 'diploma': return chinaDiplomaPartners;
            case 'mbbs': return chinaMbbsPartners;
            case 'bachelor':
            default: return chinaPartners;
        }
    };

    // Close modal on escape key
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedUni(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (selectedUni) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedUni]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="pt-40 pb-24 text-white relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/china-study-hero.png')" }}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Study in China
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md mb-10">
                            Immerse yourself in world-leading innovation and ancient heritage at our distinguished partnered universities across China.
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

            {/* Main Content Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-base">Explore Our Network</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                            Partner Universities & Colleges
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        {[
                            { id: 'diploma', label: 'Diploma Programs', icon: <Building2 size={18} /> },
                            { id: 'bachelor', label: 'Bachelor Programs', icon: <BookOpen size={18} /> },
                            { id: 'mbbs', label: 'MBBS Programs', icon: <Globe size={18} /> },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary shadow-sm'
                                }`}
                            >
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid Layout */}
                    <motion.div 
                        key={activeTab} // Forces re-animation when tab changes
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {getActiveData().map((uni) => (
                            <div key={uni.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col h-full relative group">
                                <div className="flex items-start gap-4 mb-5">
                                    {uni.domain ? (
                                        <div className="bg-white p-2 rounded-xl border border-gray-100 w-14 h-14 flex items-center justify-center shrink-0 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                                            <img 
                                                src={`https://logo.clearbit.com/${uni.domain}`} 
                                                alt={`${uni.shortName} Logo`}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="hidden absolute inset-0 bg-primary/5 text-primary flex items-center justify-center">
                                                <Building2 size={24} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-primary/10 p-2 rounded-xl text-primary w-14 h-14 flex items-center justify-center shrink-0">
                                            <Building2 size={24} />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 leading-snug line-clamp-2" title={uni.name}>
                                            {uni.name}
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-1.5 text-gray-500 text-sm">
                                            <MapPin size={14} className="text-secondary shrink-0" />
                                            <span className="truncate">{uni.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6 flex-1 text-sm bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 text-green-600 p-1.5 rounded-lg shrink-0">
                                            <Award size={16} />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Scholarships</span>
                                            <span className="font-medium text-gray-800">Available for Int'l Students</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg shrink-0">
                                            <Calendar size={16} />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Application Deadline</span>
                                            <span className="font-medium text-gray-800 text-xs sm:text-sm">Varies (Fall & Spring Intakes)</span>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setSelectedUni(uni)}
                                    className="w-full py-3 px-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group/btn"
                                >
                                    Learn More 
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedUni && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedUni(null)}
                        ></div>

                        {/* Modal Content */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 p-4 sm:p-6 flex items-start justify-between z-20">
                                <div className="flex items-center gap-4">
                                    {selectedUni.domain ? (
                                        <div className="bg-white p-2 border border-gray-100 rounded-xl w-16 h-16 flex items-center justify-center shrink-0">
                                            <img 
                                                src={`https://logo.clearbit.com/${selectedUni.domain}`} 
                                                alt={`${selectedUni.shortName} Logo`}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="hidden text-primary">
                                                <Building2 size={32} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-primary/10 text-primary p-3 rounded-xl w-16 h-16 flex items-center justify-center shrink-0">
                                            <Building2 size={32} />
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pr-8">{selectedUni.name}</h2>
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 text-gray-500 text-sm">
                                            <span className="flex items-center gap-1"><MapPin size={14} className="text-secondary"/> {selectedUni.location}</span>
                                            {selectedUni.qsRanking && selectedUni.qsRanking !== "Not Globally Ranked" && (
                                                <span className="flex items-center gap-1 font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-md">
                                                    <Globe size={14}/> Ranking: {selectedUni.qsRanking}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setSelectedUni(null)}
                                    className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-full transition-colors absolute right-4 top-4 sm:right-6 sm:top-6"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-4 sm:p-6 space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Building2 className="text-primary" size={20}/> Overview
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                                        {selectedUni.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <Clock className="text-primary" size={20}/> History & Legacy
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {selectedUni.history}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <Calendar className="text-primary" size={20}/> Available Intakes
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedUni.intakes.map(intake => (
                                                <span key={intake} className="bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1.5 rounded-lg text-sm font-semibold">
                                                    {intake} Intake
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <BookOpen className="text-primary" size={20}/> Key Faculties & Majors
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedUni.programs.map((prog, i) => (
                                            <span key={i} className="bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                {prog}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
                                <button 
                                    onClick={() => setSelectedUni(null)}
                                    className="px-6 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                                <Link 
                                    href="/contact"
                                    className="px-6 py-2.5 bg-secondary text-white rounded-xl font-bold hover:bg-gray-900 transition-colors shadow-md flex items-center gap-2"
                                >
                                    Apply Now <ArrowRight size={18}/>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
