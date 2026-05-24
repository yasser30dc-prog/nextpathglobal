"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Crown,
    Briefcase,
    GraduationCap,
    Plane,
    Users,
    UserCheck,
    ShieldCheck,
    FileText,
    CheckCircle,
    CreditCard,
    Clock,
    ArrowRight,
    MessageCircle,
    Mail,
    Star,
    Gem
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

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

export default function PVIP() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="min-h-screen bg-white pb-20 overflow-hidden" ref={ref}>
            {/* Hero Section with Cover Photo */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/pvip/pvip-cover.webp"
                        alt="Premium luxury living in Kuala Lumpur - PVIP Malaysia"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 z-[1]" />
                {/* Decorative blur accents */}
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/20 to-primary/10 rounded-full blur-[120px] z-[2]"
                />
                <motion.div
                    style={{ y }}
                    className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-500/15 rounded-full blur-[100px] z-[2]"
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
                            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm mb-8 backdrop-blur-sm"
                        >
                            <Crown size={16} className="text-yellow-400" />
                            <span>Malaysia&apos;s Premier Residency by Investment</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-lg">
                            Premium Visa <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Programme</span> (PVIP)
                        </h1>

                        <p className="text-xl md:text-2xl text-white/85 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                            The ultimate 20-year residency for global investors and affluent individuals.
                            Establish your long-term base in Malaysia with unparalleled freedom and zero restrictions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/contact"
                                className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                            >
                                Start Application <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#features"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-10 rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg"
                            >
                                Explore Benefits
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* Introduction */}
            <section className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Residency Without Compromise
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Malaysia welcomes global investors and affluent individuals through its prestigious Premium Visa Programme (PVIP). As the nation’s premier “Residency by Investment” initiative, the PVIP grants a 20-year, renewable residency.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                This exclusive programme empowers participants to capitalise on a thriving business ecosystem and immerse themselves in a vibrant lifestyle, all with unparalleled freedom and minimal restrictions.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">20</div>
                                <div className="text-gray-600 font-medium">Years Visa Validity</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">0</div>
                                <div className="text-gray-600 font-medium">Days Minimum Stay</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
                                <div className="text-gray-600 font-medium">Foreign Ownership</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">No</div>
                                <div className="text-gray-600 font-medium">Age Restrictions</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Attractive Features */}
            <section id="features" className="container mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">Exclusive Privileges</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">Attractive Features</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Designed for the elite, offering freedom and flexibility unlike any other programme.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Crown size={32} />,
                            title: "20 Years Visa",
                            desc: "20 years visa with the option to extend a further 20 years (20+20)."
                        },
                        {
                            icon: <Briefcase size={32} />,
                            title: "Permitted to Work",
                            desc: "Work for any employer in Malaysia without restriction."
                        },
                        {
                            icon: <Gem size={32} />,
                            title: "Do Business",
                            desc: "Conduct business activities and investments without a local partner."
                        },
                        {
                            icon: <GraduationCap size={32} />,
                            title: "Study",
                            desc: "Participants and dependents are allowed to study in Malaysia."
                        },
                        {
                            icon: <Plane size={32} />,
                            title: "No Minimum Stay",
                            desc: "No physical presence or minimum stay criteria required."
                        },
                        {
                            icon: <UserCheck size={32} />,
                            title: "No Age Limit",
                            desc: "The Principal applicant is not subject to any age restrictions."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "Dependents",
                            desc: "Bring spouse, children, parents, and parents-in-laws."
                        },
                        {
                            icon: <ShieldCheck size={32} />,
                            title: "Domestic Helper",
                            desc: "Allowed to bring in one domestic helper."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Requirements */}
            <section className="bg-gray-900 text-white py-24 mb-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/grid.svg')]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Key Requirements</h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                To maintain the exclusivity of the programme, applicants must meet specific financial criteria.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-500 shrink-0">
                                        <CreditCard size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Offshore Income</h3>
                                        <p className="text-gray-400">Proof of monthly offshore income above <span className="text-white font-semibold">RM 40,000</span> (monthly) or <span className="text-white font-semibold">RM 480,000</span> (annually).</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-500 shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Fixed Deposit</h3>
                                        <p className="text-gray-400 mb-2"><span className="text-white font-semibold">RM 1,000,000</span> upon approval.</p>
                                        <p className="text-gray-500 text-sm">Withdrawal of up to RM 500,000 allowed after 1 year for property, medical, or education.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-500 shrink-0">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Participation Fee</h3>
                                        <p className="text-gray-400">RM 200,000 (Main Applicant)</p>
                                        <p className="text-gray-400">RM 100,000 (Each Dependent)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-white">Required Documents</h3>
                            <ul className="space-y-4">
                                {[
                                    "Passport Copies (All Pages)",
                                    "Resume / CV (Main Applicant)",
                                    "Latest 3 Months Payslip",
                                    "Employment Confirmation Letter",
                                    "Latest 3 Months Bank Statement",
                                    "Letter of Good Conduct (Police Clearance)",
                                    "Medical Report (from origin country)",
                                    "Marriage Certificate (if applicable)",
                                    "Birth Certificate (for children)",
                                    "8 Passport Size Photos (Blue Background)"
                                ].map((doc, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle size={18} className="text-yellow-500" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-sm text-gray-500 italic">
                                    * All documents must be translated into English and certified by a notary public.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="container mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Application Process</h2>
                    <p className="text-gray-600">A streamlined journey to your premium residency.</p>
                </div>

                <div className="relative">
                    {/* Line connecting steps */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                        {[
                            { step: "01", title: "Appointment", desc: "Appoint NextPath Global as your official consultant." },
                            { step: "02", title: "Pre-Screen", desc: "Submit documents for preliminary assessment." },
                            { step: "03", title: "Processing", desc: "Submit original documents and partial payment." },
                            { step: "04", title: "Submission", desc: "Application submitted to Immigration Dept." },
                            { step: "05", title: "Approval", desc: "Receive approval, open FD, medical check." },
                            { step: "06", title: "Endorsement", desc: "Visa endorsement and passport delivery." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform"
                            >
                                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 group-hover:bg-yellow-600 transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                        <Clock size={20} />
                        Processing Time: 4-6 months
                    </div>
                </div>
            </section>

            {/* Professional Services */}
            <section className="bg-gray-50 py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Professional Services</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                At NextPath Global, we take pride in offering expert services tailored to your unique needs. Our team is dedicated to guiding you through the entire process, ensuring a smooth and successful PVIP application.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Latest Guidelines & Advisory",
                                    "Documentation Checklist",
                                    "Documents Assistance",
                                    "Personal Bond Execution",
                                    "Document Preparation & Certification",
                                    "Application Submission",
                                    "Regular Progress Updates",
                                    "FD & Insurance Assistance",
                                    "Visa Endorsement",
                                    "Complimentary Consultation"
                                ].map((service, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                        <span className="text-gray-700 font-medium text-sm">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">Additional Services</h3>
                            <ul className="space-y-4">
                                {[
                                    "PVIP Fixed Deposit Withdrawal",
                                    "PVIP Visa Termination",
                                    "Maid Application",
                                    "Term Renewal",
                                    "Dependent Incorporation",
                                    "Property Buy/Rent Assistance",
                                    "Business Registration Consulting",
                                    "Driving License Application",
                                    "Vehicle Buy/Rent Assistance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 border-b border-gray-50 pb-3 last:border-0">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for Premium Residency?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Let us guide you through the PVIP process, ensuring your journey to Malaysia is smooth and hassle-free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="https://wa.me/1234567890"
                                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={24} /> WhatsApp Us Now
                            </a>
                            <Link
                                href="/contact"
                                className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Mail size={24} /> Free Consultation
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
