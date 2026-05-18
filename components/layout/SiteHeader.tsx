"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NavbarActions } from "./NavbarActions";
import { cn } from "@/lib/utils";
import { FIRST_DOC_SLUG } from "@/content/navigation";

type SiteHeaderProps = {
  variant?: "home" | "docs";
  onMenuToggle?: () => void;
  menuOpen?: boolean;
};

export function SiteHeader({ variant = "docs", onMenuToggle, menuOpen }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-outline/80 bg-surface/90 backdrop-blur-md",
        "dark:border-[#3c4043] dark:bg-[#131314]/90",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {onMenuToggle && (
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container lg:hidden dark:hover:bg-[#28292a]"
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          )}
          <Logo showTagline={variant === "docs"} />
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link href="/" className="btn-text hidden sm:inline-flex">
            Home
          </Link>
          <Link href={`/docs/${FIRST_DOC_SLUG}`} className="btn-text hidden md:inline-flex">
            Documentation
          </Link>
          {variant === "home" ? (
            <Link href={`/docs/${FIRST_DOC_SLUG}`} className="btn-primary ml-1 sm:ml-2">
              Get started
            </Link>
          ) : (
            <Link
              href={`/docs/${FIRST_DOC_SLUG}`}
              className="btn-primary ml-1 hidden sm:inline-flex sm:ml-2"
            >
              Start here
            </Link>
          )}
          <NavbarActions />
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}
