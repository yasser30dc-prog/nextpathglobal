import { Metadata } from "next";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
    title: "Book Appointment | NextPath Global",
    description: "Schedule an appointment with NextPath Global for visa services, MM2H, PVIP, and more. Our team will help you with your immigration needs.",
};

export default function BookAppointment() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
            {/* Hero Section with Cover Photo */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/appointment/appointment-cover.png"
                        alt="Professional consultation at NextPath Global"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]" />
                {/* Decorative blur accents */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-[2]" />
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/15 rounded-full blur-[100px] z-[2]" />

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
                            Book an <span className="text-secondary">Appointment</span>
                        </h1>
                        <p className="text-white/85 max-w-2xl mx-auto text-lg drop-shadow-md">
                            Schedule a consultation with our experts. Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>
                </div>

                {/* Bottom fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            <div className="container mx-auto px-6 pt-8">
                <div className="max-w-2xl mx-auto">
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
}
