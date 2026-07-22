"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    CheckCircle2, ChevronDown, Clock, DollarSign, Calendar,
    Plane, ArrowLeft, MapPin, MessageSquare, Phone, AlertTriangle,
    Users, Sun, Utensils, Landmark, FileText
} from "lucide-react";
import { BangladeshCountryData } from "@/data/countries-bangladesh";

interface BangladeshCountryPageTemplateProps {
    country: BangladeshCountryData;
    backLink?: string;
}

const categoryColors: Record<string, string> = {
    "Job Holder": "from-blue-500 to-blue-700",
    "Businessman": "from-purple-500 to-purple-700",
    "Govt Job Holder": "from-green-600 to-green-800",
    "Doctor": "from-red-500 to-red-700",
    "Advocate / Lawyer": "from-amber-500 to-amber-700",
    "Student": "from-sky-500 to-sky-700",
    "Non-student Child": "from-pink-400 to-pink-600",
    "Housewife": "from-rose-500 to-rose-700",
    "Retired Person": "from-teal-500 to-teal-700",
    "Unemployed": "from-gray-500 to-gray-700",
};

const categoryEmojis: Record<string, string> = {
    "Job Holder": "💼",
    "Businessman": "🏢",
    "Govt Job Holder": "🏛️",
    "Doctor": "⚕️",
    "Advocate / Lawyer": "⚖️",
    "Student": "🎓",
    "Non-student Child": "👶",
    "Housewife": "🏠",
    "Retired Person": "🌟",
    "Unemployed": "📋",
};

interface DestinationCardProps {
    dest: { name: string; highlights: string; image?: string };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ dest }) => {
    const [imgError, setImgError] = React.useState(false);
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full"
        >
            <div className="h-48 bg-gray-200 relative overflow-hidden flex-shrink-0">
                {dest.image && !imgError ? (
                    <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        onError={() => setImgError(true)}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-hover to-primary flex items-center justify-center">
                        <MapPin size={48} className="text-white/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-xl">{dest.name}</h3>
                </div>
            </div>
            <div className="p-5 flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed">{dest.highlights}</p>
            </div>
        </motion.div>
    );
};

const BangladeshCountryPageTemplate: React.FC<BangladeshCountryPageTemplateProps> = ({ country, backLink }) => {
    const [openCategory, setOpenCategory] = useState<number | null>(0);
    const [imgError, setImgError] = React.useState(false);

    const whatsappNumbers = country.whatsappNumbers || [];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {!imgError ? (
                        <Image
                            src={country.coverImage}
                            alt={country.name}
                            fill
                            priority
                            onError={() => setImgError(true)}
                            className="object-cover"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/85" />
                </div>
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-10" />
                <div className="absolute bottom-10 left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl z-10" />

                <div className="container mx-auto px-6 relative z-20 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-semibold tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                            {country.visaType || "E-Visa"} • Applying from Bangladesh
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-lg tracking-tight">
                            {country.name}
                        </h1>
                        <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-200 mb-6">
                            {country.tagline}
                        </p>
                        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100 leading-relaxed">
                            {country.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Facts Bar */}
            <section className="container mx-auto px-6 -mt-16 relative z-30 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {country.quickFacts.map((fact, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-primary mb-3 flex justify-center">{fact.icon}</div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{fact.label}</p>
                            <p className="text-base font-bold text-gray-900 leading-tight">{fact.value}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Document Categories */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <FileText size={24} />
                                </span>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Required Documents for {country.visaType || "E-Visa"}</h2>
                                    <p className="text-sm text-gray-500 mt-0.5">Select your applicant category to view requirements</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {country.documentCategories.map((cat, index) => {
                                    const isOpen = openCategory === index;
                                    const gradient = categoryColors[cat.category] || "from-secondary to-primary";
                                    const emoji = categoryEmojis[cat.category] || "📄";

                                    return (
                                        <motion.div
                                            key={cat.category}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className={`rounded-2xl overflow-hidden border ${isOpen ? "border-primary/30 shadow-lg" : "border-gray-200 shadow-sm"} transition-all duration-300`}
                                        >
                                            <button
                                                onClick={() => setOpenCategory(isOpen ? null : index)}
                                                className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 ${
                                                    isOpen
                                                        ? `bg-gradient-to-r ${gradient} text-white`
                                                        : "bg-white text-gray-900 hover:bg-gray-50"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl">{emoji}</span>
                                                    <span className="text-lg font-bold">{cat.category}</span>
                                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isOpen ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                                                        {cat.documents.length} docs
                                                    </span>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown size={20} className={isOpen ? "text-white" : "text-gray-400"} />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="bg-white p-6 border-t border-gray-100">
                                                            <ul className="space-y-3">
                                                                {cat.documents.map((doc, di) => (
                                                                    <li key={di} className="flex items-start gap-3">
                                                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                                                        <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Application Process */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-14"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                {country.process.map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full relative z-10 hover:shadow-md transition-shadow duration-300">
                                            <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg mb-4 shadow-lg shadow-primary/30">
                                                {step.step}
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                                            <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                                        </div>
                                        {index < country.process.length - 1 && (
                                            <div className="hidden md:block absolute top-11 left-1/2 w-full h-0.5 bg-gray-200 -z-0" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        {/* Important Notes */}
                        {country.importantNotes && country.importantNotes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
                            >
                                <h3 className="text-base font-bold text-amber-800 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={18} className="text-amber-600" />
                                    Important Notes
                                </h3>
                                <ul className="space-y-2">
                                    {country.importantNotes.map((note, i) => (
                                        <li key={i} className="text-sm text-amber-700 leading-relaxed flex items-start gap-2">
                                            <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Why Choose Thailand */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-secondary text-white p-7 rounded-2xl shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
                            <h3 className="text-lg font-bold mb-5 relative z-10">Why Visit {country.name}?</h3>
                            <div className="space-y-5 relative z-10">
                                {country.whyChoose.map((reason, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="text-primary shrink-0">{reason.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">{reason.title}</h4>
                                            <p className="text-xs text-gray-300 leading-relaxed">{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* WhatsApp CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-7 rounded-2xl shadow-lg border border-green-100"
                        >
                            <div className="text-center mb-5">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                                    <MessageSquare size={26} className="text-green-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Contact Our Visa Team</h3>
                                <p className="text-xs text-gray-500">
                                    Pay first, then contact us with your documents for processing
                                </p>
                            </div>
                            <div className="space-y-3">
                                {whatsappNumbers.map((num, i) => {
                                    const displayNum = num.replace(/(\+880)(\d{2})(\d{4})(\d{4})/, "$1 $2 $3 $4");
                                    return (
                                        <a
                                            key={i}
                                            href={`https://wa.me/${num.replace("+", "")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition-all shadow hover:shadow-lg group"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 shrink-0"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            <span className="text-sm">{displayNum}</span>
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3 px-5 rounded-xl transition-all shadow hover:shadow-lg text-sm"
                                >
                                    <Phone size={16} />
                                    Visit Our Office
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-Visit Destinations in {country.name}</h2>
                        <p className="text-gray-500">Top places to explore on your journey</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {country.destinations.map((dest, i) => (
                            <DestinationCard key={i} dest={dest} />
                        ))}
                    </div>
                </motion.section>

                {/* Final CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-gradient-to-r from-secondary to-secondary-hover rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
                    <div className="relative z-10">
                        <span className="inline-block bg-primary/20 border border-primary/30 text-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                            Ready to Apply?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                            Start Your {country.name} {country.visaType || "E-Visa"}<br className="hidden md:block" /> Application Today
                        </h2>
                        <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                            Our expert visa team is ready to guide you through every step. Contact us on WhatsApp after making payment to begin processing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {whatsappNumbers.slice(0, 2).map((num, i) => {
                                const displayNum = num.replace(/(\+880)(\d{2})(\d{4})(\d{4})/, "$1 $2 $3 $4");
                                return (
                                    <a
                                        key={i}
                                        href={`https://wa.me/${num.replace("+", "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp {displayNum}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Back Link */}
                <div className="mt-12 text-center">
                    <Link
                        href={backLink || "/services/tourist-visa/from-bangladesh"}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to All Destinations
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BangladeshCountryPageTemplate;
