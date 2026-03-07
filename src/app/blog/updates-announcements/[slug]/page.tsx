import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/metadata";
import BlogPostContent from "@/components/blog/BlogPostContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts
        .filter((p) => p.category === "updates-announcements")
        .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return { title: "Post Not Found" };

    const title = `${post.title} | Next Path Global`;
    const description = post.excerpt;
    const url = `${siteConfig.url}/blog/updates-announcements/${post.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            siteName: siteConfig.name,
        },
        twitter: { card: "summary_large_image", title, description },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <BlogPostContent
            post={post}
            backHref="/blog/updates-announcements"
            backLabel="Back to Updates & Announcements"
            ctaTitle="Need Visa Assistance?"
            ctaDescription="Contact us today for professional guidance on visa applications and travel planning."
        />
    );
}
