"use client";

import React, { useMemo, useState } from "react";

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

  // Core panel (already in your UI)
  bestFor: string[];
  stackFocus: string;
  typicalLength: string;
  teamShape: string;

  // Extra copy to include the full rewrite
  whatYouGet?: string[];
  howItWorks?: string[];
  typicalFirstOutcomes?: string[];
  dayToDay?: string;

  ctaLabel?: string;
  ctaHref?: string;
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
    tagline: "A defined phase with clear scope, milestones, and outcomes.",
    bestFor: [
      "Greenfield builds (idea → production).",
      "Platform launches or redesigns.",
      "Major migrations (Drupal upgrades, legacy replacement).",
      "Time-boxed modernization with a deadline.",
    ],
    stackFocus:
      "Ideal when we can define a clear slice of work across Drupal, Symfony, Laravel, React/Next.js, Python, Go, and DevOps—and ship it with production readiness included.",
    typicalLength: "4–12 weeks per phase (often starting with 4–6 weeks)",
    teamShape: "1–3 senior engineers, optionally paired with your internal team.",
    whatYouGet: [
      "A defined milestone with measurable outcomes.",
      "Production-ready implementation (not a demo).",
      "Documentation for handoff and future evolution.",
      "Operational readiness (deployments, monitoring, rollback strategy).",
    ],
    dayToDay:
      "We work inside your tools (GitHub/GitLab, issue tracker, CI, Slack/Teams). You get frequent demos and written updates that make progress obvious.",
    ctaLabel: "Start a project phase",
    ctaHref: "/contact",
  },
  {
    id: "squad",
    name: "Embedded squad",
    tagline: "A senior ColibriCode team embedded alongside your engineers.",
    bestFor: [
      "Continuous product development.",
      "Multiple workstreams and active roadmap ownership.",
      "Teams that want senior engineers who contribute and mentor.",
      "Systems where quality and velocity both matter.",
    ],
    stackFocus:
      "We plug into your existing repos and rituals: Drupal apps, Symfony & Laravel APIs, React/Next.js frontends, Python jobs, Go microservices, and CI/CD.",
    typicalLength: "3–9 months, renewable",
    teamShape: "1–4 senior engineers embedded into your rituals and repo(s).",
    howItWorks: [
      "We adopt your working rhythm (standups, sprint planning, reviews).",
      "We own feature slices end-to-end, not partial tasks.",
      "We improve system health continuously (tests, performance, refactors).",
      "We keep decisions documented so the system stays understandable.",
    ],
    ctaLabel: "Discuss an embedded squad",
    ctaHref: "/contact",
  },
  {
    id: "rescue",
    name: "Rescue & stabilization",
    tagline: "Stabilize production, reduce risk, and restore predictable delivery.",
    bestFor: [
      "Reliability problems and frequent incidents.",
      "Legacy platforms with high operational cost.",
      "Missed deadlines and stalled delivery.",
      "Security, performance, or infrastructure risk.",
    ],
    stackFocus:
      "We often stabilize Drupal sites, Symfony/Laravel APIs, Python/Go workers, and the DevOps around them (CI/CD, logging, metrics, alerts) to make releases safe and operations calm.",
    typicalLength: "6–16 weeks for the first stabilization pass",
    teamShape: "A small senior task force, focused on incidents, refactors, and guardrails.",
    typicalFirstOutcomes: [
      "Clear incident and root-cause baseline.",
      "Stabilized deployments and rollback strategy.",
      "Reduced operational noise (alerts, logs, visibility).",
      "Prioritized roadmap to modernize safely.",
    ],
    ctaLabel: "Request a stabilization plan",
    ctaHref: "/contact",
  },
];

const phases: Phase[] = [
  {
    label: "01",
    title: "Intro & technical review",
    desc:
      "We review context, constraints, and goals. If there’s existing code, we inspect the parts that carry risk: architecture, pipelines, deploy process, monitoring, and the areas that are slowing the team down.",
  },
  {
    label: "02",
    title: "Define the first milestone",
    desc:
      "We propose a milestone that is shippable, measurable, operationally realistic, and a foundation for the next phase.",
  },
  {
    label: "03",
    title: "Build with visible progress",
    desc:
      "You get regular demos (staging or production, not slides), written updates readable by non-engineers, and clear scope tracking: what’s done, what changed, what’s next.",
  },
  {
    label: "04",
    title: "Review & next steps",
    desc:
      "We close the loop on what shipped, what improved, what risks remain, and the recommended next milestone (extend, handoff, or switch model).",
  },
];

const firstMilestoneExamples: string[] = [
  "A thin vertical slice of a new product (auth → core workflow → deploy).",
  "Drupal migration step with performance and content modeling.",
  "Backend API foundation with RBAC and key integrations.",
  "Stabilization milestone: CI/CD + monitoring + critical bug fixes.",
];

const rituals: Ritual[] = [
  {
    title: "Written updates",
    desc:
      "Written updates (what shipped, what changed, what decisions were made) in short, concrete form—readable by non-engineers.",
  },
  {
    title: "Lightweight sync",
    desc:
      "Lightweight sync (daily or 2–3x/week, or async if you prefer) to keep momentum without meeting overload.",
  },
  {
    title: "Regular demos",
    desc:
      "Regular demos of working software in staging or production (not presentations) so “done” stays unambiguous.",
  },
  {
    title: "Decision logs",
    desc:
      "Decision logs capturing architecture and trade-offs for future teams: what we chose, what we didn’t, and why.",
  },
];

const guardrails: Guardrail[] = [
  {
    title: "Senior engineers only",
    desc:
      "Senior engineers only, no hidden handoffs. The people you meet are the ones shipping code and owning decisions.",
  },
  {
    title: "Clear milestones & outcomes",
    desc:
      "Clear milestones and outcomes, not open-ended promises. We align on what “done” means before work starts.",
  },
  {
    title: "Production-first delivery",
    desc:
      "Production-first delivery: performance, security, observability, and operability are included—not bolted on later.",
  },
  {
    title: "Exit-friendly by design",
    desc:
      "Documentation and structure so your team can own the system long-term. If we’re not the right fit, we tell you early and recommend alternatives.",
  },
];

export default function EngagementPage() {
  const [activeModel, setActiveModel] = useState<string>(models[0]?.id ?? "project");

  const selected = useMemo(() => models.find((m) => m.id === activeModel) ?? models[0], [activeModel]);

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
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>
              ENGAGEMENT MODELS • DENVER-BASED, REMOTE-FIRST
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Ways we plug into your product work—{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">from scratch builds</span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>{" "}
                to mature platforms.
              </h1>

              <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                ColibriCode is a senior-led product engineering workshop. We join teams to design, build, ship, and maintain
                production-ready systems—whether you’re starting from zero, modernizing a legacy platform, or stabilizing a codebase
                under pressure.
              </p>

              <p className={`max-w-2xl text-base leading-relaxed ${brand.gray}`}>
                We work in a few predictable shapes so expectations stay clear: defined phases, visible progress, and an exit path your
                team can own.
              </p>

              {/* Optional CTAs (matches the rewrite text) */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                >
                  Share Your Project Brief
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
              <div className="relative rounded-3xl border border-neutral-200 bg-white/80 p-7 shadow-xl backdrop-blur-sm text-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">AT A GLANCE</p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                  <li>Senior engineers only, small teams, direct communication.</li>
                  <li>Build-from-scratch delivery and modernization work.</li>
                  <li>Drupal, Symfony/Laravel, React/Next.js, Python, Go, DevOps.</li>
                  <li>Production-first: performance, security, observability, operability.</li>
                  <li>Clear milestones, documented decisions, and clean handoffs.</li>
                </ul>
                <p className="mt-4 text-xs text-neutral-500">
                  Most collaborations start with a focused 4–6 week phase. From there, we extend, switch to an embedded squad, or hand
                  back to your internal team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>HOW TO CHOOSE</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">How to choose an engagement model.</h2>
            <p className={`mx-auto mt-4 text-base ${brand.gray}`}>
              Most teams don’t need a “perfect” long-term contract. They need a strong first milestone that reduces risk and ships
              value.
            </p>
            <p className={`mx-auto mt-4 text-base ${brand.gray}`}>
              We usually start with a <span className="font-semibold text-neutral-900">focused 4–6 week phase</span> to:
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Validate architecture decisions.",
                "Ship an initial slice of the product or platform.",
                "Establish delivery rhythm and operational baselines.",
                "Create clear next steps (extend, handoff, or shift models).",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models overview with selector */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>ENGAGEMENT MODELS</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Three shapes, tuned to different stages and stacks.
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
              Whether you&apos;re stabilizing a legacy Drupal platform, extending a Symfony/Laravel API, launching a new React/Next.js
              app, or wiring Python and Go services into your product, we map the model to the risk and scope—not the other way
              around.
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

              <h3 className="relative text-xl font-bold text-neutral-900">{selected.name}</h3>
              <p className={`relative mt-2 text-sm ${brand.gray}`}>{selected.tagline}</p>

              <div className="relative mt-6 grid gap-4 text-sm text-neutral-800 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">TYPICAL LENGTH</p>
                  <p className={brand.black}>{selected.typicalLength}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">TEAM SHAPE</p>
                  <p className={brand.black}>{selected.teamShape}</p>
                </div>
              </div>

              <div className="relative mt-6 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">STACK FOCUS</p>
                <p className={`text-sm ${brand.gray}`}>{selected.stackFocus}</p>
              </div>

              <div className="relative mt-6 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">BEST FOR</p>
                <ul className="space-y-1.5 text-sm text-neutral-800">
                  {selected.bestFor.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra sections to include full rewrite */}
              {selected.whatYouGet?.length ? (
                <div className="relative mt-6 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">WHAT YOU GET</p>
                  <ul className="space-y-1.5 text-sm text-neutral-800">
                    {selected.whatYouGet.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selected.howItWorks?.length ? (
                <div className="relative mt-6 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">HOW IT WORKS</p>
                  <ul className="space-y-1.5 text-sm text-neutral-800">
                    {selected.howItWorks.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selected.typicalFirstOutcomes?.length ? (
                <div className="relative mt-6 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">TYPICAL FIRST OUTCOMES</p>
                  <ul className="space-y-1.5 text-sm text-neutral-800">
                    {selected.typicalFirstOutcomes.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selected.ctaLabel && selected.ctaHref ? (
                <div className="relative mt-7">
                  <a
                    href={selected.ctaHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-semibold text-white shadow shadow-red-600/25 hover:-translate-y-0.5"
                  >
                    {selected.ctaLabel}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              ) : null}
            </article>

            <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">DAY-TO-DAY</p>
              <p className={brand.gray}>
                Everything runs through your existing tools where possible: GitHub or GitLab, your issue tracker, your CI, your
                Slack/Teams. We&apos;re not adding process for the sake of it—just enough to make work predictable and visible.
              </p>

              <ul className="space-y-2 text-neutral-800">
                <li>
                  <span className="font-semibold text-neutral-900">Clear entry and exit:</span>{" "}
                  we agree on what “started” and “done” mean before we open the first ticket.
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">Senior engineers only:</span>{" "}
                  the people on the intro call are the ones actually shipping code.
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">Respect for ops:</span>{" "}
                  every change considers release, rollback, logging, and observability.
                </li>
              </ul>

              {selected.dayToDay ? (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className={`text-sm ${brand.gray}`}>{selected.dayToDay}</p>
                </div>
              ) : null}

              <p className="text-xs text-neutral-500">
                If at any point we jointly feel like the engagement model should change (e.g. from project-based to an embedded squad),
                we&apos;ll say so and reshape the collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First phase timeline */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">HOW WE START</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">A first phase that creates clarity and momentum.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
              Most engagements begin with a short phase designed to produce real progress and reduce uncertainty.
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

          {/* Examples of first milestones */}
          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">EXAMPLES OF FIRST MILESTONES</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {firstMilestoneExamples.map((ex) => (
                <div key={ex} className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-neutral-200">{ex}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-neutral-400">
            After the first phase, some teams keep us as an embedded squad, some move to a lighter advisory pattern, and some simply
            keep running with the systems we stabilized or built together.
          </p>
        </div>
      </section>

      {/* Collaboration rhythm */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>COLLABORATION RHYTHM</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
              How we stay in sync without drowning you in meetings.
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
              We keep communication simple and consistent so progress stays obvious and decisions stay documented.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rituals.map((r) => (
              <article
                key={r.title}
                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
              >
                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                <h3 className="relative text-sm font-bold text-neutral-900">{r.title}</h3>
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">GUARDRAILS</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">Clear scope and a clean exit path.</h2>
            <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
              We design engagements to stay honest and predictable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guardrails.map((g) => (
              <article
                key={g.title}
                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                <h3 className="relative text-sm font-bold text-neutral-900">{g.title}</h3>
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
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>NOT SURE WHICH MODEL FITS?</p>
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                Tell us about your stack and we’ll recommend a first milestone.
              </h2>

              <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                Send a short brief with:
              </p>

              <ul className="max-w-2xl space-y-2 text-sm text-neutral-800">
                {[
                  "What you’re building (or what’s breaking).",
                  "Your current stack (if any).",
                  "Timeline and constraints.",
                  "What success looks like in 3–6 months.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className={`max-w-2xl text-sm leading-relaxed ${brand.gray}`}>
                We’ll reply with clarifying questions and a recommended first milestone.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@colibricode.com?subject=Engagement%20with%20ColibriCode"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                >
                  Email hello@colibricode.com
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                >
                  Open the contact page
                </a>
              </div>

              <p className="text-[11px] text-neutral-500">
                No pressure, no long forms. If we’re not the right fit, we’ll say so honestly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
