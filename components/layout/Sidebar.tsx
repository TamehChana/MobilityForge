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
        "flex w-[280px] shrink-0 flex-col border-r border-outline bg-surface",
        "h-[calc(100vh-4rem)] lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]",
        "dark:border-[#3c4043] dark:bg-[#131314]",
        className,
      )}
    >
      <div className="border-b border-outline px-4 py-5 dark:border-[#3c4043]">
        <p className="section-label">Documentation</p>
        <p className="mt-1 text-sm text-on-surface-variant dark:text-[#c4c7c5]">
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
              <h3 className="mb-2 px-4 text-[11px] font-medium tracking-wide text-on-surface-muted uppercase">
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
                          "block rounded-full px-4 py-2 text-sm transition-colors",
                          active
                            ? "nav-link-active"
                            : "nav-link",
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
