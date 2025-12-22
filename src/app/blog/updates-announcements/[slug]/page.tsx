"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getPostBySlug } from "@/data/blog";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white pt-24 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-primary hover:underline">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <article className="container mx-auto px-6 max-w-4xl">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog/updates-announcements"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                        <ArrowLeft size={20} />
                        Back to Updates & Announcements
                    </Link>
                </motion.div>

                {/* Article Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 mb-8"></div>
                </motion.header>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg max-w-none"
                >
                    <ReactMarkdown
                        components={{
                            h1: ({ children }: any) => (
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }: any) => (
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }: any) => (
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }: any) => (
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }: any) => (
                                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }: any) => (
                                <li className="leading-relaxed">{children}</li>
                            ),
                            strong: ({ children }: any) => (
                                <strong className="font-bold text-gray-900">{children}</strong>
                            ),
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 p-8 bg-gradient-to-r from-primary to-orange-500 rounded-2xl text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-3">Need Visa Assistance?</h3>
                    <p className="mb-6 text-white/90">
                        Contact us today for professional guidance on visa applications and travel planning.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </article>
        </div>
    );
}
