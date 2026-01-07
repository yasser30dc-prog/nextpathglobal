import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

// Custom TikTok icon since lucide-react doesn't have one
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

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
                            Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/npg058/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our Facebook page"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/npg058/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our Instagram profile"><Instagram size={20} /></a>
                            <a href="https://www.tiktok.com/@npg0058" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our TikTok account"><TikTokIcon size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/mm2h" className="text-gray-600 hover:text-primary transition-colors">MM2H Programme</Link></li>
                            <li><Link href="/services/pvip" className="text-gray-600 hover:text-primary transition-colors">PVIP Programme</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Student Visa</Link></li>
                            <li><Link href="/services/tourist-visa" className="text-gray-600 hover:text-primary transition-colors">Tourist Visa</Link></li>
                            <li><Link href="/services/study-abroad" className="text-gray-600 hover:text-primary transition-colors">Study Abroad</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Work Permit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/why-choose-us" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</Link></li>
                            <li><Link href="/payment-methods" className="text-gray-600 hover:text-primary transition-colors">Payment Methods</Link></li>
                            <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Contact</h3>
                        <div className="space-y-4 text-gray-600">
                            <p className="leading-relaxed">
                                NextPath Global Sdn Bhd<br />
                                Level 41, The Intermark, Vista Tower,<br />
                                384, Jln Tun Razak, Kampung Datuk Keramat,<br />
                                50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
                            </p>
                            <p>+60 11 1669 5249</p>
                            <p>hello@nextpathglobal.my</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} NextPath Global Sdn Bhd. All rights reserved.
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
