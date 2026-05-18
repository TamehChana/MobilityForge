import type { DocPageContent } from "@/types/docs";

export type TocItem = { id: string; label: string };

export function getDocToc(page: DocPageContent): TocItem[] {
  const items: TocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "why-it-matters", label: "Why it matters" },
  ];

  if (page.keyTakeaways?.length) {
    items.push({ id: "key-takeaways", label: "Key takeaways" });
  }
  if (page.workflow?.length) {
    items.push({ id: "workflow", label: "Workflow" });
  }
  items.push({ id: "how-to-apply", label: "How to apply" });

  const examples =
    page.codeExamples?.length ? page.codeExamples : undefined;
  if (examples?.length) {
    items.push({ id: "examples", label: "Examples" });
  }
  items.push(
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "checklist", label: "Checklist" },
  );
  if (page.relatedSlugs?.length) {
    items.push({ id: "related", label: "Related guides" });
  }

  return items;
}
