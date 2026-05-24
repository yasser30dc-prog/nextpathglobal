"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";

type CategoryFilter = "all" | BlogPost["category"];

const categories = [
    { id: "all" as const, name: "All Posts", icon: "📚" },
    { id: "study-in-malaysia" as const, name: "Study in Malaysia", icon: "🎓" },
    { id: "visa-immigration" as const, name: "Visa & Immigration", icon: "✈️" },
    { id: "student-life" as const, name: "Student Life", icon: "🌟" },
    { id: "travel-tourism" as const, name: "Travel & Tourism in Malaysia", icon: "🌏" },
    { id: "updates-announcements" as const, name: "Updates & Announcements", icon: "📢" }
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

    const filteredPosts = activeCategory === "all"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const getCategoryPath = (category: BlogPost["category"]) => {
        return `/blog/${category}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pb-20">

            {/* ── Hero Cover Section ── */}
            <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
                <img
                    src="/assets/blog-hero.webp"
                    alt="NextPath Global Blog"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlay: dark top → white bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/80 via-[#0d1b2a]/55 to-white" />

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f0d485] text-sm font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
                            ✍️ Stay Informed
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
                            Our <span className="text-[#c9a84c]">Blog</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                            Insights, tips, and updates on study abroad, visa services, and global opportunities.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl -mt-4">
                {/* spacer */}
                <div className="mb-4" />

                {/* Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${activeCategory === category.id
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="space-y-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <Link href={getCategoryPath(post.category) + `/${post.slug}`}>
                                    <div className="p-8">
                                        {/* Category Badge */}
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                                {categories.find(c => c.id === post.category)?.icon}{" "}
                                                {categories.find(c => c.id === post.category)?.name}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-2">
                                                <User size={16} />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                                            Read Full Article
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-gray-500 text-lg">
                                No posts available in this category yet. Check back soon!
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
