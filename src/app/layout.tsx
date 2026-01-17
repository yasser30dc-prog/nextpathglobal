import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextpathglobal.my'),
  title: {
    default: "Next Path Global | Immigration & Visa Consulting Services Malaysia",
    template: "%s | Next Path Global",
  },
  description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
  keywords: [
    "MM2H", "Malaysia My Second Home", "immigration Malaysia", "visa consulting",
    "PVIP", "study abroad Malaysia", "work permit Malaysia", "tourist visa",
    "student visa", "education consulting", "university Malaysia", "NextPath Global",
    "visa services Malaysia", "immigration consultant", "study in Malaysia"
  ],
  authors: [{ name: "NextPath Global Sdn Bhd" }],
  creator: "NextPath Global Sdn Bhd",
  publisher: "NextPath Global Sdn Bhd",
  alternates: {
    canonical: "https://nextpathglobal.my",
  },
  openGraph: {
    title: "Next Path Global | Immigration & Visa Consulting Services Malaysia",
    description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
    url: "https://nextpathglobal.my",
    siteName: "Next Path Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next Path Global - Immigration & Visa Consulting",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Path Global | Immigration & Visa Consulting Services Malaysia",
    description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
    images: ["/og-image.png"],
    creator: "@nextpathglobal",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code", // User should replace with actual code
    other: {
      'agd-partner-manual-verification': '',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
