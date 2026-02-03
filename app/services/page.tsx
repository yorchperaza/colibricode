import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | ColibriCode - Build Software Products From Scratch",
    description:
        "ColibriCode is a Denver-based product engineering workshop. We build scalable web and mobile applications from scratch with senior engineers. Specialists in Symfony, Laravel, React, Next.js, Python, and Go.",
    keywords: [
        "product development",
        "software engineering",
        "custom software",
        "web application development",
        "mobile app development",
        "senior engineers",
        "Denver software company",
        "MVP development",
        "SaaS development",
        "Next.js",
        "React",
        "Symfony",
        "Laravel",
        "Python",
        "Go",
        "technical consultation",
        "product discovery",
    ],
    openGraph: {
        title: "Services | ColibriCode - Build Software Products From Scratch",
        description:
            "We design, build, launch, and maintain production-ready web and mobile applications from scratch. Partner with a senior technical team.",
        url: "https://colibricode.com/services",
        siteName: "ColibriCode",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | ColibriCode - Build Software Products From Scratch",
        description:
            "We design, build, launch, and maintain production-ready web and mobile applications from scratch. Partner with a senior technical team.",
    },
    alternates: {
        canonical: "https://colibricode.com/services",
    },
};

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

type TypicalProject = {
    title: string;
    desc?: string;
};

type Fit = {
    title: string;
    desc: string;
};

type WorkPrinciple = {
    title: string;
    desc: string;
};

const serviceAreas: ServiceArea[] = [
    {
        id: "discovery",
        title: "Product Discovery & Tech Planning",
        tagline: "Every successful project starts with clear thinking and senior-level planning.",
        longDesc:
            "Before writing code, we work with you to understand the problem, define system requirements, and choose the appropriate technology stack. This phase prevents costly rewrites and misaligned builds later in the project lifecycle.",
        outcomes: [
            "Understand the problem being solved",
            "Define system requirements and constraints",
            "Design data models, APIs, and boundaries",
            "Identify risks (performance, security, scale)",
        ],
        tech: [
            "Requirements Gathering",
            "System Architecture",
            "Tech Stack Selection",
            "Risk Assessment",
        ],
    },
    {
        id: "architecture",
        title: "Architecture & Technical Leadership",
        tagline: "We provide strong technical leadership throughout the entire project.",
        longDesc:
            "Our role is not only to implement features, but to ensure the system remains healthy as it grows. We cover scalability, security, maintainability, and long-term evolution strategies.",
        outcomes: [
            "System and application architecture",
            "Scalability and performance planning",
            "Security and data protection strategies",
            "Code standards and technical governance",
        ],
        tech: [
            "System Design",
            "Scalability Planning",
            "Security Strategy",
            "Technical Governance",
        ],
    },
    {
        id: "backend",
        title: "Backend Engineering",
        tagline: "We design and build robust backend systems that power real production workloads.",
        longDesc:
            "All backend systems are designed with reliability, performance, and future growth in mind. We integrate authentication, business logic, workflows, and third-party services.",
        outcomes: [
            "API design and implementation",
            "Authentication and authorization systems",
            "Business logic and workflow engines",
            "Data modeling and persistence layers",
        ],
        tech: [
            "Symfony",
            "Laravel",
            "Python",
            "Go",
            "Modern Databases",
        ],
    },
    {
        id: "frontend",
        title: "Frontend & Web Applications",
        tagline: "We build modern web applications that are fast, maintainable, and easy to evolve.",
        longDesc:
            "The goal is not just visual quality, but long-term usability and maintainability. We focus on clean separation between frontend and backend, performance optimization, and accessibility.",
        outcomes: [
            "React and Next.js applications",
            "Headless architectures with Drupal",
            "Clean separation of frontend/backend",
            "SEO-ready implementations",
        ],
        tech: [
            "React",
            "Next.js",
            "Drupal (Headless)",
            "Tailwind CSS",
            "TypeScript",
        ],
    },
    {
        id: "mobile",
        title: "Mobile Application Development",
        tagline: "Mobile applications are treated as core products, not secondary deliverables.",
        longDesc:
            "We build mobile applications that are designed to work as part of a complete system, with secure API integration and scalable backend connectivity.",
        outcomes: [
            "iOS and Android applications",
            "Secure API integration",
            "Scalable backend connectivity",
            "Production-ready deployment pipelines",
        ],
        tech: [
            "iOS",
            "Android",
            "React Native",
            "API Integration",
        ],
    },
    {
        id: "devops",
        title: "DevOps & Infrastructure",
        tagline: "A project is finished when the system is running reliably in production.",
        longDesc:
            "We take responsibility for cloud infrastructure, deployment automation, and monitoring. Clients receive a running, observable system that their team can operate with confidence.",
        outcomes: [
            "Cloud infrastructure setup",
            "Deployment automation (CI/CD)",
            "Environment configuration & secrets",
            "Monitoring, logging, and alerting",
        ],
        tech: [
            "AWS / Cloud",
            "CI/CD Pipelines",
            "Docker / Containers",
            "Monitoring (Datadog/NewRelic)",
            "Security Hardening",
        ],
    },
];

const typicalProjects: TypicalProject[] = [
    {
        title: "SaaS Platforms",
        desc: "Complete subscription-based platforms with multi-tenancy and billing.",
    },
    {
        title: "Custom Web Applications",
        desc: "Tailored web solutions solving specific business problems.",
    },
    {
        title: "Internal Business Tools",
        desc: "Dashboards, admins, and workflow tools to streamline operations.",
    },
    {
        title: "API-Driven Platforms",
        desc: "Headless systems powering multiple frontend or mobile experiences.",
    },
    {
        title: "Mobile Applications",
        desc: "Native or cross-platform mobile apps integrated with your stack.",
    },
];

const fits: Fit[] = [
    {
        title: "Founders",
        desc: "Building a new software product from scratch.",
    },
    {
        title: "Companies",
        desc: "Launching new platforms or rebuilding existing ones.",
    },
    {
        title: "CTOs",
        desc: "Who need senior technical execution and ownership.",
    },
    {
        title: "Teams",
        desc: "Modernizing legacy systems and reducing technical debt.",
    },
];

const workPrinciples: WorkPrinciple[] = [
    {
        title: "Senior Engineers Only",
        desc: "Senior engineers work directly on your product. No juniors hiding behind managers.",
    },
    {
        title: "Direct Communication",
        desc: "Direct access to decision-makers and the engineers building your system.",
    },
    {
        title: "Outcome Ownership",
        desc: "Clear ownership of outcomes and deliverables, not just hours billed.",
    },
    {
        title: "Collaborative Process",
        desc: "A collaborative, transparent working process with regular updates.",
    },
    {
        title: "Long-Term Thinking",
        desc: "We make architectural decisions for the long haul, even under tight timelines.",
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
                        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                            SERVICES • BUILD SOFTWARE PRODUCTS
                        </span>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)] lg:items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                Build Software Products From Scratch With{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10">Senior Engineers</span>
                                    <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                                </span>
                            </h1>
                            <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                                ColibriCode is a Denver-based product engineering workshop that designs, builds, launches, and maintains production-ready web and mobile applications from scratch.
                            </p>
                            <p className="text-sm text-neutral-500">
                                We partner with founders, startups, and growing companies that need a senior technical team capable of owning the full execution of a product.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Start a Project
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
                                    href="/consultation" // Assuming endpoint or anchor
                                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    Request Technical Consultation
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
                            <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm text-sm">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                    WHAT WE DO
                                </p>
                                <p className="text-neutral-800 font-medium">
                                    ColibriCode builds complete software systems. We are not a staff-augmentation provider and we are not a body shop.
                                </p>
                                <ul className="space-y-2 text-neutral-600">
                                    <li>
                                        <span className="text-red-600 mr-2">•</span>
                                        End-to-end product development
                                    </li>
                                    <li>
                                        <span className="text-red-600 mr-2">•</span>
                                        Technical decisions aligned with business goals
                                    </li>
                                    <li>
                                        <span className="text-red-600 mr-2">•</span>
                                        Real production systems, not just prototypes
                                    </li>
                                </ul>
                                <p className="text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                                    You bring the idea or technical challenge. We take responsibility for turning it into a working, scalable product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Development Intro Section */}
             <section className="py-16 bg-white border-b border-neutral-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                     <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                        FROM SCRATCH
                    </p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl text-neutral-900">
                        Product Development From Scratch
                    </h2>
                    <p className={`mx-auto mt-4 max-w-3xl text-lg ${brand.gray}`}>
                        We specialize in building new software products from the ground up. This includes projects at idea stage as well as companies that need to replace or rebuild existing systems.
                    </p>
                     <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left max-w-5xl mx-auto">
                        {[
                            "Translate business goals into a clear roadmap",
                            "Design architectures that scale with real usage",
                            "Launch faster without sacrificing stability",
                            "Reduce technical debt with correct decisions"
                        ].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                 <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                 <span className="text-sm font-medium text-neutral-800">{item}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Services Grid */}
            <section id="services-grid" className="py-20 bg-neutral-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                            OUR EXPERTISE
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            From initial concept to production launch.
                        </h2>
                        <p className={`mx-auto mt-4 max-w-2xl text-base ${brand.gray}`}>
                            We own the technical execution across the entire lifecycle, ensuring your product is built right from day one.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {serviceAreas.map((s, idx) => (
                            <article
                                key={s.id}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
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
                                </div>

                                <p className={`relative text-sm font-medium ${brand.gray}`}>
                                    {s.tagline}
                                </p>

                                <p className={`relative mt-3 text-sm ${brand.gray}`}>
                                    {s.longDesc}
                                </p>

                                <div className="relative mt-4 space-y-1.5 text-xs text-neutral-800">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                        INCLUDES
                                    </p>
                                    <ul className="space-y-1.5">
                                        {s.outcomes.map((o) => (
                                            <li key={o} className="flex gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                                <span>{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {s.tech && s.tech.length > 0 && (
                                    <div className="relative mt-5 pt-4 border-t border-neutral-100">
                                        <div className="flex flex-wrap gap-1.5">
                                            {s.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium text-neutral-600"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

             {/* Typical Projects */}
            <section className="py-20 bg-white border-y border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                             TYPICAL PROJECTS
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            What we build.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {typicalProjects.map((p) => (
                             <article
                                key={p.title}
                                className="relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm text-center hover:bg-white hover:shadow-md transition-all"
                            >
                                <h3 className="text-sm font-bold text-neutral-900">{p.title}</h3>
                                {p.desc && <p className="mt-2 text-xs text-neutral-600">{p.desc}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

             {/* How We Work */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                     <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                            HOW WE WORK
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            A product engineering workshop.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300">
                           We can work independently or alongside your internal team, depending on what best serves the project.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                        {workPrinciples.map((wp, idx) => (
                            <article
                                key={wp.title}
                                className={`relative rounded-3xl border border-neutral-800 bg-neutral-950 p-7 shadow-sm ${workPrinciples.length === idx + 1 && workPrinciples.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold text-white">{wp.title}</h3>
                                <p className="relative mt-3 text-sm text-neutral-300 leading-relaxed">{wp.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

             {/* Who We Work With */}
            <section className="py-20 bg-white">
                 <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>
                            WHO WE WORK WITH
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            We are a strong fit for...
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {fits.map((f) => (
                            <article
                                key={f.title}
                                className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
                                <h3 className="relative text-lg font-bold text-neutral-900">
                                    {f.title}
                                </h3>
                                <p className="relative mt-2 text-sm text-neutral-600">
                                    {f.desc}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 mx-auto max-w-3xl text-center p-6 rounded-2xl bg-red-50 border border-red-100">
                         <p className="text-sm font-medium text-red-900">
                            We are <span className="font-bold">not</span> a fit for teams looking for low-cost outsourcing, short-term staffing, or one-off development tasks.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-neutral-50 border-t border-neutral-200">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/30 to-neutral-50 p-10 shadow-xl lg:p-14">
                        <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
                        <div className="relative space-y-5 text-center">
                            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl text-neutral-900">
                                Ready to start your project?
                            </h2>
                            <p className={`mx-auto max-w-2xl text-base leading-relaxed ${brand.gray}`}>
                                If you are planning a new product, rebuilding an existing system, or need a senior team to take ownership of technical execution, we can help.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                                >
                                    Start a Project
                                </a>
                                <a
                                    href="/consultation"
                                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-4 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    Request a Technical Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                     <p className="mt-12 text-center text-sm font-medium text-neutral-400 max-w-xl mx-auto">
                        ColibriCode builds software products from scratch, with senior engineers, production-first architecture, and long-term scalability in mind.
                    </p>
                </div>
            </section>
        </main>
    );
}
