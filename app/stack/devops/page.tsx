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
        value: "CI/CD & SRE",
        hint: "Delivery pipelines and reliability practices.",
    },
    {
        label: "Tooling",
        value: "Containers & Cloud",
        hint: "Kubernetes, Docker, managed PaaS/IaaS.",
    },
    {
        label: "Scope",
        value: "From dev to prod",
        hint: "Environments, rollouts, and observability.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US-based, remote-first collaboration.",
    },
];

const slices: Slice[] = [
    {
        title: "CI/CD pipelines that developers trust",
        desc: "We treat pipelines as a product. They should be fast, predictable, and boring in the best way.",
        bullets: [
            "Design branch and release strategies aligned with how your team actually ships.",
            "Set up pipelines for PHP, JS, Python, and Go services with consistent patterns.",
            "Bake in tests, security scans, and quality checks without blocking day-to-day work.",
        ],
    },
    {
        title: "Containers and runtime environments",
        desc: "We containerize services where it makes sense, and keep things simple where it doesn’t.",
        bullets: [
            "Define Docker images and base images that stay maintainable over time.",
            "Standardize dev/stage/prod environments so bugs don’t only appear in production.",
            "Work with Kubernetes or lighter alternatives depending on your scale and team.",
        ],
    },
    {
        title: "Observability & incident readiness",
        desc: "Logs, metrics, traces, and alerts that help you understand what’s happening without drowning in noise.",
        bullets: [
            "Instrument Drupal, PHP APIs, JS frontends, Python jobs, and Go workers with the same observability story.",
            "Create dashboards that product, ops, and leadership can all understand.",
            "Design on-call runbooks and incident playbooks instead of relying on memory.",
        ],
    },
    {
        title: "Security & production hardening",
        desc: "From least-privilege access to backups and recovery, we design for the day something goes wrong.",
        bullets: [
            "Apply hardening at the app, container, and infrastructure layers.",
            "Review secrets management, access policies, and dependency exposure.",
            "Set up backups, restore drills, and disaster-recovery scenarios that are actually tested.",
        ],
    },
];

const packages: Package[] = [
    {
        name: "DevOps Foundation",
        tagline:
            "Establish sane environments, pipelines, and observability for an existing stack.",
        bestFor: [
            "Teams with a growing product but ad-hoc deployments.",
            "Stacks mixing Drupal/PHP, JS frontends, and a few services.",
            "Organizations that want reliability without a full SRE department.",
        ],
    },
    {
        name: "Cloud-native Greenfield",
        tagline:
            "Launch a new platform with containers, CI/CD, and observability from day one.",
        bestFor: [
            "New products built in Drupal, Symfony/Laravel, Python, and Go.",
            "Companies moving from monoliths to services with a fresh start.",
            "Teams that want strong foundations before traffic scales.",
        ],
    },
    {
        name: "Rescue & Stabilization",
        tagline:
            "Take a fragile production setup and harden it without stopping the roadmap.",
        bestFor: [
            "Frequent incidents or late-night pages with no clear cause.",
            "Complex environments that nobody feels confident touching.",
            "Leadership asking for uptime and predictability, not excuses.",
        ],
    },
];

const faqs: FAQ[] = [
    {
        q: "Do you require Kubernetes for every project?",
        a: "No. Kubernetes is useful in the right context, but it’s not a religion. For many teams, simpler container orchestration or managed platforms are a better fit. We pick tools based on your team size, traffic, and operational capacity.",
    },
    {
        q: "Can you work with our existing infrastructure provider?",
        a: "Yes. We’ve worked with major clouds and smaller providers. We’ll review what you have, propose improvements, and design a path that doesn’t require a risky, all-at-once migration.",
    },
    {
        q: "How do you integrate DevOps with our app teams?",
        a: "We usually embed with your engineers, define clear ownership boundaries, and keep everything documented. Pipelines, monitoring, and incident playbooks are treated as shared assets, not a black box only one person understands.",
    },
    {
        q: "How does this tie into Drupal, PHP, JS, Python, and Go?",
        a: "We align pipelines, environments, and observability across all parts of your stack. Drupal/PHP apps, Next.js frontends, Python jobs, and Go workers all follow consistent patterns so deployments and debugging feel familiar instead of bespoke each time.",
    },
];

export default function DevOpsStackPage() {
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
              STACK / DEVOPS & CLOUD
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                DevOps &amp; Cloud.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    CI/CD, containers, observability, production hardening.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We design delivery, runtime, and reliability around your product—not the
                                other way around. Pipelines, environments, and observability become tools
                                your team leans on every day, not hurdles they avoid.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA, working with teams that run Drupal,
                                PHP APIs, React/Next.js frontends, Python jobs, and Go services in
                                production.
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

            {/* Why DevOps & Cloud */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY DEVOPS &amp; CLOUD MATTER
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Shipping is where your product meets reality.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            It’s not enough for Drupal, PHP, JS, Python, and Go code to work on a laptop.
                            We help your stack ship frequently, run safely, and tell you what’s really
                            happening in production.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                DEPLOYMENT
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Releases become events, not emergencies.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                When pipelines are predictable and reversible, product teams stop fearing
                                release days and start shipping more often.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Feature flags and rollbacks for safer launches.</li>
                                <li>Automated checks that catch issues early.</li>
                                <li>Audit trails so you know what changed and when.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                RUNTIME
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Every service knows where it belongs.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Clear boundaries between apps, workers, databases, and infra keep
                                complexity under control as you grow.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Stable environments from dev to production.</li>
                                <li>Container images that are easy to patch and extend.</li>
                                <li>Infrastructure described as code, not tribal knowledge.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                RELIABILITY
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Issues are visible and fixable, not mysterious.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We combine logs, metrics, and traces so incidents feel like puzzles you
                                can solve, not horror stories.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Dashboards that match how your product is used.</li>
                                <li>Alerting tuned for signal, not noise.</li>
                                <li>Post-incident reviews that improve the system, not blame people.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we work: CI/CD, containers, observability, hardening */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE WORK IN DEVOPS &amp; CLOUD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            CI/CD, containers, observability, production hardening.
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

            {/* Architecture: DevOps wrapped around the app stack */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            ARCHITECTURE PATTERN
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            DevOps &amp; Cloud wrapped around your Drupal, PHP, JS, Python, and Go.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            Instead of treating infra as an afterthought, we align pipeline, runtime,
                            and observability decisions with the way your stack is built and your
                            product is used.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.1fr,1.1fr] lg:items-start">
                        <div className="space-y-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                LAYERS WE CARE ABOUT
                            </p>
                            <div className="mt-3 rounded-2xl bg-gradient-to-br from-red-600/10 to-neutral-900 p-5">
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Source & pipelines</p>
                                            <p className="text-xs text-neutral-300">
                                                Branching, testing, packaging, and artifact storage for all
                                                services: Drupal/PHP, JS, Python, and Go.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Runtime & scaling</p>
                                            <p className="text-xs text-neutral-300">
                                                Containers, processes, and autoscaling rules that keep traffic
                                                spikes from becoming outages.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Networking & security</p>
                                            <p className="text-xs text-neutral-300">
                                                Layered security policies, ingress/egress rules, and secrets
                                                management that match compliance needs.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                        <div>
                                            <p className="font-semibold">Observability & recovery</p>
                                            <p className="text-xs text-neutral-300">
                                                Centralized logs, metrics, traces, backups, and tested restore
                                                paths across environments.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                WHAT THIS CHANGES FOR YOUR TEAM
                            </p>
                            <ul className="mt-3 space-y-3">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Developers see fast feedback from CI/CD instead of waiting for a
                                        shared staging environment to catch up.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Product and marketing can plan launches without worrying about
                                        whether the site will hold up.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        Leadership gets a clear, honest picture of risk, uptime, and change
                                        velocity—without needing a deep infra background.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <p className="text-neutral-300">
                                        On-call becomes sustainable: fewer surprises, clearer alerts, and
                                        playbooks that anyone on the rota can follow.
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
                            DEVOPS &amp; CLOUD ENGAGEMENT SHAPES
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How we usually plug into your platform.
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
                            Questions teams usually ask about DevOps &amp; Cloud.
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
                                TALK ABOUT YOUR RUNTIME &amp; RELIABILITY
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have a platform that needs better CI/CD, observability, or production
                                hardening?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Send a short note with your current stack, deployment process, and the
                                last few incidents that worried you. We’ll respond with how we’d phase
                                improvements and where to start first.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=DevOps%20%26%20Cloud"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about DevOps &amp; Cloud
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
                                A few paragraphs and some context are enough for a first look. If it’s a
                                fit, we’ll propose a concrete starting engagement instead of a vague
                                roadmap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
