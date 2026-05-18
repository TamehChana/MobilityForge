import Link from "next/link";
import { FIRST_DOC_SLUG } from "@/content/navigation";
import { NavbarActions } from "@/components/layout/NavbarActions";

export function HomeNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <section className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          MobilityForge
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href={`/docs/${FIRST_DOC_SLUG}`} className="text-slate-600 hover:text-slate-900">
            Documentation
          </Link>
          <Link
            href={`/docs/${FIRST_DOC_SLUG}`}
            className="rounded-lg bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700"
          >
            Start Learning
          </Link>
          <NavbarActions />
        </nav>
      </section>
    </header>
  );
}
