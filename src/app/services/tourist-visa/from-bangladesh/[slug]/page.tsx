import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { bangladeshCountries } from "@/data/countries-bangladesh";
import BangladeshCountryPageTemplate from "@/components/visa/BangladeshCountryPageTemplate";
import { siteConfig } from "@/lib/metadata";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return bangladeshCountries.map((country) => ({
        slug: country.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const country = bangladeshCountries.find((c) => c.slug === slug);

    if (!country) {
        return { title: "Country Not Found" };
    }

    const title = `${country.name} E-Visa from Bangladesh | NextPath Global`;
    const description = `Apply for a ${country.name} E-Visa from Bangladesh with NextPath Global. ${country.description.slice(0, 160)}`;
    const url = `${siteConfig.url}/services/tourist-visa/from-bangladesh/${country.slug}`;

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
            locale: "en_BD",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function BangladeshCountryPage({ params }: PageProps) {
    const { slug } = await params;
    const country = bangladeshCountries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    return (
        <BangladeshCountryPageTemplate
            country={country}
            backLink="/services/tourist-visa/from-bangladesh"
        />
    );
}
