import type { Metadata } from "next";
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
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-28 pb-20">
            {/* Header / Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Breadcrumbs items={breadcrumbItems} />

                <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>100% Free Consultation & Registration</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Free Registration for <span className="text-primary">European Pathways</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                        Start your journey today. Fill in your details below to register for free and connect with our senior immigration & visa specialists.
                    </p>
                </div>

                {/* Grid Layout: Features & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Benefits & Target Countries */}
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
                                        className="p-3 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 transition-all"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-2xl">{country.flag}</span>
                                            <div>
                                                <span className="font-semibold text-gray-900 text-sm block">
                                                    {country.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className="bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
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
