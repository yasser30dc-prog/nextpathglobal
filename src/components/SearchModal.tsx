"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Search data structure
const searchData = [
    {
        category: "Visa Services",
        items: [
            { name: "Tourist Visa", description: "Hassle-free tourist visa processing for your dream vacations", href: "/services/tourist-visa", keywords: ["tourist", "vacation", "travel", "holiday"] },
            { name: "Employment Pass", description: "Professional work permits for skilled workers in Malaysia", href: "/services/employment-pass", keywords: ["work", "employment", "job", "professional", "EP", "work permit"] },
            { name: "Student Visa", description: "Comprehensive support for students aspiring to study abroad", href: "/services", keywords: ["student", "study", "education", "university"] },
        ]
    },
    {
        category: "Residency Programs",
        items: [
            { name: "MM2H Programme", description: "Malaysia My Second Home - Long-term residency with 5-20 year visa options", href: "/services/mm2h", keywords: ["mm2h", "malaysia my second home", "residency", "retirement", "long term"] },
            { name: "PVIP Programme", description: "Premium Visa Programme - 20-year residency for global investors", href: "/services/pvip", keywords: ["pvip", "premium", "investor", "investment", "20 year"] },
        ]
    },
    {
        category: "Education",
        items: [
            { name: "Study Abroad", description: "Your gateway to world-class education in Malaysia", href: "/services/study-abroad", keywords: ["study", "education", "university", "college", "abroad", "international"] },
            { name: "Universities", description: "Browse Malaysian universities for international students", href: "/study-malaysia/universities", keywords: ["university", "higher education", "degree", "bachelor", "master"] },
            { name: "Colleges", description: "Explore colleges in Malaysia", href: "/study-malaysia/colleges", keywords: ["college", "diploma", "certificate", "vocational"] },
            { name: "University Colleges", description: "University colleges offering diverse programs", href: "/study-malaysia/university-colleges", keywords: ["university college", "programs", "courses"] },
        ]
    },
    {
        category: "Other Services",
        items: [
            { name: "Immigration", description: "Permanent residency and immigration pathways", href: "/services", keywords: ["immigration", "permanent residency", "PR", "migrate"] },
            { name: "Business Visa", description: "Facilitating global business travel and expansion", href: "/services", keywords: ["business", "corporate", "entrepreneur"] },
            { name: "Document Attestation", description: "Legalization and attestation of documents for international use", href: "/services", keywords: ["document", "attestation", "legalization", "notary"] },
        ]
    },
    {
        category: "Information",
        items: [
            { name: "About Us", description: "Learn more about Next Path Global", href: "/about", keywords: ["about", "company", "who we are"] },
            { name: "Contact", description: "Get in touch with our team", href: "/contact", keywords: ["contact", "email", "phone", "reach us"] },
            { name: "Blog", description: "Latest news and updates", href: "/blog", keywords: ["blog", "news", "articles", "updates"] },
        ]
    }
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<typeof searchData>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle search
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults(searchData);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = searchData.map(category => ({
            category: category.category,
            items: category.items.filter(item => {
                const nameMatch = item.name.toLowerCase().includes(query);
                const descMatch = item.description.toLowerCase().includes(query);
                const keywordMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(query));
                return nameMatch || descMatch || keywordMatch;
            })
        })).filter(category => category.items.length > 0);

        setSearchResults(filtered);
    }, [searchQuery]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[70] px-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            {/* Search Input */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Search services, visas, programs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-14 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <X size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Search Results */}
                            <div className="max-h-[60vh] overflow-y-auto p-6">
                                {searchResults.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Search className="mx-auto mb-4 text-gray-300" size={48} />
                                        <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                                        <p className="text-gray-400 text-sm mt-2">Try searching for visa, study, or residency</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {searchResults.map((category, idx) => (
                                            <div key={idx}>
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                                    {category.category}
                                                </h3>
                                                <div className="space-y-2">
                                                    {category.items.map((item, itemIdx) => (
                                                        <Link
                                                            key={itemIdx}
                                                            href={item.href}
                                                            onClick={onClose}
                                                            className="block p-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all group"
                                                        >
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div className="flex-1">
                                                                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                    <p className="text-sm text-gray-600">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                                <ArrowRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" size={20} />
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>Press <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">ESC</kbd> to close</span>
                                    <span>{searchResults.reduce((acc, cat) => acc + cat.items.length, 0)} results</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
