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
      className="mt-12 grid gap-4 border-t border-outline pt-8 sm:grid-cols-2 dark:border-[#3c4043]"
      aria-label="Documentation pagination"
    >
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group surface-card-elevated block p-5"
        >
          <span className="section-label">Previous</span>
          <p className="mt-2 font-medium text-on-surface group-hover:text-brand-600 dark:text-[#e3e3e3] dark:group-hover:text-[#8ab4f8]">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group surface-card-elevated block p-5 text-right sm:col-start-2"
        >
          <span className="section-label">Next</span>
          <p className="mt-2 font-medium text-on-surface group-hover:text-brand-600 dark:text-[#e3e3e3] dark:group-hover:text-[#8ab4f8]">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
