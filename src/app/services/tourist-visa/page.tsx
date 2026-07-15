"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Plane, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { countries } from "../../../data/countries";

const testimonials = [
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
    {
        name: "mohiddin khan",
        role: "Local Guide",
        quote: "I highly recommend this tour and travels company! Their service is excellent, and their visa processing was incredibly fast and efficient. They are very professional and handle everything with great care, and their friendly demeanor made the entire process smooth. I'm very pleased with their assistance",
        rating: 5,
        visa: "Thailand Visa",
    },
    {
        name: "Ripat khan",
        role: "Local Guide",
        quote: "Thank you so much.especially mahabub vhaiya & yasin bro. nextpath global ur support ur guideline. I very early get visa Singapore thanks lot",
        rating: 5,
        visa: "Singapore Visa",
    },
    {
        name: "HELISTAR",
        role: "Local Guide",
        quote: "Excellent travel agency in Malaysia! Very professional, friendly service and smooth arrangements. Highly recommended!",
        rating: 5,
        visa: "Travel Services",
    },
    {
        name: "Abir Ahmed",
        role: "Client",
        quote: "Over All My Experience Excellent Work service .trusted and professional service Thank you for your service mr Mahabub sir",
        rating: 5,
        visa: "Professional Service",
    },
    {
        name: "Masud Rana1977",
        role: "Client",
        quote: "Mahabub Bhai got me a visa for Thailand, I am very happy and delighted with his service, I am very happy with his behavior.",
        rating: 5,
        visa: "Thailand Visa",
    },
    {
        name: "Md. Mahmudul Islam",
        role: "Client",
        quote: "I am so happy. Good behave. Polite & helpful service. Thanks.",
        rating: 5,
        visa: "Customer Service",
    },
    {
        name: "Chowdhury Mohammad Golam",
        role: "Client",
        quote: "Getting MM2H approval can feel overwhelming, but NextPath Global made it incredibly easy. Their team handled everything efficiently, kept communication clear throughout, and made sure every document was in perfect order before submission. No unnecessary back-and-forth, no delays — just a smooth, well-managed process from start to finish. Truly diligent professionals who know what they're doing. Highly recommended!",
        rating: 5,
        visa: "MM2H",
    },
    {
        name: "information of the world deal",
        role: "Client",
        quote: "very good service .sotti vaiya der service onek valo..amader visa korsi..tq..vai jan",
        rating: 5,
        visa: "Visa Services",
    },
    {
        name: "Arif Islam",
        role: "Client",
        quote: "I had a great experience with Nextpath Global Sdn Bhd. The service was excellent from start to finish. Everything was explained clearly and handled on time, making the whole process smooth and hassle-free. I received my Thailand e-visa very fast, which I really appreciate. A special thanks to Mahabub Hasan Vaiya for his dedication and support. He was very helpful throughout and made the entire process easy and stress-free. Highly recommended.",
        rating: 5,
        visa: "Thailand Visa",
    },
];

export default function TouristVisaPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCards, setVisibleCards] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCards(3);
            } else if (window.innerWidth >= 768) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    // Filter and sort countries alphabetically based on search query
    const filteredCountries = countries
        .filter(country =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/tourist-visa-hero.webp"
                        alt="Tourist Visa Services"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90"></div>
                </div>
                
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 z-0"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Explore The World
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Tourist Visa Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Your gateway to the world's most exciting destinations. Simple, fast, and reliable visa processing for Malaysians and residents.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search Box */}
            <section className="container mx-auto px-6 -mt-8 relative z-20 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for a country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        {searchQuery && (
                            <p className="mt-3 text-sm text-gray-600">
                                Found <span className="font-bold text-primary">{filteredCountries.length}</span> {filteredCountries.length === 1 ? 'country' : 'countries'}
                            </p>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* Country Grid */}
            <section className="container mx-auto px-6 relative z-20">
                {filteredCountries.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <Globe className="mx-auto mb-4 text-gray-300" size={64} />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No countries found</h3>
                        <p className="text-gray-600 mb-6">
                            We couldn't find any countries matching "{searchQuery}"
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-primary hover:underline font-semibold"
                        >
                            Clear search
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCountries.map((country, index) => (
                            <motion.div
                                key={country.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/services/tourist-visa/${country.slug}`} className="block group h-full">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                        <div className="h-56 bg-gray-200 relative overflow-hidden">
                                            {/* Placeholder for country cover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                            <Image
                                                src={country.coverImage}
                                                alt={country.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />

                                            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary flex items-center gap-1">
                                                <Plane size={12} className="text-primary" />
                                                {country.quickFacts.find(f => f.label === "Processing Time")?.value || "Fast"}
                                            </div>

                                            <div className="absolute bottom-6 left-6 z-20">
                                                <h2 className="text-white font-bold text-2xl mb-1 group-hover:text-primary transition-colors">
                                                    {country.name}
                                                </h2>
                                                <p className="text-gray-200 text-sm font-light">{country.tagline}</p>
                                            </div>
                                        </div>

                                        <div className="p-8 flex-grow flex flex-col">
                                            <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                                {country.description}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                                <span className="text-secondary font-bold text-lg">
                                                    {country.quickFacts.find(f => f.label === "Fee")?.value}
                                                </span>
                                                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    View Details <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-left">
              <span className="text-primary font-semibold tracking-wider uppercase text-base">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">
                What Clients Say About Us <br className="hidden md:block" /> and Our Services
              </h2>
            </div>
            {/* Navigation Arrows for Desktop */}
            <div className="hidden md:flex gap-4 mt-6 md:mt-0">
              <button 
                onClick={prevSlide}
                className="p-4 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-4 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div 
            className="relative px-1 py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * (100 / visibleCards)}%`
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{
                  width: `${(testimonials.length / visibleCards) * 100}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    style={{ width: `${100 / testimonials.length}%` }}
                    className="px-4"
                  >
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
                      {/* Quote Icon */}
                      <div className="absolute top-10 right-10 text-primary/10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                        </div>

                        <p className="text-base text-gray-600 mb-8 leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 font-medium">({testimonial.visa})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Indicators & Navigation (Mobile only) */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="md:hidden p-3 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="md:hidden p-3 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

            <section className="container mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't see your destination?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    We process visas for many other countries as well. Contact us to inquire about a specific destination not listed here.
                </p>
                <Link href="/contact" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors shadow-lg">
                    Contact Us for Custom Quote
                </Link>
            </section>
        </div>
    );
}
