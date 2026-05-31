"use server";

import { Resend } from "resend";

// Debug logging for production
console.log("[DEBUG] Environment check:", {
    hasKey: !!process.env.RESEND_API_KEY,
    keyLength: process.env.RESEND_API_KEY?.length,
    keyPrefix: process.env.RESEND_API_KEY?.substring(0, 3),
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(k => k.includes('RESEND'))
});

export async function submitContactForm(formData: FormData) {
    console.log('=== CONTACT FORM SERVER ACTION CALLED ===');
    console.log('FormData received');

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    console.log('Form data extracted:', { name, email, phone, service, message });

    if (!name || !email || !message) {
        console.log('Validation failed - missing fields');
        return { success: false, error: "Missing required fields" };
    }

    // Resend will handle API key validation and provide error if missing

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // 1. Send email to Admin (You)
        const adminEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: "nextpathglobal058@gmail.com", // Your email
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (adminEmailResult.error) {
            console.error("Admin email error:", adminEmailResult.error);
            return {
                success: false,
                error: "Failed to send notification email. Please try again or contact us directly."
            };
        }

        // 2. Send confirmation email to User
        const clientEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: email,
            subject: "We received your message! - Next Path Global",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to Next Path Global. We have received your message regarding <strong>${service}</strong>.</p>
        <p>Our team will review your inquiry and get back to you as soon as possible.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>Next Path Global Team</strong></p>
        <p>NextPath Global Sdn Bhd<br />Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>
      `,
        });

        if (clientEmailResult.error) {
            console.error("Client email error:", clientEmailResult.error);
            // Admin email was sent, so we can still consider this a partial success
            return {
                success: true,
                warning: "Your message was received, but we couldn't send a confirmation email. We'll contact you soon."
            };
        }

        return { success: true };
    } catch (error) {
        console.error("=== CONTACT FORM RESEND API ERROR ===");
        console.error("Full error object:", error);
        console.error("Error type:", typeof error);
        console.error("Error constructor:", error?.constructor?.name);

        if (error && typeof error === 'object') {
            console.error("Error keys:", Object.keys(error));
            console.error("Error stringified:", JSON.stringify(error, null, 2));
        }

        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        console.error("=== END ERROR ===");

        // Provide more specific error message based on error type
        if (error instanceof Error) {
            if (error.message.includes("API key")) {
                return {
                    success: false,
                    error: "Email service configuration error. Please contact the administrator."
                };
            }
            return {
                success: false,
                error: `Failed to send email: ${error.message}`
            };
        }

        return {
            success: false,
            error: "An unexpected error occurred. Please try again or contact us directly."
        };
    }
}

const serviceLabels: Record<string, string> = {
    "mm2h": "MM2H (Malaysia My 2nd Home)",
    "pvip": "PVIP (Premium Visa Programs)",
    "professional-visa": "Professional Visa (Employment Pass)",
    "study-malaysia": "Study Malaysia",
    "europe-work-permit": "Europe Work Permit",
    "tourist-visa": "Tourist Visa",
    "air-ticket": "Air Ticket Booking",
    "refund": "Refund Request",
    "general": "General Query",
};

const meetingModeLabels: Record<string, string> = {
    "in-person": "In-Person",
    "zoom": "Zoom Call",
    "phone": "Phone Call",
};

export async function submitAppointmentForm(formData: FormData) {
    console.log('=== SERVER ACTION CALLED ===');
    console.log('FormData received');

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const nationality = formData.get("nationality") as string;
    const address = formData.get("address") as string;
    const service = formData.get("service") as string;
    const preferredDate = formData.get("preferredDate") as string;
    const preferredTime = formData.get("preferredTime") as string;
    const meetingMode = formData.get("meetingMode") as string;

    console.log('Form data extracted:', { fullName, email, phone, nationality, service, preferredDate, preferredTime, meetingMode });

    if (!fullName || !email || !phone || !nationality || !service || !preferredDate || !preferredTime || !meetingMode) {
        console.log('Validation failed - missing fields');
        return { success: false, error: "Missing required fields" };
    }

    // Resend will handle API key validation and provide error if missing

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceLabel = serviceLabels[service] || service;
    const meetingModeLabel = meetingModeLabels[meetingMode] || meetingMode;
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    try {
        // 1. Send email to Admin
        const adminEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: "nextpathglobal058@gmail.com",
            subject: `New Appointment Request from ${fullName} - ${serviceLabel}`,
            html: `
        <h2>New Appointment Request</h2>
        <h3>Personal Details</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        
        <h3>Service Requested</h3>
        <p><strong>Service Type:</strong> ${serviceLabel}</p>
        
        <h3>Appointment Details</h3>
        <p><strong>Preferred Date:</strong> ${formattedDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Meeting Mode:</strong> ${meetingModeLabel}</p>
      `,
        });

        if (adminEmailResult.error) {
            console.error("Admin email error:", adminEmailResult.error);
            return {
                success: false,
                error: "Failed to send notification email. Please try again or contact us directly."
            };
        }

        // 2. Send confirmation email to Client
        const clientEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: email,
            subject: "Appointment Request Received - Next Path Global",
            html: `
        <h2>Hi ${fullName},</h2>
        <p>Thank you for your appointment request! Our team is reviewing your information for <strong>${serviceLabel}</strong>.</p>
        
        <h3>Your Requested Appointment</h3>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p><strong>Mode:</strong> ${meetingModeLabel}</p>
        
        <p>We will send a confirmation email with your appointment details within 24 hours.</p>
        
        <p>If you have an urgent query, please contact us at:</p>
        <p><strong>+60 11 1669 5249</strong> or <strong>+60 17 828 3135</strong></p>
        
        <br />
        <p>Best regards,</p>
        <p><strong>Next Path Global Team</strong></p>
        <p>NextPath Global Sdn Bhd<br />Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>
      `,
        });

        if (clientEmailResult.error) {
            console.error("Client email error:", clientEmailResult.error);
            // Admin email was sent, so we can still consider this a partial success
            return {
                success: true,
                warning: "Your request was received, but we couldn't send a confirmation email. We'll contact you soon."
            };
        }

        return { success: true };
    } catch (error) {
        console.error("=== RESEND API ERROR ===");
        console.error("Full error object:", error);
        console.error("Error type:", typeof error);
        console.error("Error constructor:", error?.constructor?.name);

        if (error && typeof error === 'object') {
            console.error("Error keys:", Object.keys(error));
            console.error("Error stringified:", JSON.stringify(error, null, 2));
        }

        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        console.error("=== END ERROR ===");

        // Provide more specific error message based on error type
        if (error instanceof Error) {
            if (error.message.includes("API key")) {
                return {
                    success: false,
                    error: "Email service configuration error. Please contact the administrator."
                };
            }
            return {
                success: false,
                error: `Failed to send email: ${error.message}`
            };
        }

        return {
            success: false,
            error: "An unexpected error occurred. Please try again or contact us directly."
        };
    }
}

const budgetLabels: Record<string, string> = {
    low: "BDT 5–7 lac / year (Entry-level programs)",
    mid: "BDT 7–10 lac / year (Standard programs)",
    high: "BDT 10–15 lac / year (Premium programs)",
};

export async function submitAssessmentForm(formData: FormData) {
    console.log("=== ASSESSMENT FORM SERVER ACTION CALLED ===");
    console.log("FormData received");

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const waCode = formData.get("wa-code") as string;
    const waNum = formData.get("wa-num") as string;
    
    const sscGrade = formData.get("ssc-grade") as string;
    const sscYear = formData.get("ssc-year") as string;
    const hscGrade = formData.get("hsc-grade") as string;
    const hscYear = formData.get("hsc-year") as string;
    const bachGrade = formData.get("bach-grade") as string;
    const bachYear = formData.get("bach-year") as string;
    const mastersGrade = formData.get("masters-grade") as string;
    const mastersYear = formData.get("masters-year") as string;

    const program = formData.get("program") as string;
    const country = formData.get("country") as string;
    const course = formData.get("course") as string;
    const budget = formData.get("budget") as string;

    console.log("Form data extracted:", { name, email, waCode, waNum, sscGrade, sscYear, hscGrade, hscYear, program, country, course, budget });

    if (!name || !email || !waCode || !waNum || !sscGrade || !sscYear || !program || !country || !course || !budget) {
        console.log("Validation failed - missing fields");
        return { success: false, error: "Missing required fields" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const budgetLabel = budgetLabels[budget] || budget;
    const waNumber = `${waCode} ${waNum}`;

    try {
        // 1. Send email to Admin
        const adminEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: "nextpathglobal058@gmail.com",
            subject: `New Student Assessment Submission from ${name}`,
            html: `
                <h2>New Student Assessment Submission</h2>
                <h3>Personal Details</h3>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>WhatsApp Number:</strong> ${waNumber}</p>
                
                <h3>Academic Background</h3>
                <p><strong>SSC Result:</strong> ${sscGrade} (Passing Year: ${sscYear})</p>
                <p><strong>HSC Result:</strong> ${hscGrade ? `${hscGrade} (Passing Year: ${hscYear})` : "Not applicable"}</p>
                <p><strong>Bachelor Result:</strong> ${bachGrade ? `${bachGrade} (Passing Year: ${bachYear})` : "Not applicable"}</p>
                <p><strong>Masters Result:</strong> ${mastersGrade ? `${mastersGrade} (Passing Year: ${mastersYear})` : "Not applicable"}</p>
                
                <h3>Program & Budget Preferences</h3>
                <p><strong>Preferred Program:</strong> ${program}</p>
                <p><strong>Preferred Destination Country:</strong> ${country}</p>
                <p><strong>Desired Course:</strong> ${course}</p>
                <p><strong>Annual Tuition Budget:</strong> ${budgetLabel}</p>
            `,
        });

        if (adminEmailResult.error) {
            console.error("Admin email error:", adminEmailResult.error);
            return {
                success: false,
                error: "Failed to send assessment details. Please try again or contact us directly."
            };
        }

        // 2. Send confirmation email to Client
        const clientEmailResult = await resend.emails.send({
            from: "Next Path Global <noreply@nextpathglobal.my>",
            to: email,
            subject: "We received your assessment details! - Next Path Global",
            html: `
                <h2>Hi ${name},</h2>
                <p>Thank you for submitting your student assessment details to Next Path Global. We have successfully received your information.</p>
                
                <h3>Your Assessment Summary</h3>
                <p><strong>Preferred Program:</strong> ${program}</p>
                <p><strong>Preferred Destination Country:</strong> ${country}</p>
                <p><strong>Desired Course:</strong> ${course}</p>
                <p><strong>Annual Tuition Budget:</strong> ${budgetLabel}</p>
                <p><strong>WhatsApp Number:</strong> ${waNumber}</p>
                
                <p>Our academic advisors will evaluate your results and contact you on WhatsApp within 24 hours to discuss the best university and pathway options for you.</p>
                
                <br />
                <p>Best regards,</p>
                <p><strong>Next Path Global Team</strong></p>
                <p>NextPath Global Sdn Bhd<br />Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>
            `,
        });

        if (clientEmailResult.error) {
            console.error("Client email error:", clientEmailResult.error);
            return {
                success: true,
                warning: "Your details were received, but we couldn't send a confirmation email. We'll contact you soon."
            };
        }

        return { success: true };
    } catch (error) {
        console.error("=== ASSESSMENT FORM RESEND API ERROR ===");
        console.error(error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unexpected error occurred."
        };
    }
}



