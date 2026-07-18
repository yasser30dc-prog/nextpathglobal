import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
    title: 'Student Life in Malaysia',
    description: 'Practical guides, cost breakdown, culture, campus life, and tips for international students living and studying in Malaysia.',
    url: '/blog/student-life',
    keywords: [
        'Student life Malaysia',
        'cost of living Malaysia student',
        'studying in Malaysia experience',
        'international student guide Malaysia',
        'campus life Malaysia',
        'KL student budget',
    ],
});

export default function StudentLifeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
