"use client";

import React, { useState } from "react";
import { submitFreeRegistrationForm } from "@/app/actions";
import { User, Globe, MapPin, Send, Loader2, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

const COUNTRY_OPTIONS = [
    "Portugal",
    "Czech Republic",
    "Romania",
    "Bosnia",
    "Serbia",
    "Belarus",
];

const COUNTRY_CODES = [
    { code: "+880", country: "Bangladesh 🇧🇩" },
    { code: "+60", country: "Malaysia 🇲🇾" },
    { code: "+91", country: "India 🇮🇳" },
    { code: "+92", country: "Pakistan 🇵🇰" },
    { code: "+971", country: "UAE 🇦🇪" },
    { code: "+966", country: "Saudi Arabia 🇸🇦" },
    { code: "+974", country: "Qatar 🇶🇦" },
    { code: "+965", country: "Kuwait 🇰🇼" },
    { code: "+968", country: "Oman 🇴🇲" },
    { code: "+44", country: "UK 🇬🇧" },
    { code: "+1", country: "USA/Canada 🇺🇸" },
];

export default function FreeRegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [formValues, setFormValues] = useState({
        name: "",
        nationality: "",
        targetCountry: "",
        whatsappCode: "+880",
        whatsappNumber: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);

        // Basic client validation
        if (!formValues.name.trim()) {
            setErrorMessage("Please enter your name.");
            return;
        }
        if (!formValues.nationality.trim()) {
            setErrorMessage("Please enter your nationality.");
            return;
        }
        if (!formValues.targetCountry) {
            setErrorMessage("Please select the country you want to apply to.");
            return;
        }
        if (!formValues.whatsappNumber.trim()) {
            setErrorMessage("Please enter your WhatsApp number.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("name", formValues.name);
        formData.append("nationality", formValues.nationality);
        formData.append("targetCountry", formValues.targetCountry);
        formData.append("whatsappCode", formValues.whatsappCode);
        formData.append("whatsappNumber", formValues.whatsappNumber);
        formData.append("email", formValues.email);

        const result = await submitFreeRegistrationForm(formData);

        setIsSubmitting(false);

        if (result.success) {
            setIsSubmitted(true);
        } else {
            setErrorMessage(result.error || "Failed to submit registration. Please try again.");
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Registration Submitted Successfully!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you <span className="font-semibold text-gray-900">{formValues.name}</span>. We have received your application request for{" "}
                    <span className="font-semibold text-primary">{formValues.targetCountry}</span>. Our team will contact you on WhatsApp at{" "}
                    <span className="font-semibold text-gray-900">{formValues.whatsappCode} {formValues.whatsappNumber}</span> within 24 hours.
                </p>

                <div className="bg-emerald-50 rounded-2xl p-4 text-emerald-800 text-sm max-w-md mx-auto border border-emerald-100">
                    💡 Need immediate assistance? Contact our team directly on WhatsApp.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                    <a
                        href={`https://wa.me/601116695249?text=Hi%2C%20I%20just%20completed%20Free%20Registration%20for%20${encodeURIComponent(formValues.targetCountry)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                        <MessageSquare size={18} />
                        Chat on WhatsApp Now
                    </a>
                    <button
                        type="button"
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormValues({
                                name: "",
                                nationality: "",
                                targetCountry: "",
                                whatsappCode: "+880",
                                whatsappNumber: "",
                                email: "",
                            });
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-all"
                    >
                        Submit Another Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
            <div className="border-b border-gray-100 pb-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Free Registration Form</h2>
                <p className="text-gray-500 text-sm mt-1">Fill in the required information below to get started.</p>
            </div>

            {errorMessage && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <User size={18} />
                        </div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formValues.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full bg-gray-50/70 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Nationality */}
                <div>
                    <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nationality <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Globe size={18} />
                        </div>
                        <input
                            id="nationality"
                            name="nationality"
                            type="text"
                            required
                            value={formValues.nationality}
                            onChange={handleChange}
                            placeholder="e.g. Bangladeshi, Indian, Pakistani, etc."
                            className="w-full bg-gray-50/70 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Country want to apply */}
                <div>
                    <label htmlFor="targetCountry" className="block text-sm font-semibold text-gray-700 mb-2">
                        Country want to apply <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <MapPin size={18} />
                        </div>
                        <select
                            id="targetCountry"
                            name="targetCountry"
                            required
                            value={formValues.targetCountry}
                            onChange={handleChange}
                            className="w-full bg-gray-50/70 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled>-- Select Destination Country --</option>
                            {COUNTRY_OPTIONS.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* WhatsApp Number */}
                <div>
                    <label htmlFor="whatsappNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                        WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-2">
                        <select
                            name="whatsappCode"
                            value={formValues.whatsappCode}
                            onChange={handleChange}
                            className="bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none transition-all cursor-pointer shrink-0"
                        >
                            {COUNTRY_CODES.map((c) => (
                                <option key={c.code} value={c.code}>
                                    {c.code} ({c.country})
                                </option>
                            ))}
                        </select>
                        <input
                            id="whatsappNumber"
                            name="whatsappNumber"
                            type="tel"
                            required
                            value={formValues.whatsappNumber}
                            onChange={handleChange}
                            placeholder="123456789"
                            className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Email (Optional) */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-gray-400 font-normal">(Optional for email confirmation)</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="yourname@example.com"
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                    {isSubmitting ? (
                        <>
                            <span>Submitting Registration...</span>
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                    ) : (
                        <>
                            <span>Complete Free Registration</span>
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    🔒 By submitting this form, you agree to receive consultation and application assistance from Next Path Global via WhatsApp/Email.
                </p>
            </form>
        </div>
    );
}
