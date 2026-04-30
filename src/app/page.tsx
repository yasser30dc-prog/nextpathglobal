"use client";

import HeroScene from "@/components/3d/HeroScene";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin,
  Building,
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
import { useState } from "react";

const destinations = [
  { name: "UK", flag: "🇬🇧", link: "/services/study-abroad/uk" },
  { name: "Australia", flag: "🇦🇺", link: "/services/study-abroad/australia" },
  { name: "Canada", flag: "🇨🇦", link: "/services/study-abroad/canada" },
  { name: "Malaysia", flag: "🇲🇾", link: "/services/study-malaysia" },
  { name: "Europe", flag: "🇪🇺", link: "/services/study-abroad/europe" },
];

const malaysianColleges = [
  { name: "Taylor's University", image: "/assets/home/taylors.png" },
  { name: "Sunway University", image: "/assets/home/sunway.png" },
  { name: "Monash University", image: "/assets/home/monash.png" },
  { name: "APU Malaysia", image: "/assets/home/apu.png" },
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
          <div className="max-w-3xl">
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
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-wider uppercase text-sm border-b-2 border-secondary pb-1">Study in Malaysia</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-primary">
                World-Class Education in the Heart of Asia
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Malaysia offers affordable tuition, a multicultural environment, and globally recognized degrees. Partner with us to enroll in top-ranking universities and secure your student visa with ease.
              </p>
              <ul className="space-y-4 mb-10">
                {['Affordable living and tuition costs', 'English-taught programs globally recognized', 'Safe and diverse multicultural environment', 'Seamless student visa processing'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/study-malaysia"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Colleges <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {malaysianColleges.map((college, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center aspect-square hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">{college.name}</h3>
                 </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Tourist Visa Widget Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform -translate-y-4 md:-translate-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary/20 p-3 rounded-full text-secondary">
                    <Plane size={24} />
                  </span>
                  <h2 className="text-3xl font-bold text-primary">Tourist Visa</h2>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning a trip?</h3>
                <p className="text-gray-600">Select your destination and let us handle your visa process smoothly and efficiently.</p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                  <div className="space-y-2">
                     <label className="font-semibold text-gray-700 text-sm">Where are you going?</label>
                     <select 
                        value={touristDestination}
                        onChange={(e) => setTouristDestination(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none bg-white text-gray-800"
                     >
                       <option value="">Select your destination →</option>
                       <option value="china">China</option>
                       <option value="japan">Japan</option>
                       <option value="europe">Europe (Schengen)</option>
                       <option value="australia">Australia</option>
                       <option value="usa">USA</option>
                       <option value="uk">United Kingdom</option>
                     </select>
                  </div>
                  <Link 
                     href={touristDestination ? `/services/tourist-visa/${touristDestination}` : '#'} 
                     className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full transition-all"
                  >
                     <Search size={20} /> Check Requirements
                  </Link>
                </div>
              </div>
            </div>
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
                   Learn More <ArrowRight size={20} />
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
