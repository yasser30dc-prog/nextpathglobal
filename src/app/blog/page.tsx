"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Blog() {
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
                        Stay Informed
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Our <span className="text-primary">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Insights, tips, and updates on study abroad, visa services, and global opportunities.
                    </p>
                </motion.div>
            </section>

            {/* Coming Soon Section */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-100">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <BookOpen size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Coming Soon</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We're working on bringing you valuable content about studying abroad, visa processes,
                            travel tips, and success stories. Stay tuned for our latest articles and updates!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                            >
                                <ArrowLeft size={20} />
                                Back to Home
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold py-3 px-8 rounded-full transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Blog Categories Section */}
            <section className="container mx-auto px-6 mt-16">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                        Blog Categories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Study in Malaysia",
                                icon: "🎓",
                                description: "Guides, tips, and insights about studying in Malaysian universities",
                                color: "from-blue-500 to-blue-600",
                                href: "/blog/study-in-malaysia"
                            },
                            {
                                title: "Visa & Immigration",
                                icon: "✈️",
                                description: "Everything about visa processes, requirements, and immigration",
                                color: "from-orange-500 to-orange-600",
                                href: "/blog/visa-immigration"
                            },
                            {
                                title: "Student Life",
                                icon: "🌟",
                                description: "Campus life, accommodation, culture, and student experiences",
                                color: "from-purple-500 to-purple-600",
                                href: "/blog/student-life"
                            },
                            {
                                title: "Updates & Announcements",
                                icon: "📢",
                                description: "Latest news, policy changes, and important announcements",
                                color: "from-green-500 to-green-600",
                                href: "/blog/updates-announcements"
                            }
                        ].map((category, i) => (
                            <Link
                                key={i}
                                href={category.href}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all group cursor-pointer"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                                        {category.icon}
                                    </div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {category.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
