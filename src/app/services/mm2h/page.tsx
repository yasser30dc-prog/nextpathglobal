"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Clock,
    Users,
    Briefcase,
    Home,
    Globe,
    HeartPulse,
    FileCheck,
    CheckCircle,
    MessageCircle,
    Mail,
    ArrowRight,
    ShieldCheck,
    Award,
    Building,
    UserCheck
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

// Tier data
const tiers = [
    {
        name: "Platinum",
        color: "from-gray-700 to-gray-900",
        borderColor: "border-gray-400",
        bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
        fixedDeposit: "USD 1,000,000",
        property: "RM 2,000,000",
        visaDuration: "20 Years",
        minAge: "25",
        highlights: ["Work & Business Rights", "Domestic Helper", "Premium Status"],
        popular: false
    },
    {
        name: "Gold",
        color: "from-yellow-500 to-yellow-700",
        borderColor: "border-yellow-400",
        bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-800",
        fixedDeposit: "USD 500,000",
        property: "RM 1,000,000",
        visaDuration: "15 Years",
        minAge: "25",
        highlights: ["Extended Visa", "Property Investment", "Family Inclusion"],
        popular: true
    },
    {
        name: "Silver",
        color: "from-gray-400 to-gray-600",
        borderColor: "border-gray-300",
        bgColor: "bg-gradient-to-br from-gray-400 to-gray-600",
        fixedDeposit: "USD 150,000",
        property: "RM 600,000",
        visaDuration: "5 Years",
        minAge: "25",
        highlights: ["Entry Level", "Renewable Visa", "Family Inclusion"],
        popular: false
    },
    {
        name: "SEZ / SFZ",
        color: "from-primary to-primary-hover",
        borderColor: "border-primary",
        bgColor: "bg-gradient-to-br from-primary to-primary-hover",
        fixedDeposit: "USD 32,000 - 65,000",
        property: "From Developer",
        visaDuration: "10 Years",
        minAge: "21",
        highlights: ["Special Zones", "Lower Entry", "Age-Based Rates"],
        popular: false
    }
];

export default function MM2H() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const [activeTab, setActiveTab] = useState("requirements");

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden" ref={ref}>
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20 relative">
                <motion.div
                    style={{ y }}
                    className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
                    >
                        New 2024/2025 Tiered Programme
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        MM2H – Malaysia <span className="text-primary">My Second Home</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Choose from Platinum, Gold, Silver, or SEZ tiers with visa durations from 5 to 20 years. 
                        Make Malaysia your second home with our comprehensive residency programme.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#tiers"
                            className="bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary font-bold py-4 px-8 rounded-full transition-all hover:shadow-md flex items-center justify-center gap-2"
                        >
                            View Tier Options
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* What is MM2H */}
            <section className="bg-gray-50 py-20 mb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What is MM2H?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Malaysia My Second Home (MM2H) is a government initiative introduced in 2002 to attract foreigners to live and retire in Malaysia. The programme has been restructured with a new tiered system for 2024/2025.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The new structure offers four categories: <strong>Platinum</strong> (20-year visa), <strong>Gold</strong> (15-year visa), <strong>Silver</strong> (5-year visa), and <strong>Special Economic/Financial Zone</strong> (10-year visa) – each with different financial requirements and benefits.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">Platinum</span>
                                <span className="px-4 py-2 bg-yellow-600 text-white rounded-full text-sm font-medium">Gold</span>
                                <span className="px-4 py-2 bg-gray-500 text-white rounded-full text-sm font-medium">Silver</span>
                                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">SEZ/SFZ</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative h-[300px] rounded-2xl shadow-xl border border-gray-100 overflow-hidden group"
                        >
                            <img
                                src="/assets/mm2h/mm2h-hero.png"
                                alt="Malaysia My Second Home"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tier Cards */}
            <section id="tiers" className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Choose Your Tier</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select the MM2H tier that best suits your investment capacity and lifestyle goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl shadow-lg border-2 ${tier.popular ? 'border-yellow-400 scale-105' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    POPULAR
                                </div>
                            )}
                            <div className={`${tier.bgColor} text-white p-6 text-center`}>
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="text-3xl font-bold">{tier.visaDuration}</div>
                                <div className="text-sm opacity-80">Renewable Visa</div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-gray-600">Fixed Deposit</span>
                                        <span className="font-bold text-gray-900">{tier.fixedDeposit}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-gray-600">Property</span>
                                        <span className="font-bold text-gray-900">{tier.property}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Min Age</span>
                                        <span className="font-bold text-gray-900">{tier.minAge} years</span>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-6">
                                    {tier.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle size={16} className="text-primary" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-bold py-3 px-4 rounded-full transition-all"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SEZ Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-primary mt-1"><Building size={24} /></div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">SEZ/SFZ Special Zones</h4>
                            <p className="text-gray-600 text-sm">
                                The SEZ/SFZ category offers lower entry requirements with fixed deposits of <strong>USD 65,000</strong> (ages 21-49) or <strong>USD 32,000</strong> (50+). 
                                Property must be purchased directly from developers in designated zones like Forest City in Johor.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Programme Benefits</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enjoy exclusive privileges as an MM2H pass holder.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {[
                        {
                            icon: <Clock size={32} />,
                            title: "5 to 20-Year Visa",
                            desc: "Choose visa duration based on your tier: Silver (5yr), SEZ (10yr), Gold (15yr), or Platinum (20yr)."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "Family Inclusion",
                            desc: "Include spouse, unmarried children below 34, disabled children, and parents/in-laws as dependents."
                        },
                        {
                            icon: <Briefcase size={32} />,
                            title: "Work & Business",
                            desc: "Platinum category holders can conduct business and work in Malaysia without special permission."
                        },
                        {
                            icon: <Home size={32} />,
                            title: "Property Purchase",
                            desc: "Buy property in Malaysia with higher approval rates and access to financing for MM2H holders."
                        },
                        {
                            icon: <Globe size={32} />,
                            title: "Freedom to Move",
                            desc: "Enjoy visa flexibility in West Malaysia without location mandates or reporting requirements."
                        },
                        {
                            icon: <HeartPulse size={32} />,
                            title: "Tax-Free Offshore Income",
                            desc: "Tax exemption on pension remitted into Malaysia for MM2H participants."
                        }
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Financial Requirements Table */}
            <section id="requirements" className="container mx-auto px-4 md:px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 text-white py-20 rounded-3xl shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Requirements (2024/2025)</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                The new tiered structure with USD-based fixed deposits and mandatory property purchase.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full max-w-5xl mx-auto text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="py-4 px-4 text-lg font-semibold text-primary">Tier</th>
                                        <th className="py-4 px-4 text-lg font-semibold text-primary">Fixed Deposit (USD)</th>
                                        <th className="py-4 px-4 text-lg font-semibold text-primary">Property Purchase (RM)</th>
                                        <th className="py-4 px-4 text-lg font-semibold text-primary">Visa Duration</th>
                                        <th className="py-4 px-4 text-lg font-semibold text-primary">Min Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-5 px-4 font-medium"><span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Platinum</span></td>
                                        <td className="py-5 px-4 text-gray-300">USD 1,000,000</td>
                                        <td className="py-5 px-4 text-gray-300">RM 2,000,000</td>
                                        <td className="py-5 px-4 text-gray-300">20 Years</td>
                                        <td className="py-5 px-4 text-gray-300">25</td>
                                    </motion.tr>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-5 px-4 font-medium"><span className="px-3 py-1 bg-yellow-600 rounded-full text-sm">Gold</span></td>
                                        <td className="py-5 px-4 text-gray-300">USD 500,000</td>
                                        <td className="py-5 px-4 text-gray-300">RM 1,000,000</td>
                                        <td className="py-5 px-4 text-gray-300">15 Years</td>
                                        <td className="py-5 px-4 text-gray-300">25</td>
                                    </motion.tr>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-5 px-4 font-medium"><span className="px-3 py-1 bg-gray-500 rounded-full text-sm">Silver</span></td>
                                        <td className="py-5 px-4 text-gray-300">USD 150,000</td>
                                        <td className="py-5 px-4 text-gray-300">RM 600,000</td>
                                        <td className="py-5 px-4 text-gray-300">5 Years</td>
                                        <td className="py-5 px-4 text-gray-300">25</td>
                                    </motion.tr>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-5 px-4 font-medium"><span className="px-3 py-1 bg-primary rounded-full text-sm">SEZ (21-49)</span></td>
                                        <td className="py-5 px-4 text-gray-300">USD 65,000</td>
                                        <td className="py-5 px-4 text-gray-300">From Developer</td>
                                        <td className="py-5 px-4 text-gray-300">10 Years</td>
                                        <td className="py-5 px-4 text-gray-300">21</td>
                                    </motion.tr>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-5 px-4 font-medium"><span className="px-3 py-1 bg-primary rounded-full text-sm">SEZ (50+)</span></td>
                                        <td className="py-5 px-4 text-gray-300">USD 32,000</td>
                                        <td className="py-5 px-4 text-gray-300">From Developer</td>
                                        <td className="py-5 px-4 text-gray-300">10 Years</td>
                                        <td className="py-5 px-4 text-gray-300">50</td>
                                    </motion.tr>
                                </tbody>
                            </table>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="max-w-5xl mx-auto mt-8 p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-primary mt-1"><Award size={24} /></div>
                                    <div>
                                        <p className="font-bold text-white mb-1">Fixed Deposit Withdrawal</p>
                                        <p className="text-gray-400 text-sm">Up to 50% can be withdrawn after 1 year for approved purposes (property, medical, education).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-primary mt-1"><UserCheck size={24} /></div>
                                    <div>
                                        <p className="font-bold text-white mb-1">Stay Requirement</p>
                                        <p className="text-gray-400 text-sm">Applicants under 50 must stay 90 cumulative days per year in Peninsula Malaysia.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Documents & Process */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Required Documents */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <FileCheck className="text-primary" /> Required Documents
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Passport Photos – 2 pieces, blue background (physical & digital)",
                                "Passport Copy – All pages, colour copy",
                                "Resume (CV) – Main applicant only",
                                "Marriage Certificate – If applying with spouse",
                                "Birth Certificates – For children below age 34",
                                "Police Clearance – From country of origin (main applicant & dependents 18+)"
                            ].map((doc, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="mt-1 min-w-5 text-primary">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-gray-700">{doc}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">
                            Note: All documents must be translated into English and certified by a notary public.
                        </p>
                    </motion.div>

                    {/* Application Process */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <ShieldCheck className="text-primary" /> Application Process
                        </h2>
                        <div className="relative border-l-2 border-primary/20 ml-4 space-y-10">
                            {[
                                {
                                    step: "1",
                                    title: "Appointment",
                                    desc: "Appoint NextPath Global as your official MM2H consultant and sponsor"
                                },
                                {
                                    step: "2",
                                    title: "Pre-Screen",
                                    desc: "Gather required documents for preliminary assessment and verification"
                                },
                                {
                                    step: "3",
                                    title: "Submission",
                                    desc: "Application submitted to Immigration Department for processing"
                                },
                                {
                                    step: "4",
                                    title: "Approval",
                                    desc: "Arrive in Malaysia, open FD account, complete medical check & insurance"
                                },
                                {
                                    step: "5",
                                    title: "Property Purchase",
                                    desc: "Purchase property within the specified timeframe based on your tier"
                                },
                                {
                                    step: "6",
                                    title: "Visa Endorsement",
                                    desc: "Receive MM2H visa endorsement and passport delivery"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative pl-10"
                                >
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-4 border-primary flex items-center justify-center font-bold text-gray-900 shadow-sm z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-2 text-gray-900 font-bold">
                                <Clock className="text-primary" size={20} /> Processing Time
                            </div>
                            <p className="text-gray-600">4-6 months | Pass Validity: 5-20 years based on tier (renewable)</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Additional Requirements */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-3xl p-8 md:p-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">Additional Requirements</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <HeartPulse className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Medical Check-Up</h3>
                            <p className="text-gray-600 text-sm">All applicants must undergo medical examination in Malaysia upon approval.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <ShieldCheck className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Medical Insurance</h3>
                            <p className="text-gray-600 text-sm">Valid Malaysian medical insurance required. Waived for applicants aged 60 and above.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <Building className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-gray-900 mb-2">Property Timeline</h3>
                            <p className="text-gray-600 text-sm">Property must be purchased within the specified timeframe and held for minimum 10 years.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Why Choose Us & CTA */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                    >
                        Why Choose NextPath Global?
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    >
                        {[
                            "Licensed MM2H Agents",
                            "End-to-End Support",
                            "Bank Account Assistance",
                            "Property Guidance",
                            "Post-Approval Services",
                            "High Success Rate"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <CheckCircle className="text-primary" size={20} />
                                <span className="font-medium text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Make Malaysia Your Second Home</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            Let NextPath Global guide you through the MM2H application. Expert consultation, complete support, and a high success rate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/1234567890"
                                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={24} /> WhatsApp Us Now
                            </motion.a>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <Mail size={24} /> Free Consultation
                                </motion.button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            NextPath Global Sdn Bhd – Your trusted MM2H partner 🇲🇾
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
