import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { countries } from "@/data/countries";
import CountryPageTemplate from "@/components/visa/CountryPageTemplate";
import { siteConfig } from "@/lib/metadata";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return countries.map((country) => ({
        slug: country.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        return { title: "Country Not Found" };
    }

    const title = `${country.name} Tourist Visa Services | Next Path Global`;
    const description = `Apply for a ${country.name} tourist visa with Next Path Global. ${country.description.slice(0, 160)}`;
    const url = `${siteConfig.url}/services/tourist-visa/${country.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: "en_MY",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function CountryPage({ params }: PageProps) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    return <CountryPageTemplate country={country} />;
}
