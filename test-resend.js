import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
    try {
        console.log('Testing Resend API...');
        console.log('API Key:', process.env.RESEND_API_KEY ? 'Set (length: ' + process.env.RESEND_API_KEY.length + ')' : 'Not set');

        const result = await resend.emails.send({
            from: 'Next Path Global <onboarding@resend.dev>',
            to: 'nextpathglobal058@gmail.com',
            subject: 'Test Email from Next Path Global',
            html: '<h1>Test Email</h1><p>This is a test email to verify Resend API is working.</p>',
        });

        console.log('✅ Success! Email sent:', result);
    } catch (error) {
        console.error('❌ Error:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
    }
}

testResend();
