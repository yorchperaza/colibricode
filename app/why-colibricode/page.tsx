"use client";

import React from "react";

const brand = {
    red: "text-red-600",
    redBg: "bg-red-600",
    redBorder: "border-red-600",
    black: "text-neutral-900",
    gray: "text-neutral-600",
};

type Pillar = {
    title: string;
    desc: string;
};

type ContrastItem = {
    title: string;
    us: string;
    notUs: string;
};

type FitItem = {
    title: string;
    points: string[];
};

type Step = {
    label: string;
    title: string;
    desc: string;
};

const pillars: Pillar[] = [
    {
        title: "Workshop over factory",
        desc: "Small, senior-heavy teams that think with you, not a rotation of anonymous juniors pushing tickets.",
    },
    {
        title: "Stack we actually live in",
        desc: "Drupal, Symfony, Laravel, React/Next.js, Python, Go, and DevOps. No pretending to be fluent in every new framework.",
    },
    {
        title: "Production-first decisions",
        desc: "We design for traffic, incidents, and handover. Code that only works on demo day doesn’t count.",
    },
    {
        title: "Ownership and continuity",
        desc: "We document, pair, and keep your team in the loop so the system is yours—not something only ColibriCode understands.",
    },
];

const contrasts: ContrastItem[] = [
    {
        title: "Team structure",
        us: "Lean, senior engineers who stay on the project and know your context.",
        notUs: "Ever-changing squads where you re-explain everything every sprint.",
    },
    {
        title: "Scope & planning",
        us: "Clear phases, trade-offs explained in plain language, no hidden work.",
        notUs: "Vague estimates that slide, with surprises showing up near launch.",
    },
    {
        title: "Communication",
        us: "Written updates, documented decisions, async-friendly collaboration.",
        notUs: "Chaos in group chats, decisions lost in calls nobody wrote down.",
    },
    {
        title: "Tech choices",
        us: "Choose boring, proven tools where possible and explain why.",
        notUs: "Chasing hype frameworks and leaving you with a unique snowflake.",
    },
];

const fitItems: FitItem[] = [
    {
        title: "Teams we work best with",
        points: [
            "Product and engineering leaders who care about long-term quality.",
            "Organizations that already feel the pain of ad-hoc systems and rushed prototypes.",
            "Teams that want partners who push back when something doesn’t make sense.",
        ],
    },
    {
        title: "Kinds of work we love",
        points: [
            "Turning complex Drupal/PHP stacks into maintainable platforms.",
            "Building solid React/Next.js apps backed by Python/Go services.",
            "Designing CI/CD, observability, and ops around real-world usage.",
        ],
    },
    {
        title: "Signals we might not be a fit",
        points: [
            "You just need the cheapest possible MVP to pitch once and throw away.",
            "You want to switch stacks every quarter “to try the new thing.”",
            "You prefer yes-saying vendors over honest technical feedback.",
        ],
    },
];

const steps: Step[] = [
    {
        label: "01",
        title: "Understand the current picture",
        desc: "We start with your context: goals, constraints, existing stack, and why you’re looking for help now.",
    },
    {
        label: "02",
        title: "Propose a concrete first phase",
        desc: "We map a small but meaningful start—often a 4–6 week phase that proves value and reduces risk.",
    },
    {
        label: "03",
        title: "Iterate with production in mind",
        desc: "We ship in slices, not in one big bang. Each step leaves your system better than before, even if we stop tomorrow.",
    },
];

const techTags: string[] = [
    "Drupal engineering",
    "Symfony & Laravel backends",
    "React / Next.js frontends",
    "Python jobs & APIs",
    "Go microservices & workers",
    "DevOps, CI/CD & Cloud",
];

export default function WhyColibriCodePage() {
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
              WHY COLIBRICODE • DENVER, USA
            </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Why teams choose
                                <span className="block mt-1">
                  <span className="relative inline-block">
                    <span className="relative z-10">ColibriCode</span>
                    <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                  </span>
                  <span className="ml-2 text-2xl align-middle text-neutral-500">
                    instead of a generic agency.
                  </span>
                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                We&#39;re a Denver-based engineering workshop focused on Drupal, PHP,
                                JavaScript, Python, Go, and DevOps. Clients come to us when they&#39;re
                                tired of throwaway builds and want systems they can trust and grow.
                            </p>
                            <p className="text-sm text-neutral-500">
                                Less PowerPoint, more commits. Less “resource allocation,” more
                                engineers who care how this works in production a year from now.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                {techTags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs font-medium text-neutral-700 shadow-sm"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-7 shadow-xl backdrop-blur-sm text-sm">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    WHAT THIS MEANS IN PRACTICE
                                </p>
                                <p className={`text-sm ${brand.gray}`}>
                                    We behave like an internal senior squad: helping you make trade-offs,
                                    documenting decisions, pairing with your team, and leaving things better
                                    than we found them.
                                </p>
                                <ul className="space-y-2 text-sm text-neutral-800">
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                        <span>We say “no” when something endangers long-term maintainability.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                        <span>
                      We surface risk early instead of hiding behind process and status
                      reports.
                    </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                        <span>
                      We treat your stack as a product in itself, not just a place to park
                      tickets.
                    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core pillars */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            HOW WE&#39;RE DIFFERENT
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A workshop mindset, not an agency machine.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            Everything we do flows from a few principles: stay small, stay close to the
                            code, and stay honest about what your stack really needs.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {pillars.map((p) => (
                            <article
                                key={p.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {p.title}
                                </h3>
                                <p className={`relative mt-2 text-sm ${brand.gray}`}>{p.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Us vs. Not us */}
            <section className="py-20 bg-neutral-50 border-y border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            WHAT IT FEELS LIKE TO WORK WITH US
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            If you&#39;ve worked with generic agencies before, this is different.
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {contrasts.map((item) => (
                            <div
                                key={item.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-semibold text-neutral-900">
                                    {item.title}
                                </h3>
                                <div className="relative mt-4 grid gap-4 text-sm md:grid-cols-2">
                                    <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4">
                                        <p
                                            className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${brand.red}`}
                                        >
                                            COLIBRICODE
                                        </p>
                                        <p className={`mt-2 text-sm ${brand.black}`}>{item.us}</p>
                                    </div>
                                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                            NOT US
                                        </p>
                                        <p className={`mt-2 text-sm ${brand.gray}`}>{item.notUs}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fit section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                        >
                            FIT
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            When ColibriCode is the right partner—and when it isn&#39;t.
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {fitItems.map((block) => (
                            <article
                                key={block.title}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-sm font-bold text-neutral-900">
                                    {block.title}
                                </h3>
                                <ul className="relative mt-3 space-y-2 text-sm text-neutral-800">
                                    {block.points.map((p) => (
                                        <li key={p} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* How we usually start */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            HOW WE USUALLY WORK TOGETHER
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A simple path from first email to real shipped work.
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {steps.map((s) => (
                            <article
                                key={s.label}
                                className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-950 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/15 to-transparent blur-2xl" />
                                <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-xs font-bold shadow-lg shadow-red-600/30">
                                    {s.label}
                                </div>
                                <h3 className="relative text-sm font-bold text-white">{s.title}</h3>
                                <p className="relative mt-2 text-sm text-neutral-300">{s.desc}</p>
                            </article>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-xs text-neutral-400">
                        Most collaborations start as a focused phase. If we both like how it feels, we
                        extend into a longer roadmap or an embedded squad.
                    </p>
                </div>
            </section>

            {/* Location + remote section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p
                                className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                DENVER-BASED • REMOTE-FIRST
                            </p>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                US-based engineering that plays nicely with distributed teams.
                            </h2>
                            <p className={`mt-4 text-base ${brand.gray}`}>
                                ColibriCode is based in Denver, USA, and works with teams across North
                                America and Europe. We design collaboration around time zones, async
                                updates, and your existing rituals.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                                <li>Written updates you can forward to stakeholders without rewriting.</li>
                                <li>Standups and reviews in overlapping hours when they’re useful.</li>
                                <li>Clear ownership hand-offs so nothing lives only in someone’s head.</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-sm shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                HOW CLIENTS OFTEN DESCRIBE US
                            </p>
                            <ul className="mt-3 space-y-3 text-neutral-800">
                                <li>
                                    <span className="font-semibold text-neutral-900">“Senior bench.” </span>
                                    The team you call when you need adults in the room for architecture,
                                    refactors, or sensitive launches.
                                </li>
                                <li>
                  <span className="font-semibold text-neutral-900">
                    “Engineers who explain trade-offs.”
                  </span>{" "}
                                    You don’t just get a yes/no answer; you get the why.
                                </li>
                                <li>
                  <span className="font-semibold text-neutral-900">
                    “Calm under pressure.”
                  </span>{" "}
                                    Incidents and deadlines are handled with clear steps, not panic.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-neutral-50 border-t border-neutral-200">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/35 to-neutral-50 p-10 shadow-xl lg:p-14">
                        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                        <div className="relative space-y-5">
                            <p
                                className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}
                            >
                                NEXT STEP
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                                Think ColibriCode might be the right workshop for your stack?
                            </h2>
                            <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                                Send us a brief with your current systems, the problems you’re running
                                into, and what “better” would look like in six months. We’ll respond with
                                a concrete, no-pressure suggestion on how we’d start.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:hello@colibricode.com?subject=Why%20ColibriCode"
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
                                No long forms required—two or three paragraphs are enough for a first
                                conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
