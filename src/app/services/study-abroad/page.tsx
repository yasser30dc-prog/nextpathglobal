"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, DollarSign, Globe, ShieldCheck, Briefcase, Home, BookOpen, CheckCircle2, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const StudyAbroadPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* We can add a real image here later */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Study Abroad with NextPath Global</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200 max-w-3xl mx-auto">
                            Your gateway to world-class education! We specialize in helping international students pursue their academic dreams, with a special focus on studying in Malaysia – Asia’s rising education hub.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/student-assessment"
                                className="bg-white text-primary font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
                            >
                                Start Free Assessment <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent border border-white/40 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 transition-all"
                            >
                                Book Free Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Study in Malaysia */}
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study in Malaysia?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Discover why Malaysia is becoming the top choice for international students.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <DollarSign size={32} />, title: "Affordable Education", desc: "World-class universities at 60% lower cost than USA/UK. Average tuition: RM 20,000-40,000/year" },
                        { icon: <GraduationCap size={32} />, title: "Quality Education", desc: "QS-ranked universities with international recognition and UK/Australian partnerships" },
                        { icon: <Globe size={32} />, title: "Multicultural Hub", desc: "Safe, diverse, English-speaking environment with students from 160+ countries" },
                        { icon: <ShieldCheck size={32} />, title: "Easy Visa Process", desc: "Student Pass approval in 4-8 weeks with high success rate. No IELTS for some programs!" },
                        { icon: <Briefcase size={32} />, title: "Work Opportunities", desc: "Part-time work allowed (20 hrs/week). Post-study work visa available" },
                        { icon: <Home size={32} />, title: "Comfortable Living", desc: "Low cost of living (RM 1,500-2,500/month), tropical weather, delicious food!" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Programs We Help With */}
            <section className="py-20 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Programs We Help With</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "Foundation",
                            "Diploma",
                            "Bachelor’s",
                            "Master’s",
                            "PhD",
                            "English Courses"
                        ].map((program, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full text-xl font-medium hover:bg-white hover:text-secondary transition-all cursor-default"
                            >
                                {program}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How NextPath Global Helps You */}
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How NextPath Global Helps You</h2>
                    <p className="text-gray-600">Comprehensive support from consultation to arrival.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { step: "1", title: "Free Consultation", desc: "We assess your academic background, career goals, and budget to recommend the perfect university and program for you" },
                        { step: "2", title: "University Application", desc: "Complete application assistance including document preparation, essays, and submission to multiple universities" },
                        { step: "3", title: "Offer Letter", desc: "We secure your admission and unconditional offer letter from the university (usually within 2-4 weeks)" },
                        { step: "4", title: "Student Pass (Visa)", desc: "Full visa application service with 98% success rate. We handle EMGS, VAL, and SEV processes" },
                        { step: "5", title: "Accommodation", desc: "Help finding student housing – university hostels, homestays, or private apartments near campus" },
                        { step: "6", title: "Arrival Support", desc: "Airport pickup, university registration, bank account setup, SIM card, and orientation assistance" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity select-none">
                                {item.step}
                            </div>
                            <div className="text-4xl mb-4">{item.step}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-12 bg-primary text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">Required Documents</h2>
                            <p className="text-lg opacity-90 mb-8">Prepare these documents to start your application process smoothly.</p>
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="md:w-1/2 p-12">
                            <ul className="space-y-4">
                                {[
                                    "Passport copy (valid for at least 18 months)",
                                    "Academic transcripts & certificates (translated to English)",
                                    "Passport-size photographs (white background)",
                                    "English proficiency test (IELTS/TOEFL) – if required",
                                    "Personal statement / motivation letter",
                                    "Financial proof (bank statements, scholarship letters)",
                                    "Health declaration form"
                                ].map((doc, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-secondary rounded-3xl p-12 text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4">Ready to Study Abroad?</h2>
                        <p className="text-xl text-gray-300 mb-8">Start your journey to world-class education with NextPath Global</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Free consultation</span>
                            <span className="hidden sm:inline text-gray-500">•</span>
                            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Expert guidance</span>
                            <span className="hidden sm:inline text-gray-500">•</span>
                            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">98% visa success rate</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/student-assessment"
                                className="bg-white text-secondary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all shadow-lg"
                            >
                                Start Free Assessment
                            </Link>
                            <Link
                                href="https://wa.me/601116695249"
                                target="_blank"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                WhatsApp Us Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default StudyAbroadPage;
