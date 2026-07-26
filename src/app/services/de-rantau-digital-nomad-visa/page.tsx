"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Laptop,
    Globe,
    CheckCircle2,
    Building2,
    Users,
    FileText,
    ArrowRight,
    MessageCircle,
    Phone,
    ShieldCheck,
    Briefcase,
    DollarSign,
    Calendar,
    FileCheck,
    Sparkles,
    UserCheck,
    Clock,
    HelpCircle,
    Download
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function DeRantauDigitalNomadVisa() {
    const [activeTab, setActiveTab] = useState<"freelancer" | "remoteWorker">("freelancer");
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="min-h-screen bg-white pb-20 overflow-hidden" ref={ref}>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/de-rantau/digital-nomad-cover.jpg"
                        alt="DE Rantau Digital Nomad Visa Malaysia - Work remotely in Malaysia"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 z-[1]" />
                
                {/* Decorative blur accents */}
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-[120px] z-[2]"
                />
                <motion.div
                    style={{ y }}
                    className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-[100px] z-[2]"
                />

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm mb-8 backdrop-blur-md shadow-inner"
                        >
                            <Laptop size={18} className="text-secondary" />
                            <span>Malaysia Digital Nomad Pass</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight tracking-tight">
                            DE Rantau / <span className="text-secondary">Digital Nomad Visa</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-light">
                            Live, travel, and work remotely in Malaysia for up to 2 years under MDEC&apos;s official DE Rantau Nomad Pass program for digital professionals and freelancers worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/601116695249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                            >
                                <MessageCircle size={22} />
                                Consult an Expert
                            </a>
                            <Link
                                href="#eligibility"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full transition-all hover:shadow-md flex items-center justify-center gap-2 text-lg"
                            >
                                View Eligibility Criteria
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* Quick Highlights Bar */}
            <section className="py-10 bg-gradient-to-r from-gray-50 via-blue-50/50 to-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Clock className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Pass Validity</h4>
                            <p className="text-sm text-gray-600">3 to 12 months (Renewable up to 2 years)</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Globe className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Work Remotely</h4>
                            <p className="text-sm text-gray-600">Serve foreign or local clients freely</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Users className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Bring Family</h4>
                            <p className="text-sm text-gray-600">Spouse & children eligible as dependents</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <DollarSign className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Income Threshold</h4>
                            <p className="text-sm text-gray-600">USD 24,000 / year (Digital Pro)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Selection Section (Screenshot 2) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Application Categories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Please select your category before proceeding with your application
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The DE Rantau Nomad Pass classifies applicants into two distinct remote working streams. Select below to filter requirements:
                        </p>
                    </div>

                    {/* Interactive Radio Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Freelancer Card */}
                        <div
                            onClick={() => setActiveTab("freelancer")}
                            className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 relative ${
                                activeTab === "freelancer"
                                    ? "border-primary bg-primary/5 shadow-xl scale-[1.02]"
                                    : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 shrink-0 transition-all ${
                                        activeTab === "freelancer"
                                            ? "border-primary bg-primary text-white"
                                            : "border-gray-400 bg-white"
                                    }`}
                                >
                                    {activeTab === "freelancer" && (
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Digital Freelancer / Independent Contractor
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-primary font-semibold text-xs rounded-full">
                                        Project-Based Remote Work
                                    </span>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-200" />
                            <p className="text-gray-700 leading-relaxed text-base">
                                <strong>Digital freelancers / independent contractors</strong> are individuals who perform work remotely on a freelance and project basis with no attachment to a specific company or location.
                            </p>
                        </div>

                        {/* Remote Worker Card */}
                        <div
                            onClick={() => setActiveTab("remoteWorker")}
                            className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 relative ${
                                activeTab === "remoteWorker"
                                    ? "border-primary bg-primary/5 shadow-xl scale-[1.02]"
                                    : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 shrink-0 transition-all ${
                                        activeTab === "remoteWorker"
                                            ? "border-primary bg-primary text-white"
                                            : "border-gray-400 bg-white"
                                    }`}
                                >
                                    {activeTab === "remoteWorker" && (
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Remote Worker
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full">
                                        Company Employee
                                    </span>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-200" />
                            <p className="text-gray-700 leading-relaxed text-base">
                                <strong>Remote workers</strong> are individuals who are employees of a company who have a flexible working arrangement that allows them to work remotely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria Section (Screenshot 3) */}
            <section id="eligibility" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Requirements & Qualifications
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Eligibility Criteria
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Review the key eligibility standards for foreign digital nomads applying for the DE Rantau Pass.
                        </p>
                    </div>

                    {/* Table View */}
                    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="py-5 px-6 font-bold text-lg w-1/4 border-r border-blue-800">
                                            Criteria
                                        </th>
                                        <th className="py-5 px-8 font-bold text-lg text-center" colSpan={2}>
                                            Foreign Digital Nomad
                                        </th>
                                    </tr>
                                    <tr className="bg-blue-900 text-white border-b border-blue-800 text-sm">
                                        <th className="py-3 px-6 font-medium border-r border-blue-800">
                                            Category
                                        </th>
                                        <th className="py-3 px-6 font-medium text-center border-r border-blue-800 w-3/8">
                                            Digital Freelancer / Independent Contractor
                                        </th>
                                        <th className="py-3 px-6 font-medium text-center w-3/8">
                                            Remote Worker
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-800 text-sm md:text-base">
                                    {/* Row 1: Type of Nomad */}
                                    <tr className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-6 px-6 font-bold text-gray-900 bg-gray-50/80 border-r border-gray-200">
                                            Type of Digital Nomad
                                        </td>
                                        <td className="py-6 px-6 border-r border-gray-200">
                                            Digital freelancer, independent contractor
                                        </td>
                                        <td className="py-6 px-6">
                                            Remote worker i.e. employee of a company but not required to physically be in the office
                                        </td>
                                    </tr>

                                    {/* Row 2: Domain of Profession */}
                                    <tr className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-6 px-6 font-bold text-gray-900 bg-gray-50/80 border-r border-gray-200">
                                            Domain of Profession
                                        </td>
                                        <td className="py-6 px-6 border-r border-gray-200" colSpan={2}>
                                            <div className="space-y-4">
                                                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                                                    <h5 className="font-bold text-primary text-base mb-1 underline">
                                                        Digital Professional
                                                    </h5>
                                                    <p className="text-gray-700 leading-relaxed text-sm">
                                                        Digital freelancer, independent contractor, and remote worker whom are IT & digital professionals in various domains i.e. software engineers, backend engineers, UX, UI, cloud, cybersecurity, blockchain, AI (Artificial Intelligence), machine learning, data-related etc., digital marketing, digital content development etc.
                                                    </p>
                                                </div>

                                                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                                                    <h5 className="font-bold text-purple-900 text-base mb-1 underline">
                                                        Non-Digital Professional
                                                    </h5>
                                                    <p className="text-gray-700 leading-relaxed text-sm">
                                                        Chief Executive Officer (Founder/Managing Director/President), Chief Operations Officer, Business Development (Growth Manager), Marketing Manager, Chief Financial Officer, Finance Manager/Accountant, Sales Manager, Customer Success Manager, Human Resources Manager, Legal Counsel, Public Relation Manager, Consultant, Customer Service Manager/Customer Service Representative/ Customer Success Specialist, Communication & Public Relations Manager, Administration Manager, Technical Writer, Tax Specialist, Tax Accountant, Production Manager, Supply Chain Manager etc.
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 3: Proof of Work */}
                                    <tr className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-6 px-6 font-bold text-gray-900 bg-gray-50/80 border-r border-gray-200">
                                            Proof of Work
                                        </td>
                                        <td className="py-6 px-6 border-r border-gray-200">
                                            <ul className="space-y-2 list-disc list-inside text-gray-700">
                                                <li>Active project contract.</li>
                                                <li>Contract duration &gt; 3 months, can be multiple contracts.</li>
                                                <li>Clientele is foreign / Malaysian based companies.</li>
                                            </ul>
                                        </td>
                                        <td className="py-6 px-6">
                                            <ul className="space-y-2 list-disc list-inside text-gray-700">
                                                <li>Active employment contract.</li>
                                                <li>Contract duration &gt; 3 months.</li>
                                                <li>Employer is foreign / non-Malaysian based companies.</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    {/* Row 4: Annual Income */}
                                    <tr className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-6 px-6 font-bold text-gray-900 bg-gray-50/80 border-r border-gray-200">
                                            Annual Income
                                        </td>
                                        <td className="py-6 px-6 border-r border-gray-200" colSpan={2}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                                                    <span className="block text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                                                        Digital Professional
                                                    </span>
                                                    <span className="text-2xl font-black text-emerald-700">
                                                        USD 24,000
                                                    </span>
                                                    <span className="block text-xs text-emerald-600 mt-1">
                                                        Minimum annual income (per year)
                                                    </span>
                                                </div>
                                                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
                                                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                                                        Non-Digital Professional
                                                    </span>
                                                    <span className="text-2xl font-black text-amber-700">
                                                        USD 60,000
                                                    </span>
                                                    <span className="block text-xs text-amber-600 mt-1">
                                                        Minimum annual income (per year)
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Basic Checklist / Mandatory Documents Section (Screenshot 4) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Document Requirements
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Basic Checklist
                        </h2>
                        <p className="text-gray-700 font-semibold text-lg uppercase tracking-wide">
                            MANDATORY DOCUMENTS FOR SUBMISSION DE RANTAU NOMAD PASS
                        </p>
                    </div>

                    {/* Category Switcher Tabs for Document Checklist */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-gray-100 p-1.5 rounded-2xl flex max-w-md w-full border border-gray-200">
                            <button
                                onClick={() => setActiveTab("freelancer")}
                                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                                    activeTab === "freelancer"
                                        ? "bg-primary text-white shadow-md"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                Freelancer / Contractor
                            </button>
                            <button
                                onClick={() => setActiveTab("remoteWorker")}
                                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                                    activeTab === "remoteWorker"
                                        ? "bg-primary text-white shadow-md"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                Remote Worker
                            </button>
                        </div>
                    </div>

                    {/* Dual Column / Active Tab Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Freelancer Column */}
                        <div
                            className={`bg-gradient-to-b from-blue-50/50 to-white p-8 rounded-3xl border-2 transition-all ${
                                activeTab === "freelancer"
                                    ? "border-primary ring-2 ring-primary/20 shadow-xl"
                                    : "border-gray-200 opacity-80"
                            }`}
                        >
                            <div className="bg-primary text-white p-4 rounded-2xl mb-6">
                                <h3 className="text-xl font-bold mb-1">
                                    Digital Freelancer / Independent Contractor
                                </h3>
                                <p className="text-xs text-blue-100">
                                    Digital freelancers / Independent contractors are individuals who perform work remotely on a freelance and project basis with no attachment to specific company or location.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Passport all pages (must have a minimum of 6 empty pages and at least 14 months remaining validity)",
                                    "Latest CV",
                                    "Latest 3 months bank statement",
                                    "Latest 3 months income statement or latest tax returns",
                                    "A valid project contract with a contract period of 3 months or more (combination of contracts from multiple companies will also be accepted)",
                                    "Personal bond (to fill out the prescribed form)",
                                    "Letter of good conduct (issued by authority body in respective country or current residence)",
                                    "Highest education certificate",
                                    "Medical insurance enrolment certificate which is valid in Malaysia (must also cover dependent, if any)",
                                    "Inland Revenue Board of Malaysia tax registration slip"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-800 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Remote Worker Column */}
                        <div
                            className={`bg-gradient-to-b from-purple-50/50 to-white p-8 rounded-3xl border-2 transition-all ${
                                activeTab === "remoteWorker"
                                    ? "border-primary ring-2 ring-primary/20 shadow-xl"
                                    : "border-gray-200 opacity-80"
                            }`}
                        >
                            <div className="bg-blue-900 text-white p-4 rounded-2xl mb-6">
                                <h3 className="text-xl font-bold mb-1">
                                    Remote Worker
                                </h3>
                                <p className="text-xs text-purple-100">
                                    Remote workers are individuals who are employees of a company who have a flexible working arrangement that allows them to work remotely.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Passport all pages (must have a minimum of 6 empty pages and at least 14 months remaining validity)",
                                    "Latest CV",
                                    "Latest 3 months bank statement",
                                    "Latest 3 months income statement or latest tax returns",
                                    "Latest 3 months payslip",
                                    "A valid employment contract with a contract period of 3 months or more",
                                    "Letter of good conduct (issued by authority body in respective country or current residence)",
                                    "Personal bond (to fill out the prescribed form)",
                                    "Highest education certificate",
                                    "Medical insurance enrolment certificate which is valid in Malaysia (must also cover dependent, if any)",
                                    "Inland Revenue Board of Malaysia tax registration slip"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-800 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive CTA Section with Contact Numbers */}
            <section className="py-20 bg-gradient-to-br from-primary via-blue-900 to-gray-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-secondary text-sm font-bold mb-4 backdrop-blur-md border border-white/10">
                            Start Your Application Today
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            Ready to Apply for the DE Rantau Digital Nomad Visa?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            NextPath Global provides full end-to-end guidance, document preparation, tax registration assistance, and MDEC submission support for your seamless relocation to Malaysia.
                        </p>
                    </div>

                    {/* Direct Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        <a
                            href="https://wa.me/601116695249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                            <p className="text-secondary font-mono font-bold text-lg mb-2">+60 11 1669 5249</p>
                            <span className="text-xs text-blue-200 group-hover:underline flex items-center justify-center gap-1">
                                Chat on WhatsApp <ArrowRight size={14} />
                            </span>
                        </a>

                        <a
                            href="https://wa.me/60178823135"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Advisor Desk</h4>
                            <p className="text-secondary font-mono font-bold text-lg mb-2">+60 17 882 3135</p>
                            <span className="text-xs text-blue-200 group-hover:underline flex items-center justify-center gap-1">
                                Chat on WhatsApp <ArrowRight size={14} />
                            </span>
                        </a>

                        <a
                            href="https://wa.me/60172965249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Client Relations</h4>
                            <p className="text-secondary font-mono font-bold text-lg mb-2">+60 17 296 5249</p>
                            <span className="text-xs text-blue-200 group-hover:underline flex items-center justify-center gap-1">
                                Chat on WhatsApp <ArrowRight size={14} />
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/book-appointment"
                            className="bg-secondary hover:bg-yellow-400 text-gray-900 font-extrabold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-yellow-400/20 text-lg flex items-center gap-2"
                        >
                            <Calendar size={20} />
                            Book Appointment Now
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 transition-all text-lg"
                        >
                            Submit Online Inquiry
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
