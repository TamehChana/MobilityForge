import type { ChecklistGroup } from "@/types/docs";

export function formatChecklistForCopy(groups: ChecklistGroup[]): string {
  return groups
    .map(
      (g) =>
        `## ${g.title}\n${g.items.map((item) => `- [ ] ${item}`).join("\n")}`,
    )
    .join("\n\n");
}
