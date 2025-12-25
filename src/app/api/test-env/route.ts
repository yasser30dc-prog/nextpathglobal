import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        hasResendKey: !!process.env.RESEND_API_KEY,
        keyLength: process.env.RESEND_API_KEY?.length || 0,
        keyPrefix: process.env.RESEND_API_KEY?.substring(0, 3) || 'none',
        allEnvKeys: Object.keys(process.env).filter(k => k.includes('RESEND')),
        nodeEnv: process.env.NODE_ENV,
    });
}
