import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Visa & Immigration',
    description: 'Expert insights on Malaysian visa programs, residency options like MM2H and PVIP, and comprehensive immigration guidance for foreigners.',
    url: '/blog/visa-immigration',
    keywords: [
        'Malaysia visa',
        'MM2H',
        'PVIP',
        'Malaysia residency',
        'immigration Malaysia',
        'Malaysia visa programs',
        'long-term visa Malaysia',
        'Malaysia immigration guide',
    ],
});

export default function VisaImmigrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
