"use client";

import HeroScene from "@/components/3d/HeroScene";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Briefcase, Globe, ShieldCheck, Plane, CheckCircle2, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    title: "Study Abroad",
    description: "Expert guidance for your study abroad journey.",
    icon: <GraduationCap size={40} className="text-primary" />,
    link: "/services/study-abroad",
  },
  {
    title: "Tourist Visa",
    description: "Explore the world with ease and comfort.",
    icon: <Plane size={40} className="text-primary" />,
    link: "/services/tourist-visa",
  },
  {
    title: "Immigration",
    description: "Seamless immigration processes for you and your family.",
    icon: <Globe size={40} className="text-primary" />,
    link: "/services",
  },
  {
    title: "Employment Pass",
    description: "Professional work permits for skilled workers in Malaysia.",
    icon: <ShieldCheck size={40} className="text-primary" />,
    link: "/services/employment-pass",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Your Gateway to <br />
            <span className="text-primary">Global Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Expert guidance for students looking to study in Malaysia, UK, Australia, Finland and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More About {service.title} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Banner (Mid-Page) */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
             Not sure where to start? Talk to our education counsellor — it's free.
          </h2>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <MessageCircle size={24} /> Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Who We Are Section (Linker) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-500 font-semibold tracking-wider uppercase text-sm border-b-2 border-primary pb-1">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-gray-900">
                Who We Are ?
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                We are more than just a consultancy or travel service provider, we are a trusted partner in life-changing journeys
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a student consultancy, we guide ambitious learners toward academic excellence. From counselling to admissions and visa assistance, we stand beside our students with honesty and professionalism.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As a travel agency, we open doors to the world with safe, reliable, and memorable travel experiences for education, business, or leisure. We aspire to shape a brighter future.
              </p>

              <Link
                href="/about"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md text-lg font-semibold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Learn More About NextPath Global <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 h-64 rounded-2xl overflow-hidden relative shadow-lg group">
                  <Image
                    src="/assets/home/consultancy.png"
                    alt="Consultation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Expert Consultation</div>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg group">
                  <Image
                    src="/assets/home/travel.png"
                    alt="Travel"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Global Travel</div>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg group">
                  <Image
                    src="/assets/home/global.png"
                    alt="Global Opportunities"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Visa Success</div>
                </div>
              </div>

              {/* Certified Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-2xl">
                <div className="border-2 border-dashed border-primary rounded-full p-4 w-32 h-32 flex items-center justify-center bg-white">
                  <div className="text-center">
                    <ShieldCheck size={40} className="text-primary mx-auto mb-1" />
                    <span className="text-xs font-bold text-primary block">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-5xl">🌟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              At NextPath Global, we don't just provide services—we create life-changing journeys.
              Here's why students and travelers trust us:
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {[
              {
                title: "Experienced & Ethical Consultancy",
                description: "Built on years of hands-on experience, we follow honest practices and provide guidance that puts your future first — no shortcuts, no false promises."
              },
              {
                title: "Strong University & Visa Knowledge",
                description: "We stay updated with university requirements and visa policies, ensuring you receive accurate, practical advice that works in today's system."
              },
              {
                title: "Transparent Process",
                description: "From consultation to final outcome, every step is clear, documented, and explained — you always know what's happening and why."
              },
              {
                title: "Trusted by Students & Professionals",
                description: "Our reputation is built on real results, long-term relationships, and the trust of students and professionals who choose us with confidence."
              },
              {
                title: "Commitment to Success",
                description: "We handle every case with dedication and responsibility, staying focused on one goal — achieving the best possible outcome for your journey."
              },
              {
                title: "Comprehensive Support",
                description: "From your first inquiry to final approval, we provide complete end-to-end support so you're never left guessing at any stage."
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              With NextPath Global, you're not just choosing a service—you're choosing a partner who walks
              with you on the path to <span className="text-primary font-bold">knowledge</span>,
              {" "}<span className="text-secondary font-bold">opportunity</span>, and
              {" "}<span className="text-primary font-bold">discovery</span>.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Free Consultation Banner (Bottom) */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
             Not sure where to start? Talk to our education counsellor — it's free.
          </h2>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <MessageCircle size={24} /> Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Journey?</h2>
              <p className="text-gray-600">
                Contact us today for a free consultation. We are here to help you every step of the way.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
