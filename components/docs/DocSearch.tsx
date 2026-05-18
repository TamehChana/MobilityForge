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
          placeholder="Search guides…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              router.push(results[0].href);
              onNavigate?.();
              setQuery("");
            }
          }}
          className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      {query.trim() && (
        <ul className="mt-2 max-h-64 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <li className="px-3 py-2 text-sm text-slate-500">No guides found</li>
          ) : (
            results.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  onClick={() => {
                    onNavigate?.();
                    setQuery("");
                  }}
                  className="block border-b border-slate-100 px-3 py-2 last:border-0 hover:bg-slate-50"
                >
                  <p className="text-sm font-medium text-slate-900">{item.title}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
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
      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

