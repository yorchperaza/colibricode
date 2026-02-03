"use client";

import React, { useState, FormEvent } from "react";

const brand = {
  red: "text-red-600",
  gray: "text-neutral-600",
};

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || null,
          projectType: form.projectType || null,
          budget: form.budget || null,
          timeline: form.timeline || null,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.error) {
        setError(
          data?.error ||
            "We couldn’t send your message right now. Please try again in a moment."
        );
        setSubmitted(false);
      } else {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        "Something went wrong while talking to the email service. Please try again or email hello@colibricode.com directly."
      );
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-neutral-100/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/70 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${brand.red}`}>
              CONTACT • COLIBRICODE
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Share a brief about your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">build, migration, or stabilization</span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-red-600/20 to-red-600/40" />
                </span>{" "}
                work.
              </h1>

              <p className={`max-w-2xl text-lg leading-relaxed ${brand.gray}`}>
                If you’re starting from scratch, rebuilding a legacy platform, or dealing with a noisy production system,
                this is the fastest way to get a senior engineering response. A short, honest brief is more valuable than a perfect RFP.
              </p>

              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Denver metro (Lakewood, CO) • Remote-first.</li>
                <li>• We work mostly with teams in North America and Europe.</li>
                <li>• Engineering-led, async-friendly communication with clear written updates.</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100">
                    <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M8 5v14m8-14v14M5 19h14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">ADDRESS</p>
                    <p className="text-sm font-medium text-neutral-900">200 Union Blvd, Lakewood, CO 80228, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100">
                    <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V22a2 2 0 01-2 2h-.25C9.201 24 2 16.799 2 7.25V7a2 2 0 011-1.732V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">PHONE</p>
                    <a href="tel:7209792811" className="text-sm font-medium text-red-600 hover:underline">
                      +1 (720) 979-2811
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100">
                    <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4z" opacity="0.4" />
                      <path d="M7 7h3v10H7zM14 7h3v10h-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">LINKEDIN</p>
                    <a
                      href="https://www.linkedin.com/company/colibricode/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      linkedin.com/company/colibricode
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact methods card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 blur-2xl" />
              <div className="relative space-y-4 rounded-3xl border border-neutral-200 bg-white/85 p-8 shadow-2xl backdrop-blur-sm text-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">QUICK OPTIONS</p>

                <a
                  href="mailto:hello@colibricode.com?subject=Project%20brief%20for%20ColibriCode"
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-all hover:border-red-300 hover:shadow-md"
                >
                  <span>Email us at hello@colibricode.com</span>
                  <svg
                    className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="tel:7209792811"
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-all hover:border-red-300 hover:shadow-md"
                >
                  <span>Call us at +1 (720) 979-2811</span>
                  <svg
                    className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V22a2 2 0 01-2 2h-.25C9.201 24 2 16.799 2 7.25V7a2 2 0 011-1.732V5z"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/colibricode/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-all hover:border-red-300 hover:shadow-md"
                >
                  <span>Connect with us on LinkedIn</span>
                  <svg className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.4h4.6V24H.2zM8.54 8.4h4.41v2.13h.06c.61-1.15 2.11-2.37 4.34-2.37 4.64 0 5.5 3.06 5.5 7.04V24h-4.6v-7.46c0-1.78-.03-4.07-2.48-4.07-2.49 0-2.87 1.94-2.87 3.95V24h-4.6z" />
                  </svg>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=200+Union+Blvd,+Lakewood,+CO+80228"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 text-xs font-medium text-neutral-800 transition-all hover:border-red-300 hover:bg-white"
                >
                  <span>View our location on Google Maps</span>
                  <svg
                    className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s7-5.373 7-12A7 7 0 005 10c0 6.627 7 12 7 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${brand.red}`}>PROJECT BRIEF</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">A short form is enough to get started.</h2>
            <p className={`mx-auto mt-4 max-w-2xl text-sm ${brand.gray}`}>
              You don’t need a full specification. A few paragraphs about your context, current stack, and what “better” looks like is
              enough for an initial assessment.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectType"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                  >
                    <option value="">Select an option</option>
                    <option value="new-build">New product / build-from-scratch</option>
                    <option value="modernization">Modernization / migration</option>
                    <option value="rescue">Rescue / stabilization</option>
                    <option value="embedded-squad">Embedded senior squad</option>
                    <option value="other">Other / not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="budget"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Rough Budget (USD)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                  >
                    <option value="">Select a range</option>
                    <option value="25-50k">$25k–$50k</option>
                    <option value="50-100k">$50k–$100k</option>
                    <option value="100-250k">$100k–$250k</option>
                    <option value="250k-plus">$250k+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="timeline"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Ideal Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                  >
                    <option value="">Select a window</option>
                    <option value="asap">ASAP / urgent</option>
                    <option value="1-3-months">Within 1–3 months</option>
                    <option value="3-6-months">Within 3–6 months</option>
                    <option value="6-plus-months">6+ months</option>
                    <option value="flexible">Flexible / exploratory</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600"
                >
                  Context (stack, current situation, what success looks like)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-red-500"
                  placeholder='A few paragraphs is perfect. Mention your stack (Drupal, PHP, React/Next.js, Python, Go, cloud), where it hurts, and what “better” looks like.'
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/30"
                  }`}
                >
                  {loading ? "Sending…" : "Send project brief"}
                  {!loading && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <p className="text-xs text-neutral-500">
                  Prefer email or a call? Reach us at{" "}
                  <a href="mailto:hello@colibricode.com" className="font-medium text-red-600 hover:underline">
                    hello@colibricode.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:7209792811" className="font-medium text-red-600 hover:underline">
                    +1 (720) 979-2811
                  </a>
                  .
                </p>
              </div>

              {error && <p className="text-xs font-medium text-red-600">{error}</p>}

              {submitted && !error && (
                <p className="text-xs font-medium text-green-700">
                  Thanks for the brief. We&apos;ll review it and reply with next steps.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
