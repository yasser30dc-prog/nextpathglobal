"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    Users, UserCheck, Clock, DollarSign, Send, FileText, Download, 
    MessageCircle, ShieldCheck, LogIn, UserPlus, LogOut, FileBadge 
} from "lucide-react";
import Link from "next/link";

export default function AgentPortalPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        name: "", whatsapp: "", email: "", nationality: "", program: "Bachelor", university: "", notes: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSimulatedSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert("Student successfully submitted for review!");
            setFormData({ name: "", whatsapp: "", email: "", nationality: "", program: "Bachelor", university: "", notes: "" });
            setIsSubmitting(false);
        }, 1500);
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col pt-[104px]">
                {/* Auth Hero Banner */}
                <section className="relative flex-1 flex flex-col justify-center items-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: "url('/assets/agent-portal-hero.png')" }}>
                    <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-2xl text-white"
                    >
                        <ShieldCheck size={64} className="mx-auto mb-6 text-blue-200" />
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Agent & Partner Portal</h1>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
                            Join the NextPath Global network. Submit student applications, track real-time enrollment progress, and manage your commissions securely in one place.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setIsLoggedIn(true)}
                                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                <LogIn size={20} /> Login to Portal
                            </button>
                            <button 
                                onClick={() => setIsLoggedIn(true)}
                                className="px-8 py-4 bg-blue-600 border border-blue-500 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                <UserPlus size={20} /> Register as Partner
                            </button>
                        </div>
                    </motion.div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-[104px] text-gray-800">
            {/* Dashboard Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[104px] z-30">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-blue-900">Partner Dashboard</h1>
                        <p className="text-sm text-gray-500">Welcome back, Education Agent</p>
                    </div>
                    <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="text-gray-500 hover:text-red-600 font-medium flex items-center gap-2 transition-colors bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-lg"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10 mt-4">
                
                {/* 1. Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Total Submitted", value: "34", icon: <Users size={24} />, color: "bg-blue-100 text-blue-700" },
                        { title: "Students Enrolled", value: "18", icon: <UserCheck size={24} />, color: "bg-green-100 text-green-700" },
                        { title: "In Progress (Review)", value: "12", icon: <Clock size={24} />, color: "bg-orange-100 text-orange-700" },
                        { title: "Commission Earned", value: "$14,500", icon: <DollarSign size={24} />, color: "bg-purple-100 text-purple-700" },
                    ].map((stat, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFTSIDE COLUMN (Form & Resources) */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* 2. Submit New Student Form */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                <Send size={20} className="text-blue-600"/> Submit New Student
                            </h2>
                            <form onSubmit={handleSimulatedSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                                        <input required type="text" placeholder="+1234..." className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input required type="email" placeholder="john@mail.com" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                                    <input required type="text" placeholder="e.g. Indian, Nigerian..." className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.nationality} onChange={e => setFormData({...formData, nationality: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Program Interest</label>
                                    <select className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none" value={formData.program} onChange={e => setFormData({...formData, program: e.target.value})}>
                                        <option>Diploma</option>
                                        <option>Bachelor</option>
                                        <option>Master's</option>
                                        <option>MBBS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred University</label>
                                    <input type="text" placeholder="e.g. Taylor's University" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                                    <textarea rows={3} placeholder="Any specific requirements..." className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold rounded-lg p-3 hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                    {isSubmitting ? "Submitting..." : <><Send size={18} /> Submit Application</>}
                                </button>
                            </form>
                        </div>

                        {/* 3. Resource Downloads */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                <FileText size={20} className="text-blue-600"/> Agent Resources
                            </h2>
                            <div className="space-y-3">
                                {[
                                    { name: "Malaysia Partner List 2024.pdf", size: "2.4 MB" },
                                    { name: "China MBBS Guide & Fees.pdf", size: "1.8 MB" },
                                    { name: "Agent Agreement Terms.pdf", size: "0.9 MB" }
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-100 text-blue-600 p-2 rounded-md"><FileBadge size={16}/></div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-800">{doc.name}</p>
                                                <p className="text-xs text-gray-500">{doc.size}</p>
                                            </div>
                                        </div>
                                        <Download size={18} className="text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHTSIDE COLUMN (Tables) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 4. My Students Table */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                                    <Users size={20} className="text-blue-600"/> My Students
                                </h2>
                                <button className="text-sm font-semibold text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="p-4 font-semibold text-gray-600">Student Name</th>
                                            <th className="p-4 font-semibold text-gray-600">Program</th>
                                            <th className="p-4 font-semibold text-gray-600">Destination</th>
                                            <th className="p-4 font-semibold text-gray-600">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { name: "Ahmed Rahman", prog: "MBBS", dest: "Hainan Medical Uni", status: "Enrolled", style: "bg-green-100 text-green-700" },
                                            { name: "Sarah Al-Fassi", prog: "Bachelor", dest: "Taylor's Uni", status: "Offer Issued", style: "bg-purple-100 text-purple-700" },
                                            { name: "David Chen", prog: "Diploma", dest: "Fuzhou Polytechnic", status: "Under Review", style: "bg-orange-100 text-orange-700" },
                                            { name: "Siti Nurhaliza", prog: "Master's", dest: "UM", status: "Submitted", style: "bg-blue-100 text-blue-700" },
                                            { name: "Michael Obi", prog: "Bachelor", dest: "APU", status: "Enrolled", style: "bg-green-100 text-green-700" },
                                        ].map((student, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">{student.name}</td>
                                                <td className="p-4 text-gray-600">{student.prog}</td>
                                                <td className="p-4 text-gray-600">{student.dest}</td>
                                                <td className="p-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${student.style}`}>
                                                        {student.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 5. Commission Tier Table */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                <DollarSign size={20} className="text-blue-600"/> Commission Structure (2024/2025)
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-gray-200">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-blue-50 border-b border-blue-100">
                                        <tr>
                                            <th className="p-4 font-bold text-blue-900">Program / Destination</th>
                                            <th className="p-4 font-bold text-blue-900">Standard Tier (1-10 Students)</th>
                                            <th className="p-4 font-bold text-blue-900">Premium Tier (11+ Students)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">Diploma (Malaysia / China)</td>
                                            <td className="p-4 text-gray-600">$300 / student</td>
                                            <td className="p-4 text-gray-600 font-semibold text-blue-700">$450 / student</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">Bachelor's Degree</td>
                                            <td className="p-4 text-gray-600">$500 / student</td>
                                            <td className="p-4 text-gray-600 font-semibold text-blue-700">$750 / student</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">Master's Degree</td>
                                            <td className="p-4 text-gray-600">$600 / student</td>
                                            <td className="p-4 text-gray-600 font-semibold text-blue-700">$900 / student</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">MBBS Programs (China)</td>
                                            <td className="p-4 text-gray-600">$800 / student</td>
                                            <td className="p-4 text-gray-600 font-semibold text-green-600">$1,200 / student</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Support Button */}
            <a 
                href="https://wa.me/601116695249" // Extracted from Footer contact info
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] hover:scale-110 transition-all z-50 flex items-center justify-center group"
                aria-label="Agent Support via WhatsApp"
            >
                <MessageCircle size={32} />
                <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Agent Support
                </span>
            </a>
        </div>
    );
}
