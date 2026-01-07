"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Contact <span className="text-primary">Us</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Get in touch with our expert consultants to start your global journey today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Visit Us</h4>
                                        <p className="text-gray-600">NextPath Global Sdn Bhd<br />Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak,<br />Kampung Datuk Keramat, 50400 Kuala Lumpur,<br />Federal Territory of Kuala Lumpur</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Call Us</h4>
                                        <p className="text-gray-600">+60 11 1669 5249</p>
                                        <p className="text-gray-600">+60 17 462 7457</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Email Us</h4>
                                        <p className="text-gray-600">hello@nextpathglobal.my</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                                <a
                                    href="https://www.google.com/maps/place/The+Intermark/@3.1613799,101.72279131475766,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc37d3a837f637:0x4a6c3a2a81de0d90!8m2!3d3.16138!4d101.7253662!16s%2Fg%2F11bw3y8p0v"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
                                >
                                    View larger map
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                            <div className="h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <iframe
                                    src="https://www.google.com/maps?q=NextPath+Global+Sdn+Bhd,+Level+41+The+Intermark+Vista+Tower,+Jalan+Tun+Razak,+Kuala+Lumpur&output=embed&z=17"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="NextPath Global Office Location - The Intermark, Kuala Lumpur"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
