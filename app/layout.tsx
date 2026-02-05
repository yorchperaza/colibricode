import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CookiesBanner from "@/components/misc/CookiesBanner";
import AnalyticsGate from "@/components/misc/AnalyticsGate";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://colibricode.com"),
    title: {
        default: "ColibriCode — Web & App Workshop • Denver, USA",
        template: "%s | ColibriCode",
    },
    description:
        "ColibriCode is a senior web & app engineering workshop based in Denver, USA. We build and maintain serious products with Drupal, Symfony, Laravel, React/Next.js, Python, Go, and DevOps.",
    keywords: [
        "ColibriCode",
        "web development",
        "app development",
        "Drupal agency",
        "Drupal engineering",
        "Symfony",
        "Laravel",
        "React",
        "Next.js",
        "Python",
        "Go",
        "microservices",
        "DevOps",
        "CI/CD",
        "Denver",
        "Colorado",
        "USA",
        "headless CMS",
        "SaaS",
        "B2B",
    ],
    applicationName: "ColibriCode",
    authors: [{ name: "ColibriCode" }],
    creator: "ColibriCode",
    publisher: "ColibriCode",
    alternates: {
        canonical: "https://colibricode.com",
    },

    openGraph: {
        title: "ColibriCode — Web & App Workshop • Denver, USA",
        description:
            "Senior engineers focused on Drupal, PHP, JS, Python, Go, and DevOps. We design, build, and maintain production-ready web and mobile products.",
        url: "https://colibricode.com",
        siteName: "ColibriCode",
        images: [
            {
                url: "/og/colibricode-og.png",
                width: 1200,
                height: 630,
                alt: "ColibriCode — Web & App Workshop",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "ColibriCode — Web & App Workshop • Denver, USA",
        description:
            "Web & app engineering workshop for serious products. Drupal, Symfony, Laravel, React/Next.js, Python, Go, and DevOps.",
        images: ["/og/colibricode-og.png"],
        creator: "@colibricode",
    },

    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon-32x32.png",
    },

    category: "technology",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#020617" }, // near-neutral dark
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookiesBanner />
        <AnalyticsGate 
            gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID} 
            googleAdsId="AW-17909098681" 
        />
        </body>
        </html>
    );
}
