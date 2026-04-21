"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Users,
    Briefcase,
    FileText,
    CheckCircle,
    XCircle,
    MessageCircle,
    Mail,
    ArrowRight,
    ShieldCheck,
    Award,
    Building,
    AlertTriangle,
    Phone
} from "lucide-react";
import Link from "next/link";

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

const epCategories = [
    {
        name: "Category 1",
        color: "from-purple-600 to-purple-800",
        borderColor: "border-purple-400",
        bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
        suitableFor: "Top management & technical experts",
        salary: "RM 10,000 and above",
        validity: "Up to 5 years",
        dependents: "Eligible (Pass & Maid)",
        roles: ["CEO", "Director", "General Manager", "Specialist"],
        popular: true
    },
    {
        name: "Category 2",
        color: "from-blue-600 to-blue-800",
        borderColor: "border-blue-400",
        bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
        suitableFor: "Senior & mid-level professionals",
        salary: "RM 5,000 to RM 9,999",
        validity: "Up to 2 years",
        dependents: "Eligible",
        roles: ["Engineer", "Manager", "Executive"],
        popular: false
    },
    {
        name: "Category 3",
        color: "from-gray-600 to-gray-800",
        borderColor: "border-gray-400",
        bgColor: "bg-gradient-to-br from-gray-600 to-gray-800",
        suitableFor: "Junior professionals / skilled staff",
        salary: "RM 3,000 to RM 4,999*",
        validity: "Up to 12 months",
        dependents: "Not Eligible",
        roles: ["Technical staff", "Junior executives"],
        popular: false
    }
];

export default function EmploymentPass() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20 relative">
                <motion.div
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
                        Professional Work Permits
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Malaysia <span className="text-primary">Employment Pass (EP)</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Official work permit for foreign professionals to legally work in Malaysia under a registered Malaysian company.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#categories"
                            className="bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary font-bold py-4 px-8 rounded-full transition-all hover:shadow-md flex items-center justify-center gap-2"
                        >
                            View Categories
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* What is EP */}
            <section className="bg-gray-50 py-20 mb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What is an Employment Pass (EP)?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            The Employment Pass (EP) is an official work permit issued by the Immigration Department of Malaysia that allows foreign professionals to legally work in Malaysia under a registered Malaysian company.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <Briefcase className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Professional Roles</h3>
                                <p className="text-gray-600 text-sm">Applicable for professional, managerial, executive, and technical roles</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <Building className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Employer Submitted</h3>
                                <p className="text-gray-600 text-sm">Application is submitted by the employer</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <ShieldCheck className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Job-Specific</h3>
                                <p className="text-gray-600 text-sm">EP is tied to a specific job role and company</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EP Categories */}
            <section id="categories" className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Employment Pass Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the EP category that matches your qualifications and job role.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {epCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl shadow-lg border-2 ${category.popular ? 'border-purple-400 scale-105' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2`}
                        >
                            {category.popular && (
                                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    MOST COMMON
                                </div>
                            )}
                            <div className={`${category.bgColor} text-white p-6 text-center`}>
                                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                <div className="text-sm opacity-90">{category.suitableFor}</div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-gray-600">Salary</span>
                                        <span className="font-bold text-gray-900">{category.salary}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-gray-600">Validity</span>
                                        <span className="font-bold text-gray-900">{category.validity}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Dependents</span>
                                        <span className="font-bold text-gray-900">{category.dependents}</span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Common roles:</p>
                                    <div className="space-y-2">
                                        {category.roles.map((role, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={16} className="text-primary" />
                                                {role}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-bold py-3 px-4 rounded-full transition-all"
                                >
                                    Apply for {category.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Documents Required */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* From Employer */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <Building className="text-primary" /> From Employer
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Company registration documents (SSM)",
                                "Company profile",
                                "Paid-up capital details",
                                "Organizational chart",
                                "Justification letter",
                                "Employment contract / offer letter"
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
                    </motion.div>

                    {/* From Applicant */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <Users className="text-primary" /> From Applicant
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Passport (minimum 18 months validity)",
                                "Passport-size photo",
                                "Updated CV",
                                "Educational certificates",
                                "Experience letters (if applicable)",
                                "Detailed job description"
                            ].map((doc, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
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
                        <p className="mt-6 text-sm text-gray-500 italic flex items-start gap-2">
                            <FileText size={16} className="mt-1 flex-shrink-0" />
                            All documents must be consistent and professionally prepared.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline & Rejection Reasons */}
            <section className="bg-gray-50 py-20 mb-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Approval Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <Clock className="text-primary" /> Approval Timeline
                            </h2>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="mb-6">
                                    <p className="text-gray-700 mb-2">⏳ <strong>Standard processing time:</strong></p>
                                    <p className="text-2xl font-bold text-primary ml-6">2 to 6 weeks</p>
                                    <p className="text-sm text-gray-500 ml-6">after complete submission</p>
                                </div>
                                <div className="border-t pt-6">
                                    <p className="text-gray-700 mb-3">⏳ <strong>May take longer if:</strong></p>
                                    <ul className="space-y-2 ml-6">
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <span className="text-primary mt-1">•</span>
                                            Company is newly established
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <span className="text-primary mt-1">•</span>
                                            Category 3 application
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <span className="text-primary mt-1">•</span>
                                            Incomplete or unclear documents
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <span className="text-primary mt-1">•</span>
                                            Sensitive industry sector
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Common Rejection Reasons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <AlertTriangle className="text-red-500" /> Common Rejection Reasons
                            </h2>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <ul className="space-y-3">
                                    {[
                                        "Salary does not match job title",
                                        "Job role considered suitable for locals",
                                        "Applicant's experience not relevant",
                                        "Weak employer justification",
                                        "Company profile not strong enough",
                                        "Inconsistent information in documents",
                                        "Wrong EP category selection"
                                    ].map((reason, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <XCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
                                    <p className="text-sm text-gray-700">
                                        👉 <strong>Immigration evaluates logic, not sympathy.</strong>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Notes */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
                >
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Key Notes for Applicants</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                            <p className="text-gray-700">EP approval depends on <strong>job relevance + company strength</strong></p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                            <p className="text-gray-700">Titles must match <strong>salary, experience, and scope</strong></p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                            <p className="text-gray-700">Clean documentation <strong>increases approval chances</strong></p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                            <p className="text-gray-700">Malaysia prioritizes local employment, <strong>foreign hires must be justified</strong></p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Professional Support */}
            <section className="bg-gray-900 text-white py-20 mb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Support</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We assist with every step of your Employment Pass application
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    >
                        {[
                            { icon: <Award size={32} />, title: "Profile Assessment", desc: "Evaluate your qualifications and match to the right EP category" },
                            { icon: <ShieldCheck size={32} />, title: "Correct EP Category Selection", desc: "Ensure you apply for the appropriate category" },
                            { icon: <FileText size={32} />, title: "Document Preparation & Verification", desc: "Professional document review and preparation" },
                            { icon: <Building size={32} />, title: "Employer Justification Guidance", desc: "Help employers craft strong justification letters" },
                            { icon: <CheckCircle size={32} />, title: "Submission & Follow-up", desc: "Handle submission and track your application" },
                            { icon: <Users size={32} />, title: "Post-Approval Support", desc: "Assistance even after your EP is approved" }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                            >
                                <div className="text-primary mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto text-center"
                >
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Final Thought</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Malaysia respects structure, experience, and clarity—always has.<br />
                        When the application makes sense on paper, approval follows naturally.
                    </p>
                    <div className="bg-primary/5 p-6 rounded-xl mb-8">
                        <p className="text-xl font-semibold text-gray-900 mb-2">
                            Not sure which EP category fits you?
                        </p>
                        <p className="text-gray-600">
                            Talk to us before you apply—clarity comes first.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/60111166952249"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={24} /> WhatsApp: +60 111 1669 5249
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/60178283135"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <Phone size={24} /> +60 17 828 3135
                        </motion.a>
                    </div>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto mx-auto"
                        >
                            <Mail size={24} /> Free Consultation
                        </motion.button>
                    </Link>
                    <p className="mt-6 text-sm text-gray-500">
                        🌐 www.nextpathglobal.my
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
