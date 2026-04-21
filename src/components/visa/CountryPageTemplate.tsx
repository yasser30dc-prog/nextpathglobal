"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, DollarSign } from "lucide-react";
import { CountryData } from "../../data/countries";

interface CountryPageTemplateProps {
    country: CountryData;
}

const CountryPageTemplate: React.FC<CountryPageTemplateProps> = ({ country }) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={country.coverImage}
                        alt={country.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/80"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">{country.name}</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200">
                            {country.tagline}
                        </p>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-100 leading-relaxed">
                            {country.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20">
                {/* Quick Facts Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
                >
                    {country.quickFacts.map((fact, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center"
                        >
                            <div className="text-primary mb-3 flex justify-center">{fact.icon}</div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                {fact.label}
                            </h3>
                            <p className="text-lg font-bold text-gray-900">{fact.value}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Requirements & Process */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Requirements Section */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <span className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <CheckCircle2 size={24} />
                                </span>
                                Required Documents
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {country.requirements.map((req, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
                                        <div className="text-primary mt-1">{req.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{req.document}</h4>
                                            <p className="text-sm text-gray-600">{req.requirement}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Application Process */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-8 text-gray-900">Application Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {country.process.map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full relative z-10">
                                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-primary/30">
                                                {step.step}
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                        {/* Connector Line (Desktop only) */}
                                        {index < country.process.length - 1 && (
                                            <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gray-200 -z-0"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column: Why Choose & CTA */}
                    <div className="space-y-8">
                        {/* Why Choose Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-secondary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold mb-6">Why Choose {country.name}?</h3>
                            <div className="space-y-6">
                                {country.whyChoose.map((reason, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="text-primary shrink-0">{reason.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{reason.title}</h4>
                                            <p className="text-sm text-gray-300">{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-primary/20 text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Explore?</h3>
                            <p className="text-gray-600 mb-6">
                                Let NextPath Global handle your {country.name} visa application with expertise.
                            </p>
                            <div className="space-y-3">
                                <Link
                                    href="/contact"
                                    className="block w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    Start Application
                                </Link>
                                <Link
                                    href="https://wa.me/601116695249" // Replace with actual number
                                    target="_blank"
                                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    WhatsApp Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Destinations Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-Visit Destinations</h2>
                        <p className="text-gray-600">Top places to add to your itinerary</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {country.destinations.map((dest, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
                            >
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {dest.image ? (
                                        <Image
                                            src={dest.image}
                                            alt={dest.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-500"></div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-white font-bold text-xl">{dest.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">{dest.highlights}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Destination Thailand Visa (DTV) Section */}
                {country.slug === "thailand" && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-20 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-10 max-w-3xl mx-auto">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                                    Special Visa Program
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Destination Thailand Visa (DTV)
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Planning to live and work remotely from Thailand? The Destination Thailand Visa (DTV) is designed for digital nomads, remote workers, freelancers, and global talents ready to expand their horizons. Here’s everything you need to prepare:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Checklist */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FileText className="text-primary" size={24} />
                                        Document Checklist & Requirements
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                            <span className="text-gray-700"><strong>Passport/Travel Document</strong> (Full pages)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                            <span className="text-gray-700"><strong>Recent photograph</strong> (taken within last 6 months)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                            <span className="text-gray-700">
                                                <strong>Financial proof of minimum 500,000 THB</strong><br/>
                                                <span className="text-sm text-gray-500">(≈ 16,000 USD / approx. RM 65,000+ depending on conversion rate)</span><br/>
                                                – Bank statements (last 3 months) or Sponsor letter
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                            <span className="text-gray-700">
                                                <strong>Employment contract / Employment certificate</strong><br/>
                                                OR Professional portfolio <span className="text-sm text-gray-500">(digital nomad / remote worker / freelancer / foreign talent)</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Cost */}
                                <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-center">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                        <DollarSign className="text-primary" size={24} />
                                        Visa Processing Cost
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                            <span className="text-gray-300">Total Cost</span>
                                            <span className="text-2xl font-bold text-white">RM 3,500</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                            <div className="bg-white/10 p-4 rounded-xl">
                                                <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Step 1</p>
                                                <p className="font-semibold text-lg text-white mb-1">RM 2,500</p>
                                                <p className="text-xs text-gray-400">With document submission</p>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-xl relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                                                <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Step 2</p>
                                                <p className="font-semibold text-lg text-white mb-1">RM 1,000</p>
                                                <p className="text-xs text-gray-400">After approval</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <Link
                                            href="/contact"
                                            className="block w-full bg-primary hover:bg-primary-hover text-white text-center font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                                        >
                                            Apply for DTV Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                <div className="mt-12 text-center">
                    <Link href="/services/tourist-visa" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors font-medium">
                        <ArrowLeft size={20} className="mr-2" /> Back to All Countries
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountryPageTemplate;
