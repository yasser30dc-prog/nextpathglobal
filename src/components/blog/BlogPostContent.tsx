"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { BlogPost } from "@/data/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface BlogPostContentProps {
    post: BlogPost;
    backHref: string;
    backLabel: string;
    ctaTitle: string;
    ctaDescription: string;
}

export default function BlogPostContent({
    post,
    backHref,
    backLabel,
    ctaTitle,
    ctaDescription,
}: BlogPostContentProps) {
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
                        href={backHref}
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                        <ArrowLeft size={20} />
                        {backLabel}
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
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
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
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ children }) => (
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }) => (
                                <li className="leading-relaxed">{children}</li>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-bold text-gray-900">{children}</strong>
                            ),
                            table: ({ children }) => (
                                <div className="overflow-x-auto my-8">
                                    <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="bg-gray-50">{children}</thead>
                            ),
                            tbody: ({ children }) => (
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {children}
                                </tbody>
                            ),
                            tr: ({ children }) => <tr>{children}</tr>,
                            th: ({ children }) => (
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 last:border-r-0">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200 last:border-r-0">
                                    {children}
                                </td>
                            ),
                        }}
                    >
                        {post.content.replace(/\r\n/g, "\n")}
                    </ReactMarkdown>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 p-8 bg-gradient-to-r from-primary to-orange-500 rounded-2xl text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-3">{ctaTitle}</h3>
                    <p className="mb-6 text-white/90">{ctaDescription}</p>
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
