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
        value: "Symfony & Laravel",
        hint: "APIs, SaaS, and domain-heavy systems.",
    },
    {
        label: "Product Types",
        value: "APIs & Multi-tenant SaaS",
        hint: "B2B, internal tools, and platforms.",
    },
    {
        label: "Approach",
        value: "Workshop, not agency",
        hint: "Senior engineers, small squads.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US timezone, remote-first.",
    },
];

const slices: Slice[] = [
    {
        title: "APIs that are boring in the best way",
        desc: "We design APIs that feel predictable, well-versioned, and easy for other teams to build against.",
        bullets: [
            "Resource-oriented designs with clear naming and error semantics.",
            "Authentication and authorization that fits your real-world roles.",
            "API docs that stay close to the code, not a forgotten side project.",
        ],
    },
    {
        title: "Multi-tenant SaaS foundations",
        desc: "From pricing plans to tenant isolation, we treat multi-tenancy as a first-class concern, not an afterthought.",
        bullets: [
            "Tenant-aware data models using row-level separation and clear boundaries.",
            "Configurable per-tenant settings, branding, and feature flags.",
            "Operational tooling so support can help tenants without SQL diving.",
        ],
    },
    {
        title: "Complex business & domain logic",
        desc: "When the real complexity lives in rules, workflows, and edge cases—not in the UI.",
        bullets: [
            "Domain-focused services and aggregates instead of anemic models.",
            "Validation and invariants that protect your data long-term.",
            "Clear modules and bounded contexts to keep growth sane.",
        ],
    },
    {
        title: "Performance, reliability & observability",
        desc: "We prepare your Symfony/Laravel app for real traffic, not just staging demo data.",
        bullets: [
            "Queue-heavy designs for slow and bursty workloads.",
            "Caching, pagination, and async processing where they actually help.",
            "Metrics, logs, and tracing so incidents can be debugged in minutes, not days.",
        ],
    },
];

const packages: Package[] = [
    {
        name: "API & Backend Platform",
        tagline:
            "Design and build the core APIs that power your product, mobile apps, and partners.",
        bestFor: [
            "New products where backend contracts must be solid from the start.",
            "Platforms that must support multiple client types (web, mobile, partners).",
            "Legacy APIs that need a safer, more consistent replacement.",
        ],
    },
    {
        name: "Multi-tenant SaaS Core",
        tagline:
            "Turn your idea or internal tool into a properly multi-tenant SaaS offering.",
        bestFor: [
            "Teams turning services into subscription products.",
            "B2B tools with complex roles, organizations, and billing models.",
            "Existing single-tenant apps that need to scale to many customers.",
        ],
    },
    {
        name: "Backend Rescue & Hardening",
        tagline:
            "Stabilize a fragile Symfony/Laravel backend and set it up for the next few years.",
        bestFor: [
            "Apps with growing downtime or error rates.",
            "Codebases that no one wants to touch anymore.",
            "Teams needing a clear path from &quot;it works&quot; to &quot;we trust it&quot;.",
        ],
    },
];

const faqs: FAQ[] = [
    {
        q: "When do you choose Symfony vs Laravel?",
        a: "We use both. Symfony is often our choice for highly structured, long-lived platforms with many internal services. Laravel is excellent when speed of delivery, batteries-included tooling, and developer experience are top priorities. We’ll discuss your team, roadmap, and constraints before recommending one.",
    },
    {
        q: "How do you handle multi-tenancy safely?",
        a: "We avoid ad-hoc tenant checks scattered everywhere. Instead we centralize tenant resolution, design tenant-aware models, and add guardrails at the data and application layers. We also think about support workflows, migrations, and backups from day one, so tenants stay isolated and recoverable.",
    },
    {
        q: "Where do Python and Go fit in a Symfony/Laravel stack?",
        a: "Symfony or Laravel often act as the core &quot;business API&quot;. Python is great for data, ML, and glue services; Go shines for high-throughput APIs, workers, and pipelines. We place each language where its strengths benefit the platform instead of forcing PHP to do everything.",
    },
    {
        q: "Can you integrate with our existing systems?",
        a: "Yes. Many of our backends connect to ERPs, CRMs, payment gateways, and internal services. We treat integrations as first-class citizens: explicit adapters, clear failure modes, and observability around every external call.",
    },
];

export default function SymfonyLaravelStackPage() {
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
              STACK / SYMFONY &amp; LARAVEL
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Symfony &amp; Laravel.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    APIs, multi-tenant SaaS, complex business backends.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We build backends that your product can grow on: well-structured APIs,
                                multi-tenant SaaS cores, and domain-heavy systems that behave the same in
                                staging, during a demo, and when real traffic shows up.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA, partnering with teams that run
                                their business on Symfony and Laravel platforms.
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

            {/* Why Symfony/Laravel for this kind of work */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY SYMFONY &amp; LARAVEL
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A solid center for APIs and business logic.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Symfony and Laravel give us a reliable core for complex domains, while the
                            rest of your stack—React/Next.js, Python, Go—plugs into it through clean
                            interfaces instead of ad-hoc shortcuts.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                LONG-LIVED APIs
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Contracts you don’t regret in a year.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We put effort into API boundaries so mobile apps, web apps, and partners
                                can evolve without constant breaking changes.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Versioning and deprecation plans from day one.</li>
                                <li>Security controls that don’t slow development to a crawl.</li>
                                <li>Monitoring that shows which clients use which endpoints.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                BUSINESS-FIRST DESIGN
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Domains, not just controllers and models.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We organize code around the language your business uses, so features are
                                easier to reason about and safer to change.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Modules and bounded contexts instead of one giant &quot;app&quot;.</li>
                                <li>Aggregates and services that represent real-world concepts.</li>
                                <li>Use cases captured in tests that read like scenarios.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                TEAM OWNERSHIP
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Your engineers won’t be scared of the backend.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Documentation, diagrams, and clear module boundaries help new engineers
                                onboard without relying on “tribal knowledge”.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Architecture notes alongside the code, not in lost decks.</li>
                                <li>Runbooks for queues, cron jobs, and batch processes.</li>
                                <li>Roadmaps for refactoring without stopping feature work.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we work: APIs, SaaS, complex backends, performance */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE BUILD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            APIs, multi-tenant SaaS, complex business backends.
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

            {/* Architecture: Symfony/Laravel + React, Python, Go */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            ARCHITECTURE PATTERN
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Symfony / Laravel as the backbone of your platform.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            The backend owns identity, permissions, and business rules. React/Next.js,
                            Python, and Go connect via well-defined contracts instead of tightly
                            coupled hacks.
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
                                            <p className="font-semibold">
                                                Symfony / Laravel as the business core
                                            </p>
                                            <p className="text-xs text-neutral-300">
                                                Owns authentication, authorization, domain logic, and external
                                                integrations (billing, CRMs, ERPs, etc.).
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">React / Next.js as the UI layer</p>
                                            <p className="text-xs text-neutral-300">
                                                Renders dashboards, admin panels, and customer experiences using
                                                data and auth from the PHP backend.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Python for data & automation</p>
                                            <p className="text-xs text-neutral-300">
                                                Pipelines, analytics, ETL jobs, and ML services that consume and
                                                enrich backend data.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Go for high-throughput workloads</p>
                                            <p className="text-xs text-neutral-300">
                                                Queues, workers, and streaming services where latency and
                                                concurrency really matter.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Shared observability layer</p>
                                            <p className="text-xs text-neutral-300">
                                                Logs, metrics, and traces that let you follow a request from UI
                                                to PHP to Python/Go and back again.
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
                                        Product managers can reason about flows in terms of business
                                        actions, not controller filenames and random jobs.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Frontend engineers have clean contracts and don’t need to dig into
                                        backend internals for every UI change.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Ops teams know where business rules live and can roll back, hotfix,
                                        or toggle behavior without chaos.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        When traffic spikes, you scale the right layers instead of throwing
                                        bigger servers at everything at once.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement shapes */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            BACKEND ENGAGEMENT SHAPES
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How we usually plug into Symfony & Laravel work.
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
                            Questions teams usually ask about backend work.
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
                                TALK ABOUT YOUR BACKEND
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have an API, SaaS, or backend that needs a proper Symfony/Laravel core?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Share a short description of your current stack, biggest pain points, and
                                what a successful backend would unlock for your team. We&apos;ll reply
                                with how we&apos;d approach it—and whether we&apos;re the right fit.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Symfony%20%2F%20Laravel%20Backend"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about your backend
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
                                A couple of paragraphs and a list of systems you integrate with is
                                enough for a first pass—no 40-page spec required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
