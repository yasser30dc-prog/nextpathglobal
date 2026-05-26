import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
  Globe,
  ShieldCheck,
  Plane,
  CheckCircle2,
  MessageCircle,
  BookOpen,
  Crown,
  Home as HomeIcon,
  Ticket,
  Hotel,
  BadgeCheck,
  FileSignature,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import TouristVisaSelector from "@/components/TouristVisaSelector";
import { partnerInstitutions } from "@/data/malaysia-partners";

const destinations = [
  { name: "UK", emoji: "🇬🇧", link: "/services/study-abroad/uk", tagline: "World-Class Universities" },
  { name: "Finland", emoji: "🇫🇮", link: "/services/study-abroad/finland", tagline: "World's Happiest Country" },
  { name: "Germany", emoji: "🇩🇪", link: "/services/study-abroad/germany", tagline: "Tuition-Free Education" },
  { name: "Malaysia", emoji: "🇲🇾", link: "/services/study-abroad/malaysia", tagline: "Affordable Excellence" },
  { name: "China", emoji: "🇨🇳", link: "/services/study-abroad/china", tagline: "Scholarships Available" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full h-full absolute inset-0 z-0">
          <Image
            src="/assets/hero-background.webp"
            alt="NextPath Global — Your Global Education Journey Starts Here"
            fill
            priority
            className="object-cover object-center"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 to-black/60 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="animate-fadeIn">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-semibold mb-6">
                  NextPath Global
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                Your Global Education <span className="text-secondary">Journey Starts Here</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
                Expert guidance for students looking to study abroad, explore the world, or advance their career in Malaysia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-xl hover:shadow-secondary/30"
                >
                  Get Free Consultation <ArrowRight size={20} />
                </Link>
                <Link
                  href="#destinations"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-2"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 hidden md:block">
              <TouristVisaSelector />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Destination Selector */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Where Do You Want to Study?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from top educational destinations worldwide and start your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {destinations.map((dest, index) => (
              <div key={index}>
                <Link href={dest.link} className="group block text-center">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-secondary/40 transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                    {/* Emoji Flag Banner */}
                    <div className="relative h-24 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <span className="text-6xl leading-none select-none" role="img" aria-label={`${dest.name} flag`}>
                        {dest.emoji}
                      </span>
                    </div>
                    {/* Name & Tagline */}
                    <div className="p-4">
                      <h3 className="font-extrabold text-gray-900 text-base group-hover:text-primary transition-colors leading-tight">
                        {dest.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 leading-tight">{dest.tagline}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Professional Services Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm bg-secondary/10 px-4 py-2 rounded-full">
              Comprehensive Global Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-6 text-primary tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Certified visa, immigration, study consultancy, and corporate setups designed to support your international transition.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-16">
            {[
              {
                categoryName: "Global Education & Residency",
                description: "Explore top academic institutions and premium golden residency programs.",
                services: [
                  {
                    title: "Student Consultancy",
                    description: "Comprehensive university admission and student visa support for destinations including the UK, Finland, Germany, Malaysia, and China.",
                    icon: <GraduationCap size={28} className="text-[#c9a84c]" />,
                    link: "/services/study-abroad"
                  },
                  {
                    title: "MM2H (Malaysia My Second Home)",
                    description: "Complete advisory and processing for Malaysia's standard 10-year renewable residency visa.",
                    icon: <HomeIcon size={28} className="text-[#c9a84c]" />,
                    link: "/services/mm2h"
                  },
                  {
                    title: "PVIP (Premium Visa Program)",
                    description: "Residency consultation for Malaysia's ultimate 20-year elite investor visa with business/work rights.",
                    icon: <Crown size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  }
                ]
              },
              {
                categoryName: "Corporate Mobility & Work Permits",
                description: "Expatriate employment permits and global trade structures.",
                services: [
                  {
                    title: "Employment Pass",
                    description: "End-to-end work visa sponsorship (EP Category I, II, & III) for expatriates and skilled executives in Malaysia.",
                    icon: <ShieldCheck size={28} className="text-[#c9a84c]" />,
                    link: "/services/employment-pass"
                  },
                  {
                    title: "European Work Permit Process",
                    description: "Fully compliant work permit coordination, document mapping, and immigration pathways to European nations.",
                    icon: <Globe size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  },
                  {
                    title: "Business Set Up",
                    description: "Local company incorporation (SSM), trade licensing, and foreign ownership setups for entrepreneurs.",
                    icon: <Building2 size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  }
                ]
              },
              {
                categoryName: "Travel & Worldwide Hospitality",
                description: "Quick holiday visas, booking accommodations, and competitive flight ticketers.",
                services: [
                  {
                    title: "Tourist Visa Process",
                    description: "Fast-track documentation and tourist visa processing for major destinations globally with high success rates.",
                    icon: <Plane size={28} className="text-[#c9a84c]" />,
                    link: "/services/tourist-visa"
                  },
                  {
                    title: "Air Ticket",
                    description: "Worldwide airline ticketing, customized routes, baggage upgrades, and flexible corporate packages.",
                    icon: <Ticket size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  },
                  {
                    title: "Hotel Booking (Worldwide)",
                    description: "Exclusive corporate rates and pre-screened room bookings at top hotels and stays around the globe.",
                    icon: <Hotel size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  }
                ]
              },
              {
                categoryName: "Legal & Legal Attestation Services",
                description: "Official legalizations and attestations for corporate/personal needs.",
                services: [
                  {
                    title: "Good Conduct Certificate",
                    description: "Complete assistance in obtaining police clearance certificates from domestic and international security bodies.",
                    icon: <BadgeCheck size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  },
                  {
                    title: "Document Attestation",
                    description: "MOFA attestations, degree legalisations, and notary translations of birth certificates and corporate deeds.",
                    icon: <FileSignature size={28} className="text-[#c9a84c]" />,
                    link: "/contact"
                  }
                ]
              }
            ].map((category, catIdx) => (
              <div key={catIdx} className="border-b border-gray-200/60 pb-12 last:border-b-0 last:pb-0">
                <div className="border-l-4 border-secondary pl-4 mb-8">
                  <h3 className="text-2xl font-extrabold text-primary tracking-tight">
                    {category.categoryName}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-6 bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-50 shadow-sm shrink-0">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-gray-900 tracking-tight leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <Link
                        href={service.link}
                        className="text-secondary font-semibold text-sm hover:text-secondary-hover transition-colors inline-flex items-center gap-2 group"
                      >
                        Enquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Employment Pass Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-primary rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden md:block">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
                <polygon points="0,100 100,0 100,100" />
              </svg>
            </div>
            <div className="p-10 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                  <Briefcase size={16} /> Employment Pass Specialists
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Working in Malaysia? <br />
                  <span className="text-secondary">We Handle Your Work Permit.</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Navigating employment regulations can be complex. We provide end-to-end corporate immigration services to secure your Employment Pass efficiently and compliantly.
                </p>
                <Link
                  href="/services/employment-pass"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                >
                  Explore Employment Pass Services <ArrowRight size={20} />
                </Link>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-64 h-64 bg-white/10 rounded-full items-center justify-center backdrop-blur-md border border-white/20">
                <ShieldCheck size={100} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Book Your Free Consultation Today</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Take the first step towards your global journey. Fill out the form below and our experts will reach out to you shortly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 6. WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
