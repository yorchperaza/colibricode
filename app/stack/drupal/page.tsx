"use client";

import React from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type Highlight = {
    label: string;
    value: string;
    hint: string;
};

type Slice = {
    title: string;
    desc: string;
    bullets: string[];
};

type Package = {
    name: string;
    tagline: string;
    bestFor: string[];
};

type FAQ = {
    q: string;
    a: string;
};

const highlights: Highlight[] = [
    {
        label: "Focus",
        value: "Drupal 9/10/11",
        hint: "Modern, supported versions only.",
    },
    {
        label: "Engagements",
        value: "Rebuilds & Greenfield",
        hint: "From rescue to fresh starts.",
    },
    {
        label: "Approach",
        value: "Workshop, not agency",
        hint: "Small senior teams, no factories.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US hours, remote-first collaboration.",
    },
];

const slices: Slice[] = [
    {
        title: "Custom modules and business logic",
        desc: "We keep Drupal good at what it’s great at, and avoid turning it into a dumping ground for every piece of logic.",
        bullets: [
            "Design clear boundaries between Drupal configuration and custom code.",
            "Isolate business rules in well-tested, namespaced modules.",
            "Expose reusable services so other parts of your stack can call into Drupal cleanly.",
        ],
    },
    {
        title: "Headless & decoupled builds",
        desc: "When you need Drupal’s editorial power, but your experience layer lives in React / Next.js or mobile apps.",
        bullets: [
            "Use JSON:API/GraphQL for content, menus, and navigation structures.",
            "Keep URL and routing strategy aligned between Drupal and Next.js.",
            "Introduce caching and edge strategies that play nicely with CDNs.",
        ],
    },
    {
        title: "Migrations and upgrades",
        desc: "Moving from Drupal 7/8—or another CMS—without losing SEO, history, or editors’ sanity.",
        bullets: [
            "Audit existing content types, fields, and bespoke modules.",
            "Design a new content model instead of re-copying old mistakes.",
            "Build repeatable migration scripts you can run multiple times safely.",
        ],
    },
    {
        title: "Performance & reliability",
        desc: "Fast enough that editors are happy, and robust enough that marketing doesn’t fear big campaigns.",
        bullets: [
            "Tune caching layers: render cache, dynamic page cache, and reverse proxies.",
            "Profile slow queries, reduce unnecessary views, and declutter cron jobs.",
            "Use logs/metrics to see issues before users email support.",
        ],
    },
];

const packages: Package[] = [
    {
        name: "Drupal Replatform",
        tagline: "Move from Drupal 7 or another CMS into a clean, future-proof Drupal 10/11 base.",
        bestFor: [
            "Legacy Drupal 7 installs with years of organic growth.",
            "Teams that want to modernize content models, not just lift-and-shift.",
            "Organizations that need SEO and URLs preserved carefully.",
        ],
    },
    {
        name: "Headless Drupal + Next.js",
        tagline: "Use Drupal as the content brain and Next.js as the experience layer.",
        bestFor: [
            "Marketing sites where performance and experimentation matter.",
            "Product teams that want shared components across web app and site.",
            "Companies that need multi-channel delivery (web, app, partners).",
        ],
    },
    {
        name: "Drupal Rescue & Stabilization",
        tagline: "Take over a struggling Drupal codebase, stabilize it, and put it back on track.",
        bestFor: [
            "Slow, brittle sites after years of reactive patches.",
            "Frequent production incidents with no clear owner.",
            "Teams that inherited a site and don’t know where to start.",
        ],
    },
];

const faqs: FAQ[] = [
    {
        q: "Do you only work with headless Drupal?",
        a: "No. We’re comfortable with both traditional and headless setups. For some projects, a well-structured, coupled Drupal site is simpler to own. For others, a decoupled approach with Next.js, mobile apps, or custom frontends makes more sense. We help you choose instead of pushing one pattern by default.",
    },
    {
        q: "Can you work with our existing agency or internal team?",
        a: "Yes. Many engagements are embedded: we join your rituals, review architecture together, and gradually transfer ownership back to your team. Our goal is not to become the only people who understand your Drupal instance.",
    },
    {
        q: "Do you handle hosting and DevOps, or just Drupal code?",
        a: "We can do both. Some teams bring their own hosting provider; others ask us to define infrastructure, CI/CD, observability, and backup strategies. In all cases, we design environments so your team can operate them day-to-day without heroics.",
    },
    {
        q: "What about Python and Go in a Drupal project?",
        a: "We often pair Drupal with Python or Go services for search, analytics, data processing, or high-throughput workloads. Drupal stays the content and editorial brain, while Python/Go run specialized services and workers that Drupal talks to via APIs or queues.",
    },
];

export default function DrupalStackPage() {
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
              STACK / DRUPAL
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Drupal Engineering.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    Custom modules, headless builds, migrations, performance.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We treat Drupal as a powerful content engine—not a dumping ground for
                                everything. Our work focuses on clean modules, predictable content models,
                                safe migrations, and performance that doesn’t crumble on launch day.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA, working with teams across North
                                America and Europe that rely on Drupal for mission-critical platforms.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative grid grid-cols-2 gap-4 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm text-sm">
                                {highlights.map((h) => (
                                    <div
                                        key={h.label}
                                        className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4"
                                    >
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            {h.label}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-neutral-900">
                                            {h.value}
                                        </p>
                                        <p className="mt-1 text-[11px] text-neutral-500">{h.hint}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Drupal does for you */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY DRUPAL
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Drupal as the content brain of your product.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We use Drupal where structured content, workflows, SEO, and multi-channel
                            delivery matter. Then we connect it to PHP, JS, Python, and Go services so
                            the rest of your platform feels cohesive—not bolted together.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                EDITOR EXPERIENCE
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Content teams get a first-class seat.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We design content models, view modes, and workflows so editors can move
                                quickly without opening Jira for every change.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Structured content types with future channels in mind.</li>
                                <li>Reusable paragraphs/components instead of copy-paste layouts.</li>
                                <li>Roles and permissions that match real teams, not theory.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                ENGINEERING
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Developers work with Drupal, not around it.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We build modules, services, and integrations that feel like a proper PHP
                                codebase, not a fragile pile of contrib hacks.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Modern PHP practices and namespaced code.</li>
                                <li>Clear layering between custom logic and contrib modules.</li>
                                <li>APIs that other services (Python, Go) can trust.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                LONG-TERM OWNERSHIP
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Your team can own it after we’re gone.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Documentation, architecture notes, and training sessions are all part of
                                the engagement—so you’re not forever dependent on us.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Readable code and clear module responsibilities.</li>
                                <li>Onboarding docs for new engineers and editors.</li>
                                <li>Upgrade paths that don’t require a full rewrite each cycle.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core slices: modules, headless, migrations, performance */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE WORK WITH DRUPAL
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Custom modules, headless builds, migrations, performance.
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {slices.map((s) => (
                            <article
                                key={s.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold text-neutral-900">
                                    {s.title}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{s.desc}</p>
                                <ul className="relative mt-4 space-y-2 text-sm text-neutral-800">
                                    {s.bullets.map((b) => (
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

            {/* Architecture: Drupal + PHP + JS + Python + Go */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            ARCHITECTURE PATTERN
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Drupal at the center, with PHP, JS, Python, and Go around it.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            Think of Drupal as the content and editorial brain. PHP APIs handle business
                            logic, React/Next.js handles experiences, Python deals with data & glue,
                            and Go carries heavy workloads that shouldn’t run inside the CMS.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.1fr,1.1fr] lg:items-start">
                        <div className="space-y-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                SYSTEM VIEW
                            </p>
                            <div className="mt-3 rounded-2xl bg-gradient-to-br from-red-600/10 to-neutral-900 p-5">
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Drupal as the content core</p>
                                            <p className="text-xs text-neutral-300">
                                                Manages pages, navigation, taxonomies, media, and editorial
                                                workflows. Exposes structured content via APIs.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Symfony/Laravel as business services</p>
                                            <p className="text-xs text-neutral-300">
                                                Handles product logic, billing, permissions, onboarding, and
                                                external integrations that don’t belong inside Drupal.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Next.js as the experience layer</p>
                                            <p className="text-xs text-neutral-300">
                                                Renders marketing and app surfaces using data from Drupal and
                                                PHP APIs, with SSR/ISR for performance and SEO.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Python for data & integration</p>
                                            <p className="text-xs text-neutral-300">
                                                ETL jobs, analytics pipelines, and glue services that normalize
                                                data into/from Drupal and other systems.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Go for heavy lifting</p>
                                            <p className="text-xs text-neutral-300">
                                                High-throughput APIs, queues, or background processing for
                                                imports, exports, or search indexing.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                WHAT THIS FEELS LIKE DAY-TO-DAY
                            </p>
                            <ul className="mt-3 space-y-3">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Editors live in Drupal; product teams live in backlogs and design
                                        systems; infra folks see a clean map of services and environments.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        New features rarely mean &quot;hack another thing into views&quot;—
                                        they get proper modules, APIs, and frontends.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        When something is slow or broken, you can see where—Drupal, PHP API,
                                        Python job, Go worker, or infra—and fix the right layer.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            DRUPAL ENGAGEMENT SHAPES
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Three ways we usually plug in.
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {packages.map((pkg) => (
                            <article
                                key={pkg.name}
                                className="relative flex flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold text-neutral-900">
                                    {pkg.name}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{pkg.tagline}</p>
                                <div className="relative mt-4 rounded-2xl border border-red-100 bg-red-50/60 p-4">
                                    <p
                                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${brand.red}`}
                                    >
                                        BEST FOR
                                    </p>
                                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-800">
                                        {pkg.bestFor.map((b) => (
                                            <li key={b} className="flex gap-2">
                                                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 border-t border-neutral-200 bg-neutral-50">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            FAQ
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Questions teams usually ask about Drupal work.
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                            >
                                <div className="px-6 py-5">
                                    <p className="text-sm font-semibold text-neutral-900">{item.q}</p>
                                    <p className={`mt-2 text-sm leading-relaxed ${brand.gray}`}>
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/30 to-neutral-50 p-10 shadow-xl lg:p-14">
                        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                        <div className="relative space-y-5">
                            <p
                                className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                TALK ABOUT YOUR DRUPAL ROADMAP
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have a Drupal platform that needs a rebuild, a rescue, or a proper
                                headless architecture?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Send a short note with your current Drupal version, major pain points,
                                and what &quot;better&quot; looks like. We&apos;ll reply with how we&apos;d
                                approach it—and let you know if we&apos;re the right workshop for the job.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Drupal%20Engineering"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about your Drupal site
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
                                No pressure, no long deck required. A few paragraphs and a couple of
                                screenshots are usually enough for a first look.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
