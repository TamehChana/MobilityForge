"use client";

import type { TocItem } from "@/lib/doc-toc";

type DocTableOfContentsProps = {
  items: TocItem[];
};

export function DocTableOfContents({ items }: DocTableOfContentsProps) {
  return (
    <nav aria-label="On this page" className="hidden xl:block">
      <div className="sticky top-24 rounded-2xl border border-outline bg-surface-container p-5 dark:border-[#3c4043] dark:bg-[#28292a]">
        <p className="section-label">On this page</p>
        <ul className="mt-4 space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-full px-3 py-1.5 text-sm text-ink-variant transition-colors hover:bg-surface hover:text-brand-600 dark:text-[#c4c7c5] dark:hover:bg-[#1e1f20] dark:hover:text-[#8ab4f8]"
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
