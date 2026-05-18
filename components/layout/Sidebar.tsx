"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_NAV, NAV_CATEGORIES } from "@/content/navigation";
import { DocSearch } from "@/components/docs/DocSearch";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex w-72 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
        "h-[calc(100vh-3.5rem)] lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)]",
        className,
      )}
    >
      <div className="border-b border-slate-200 px-4 py-4 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Documentation
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {DOC_NAV.length} guides for any project
        </p>
        <DocSearch className="mt-4" onNavigate={onNavigate} />
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV_CATEGORIES.map((category) => {
          const items = DOC_NAV.filter((item) => item.category === category.id);
          if (!items.length) return null;
          return (
            <section key={category.id} className="mb-6 last:mb-0">
              <h3 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {category.label}
              </h3>
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const href = `/docs/${item.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          active
                            ? "border-l-2 border-brand-600 bg-brand-50 font-medium text-brand-800 dark:bg-brand-950/50 dark:text-brand-200"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
