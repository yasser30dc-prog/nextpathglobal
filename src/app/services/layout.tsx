import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Our Services - Immigration, Visa & Education Consulting',
    description: 'Comprehensive immigration, visa, and education consulting services including tourist visas, study abroad programs, PVIP, MM2H, and more.',
    url: '/services',
    keywords: [
        'immigration services',
        'visa services',
        'education consulting',
        'tourist visa',
        'study abroad',
        'PVIP',
        'MM2H',
        'visa consulting Malaysia',
    ],
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
