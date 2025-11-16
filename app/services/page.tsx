"use client";

import React from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type ServiceArea = {
    id: string;
    title: string;
    tagline: string;
    longDesc: string;
    outcomes: string[];
    tech: string[];
};

type Deliverable = {
    title: string;
    desc: string;
};

type Slice = {
    title: string;
    desc: string;
};

type Fit = {
    title: string;
    bullets: string[];
};

type Industry = {
    name: string;
    examples: string[];
};

type CollabPillar = {
    title: string;
    desc: string;
};

const serviceAreas: ServiceArea[] = [
    {
        id: "drupal",
        title: "Drupal Engineering",
        tagline: "Modern Drupal for serious content platforms.",
        longDesc:
            "We treat Drupal as an application framework, not just a CMS. From custom modules and distributions to decoupled builds, we make Drupal a stable foundation for complex content, permissions, and integrations.",
        outcomes: [
            "Faster page loads and more stable editing experience.",
            "Clean upgrade path from legacy Drupal (7/8) to Drupal 10+.",
            "Tighter alignment between content modeling and business rules.",
            "Reduced custom spaghetti by moving logic into well-structured modules.",
        ],
        tech: [
            "Drupal 9/10/11",
            "Custom modules & distributions",
            "Headless/decoupled architectures",
            "Migrations (Migrate API)",
            "Caching (Redis/Varnish/CDN)",
        ],
    },
    {
        id: "php-backends",
        title: "Symfony & Laravel Backends",
        tagline: "Business logic, not just boilerplate controllers.",
        longDesc:
            "We build and maintain backends where data modeling, workflows, and performance matter. Think multi-tenant SaaS, admin consoles, and APIs that real products depend on every day.",
        outcomes: [
            "Well-structured domain logic instead of controllers doing everything.",
            "Clear separation between read/write paths and external integrations.",
            "APIs that are pleasant for front-end teams to consume.",
            "Background jobs that stay reliable under real-world load.",
        ],
        tech: [
            "Symfony & Laravel",
            "REST & GraphQL APIs",
            "Multi-tenant SaaS patterns",
            "Queues & workers (Redis, SQS, etc.)",
            "Auth, ACL, and audit trails",
        ],
    },
    {
        id: "web-apps",
        title: "Web Applications (React / Next.js)",
        tagline: "Interfaces that feel fast, predictable, and trustworthy.",
        longDesc:
            "We design and build web apps where UX, accessibility, and performance matter: dashboards, portals, internal tools, and customer-facing products built on React and Next.js.",
        outcomes: [
            "Interfaces that stay fast even as your data and users grow.",
            "Design systems and components your team can reuse safely.",
            "SSR/ISR strategies that keep SEO and performance aligned.",
            "Reduced complexity in data fetching and state management.",
        ],
        tech: [
            "React & Next.js",
            "Design systems / component libraries",
            "SSR/ISR and routing",
            "Form-heavy UX and dashboards",
            "Integration with existing APIs",
        ],
    },
    {
        id: "mobile",
        title: "Mobile Apps",
        tagline: "Cross-platform apps glued to a solid backend.",
        longDesc:
            "We ship mobile apps that share a backbone with your web or backend stack. One consistent source of truth, instrumented and observable, for iOS and Android users.",
        outcomes: [
            "Unified APIs across web and mobile clients.",
            "Offline-first flows for unreliable networks.",
            "Consistent analytics and event tracking across devices.",
            "Smooth deployment pipelines from code to app stores.",
        ],
        tech: [
            "React Native / cross-platform stacks",
            "API design for mobile clients",
            "Push notifications and messaging",
            "Offline sync strategies",
            "App store deployment pipelines",
        ],
    },
    {
        id: "python-go",
        title: "Python & Go Services",
        tagline: "Jobs, microservices, and data flows that actually hold up.",
        longDesc:
            "We add Python and Go where they fit best: data processing, workers, and high-throughput services. We care about observability, retries, and backpressure—not just ‘it works on my machine’.",
        outcomes: [
            "Background jobs with clear SLAs and failure modes.",
            "Streaming and batch pipelines that are debuggable.",
            "Services that scale predictably as traffic grows.",
            "Less guesswork in performance thanks to metrics and profiling.",
        ],
        tech: [
            "Python workers & scripts",
            "Go microservices and APIs",
            "Event-driven architectures",
            "Streaming and batch pipelines",
            "Instrumentation & tracing",
        ],
    },
    {
        id: "devops",
        title: "DevOps, CI/CD & Observability",
        tagline: "From ‘it runs on my laptop’ to repeatable, safe releases.",
        longDesc:
            "We help teams mature their delivery pipeline: reproducible environments, safe deploys, and visibility into what production is doing—without turning everything into a science project.",
        outcomes: [
            "One-click or one-command deploys instead of manual checklists.",
            "Infrastructure that can be explained and evolved by your team.",
            "Monitoring and alerts tied to business health, not just CPU.",
            "Reduced downtime from safer rollouts and rollback strategies.",
        ],
        tech: [
            "CI/CD (GitHub Actions, GitLab CI, etc.)",
            "Containers & orchestration",
            "Infra-as-code",
            "Metrics, logs, and tracing",
            "Security hardening and access control",
        ],
    },
];

const projectSlices: Slice[] = [
    {
        title: "Platform modernization",
        desc: "Upgrade legacy Drupal/PHP systems, extract services into Symfony/Laravel/Python/Go, and improve deployments and observability without a risky ‘big bang’ rewrite.",
    },
    {
        title: "New product or feature line",
        desc: "Design and build a new product slice using Next.js, Python/Go services, and a Drupal or PHP-based admin backbone.",
    },
    {
        title: "Performance & reliability pass",
        desc: "Target slow pages, noisy incidents, and fragile release pipelines, then fix them in a measured, test-backed way.",
    },
];

const deliverables: Deliverable[] = [
    {
        title: "Architecture & implementation",
        desc: "We don’t stop at diagrams. We write the code, tests, and infrastructure to make the architecture real.",
    },
    {
        title: "Playbooks & documentation",
        desc: "Runbooks, handover docs, and decision records so your team can operate and extend what we built.",
    },
    {
        title: "Onboarding support",
        desc: "We help internal engineers get comfortable with new systems via pairing sessions and guided tours.",
    },
    {
        title: "Instrumentation & dashboards",
        desc: "Metrics and logs wired into dashboards so you can see how your stack behaves under real traffic.",
    },
];

const fits: Fit[] = [
    {
        title: "Digital teams with a growing backlog",
        bullets: [
            "You have more ideas than senior engineering time.",
            "You need to ship meaningful slices without derailing your roadmap.",
            "You want partners who can own outcomes, not just tickets.",
        ],
    },
    {
        title: "Product companies with legacy platforms",
        bullets: [
            "Core revenue still runs on Drupal or PHP backends that feel fragile.",
            "Releases are scary and incidents are too frequent.",
            "You want evolution, not a risky ‘throw everything away’ rewrite.",
        ],
    },
    {
        title: "Startups with real traction",
        bullets: [
            "You already have users and revenue, and the stack is showing cracks.",
            "You want help formalizing APIs, workers, and observability.",
            "You care about long-term maintainability, not one-off hacks.",
        ],
    },
];

const industries: Industry[] = [
    {
        name: "B2B SaaS & Platforms",
        examples: [
            "Customer dashboards on Next.js with PHP/Go APIs.",
            "Multi-tenant admin consoles backed by Symfony or Laravel.",
            "Billing and subscription workflows integrated with Stripe and CRM tools.",
        ],
    },
    {
        name: "Content-heavy & media",
        examples: [
            "Publishing platforms on Drupal 10/11 with headless frontends.",
            "Content pipelines that blend editorial work with automation.",
            "High-traffic landing pages with strong SEO and performance budgets.",
        ],
    },
    {
        name: "Fintech & transactional systems",
        examples: [
            "Payment and payout flows with strong audit and observability.",
            "Real-time notifications powered by Python/Go workers.",
            "Fraud and risk signals surfaced to internal tools and dashboards.",
        ],
    },
    {
        name: "Internal tools & ops",
        examples: [
            "Ops dashboards that unify data from multiple backends.",
            "Case management tools replacing shared spreadsheets.",
            "Workflow engines that glue together SaaS tools and custom logic.",
        ],
    },
];

const collabPillars: CollabPillar[] = [
    {
        title: "Clear communication",
        desc: "Short written updates, honest trade-offs, and a bias toward clarity over jargon. We want product, design, and engineering to stay on the same page.",
    },
    {
        title: "Simple rituals",
        desc: "We fit into your standups, planning, and reviews—or help you create lightweight ones if you don’t have them yet. No heavy processes unless they earn their keep.",
    },
    {
        title: "Code you can own",
        desc: "We write code, docs, and tests so your internal team can take over comfortably. Our goal is to make ourselves less necessary over time, not more.",
    },
    {
        title: "Production-first mindset",
        desc: "We instrument what we build, wire it into your monitoring stack, and define basic SLOs so you’re never flying blind once it hits real traffic.",
    },
];

export default function ServicesPage() {
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
              SERVICES • DENVER-BASED WEB & APP WORKSHOP
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                A focused set of services around serious{" "}
                                <span className="relative inline-block">
                  <span className="relative z-10">Drupal, PHP, JS, Python,</span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>{" "}
                                and Go products.
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                ColibriCode is a senior-heavy engineering workshop based in Denver,
                                USA. We help teams build and maintain platforms where performance,
                                reliability, and long-term ownership matter more than quick demos.
                            </p>
                            <p className="text-sm text-neutral-500">
                                Most of our work happens inside a stack your team already knows:
                                Drupal, Symfony, Laravel, React/Next.js, Python, Go, and the DevOps
                                that keeps everything running in production.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#services-grid"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Explore service areas
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
                                    href="/engagement"
                                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    See engagement models
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm text-sm">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    WHAT WE TEND TO OWN
                                </p>
                                <ul className="space-y-2 text-neutral-800">
                                    <li>
                                        <span className="font-semibold">Platforms:</span> Drupal, PHP
                                        backends, Next.js frontends, Python/Go workers.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Critical paths:</span> auth,
                                        onboarding, payments, content pipelines, internal tooling.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Operational glue:</span> CI/CD,
                                        observability, runbooks, and incident reduction.
                                    </li>
                                </ul>
                                <p className="text-xs text-neutral-500">
                                    We&#39;re not trying to do everything. We go deep on a small set of
                                    technologies and say “no” when something is outside our lane.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section id="services-grid" className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            SERVICE AREAS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            The places we add the most leverage.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Whether you bring us a single problematic subsystem or an entire
                            platform, we tend to work inside these six areas, often combining
                            several of them into one engagement.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {serviceAreas.map((s, idx) => (
                            <article
                                key={s.id}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                            >
                                <div className="absolute right-0 top-0 h-28 w-28 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <div className="relative mb-4 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            {String(idx + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="mt-1 text-lg font-bold text-neutral-900">
                                            {s.title}
                                        </h3>
                                    </div>
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-xs font-bold text-white shadow-md shadow-red-600/30">
                    {["CMS", "PHP", "WEB", "APP", "DATA", "OPS"][idx]}
                  </span>
                                </div>

                                <p className={`relative text-sm font-medium ${brand.gray}`}>
                                    {s.tagline}
                                </p>

                                <p className={`relative mt-3 text-sm ${brand.gray}`}>
                                    {s.longDesc}
                                </p>

                                <div className="relative mt-4 space-y-1.5 text-xs text-neutral-800">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                        TYPICAL OUTCOMES
                                    </p>
                                    <ul className="space-y-1.5">
                                        {s.outcomes.slice(0, 3).map((o) => (
                                            <li key={o} className="flex gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                                <span>{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative mt-4 space-y-1.5 text-xs text-neutral-700">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                        TYPICAL TOOLBOX
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {s.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who we're a good fit for */}
            <section className="py-20 bg-neutral-50 border-y border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            FIT & FOCUS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Who we’re usually a strong fit for.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We work best with teams that already feel the weight of their product:
                            users, revenue, incidents, and a roadmap that can’t slow down. If this
                            sounds like you, we’ll probably get along.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {fits.map((f) => (
                            <article
                                key={f.title}
                                className="relative rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {f.title}
                                </h3>
                                <ul className="relative mt-3 space-y-2 text-sm text-neutral-700">
                                    {f.bullets.map((b) => (
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

            {/* Project slices */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            HOW WE SLICE WORK
                        </p>
                        <h2 className="mt-4 text-3px font-bold tracking-tight lg:text-4xl">
                            We prefer thin, high-impact slices over vague “ongoing help”.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
                            Instead of a giant, fuzzy scope, we cut the work into clear slices that
                            ship value on their own. Each slice can live in Drupal, PHP, JS,
                            Python/Go, or the DevOps layer—and usually touches more than one.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {projectSlices.map((p) => (
                            <article
                                key={p.title}
                                className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-950 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-white">
                                    {p.title}
                                </h3>
                                <p className="relative mt-3 text-sm text-neutral-300">{p.desc}</p>
                                <p className="relative mt-4 text-[11px] text-neutral-500">
                                    We design slices to be reversible, observable, and easy to hand over
                                    to your internal team once the path is proven.
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & use cases */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            INDUSTRIES & USE CASES
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Where our stack tends to shine.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {industries.map((ind) => (
                            <article
                                key={ind.name}
                                className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {ind.name}
                                </h3>
                                <ul className="relative mt-3 space-y-2 text-sm text-neutral-700">
                                    {ind.examples.map((ex) => (
                                        <li key={ex} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{ex}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-500">
                        If your industry isn’t listed here but your stack looks familiar—Drupal,
                        PHP, React/Next.js, Python, Go, and a modern cloud—there’s a good chance
                        we can help.
                    </p>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-20 bg-neutral-50 border-y border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHAT YOU GET
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Concrete deliverables, not just “consulting hours”.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {deliverables.map((d) => (
                            <article
                                key={d.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {d.title}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{d.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* How we collaborate */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            HOW WE COLLABORATE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            What it’s like to work with ColibriCode.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
                            We slot into your team as an embedded workshop: a small group of senior
                            engineers focused on outcomes, communication, and leaving your stack in
                            better shape than we found it.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {collabPillars.map((p) => (
                            <article
                                key={p.title}
                                className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-white">{p.title}</h3>
                                <p className="relative mt-2 text-sm text-neutral-300">{p.desc}</p>
                            </article>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-500">
                        We’re happy to work in your tools—Jira, Linear, GitHub, GitLab—as long as
                        there’s a single source of truth and someone responsible for priorities.
                    </p>
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
                                TALK ABOUT SERVICES
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Unsure which service area matches your current pain? That’s normal.
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Send us a brief description of where things hurt today—slow Drupal
                                pages, shaky releases, missing observability, a React app that’s grown
                                wild, or Python/Go workers failing silently. We&#39;ll map that pain
                                to a concrete service area and a small starting slice.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Services%20with%20ColibriCode"
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
                                We’re based in Denver and work mostly with teams in North America and
                                Europe, with overlapping hours and English-first communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
