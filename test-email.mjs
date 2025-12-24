import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log('Testing Resend with custom domain...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    try {
        const result = await resend.emails.send({
            from: 'Next Path Global <noreply@nextpathglobal.my>',
            to: 'nextpathglobal058@gmail.com',
            subject: 'Test Email - Custom Domain',
            html: '<h1>Success!</h1><p>Your custom domain email is working!</p>',
        });

        console.log('✅ Email sent successfully!');
        console.log('Result:', result);
    } catch (error) {
        console.error('❌ Error sending email:');
        console.error('Error:', error);
        if (error && typeof error === 'object') {
            console.error('Error details:', JSON.stringify(error, null, 2));
        }
    }
}

testEmail();
