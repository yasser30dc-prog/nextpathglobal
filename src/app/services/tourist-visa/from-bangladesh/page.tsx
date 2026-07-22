"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Globe, Clock, Shield, Sparkles, MessageSquare } from "lucide-react";

export default function TouristVisaFromBangladeshPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/tourist-visa-hero.webp"
                        alt="Tourist Visa Services from Bangladesh"
                        fill
                        priority
                        className="object-cover opacity-60"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95"></div>
                </div>
                
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 z-0"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block flex items-center justify-center gap-2">
                            <Sparkles size={16} /> Expanding Horizons
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Tourist Visa Services
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                            Applying from Bangladesh
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Customized, premium global visa processing for clients residing in Bangladesh. Launching soon with full features.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Launching Soon Info Cards */}
            <section className="container mx-auto px-6 -mt-12 relative z-20 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
                            <Plane size={36} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Launching Soon</h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            We are currently compiling comprehensive visa requirements, processing fees, and entry conditions specifically for travelers applying from Bangladesh. Our team of certified consultants is setting up dedicated routes to ensure the highest success rates.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="text-primary mb-4">
                                    <Clock size={28} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Fast Processing</h4>
                                <p className="text-sm text-gray-600">Optimized documentation review workflows tailored to Bangladesh passport requirements.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="text-primary mb-4">
                                    <Shield size={28} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">High Success Rate</h4>
                                <p className="text-sm text-gray-600">Expert vetting and verification of financial and professional records before submission.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="text-primary mb-4">
                                    <Globe size={28} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">25+ Destinations</h4>
                                <p className="text-sm text-gray-600">Comprehensive visa support for Schengen countries, UK, US, Canada, Southeast Asia, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA/Contact Section */}
            <section className="container mx-auto px-6 py-12 text-center">
                <div className="max-w-2xl mx-auto bg-secondary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Visa Guidance Now?</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Although our catalog is launching soon, our team is already processing custom visa consultations for clients in Bangladesh. Get in touch with our experts to start your process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                <MessageSquare size={20} /> Contact Our Office <ArrowRight size={16} />
                            </Link>
                            <Link href="https://wa.me/601116695249" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                Chat on WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
