import Link from "next/link";
import { getAdjacentNav } from "@/content/navigation";

type PrevNextNavProps = {
  slug: string;
};

export function PrevNextNav({ slug }: PrevNextNavProps) {
  const { prev, next } = getAdjacentNav(slug);
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
      aria-label="Documentation pagination"
    >
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group rounded-lg border border-slate-200 p-4 hover:border-brand-300 hover:bg-slate-50"
        >
          <span className="text-xs font-medium uppercase text-slate-500">Previous</span>
          <p className="mt-1 font-medium text-slate-900 group-hover:text-brand-700">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group rounded-lg border border-slate-200 p-4 text-right hover:border-brand-300 hover:bg-slate-50 sm:col-start-2"
        >
          <span className="text-xs font-medium uppercase text-slate-500">Next</span>
          <p className="mt-1 font-medium text-slate-900 group-hover:text-brand-700">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
