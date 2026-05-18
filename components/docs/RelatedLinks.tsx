import Link from "next/link";
import { getNavItem } from "@/content/navigation";

type RelatedLinksProps = {
  slugs: string[];
};

export function RelatedLinks({ slugs }: RelatedLinksProps) {
  const items = slugs
    .map((slug) => getNavItem(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (!items.length) return null;

  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Related guides
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/docs/${item.slug}`}
              className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50 dark:border-slate-600 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-brand-950"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
