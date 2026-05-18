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
    <section className="rounded-2xl border border-outline bg-surface-container p-6 dark:border-[#3c4043] dark:bg-[#28292a]">
      <h2 className="section-label">Related guides</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/docs/${item.slug}`}
              className="inline-flex rounded-full border border-outline bg-surface px-4 py-2 text-sm font-medium text-brand-600 shadow-elevation-1 transition-all hover:bg-brand-50 hover:shadow-elevation-2 dark:border-[#5f6368] dark:bg-[#1e1f20] dark:text-[#8ab4f8] dark:hover:bg-[#394457]"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
