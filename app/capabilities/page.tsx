"use client";

import React from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type Pillar = {
    name: string;
    role: string;
    bullets: string[];
    stack: string;
};

type Pattern = {
    label: string;
    title: string;
    desc: string;
    stacks: string[];
    outcomes: string[];
};

type DevOpsCapability = {
    title: string;
    points: string[];
};

const pillars: Pillar[] = [
    {
        name: "Drupal",
        role: "Content & experience layer",
        stack: "Drupal 9/10/11 · Custom modules · Headless/decoupled",
        bullets: [
            "Own your content model: structured content types, taxonomies, workflows.",
            "Expose content to multiple channels via JSON:API or GraphQL.",
            "Use Drupal as a stable editorial surface while frontends evolve.",
        ],
    },
    {
        name: "Symfony & Laravel",
        role: "Business backends & APIs",
        stack: "Symfony · Laravel · REST · GraphQL",
        bullets: [
            "Model your core business logic outside of the CMS.",
            "Expose public and private APIs for web, mobile, and partners.",
            "Implement complex authorization, billing, and workflows cleanly.",
        ],
    },
    {
        name: "React & Next.js",
        role: "Frontends and product surfaces",
        stack: "Next.js · React · Tailwind · Component libraries",
        bullets: [
            "Build fast, SEO-friendly marketing and app surfaces.",
            "Create reusable design systems and dashboard components.",
            "Use SSR/ISR where it matters, SPA where it’s cheaper to maintain.",
        ],
    },
    {
        name: "Python",
        role: "Glue, data, and automation",
        stack: "FastAPI / modern frameworks · Workers · ETL",
        bullets: [
            "Build APIs for AI/ML features, analytics, or integrations.",
            "Write background jobs for reporting, syncs, and cleanups.",
            "Connect to external services and normalize data into your stack.",
        ],
    },
    {
        name: "Go",
        role: "High-throughput services & workers",
        stack: "Go services · Event-driven pipelines · Workers",
        bullets: [
            "Handle noisy workloads: queues, streams, and high-volume APIs.",
            "Isolate performance-critical paths from the rest of the system.",
            "Keep services small, testable, and observable from day one.",
        ],
    },
    {
        name: "DevOps & Cloud",
        role: "The rails everything runs on",
        stack: "Containers · CI/CD · Observability · Security",
        bullets: [
            "Ship small, frequent changes with confidence.",
            "Instrument services with logs, metrics, and traces.",
            "Harden production with sensible defaults and guardrails.",
        ],
    },
];

const patterns: Pattern[] = [
    {
        label: "Pattern 01",
        title: "Content-led platforms (Drupal + Next.js + PHP APIs)",
        desc: "When content, SEO, and editorial workflows matter as much as product features.",
        stacks: [
            "Drupal as the source of truth for content and navigation.",
            "Next.js frontend for marketing pages, landing pages, and apps.",
            "Symfony/Laravel for business logic that doesn’t belong in the CMS.",
        ],
        outcomes: [
            "Editors can move fast without touching React code.",
            "Frontends stay clean, fast, and easy to redesign.",
            "Integrations (payments, CRMs, etc.) live in PHP APIs, not hacked into templates.",
        ],
    },
    {
        label: "Pattern 02",
        title: "Product & SaaS (Laravel/Symfony + React + Go workers)",
        desc: "When you have real users, real accounts, and a roadmap measured in years.",
        stacks: [
            "Laravel/Symfony as the main product backend and API surface.",
            "React/Next.js for authenticated dashboards and admin tools.",
            "Go workers to process heavy or time-sensitive workloads off the main request path.",
        ],
        outcomes: [
            "Core product logic stays readable and testable.",
            "User experience stays responsive even under load.",
            "Background jobs handle billing, notifications, and imports without blocking users.",
        ],
    },
    {
        label: "Pattern 03",
        title: "Data & analytics (Python + Go + Next.js dashboards)",
        desc: "When reporting, metrics, or data products are central to your value.",
        stacks: [
            "Python services and workers for ETL, enrichment, and data quality checks.",
            "Go microservices for high-volume events, queues, or streaming.",
            "Next.js dashboards for interactive charts and self-serve analytics.",
        ],
        outcomes: [
            "Reports that used to take hours can be generated in minutes or seconds.",
            "Data pipelines are observable and recoverable, not a black box.",
            "Teams get trustworthy metrics without manual spreadsheet gymnastics.",
        ],
    },
];

const devopsCapabilities: DevOpsCapability[] = [
    {
        title: "Environment & deployment strategy",
        points: [
            "Clear environments (dev, staging, production) mapped to branches.",
            "Repeatable deployments via pipelines, not manual SSH sessions.",
            "Feature flags and phased rollouts for riskier changes.",
        ],
    },
    {
        title: "Observability & reliability",
        points: [
            "Centralized logs for Drupal, PHP, Python, and Go services.",
            "Metrics and dashboards for latency, error rates, and capacity.",
            "Meaningful alerts that wake humans only when it matters.",
        ],
    },
    {
        title: "Security & compliance basics",
        points: [
            "Secrets management instead of config files full of keys.",
            "Least-privilege access for databases and third-party APIs.",
            "Dependency updates and vulnerability scanning baked into the process.",
        ],
    },
    {
        title: "Developer experience",
        points: [
            "Local environments that feel like production, not toy setups.",
            "Fast feedback loops via tests and linting in CI.",
            "Documentation that explains how to run, debug, and extend the system.",
        ],
    },
];

export default function CapabilitiesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-neutral-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-neutral-100/40" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/60 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
                        <span
                            className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
              STACK &amp; CAPABILITIES
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                How we combine Drupal, PHP, JS, Python, Go, and DevOps in real projects.
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                ColibriCode is opinionated on stack choices—but flexible in how we
                                assemble them. We like a predictable toolbox, then adapt it to your
                                product, your team, and your constraints.
                            </p>
                            <p className="text-sm text-neutral-500">
                                We&apos;re based in Denver, Colorado, working mostly in US hours and
                                collaborating with teams across North America and Europe.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                                    TOOLBOX AT A GLANCE
                                </p>
                                <dl className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <dt className="font-semibold text-neutral-900">CMS & Content</dt>
                                        <dd className={brand.gray}>Drupal (headless & coupled)</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-900">Backend</dt>
                                        <dd className={brand.gray}>Symfony · Laravel · PHP</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-900">Frontends</dt>
                                        <dd className={brand.gray}>React · Next.js</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-900">Services</dt>
                                        <dd className={brand.gray}>Python · Go workers</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-900">DevOps</dt>
                                        <dd className={brand.gray}>Containers · CI/CD · Observability</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-900">Hosting</dt>
                                        <dd className={brand.gray}>Cloud-native, with your provider</dd>
                                    </div>
                                </dl>
                                <p className="text-xs text-neutral-500">
                                    The exact mix depends on your context: existing stack, in-house skills,
                                    and what your users actually need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            CAPABILITY PILLARS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Each language and framework has a clear job.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We avoid &quot;everything everywhere&quot;. Each piece of the stack has a
                            reason to exist, and a clear place in your long-term architecture.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar) => (
                            <article
                                key={pillar.name}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold text-neutral-900">
                                    {pillar.name}
                                </h3>
                                <p className="relative mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                                    {pillar.role}
                                </p>
                                <p className="relative mt-3 text-xs font-medium text-neutral-500">
                                    {pillar.stack}
                                </p>
                                <ul className="relative mt-4 space-y-2 text-sm text-neutral-700">
                                    {pillar.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patterns */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW IT FITS TOGETHER
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Common architecture patterns we use in the wild.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Most projects fall into a few repeatable shapes. We tweak the pattern to
                            your reality instead of reinventing the wheel every time.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {patterns.map((pattern) => (
                            <article
                                key={pattern.title}
                                className="relative flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                                    {pattern.label}
                                </p>
                                <h3 className="text-lg font-bold text-neutral-900">
                                    {pattern.title}
                                </h3>
                                <p className={`text-sm ${brand.gray}`}>{pattern.desc}</p>

                                <div className="mt-3 rounded-2xl bg-neutral-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                        TYPICAL STACK
                                    </p>
                                    <ul className="mt-2 space-y-1.5 text-sm text-neutral-800">
                                        {pattern.stacks.map((s) => (
                                            <li key={s} className="flex gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-3 rounded-2xl border border-red-100 bg-red-50/60 p-4">
                                    <p
                                        className={`text-xs font-semibold uppercase tracking-[0.18em] ${brand.red}`}
                                    >
                                        WHAT YOU GET
                                    </p>
                                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-800">
                                        {pattern.outcomes.map((o) => (
                                            <li key={o} className="flex gap-2">
                                                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                                                <span>{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* DevOps section */}
            <section className="bg-neutral-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            DEVOPS &amp; DELIVERY
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            The rails beneath Drupal, PHP, Python, and Go.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
                            A good stack isn&apos;t just languages. It&apos;s how you deploy, observe,
                            and evolve them without breaking your users&apos; day.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {devopsCapabilities.map((cap) => (
                            <article
                                key={cap.title}
                                className="relative flex flex-col gap-3 rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/15 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-semibold text-white">
                                    {cap.title}
                                </h3>
                                <ul className="relative mt-1 space-y-1.5 text-xs text-neutral-300">
                                    {cap.points.map((p) => (
                                        <li key={p} className="flex gap-2">
                                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to use this stack section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            IS THIS STACK FOR YOU?
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            When our stack is a strong fit—and when it isn&apos;t.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We&apos;d rather be honest than generic. Our toolbox shines in certain
                            situations and we&apos;ll tell you if your project falls outside of that.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                                GREAT FIT
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                When you&apos;ll likely be happy with Drupal + PHP + JS + Python + Go.
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                                    <span>
                    You have a growing product or platform, not a throwaway prototype.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                                    <span>
                    You want to own your content, code, and infrastructure long-term.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                                    <span>
                    You care about reliability, observability, and clear ownership.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                                    <span>
                    You prefer a stack that your internal team can learn and extend.
                  </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                                PROBABLY NOT IDEAL
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                When we&apos;re happy to recommend someone else.
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500" />
                                    <span>
                    You need purely native mobile with deep platform-specific features
                    and no shared backend.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500" />
                                    <span>
                    You want a no-code/low-code prototype with minimal engineering
                    involved.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500" />
                                    <span>
                    You&apos;re locked into a very different stack and not ready to
                    adapt it.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500" />
                                    <span>
                    You&apos;re looking for the cheapest possible build, not senior
                    craftsmanship.
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-neutral-200">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/30 to-neutral-50 p-10 shadow-xl lg:p-14">
                        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                        <div className="relative space-y-5">
                            <p
                                className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                TALK ABOUT YOUR STACK
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Want a second opinion on your current architecture?
                            </h2>
                            <p className={`max-w-2xl text-base leading-relaxed ${brand.gray}`}>
                                Send over a short description of your current stack—Drupal, PHP, Python,
                                Go, something else—and where it hurts. We&apos;ll tell you what we&apos;d
                                keep, what we&apos;d simplify, and where we think our team could help.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Stack%20%26%20Capabilities%20Review"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us your stack
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    Go to contact page
                                </a>
                            </div>
                            <p className="text-xs text-neutral-500">
                                No pressure, no long sales cycle. If we&apos;re not the right fit, we&apos;ll
                                say so and, if we can, point you in a better direction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
