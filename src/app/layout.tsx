import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextpathglobal.my'),
  title: "Next Path Global | Immigration & Visa Consulting",
  description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
  keywords: ["MM2H", "Malaysia My Second Home", "immigration", "visa consulting", "PVIP", "study abroad", "work permit", "NextPath Global"],
  authors: [{ name: "NextPath Global Sdn Bhd" }],
  openGraph: {
    title: "Next Path Global | Immigration & Visa Consulting",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Path Global | Immigration & Visa Consulting",
    description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
