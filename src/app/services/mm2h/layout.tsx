import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'MM2H - Malaysia My Second Home Program',
    description: 'Malaysia My Second Home (MM2H) program consulting services. Expert guidance for MM2H visa applications, requirements, and long-term residency in Malaysia.',
    url: '/services/mm2h',
    keywords: [
        'MM2H',
        'Malaysia My Second Home',
        'MM2H visa',
        'Malaysia residency',
        'long-term visa Malaysia',
        'retirement visa Malaysia',
        'MM2H application',
        'MM2H requirements',
    ],
});

export default function MM2HLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
