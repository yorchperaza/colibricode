"use client"

import { useEffect, useState } from "react"
import { getConsent, setConsent, type ConsentState } from "@/lib/consent"

export default function CookiesBanner() {
    const [mounted, setMounted] = useState(false)
    const [open, setOpen] = useState(false)

    // 1) Mark as mounted so we know we're on the client
    useEffect(() => {
        setMounted(true)
    }, [])

    // 2) Once mounted, read cookie; if none, show banner
    useEffect(() => {
        if (!mounted) return
        let has = false
        try {
            has = !!getConsent()
        } catch {
            has = false
        }
        if (!has) {
            setOpen(true)
        }
    }, [mounted])

    if (!open) return null

    const finalize = (v: ConsentState) => {
        try {
            setConsent(v)
        } finally {
            setOpen(false)
        }
    }

    const acceptAll = () =>
        finalize({ necessary: true, analytics: true, marketing: true })
    const rejectAll = () =>
        finalize({ necessary: true, analytics: false, marketing: false })
    const acceptAnalyticsOnly = () =>
        finalize({ necessary: true, analytics: true, marketing: false })

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[120] mx-auto w-full max-w-7xl px-4 pb-4"
        >
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white via-red-50/40 to-neutral-50/80 p-4 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-white/85">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-semibold text-neutral-900">
                            We use cookies to run ColibriCode smoothly
                        </h2>
                        <p className="mt-1 text-sm text-neutral-600">
                            We rely on essential cookies to keep the site working. With your consent,
                            we also use analytics (and optionally marketing) cookies to understand how
                            people use ColibriCode and improve the experience. You can update your choice
                            at any time.
                        </p>
                    </div>

                    <div className="flex w-full flex-none flex-col gap-2 md:w-auto md:flex-row">
                        <button
                            onClick={rejectAll}
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
                        >
                            Reject non-essential
                        </button>
                        <button
                            onClick={acceptAnalyticsOnly}
                            className="inline-flex items-center justify-center rounded-xl border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 shadow-sm transition hover:border-red-200 hover:bg-red-100"
                        >
                            Allow analytics only
                        </button>
                        <button
                            onClick={acceptAll}
                            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-600/35"
                        >
                            Accept all
                        </button>
                    </div>
                </div>
                <div className="mt-2 text-xs text-neutral-500">
                    Read our{" "}
                    <a
                        className="font-medium text-red-600 hover:underline"
                        href="/privacy"
                    >
                        Privacy Policy
                    </a>{" "}
                    for more details.
                </div>
            </div>
        </div>
    )
}
