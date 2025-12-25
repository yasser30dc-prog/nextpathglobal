"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Send,
    Loader2,
    CheckCircle,
    AlertCircle,
    User,
    Calendar,
    Briefcase
} from "lucide-react";
import { submitAppointmentForm } from "@/app/actions";

// Country list for nationality dropdown
const countries = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
    "Bahrain", "Bangladesh", "Belgium", "Bhutan", "Brazil", "Brunei", "Bulgaria",
    "Cambodia", "Canada", "Chile", "China", "Colombia", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Egypt", "Estonia", "Ethiopia", "Finland",
    "France", "Germany", "Ghana", "Greece", "Hong Kong", "Hungary", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", "Lithuania",
    "Luxembourg", "Macau", "Malaysia", "Maldives", "Mexico", "Mongolia", "Morocco",
    "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman",
    "Pakistan", "Palestine", "Papua New Guinea", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Singapore",
    "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka",
    "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Thailand", "Tunisia",
    "Turkey", "UAE", "UK", "Ukraine", "USA", "Uzbekistan", "Vietnam", "Yemen", "Zimbabwe"
];

const services = [
    { value: "mm2h", label: "MM2H (Malaysia My 2nd Home)" },
    { value: "pvip", label: "PVIP (Premium Visa Programs)" },
    { value: "professional-visa", label: "Professional Visa (Employment Pass)" },
    { value: "europe-work-permit", label: "Europe Work Permit" },
    { value: "tourist-visa", label: "Tourist Visa" },
    { value: "air-ticket", label: "Air Ticket Booking" },
    { value: "refund", label: "Refund Request" },
    { value: "general", label: "General Query" },
];

const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

const meetingModes = [
    { value: "in-person", label: "In-Person" },
    { value: "zoom", label: "Zoom Call" },
    { value: "phone", label: "Phone Call" },
];

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    nationality: string;
    address: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    meetingMode: string;
}

const initialFormData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    address: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    meetingMode: "",
};

export default function AppointmentForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateStep = (currentStep: number): boolean => {
        switch (currentStep) {
            case 1:
                return !!(formData.fullName && formData.email && formData.phone && formData.nationality);
            case 2:
                return !!formData.service;
            case 3:
                return !!(formData.preferredDate && formData.preferredTime && formData.meetingMode);
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(prev => Math.min(prev + 1, 3));
            setError(null);
        } else {
            setError("Please fill in all required fields");
        }
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
        setError(null);
    };

    const handleSubmit = async () => {
        if (!validateStep(3)) {
            setError("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            console.log('=== FORM SUBMISSION START ===');
            const submitData = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                submitData.append(key, value);
                console.log(`Form field: ${key} = ${value}`);
            });

            console.log('Calling submitAppointmentForm...');
            const result = await submitAppointmentForm(submitData);
            console.log('Result received:', result);

            if (result.success) {
                console.log('✅ Success!');
                setIsSuccess(true);
            } else {
                console.error('❌ Server returned error:', result.error);
                setError(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('❌ Exception caught:', error);
            console.error('Error type:', typeof error);
            console.error('Error details:', error);
            setError("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
            console.log('=== FORM SUBMISSION END ===');
        }
    };

    const getServiceLabel = () => {
        const service = services.find(s => s.value === formData.service);
        return service?.label || formData.service;
    };

    // Get minimum date (tomorrow)
    const getMinDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg text-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Thank You for Your Request!
                </h2>
                <p className="text-gray-600 text-lg mb-6 max-w-lg mx-auto">
                    Our team is reviewing your information for <span className="font-semibold text-primary">{getServiceLabel()}</span>.
                    We will send a confirmation email with your appointment details within 24 hours.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                        If you have an urgent query, please contact us at:
                    </p>
                    <p className="font-semibold text-primary mt-2">
                        +60 11 1669 5249 &amp; +60 17 462 7457
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= num
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-500"
                                    }`}
                            >
                                {step > num ? (
                                    <CheckCircle size={20} />
                                ) : num === 1 ? (
                                    <User size={18} />
                                ) : num === 2 ? (
                                    <Briefcase size={18} />
                                ) : (
                                    <Calendar size={18} />
                                )}
                            </div>
                            <span className={`text-xs mt-2 font-medium ${step >= num ? "text-primary" : "text-gray-400"}`}>
                                {num === 1 ? "Personal" : num === 2 ? "Service" : "Schedule"}
                            </span>
                        </div>
                        {num < 3 && (
                            <div className={`flex-1 h-1 mx-2 rounded ${step > num ? "bg-primary" : "bg-gray-200"}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 flex items-center gap-2">
                    <AlertCircle size={20} />
                    <p>{error}</p>
                </div>
            )}

            {/* Form Steps */}
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => updateField("fullName", e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                    placeholder="+60 12 345 6789"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="nationality" className="block text-sm font-medium text-gray-600 mb-2">
                                Nationality <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="nationality"
                                value={formData.nationality}
                                onChange={(e) => updateField("nationality", e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                required
                            >
                                <option value="">Select your nationality</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Current Residential Address
                            </label>
                            <textarea
                                value={formData.address}
                                onChange={(e) => updateField("address", e.target.value)}
                                rows={3}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                placeholder="Street, City, Country"
                            />
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Service Selection</h3>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-2">
                                Type of Service Requested <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="service"
                                value={formData.service}
                                onChange={(e) => updateField("service", e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                required
                            >
                                <option value="">Select a service</option>
                                {services.map((service) => (
                                    <option key={service.value} value={service.value}>
                                        {service.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Service description */}
                        {formData.service && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-primary/5 rounded-lg border border-primary/20"
                            >
                                <p className="text-gray-700">
                                    You have selected: <span className="font-semibold text-primary">{getServiceLabel()}</span>
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Scheduling</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Preferred Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={(e) => updateField("preferredDate", e.target.value)}
                                    min={getMinDate()}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-600 mb-2">
                                    Preferred Time Slot <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={(e) => updateField("preferredTime", e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {timeSlots.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Mode of Meeting <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {meetingModes.map((mode) => (
                                    <button
                                        key={mode.value}
                                        type="button"
                                        onClick={() => updateField("meetingMode", mode.value)}
                                        className={`p-4 rounded-lg border-2 transition-all font-medium ${formData.meetingMode === mode.value
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                                            }`}
                                    >
                                        {mode.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Appointment Summary */}
                        {formData.preferredDate && formData.preferredTime && formData.meetingMode && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-50 rounded-lg border border-green-200"
                            >
                                <p className="text-green-700 font-medium">Appointment Summary:</p>
                                <p className="text-green-600 mt-1">
                                    {new Date(formData.preferredDate).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })} at {formData.preferredTime} via {meetingModes.find(m => m.value === formData.meetingMode)?.label}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                {step > 1 ? (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        <ChevronLeft size={20} />
                        Back
                    </button>
                ) : (
                    <div />
                )}

                {step < 3 ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Next
                        <ChevronRight size={20} />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                Submitting...
                                <Loader2 size={20} className="animate-spin" />
                            </>
                        ) : (
                            <>
                                Submit Request
                                <Send size={20} />
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
