"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchDocs } from "@/lib/search";

type DocSearchProps = {
  onNavigate?: () => void;
  className?: string;
};

export function DocSearch({ onNavigate, className }: DocSearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const results = useMemo(() => searchDocs(query), [query]);

  return (
    <section className={className} aria-label="Search documentation">
      <label htmlFor="doc-search" className="sr-only">
        Search documentation
      </label>
      <div className="relative">
        <SearchIcon />
        <input
          id="doc-search"
          type="search"
          placeholder="Search guides"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              router.push(results[0].href);
              onNavigate?.();
              setQuery("");
            }
          }}
          className="input-field"
        />
      </div>
      {query.trim() && (
        <ul className="mt-2 max-h-72 overflow-y-auto rounded-2xl border border-outline bg-surface py-1 shadow-elevation-3 dark:border-[#3c4043] dark:bg-[#1e1f20]">
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-on-surface-muted">No guides found</li>
          ) : (
            results.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  onClick={() => {
                    onNavigate?.();
                    setQuery("");
                  }}
                  className="block px-4 py-3 transition-colors hover:bg-surface-container dark:hover:bg-[#28292a]"
                >
                  <p className="text-sm font-medium text-on-surface dark:text-[#e3e3e3]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-on-surface-muted">
                    {item.snippet || item.description}
                  </p>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-muted"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}
