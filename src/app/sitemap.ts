import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { institutions } from '@/data/institutions';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nextpathglobal.my';
    const currentDate = new Date().toISOString();

    // Static pages with high priority
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/book-appointment`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/why-choose-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/payment-methods`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/services/tourist-visa`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/study-abroad`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/pvip`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/mm2h`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // Tourist visa country pages
    const countries = [
        'afghanistan', 'argentina', 'azerbaijan', 'bangladesh', 'brunei', 'cambodia',
        'china', 'egypt', 'hong-kong', 'indonesia', 'japan', 'laos', 'malaysia',
        'maldives', 'myanmar', 'nepal', 'pakistan', 'papua-new-guinea', 'philippines',
        'russia', 'sabah', 'singapore', 'sri-lanka', 'thailand', 'turkey', 'vietnam'
    ];

    const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
        url: `${baseUrl}/services/tourist-visa/${country}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Blog pages
    const blogPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/study-in-malaysia`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/travel-tourism`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/visa-immigration`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/updates-announcements`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ];

    // Blog post pages
    const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.category}/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Study Malaysia pages
    const studyMalaysiaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/study-malaysia/universities`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/study-malaysia/university-colleges`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/study-malaysia/colleges`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
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
            lastModified: currentDate,
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
