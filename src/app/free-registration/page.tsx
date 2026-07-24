import type { Metadata } from "next";
import Image from "next/image";
import FreeRegistrationForm from "./FreeRegistrationForm";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { CheckCircle2, ShieldCheck, Clock, Sparkles, Globe2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Free Registration | Next Path Global",
    description: "Register for free to apply for visa and work permit programs in Portugal, Czech Republic, Romania, Bosnia, Serbia, and Belarus with Next Path Global.",
    openGraph: {
        title: "Free Registration | Next Path Global",
        description: "Apply for European visa & work permit pathways with free registration and expert guidance.",
        url: "https://nextpathglobal.my/free-registration",
        type: "website",
    },
};

export default function FreeRegistrationPage() {
    const breadcrumbItems = [
        { name: "Free Registration", url: "/free-registration" },
    ];

    const countries = [
        { name: "Portugal", flag: "🇵🇹", desc: "Golden opportunities in Western Europe" },
        { name: "Czech Republic", flag: "🇨🇿", desc: "Heart of Central Europe & thriving economy" },
        { name: "Romania", flag: "🇷🇴", desc: "Fastest-growing job market in EU" },
        { name: "Bosnia", flag: "🇧🇦", desc: "Gateway to Southeastern Europe" },
        { name: "Serbia", flag: "🇷🇸", desc: "Vibrant hub with booming industries" },
        { name: "Belarus", flag: "🇧🇾", desc: "Strategic Eastern European destination" },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-20">
            {/* ── Top Hero Cover Section ── */}
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] overflow-hidden">
                <Image
                    src="/assets/free-registration-hero.jpg"
                    alt="Free Registration NextPath Global"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/85 via-[#0d1b2a]/65 to-gray-50" />

                {/* Hero Banner Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center pt-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f0d485] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 drop-shadow-md">
                        <Sparkles className="w-4 h-4 text-[#f0d485]" />
                        <span>100% Free Consultation & Registration</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                        Free Registration for <span className="text-[#c9a84c]">European Pathways</span>
                    </h1>

                    <p className="mt-4 text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow">
                        Start your journey today. Fill in your details below to register for free and connect with our senior immigration & visa specialists.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-6 relative z-20">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-gray-100/80 mb-8 inline-block">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Grid Layout: Target Countries/Benefits & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Target Countries & Why Register */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Globe2 className="w-5 h-5 text-primary" />
                                Available Target Countries
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {countries.map((country) => (
                                    <div
                                        key={country.name}
                                        className="p-3 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-2xl">{country.flag}</span>
                                            <div>
                                                <span className="font-semibold text-gray-900 text-sm block">
                                                    {country.name}
                                                </span>
                                                <span className="text-[11px] text-gray-500 leading-tight block">
                                                    {country.desc}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className="bg-gradient-to-br from-primary via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            <h3 className="text-xl font-bold mb-4">Why Register With Next Path Global?</h3>
                            <ul className="space-y-4 text-sm text-gray-200">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Zero Upfront Fees:</strong> Registration is 100% free with no hidden charges.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Fast 24-Hour Contact:</strong> Our dedicated consultants reach out via WhatsApp within 24 hours.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Licensed & Experienced:</strong> Official guidance tailored to your country profile and target destination.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <FreeRegistrationForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
