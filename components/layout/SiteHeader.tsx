"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
    href: string;
    label: string;
};

type TechItem = {
    href: string;
    label: string;
    description: string;
};

type TechSection = {
    label: string;
    items: TechItem[];
};

const primaryLinks: NavItem[] = [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
];

const secondaryLinks: NavItem[] = [
    { href: "/why-colibricode", label: "Why ColibriCode" },
    { href: "/engagement", label: "Engagement" },
    { href: "/contact", label: "Contact" },
];

const stackSections: TechSection[] = [
    {
        label: "Overview",
        items: [
            {
                href: "/capabilities",
                label: "Stack & Capabilities",
                description:
                    "How we combine Drupal, PHP, JS, Python, Go, and DevOps in real projects.",
            },
        ],
    },
    {
        label: "PHP & CMS",
        items: [
            {
                href: "/stack/drupal",
                label: "Drupal Engineering",
                description: "Custom modules, headless builds, migrations, performance.",
            },
            {
                href: "/stack/symfony-laravel",
                label: "Symfony & Laravel",
                description: "APIs, multi-tenant SaaS, complex business backends.",
            },
        ],
    },
    {
        label: "Frontend & Apps",
        items: [
            {
                href: "/stack/next-react",
                label: "Next.js & React",
                description: "Web apps, dashboards, design systems, SSR.",
            },
            {
                href: "/stack/mobile",
                label: "Mobile Apps",
                description: "Cross-platform apps, offline-first, push & analytics.",
            },
        ],
    },
    {
        label: "Backend & DevOps",
        items: [
            {
                href: "/stack/python",
                label: "Python Services",
                description: "APIs, data processing, automation scripts, integrations.",
            },
            {
                href: "/stack/go",
                label: "Go Services",
                description: "Microservices, workers, streaming, high-throughput APIs.",
            },
            {
                href: "/stack/devops",
                label: "DevOps & Cloud",
                description: "CI/CD, containers, observability, production hardening.",
            },
        ],
    },
];

export default function SiteHeader() {
    const [openMobile, setOpenMobile] = useState(false);
    const [stackOpen, setStackOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
            {/* Top row */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="ColibriCode Logo"
                        width={360}
                        height={135}
                        className="h-[50px] w-auto sm:h-[55px] md:h-[60px] lg:h-[75px] object-contain"
                        priority
                    />
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-700">
                    {/* Primary simple links */}
                    {primaryLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-neutral-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Merged Stack & Capabilities dropdown (desktop only) */}
                    <div
                        className="relative hidden lg:flex items-center"
                        onMouseEnter={() => setStackOpen(true)}
                        onMouseLeave={() => setStackOpen(false)}
                    >
                        {/* Trigger + invisible hover bridge (absolute, no layout impact) */}
                        <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                                aria-haspopup="true"
                                aria-expanded={stackOpen}
                            >
                                <span>Stack &amp; Capabilities</span>
                                <svg
                                    className={`h-4 w-4 text-neutral-500 transition-transform ${
                                        stackOpen ? "rotate-180" : ""
                                    }`}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M5 7l5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Invisible bridge area directly under the button, absolutely positioned */}
                            <div
                                className="absolute left-0 right-0 top-full h-2"
                                aria-hidden="true"
                            />
                        </div>

                        <AnimatePresence>
                            {stackOpen && (
                                <motion.div
                                    key="stack-dropdown"
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.16, ease: "easeOut" }}
                                    className="absolute left-1/2 top-full z-40 mt-1 w-[640px] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl"
                                >
                                    <div className="grid grid-cols-4 gap-6 text-left">
                                        {stackSections.map((section) => (
                                            <div key={section.label}>
                                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                                    {section.label}
                                                </p>
                                                <ul className="space-y-2">
                                                    {section.items.map((item) => (
                                                        <li key={item.href}>
                                                            <Link
                                                                href={item.href}
                                                                className="block rounded-lg px-2 py-1.5 hover:bg-neutral-50"
                                                            >
                                                                <p className="text-sm font-semibold text-neutral-900">
                                                                    {item.label}
                                                                </p>
                                                                <p className="mt-0.5 text-xs text-neutral-500">
                                                                    {item.description}
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Divider */}
                    <span className="hidden lg:block h-4 w-px bg-neutral-200" />

                    {/* Secondary simple links */}
                    {secondaryLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-neutral-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                    Start a Project
                </Link>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="md:hidden flex flex-col justify-center items-center gap-1"
                    onClick={() => setOpenMobile((v) => !v)}
                    aria-label="Toggle navigation"
                >
          <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-transform ${
                  openMobile ? "translate-y-1.5 rotate-45" : ""
              }`}
          />
                    <span
                        className={`block h-0.5 w-6 bg-neutral-900 transition-opacity ${
                            openMobile ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-neutral-900 transition-transform ${
                            openMobile ? "-translate-y-1.5 -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile dropdown menu with animation */}
            <AnimatePresence initial={false}>
                {openMobile && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden border-t border-neutral-200 bg-white shadow-lg"
                    >
                        <nav className="mx-auto max-w-7xl px-6 py-4 space-y-5 text-base font-medium text-neutral-900">
                            {/* Primary pages */}
                            <div className="space-y-2">
                                {primaryLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block hover:text-red-600 transition-colors"
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Stack & Capabilities group */}
                            <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                    Stack &amp; Capabilities
                                </p>
                                {stackSections.map((section) => (
                                    <div key={section.label} className="space-y-1.5">
                                        <p className="text-xs font-semibold text-neutral-600">
                                            {section.label}
                                        </p>
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block text-sm text-neutral-800 hover:text-red-600"
                                                onClick={() => setOpenMobile(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Secondary pages */}
                            <div className="space-y-2">
                                {secondaryLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block hover:text-red-600 transition-colors"
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                onClick={() => setOpenMobile(false)}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/25"
                            >
                                Start a Project
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
