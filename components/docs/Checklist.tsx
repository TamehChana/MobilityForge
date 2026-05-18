import type { ChecklistGroup } from "@/types/docs";
import { formatChecklistForCopy } from "@/lib/format-checklist";
import { ChecklistBlock } from "./ChecklistBlock";
import { CopyButton } from "./CopyButton";

type ChecklistProps = {
  groups: ChecklistGroup[];
};

export function Checklist({ groups }: ChecklistProps) {
  const copyText = formatChecklistForCopy(groups);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CopyButton text={copyText} label="Copy all checklists" />
      </div>
      <div className="space-y-6">
        {groups.map((group) => (
          <ChecklistBlock key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </div>
  );
}
