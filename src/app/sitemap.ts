import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { institutions } from '@/data/institutions';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nextpathglobal.my';

    // ─── Static pages ───────────────────────────────────────────────────────
    // Use real last-modified dates so Google can properly prioritise crawling.
    // Only update these dates when the page content actually changes.
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-03-14'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/book-appointment`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/why-choose-us`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/payment-methods`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/refund-policy`,
            lastModified: new Date('2026-01-19'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-01-19'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-01-19'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // ─── Service pages ───────────────────────────────────────────────────────
    const servicePages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/services`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/tourist-visa`,
            lastModified: new Date('2026-02-17'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/study-abroad`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/pvip`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/mm2h`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/employment-pass`,
            lastModified: new Date('2026-03-14'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // ─── Tourist visa country pages ──────────────────────────────────────────
    const countries = [
        'afghanistan', 'argentina', 'azerbaijan', 'bangladesh', 'brunei', 'cambodia',
        'china', 'egypt', 'hong-kong', 'indonesia', 'japan', 'laos', 'malaysia',
        'maldives', 'myanmar', 'nepal', 'pakistan', 'papua-new-guinea', 'philippines',
        'russia', 'sabah', 'singapore', 'sri-lanka', 'thailand', 'turkey', 'vietnam'
    ];

    const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
        url: `${baseUrl}/services/tourist-visa/${country}`,
        lastModified: new Date('2026-02-17'),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // ─── Blog pages ──────────────────────────────────────────────────────────
    const blogPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/study-in-malaysia`,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/travel-tourism`,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/visa-immigration`,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/updates-announcements`,
            lastModified: new Date('2026-03-21'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ];

    // Blog post pages — use the post's actual publish date
    const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.category}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // ─── Study Malaysia pages ─────────────────────────────────────────────────
    const studyMalaysiaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/study-malaysia/universities`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/study-malaysia/university-colleges`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/study-malaysia/colleges`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Institution detail pages
    const institutionPages: MetadataRoute.Sitemap = institutions.map((institution) => {
        const basePath =
            institution.category === 'university'
                ? '/study-malaysia/universities'
                : institution.category === 'university-college'
                    ? '/study-malaysia/university-colleges'
                    : '/study-malaysia/colleges';

        return {
            url: `${baseUrl}${basePath}/${institution.slug}`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    return [
        ...staticPages,
        ...servicePages,
        ...countryPages,
        ...blogPages,
        ...blogPostPages,
        ...studyMalaysiaPages,
        ...institutionPages,
    ];
}

