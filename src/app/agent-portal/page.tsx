"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function AgentPortalPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-[104px]">
            {/* Coming Soon Hero Banner */}
            <section className="relative flex-1 flex flex-col justify-center items-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: "url('/assets/agent-portal-hero.png')" }}>
                <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px]"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-2xl bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-2xl text-white"
                >
                    <ShieldCheck size={64} className="mx-auto mb-6 text-blue-200" />
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">Agent & Partner Portal</h1>
                    
                    <div className="inline-block bg-blue-600/80 border border-blue-400 text-white font-bold px-6 py-2 rounded-full mb-8 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        Coming Soon
                    </div>

                    <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
                        We are currently engineering a powerful corporate dashboard for our global education partners to submit applications, track enrollments in real-time, and manage commissions securely. 
                    </p>
                    
                    <Link 
                        href="/contact"
                        className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2 hover:-translate-y-1"
                    >
                        <Mail size={20} /> Contact Us to Partner Today
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
