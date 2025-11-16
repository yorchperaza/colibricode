import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 bg-white py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-neutral-600 sm:flex-row lg:px-8">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.svg"
                        alt="ColibriCode Logo"
                        width={360}
                        height={135}
                        className="h-[50px] w-auto sm:h-[55px] md:h-[60px] lg:h-[75px] object-contain"
                        priority
                    />
                    <div>
                        <p className="text-xs text-neutral-500">Web & App Workshop • USA</p>
                    </div>
                </div>

                <p>© {currentYear} ColibriCode. All rights reserved.</p>

                <div className="flex gap-6">
                    <Link href="/privacy" className="transition-colors hover:text-neutral-900">
                        Privacy
                    </Link>
                    <Link href="/terms" className="transition-colors hover:text-neutral-900">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
