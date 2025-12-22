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


            {/* Blog Categories Section */}
            <section className="container mx-auto px-6">
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
