import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'PVIP - Professional Visit & Immigration Pass',
    description: 'Professional Visit and Immigration Pass (PVIP) services for Malaysia. Expert assistance with PVIP applications, documentation, and processing.',
    url: '/services/pvip',
    keywords: [
        'PVIP',
        'Professional Visit Pass',
        'Immigration Pass Malaysia',
        'work permit Malaysia',
        'professional visa',
        'Malaysia work visa',
        'PVIP application',
    ],
});

export default function PVIPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
