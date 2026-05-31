"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PaymentMethods() {
    return (
        <div className="min-h-screen bg-white pb-20 overflow-hidden">
            {/* Hero Section with Cover Photo */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/payment-methods/payment-cover.png"
                        alt="Secure and reliable payment methods - NextPath Global"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]" />
                {/* Decorative blur accents */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-[2]" />
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/15 rounded-full blur-[100px] z-[2]" />

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/15 text-white font-semibold text-sm mb-6 backdrop-blur-sm border border-white/20">
                            Secure Payments
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
                            Payment <span className="text-secondary">Methods</span>
                        </h1>
                        <p className="text-white/85 max-w-2xl mx-auto text-lg drop-shadow-md">
                            NextPath Global Sdn Bhd — Secure, transparent, and convenient payment methods for all consulting services.
                        </p>
                    </div>
                </div>

                {/* Bottom fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* Under Construction Section */}
            <section className="container mx-auto px-6 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-100 shadow-md">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <Construction size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Under Construction</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We're working on bringing you detailed information about our payment methods.
                            This page will be available soon with all the payment options we accept.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                        >
                            <ArrowLeft size={20} />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
