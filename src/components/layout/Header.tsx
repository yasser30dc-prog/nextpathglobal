"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchModal from "@/components/SearchModal";

interface NavLink {
    name: string;
    href: string;
    subMenu?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
        name: "Study Malaysia",
        href: "/services/study-abroad",
        subMenu: [
            { name: "Overview", href: "/services/study-abroad" },
            { name: "Universities", href: "/study-malaysia/universities" },
            { name: "Colleges", href: "/study-malaysia/colleges" },
            { name: "University Colleges", href: "/study-malaysia/university-colleges" },
        ]
    },
    { name: "Tourist Visa", href: "/services/tourist-visa" },
    { name: "MM2H", href: "/services/mm2h" },
    { name: "PVIP", href: "/services/pvip" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="relative w-40 h-12">
                    <Image
                        src="/assets/logo-transparent.png"
                        alt="Next Path Global"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.subMenu && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {link.subMenu ? (
                                <>
                                    <button
                                        className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                                            >
                                                {link.subMenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    {/* Search Button */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="text-gray-700 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full"
                        aria-label="Search"
                    >
                        <Search size={20} />
                    </button>
                    <Link
                        href="/book-appointment"
                        className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
                    >
                        Book Appointment
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg p-6 md:hidden border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto"
                    >
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.subMenu ? (
                                        <>
                                            <button
                                                onClick={() => setMobileExpandedMenu(
                                                    mobileExpandedMenu === link.name ? null : link.name
                                                )}
                                                className="w-full flex items-center justify-between text-gray-700 hover:text-primary text-lg font-medium py-2"
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform ${mobileExpandedMenu === link.name ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {mobileExpandedMenu === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 border-l-2 border-primary/20 ml-2 mb-2">
                                                            {link.subMenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="block py-2 text-gray-600 hover:text-primary"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block text-gray-700 hover:text-primary text-lg font-medium py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            {/* Mobile Search Button */}
                            <button
                                onClick={() => {
                                    setIsSearchOpen(true);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 text-gray-700 hover:text-primary text-lg font-medium py-2 w-full"
                            >
                                <Search size={20} />
                                <span>Search Services</span>
                            </button>
                            <Link
                                href="/book-appointment"
                                className="bg-primary text-white text-center py-3 rounded-lg font-medium mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}
