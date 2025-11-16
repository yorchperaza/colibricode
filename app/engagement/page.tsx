"use client";

import React, { useState } from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type EngagementModel = {
    id: string;
    name: string;
    tagline: string;
    bestFor: string[];
    stackFocus: string;
    typicalLength: string;
    teamShape: string;
};

type Phase = {
    label: string;
    title: string;
    desc: string;
};

type Ritual = {
    title: string;
    desc: string;
};

type Guardrail = {
    title: string;
    desc: string;
};

const models: EngagementModel[] = [
    {
        id: "project",
        name: "Project-based delivery",
        tagline: "A focused phase with clear scope, milestones, and outcomes.",
        bestFor: [
            "Greenfield builds and product launches.",
            "Major Drupal/PHP/JS/Python/Go platform upgrades.",
            "Replatforming or redesign with a hard deadline.",
        ],
        stackFocus:
            "Ideal when we can define a clear slice of work across Drupal, Symfony, Laravel, React/Next.js, Python, Go, and DevOps.",
        typicalLength: "4–12 weeks per phase",
        teamShape: "1–3 senior engineers, optionally paired with your in-house team.",
    },
    {
        id: "squad",
        name: "Embedded squad",
        tagline: "ColibriCode engineers join your team as an extended senior bench.",
        bestFor: [
            "Product teams with a steady roadmap and thin senior capacity.",
            "Companies that want to move faster without a full hiring cycle.",
            "Stacks mixing Drupal/PHP backends, JS frontends, Python jobs, Go workers.",
        ],
        stackFocus:
            "We plug into your existing mono-repo or services: Drupal apps, Symfony & Laravel APIs, React/Next.js frontends, Python jobs, Go microservices, and CI/CD.",
        typicalLength: "3–9 months, renewable",
        teamShape: "1–2 senior engineers, sometimes plus a tech lead or architect.",
    },
    {
        id: "rescue",
        name: "Rescue & stabilization",
        tagline: "Take over fragile systems and make them boringly reliable again.",
        bestFor: [
            "Legacy Drupal or PHP platforms that keep breaking in production.",
            "Critical paths built in a rush: auth, payments, onboarding, data pipelines.",
            "Stacks with missing observability, flaky CI, and no clear ownership.",
        ],
        stackFocus:
            "We often stabilize Drupal sites, Symfony/Laravel APIs, Python/Go workers, and the DevOps around them (CI/CD, logging, metrics, alerts).",
        typicalLength: "6–16 weeks for the first stabilization pass",
        teamShape: "A small senior task force, focused on incidents, refactors, and guardrails.",
    },
];

const phases: Phase[] = [
    {
        label: "01",
        title: "Intro & technical review",
        desc: "We start with a conversation and a light technical review: architecture, code samples, deployment pipeline, and your current pain points.",
    },
    {
        label: "02",
        title: "First phase proposal",
        desc: "We suggest a contained first phase with a clear outcome: a refactor, a feature slice, a migration step, or a stability milestone.",
    },
    {
        label: "03",
        title: "Execution with real visibility",
        desc: "We ship in weekly slices with written updates, demos, and visible progress in your tools (Git, issue tracker, CI).",
    },
    {
        label: "04",
        title: "Review & next steps",
        desc: "We walk through what changed, what’s now possible, and options for extending, pausing, or handing off to your internal team.",
    },
];

const rituals: Ritual[] = [
    {
        title: "Written updates",
        desc: "Short, concrete updates that non-engineers can read: what shipped, what’s next, and any decisions we need from you.",
    },
    {
        title: "Lightweight standups",
        desc: "We can join your daily or 2–3x/week standups, or run async check-ins if your team is distributed across time zones.",
    },
    {
        title: "Regular demos",
        desc: "We show what’s in staging or production, not just slides. This keeps everyone aligned on what “done” means.",
    },
    {
        title: "Decision logs",
        desc: "Key trade-offs (e.g. Drupal vs custom, Python vs Go, infra choices) are documented so future engineers know why.",
    },
];

const guardrails: Guardrail[] = [
    {
        title: "No “mystery” hourly billing",
        desc: "We define phases and expectations upfront. You see where time goes, and there are no surprise overages.",
    },
    {
        title: "Honest fit check",
        desc: "If your needs don’t match our stack (Drupal, PHP, JS, Python, Go, DevOps), we’ll say so and suggest alternatives.",
    },
    {
        title: "Production-first scope",
        desc: "We shape scope around risk reduction and stability, not just feature quantity.",
    },
    {
        title: "Exit-friendly by design",
        desc: "We document and structure work so you can continue without us if that’s what makes sense later.",
    },
];

export default function EngagementPage() {
    const [activeModel, setActiveModel] = useState<string>(models[0]?.id ?? "project");

    const selected = models.find((m) => m.id === activeModel) ?? models[0];

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
              ENGAGEMENT MODELS • DENVER-BASED, REMOTE-FIRST
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Ways we plug into your{" "}
                                <span className="relative inline-block">
                  <span className="relative z-10">Drupal, PHP, JS, Python,</span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>{" "}
                                and Go work.
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                ColibriCode is a Denver-based engineering workshop. We usually join
                                teams in three patterns: project-based, embedded squads, or rescue &
                                stabilization—always with production, handover, and long-term health in
                                mind.
                            </p>
                            <p className="text-sm text-neutral-500">
                                Pick the shape that fits where you are: a one-off phase to unlock a
                                milestone, ongoing senior firepower, or a calm task force to get a
                                fragile system under control.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative rounded-3xl border border-neutral-200 bg-white/80 p-7 shadow-xl backdrop-blur-sm text-sm">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    AT A GLANCE
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                                    <li>Small, senior-heavy teams embedded into your existing tools.</li>
                                    <li>
                                        Comfortable across Drupal, Symfony, Laravel, React/Next.js, Python,
                                        Go, and DevOps.
                                    </li>
                                    <li>Engagements shaped around measurable outcomes—not vanity output.</li>
                                </ul>
                                <p className="mt-4 text-xs text-neutral-500">
                                    Most collaborations start with a focused 4–6 week phase. From there,
                                    we extend, switch to an embedded squad, or hand back to your internal
                                    team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Models overview with selector */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            ENGAGEMENT MODELS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            Three shapes, tuned to different stages and stacks.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Whether you&#39;re stabilizing a legacy Drupal platform, extending a
                            Symfony/Laravel API, launching a new React/Next.js app, or wiring Python
                            and Go services into your product, we map the model to the risk and scope—
                            not the other way around.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 flex flex-wrap justify-center gap-3">
                        {models.map((m) => (
                            <button
                                key={m.id}
                                onClick={() => setActiveModel(m.id)}
                                className={`rounded-xl border-2 px-5 py-2 text-sm font-semibold transition-all ${
                                    activeModel === m.id
                                        ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/25"
                                        : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:shadow-md"
                                }`}
                            >
                                {m.name}
                            </button>
                        ))}
                    </div>

                    {/* Active model details */}
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] lg:items-start">
                        <article className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                            <h3 className="relative text-xl font-bold text-neutral-900">
                                {selected.name}
                            </h3>
                            <p className={`relative mt-2 text-sm ${brand.gray}`}>
                                {selected.tagline}
                            </p>

                            <div className="relative mt-6 grid gap-4 text-sm text-neutral-800 md:grid-cols-2">
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                        TYPICAL LENGTH
                                    </p>
                                    <p className={brand.black}>{selected.typicalLength}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                        TEAM SHAPE
                                    </p>
                                    <p className={brand.black}>{selected.teamShape}</p>
                                </div>
                            </div>

                            <div className="relative mt-6 space-y-2">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    STACK FOCUS
                                </p>
                                <p className={`text-sm ${brand.gray}`}>{selected.stackFocus}</p>
                            </div>

                            <div className="relative mt-6 space-y-2">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    BEST FOR
                                </p>
                                <ul className="space-y-1.5 text-sm text-neutral-800">
                                    {selected.bestFor.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-sm">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                HOW THIS LOOKS DAY-TO-DAY
                            </p>
                            <p className={brand.gray}>
                                Everything runs through your existing tools where possible: GitHub or
                                GitLab, your issue tracker, your CI, your Slack/Teams. We&#39;re not
                                adding process for the sake of it, just enough to make work predictable
                                and visible.
                            </p>
                            <ul className="space-y-2 text-neutral-800">
                                <li>
                  <span className="font-semibold text-neutral-900">
                    Clear entry and exit:
                  </span>{" "}
                                    we agree on what &quot;started&quot; and &quot;done&quot; mean before
                                    we open the first ticket.
                                </li>
                                <li>
                  <span className="font-semibold text-neutral-900">
                    Senior engineers only:
                  </span>{" "}
                                    the people on the intro call are the ones actually shipping code.
                                </li>
                                <li>
                                    <span className="font-semibold text-neutral-900">Respect for ops:</span>{" "}
                                    every change considers release, rollback, logging, and observability.
                                </li>
                            </ul>
                            <p className="text-xs text-neutral-500">
                                If at any point we jointly feel like the engagement model should change
                                (e.g. from project-based to an embedded squad), we&#39;ll say so and
                                reshape the collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* First phase timeline */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            FIRST PHASE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How we usually start working together.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
                            Regardless of model, we like to begin with a contained phase that proves
                            value, reduces risk, and gets everyone comfortable with how we work.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-4">
                        {phases.map((p) => (
                            <article
                                key={p.label}
                                className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-950 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
                                <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-xs font-bold shadow-lg shadow-red-600/30">
                                    {p.label}
                                </div>
                                <h3 className="relative text-sm font-bold text-white">{p.title}</h3>
                                <p className="relative mt-2 text-sm text-neutral-300">{p.desc}</p>
                            </article>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-xs text-neutral-400">
                        After the first phase, some teams keep us as an embedded squad, some move to
                        a lighter advisory pattern, and some simply keep running with the systems we
                        stabilized or built together.
                    </p>
                </div>
            </section>

            {/* Rituals */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            COLLABORATION RITUALS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            How we stay in sync without drowning you in meetings.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {rituals.map((r) => (
                            <article
                                key={r.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {r.title}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{r.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guardrails */}
            <section className="py-20 bg-neutral-50 border-y border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            ENGAGEMENT GUARDRAILS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A few promises about how we do business.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {guardrails.map((g) => (
                            <article
                                key={g.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {g.title}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{g.desc}</p>
                            </article>
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
                                START A CONVERSATION
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Not sure which engagement model fits? Tell us about your stack and we’ll
                                suggest one.
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                A short email is enough: what you&#39;re building, which parts are in
                                Drupal/PHP/JS/Python/Go, what&#39;s currently painful, and what
                                “successful” looks like in 3–6 months. We&#39;ll reply with a concrete,
                                no-pressure recommendation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Engagement%20with%20ColibriCode"
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
                                No pressure, no long forms. If we&#39;re not the right fit for your
                                Drupal, PHP, JS, Python, Go, or DevOps needs, we&#39;ll say so honestly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
