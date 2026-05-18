import Link from "next/link";
import { getNavItem } from "@/content/navigation";

type BreadcrumbsProps = {
  slug: string;
};

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const current = getNavItem(slug);

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-on-surface-muted">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="rounded-full px-2 py-1 hover:bg-surface-container hover:text-brand-600 dark:hover:bg-[#28292a] dark:hover:text-[#8ab4f8]">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-on-surface-muted">
          /
        </li>
        <li>
          <Link
            href="/docs/start-here"
            className="rounded-full px-2 py-1 hover:bg-surface-container hover:text-brand-600 dark:hover:bg-[#28292a] dark:hover:text-[#8ab4f8]"
          >
            Docs
          </Link>
        </li>
        {current && (
          <>
            <li aria-hidden className="text-on-surface-muted">
              /
            </li>
            <li className="truncate px-2 font-medium text-on-surface dark:text-[#e3e3e3]">
              {current.title}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
