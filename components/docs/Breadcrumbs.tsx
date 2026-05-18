import Link from "next/link";
import { getNavItem } from "@/content/navigation";

type BreadcrumbsProps = {
  slug: string;
};

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const item = getNavItem(slug);
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li>
          <Link href="/docs/mobile-engineering-2026" className="hover:text-slate-900">
            Docs
          </Link>
        </li>
        {item && (
          <>
            <li aria-hidden>/</li>
            <li className="font-medium text-slate-700">{item.title}</li>
          </>
        )}
      </ol>
    </nav>
  );
}
