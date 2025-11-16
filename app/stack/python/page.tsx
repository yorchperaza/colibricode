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

type Pattern = {
    title: string;
    desc: string;
    tag: string;
};

type FAQ = {
    q: string;
    a: string;
};

const highlights: Highlight[] = [
    {
        label: "Focus",
        value: "Python APIs & services",
        hint: "FastAPI, Django REST, background workers, CLIs.",
    },
    {
        label: "Experience",
        value: "Data & automation",
        hint: "ETL jobs, reporting, bots, and glue code.",
    },
    {
        label: "Ecosystem",
        value: "Pandas, Celery, SQL, cloud SDKs",
        hint: "Pragmatic picks, not ten libraries per problem.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US-based, remote-first engineering workshop.",
    },
];

const slices: Slice[] = [
    {
        title: "APIs that play well with web and mobile",
        desc: "We build Python APIs that feel predictable to your React, mobile, or partner clients.",
        bullets: [
            "FastAPI or Django REST for clear, documented endpoints.",
            "Response shapes designed for real frontend and mobile needs.",
            "Authentication, rate-limiting, and pagination that stay consistent as you grow.",
        ],
    },
    {
        title: "Data processing and ETL that you can trust",
        desc: "We turn scattered data—CSV dumps, third-party APIs, internal DBs—into reliable pipelines.",
        bullets: [
            "Batch and streaming jobs built with Python, SQL, and cloud data services.",
            "Idempotent ETL runs that can be re-played without corrupting results.",
            "Monitoring around freshness, failures, and anomalies—not just cron logs.",
        ],
    },
    {
        title: "Automation scripts that graduate from ‘one-off’",
        desc: "We refine your ad-hoc scripts into something your team can actually depend on.",
        bullets: [
            "Refactor existing scripts into small, testable components.",
            "Add configuration, logging, and error handling that make ops sane.",
            "Schedule jobs using Celery, cloud schedulers, or your existing tooling.",
        ],
    },
    {
        title: "Integrations that don’t become a black box",
        desc: "Python is often the glue between SaaS tools. We keep that glue observable and documented.",
        bullets: [
            "Connectors to CRMs, marketing platforms, payment providers, and internal APIs.",
            "Retry and backoff strategies for flaky external services.",
            "Dashboards or alerts when external providers change behavior or fail.",
        ],
    },
];

const patterns: Pattern[] = [
    {
        title: "Analytics & reporting services",
        desc: "Python jobs that aggregate data from your PHP/Go backends and third-party tools into dashboards or exports.",
        tag: "Data",
    },
    {
        title: "Integration hubs",
        desc: "Python services that sit between your core product and CRMs, billing, support, or marketing stacks.",
        tag: "Integrations",
    },
    {
        title: "Automation for ops and finance",
        desc: "Scripts and services that reconcile payments, sync inventory, or generate internal reports on a schedule.",
        tag: "Automation",
    },
    {
        title: "ML-adjacent plumbing",
        desc: "Pipelines and APIs that prepare data for models, call external ML services, and surface results into your product.",
        tag: "ML-Ready",
    },
];

const faqs: FAQ[] = [
    {
        q: "Which Python frameworks and tools do you typically use?",
        a: "For APIs we usually lean on FastAPI or Django REST Framework. For background work we use Celery, RQ, or cloud-native queuing. For data we combine Python with SQL, Pandas, and warehouse tools depending on your stack.",
    },
    {
        q: "How does Python fit into our existing Drupal, Symfony/Laravel, or Go stack?",
        a: "We often introduce Python as a sidecar for data and automation: ETL jobs, reporting APIs, or integration services that talk to your PHP/Go backends over stable contracts. The goal is to complement your main stack, not replace it.",
    },
    {
        q: "Can you help us clean up existing scripts and cron jobs?",
        a: "Yes. We start by inventorying your current scripts and their schedules, then group them into services or flows. From there we add configuration, logging, retries, and tests so they behave more like a product than a collection of one-offs.",
    },
    {
        q: "Do you also handle deployment and observability for these services?",
        a: "We can. That typically includes containerization, CI/CD, environment config, and metrics/logging hooks into your preferred observability tools so data jobs and integrations are visible to your team.",
    },
];

export default function PythonStackPage() {
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
              STACK / PYTHON SERVICES
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Python Services.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    APIs, data processing, automation scripts, integrations.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We use Python where it shines: services that move data, expose APIs,
                                and automate the workflows that keep your product and teams running.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA. We plug Python into existing
                                Drupal, Symfony/Laravel, JavaScript, and Go stacks—without turning your
                                platform into a science experiment.
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

            {/* Why Python here */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY PYTHON HERE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Python as the engine behind data, automation, and integrations.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We don’t force Python into the UI layer. Instead we use it to power the
                            things users feel indirectly: faster reporting, smoother integrations,
                            and fewer manual tasks.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR DATA
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Make data actually usable.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We help you move from “we have data somewhere” to repeatable flows that
                                serve products and teams.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>ETL jobs that centralize truth instead of duplicating it.</li>
                                <li>Reporting pipelines that stakeholders can rely on.</li>
                                <li>APIs that expose clean aggregates, not raw chaos.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR ENGINEERING
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Reduce one-off scripts and snowflakes.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We turn that folder of “just-run-this.py” into something your team can
                                reason about.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Shared libraries for repeated patterns and APIs.</li>
                                <li>Tests, logging, and configuration baked in.</li>
                                <li>Clear ownership, not mystery cron jobs.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR THE BUSINESS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Automate the boring, keep humans on the hard parts.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We focus Python on the glue and grunt work: reconciliations, imports,
                                syncs, and checks that people shouldn’t do manually.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Fewer spreadsheets and manual exports/imports.</li>
                                <li>Consistent workflows with clear audit trails.</li>
                                <li>Time back for product, strategy, and customer work.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we build Python services */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE BUILD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            APIs, data processing, automation scripts, integrations.
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

            {/* Patterns */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            COMMON PATTERNS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Where Python carries the most weight in your platform.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            We focus on the pieces that benefit most from Python’s ecosystem: data,
                            glue code, and integration surfaces—while keeping your primary product
                            stack cohesive.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-4">
                        {patterns.map((p) => (
                            <article
                                key={p.title}
                                className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm"
                            >
                                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-red-600/15 to-transparent blur-2xl" />
                                <span className="relative inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300">
                  {p.tag}
                </span>
                                <h3 className="relative mt-4 text-base font-semibold text-white">
                                    {p.title}
                                </h3>
                                <p className="relative mt-2 text-xs text-neutral-300">{p.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration with the rest of your stack */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            PLAYING NICE WITH OTHERS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Python services that respect your Drupal, PHP, JS, and Go code.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
                            We treat Python as a good citizen in your architecture: clear boundaries,
                            stable interfaces, and observability so the rest of your stack can depend
                            on it.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                CONTRACTS & BOUNDARIES
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    gRPC/HTTP APIs with clear ownership: Python focuses on data and
                    automation, while Drupal, Symfony/Laravel, or Go handle core
                    product logic.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Event-driven patterns where Python consumes or emits messages
                    instead of direct coupling between services.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Versioned contracts so other teams can upgrade at their own pace.
                  </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                RUNTIME & OBSERVABILITY
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Containerized workers and APIs that fit into your existing CI/CD
                    and infrastructure practices.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Metrics and traces that make it obvious when a data job or
                    integration is slow, failing, or falling behind.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Alerting that distinguishes between “can wait until morning” and
                    “wake someone up now”.
                  </span>
                                </li>
                            </ul>
                        </div>
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
                            Questions teams usually ask about Python work.
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
                                TALK ABOUT PYTHON SERVICES
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have data, automation, or integration work that needs Python?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Tell us which systems you need to connect, what data you care about,
                                and which manual tasks you’d like to retire. We’ll outline how Python
                                services can plug into your existing stack without creating a new
                                monolith.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Python%20Services%20%2F%20APIs%20%26%20Automation"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white akukho shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about Python work
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
                                A short description of your current stack (Drupal, Symfony/Laravel,
                                JS, Go, etc.) plus the Python work you’re considering is enough to
                                start a focused conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
