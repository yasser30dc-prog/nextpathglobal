"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getCategoryPosts } from "@/data/blog";

export default function StudyInMalaysiaCategory() {
    const posts = getCategoryPosts("study-in-malaysia");

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                            🎓
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Study in Malaysia
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Guides, tips, and insights about studying in Malaysian universities
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Blog Posts */}
                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <Link href={`/blog/study-in-malaysia/${post.slug}`}>
                                <div className="p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
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
                                    <div className="mt-6">
                                        <span className="text-primary font-semibold hover:underline">
                                            Read More →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No posts available yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
