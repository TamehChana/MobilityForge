import type { DocPageContent } from "@/types/docs";

/** Builds full-text index string for client-side search. */
export function buildSearchableText(page: DocPageContent): string {
  const parts = [
    page.title,
    page.description,
    page.intro,
    page.whyItMatters,
    ...(page.keyTakeaways ?? []),
    ...page.howToApply.flatMap((s) => [s.heading, s.body]),
    ...page.commonMistakes,
    ...page.checklist.flatMap((g) => [g.title, ...g.items]),
    ...(page.codeExamples?.flatMap((e) => [e.title ?? "", e.code]) ?? []),
  ];
  return parts.join(" ").toLowerCase();
}
