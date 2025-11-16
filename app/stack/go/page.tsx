"use client";

import React from "react";

const brand = {
    red: "text-red-600",
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
        label: "Core focus",
        value: "Go services & APIs",
        hint: "Microservices, gRPC/HTTP, queues, and workers.",
    },
    {
        label: "Scale",
        value: "High-throughput workloads",
        hint: "Concurrency, streaming, and latency-sensitive paths.",
    },
    {
        label: "Architecture",
        value: "Event-driven & service-oriented",
        hint: "Message buses, contracts, and observability built in.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US-based, remote-first engineering workshop.",
    },
];

const slices: Slice[] = [
    {
        title: "Microservices that stay understandable",
        desc: "We use Go to carve out clear, well-defined services—not an explosion of tiny, hard-to-manage codebases.",
        bullets: [
            "Service boundaries designed around business capabilities, not just endpoints.",
            "Stable contracts for other services, frontends, and partners to rely on.",
            "Operational playbooks so your team knows how each service behaves in production.",
        ],
    },
    {
        title: "Workers and background jobs that don’t fall behind",
        desc: "We build Go workers for the kind of jobs that must keep up as traffic and data grow.",
        bullets: [
            "Queue- and stream-based workloads for emails, notifications, billing, and more.",
            "Backpressure and retry strategies that protect upstream systems.",
            "Metrics around throughput, lag, and failure rates—not just logs.",
        ],
    },
    {
        title: "Streaming and event-driven data flows",
        desc: "Go is a strong fit for systems that react to events and streams instead of periodic batch scripts.",
        bullets: [
            "Consumers and producers for Kafka, NATS, Redis Streams, or cloud-native equivalents.",
            "Fan-out and fan-in patterns for complex processing pipelines.",
            "Compact services that can be safely scaled horizontally when load spikes.",
        ],
    },
    {
        title: "High-throughput APIs where latency matters",
        desc: "When response time and resource efficiency matter, we use Go to build predictable, performant APIs.",
        bullets: [
            "Tuned handlers with careful attention to allocations and timeouts.",
            "Resilient outbound calls to databases and third-party APIs.",
            "Guardrails around rate limits, abuse, and noisy neighbors.",
        ],
    },
];

const patterns: Pattern[] = [
    {
        title: "Backend for real-time features",
        desc: "Go services behind WebSockets, SSE, or pub/sub deliver low-latency updates to web and mobile clients.",
        tag: "Real-time",
    },
    {
        title: "Billing, ledgers, and accounting flows",
        desc: "Workers and services that process payments, invoices, and accounting events with strong guarantees.",
        tag: "Finance",
    },
    {
        title: "Messaging and notifications pipelines",
        desc: "Centralized Go services that orchestrate email, SMS, and push across multiple providers.",
        tag: "Messaging",
    },
    {
        title: "APIs for partner and public integrations",
        desc: "Externally-facing Go APIs with strong contracts, documentation, and rate limiting.",
        tag: "API",
    },
];

const faqs: FAQ[] = [
    {
        q: "Why use Go instead of PHP, Python, or Node for these services?",
        a: "We pick Go when concurrency, throughput, and resource efficiency matter. PHP and Python stay great for product backends, CMS, and data work. Go shines for services that must handle lots of connections, events, or background jobs without getting bogged down.",
    },
    {
        q: "How does Go fit with our Drupal, Symfony/Laravel, or Python stack?",
        a: "We usually introduce Go as a focused set of services: high-throughput APIs, workers, and streaming consumers. These services communicate with your existing PHP or Python systems via stable HTTP/gRPC APIs or message buses, keeping responsibilities clear.",
    },
    {
        q: "Do we need to go ‘all in’ on microservices to use Go?",
        a: "No. Many projects start with one or two Go services handling specific workloads—notifications, streaming, or heavy computations—while the rest of the system remains a monolith or a small set of services.",
    },
    {
        q: "Can you help us operate and observe these services?",
        a: "Yes. We typically set up containerization, CI/CD, logging, metrics, and tracing, and integrate Go services into your existing observability stack so they’re as visible as your PHP, JS, and Python components.",
    },
];

export default function GoStackPage() {
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
              STACK / GO SERVICES
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Go Services.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    Microservices, workers, streaming, high-throughput APIs.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We use Go for the parts of your platform that must be fast, reliable,
                                and easy to scale: concurrency-heavy services, event pipelines, and
                                APIs that sit in the critical path.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA. We plug Go into existing Drupal,
                                Symfony/Laravel, JavaScript, and Python stacks, focusing on clear
                                contracts and operations—not hype.
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

            {/* Why Go here */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY GO HERE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Go where concurrency, throughput, and reliability matter.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We don’t rewrite everything in Go. We use it where its strengths are
                            obvious: services that must handle lots of connections, events, or jobs
                            without burning resources.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR THE PLATFORM
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Strong, clear boundaries.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Go services own specific responsibilities, not random collections of
                                endpoints.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Service designs based on capabilities, not frameworks.</li>
                                <li>Contracts documented for other teams and partners.</li>
                                <li>Versioning that lets you evolve without breaking everyone.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR ENGINEERING
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                A predictable, observable runtime.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We lean into Go’s strengths but keep codebases boring: tests, metrics,
                                and clear error handling.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Standardized HTTP/gRPC patterns and middleware.</li>
                                <li>Structured logging and tracing from day one.</li>
                                <li>Load and failure testing before you flip the switch.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR THE BUSINESS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Performance where it pays back.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We pick Go for the paths where speed, consistency, and uptime directly
                                impact revenue or customer trust.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Checkout flows, ledgers, and critical APIs.</li>
                                <li>Streaming features, dashboards, and messaging.</li>
                                <li>Worker fleets that keep up as traffic grows.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we build Go services */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE BUILD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Microservices, workers, streaming, high-throughput APIs.
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

            {/* Common patterns */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            COMMON PATTERNS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Where Go carries the most weight in your architecture.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            We use Go to anchor the workloads that need concurrency, resilience, and
                            clear boundaries—while your Drupal, Symfony/Laravel, Python, or JS
                            services keep driving product features.
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

            {/* Integration with the rest of the stack */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            PLAYING NICE WITH OTHERS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Go services that respect your Drupal, PHP, JS, and Python code.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
                            We treat Go as one part of your system—not the center of the universe.
                            Interfaces stay stable, observability is shared, and teams can reason
                            about how everything fits together.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                CONTRACTS & TOPOLOGY
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Go services expose HTTP/gRPC APIs or events with clear boundaries;
                    PHP, JS, and Python build features on top of those capabilities.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Event buses allow Drupal, Laravel, and Python producers/consumers
                    to collaborate with Go workers cleanly.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Shared API standards (errors, pagination, auth) across stacks so
                    clients see one coherent platform.
                  </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                DEPLOYMENT & OBSERVABILITY
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Containerized Go services that slide into existing CI/CD
                    pipelines, environments, and infrastructure.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Metrics, logs, and traces in the same tools your team already uses
                    for PHP, JS, and Python.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Runbooks and dashboards that make it obvious when to scale,
                    investigate, or adjust capacity.
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
                            Questions teams usually ask about Go work.
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
                                TALK ABOUT GO SERVICES
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have microservice, worker, or streaming work that needs Go?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Share where Go could help—high-throughput APIs, event pipelines,
                                critical workers—and how it needs to fit with your existing stack.
                                We’ll outline a concrete way to introduce or improve Go services without
                                destabilizing what already works.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Go%20Services%20%2F%20Microservices%20%26%20Workers"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about Go work
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
                                A short description of your current architecture plus the Go-shaped
                                problems you see is enough for us to respond with a focused plan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
