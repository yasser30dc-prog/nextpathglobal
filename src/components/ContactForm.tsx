"use client";

import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) form.reset();
        } else {
            setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
        }

        setIsSubmitting(false);
    }

    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            <form action={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                    <input name="name" type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                        <input name="email" type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                        <input name="phone" type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors" placeholder="+60 12 345 6789" />
                    </div>
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-2">Service Interest</label>
                    <select id="service" name="service" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors">
                        <option value="MM2H (Malaysia My 2nd Home)">MM2H (Malaysia My 2nd Home)</option>
                        <option value="PVIP (Premium Visa Programs)">PVIP (Premium Visa Programs)</option>
                        <option value="Professional Visa (Employment Pass)">Professional Visa (Employment Pass)</option>
                        <option value="Study Malaysia">Study Malaysia</option>
                        <option value="Europe Work Permit">Europe Work Permit</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="Air Ticket Booking">Air Ticket Booking</option>
                        <option value="Refund Request">Refund Request</option>
                        <option value="General Query">General Query</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                    <textarea name="message" required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                {status.message && (
                    <div className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <p>{status.message}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>Sending... <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                        <>Send Message <Send size={20} /></>
                    )}
                </button>
            </form>
        </div>
    );
}
