import Link from "next/link";
import { NavbarActions } from "./NavbarActions";

type NavbarProps = {
  onMenuToggle?: () => void;
  menuOpen?: boolean;
};

export function Navbar({ onMenuToggle, menuOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {onMenuToggle && (
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle documentation menu"
            >
              <MenuIcon />
            </button>
          )}
          <Link href="/" className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              MobilityForge
            </span>
            <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              Reusable mobile engineering playbook
            </span>
          </Link>
        </div>
        <nav className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hidden hover:text-slate-900 dark:hover:text-slate-100 sm:inline">
            Home
          </Link>
          <Link href="/docs/start-here" className="hover:text-slate-900 dark:hover:text-slate-100">
            Docs
          </Link>
          <NavbarActions />
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
