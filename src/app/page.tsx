"use client";

import HeroScene from "@/components/3d/HeroScene";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin,
  Building,
  Building2,
  GraduationCap, 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  Plane, 
  CheckCircle2, 
  MessageCircle,
  Search,
  BookOpen
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import StudyMalaysiaSection from "@/components/StudyMalaysiaSection";
import { useState } from "react";
import { partnerInstitutions } from "@/data/malaysia-partners";

const destinations = [
  { name: "UK", flag: "🇬🇧", link: "/services/study-abroad/uk" },
  { name: "Australia", flag: "🇦🇺", link: "/services/study-abroad/australia" },
  { name: "Canada", flag: "🇨🇦", link: "/services/study-abroad/canada" },
  { name: "Malaysia", flag: "🇲🇾", link: "/services/study-malaysia" },
  { name: "Europe", flag: "🇪🇺", link: "/services/study-abroad/europe" },
];

export default function Home() {
  const [touristDestination, setTouristDestination] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 to-black/60 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-semibold mb-6">
                  NextPath Global
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight"
              >
                Your Global Education <span className="text-secondary">Journey Starts Here</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/90 mb-10 max-w-2xl drop-shadow-md"
              >
                Expert guidance for students looking to study abroad, explore the world, or advance their career in Malaysia.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
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
              </motion.div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-secondary/20 p-3 rounded-full text-secondary">
                        <Plane size={24} />
                      </span>
                      <h2 className="text-2xl font-bold text-primary">Tourist Visa</h2>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Planning a trip?</h3>
                    <p className="text-gray-600 text-sm">Select your destination and let us handle your visa process smoothly and efficiently.</p>
                  </div>
                  <div className="w-full">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
                      <div className="space-y-2">
                         <label className="font-semibold text-gray-700 text-sm">Where are you going?</label>
                         <select 
                            value={touristDestination}
                            onChange={(e) => setTouristDestination(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none bg-white text-gray-800"
                         >
                           <option value="">Select your destination →</option>
                           <option value="china">China</option>
                           <option value="japan">Japan</option>
                           <option value="schengen">Europe (Schengen)</option>
                           <option value="australia">Australia</option>
                           <option value="usa">USA</option>
                           <option value="uk">United Kingdom</option>
                           <option value="germany">Germany</option>
                           <option value="iceland">Iceland</option>
                           <option value="india">India</option>
                           <option value="kenya">Kenya</option>
                         </select>
                      </div>
                      <Link 
                         href={touristDestination ? `/services/tourist-visa/${touristDestination}` : '#'} 
                         className="bg-secondary hover:bg-secondary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 w-full transition-all"
                      >
                         <Search size={18} /> Check Requirements
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
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
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={dest.link} className="group block text-center">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-secondary/50 transition-all duration-300 transform group-hover:-translate-y-2 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-5xl block mb-4 relative z-10 group-hover:scale-110 transition-transform">{dest.flag}</span>
                    <h3 className="font-bold text-gray-900 relative z-10 group-hover:text-primary transition-colors">{dest.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Study in Malaysia Section */}
      <StudyMalaysiaSection />



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
                   Working in Malaysia? <br/>
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
