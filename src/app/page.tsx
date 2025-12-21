"use client";

import HeroScene from "@/components/3d/HeroScene";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Globe, ShieldCheck, Plane } from "lucide-react";
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
    title: "Work Permit",
    description: "Secure your dream job in international markets.",
    icon: <ShieldCheck size={40} className="text-primary" />,
    link: "/services",
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
            Next Path Global provides expert immigration and visa consulting services to help you achieve your dreams abroad.
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
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
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
                READ MORE <ArrowRight size={20} />
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
                  <img
                    src="/assets/home/consultancy.png"
                    alt="Consultation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Expert Consultation</div>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg group">
                  <img
                    src="/assets/home/travel.png"
                    alt="Travel"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Global Travel</div>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden relative shadow-lg group">
                  <img
                    src="/assets/home/global.png"
                    alt="Global Opportunities"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">
              What Clients Say About Us <br className="hidden md:block" /> and Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Daniel Groveria",
                role: "Student",
                quote: "Travellers from countries categorized under the high-risk list who are eligible to enter Germany, aged 12 and older, are obliged to present their vaccination certificates.",
                rating: 5,
                visa: "Switzerland Visa",
              },
              {
                name: "Mohammad Ashik",
                role: "Traveller",
                quote: "Very good service. I will use their services again. Mahabub Hasan was really friendly and helped me a lot. ❤️❤️❤️",
                rating: 5,
                visa: "Thailand Visa",
              },
              {
                name: "MD SALA UDDIN",
                role: "Traveller",
                quote: "That's a very good service. Specially Mahabub brother was well person. 2 days Thailand visa confirmed. Alhamdulillah.",
                rating: 5,
                visa: "Thailand Visa",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-10 right-10 text-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 font-medium">({testimonial.visa})</span>
                </div>
              </motion.div>
            ))}
          </div>
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
