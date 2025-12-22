"use client";

import { motion } from "framer-motion";
import {
    Globe,
    GraduationCap,
    Plane,
    Users,
    CheckCircle,
    ArrowRight,
    Target,
    Eye,
    Home,
    Crown,
    MessageCircle,
    Mail
} from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                        Your Trusted Partner
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        About <span className="text-primary">NextPath Global Sdn Bhd</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        We are more than just a consultancy or a travel service provider—we are a trusted partner in life-changing journeys.
                    </p>
                </motion.div>
            </section>

            {/* Who We Are */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Who We Are</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <span className="font-bold text-gray-900">NEXTPATH GLOBAL SDN BHD (ROC: 1637994-A)</span> is an emerging study abroad consultancy based in Kuala Lumpur, Malaysia. We have established trusted partnerships with reputable universities across Malaysia, enabling us to offer reliable and up-to-date academic pathways for international students.
                            </p>
                            <p>
                                While we are a growing name in the education consultancy sector, our operations are led by an experienced, qualified, and dedicated team committed to delivering professional and ethical guidance.
                            </p>
                            <p>
                                We provide comprehensive counseling, personalized support, and well-informed options for international students seeking to pursue higher education in Malaysia. Our approach focuses on aligning students' aspirations with suitable academic opportunities, ensuring informed decision-making and supporting long-term career development.
                            </p>
                            <p>
                                As a <span className="font-bold text-primary">student consultancy</span>, we guide ambitious learners toward academic excellence and future success. From counselling to admissions and visa assistance, we stand beside our students with honesty, professionalism, and care.
                            </p>
                            <p>
                                As a <span className="font-bold text-primary">travel agency</span>, we open doors to the world, offering safe, reliable, and memorable travel experiences. Whether for education, business, or leisure, we simplify journeys by providing transparent services and personalized support.
                            </p>
                            <p className="font-medium text-gray-900 italic border-l-4 border-primary pl-4">
                                "What unites both sides of our work is one simple belief: every journey—whether for learning or exploring—shapes a brighter future."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group"
                    >
                        <img
                            src="/assets/about/office.png"
                            alt="NextPath Global Office"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <ul className="space-y-4 text-gray-600">
                                {[
                                    "Guide students with honest, professional consultation.",
                                    "Simplify admission, visa, and travel processes.",
                                    "Provide safe, reliable, and memorable travel services.",
                                    "Build strong partnerships with global networks.",
                                    "Inspire confidence and create opportunities."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Eye size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be a trusted global bridge for education and travel, empowering people to pursue knowledge, explore the world, and shape brighter futures through seamless opportunities and experiences.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="container mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions for study abroad, travel, and visa services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Study Abroad",
                            desc: "Expert guidance for students seeking quality education in prestigious universities worldwide with complete admission support.",
                            icon: <GraduationCap size={40} />
                        },
                        {
                            title: "Tourist Visa Services",
                            desc: "Fast-track visa processing for 30+ countries including Singapore, Thailand, China, Japan, Australia, UK, USA.",
                            icon: <Plane size={40} />
                        },
                        {
                            title: "MM2H & PVIP",
                            desc: "Malaysia My Second Home & Premium Visa Programme - Live, retire, or invest in Malaysia with 10-20 year renewable visas.",
                            icon: <Crown size={40} />
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group text-center"
                        >
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact Stats */}
            <section className="bg-primary py-20 mb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
                        <p className="text-white/80">Trusted by thousands of students and travelers across the globe.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "4,000+", label: "Happy Clients" },
                            { value: "30+", label: "Countries Covered" },
                            { value: "3,000+", label: "Successful Visas" },
                            { value: "98%", label: "Approval Rate" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/80 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="container mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Work</h2>
                    <p className="text-gray-600">Our simple 4-step process makes visa applications easy and stress-free.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
                    {[
                        { step: "1", title: "Send Documents", desc: "Share your required documents with our team." },
                        { step: "2", title: "We Assess", desc: "Our experts review and verify documentation." },
                        { step: "3", title: "We Submit", desc: "We process your visa application." },
                        { step: "4", title: "Get Approved", desc: "Receive your approved visa." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-xl text-center"
                        >
                            <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-6 shadow-lg">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Contact us today for professional B2B visa services and take the first step toward your global dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="tel:+601116695249"
                                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={24} /> +60 11 1669 5249
                            </a>
                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Mail size={24} /> Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
