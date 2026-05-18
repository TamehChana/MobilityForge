import { DOC_NAV } from "@/content/navigation";
import { getDocPage } from "@/content/pages";
import { buildSearchableText } from "@/lib/search-text";

export type SearchResult = {
  slug: string;
  title: string;
  description: string;
  href: string;
  snippet?: string;
};

function snippet(text: string, query: string, max = 100): string {
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return "";
  const start = Math.max(0, i - 30);
  const slice = text.slice(start, start + max);
  return (start > 0 ? "…" : "") + slice + (start + max < text.length ? "…" : "");
}

export function searchDocs(query: string, limit = 10): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { item: SearchResult; score: number }[] = [];

  for (const nav of DOC_NAV) {
    const page = getDocPage(nav.slug);
    const title = nav.title.toLowerCase();
    const desc = nav.description.toLowerCase();
    const body = page ? buildSearchableText(page) : "";

    let score = 0;
    if (title.includes(q)) score += 10;
    if (desc.includes(q)) score += 5;
    if (body.includes(q)) score += 3;
    if (title.startsWith(q)) score += 5;

    if (score > 0) {
      scored.push({
        score,
        item: {
          slug: nav.slug,
          title: nav.title,
          description: nav.description,
          href: `/docs/${nav.slug}`,
          snippet: page ? snippet(buildSearchableText(page), q) : undefined,
        },
      });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item);
}
