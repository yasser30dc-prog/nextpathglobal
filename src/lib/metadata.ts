import { Metadata } from 'next';

// Base site configuration
export const siteConfig = {
    name: 'Next Paath Global',
    description: 'Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals',
    url: 'https://nextpathglobal.my',
    ogImage: 'https://nextpathglobal.my/og-image.jpg',
    links: {
        facebook: 'https://www.facebook.com/nextpathglobal.my',
        instagram: 'https://www.instagram.com/nextpathglobal.my',
        tiktok: 'https://www.tiktok.com/@nextpathglobal.my',
    },
};

// Generate metadata for pages
export function generateMetadata({
    title,
    description,
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords,
}: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    keywords?: string[];
}): Metadata {
    const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
    const ogImage = image || siteConfig.ogImage;

    return {
        title,
        description,
        keywords: keywords?.join(', '),
        authors: author ? [{ name: author }] : [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            type,
            locale: 'en_MY',
            url: pageUrl,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(type === 'article' && publishedTime && {
                publishedTime,
                modifiedTime,
                authors: author ? [author] : undefined,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
            creator: '@nextpathglobal',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// JSON-LD Structured Data Helpers

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        sameAs: [
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.tiktok,
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Malay'],
        },
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    };
}

export function generateArticleSchema({
    title,
    description,
    image,
    datePublished,
    dateModified,
    author,
    url,
}: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}${url}`,
        },
    };
}

export function generateServiceSchema({
    name,
    description,
    url,
    image,
    provider,
}: {
    name: string;
    description: string;
    url: string;
    image?: string;
    provider?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: `${siteConfig.url}${url}`,
        image: image || siteConfig.ogImage,
        provider: {
            '@type': 'Organization',
            name: provider || siteConfig.name,
            url: siteConfig.url,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Malaysia',
        },
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateEducationalOrganizationSchema({
    name,
    description,
    url,
    image,
    address,
}: {
    name: string;
    description: string;
    url: string;
    image?: string;
    address?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name,
        description,
        url: `${siteConfig.url}${url}`,
        image: image || siteConfig.ogImage,
        ...(address && {
            address: {
                '@type': 'PostalAddress',
                addressLocality: address,
                addressCountry: 'MY',
            },
        }),
    };
}
