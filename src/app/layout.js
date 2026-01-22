import { Geist, Geist_Mono } from "next/font/google"; // Using Next.js 15/16 default fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import PrivacyBanner from "@/components/PrivacyBanner";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Magili | Premium Web Design & Development",
    description: "We design and build websites that help your business grow. Conversion-focused, modern, and premium web solutions.",
    openGraph: {
        title: "Magili | Premium Web Design",
        description: "Transform your digital presence with Magili's premium web solutions.",
        url: "https://magili.com",
        siteName: "Magili",
        images: [
            {
                url: "/assets/hero_bg.jpg", // Default OG image
                width: 1200,
                height: 630,
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Magili",
        "url": "https://magili.com",
        "logo": "https://magili.com/assets/logo.png",
        "description": "Premium web design agency specializing in high-conversion websites.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-234-567-890", // Placeholder
            "contactType": "Customer Service"
        }
    };

    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black overflow-x-hidden`}
            >
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <PrivacyBanner />
                <Footer />
            </body>
        </html>
    );
}
