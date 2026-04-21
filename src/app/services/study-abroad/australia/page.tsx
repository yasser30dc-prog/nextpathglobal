import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StudyAustraliaPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-32 pb-20 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 px-2 text-center">Study in Australia</h1>
            <p className="text-gray-600 mb-8">This page is currently under development. Please check back soon.</p>
            <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft size={20} /> Back to Home
            </Link>
        </div>
    );
}
