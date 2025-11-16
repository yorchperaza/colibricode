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
        value: "Cross-platform apps",
        hint: "React Native, shared logic, native where it matters.",
    },
    {
        label: "Experience",
        value: "Offline-first, push, analytics",
        hint: "Built for real users, not just POCs.",
    },
    {
        label: "Backends",
        value: "PHP, Python, Go",
        hint: "APIs that work well with mobile clients.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US-based, remote-first team.",
    },
];

const slices: Slice[] = [
    {
        title: "Cross-platform, with room for native",
        desc: "We start with shared code in React Native and add native bridges only where the product truly needs them.",
        bullets: [
            "Single codebase targeting iOS and Android where it makes sense.",
            "Well-defined boundaries for any platform-specific components.",
            "Navigation, state, and theming patterns that survive real growth.",
        ],
    },
    {
        title: "Offline-first from day one",
        desc: "We design flows assuming that networks will be slow, flaky, or completely unavailable at times.",
        bullets: [
            "Local caching and queues for critical actions.",
            "Conflict-aware sync strategies with your APIs.",
            "Clear UI states for syncing, pending, and failed operations.",
        ],
    },
    {
        title: "Push notifications done with restraint",
        desc: "Push should feel helpful, not spammy. We wire it to your real events and user preferences.",
        bullets: [
            "Event-driven triggers from your PHP, Python, or Go services.",
            "Per-channel opt-in and granular user preferences.",
            "Campaigns and journeys that you can adjust without full releases.",
        ],
    },
    {
        title: "Analytics that actually answers questions",
        desc: "Instrumentation is tied to business goals: what users do, where they stall, and what features succeed.",
        bullets: [
            "Event models that match your domain, not just generic ‘screen_view’.",
            "Funnels and cohorts that align with your roadmap.",
            "Crash reporting and performance metrics wired into your ops stack.",
        ],
    },
];

const patterns: Pattern[] = [
    {
        title: "Customer & partner apps",
        desc: "Portals for customers, vendors, or partners that extend your web experience into mobile without duplicating everything.",
        tag: "External",
    },
    {
        title: "Operational & field tools",
        desc: "Apps for technicians, drivers, and field teams who work in low-connectivity environments and need reliable offline behavior.",
        tag: "Internal",
    },
    {
        title: "SaaS product companions",
        desc: "Mobile frontends for existing SaaS products, focused on the most critical on-the-go flows instead of shrinking your web UI.",
        tag: "SaaS",
    },
    {
        title: "Exec & analytics views",
        desc: "Lightweight mobile dashboards that surface KPIs and alerts to decision-makers wherever they are.",
        tag: "Analytics",
    },
];

const faqs: FAQ[] = [
    {
        q: "Which mobile technologies do you typically use?",
        a: "We primarily use React Native for cross-platform development, with native iOS/Android modules where performance or device capabilities require it. On the backend we usually integrate with Drupal, Symfony/Laravel, Python, or Go services via well-defined APIs.",
    },
    {
        q: "Can you integrate with our existing PHP, Python, or Go backend?",
        a: "Yes. We design API contracts that work well on mobile: predictable payloads, stable versions, and clear error semantics. We can help you adapt or extend your existing backend to better support offline sync, authentication, and push notifications.",
    },
    {
        q: "Do you handle app store submissions and releases?",
        a: "We can set up CI/CD pipelines, provisioning, and release strategies for both iOS and Android. That usually includes signing, build automation, environment configuration, and a release cadence that fits your team.",
    },
    {
        q: "Can you improve an existing mobile app instead of rebuilding it?",
        a: "Often, yes. We start by mapping the current architecture, identifying key issues—performance, instability, UX—and then propose a staged plan: refactors, new features, and only rewriting what truly blocks you.",
    },
];

export default function MobileStackPage() {
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
              STACK / MOBILE APPS
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Mobile Apps.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    Cross-platform apps, offline-first, push &amp; analytics.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We build mobile apps that feel fast, reliable, and intentional—on iOS
                                and Android—without turning maintenance into a long-term burden.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA. We work with teams that already
                                have strong backends in Drupal, Symfony/Laravel, Python, or Go and need
                                mobile surfaces that plug in cleanly.
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

            {/* Why mobile apps with us */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY MOBILE APPS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Not just “an app”, but a product surface with a job to do.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We spend as much time deciding what belongs in the app as we do building
                            it: the key flows, constraints, and events that matter when people are on
                            the move or offline.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR USERS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Fast, predictable interactions.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We prioritize responsiveness, touch targets, and flows that can be
                                completed in short bursts of attention.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Clear navigation for the 3–5 core jobs of the app.</li>
                                <li>Snappy lists, search, and detail views.</li>
                                <li>Meaningful errors, not generic “something went wrong”.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR ENGINEERING
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Clean sync with your backend.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We collaborate with backend teams to design APIs that are realistic for
                                mobile conditions: latency, offline, and versioning.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Efficient, cache-friendly endpoints for PHP, Python, or Go.</li>
                                <li>Stable contracts and clear deprecation paths.</li>
                                <li>Security posture aligned with your existing services.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR THE BUSINESS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Measurable impact, not vanity installs.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We tie features and metrics back to the goals that justified the app in
                                the first place.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Activation, retention, and feature usage tracked by design.</li>
                                <li>Event models that match how you talk about your business.</li>
                                <li>Experiments and rollouts planned, not improvised.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we build mobile apps */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE BUILD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Cross-platform apps, offline-first, push &amp; analytics.
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
                            Where mobile makes the most sense for your stack.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            Not every web feature belongs on mobile. We help you identify the
                            high-leverage scenarios where an app changes the experience, not just the
                            screen size.
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

            {/* Backend & infra integration */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            BACKEND &amp; INFRA
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How mobile connects to your Drupal, PHP, Python, and Go systems.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
                            We treat the app as part of your broader platform. That includes API
                            design, auth, observability, and deployment pipelines that work with your
                            existing stack.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                APIS & DATA
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Endpoints shaped for mobile: paginated, cacheable, and predictable,
                    whether they’re served by Drupal, Symfony/Laravel, Python, or Go.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Authentication flows that balance security and usability:
                    token-based, short sessions, and refresh strategies that fit your
                    backend.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Offline-aware request queues with idempotent APIs, so retries don’t
                    create duplicate work.
                  </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                OPS & RELEASES
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    CI/CD pipelines for mobile that align with your existing Git and
                    DevOps practices.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Logging, crash reporting, and performance metrics wired into your
                    observability tools.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Feature flags and remote config so you can adjust behavior without
                    a full release cycle when possible.
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
                            Questions teams usually ask about mobile work.
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
                                TALK ABOUT YOUR MOBILE APP
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Planning—or already running—a mobile app on top of your existing stack?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Share who the app is for, what they need to do, and which systems it
                                connects to. We’ll respond with how we’d structure the app and where
                                offline-first, push, and analytics can provide real value.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Mobile%20Apps%20%2F%20Cross-platform"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about your mobile app
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
                                A short note about your users, platforms (iOS/Android), and backend
                                stack (Drupal, PHP, Python, Go, etc.) is enough to start a concrete
                                conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
