"use client";

import { motion } from "framer-motion";
import FlightWidget from "@/components/FlightWidget";

export default function FlightBookingPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Book Your <span className="text-primary">Flights</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Find the best deals on flights worldwide with our trusted partner, Trip.com.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-md mx-auto bg-white border border-gray-100 p-8 rounded-2xl shadow-lg"
                >
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Search Flights</h2>
                    </div>
                    <FlightWidget />
                </motion.div>
            </div>
        </div>
    );
}
