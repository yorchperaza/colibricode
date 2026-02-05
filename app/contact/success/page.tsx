"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ContactSuccessPage() {
  useEffect(() => {
    // Fire Google Ads conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ads_conversion_Contact_Us_1", {
        // <event_parameters>
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-lg px-6 py-20 text-center lg:px-8">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Message Received!
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-neutral-600">
          Thanks for reaching out. We&apos;ve received your project brief and will
          review it shortly. You can expect to hear from us within 1-2 business
          days.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-red-200 hover:text-red-700 hover:shadow-md"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
