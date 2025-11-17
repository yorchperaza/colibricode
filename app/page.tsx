"use client";

import React, { useState } from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type Service = {
    title: string;
    desc: string;
};

type CaseStudy = {
    name: string;
    stack: string;
    result: string;
    tag: string;
};

type Capability = {
    area: string;
    points: string[];
};

type WhyPoint = {
    title: string;
    desc: string;
};

type EngagementModel = {
    name: string;
    desc: string;
    fit: string;
};

type FAQ = {
    question: string;
    answer: string;
};

type ClientProfile = {
    title: string;
    headline: string;
    bullets: string[];
    stage: string;
};

type ProcessStep = {
    title: string;
    label: string;
    desc: string;
};

type StackLink = {
    href: string;
    label: string;
    blurb: string;
};

const services: Service[] = [
    {
        title: "Drupal Engineering",
        desc:
            "Custom modules, deep integrations, performance tuning, and modern headless builds for complex content platforms.",
    },
    {
        title: "Symfony & Laravel Backends",
        desc:
            "Business backends, APIs, multi-tenant SaaS, and admin dashboards tailored to your workflows.",
    },
    {
        title: "Python APIs & Automation",
        desc:
            "Fast Python APIs, background jobs, ETL pipelines, and glue code that keeps your systems talking to each other.",
    },
    {
        title: "Web Applications (React / Next.js)",
        desc:
            "Modern, responsive applications with clean UX, server-side rendering, and performance baked in.",
    },
    {
        title: "Mobile Apps",
        desc:
            "Cross-platform apps with unified backends, analytics, and continuous delivery pipelines.",
    },
    {
        title: "Go Microservices & Workers",
        desc:
            "High-throughput services, event-driven workers, and background processing in Go.",
    },
    {
        title: "DevOps, CI/CD & Observability",
        desc:
            "Pipelines, environments, monitoring, alerting, and production hardening for your stack.",
    },
];

const serviceCTAMap: Record<string, string> = {
    "Drupal Engineering": "/stack/drupal",
    "Symfony & Laravel Backends": "/stack/symfony-laravel",
    "Python APIs & Automation": "/capabilities",
    "Web Applications (React / Next.js)": "/stack/next-react",
    "Mobile Apps": "/stack/mobile",
    "Go Microservices & Workers": "/stack/go",
    "DevOps, CI/CD & Observability": "/stack/devops",
};

const anchorMessages: string[] = [
    "From first commit to real users.",
    "You own the code, we own the execution.",
    "Senior engineers, not a factory of juniors.",
    "We measure success in shipped features.",
];

type ExtendedCaseStudy = CaseStudy & {
    image: string;
    client: string;
    duration: string;
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
};

const extendedCaseStudies: ExtendedCaseStudy[] = [
    {
        name: "MonkeysCloud Platform",
        stack: "Symfony APIs + Next.js app + Python workers + Drupal 10 site + Terraform",
        result: "Cut project setup time from hours to minutes and standardized hosting across clients.",
        tag: "SaaS / DevOps",
        image: "/images/monkeyscloud.jpg",
        client: "Web agencies & dev teams (MonkeysCloud)",
        duration: "9 months to v1 • ongoing evolution",
        challenge:
            "Agencies were juggling separate tools for tasks, Git, deployments, and server management. Spinning up a new project meant repeating the same manual setup on snowflake servers, with no single place to see project health.",
        solution:
            "We built MonkeysCloud as a multi-tenant control plane: Symfony APIs as the core brain, a Next.js app as the main dashboard, Python workers for backups and health checks, a Drupal 10 site for the marketing layer, and Terraform to codify all infrastructure for repeatable, safe provisioning.",
        metrics: [
            { label: "Project Setup Time", value: "Hours → Minutes" },
            { label: "Manual Server Work", value: "↓ ~70%" },
            { label: "Deployment Consistency", value: "Standardized via Terraform" },
            { label: "Managed Projects Capacity", value: "↑ ~30% per team" },
        ],
    },
    {
        name: "MonkeysMail Email Infrastructure",
        stack: "PHP mail APIs + hardened mail servers + Next.js dashboard + Terraform",
        result: "Gave apps reliable SMTP/API email without each team running its own mail stack.",
        tag: "SaaS / Infrastructure",
        image: "/images/monkeysmail.jpg",
        client: "Product teams using MonkeysMail",
        duration: "12 months to stable v1 • ongoing",
        challenge:
            "Teams needed reliable transactional email (SMTP and HTTP APIs) but didn’t want to own Postfix configs, DNS, deliverability tuning, and queue monitoring. There was no unified place to manage domains, credentials, and webhooks.",
        solution:
            "We designed a PHP-based API layer for sending, routing, and tracking messages, with a Next.js dashboard for domains, DNS, API keys, and webhooks. A hardened mail server cluster powers delivery, while Terraform provisions and scales the infrastructure reproducibly across environments and regions.",
        metrics: [
            { label: "Domain Onboarding", value: "Days → < 1 hour" },
            { label: "Manual Server Tweaks", value: "↓ ~80%" },
            { label: "Deliverability", value: "Improved vs. prior ad-hoc setup" },
            { label: "Incidents / Month", value: "Significant reduction" },
        ],
    },
    {
        name: "ColibriV Digital Platform",
        stack: "Next.js site + Drupal 11 content hub",
        result: "Created an investor-ready digital presence for a hydrogen-combustion aircraft program.",
        tag: "Aerospace / Deep Tech",
        image: "/images/colibriv.jpg",
        client: "ColibriV (internal product)",
        duration: "3 months initial build • ongoing brand work",
        challenge:
            "ColibriV needed a serious public face for a hydrogen-combustion aircraft program—technology roadmap, certification path, and climate impact—while keeping updates easy for a small team and credible for investors and institutions.",
        solution:
            "We used Drupal 11 as the structured content hub for technology pages, roadmaps, and updates, and built a fast, polished Next.js frontend optimized for SEO and storytelling. The site is tuned for investor traffic, with clear flows to learn about the aircraft, the engine program, and funding needs.",
        metrics: [
            { label: "SEO Technical Score", value: "≈ 98 / 100" },
            { label: "Page Performance", value: "↑ ~45% vs. initial prototype" },
            { label: "Content Publishing", value: "Weekly → Same-day updates" },
            { label: "Investor Readiness", value: "Stronger first impression & clarity" },
        ],
    },
];

const capabilities: Capability[] = [
    {
        area: "Drupal",
        points: [
            "Custom modules & distributions",
            "Headless / decoupled builds",
            "Migration from legacy CMS",
            "Caching & performance tuning",
        ],
    },
    {
        area: "Symfony & Laravel",
        points: [
            "REST & GraphQL APIs",
            "Multi-tenant SaaS platforms",
            "Complex authorization models",
            "Background jobs & queues",
        ],
    },
    {
        area: "Python & Data",
        points: [
            "Fast REST APIs with modern Python frameworks",
            "ETL pipelines and data ingestion workflows",
            "Automation scripts, integrations, and glue code",
            "Reporting backends and data quality checks",
        ],
    },
    {
        area: "Web Apps",
        points: [
            "Next.js & React interfaces",
            "Design systems & component libraries",
            "SEO-friendly and fast",
            "Role-based dashboards",
        ],
    },
    {
        area: "Mobile Apps",
        points: [
            "Cross-platform app development",
            "Offline-first and sync strategies",
            "Push notifications & in-app messaging",
            "App store deployment support",
        ],
    },
    {
        area: "Go Services",
        points: [
            "High-performance APIs",
            "Event-driven pipelines",
            "Workers and schedulers",
            "Monitoring & profiling",
        ],
    },
    {
        area: "DevOps & Cloud",
        points: [
            "CI/CD pipelines",
            "Containerization & orchestration",
            "Observability & alerting",
            "Security and hardening",
        ],
    },
];

const whyPoints: WhyPoint[] = [
    {
        title: "Workshop, not an agency machine.",
        desc:
            "We work in small, senior teams that think with you, not just take orders from a ticket system.",
    },
    {
        title: "Focused tech stack.",
        desc:
            "Drupal, Symfony, Laravel, modern JS, Python, Go, and DevOps. We say no to stacks we can't master.",
    },
    {
        title: "Production-first thinking.",
        desc:
            "We design for real-world users, traffic, and failures—not just happy-path demos.",
    },
];

const engagementModels: EngagementModel[] = [
    {
        name: "Project-based delivery",
        desc:
            "Defined scope, milestones, and outcomes for a clear project phase or product launch.",
        fit: "Best for greenfield builds, redesigns, or time-boxed modernization.",
    },
    {
        name: "Embedded squad",
        desc:
            "A ColibriCode team working alongside your engineers, sharing tools and rituals.",
        fit: "Best for ongoing roadmaps where you need extra senior capacity.",
    },
    {
        name: "Rescue & stabilization",
        desc:
            "We take over a struggling codebase, stabilize it, and put it back on a sane track.",
        fit: "Best for legacy projects, missed deadlines, and noisy production incidents.",
    },
];

const faqs: FAQ[] = [
    {
        question: "Where is ColibriCode based?",
        answer:
            "ColibriCode is based in Denver, Colorado, USA. We work in a remote-friendly way with clients across North America and Europe, keeping healthy overlap with your core hours.",
    },
    {
        question: "Which technologies do you specialize in?",
        answer:
            "We focus on Drupal, Symfony, Laravel, modern React / Next.js frontends, mobile apps, Python APIs and automation, Go microservices, and the DevOps needed to run them in production.",
    },
    {
        question: "How do we start working together?",
        answer:
            "Send a short brief: your context, the current stack (if any), timeline, and what success looks like. We'll respond with clarifying questions and a suggested engagement model.",
    },
    {
        question: "Can you work with our internal team?",
        answer:
            "Yes. Many of our engagements are embedded: we pair with your engineers, adopt your rituals (standups, sprint reviews), and keep everything documented and transparent.",
    },
    {
        question: "What size projects do you take on?",
        answer:
            "We focus on meaningful work: from focused 4–6 week builds to multi-quarter roadmaps. If we're not the right fit, we'll tell you upfront.",
    },
];

const clientProfiles: ClientProfile[] = [
    {
        title: "Product & Marketing Teams",
        headline: "You own a digital product that needs to move faster.",
        stage: "Scale-ups • Mid-market • Enterprise units",
        bullets: [
            "You have a backlog of real user-facing work, not just experiments.",
            "You need a senior team that can own full features end-to-end.",
            "You care about long-term maintainability, not just the next launch.",
        ],
    },
    {
        title: "Engineering Leaders",
        headline: "You have a roadmap, but not enough senior hands.",
        stage: "Heads of Eng • CTOs • Tech Leads",
        bullets: [
            "You want extra capacity without lowering the quality bar.",
            "You need people who can read existing code and improve it.",
            "You want partners who bring ideas, not just tickets closed.",
        ],
    },
    {
        title: "Founders & Operators",
        headline: "You need to ship something real, not just a prototype.",
        stage: "Seed to Series B • New business lines",
        bullets: [
            "You have a clear problem and real customers in sight.",
            "You want predictable delivery and transparent communication.",
            "You prefer owning your code and infrastructure from day one.",
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        title: "01 • Discovery & audit",
        label: "Understand the reality, not just the pitch deck.",
        desc:
            "We review your stack, pain points, constraints, and goals. When there’s existing code, we start with a small technical audit so we know what we’re walking into.",
    },
    {
        title: "02 • Shaping the work",
        label: "Translate goals into concrete, shippable slices.",
        desc:
            "We define a thin slice of value to ship first, map dependencies, and agree on scope, success metrics, and communication rhythm.",
    },
    {
        title: "03 • Build & iterate",
        label: "Tight feedback loops, visible progress.",
        desc:
            "We ship in small increments—demo-able chunks across Drupal, Python, Go, or frontend—so you always know what’s done, what’s in progress, and what’s next.",
    },
    {
        title: "04 • Stabilize & handover",
        label: "Production, docs, and a clean exit path.",
        desc:
            "We harden for production, add monitoring, document the important pieces, and make sure your internal team can run with the stack after we’re gone.",
    },
];

const stackNavigator: StackLink[] = [
    { href: "/stack/drupal", label: "Drupal Engineering", blurb: "Custom modules, headless, migrations, performance." },
    { href: "/stack/symfony-laravel", label: "Symfony & Laravel", blurb: "APIs, SaaS backends, auth and RBAC." },
    { href: "/stack/next-react", label: "Next.js & React", blurb: "SSR, design systems, dashboards, SEO." },
    { href: "/stack/mobile", label: "Mobile Apps", blurb: "Cross-platform, offline-first, push & analytics." },
    { href: "/stack/go", label: "Go Services", blurb: "High-throughput services, workers, pipelines." },
    { href: "/stack/devops", label: "DevOps & Cloud", blurb: "CI/CD, containers, observability, hardening." },
];

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.question ?? null);
    const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);

    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-neutral-100/30" />
                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-32">
                    <div className="max-w-3xl space-y-8 lg:flex-1">
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
              </span>
                            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                WEB & APP WORKSHOP • DENVER, CO
              </span>
                        </div>

                        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                            We design, build, and maintain{" "}
                            <span className="relative inline-block">
                <span className="relative z-10">production-ready</span>
                <span className="absolute bottom-2 left-0 h-4 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
              </span>{" "}
                            web and mobile products.
                        </h1>

                        <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                            ColibriCode is a hands-on engineering workshop based in Denver, Colorado. We focus on
                            Drupal, Symfony, Laravel, modern web apps, mobile apps, Python services, and Go microservices.
                            We work with teams that care about long-term quality, not just getting a prototype out the door.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/25 transition-all hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                            >
                                Share Your Project Brief
                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="/case-studies"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-neutral-300 bg-white px-8 py-4 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                View Case Studies
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:flex-shrink-0">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-5 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>HOW WE THINK</p>
                                </div>
                                {anchorMessages.map((msg, idx) => (
                                    <div key={msg} className="flex gap-4 items-start group">
                                        <div className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 transition-colors group-hover:bg-red-200">
                                            <span className={`text-sm font-bold ${brand.red}`}>{idx + 1}</span>
                                        </div>
                                        <p className="text-base leading-snug text-neutral-900">{msg}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ QUICK LINKS BAND (CTAs to key pages) ============ */}
            <section className="border-y border-neutral-200 bg-white/60 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                    <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
                        {[
                            { href: "/services", label: "Services" },
                            { href: "/capabilities", label: "Stack & Capabilities" },
                            { href: "/case-studies", label: "Case Studies" },
                            { href: "/engagement", label: "Engagement" },
                            { href: "/why-colibricode", label: "Why ColibriCode" },
                            { href: "/contact", label: "Contact" },
                        ].map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="group flex items-center justify-between rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition-all hover:border-red-300 hover:shadow-md"
                            >
                                {l.label}
                                <svg className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section id="services" className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>SERVICES</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                            A focused set of services around serious web and app products.
                        </h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            We go deep on a limited toolbox, combining battle-tested frameworks with sensible architecture,
                            Python and Go services, and the DevOps practices to keep everything healthy in production.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, idx) => (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/10 to-red-600/5 text-xl font-bold text-red-600/40 transition-all group-hover:from-red-600 group-hover:to-red-700 group-hover:text-white">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                                <h3 className="mb-3 pr-16 text-lg font-bold tracking-tight">{service.title}</h3>
                                <p className={`leading-relaxed ${brand.gray}`}>{service.desc}</p>
                                <div className="mt-5">
                                    <a
                                        href={serviceCTAMap[service.title] || "/services"}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
                                    >
                                        Learn more
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                        >
                            Explore all services
                        </a>
                        <a
                            href="/engagement"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                        >
                            See engagement models
                        </a>
                    </div>
                </div>
            </section>

            {/* ============ STACK & CAPABILITIES TEASER (links to stack pages) ============ */}
            <section className="py-24 bg-neutral-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>STACK & CAPABILITIES</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">The stack we lead with.</h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            Your product deserves proven tools. Dive deeper into the parts of the stack we use the most, and how we
                            apply them in real projects.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {stackNavigator.map((s) => (
                            <a
                                key={s.href}
                                href={s.href}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold">{s.label}</h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{s.blurb}</p>
                                <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600">
                  Read more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="/capabilities"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                        >
                            See all capabilities
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= WHO WE WORK WITH ================= */}
            <section id="clients" className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>WHO WE WORK WITH</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                            Teams that get the most value from ColibriCode.
                        </h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            We’re a great fit when there is real product work to do, ownership to share, and a stack that needs senior
                            attention—whether that’s Drupal, Python, Go, or all of the above.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {clientProfiles.map((cp) => (
                            <div
                                key={cp.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-red-500">{cp.stage}</p>
                                <h3 className="relative mt-3 text-xl font-bold">{cp.title}</h3>
                                <p className={`relative mt-3 text-sm ${brand.gray}`}>{cp.headline}</p>
                                <ul className="relative mt-5 space-y-2 text-sm text-neutral-700">
                                    {cp.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href="/why-colibricode"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                        >
                            Why ColibriCode
                        </a>
                        <a
                            href="/engagement"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                        >
                            Engagement models
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= CAPABILITIES ================= */}
            <section id="capabilities" className="bg-neutral-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">CAPABILITIES</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">What we actually do inside your stack.</h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
                            Beyond buzzwords, here is what ColibriCode teams build and maintain day-to-day across CMS, backend,
                            Python data work, frontend, and infrastructure.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((cap) => (
                            <div
                                key={cap.area}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all hover:border-red-900/50"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative mb-6 flex items-center gap-3 text-xl font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700">
                    <span className="text-sm">◆</span>
                  </span>
                                    {cap.area}
                                </h3>
                                <ul className="relative space-y-3 text-neutral-300">
                                    {cap.points.map((point) => (
                                        <li key={point} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        <a
                            href="/capabilities"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                        >
                            Explore capabilities
                        </a>
                        <a
                            href="/stack/devops"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-500 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                        >
                            See DevOps & Cloud
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= WHY ================= */}
            <section id="why" className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-white" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>WHY COLIBRICODE</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">A workshop mindset with long-term ownership.</h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            We’re not here to throw code over the wall. We make sure what we build can be owned and extended by your team later.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {whyPoints.map((wp, idx) => (
                            <div
                                key={wp.title}
                                className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-red-600/5 to-transparent" />
                                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-2xl font-bold text-white shadow-lg shadow-red-600/25">
                                    {idx + 1}
                                </div>
                                <h3 className="relative mb-4 text-xl font-bold">{wp.title}</h3>
                                <p className={`relative leading-relaxed ${brand.gray}`}>{wp.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="/why-colibricode"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                        >
                            Read the full why
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= ENGAGEMENT ================= */}
            <section id="engagement" className="bg-neutral-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>ENGAGEMENT MODELS</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">Ways we plug into your product work.</h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            Different stages need different shapes of collaboration. We keep our models simple and transparent.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {engagementModels.map((em) => (
                            <div
                                key={em.name}
                                className="relative overflow-hidden rounded-3xl border-2 border-neutral-200 bg-white p-8 transition-all hover:border-red-200 hover:shadow-xl"
                            >
                                <h3 className="mb-4 text-xl font-bold">{em.name}</h3>
                                <p className={`mb-6 leading-relaxed ${brand.gray}`}>{em.desc}</p>
                                <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                                    <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>BEST FOR</p>
                                    <p className="text-sm font-medium text-neutral-900">{em.fit}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="/engagement"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                        >
                            Explore engagement options
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= HOW WE WORK ================= */}
            <section id="process" className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>HOW WE WORK</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">A clear, opinionated delivery process.</h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            Whether we’re tuning a Drupal site, building a Python API, or splitting a Go service out of a monolith, we
                            follow the same rhythm: learn fast, ship small, and leave things better than we found them.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step) => (
                            <div
                                key={step.title}
                                className="relative flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{step.title}</p>
                                <h3 className="text-sm font-semibold text-neutral-900">{step.label}</h3>
                                <p className={`text-sm leading-relaxed ${brand.gray}`}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                        >
                            See how this maps to our services
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= CASE STUDIES ================= */}
            <section id="case-studies" className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>CASE STUDIES</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">Selected work and measurable outcomes.</h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            We focus on outcomes: faster sites, more reliable flows, simpler operations — and data pipelines that Python
                            and Go services can actually keep up with.
                        </p>
                    </div>

                    <div className="mb-8 flex flex-wrap justify-center gap-3">
                        {extendedCaseStudies.map((cs, idx) => (
                            <button
                                key={cs.name}
                                onClick={() => setActiveCaseStudy(idx)}
                                className={`rounded-xl border-2 px-6 py-3 text-sm font-semibold transition-all ${
                                    activeCaseStudy === idx
                                        ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/25"
                                        : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:shadow-md"
                                }`}
                            >
                                {cs.tag}
                            </button>
                        ))}
                    </div>

                    {extendedCaseStudies.map((cs, idx) => (
                        <div key={cs.name} className={`${activeCaseStudy === idx ? "block" : "hidden"}`}>
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="relative overflow-hidden rounded-3xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent z-10" />
                                    <img src={cs.image} alt={cs.name} className="h-full w-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 z-20">
                    <span className="inline-block rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                      {cs.tag}
                    </span>
                                        <h3 className="mt-3 text-2xl font-bold text-white">{cs.name}</h3>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                                <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-neutral-700">{cs.client}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                                <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-neutral-700">{cs.duration}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red} mb-2`}>TECHNOLOGY STACK</p>
                                        <p className="text-sm font-medium text-neutral-600">{cs.stack}</p>
                                    </div>

                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red} mb-2`}>THE CHALLENGE</p>
                                        <p className={`text-sm leading-relaxed ${brand.gray}`}>{cs.challenge}</p>
                                    </div>

                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red} mb-2`}>OUR SOLUTION</p>
                                        <p className={`text-sm leading-relaxed ${brand.gray}`}>{cs.solution}</p>
                                    </div>

                                    <div className="pt-2">
                                        <a
                                            href="/case-studies"
                                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                                        >
                                            Browse more case studies
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {cs.metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                                    >
                                        <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                                            {metric.label}
                                        </p>
                                        <p className="relative mt-2 text-3xl font-bold text-red-600">{metric.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= DENVER / REMOTE ================= */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-950 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">DENVER • REMOTE-FIRST</p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                                Aligned with US timezones, comfortable with global teams.
                            </h2>
                            <p className="mt-6 text-lg text-neutral-300">
                                We’re based in Denver, Colorado, working mostly in US hours with easy overlap to both coasts and parts of
                                Europe. Standups, sprint reviews, async updates—whatever keeps your team informed and unblocked.
                            </p>
                        </div>
                        <div className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                            {[
                                "Clear written communication and up-front planning.",
                                "Engineering decisions explained in plain language.",
                                "Documentation that helps your team own the codebase later.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700">
                                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-neutral-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section id="faq" className="py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>FAQ</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                            Questions teams usually ask before we start.
                        </h2>
                        <p className={`mx-auto mt-6 max-w-2xl text-lg ${brand.gray}`}>
                            If you don’t see your situation here, that’s okay. Share context in your first email and we’ll be honest about fit.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((item) => {
                            const isOpen = openFaq === item.question;
                            return (
                                <div
                                    key={item.question}
                                    className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq((prev) => (prev === item.question ? null : item.question))}
                                        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50"
                                    >
                                        <span className="pr-8 text-lg font-semibold">{item.question}</span>
                                        <span
                                            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                                                isOpen ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-600"
                                            }`}
                                        >
                      {isOpen ? "−" : "+"}
                    </span>
                                    </button>
                                    {isOpen && (
                                        <div className={`border-t border-neutral-200 bg-neutral-50 px-6 py-5 ${brand.gray}`}>{item.answer}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CONTACT CTA ================= */}
            <section id="contact" className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/30 to-neutral-50 p-12 shadow-2xl lg:p-16">
                        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                        <div className="relative grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-center">
                            <div>
                                <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>START A PROJECT</p>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                    Have a Drupal, PHP, Python, Go, or app project in mind?
                                </h2>
                                <p className={`mt-6 text-lg leading-relaxed ${brand.gray}`}>
                                    Email us a short brief with context, current stack, timeline, and what “success” looks like. We’ll reply
                                    with concrete next steps—no sales scripts, just an honest view of what we’d do.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href="/why-colibricode"
                                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                                    >
                                        Why ColibriCode
                                    </a>
                                    <a
                                        href="/engagement"
                                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                                    >
                                        Engagement models
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="mailto:hello@colibricode.com"
                                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-5 text-lg font-semibold text-white shadow-xl shadow-red-600/25 transition-all hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    hello@colibricode.com
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-300 bg-white px-8 py-5 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
                                >
                                    Open the contact page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
