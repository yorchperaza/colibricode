"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { hasConsent } from "@/lib/consent"

type Props = {
    // e.g. "G-XXXXXXXXXX" if using GA4
    gaMeasurementId?: string
    // e.g. "AW-XXXXXXXXXX" if using Google Ads
    googleAdsId?: string
}

export default function AnalyticsGate({ gaMeasurementId, googleAdsId }: Props) {
    const [ok, setOk] = useState(false)

    useEffect(() => {
        // only allow if analytics consent is present
        setOk(hasConsent("analytics"))
        // watch cookie changes (simple polling—good enough for consent banner flows)
        const t = setInterval(() => setOk(hasConsent("analytics")), 1500)
        return () => clearInterval(t)
    }, [])

    if (!ok || (!gaMeasurementId && !googleAdsId)) return null

    // We can use the same script for both, just loading one ID is enough to bootstrap gtag
    const mainId = gaMeasurementId || googleAdsId

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${mainId}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ""}
        ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
      `}
            </Script>
        </>
    )
}
