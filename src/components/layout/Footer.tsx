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
        role="img"
        aria-hidden="true"
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

// Custom Threads icon since lucide-react doesn't have one
const ThreadsIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-hidden="true"
    >
        <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="relative text-gray-900 pt-20 pb-10 border-t border-gray-200 overflow-hidden">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
                style={{ backgroundImage: "url('/assets/hero-background.webp')", backgroundAttachment: 'fixed' }}
            ></div>
            <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-[2px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="relative block w-52 h-14 mb-6">
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
                            <a href="https://www.facebook.com/nextpathglobal.bd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our Facebook page"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/nextpathglobal.my" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our Instagram profile"><Instagram size={20} /></a>
                            <a href="https://www.tiktok.com/@nextpathglobal.my" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our TikTok account"><TikTokIcon size={20} /></a>
                            <a href="https://www.threads.com/@nextpathglobal.my" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Visit our Threads account"><ThreadsIcon size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/turkish-citizenship-by-investment" className="text-gray-600 hover:text-primary transition-colors">Turkish Citizenship</Link></li>
                            <li><Link href="/services/mm2h" className="text-gray-600 hover:text-primary transition-colors">MM2H Programme</Link></li>
                            <li><Link href="/services/pvip" className="text-gray-600 hover:text-primary transition-colors">PVIP Programme</Link></li>
                            <li><Link href="/services/tourist-visa" className="text-gray-600 hover:text-primary transition-colors">Tourist Visa</Link></li>
                            <li><Link href="/services/study-abroad" className="text-gray-600 hover:text-primary transition-colors">Study Abroad</Link></li>
                            <li><Link href="/services/employment-pass" className="text-gray-600 hover:text-primary transition-colors">Employment Pass</Link></li>
                            <li><Link href="/services/de-rantau-digital-nomad-visa" className="text-gray-600 hover:text-primary transition-colors">De Rantau / Digital Nomad Visa</Link></li>
                            <li><Link href="/services/business-transformation" className="text-gray-600 hover:text-primary transition-colors">Business Transformation</Link></li>
                            <li><Link href="/services/mtep" className="text-gray-600 hover:text-primary transition-colors">MTEP / Tech Entrepreneur Pass</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/book-appointment" className="text-gray-600 hover:text-primary transition-colors">Book Appointment</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/free-registration" className="text-gray-600 hover:text-primary transition-colors">Free Registration</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/student-assessment" className="text-gray-600 hover:text-primary transition-colors">Student Assessment Form</Link></li>
                            <li><Link href="/why-choose-us" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</Link></li>
                            <li><Link href="/become-a-partner" className="text-gray-600 hover:text-primary transition-colors">Become a Partner</Link></li>
                            <li><Link href="/refund-policy" className="text-gray-600 hover:text-primary transition-colors">Refund Policy</Link></li>
                            <li><Link href="/payment-methods" className="text-gray-600 hover:text-primary transition-colors">Payment Methods</Link></li>
                            <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Contact</h3>
                        <div className="space-y-4 text-gray-600 text-sm">
                            <div>
                                <p className="font-bold text-gray-900 mb-1">Corporate Office:</p>
                                <p className="leading-relaxed mb-2">
                                    Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur.
                                </p>
                                <div className="flex flex-col gap-1">
                                    <a href="https://wa.me/601116695249" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                        <span>💬 +60 11 1669 5249</span>
                                    </a>
                                    <a href="https://wa.me/60172965249" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                        <span>💬 +60 17 296 5249</span>
                                    </a>
                                    <a href="https://wa.me/601125368220" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                        <span>💬 +60 11 2536 8220</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-gray-900 mb-1">Bangladesh Office:</p>
                                <p className="leading-relaxed mb-2">
                                    House No- 18, Road No- 11, Dhaka- 1229, Bangladesh.
                                </p>
                                <div className="flex flex-col gap-1">
                                    <a href="https://wa.me/8801402179802" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                        <span>💬 +880 1402 179802</span>
                                    </a>
                                    <a href="https://wa.me/8801410237495" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                        <span>💬 +88 014 1023 7495</span>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-gray-200/80 space-y-1">
                                <p className="flex items-center gap-1 flex-wrap">
                                    <a href="mailto:info@nextpathglobal.my" className="hover:text-primary transition-colors font-medium">info@nextpathglobal.my</a>
                                    <span className="text-gray-500 text-xs">(general Query)</span>
                                </p>
                                <p className="flex items-center gap-1 flex-wrap">
                                    <a href="mailto:partnerships@nextpathglobal.my" className="hover:text-primary transition-colors font-medium">partnerships@nextpathglobal.my</a>
                                    <span className="text-gray-500 text-xs">(B2B partnership)</span>
                                </p>
                            </div>
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
