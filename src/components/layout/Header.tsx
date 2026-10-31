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
        name: "Study Abroad",
        href: "/services/study-abroad",
        subMenu: [
            { name: "Student Assessment", href: "/student-assessment" },
            { name: "Malaysia", href: "/services/study-abroad/malaysia" },
            { name: "Spain", href: "/services/study-abroad/spain" },
            { name: "China", href: "/services/study-abroad/china" },
        ]
    },
    {
        name: "Tourist Visa",
        href: "/services/tourist-visa",
        subMenu: [
            { name: "From Malaysia", href: "/services/tourist-visa/from-malaysia" },
            { name: "From Bangladesh", href: "/services/tourist-visa/from-bangladesh" },
        ]
    },
    {
        name: "Residency",
        href: "#",
        subMenu: [
            { name: "MM2H", href: "/services/mm2h" },
            { name: "PVIP", href: "/services/pvip" },
            { name: "Employment Pass", href: "/services/employment-pass" },
            { name: "De Rantau / Digital Nomad Visa", href: "/services/de-rantau-digital-nomad-visa" },
            { name: "MTEP / Tech Entrepreneur Pass", href: "/services/mtep" },
            { name: "Turkey Citizenship", href: "/turkish-citizenship-by-investment" },
        ]
    },
    { name: "Business Transformation", href: "/services/business-transformation" },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3.5 glass shadow-sm" : "py-5 bg-transparent"
                }`}
        >
            <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
                <Link
                    href="/"
                    className="relative shrink-0 flex items-center w-44 sm:w-52 h-11 sm:h-12 mr-2 lg:mr-4 xl:mr-6 transition-transform hover:opacity-95"
                    aria-label="NextPath Global Home"
                >
                    <Image
                        src="/assets/logo-transparent.webp"
                        alt="NextPath Global"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-4 text-[13px] 2xl:text-sm font-medium">
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
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={activeDropdown === link.name}
                                        className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown
                                            size={15}
                                            className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
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
                                    className="text-gray-700 hover:text-primary transition-colors py-1 whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    {/* Search Button */}
                    <button
                        type="button"
                        onClick={() => setIsSearchOpen(true)}
                        className="text-gray-700 hover:text-primary transition-colors p-2 hover:bg-gray-100/80 rounded-full shrink-0"
                        aria-label="Search"
                    >
                        <Search size={19} />
                    </button>
                    <Link
                        href="/become-a-partner"
                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium whitespace-nowrap shrink-0 transition-all transform hover:scale-105 shadow-sm"
                    >
                        Become a Partner
                    </Link>
                </nav>

                {/* Mobile / Tablet Actions */}
                <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
                    <button
                        type="button"
                        onClick={() => setIsSearchOpen(true)}
                        className="text-gray-700 hover:text-primary transition-colors p-2 hover:bg-gray-100/80 rounded-full"
                        aria-label="Search"
                    >
                        <Search size={20} />
                    </button>
                    <Link
                        href="/become-a-partner"
                        className="hidden sm:inline-flex bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shadow-sm"
                    >
                        Become a Partner
                    </Link>
                    <button
                        type="button"
                        aria-expanded={isMobileMenuOpen}
                        className="text-gray-700 p-2 hover:text-primary transition-colors hover:bg-gray-100/80 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg p-6 xl:hidden border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto"
                    >
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.subMenu ? (
                                        <>
                                            <button
                                                type="button"
                                                aria-expanded={mobileExpandedMenu === link.name}
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
                                type="button"
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
                                href="/become-a-partner"
                                className="bg-primary text-white text-center py-3 rounded-lg font-medium mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Become a Partner
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
