export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900">
            {/* Hero */}
            <section className="relative border-b border-neutral-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-neutral-100/40" />
                <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/70 px-4 py-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                            PRIVACY • COLIBRICODE
                        </span>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-neutral-500">
                            Last updated: {new Date().getFullYear()}
                        </p>
                        <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
                            At ColibriCode, we care about privacy almost as much as clean code. This
                            policy explains what we collect, how we use it, and the choices you have
                            when you interact with our website, services, and communications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-10">
                    {/* 1. Who we are */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            1. Who we are
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            ColibriCode is a web & app engineering workshop based in the Denver
                            metro area (Lakewood, Colorado, USA). We build and maintain digital
                            products for clients primarily in North America and Europe.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            For questions about this policy or your data, you can reach us at:
                        </p>
                        <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:hello@colibricode.com"
                                    className="font-medium text-red-600 hover:underline"
                                >
                                    hello@colibricode.com
                                </a>
                            </li>
                            <li>
                                Address: 200 Union Blvd, Lakewood, CO 80228, USA
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:7209792811"
                                    className="font-medium text-red-600 hover:underline"
                                >
                                    +1 (720) 979-2811
                                </a>
                            </li>
                        </ul>
                    </article>

                    {/* 2. What we collect */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            2. Information we collect
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We collect limited information to operate, improve, and secure our
                            services. Depending on how you interact with us, this may include:
                        </p>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                                <h3 className="text-sm font-semibold text-neutral-900">
                                    2.1. Contact & business details
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                    When you submit a project brief or contact form, we may collect:
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-neutral-700">
                                    <li>• Name and job title</li>
                                    <li>• Work email and phone number</li>
                                    <li>• Company / organization name</li>
                                    <li>• Any details you choose to share about your project</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                                <h3 className="text-sm font-semibold text-neutral-900">
                                    2.2. Usage & analytics data
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                    When you visit our website, we may collect anonymized or
                                    pseudonymized data such as:
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-neutral-700">
                                    <li>• Pages visited and time on page</li>
                                    <li>• Browser type, device, and operating system</li>
                                    <li>• Referring URLs and general location (city/country)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                            <h3 className="text-sm font-semibold text-neutral-900">
                                2.3. Communication data
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                If you email us, call us, or connect via LinkedIn, we may keep a
                                record of those communications (e.g., email threads, meeting notes)
                                so we can follow up and work with you effectively.
                            </p>
                        </div>
                    </article>

                    {/* 3. How we use your information */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            3. How we use your information
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We use the information we collect for purposes such as:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• Responding to your inquiries and project briefs.</li>
                            <li>• Preparing proposals, scopes, and engagement options.</li>
                            <li>• Operating, maintaining, and improving our website.</li>
                            <li>• Monitoring security, preventing abuse, and debugging issues.</li>
                            <li>• Sending occasional updates or announcements (where permitted).</li>
                        </ul>
                        <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                            We do not sell your personal data. We only use it in connection with
                            ColibriCode’s own services and operations, and only for as long as it is
                            reasonably necessary for those purposes.
                        </p>
                    </article>

                    {/* 4. Cookies & analytics */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            4. Cookies & analytics
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Our site uses a small number of cookies to:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• Remember your cookie preferences (necessary cookies).</li>
                            <li>
                                • Measure basic usage and performance of the site (analytics
                                cookies, if you allow them).
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Through our cookie banner, you can accept all cookies, reject
                            non-essential cookies, or allow analytics only. You can also adjust your
                            browser settings to block or delete cookies at any time.
                        </p>
                    </article>

                    {/* 5. Email & marketing */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            5. Email, updates & marketing
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If you contact us, we may email you to:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• Answer your questions and schedule calls.</li>
                            <li>• Share proposals, scopes, or technical follow-ups.</li>
                            <li>
                                • Occasionally send relevant updates about ColibriCode, where
                                permitted by law.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            You can opt out of non-essential emails at any time by replying to the
                            message or contacting us at{" "}
                            <a
                                href="mailto:hello@colibricode.com"
                                className="font-medium text-red-600 hover:underline"
                            >
                                hello@colibricode.com
                            </a>
                            .
                        </p>
                    </article>

                    {/* 6. Data retention */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            6. Data retention
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We keep personal data only for as long as we have a valid reason to do
                            so—for example, while we&apos;re in active discussions about a
                            potential project, or while we maintain a working relationship with
                            your organization.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            When we no longer need data, we take reasonable steps to delete or
                            anonymize it, unless we are required to keep it longer for legal,
                            accounting, or compliance reasons.
                        </p>
                    </article>

                    {/* 7. Your rights */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            7. Your privacy choices & rights
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Depending on your location and applicable laws, you may have rights
                            such as:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• Accessing the personal data we hold about you.</li>
                            <li>• Requesting corrections to inaccurate information.</li>
                            <li>• Asking us to delete certain data, where legally possible.</li>
                            <li>• Objecting to or limiting certain types of processing.</li>
                            <li>• Withdrawing consent where we rely on it.</li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            To exercise any of these rights, contact us at{" "}
                            <a
                                href="mailto:hello@colibricode.com"
                                className="font-medium text-red-600 hover:underline"
                            >
                                hello@colibricode.com
                            </a>
                            . We may need to verify your identity before acting on your request.
                        </p>
                    </article>

                    {/* 8. Security */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            8. How we protect your data
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We use reasonable technical and organizational measures to protect your
                            information, such as encrypted connections (HTTPS), access controls,
                            and limited data access on a need-to-know basis.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            No system is perfectly secure, but we build our internal tools with the
                            same production-first mindset we apply to client projects.
                        </p>
                    </article>

                    {/* 9. Third-party services */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            9. Third-party services
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We may use a small number of trusted third-party services to host our
                            website, send email, or provide analytics. These providers may process
                            limited personal data on our behalf and are contractually required to
                            protect it and use it only for the services we request.
                        </p>
                    </article>

                    {/* 10. International transfers */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            10. International data transfers
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Because we are based in the United States and may work with clients and
                            providers in different regions, your information may be processed in
                            countries that have different data protection laws than your own.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Where required, we take reasonable steps to ensure that appropriate
                            safeguards are in place for such transfers.
                        </p>
                    </article>

                    {/* 11. Changes */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            11. Changes to this policy
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We may update this Privacy Policy from time to time as our services or
                            legal obligations evolve. When we make changes, we will update the
                            &quot;Last updated&quot; date at the top of the page. In cases of
                            material changes, we may provide additional notice on the site.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If you have questions or concerns about this policy, please contact us
                            at{" "}
                            <a
                                href="mailto:hello@colibricode.com"
                                className="font-medium text-red-600 hover:underline"
                            >
                                hello@colibricode.com
                            </a>
                            .
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}
