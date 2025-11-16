"use client";

import React, { useMemo, useState } from "react";

const brand = {
    red: "text-red-600",
    gray: "text-neutral-600",
};

type Metric = {
    label: string;
    value: string;
};

type CaseStudy = {
    id: string;
    name: string;
    tag: string;
    industry: string;
    year: string;
    stack: string;
    services: string[];
    summary: string;
    image: string;
    client: string;
    duration: string;
    challenge: string;
    solution: string;
    metrics: Metric[];
    impactNotes: string[];
};

const CASE_STUDIES: CaseStudy[] = [
    {
        id: "b2b-commerce",
        name: "B2B Commerce Platform Modernization",
        tag: "Enterprise Web",
        industry: "Manufacturing & Distribution",
        year: "2024",
        stack: "Drupal 10 + Symfony APIs + Next.js frontend",
        services: [
            "Drupal Engineering",
            "Symfony Backends",
            "Next.js Web App",
            "DevOps & Observability",
        ],
        summary:
            "Modernized a legacy Drupal 7 commerce stack into a fast, maintainable platform that marketing and sales teams can actually rely on.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
        client: "North American B2B Manufacturer",
        duration: "6 months",
        challenge:
            "Legacy Drupal 7 site with poor performance, complex product catalog (50k+ SKUs), fragile pricing rules, and a content workflow that made every change stressful.",
        solution:
            "Migration to Drupal 10 with a custom distribution, new content model, Symfony-based pricing and inventory APIs, and a Next.js frontend tuned for performance and SEO—plus a safer CI/CD pipeline and observability.",
        metrics: [
            { label: "Page Load Time", value: "48% faster" },
            { label: "Qualified Leads", value: "+32%" },
            { label: "Bounce Rate", value: "-41%" },
            { label: "Admin Time Saved", value: "60%" },
        ],
        impactNotes: [
            "Marketing can spin up new campaigns without waiting on engineering.",
            "Sales reps have more reliable product data during calls.",
            "Upgrade path for future Drupal and Node/Next.js versions is now clear.",
        ],
    },
    {
        id: "fintech-mobile-suite",
        name: "Fintech Mobile Suite & Transaction Platform",
        tag: "Fintech Apps",
        industry: "Digital Payments",
        year: "2023",
        stack: "Laravel backend + React Native apps + Go workers",
        services: [
            "Laravel Backends",
            "Mobile Apps",
            "Go Services",
            "DevOps & Cloud",
        ],
        summary:
            "Shipped a mobile-first payment experience backed by a robust Laravel/Go platform with real-time flows and strong observability.",
        image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop",
        client: "High-growth Fintech Startup",
        duration: "8 months",
        challenge:
            "The client needed to move from prototype to production: real-time payments, regulatory constraints, fraud checks, and a mobile experience that users could trust.",
        solution:
            "Designed and implemented a Laravel API backbone, React Native apps for iOS and Android, and Go workers handling transaction processing, notifications, and fraud signals. Wired everything into CI/CD with detailed metrics and alerting.",
        metrics: [
            { label: "Monthly Active Users", value: "50k+" },
            { label: "Transaction Latency", value: "< 2 seconds" },
            { label: "Platform Uptime", value: "99.97%" },
            { label: "App Store Rating", value: "4.8 / 5.0" },
        ],
        impactNotes: [
            "Support tickets about ‘stuck’ transactions dropped significantly.",
            "Product team can now experiment safely with new flows.",
            "Regulators and partners gained confidence thanks to traceability.",
        ],
    },
    {
        id: "saas-analytics-toolkit",
        name: "SaaS Analytics Toolkit & Real-time Dashboard",
        tag: "SaaS / Data",
        industry: "B2B Analytics",
        year: "2022",
        stack: "Python ETL + Go microservices + Next.js dashboard",
        services: [
            "Python & Go Services",
            "Next.js Web App",
            "DevOps & Observability",
        ],
        summary:
            "Turned a slow, batch-based reporting system into a near real-time analytics experience customers actually enjoy using.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
        client: "B2B SaaS Analytics Company",
        duration: "5 months",
        challenge:
            "Reports took hours to generate, outages were hard to diagnose, and the UI made it difficult for customers to understand what was happening with their data.",
        solution:
            "Introduced event-driven pipelines with Python workers and Go services, a streaming ingestion path, and a Next.js dashboard with fast, interactive charts. Added strong instrumentation, alerts, and SLOs.",
        metrics: [
            { label: "Report Generation", value: "Hours → Seconds" },
            { label: "Data Processing Throughput", value: "10x increase" },
            { label: "Customer Satisfaction", value: "+67%" },
            { label: "System Capacity", value: "5x more tenants" },
        ],
        impactNotes: [
            "Sales started using the dashboard live during demos instead of screenshots.",
            "Support teams gained visibility into delays and backlogs in real time.",
            "Engineering can roll out new ETL/worker versions with lower risk.",
        ],
    },
    {
        id: "internal-ops-portal",
        name: "Internal Ops Portal for a Distributed Team",
        tag: "Internal Tools",
        industry: "Operations & Logistics",
        year: "2024",
        stack: "Drupal 10 + Symfony API + React/Next.js portal",
        services: [
            "Drupal Engineering",
            "Symfony Backends",
            "React / Next.js Apps",
        ],
        summary:
            "Unified fragmented spreadsheets and email-based workflows into a single internal portal with clear ownership and reporting.",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop",
        client: "US-based Operations Team",
        duration: "4 months",
        challenge:
            "The team ran critical workflows across spreadsheets, emails, and ad-hoc scripts. Nobody had a reliable view of status, and onboarding new teammates was painful.",
        solution:
            "Modeled core entities in Drupal 10, exposed them via Symfony APIs, and built a tailored Next.js portal with role-based access, dashboards, and audit trails. We added logging and metrics around the most important flows.",
        metrics: [
            { label: "Onboarding Time", value: "↓ ~50%" },
            { label: "Manual Status Checks", value: "↓ ~70%" },
            { label: "Process SLA Breaches", value: "↓ ~40%" },
            { label: "User Adoption", value: "90%+ ops team" },
        ],
        impactNotes: [
            "Ops leaders finally had a live view of bottlenecks.",
            "Engineers could evolve workflows without spreadsheet archaeology.",
            "New automations can now be layered on top of a stable foundation.",
        ],
    },
];

const CASE_FAQS = [
    {
        q: "Do these case studies represent typical budgets?",
        a: "Each project here represents a meaningful engagement, usually a few months of focused work with a small senior team. We’re happy to calibrate based on your context and constraints.",
    },
    {
        q: "Can you share more details or references?",
        a: "Yes. After a quick intro call and NDA where needed, we can share more specific details, architecture notes, or arrange reference calls if there’s a strong mutual fit.",
    },
    {
        q: "Can we start with something smaller than a full rebuild?",
        a: "Absolutely. Many of these projects started as a narrow slice—performance pass, a new dashboard, a single workflow—and expanded once value was clear.",
    },
];

export default function CaseStudiesPage() {
    const [activeId, setActiveId] = useState<string>(CASE_STUDIES[0]?.id ?? "");
    const [activeTag, setActiveTag] = useState<string>("All");

    const tags = useMemo(() => {
        const set = new Set<string>();
        CASE_STUDIES.forEach((cs) => set.add(cs.tag));
        return ["All", ...Array.from(set)];
    }, []);

    const filtered = useMemo(
        () =>
            activeTag === "All"
                ? CASE_STUDIES
                : CASE_STUDIES.filter((cs) => cs.tag === activeTag),
        [activeTag]
    );

    const activeCase = useMemo(
        () => CASE_STUDIES.find((cs) => cs.id === activeId) ?? CASE_STUDIES[0],
        [activeId]
    );

    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-neutral-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-neutral-100/40" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/70 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
                        <span
                            className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
              CASE STUDIES • REAL PROJECTS, REAL CONSTRAINTS
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Selected work across{" "}
                                <span className="relative inline-block">
                  <span className="relative z-10">
                    Drupal, PHP, JS, Python, and Go
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                                —with measurable outcomes.
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                ColibriCode is a Denver-based engineering workshop. These stories
                                show how we help teams stabilize legacy platforms, launch new
                                products, and add the kind of observability that turns chaos into a
                                roadmap.
                            </p>
                            <p className="text-sm text-neutral-500">
                                Every engagement combines a tailored mix of Drupal/PHP work,
                                frontends (React/Next.js), Python/Go services, and DevOps. We care
                                less about buzzwords—and more about pages loading faster, incidents
                                going down, and teams feeling in control again.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#case-grid"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Browse case studies
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
                                    href="/services"
                                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    See related services
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm text-sm">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    WHAT YOU’LL SEE BELOW
                                </p>
                                <ul className="space-y-2 text-neutral-800">
                                    <li>
                                        <span className="font-semibold">Context:</span> who the client
                                        is, what industry they’re in, and which stack they were
                                        wrestling with.
                                    </li>
                                    <li>
                                        <span className="font-semibold">The challenge:</span> the real
                                        constraints—legacy platforms, incidents, or performance issues.
                                    </li>
                                    <li>
                                        <span className="font-semibold">The solution:</span> how we
                                        combined Drupal, PHP, JS, Python, Go, and DevOps to move the
                                        needle.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Impact:</span> metrics and
                                        qualitative changes that matter to the business.
                                    </li>
                                </ul>
                                <p className="text-xs text-neutral-500">
                                    If you recognize your situation in any of these, we can likely
                                    adapt the same patterns to your context, without forcing a
                                    one-size-fits-all template.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case studies filter & grid */}
            <section id="case-grid" className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Filters */}
                    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p
                                className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                CASE STUDIES
                            </p>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-3xl">
                                Filter by theme and dive into the details.
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => {
                                        setActiveTag(tag);
                                        // When changing tag, keep selected case within filtered list if possible
                                        const first = (
                                            tag === "All"
                                                ? CASE_STUDIES
                                                : CASE_STUDIES.filter((cs) => cs.tag === tag)
                                        )[0];
                                        if (first) setActiveId(first.id);
                                    }}
                                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                                        activeTag === tag
                                            ? "border-red-600 bg-red-600 text-white shadow-sm shadow-red-600/30"
                                            : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid of cards */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filtered.map((cs) => (
                            <button
                                key={cs.id}
                                type="button"
                                onClick={() => setActiveId(cs.id)}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-neutral-50 text-left shadow-sm transition-all ${
                                    activeCase.id === cs.id
                                        ? "border-red-500/70 shadow-lg shadow-red-500/20"
                                        : "border-neutral-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                                }`}
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={cs.image}
                                        alt={cs.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-md shadow-red-600/40">
                      {cs.tag}
                    </span>
                                        <span className="rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-neutral-100">
                      {cs.industry}
                    </span>
                                    </div>
                                </div>
                                <div className="relative flex flex-1 flex-col p-6">
                                    <h3 className="text-sm font-bold text-neutral-900">
                                        {cs.name}
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-neutral-500">
                                        {cs.client} • {cs.year} • {cs.duration}
                                    </p>
                                    <p className={`mt-3 line-clamp-3 text-sm ${brand.gray}`}>
                                        {cs.summary}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {cs.services.slice(0, 3).map((s) => (
                                            <span
                                                key={s}
                                                className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 border border-neutral-200"
                                            >
                        {s}
                      </span>
                                        ))}
                                        {cs.services.length > 3 && (
                                            <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium text-neutral-500 border border-neutral-200">
                        + more
                      </span>
                                        )}
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-500">
                                        <span>Tech: {cs.stack}</span>
                                        <span
                                            className={`inline-flex items-center gap-1 text-xs font-semibold ${brand.red}`}
                                        >
                      View details
                      <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active case detail */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            DEEP DIVE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How we approached this project.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
                            Below is a more detailed view of one selected case study. The patterns
                            here—thin slices, clear metrics, and a mix of Drupal/PHP, JS, Python,
                            Go, and DevOps—tend to repeat across our work.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] lg:items-start">
                        {/* Image + meta */}
                        <div className="space-y-6">
                            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
                                <div className="relative h-64">
                                    <img
                                        src={activeCase.image}
                                        alt={activeCase.name}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-4 left-5 right-5 space-y-2">
                    <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-600/40">
                      {activeCase.tag}
                    </span>
                                        <h3 className="text-xl font-bold leading-snug text-white">
                                            {activeCase.name}
                                        </h3>
                                        <p className="text-xs text-neutral-300">
                                            {activeCase.client} • {activeCase.industry} •{" "}
                                            {activeCase.year}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4 border-t border-neutral-800 bg-neutral-950/80 px-6 py-6 text-xs text-neutral-300 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            DURATION
                                        </p>
                                        <p className="mt-1 font-medium">{activeCase.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            STACK
                                        </p>
                                        <p className="mt-1 font-medium">{activeCase.stack}</p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            KEY SERVICES
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {activeCase.services.map((s) => (
                                                <span
                                                    key={s}
                                                    className="rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-100"
                                                >
                          {s}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
                                    METRICS WE CARE ABOUT
                                </p>
                                <p className="mt-2 text-sm text-neutral-300">
                                    We try to anchor every engagement to a handful of concrete
                                    signals—performance, reliability, user behavior, or operational
                                    load—so it’s obvious whether we’re moving in the right direction.
                                </p>
                                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                                    {activeCase.metrics.map((m) => (
                                        <div
                                            key={m.label}
                                            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
                                        >
                                            <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
                                            <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                                {m.label}
                                            </p>
                                            <p className="relative mt-2 text-2xl font-bold text-red-500">
                                                {m.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Narrative */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
                                    THE CHALLENGE
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                                    {activeCase.challenge}
                                </p>
                            </div>

                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
                                    OUR APPROACH
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                                    {activeCase.solution}
                                </p>
                            </div>

                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
                                    IMPACT ON THE TEAM
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                                    {activeCase.impactNotes.map((note) => (
                                        <li key={note} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-sm text-neutral-200">
                                <p className="font-semibold text-neutral-100">
                                    How this might translate to your context
                                </p>
                                <p className="mt-2 text-neutral-300">
                                    You don’t need to have the exact same stack to benefit from these
                                    patterns. If you’re wrestling with slow Drupal/PHP apps, a React or
                                    Next.js frontend that feels fragile, or Python/Go workers without
                                    observability, we can carve out a small, high-impact slice as a
                                    starting point.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we measure success */}
            <section className="py-20 bg-neutral-50 border-y border-neutral-200">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE MEASURE SUCCESS
                        </p>
                        <h2 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">
                            Not just &ldquo;it shipped&rdquo;—we care about what changed
                            afterward.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
                            In most of our case studies, we look at three dimensions: user-facing
                            experience, operational load on your team, and how easy it is to evolve
                            the system after we’re gone.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                            <h3 className="text-sm font-bold text-neutral-900">
                                User-facing outcomes
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                                <li>Performance and reliability of critical flows.</li>
                                <li>Conversion, retention, and satisfaction signals.</li>
                                <li>
                                    How confident product/design feel demoing or using the system live.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                            <h3 className="text-sm font-bold text-neutral-900">
                                Operational outcomes
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                                <li>Incident volume and severity over time.</li>
                                <li>On-call load and time spent firefighting.</li>
                                <li>How easy it is to understand what production is doing.</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                            <h3 className="text-sm font-bold text-neutral-900">
                                Long-term outcomes
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                                <li>Upgrade paths for Drupal, PHP, JS, Python, and Go pieces.</li>
                                <li>How quickly your team can ship new features on top.</li>
                                <li>Whether new engineers can onboard without tribal knowledge.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ + CTA */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] lg:items-start">
                        <div>
                            <p
                                className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                CASE STUDY QUESTIONS
                            </p>
                            <h2 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">
                                A few things teams usually ask after seeing these stories.
                            </h2>
                            <div className="mt-6 space-y-4">
                                {CASE_FAQS.map((item) => (
                                    <div
                                        key={item.q}
                                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm"
                                    >
                                        <p className="font-semibold text-neutral-900">{item.q}</p>
                                        <p className={`mt-2 ${brand.gray}`}>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/30 to-neutral-50 p-8 shadow-xl">
                            <div className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                            <div className="relative space-y-4 text-sm">
                                <p
                                    className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                                >
                                    TALK ABOUT YOUR OWN CASE
                                </p>
                                <h3 className="text-xl font-bold tracking-tight">
                                    If you’re seeing your situation between the lines, let’s compare
                                    notes.
                                </h3>
                                <p className={brand.gray}>
                                    Send us a short description of your stack (Drupal, PHP, React,
                                    Python, Go, cloud), where it hurts today, and what &ldquo;better&rdquo;
                                    would look like. We’ll respond with a concrete, small starting
                                    slice—whether or not we end up working together.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <a
                                        href="mailto:hello@colibricode.com?subject=Case%20study%20fit%20with%20ColibriCode"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                    >
                                        Email hello@colibricode.com
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
                                        Or use the contact page
                                    </a>
                                </div>
                                <p className="text-[11px] text-neutral-500">
                                    We’re based in Denver, USA and usually work with teams in North
                                    America and Europe, with overlapping hours and English-first
                                    communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
