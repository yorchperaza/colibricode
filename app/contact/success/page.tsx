import Link from "next/link";

export default function ContactSuccessPage() {
  // TODO: Add Google Ads conversion tracking script here
  // e.g., using a useEffect hook or a Script component from next/script
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-900 flex items-center justify-center">
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
        
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 mb-4">
          Message Received!
        </h1>
        
        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
          Thanks for reaching out. We've received your project brief and will review it shortly. You satisfy expect to hear from us within 1-2 business days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-neutral-800"
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
