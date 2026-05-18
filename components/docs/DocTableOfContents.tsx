"use client";

import type { TocItem } from "@/lib/doc-toc";

type DocTableOfContentsProps = {
  items: TocItem[];
};

export function DocTableOfContents({ items }: DocTableOfContentsProps) {
  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block"
    >
      <div className="sticky top-24 rounded-lg border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/50">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          On this page
        </p>
        <ul className="mt-3 space-y-1.5 border-l border-slate-200 dark:border-slate-600">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block border-l-2 border-transparent py-0.5 pl-3 text-sm text-slate-600 transition-colors hover:border-brand-500 hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
