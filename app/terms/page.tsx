export default function TermsPage() {
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
                            TERMS • COLIBRICODE
                        </span>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                            Terms of Service
                        </h1>
                        <p className="text-sm text-neutral-500">
                            Last updated: {new Date().getFullYear()}
                        </p>
                        <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
                            These Terms of Service (&quot;Terms&quot;) govern your use of the
                            ColibriCode website and any related services we provide. By accessing
                            or using our site, you agree to these Terms.
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
                            ColibriCode is a web &amp; app engineering workshop based in the
                            Denver metro area (Lakewood, Colorado, USA). References to
                            &quot;ColibriCode,&quot; &quot;we,&quot; &quot;our,&quot; or
                            &quot;us&quot; in these Terms refer to our company and its authorized
                            team members.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If you have questions about these Terms, you can contact us at:
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
                            <li>Address: 200 Union Blvd, Lakewood, CO 80228, USA</li>
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

                    {/* 2. Scope */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            2. Scope of these Terms
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            These Terms apply to:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>
                                • Your use of our public website at colibricode.com (and any
                                subdomains).
                            </li>
                            <li>
                                • Initial interactions with us, such as submitting a project
                                brief or contacting us through our forms.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If we work together on a project, the details of that engagement
                            (scope, deliverables, fees, IP, etc.) will be governed by a separate
                            written agreement. In the event of a conflict between that agreement
                            and these Terms, the written agreement will usually prevail for the
                            project-specific parts.
                        </p>
                    </article>

                    {/* 3. Using our site */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            3. Using our website
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            You may browse our site, read content, and contact us about
                            potential work, subject to these basic commitments:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• You will not use the site for unlawful purposes.</li>
                            <li>
                                • You will not attempt to disrupt, attack, or reverse engineer
                                our systems.
                            </li>
                            <li>
                                • You will not scrape or copy our content in a way that
                                misleads others about who we are or what we do.
                            </li>
                            <li>
                                • You will not impersonate another person or misrepresent your
                                affiliation when contacting us.
                            </li>
                        </ul>
                    </article>

                    {/* 4. Project briefs & submissions */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            4. Project briefs and user submissions
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            When you send us a project brief, contact form, or any materials
                            (collectively, &quot;Submissions&quot;):
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>
                                • You confirm that you have the right to share the information
                                with us.
                            </li>
                            <li>
                                • You agree not to include sensitive personal information
                                unless strictly necessary.
                            </li>
                            <li>
                                • You grant us permission to review and internally use the
                                Submission for the purpose of evaluating a potential project or
                                collaboration with you or your organization.
                            </li>
                        </ul>
                        <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                            Note: Any formal confidentiality or non-disclosure obligations
                            (e.g., NDAs) will be handled separately and will override this
                            section where applicable.
                        </p>
                    </article>

                    {/* 5. Intellectual property */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            5. Intellectual property
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Unless we explicitly say otherwise, everything on this site—
                            including text, visual design, case study descriptions, and
                            branding—is owned by or licensed to ColibriCode and protected by
                            applicable IP laws.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            You may:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>
                                • View our content on the site and, if needed, share links
                                internally within your organization.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            You may not:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>
                                • Reproduce, redistribute, or modify our content in a way that
                                implies it is your own or misrepresents our relationship.
                            </li>
                            <li>
                                • Use our name, logo, or branding without prior written
                                permission, except for standard linking or referencing.
                            </li>
                        </ul>
                    </article>

                    {/* 6. No guarantees / disclaimer */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            6. No guarantees (disclaimer)
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Our website and any content we publish are provided for general
                            information only. While we aim to keep everything accurate and
                            up-to-date, we do not promise that:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• The site will always be available or error-free.</li>
                            <li>
                                • The content is perfectly complete, current, or suited to your
                                specific situation.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Nothing on this site should be taken as legal, financial, or other
                            professional advice. Decisions about your technology stack, product
                            roadmap, or business strategy should always consider your own
                            context and advisors.
                        </p>
                    </article>

                    {/* 7. Limitation of liability */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            7. Limitation of liability
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            To the fullest extent permitted by law, ColibriCode and its team
                            members will not be liable for any indirect, incidental, special,
                            consequential, or punitive damages arising from or related to:
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            <li>• Your use of—or inability to use—our website.</li>
                            <li>
                                • Any reliance you place on content published on this site.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If, despite the above, we are found to have some direct liability
                            to you, that liability will be limited to a reasonable amount
                            associated with your actual direct losses, and in any case not
                            exceed the equivalent of USD $1,000, unless otherwise required by
                            law or agreed in a separate contract.
                        </p>
                    </article>

                    {/* 8. Third-party links */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            8. Third-party links and services
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Our site may contain links to third-party websites or services
                            (for example, LinkedIn, Git repositories, or documentation). We do
                            not control those sites and are not responsible for their content,
                            policies, or availability.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Any use of those third-party services is subject to their own
                            terms and policies.
                        </p>
                    </article>

                    {/* 9. Privacy */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            9. Privacy and cookies
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            Our{" "}
                            <a
                                href="/privacy"
                                className="font-medium text-red-600 hover:underline"
                            >
                                Privacy Policy
                            </a>{" "}
                            explains how we collect, use, and protect personal data, including
                            cookie usage. By using our site, you acknowledge that we may
                            process data as described in that policy.
                        </p>
                    </article>

                    {/* 10. Changes to these Terms */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            10. Changes to these Terms
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We may update these Terms from time to time, for example when we
                            adjust our services, legal requirements change, or we clarify how
                            we work.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            When we make changes, we will update the &quot;Last updated&quot;
                            date at the top of this page. In the case of significant changes,
                            we may also provide additional notice on the site.
                        </p>
                    </article>

                    {/* 11. Governing law */}
                    <article className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm lg:p-8 mb-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            11. Governing law
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            These Terms are governed by the laws of the State of Colorado, USA,
                            without regard to its conflict of law rules. Any disputes arising
                            out of or relating to these Terms or your use of the site will be
                            handled in the appropriate courts located in Colorado, unless a
                            different arrangement is specified in a separate written agreement
                            between us.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            If any provision of these Terms is found to be invalid or
                            unenforceable, the remaining provisions will continue in full
                            force and effect.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}
