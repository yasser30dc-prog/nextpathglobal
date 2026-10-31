import type { Metadata } from "next";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import PartnerApplicationForm from "./PartnerApplicationForm";
import PartnerFaq from "./PartnerFaq";
import {
    ShieldCheck,
    CheckCircle2,
    Users,
    GraduationCap,
    DollarSign,
    Clock,
    ArrowRight,
    Sparkles,
    MessageCircle,
    FileText,
    Check,
    Globe,
    Building2,
    BookOpen,
    Compass,
    Headphones,
    Award,
    BadgePercent,
    PhoneCall,
    HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Become a Partner | B2B Education & Agent Programme | NextPath Global",
    description:
        "Teachers, lecturers and education professionals: join NextPath Global as an official B2B partner. Guide students to top universities in Malaysia, Europe, and China, and grow your income through education.",
    alternates: {
        canonical: "https://nextpathglobal.my/become-a-partner",
    },
    openGraph: {
        title: "Become a Partner | NextPath Global Education & Agent Programme",
        description:
            "Turn your teaching network into a partnership that pays. Collaborate with NextPath Global to guide students to premier global universities and earn transparent commissions.",
        url: "https://nextpathglobal.my/become-a-partner",
        type: "website",
        images: [
            {
                url: "/assets/agent-portal-hero.webp",
                width: 1200,
                height: 630,
                alt: "NextPath Global Become a Partner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Become an Education Partner | NextPath Global",
        description:
            "Join NextPath Global as a B2B partner. Guide students to world-class universities and earn rewarding commissions.",
        images: ["/assets/agent-portal-hero.webp"],
    },
};

export default function BecomeAPartnerPage() {
    const breadcrumbItems = [
        { name: "Become a Partner", url: "/become-a-partner" },
    ];

    const audienceList = [
        {
            title: "Individual Teachers & Tutors",
            desc: "You mentor students every day and understand their academic aspirations before anyone else. Monetize your student guidance ethically by connecting them with accredited universities abroad.",
            icon: BookOpen,
            tag: "High Trust with Families",
        },
        {
            title: "Lecturers & Academic Trainers",
            desc: "University faculty, department lecturers, and college instructors guiding undergraduates toward Master's degrees, PhDs, specialized diplomas, and international credit transfers.",
            icon: GraduationCap,
            tag: "Higher Ed & Postgrad Focus",
        },
        {
            title: "Education Consultants & Counsellors",
            desc: "Independent study-abroad counselors and freelance advisers looking for direct institutional representation with 50+ universities, rapid offer letter turnaround, and guaranteed payouts.",
            icon: Compass,
            tag: "Full Agency Backing",
        },
        {
            title: "Coaching Centers & Community Mentors",
            desc: "Language academy directors, coaching center heads, alumni mentors, and youth leaders with an active network of students and parents seeking reliable overseas education guidance.",
            icon: Building2,
            tag: "Bulk Student Referrals",
        },
    ];

    const benefits = [
        {
            title: "Earnings You Can See",
            desc: "Lucrative, transparent commission structure on every enrolled student or successful visa case. Documented clearly in writing with zero hidden deductions or surprise fees.",
            icon: DollarSign,
            badge: "Direct Bank Payouts",
        },
        {
            title: "End-to-End Processing & Support",
            desc: "Our senior admissions officers handle all university correspondence, document translation, student visa submissions (EMGS), and arrival coordination.",
            icon: Headphones,
            badge: "Dedicated Admissions Desk",
        },
        {
            title: "Work On Your Own Schedule",
            desc: "Total flexibility. Collaborate alongside your regular teaching hours, lecturing schedule, or consulting practice with no strict referral quotas.",
            icon: Clock,
            badge: "100% Flexible",
        },
        {
            title: "Ready-Made Marketing Materials",
            desc: "Instant access to official university brochures, entry requirement cheat sheets, course comparisons, fee schedules, and customizable presentation decks.",
            icon: FileText,
            badge: "Turnkey Collateral",
        },
        {
            title: "A Prestigious Global Network",
            desc: "Direct representation agreements with 50+ top universities in Malaysia (Sunway, APU, Taylor's, UCSI, MAHSA), Spanish institutions, and accredited Chinese universities.",
            icon: Globe,
            badge: "50+ Institutional Partners",
        },
        {
            title: "Clear, Fair Terms & Formal MOU",
            desc: "We issue a formal B2B partnership agreement guaranteeing full attribution of your student referrals, lifetime tracking integrity, and transparent payment schedules.",
            icon: Award,
            badge: "Legal B2B Protection",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* ── 1. Hero Section ── */}
            <section className="relative bg-[#0d1e38] text-white pt-10 pb-20 md:pb-28 overflow-hidden">
                {/* Background Hero Image with Deep Navy Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
                    style={{ backgroundImage: "url('/assets/agent-portal-hero.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a182d]/95 via-[#0d213f]/85 to-[#0d1e38]" />

                {/* Decorative glow spheres */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl px-4 py-1.5 mb-8 border border-white/15">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                <span>Official B2B Education & Partner Programme</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                                Turn your teaching network into a{" "}
                                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                                    partnership that pays.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                                NextPath Global works with teachers, lecturers, tutors, and education professionals who want to help students find their way to world-class universities — and earn rewarding, transparent commissions from it.
                            </p>

                            {/* Trust Pill Indicators */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                                    <div className="text-amber-400 font-bold text-sm sm:text-base">100% Free</div>
                                    <div className="text-xs text-blue-200/80">No join fees</div>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                                    <div className="text-amber-400 font-bold text-sm sm:text-base">50+ Uni</div>
                                    <div className="text-xs text-blue-200/80">Direct tie-ups</div>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                                    <div className="text-amber-400 font-bold text-sm sm:text-base">24–48h</div>
                                    <div className="text-xs text-blue-200/80">Fast review</div>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                                    <div className="text-amber-400 font-bold text-sm sm:text-base">Direct</div>
                                    <div className="text-xs text-blue-200/80">Bank payouts</div>
                                </div>
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                                <a
                                    href="#apply"
                                    className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-200 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 text-base cursor-pointer"
                                >
                                    <span>Apply to Become a Partner</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://wa.me/601116695249?text=Hello%20NextPath%20Global!%20I%20am%20interested%20in%20becoming%20an%20Education%20Partner%20or%20Agent."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 text-base"
                                >
                                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                                    <span>Chat with Partner Desk</span>
                                </a>
                            </div>

                            <p className="text-xs text-blue-200/70 pt-1">
                                Free to apply. Zero upfront fees. We reply to every application.
                            </p>
                        </div>

                        {/* Hero Right: Modern Portal & Partner Preview Box */}
                        <div className="lg:col-span-5">
                            <div className="relative mx-auto max-w-md bg-white/10 backdrop-blur-xl p-7 sm:p-9 rounded-3xl border border-white/20 shadow-2xl text-white">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/30 border border-blue-400/40 flex items-center justify-center text-blue-200">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/80 border border-blue-400 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> B2B Partner Portal
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
                                    Agent & Partner Portal
                                </h2>

                                <p className="text-sm text-blue-100/90 leading-relaxed mb-6 font-light">
                                    Join our corporate partner network today. Submit student applications, access 50+ official university pathways, and track commissions with full transparency.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Direct submissions for Malaysia, Europe & China</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Itemized commission statements on every intake</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>One-on-one Partner Manager via WhatsApp & email</span>
                                    </div>
                                </div>

                                <a
                                    href="#apply"
                                    className="w-full py-3.5 px-5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                                >
                                    <span>Register as a Partner Below</span>
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. Who We're Looking For ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                            <Users className="w-3.5 h-3.5" /> Target Audience
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Who We’re Looking For
                        </h2>
                        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
                            You already have the trust of students and parents. We give you a world-class university portfolio, admissions machinery, and reward structure to build on it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {audienceList.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-primary/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[11px] font-bold tracking-wider uppercase text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full inline-block mb-3">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pt-5 mt-5 border-t border-gray-200/60 flex items-center text-xs font-semibold text-primary">
                                        <span>Ideal Partner Profile</span>
                                        <Check className="w-4 h-4 ml-1.5 text-emerald-600" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 3. What You Get as a Partner (Benefits Grid) ── */}
            <section className="py-20 bg-slate-50 border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Partner Value Proposition
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            What You Get as a NextPath Partner
                        </h2>
                        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
                            We provide complete administrative, marketing, and processing infrastructure so you can focus on helping students choose the right pathway.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b) => {
                            const Icon = b.icon;
                            return (
                                <div
                                    key={b.title}
                                    className="bg-white rounded-3xl p-7 border-l-4 border-l-amber-400 border-t border-r border-b border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                                                {b.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {b.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {b.desc}
                                        </p>
                                    </div>
                                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center text-xs text-emerald-700 font-semibold gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>Guaranteed in Partnership MOU</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 5. Requirements & About NextPath Global ── */}
            <section className="py-20 bg-slate-50 border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                        {/* Left Card: Requirements */}
                        <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                                    <BadgePercent className="w-3.5 h-3.5" /> Eligibility Criteria
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                    Partner Requirements
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                                    We keep qualification simple and focused on authentic relationships. You should:
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Work in education as a teacher, lecturer, trainer, tutor, school administrator, or independent educational consultant.",
                                        "Have an active, genuine network of students, parents, or aspiring scholars seeking overseas study or residency.",
                                        "Be based in target applicant regions (such as Malaysia, Bangladesh, South Asia, Middle East, Central Asia, or globally).",
                                        "Maintain professional, prompt communication standards via WhatsApp and email.",
                                        "Commit to ethical, transparent guidance that puts the student's academic future first.",
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 font-bold" />
                                            </div>
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 p-4 bg-blue-50/70 rounded-2xl border border-blue-100 text-xs sm:text-sm text-blue-900">
                                💡 <strong>Individual or corporate:</strong> Whether you are an individual teacher with 5 students or an agency with 100, we welcome your partnership.
                            </div>
                        </div>

                        {/* Right Card: About NextPath Global */}
                        <div className="lg:col-span-6 bg-gradient-to-br from-[#0d1e38] to-[#12284c] text-white rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
                                    <Building2 className="w-3.5 h-3.5" /> Corporate Credentials
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                                    About NextPath Global
                                </h2>
                                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                    NextPath Global Sdn Bhd (ROC: 1637994-A / SSM 202501036584) is a licensed, premier education consulting, immigration, and global mobility firm headquartered in Kuala Lumpur with an established operational hub in Dhaka, Bangladesh.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-amber-400 font-extrabold text-2xl">50+</div>
                                        <div className="text-xs text-blue-200 mt-0.5">Partner Institutions</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-amber-400 font-extrabold text-2xl">98%+</div>
                                        <div className="text-xs text-blue-200 mt-0.5">Visa Success Rate</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-amber-400 font-extrabold text-2xl">2 Hubs</div>
                                        <div className="text-xs text-blue-200 mt-0.5">KL & Dhaka Offices</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-amber-400 font-extrabold text-2xl">100%</div>
                                        <div className="text-xs text-blue-200 mt-0.5">Transparent Attribution</div>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                    We maintain direct partnership agreements with leading public and private universities across Malaysia, European pathway providers, and accredited institutions in China. Our processing desk manages files with complete precision from initial offer letter to visa approval.
                                </p>
                            </div>

                            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-200">
                                <span>Corporate HQ: The Intermark, Vista Tower, Kuala Lumpur</span>
                                <span className="font-semibold text-amber-300">Registered Malaysian Entity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Application Form Section ── */}
            <section className="py-20 bg-gradient-to-b from-amber-500/10 via-white to-slate-50 scroll-mt-20" id="apply">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Form Context / Pitch Left */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-300/40">
                                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Apply Today
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                Apply to Become an Education Partner
                            </h2>

                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Tell us a little about yourself and your student network. Our Senior Partner Relations Manager will review your application and contact you within 24–48 hours with our partner agreement, commission schedules, and full university marketing kits.
                            </p>

                            <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4">
                                <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    Why partner with NextPath Global?
                                </h3>
                                <ul className="space-y-2.5 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Highest industry commission tiers with prompt disbursement</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Complete paperwork & student visa processing done by us</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Full marketing brochure library & customizable decks</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Zero cost, zero risk — 100% free to join anytime</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Direct WhatsApp Callout */}
                            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-200 text-emerald-950">
                                <h4 className="font-bold text-sm mb-1 flex items-center gap-2 text-emerald-900">
                                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                                    Prefer to discuss directly on WhatsApp?
                                </h4>
                                <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                                    Connect with our Kuala Lumpur Partner Desk for immediate answers regarding commission tiers and institutional representation.
                                </p>
                                <a
                                    href="https://wa.me/601116695249?text=Hello%20NextPath%20Global!%20I%20would%20like%20to%20inquire%20about%20becoming%20an%20Education%20Partner."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" /> Message KL Partner Desk (+60 11-1669 5249)
                                </a>
                            </div>
                        </div>

                        {/* Form Component Right */}
                        <div className="lg:col-span-7">
                            <PartnerApplicationForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. FAQ Section ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Questions Partners Ask
                        </h2>
                        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
                            Everything you need to know about partnering with NextPath Global, commissions, and student processing.
                        </p>
                    </div>

                    <PartnerFaq />
                </div>
            </section>

            {/* ── 8. Direct Helpdesk & Office Locations Strip ── */}
            <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                                Need Immediate Assistance?
                            </span>
                            <h3 className="text-xl font-bold text-white">
                                Speak Directly with Our Partner Desk
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                Our regional partner managers in KL and Dhaka are available on WhatsApp and phone.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                            <p className="font-bold text-amber-300 mb-1 flex items-center justify-center md:justify-start gap-1.5">
                                <PhoneCall className="w-3.5 h-3.5" /> Corporate Office (Kuala Lumpur)
                            </p>
                            <p className="text-gray-300 text-xs mb-2">Level 41, The Intermark, Vista Tower, KL</p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <a
                                    href="https://wa.me/601116695249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-1 rounded-lg text-xs"
                                >
                                    +60 11 1669 5249
                                </a>
                                <a
                                    href="https://wa.me/60172965249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-1 rounded-lg text-xs"
                                >
                                    +60 17 296 5249
                                </a>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                            <p className="font-bold text-amber-300 mb-1 flex items-center justify-center md:justify-start gap-1.5">
                                <PhoneCall className="w-3.5 h-3.5" /> Bangladesh Operations Hub (Dhaka)
                            </p>
                            <p className="text-gray-300 text-xs mb-2">House No. 18, Road No. 11, Dhaka-1229</p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <a
                                    href="https://wa.me/8801402179802"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-1 rounded-lg text-xs"
                                >
                                    +880 1402 179802
                                </a>
                                <a
                                    href="https://wa.me/8801410237495"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-1 rounded-lg text-xs"
                                >
                                    +880 1410 237495
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
