import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-900 pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="relative block w-48 h-16 mb-6">
                            <Image
                                src="/assets/logo-transparent.png"
                                alt="Next Path Global"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-600 mb-6">
                            Your trusted partner for immigration and visa consulting services. We help you navigate the path to your global dreams.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/npg058/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="https://twitter.com/nextpathglobal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="https://linkedin.com/company/nextpathglobal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="https://instagram.com/nextpathglobal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/mm2h" className="text-gray-600 hover:text-primary transition-colors">MM2H Programme</Link></li>
                            <li><Link href="/services/pvip" className="text-gray-600 hover:text-primary transition-colors">PVIP Programme</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Student Visa</Link></li>
                            <li><Link href="/services/tourist-visa" className="text-gray-400 hover:text-primary transition-colors">Tourist Visa</Link></li>
                            <li><Link href="/services/study-abroad" className="text-gray-400 hover:text-primary transition-colors">Study Abroad</Link></li>
                            <li><Link href="/services/mm2h" className="text-gray-400 hover:text-primary transition-colors">MM2H Program</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Work Permit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Latest News</Link></li>
                            <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Contact</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>Vista Tower, The Intermark</li>
                            <li>Kuala Lumpur, Malaysia</li>
                            <li>+60 11 1669 5249</li>
                            <li>hello@nextpathglobal.my</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Next Path Global. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
