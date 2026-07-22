"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Globe, Compass, Shield, Users, CheckCircle2 } from "lucide-react";

export default function TouristVisaLandingPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/tourist-visa-hero.webp"
                        alt="Tourist Visa Services"
                        fill
                        priority
                        className="object-cover opacity-70"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/70 to-secondary/90"></div>
                </div>
                
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 z-0"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Global Travel Solutions
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Tourist Visa Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Professional visa documentation and processing support. Let us handle the complexity of your travel authorization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Selection Section */}
            <section className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="bg-white px-6 py-2.5 rounded-full shadow-md text-sm font-semibold text-gray-700 border border-gray-100">
                            Select your starting location to view requirements
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Option 1: Malaysia */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="p-8 md:p-10 flex-grow">
                                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                                    <Compass size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">From Malaysia</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Are you a Malaysian citizen or a resident living/working in Malaysia? Get tourist visa requirements and documentation guidance to 26+ countries worldwide.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Full list of 26+ destinations</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Step-by-step document checklists</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Processing fees and validity details</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-8 pb-8 md:px-10 md:pb-10 pt-0">
                                <Link
                                    href="/services/tourist-visa/from-malaysia"
                                    className="w-full bg-secondary hover:bg-secondary-hover text-white text-center py-4 rounded-xl font-bold transition-colors shadow-md flex items-center justify-center gap-2 group"
                                >
                                    Proceed to Destinations 
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Option 2: Bangladesh */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative"
                        >
                            {/* Launching soon badge */}
                            <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20 uppercase tracking-wider">
                                Launching Soon
                            </div>

                            <div className="p-8 md:p-10 flex-grow">
                                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                                    <Plane size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">From Bangladesh</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Are you a Bangladeshi citizen preparing to travel abroad? View custom tourist visa support and consultation services for global destinations.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Tailored lists for Bangladesh passports</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Expert verification & financial vetting</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        <span>Custom consultation & inquiries</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-8 pb-8 md:px-10 md:pb-10 pt-0">
                                <Link
                                    href="/services/tourist-visa/from-bangladesh"
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group"
                                >
                                    View Services
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-base">Our Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 leading-tight">
                        Seamless Global Visa Consultations
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center p-6">
                        <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <Shield size={24} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Verified Success</h4>
                        <p className="text-sm text-gray-600">
                            We cross-examine every document against updated immigration requirements for maximum approval rates.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <Globe size={24} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Global Network</h4>
                        <p className="text-sm text-gray-600">
                            Close coordination with embassies and consulates ensures timely processing.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <Users size={24} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Dedicated Consultants</h4>
                        <p className="text-sm text-gray-600">
                            One-on-one professional guidance from application form to final passport collection.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
