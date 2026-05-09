import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Refund Policy - Next Path Global",
    description: "Refund Policy for NextPath Global Sdn Bhd - Learn about our 90-day refund terms, non-refundable fees, and payment policies.",
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            {/* Hero Section with Cover Photo */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/refund/refund-cover.png"
                        alt="Trust and transparency - NextPath Global Refund Policy"
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
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/15 text-white font-semibold text-sm mb-6 backdrop-blur-sm border border-white/20">
                            90-Day Refund Window
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
                            Refund <span className="text-secondary">Policy</span>
                        </h1>
                        <p className="text-white/85 max-w-2xl mx-auto text-lg drop-shadow-md">
                            NextPath Global Sdn Bhd — Clear terms, honest process, and a standard 90-day refund policy for all cases.
                        </p>
                    </div>
                </div>

                {/* Bottom fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50 to-transparent z-[3]" />
            </section>

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                {/* 90-Day Refund Highlight Banner */}
                <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 md:p-10 mb-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                            <span className="text-3xl font-bold">90</span>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">90-Day Refund Policy</h2>
                            <p className="text-white/90 text-lg leading-relaxed">
                                For all cases, NextPath Global Sdn Bhd applies a standard <strong>90-day refund window</strong> from the date of payment. Refund requests must be submitted within this period to be considered eligible for review.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            At NextPath Global Sdn Bhd, we believe in doing things the right way—clear terms, honest process, no confusion later. By making any payment to us, the client agrees to the following Refund Policy. All refund requests are subject to our standard <strong className="text-primary">90-day refund window</strong> from the date of payment.
                        </p>
                    </section>

                    {/* 1. Scope of This Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            1. Scope of This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            This policy applies to all payments made to NextPath Global Sdn Bhd, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Application fees</li>
                            <li>Work permit application fees</li>
                            <li>Embassy / High Commission fees</li>
                            <li>Visa approval letter fees (Student/Tourist)</li>
                            <li>Insurance fees (Domestic/International)</li>
                            <li>Professional service charges (only if mentioned on the official invoice)</li>
                        </ul>
                    </section>

                    {/* 2. 90-Day Refund Window */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. 90-Day Refund Window
                        </h2>
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-4">
                            <p className="text-gray-700 leading-relaxed mb-3">
                                <strong>For every case, refund requests must be submitted within 90 days from the date of payment.</strong> Any refund request received after the 90-day window will not be entertained under any circumstances.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>The 90-day period begins from the date of the client&apos;s initial payment</li>
                                <li>Refund requests must be submitted in writing via email to our official address</li>
                                <li>Requests will be reviewed within 7–14 working days of receipt</li>
                                <li>This 90-day window applies universally to all services without exception</li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. Non-Refundable Fees */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. Non-Refundable Fees
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Even within the 90-day window, the following payments are strictly non-refundable once invoiced or paid:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Work permit application fees, once processing or submission has begun</li>
                            <li>Embassy / High Commission fees, regardless of approval, rejection, delay, or withdrawal</li>
                            <li>Visa approval letter fees once processing has started or documents have been submitted</li>
                            <li>Insurance fees once the policy has been issued or activated</li>
                            <li>Application fees after submission to the relevant authority</li>
                            <li>Service charges once work has commenced (consultation, documentation review, filing, submission, follow-ups, coordination, etc.)</li>
                        </ul>
                    </section>

                    {/* 4. Visa / Work Permit Rejection or Delay */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. Visa / Work Permit Rejection or Delay
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Approval or rejection of visas and work permits is solely determined by the relevant embassy, immigration department, or government authority.</li>
                            <li>In case of rejection, delay, or request for additional documents, no refund will be issued for any fees already paid.</li>
                            <li>NextPath Global Sdn Bhd shall not be held responsible for decisions made by any authority or third party.</li>
                        </ul>
                    </section>

                    {/* 5. Client Withdrawal or Cancellation */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Client Withdrawal or Cancellation
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>If the client withdraws, cancels, or discontinues the application at any stage after payment, no refund shall be provided.</li>
                            <li>This includes changes of mind, personal reasons, failure to submit documents, or delays caused by the client.</li>
                            <li>Cancellation requests received within the 90-day refund window and before processing begins may be considered for a partial refund at the company&apos;s discretion.</li>
                        </ul>
                    </section>

                    {/* 6. Third-Party & Government Payments */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. Third-Party &amp; Government Payments
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Any fees paid to third parties or government bodies (including immigration, labor departments, embassies, insurance providers, institutions, or agents) are non-refundable under all circumstances, regardless of the 90-day refund window.
                        </p>
                    </section>

                    {/* 7. Partial Refunds (If Applicable) */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Partial Refunds (If Applicable)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Partial refunds are not guaranteed and may only be considered at the sole discretion of NextPath Global Sdn Bhd, provided that:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                            <li>The request is made within the 90-day refund window</li>
                            <li>Processing has not started, and</li>
                            <li>No submission or third-party payment has been made</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Approved refunds, if any, may be subject to administrative deductions.
                        </p>
                    </section>

                    {/* 8. Refund Processing (If Approved) */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Refund Processing (If Approved)
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Approved refunds will be processed through the original payment method or a company-approved mode.</li>
                            <li>Processing time may take 14–30 working days, depending on internal and banking procedures.</li>
                        </ul>
                    </section>

                    {/* 9. Final Authority */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Final Authority
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            NextPath Global Sdn Bhd reserves the final right to interpret, amend, and enforce this Refund Policy at any time without prior notice.
                        </p>
                    </section>
                </div>

                {/* Last Updated */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Last updated: 9th May 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
