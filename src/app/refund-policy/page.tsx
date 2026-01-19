import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy - Next Path Global",
    description: "Refund Policy for NextPath Global Sdn Bhd - Learn about our refund terms, non-refundable fees, and payment policies.",
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Refund Policy
                    </h1>
                    <p className="text-lg text-gray-600">
                        NextPath Global Sdn Bhd
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            At NextPath Global Sdn Bhd, we believe in doing things the right way—clear terms, honest process, no confusion later. By making any payment to us, the client agrees to the following Refund Policy.
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

                    {/* 2. Non-Refundable Fees */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. Non-Refundable Fees
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            The following payments are strictly non-refundable once invoiced or paid:
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

                    {/* 3. Visa / Work Permit Rejection or Delay */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. Visa / Work Permit Rejection or Delay
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Approval or rejection of visas and work permits is solely determined by the relevant embassy, immigration department, or government authority.</li>
                            <li>In case of rejection, delay, or request for additional documents, no refund will be issued for any fees already paid.</li>
                            <li>NextPath Global Sdn Bhd shall not be held responsible for decisions made by any authority or third party.</li>
                        </ul>
                    </section>

                    {/* 4. Client Withdrawal or Cancellation */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. Client Withdrawal or Cancellation
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>If the client withdraws, cancels, or discontinues the application at any stage after payment, no refund shall be provided.</li>
                            <li>This includes changes of mind, personal reasons, failure to submit documents, or delays caused by the client.</li>
                        </ul>
                    </section>

                    {/* 5. Third-Party & Government Payments */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Third-Party &amp; Government Payments
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Any fees paid to third parties or government bodies (including immigration, labor departments, embassies, insurance providers, institutions, or agents) are non-refundable under all circumstances.
                        </p>
                    </section>

                    {/* 6. Partial Refunds (If Applicable) */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. Partial Refunds (If Applicable)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Partial refunds are not guaranteed and may only be considered at the sole discretion of NextPath Global Sdn Bhd, provided that:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                            <li>Processing has not started, and</li>
                            <li>No submission or third-party payment has been made</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Approved refunds, if any, may be subject to administrative deductions.
                        </p>
                    </section>

                    {/* 7. Refund Processing (If Approved) */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Refund Processing (If Approved)
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Approved refunds will be processed through the original payment method or a company-approved mode.</li>
                            <li>Processing time may take 14–30 working days, depending on internal and banking procedures.</li>
                        </ul>
                    </section>

                    {/* 8. Final Authority */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Final Authority
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            NextPath Global Sdn Bhd reserves the final right to interpret, amend, and enforce this Refund Policy at any time without prior notice.
                        </p>
                    </section>
                </div>

                {/* Last Updated */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Last updated: 19th January 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
