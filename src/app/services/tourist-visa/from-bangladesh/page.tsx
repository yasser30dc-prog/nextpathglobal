"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Clock, Shield, Plane, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";
import { bangladeshCountries } from "@/data/countries-bangladesh";

const whatsappNumbers = [
    { display: "+880 14 1023 2265", link: "8801410232265" },
    { display: "+880 14 1023 7493", link: "8801410237493" },
    { display: "+880 14 1023 7495", link: "8801410237495" },
];

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
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
                </div>

                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 z-0" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 z-0" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2">
                            <Sparkles size={16} /> Expanding Horizons
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Tourist Visa Services
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                            Applying from Bangladesh
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Customized, premium global visa processing for clients residing in Bangladesh. Expert guidance, fast processing, high success rates.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {whatsappNumbers.map((num, i) => (
                                <a
                                    key={i}
                                    href={`https://wa.me/${num.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {num.display}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Strip */}
            <section className="container mx-auto px-6 -mt-10 relative z-20 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: <Clock size={26} />, title: "Fast Processing", desc: "5-10 working days for most destinations" },
                            { icon: <Shield size={26} />, title: "High Success Rate", desc: "Expert vetting ensures maximum approvals" },
                            { icon: <Globe size={26} />, title: "Expert Guidance", desc: "Dedicated consultants for BD passport holders" },
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex items-start gap-4"
                            >
                                <div className="text-primary mt-0.5 shrink-0">{feat.icon}</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
                                    <p className="text-sm text-gray-600">{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Country Cards Grid */}
            <section className="container mx-auto px-6 mb-20">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Available Destinations</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Choose Your Destination</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Select a destination to view full E-Visa requirements tailored for Bangladesh passport holders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {bangladeshCountries.map((country, i) => (
                        <motion.div
                            key={country.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            {/* Country Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={country.coverImage}
                                    alt={country.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-5">
                                    <h3 className="text-white text-2xl font-black">{country.name}</h3>
                                    <p className="text-gray-300 text-sm">{country.tagline}</p>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                        {country.visaType || "E-Visa"}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                {/* Quick Facts */}
                                <div className="grid grid-cols-2 gap-3 mb-5">
                                    {country.quickFacts.slice(0, 2).map((fact, fi) => (
                                        <div key={fi} className="bg-gray-50 rounded-xl p-3 text-center">
                                            <div className="text-primary flex justify-center mb-1">{fact.icon}</div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">{fact.label}</p>
                                            <p className="text-sm font-bold text-gray-800 leading-tight mt-0.5">{fact.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Category Count */}
                                <div className="flex items-center gap-2 mb-5">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    <span className="text-sm text-gray-600">
                                        <strong>{country.documentCategories.length}</strong> applicant categories covered
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href={`/services/tourist-visa/from-bangladesh/${country.slug}`}
                                        className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 group transition-all shadow hover:shadow-lg"
                                    >
                                        View Requirements
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* More Coming Soon Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: bangladeshCountries.length * 0.1 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-dashed border-gray-300 flex flex-col items-center justify-center p-10 text-center min-h-[340px]"
                    >
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-5 animate-pulse">
                            <Plane size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">More Destinations</h3>
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                            We are adding more destinations for Bangladesh passport holders. Contact us for custom inquiries.
                        </p>
                        <a
                            href={`https://wa.me/8801410232265`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-xl transition-all text-sm"
                        >
                            <MessageSquare size={16} />
                            Ask on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="container mx-auto px-6 py-12 text-center">
                <div className="max-w-3xl mx-auto bg-secondary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Visa Assistance?</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Our expert visa consultants are ready to assist you. Make payment first, then contact us on WhatsApp with your documents to start processing.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                            {whatsappNumbers.map((num, i) => (
                                <a
                                    key={i}
                                    href={`https://wa.me/${num.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {num.display}
                                </a>
                            ))}
                        </div>
                        <div className="mt-5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold transition-all"
                            >
                                <MessageSquare size={18} />
                                Contact Our Office
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
