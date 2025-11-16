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
        value: "Next.js & React",
        hint: "Web apps, dashboards, design systems, SSR.",
    },
    {
        label: "Deliverables",
        value: "Product-ready UIs",
        hint: "Not just landing pages.",
    },
    {
        label: "Approach",
        value: "DX + UX + Ops",
        hint: "Built for teams, not just demos.",
    },
    {
        label: "Location",
        value: "Denver, USA",
        hint: "US timezone, remote-first.",
    },
];

const slices: Slice[] = [
    {
        title: "Web apps your team can actually ship with",
        desc: "We build React apps that are easy to reason about, test, and extend—not a tangle of components and global state.",
        bullets: [
            "Feature-driven structure instead of one giant components folder.",
            "Reusable primitives and patterns instead of copy-paste code.",
            "Testing where it matters: flows, edge cases, and core UI logic.",
        ],
    },
    {
        title: "Dashboards that stay fast as data grows",
        desc: "We focus on perceived performance: smart loading, pagination, and responsiveness for real-world usage.",
        bullets: [
            "SSR/SSG for fast first paint and good SEO where needed.",
            "Lazy loading and code splitting for heavy widgets and charts.",
            "Snappy filters, tables, and drill-down interactions.",
        ],
    },
    {
        title: "Design systems that feel consistent, not rigid",
        desc: "We turn your brand and UX rules into a living design system in React.",
        bullets: [
            "Component libraries built with clear props and composition patterns.",
            "Tokens for colors, spacing, and typography instead of magic numbers.",
            "Documentation that shows how components should be used in context.",
        ],
    },
    {
        title: "SSR, routing, and data-fetching for real products",
        desc: "We use modern Next.js capabilities with an eye on maintainability and performance.",
        bullets: [
            "Hybrid rendering strategies: SSR, SSG, ISR—applied intentionally.",
            "API integration patterns that match your Symfony/Laravel, Python, or Go services.",
            "Auth-aware layouts, protected routes, and role-based navigation.",
        ],
    },
];

const patterns: Pattern[] = [
    {
        title: "Admin & Ops Dashboards",
        desc: "Internal tools with complex tables, filters, and workflows that your support, operations, and sales teams live in every day.",
        tag: "Internal Platforms",
    },
    {
        title: "Customer Portals & SaaS UIs",
        desc: "Multi-tenant interfaces for account management, reporting, and collaboration on top of your existing backend stack.",
        tag: "Product UX",
    },
    {
        title: "Design-system-driven Frontends",
        desc: "Extracting, codifying, and rolling out a component library across multiple apps and teams.",
        tag: "Design Systems",
    },
    {
        title: "Data & Analytics Views",
        desc: "Interactive charts, drill-downs, and data exploration interfaces powered by PHP/Python/Go APIs.",
        tag: "Data UX",
    },
];

const faqs: FAQ[] = [
    {
        q: "How do you choose between SSR, SSG, and client-side rendering?",
        a: "We start from your use case: SEO needs, data freshness, personalization, and infrastructure. Marketing pages and some public docs lean on SSG/ISR. Authenticated dashboards often mix SSR (for initial shell + critical data) with client-side updates. We avoid clever setups that your team can’t maintain.",
    },
    {
        q: "Can you work with our existing design team or designer?",
        a: "Yes. We often translate Figma, Sketch, or design tokens into a React component library, then refine it as real-world edge cases show up. We keep designers involved so the system reflects how they think about the product.",
    },
    {
        q: "How do React apps integrate with our Symfony/Laravel, Python, or Go backends?",
        a: "We put effort into clean contracts. That means clear API shapes, typed clients, error handling conventions, and auth flows that match your backend stack. The goal is that frontends can evolve without breaking everything downstream—and vice versa.",
    },
    {
        q: "Can you improve an existing Next.js/React codebase instead of starting from scratch?",
        a: "Absolutely. We often start by mapping the current architecture, identifying hotspots, and introducing structure step by step. We aim for refactors that are safe, incremental, and tied to real product goals.",
    },
];

export default function NextReactStackPage() {
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
              STACK / NEXT.JS &amp; REACT
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Next.js &amp; React.
                                <br />
                                <span className="relative inline-block mt-2">
                  <span className="relative z-10">
                    Web apps, dashboards, design systems, SSR.
                  </span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We build React and Next.js products that feel fast, consistent, and
                                maintainable—whether it’s a customer portal, a dense internal tool, or
                                the public face of your SaaS platform.
                            </p>
                            <p className="text-sm text-neutral-500">
                                ColibriCode is based in Denver, USA. We plug into teams that already run
                                serious backends in Drupal, Symfony, Laravel, Python, or Go and need a
                                frontend layer that matches that level of care.
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

            {/* Why Next.js & React */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            WHY NEXT.JS &amp; REACT
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A practical stack for modern product surfaces.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Next.js and React give us a flexible way to build the parts of your
                            product people touch: customer areas, admin dashboards, partner tools, and
                            everything in between—while playing nicely with your backend of choice.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR PRODUCT TEAMS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Faster iterations, fewer surprises.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Component-based UIs make it easier to ship, learn, and refine without
                                rewriting entire screens each sprint.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Feature flags and A/B-friendly layouts.</li>
                                <li>Copy and layout changes without risky code moves.</li>
                                <li>Shared patterns for inputs, validation, and messaging.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR ENGINEERING
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Clean boundaries with your APIs.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                Whether your core is in Drupal, Symfony, Laravel, Python, or Go, we make
                                the frontend a good HTTP citizen—no hidden coupling.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Typed clients and clear data contracts.</li>
                                <li>Consistent error and loading states across the app.</li>
                                <li>Auth and session handling aligned with the backend.</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                                FOR OPERATIONS
                            </p>
                            <h3 className="mt-3 text-lg font-bold text-neutral-900">
                                Built with observability and uptime in mind.
                            </h3>
                            <p className={`mt-2 text-sm ${brand.gray}`}>
                                We design UIs that degrade gracefully, log helpful signals, and behave
                                well under unusual conditions.
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-neutral-800">
                                <li>Frontend metrics tied to backend SLIs.</li>
                                <li>Feature-level toggles for incidents and rollbacks.</li>
                                <li>Timeout and retry behavior that respects the whole system.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we build: apps, dashboards, design systems, SSR */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE BUILD
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Web apps, dashboards, design systems, SSR.
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

            {/* Patterns we see often */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            COMMON PATTERNS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Where Next.js &amp; React shine in your product.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
                            We don’t treat your React app as a monolith. We think in terms of
                            surfaces: who uses them, how often, and what they need from the backend
                            and surrounding systems.
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

            {/* Frontend + backend collaboration */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            FRONTEND + BACKEND
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How React connects to your PHP, Python, and Go stack.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
                            We use Next.js and React as a clean interface layer over your APIs, not a
                            second backend in disguise. Each language in your stack does what it’s
                            best at.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                DATA & CONTRACTS
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Typed clients for calls into Drupal, Symfony/Laravel, Python, and Go
                    APIs, so frontend engineers work with clear shapes and states.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Error handling patterns that feel consistent across the whole UI
                    instead of each page inventing its own style.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Auth flows and tokens aligned with your backend’s session and
                    security model, not bolted on as an afterthought.
                  </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                EXPERIENCE & OPERATIONS
                            </p>
                            <ul className="mt-4 space-y-3 text-neutral-800">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Loading states and skeletons tied to real backend latencies, so users
                    know what’s happening.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Frontend logging that carries context into your observability stack,
                    making incidents easier to debug end-to-end.
                  </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                    <span>
                    Accessibility baked into components—keyboard flows, semantic HTML,
                    and manageable contrast choices—not tacked on later.
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
                            Questions teams usually ask about frontend work.
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
                                TALK ABOUT YOUR FRONTEND
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Have a Next.js or React app that needs to feel solid end-to-end?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Share the kind of surfaces you’re building—dashboards, portals, public
                                sites—and the backends they talk to. We’ll respond with how we’d
                                structure the frontend and where we see the biggest wins.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Next.js%20%26%20React%20Frontend"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Email us about your frontend
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
                                A short description of your current frontend, the backend stack, and
                                your biggest UX or performance pain points is enough to start.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
