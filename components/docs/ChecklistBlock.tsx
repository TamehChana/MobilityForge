import { formatChecklistForCopy } from "@/lib/format-checklist";
import { CopyButton } from "./CopyButton";

type ChecklistBlockProps = {
  title: string;
  items: string[];
};

export function ChecklistBlock({ title, items }: ChecklistBlockProps) {
  const copyText = formatChecklistForCopy([{ title, items }]);

  return (
    <section className="surface-card p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-title text-on-surface dark:text-[#e3e3e3]">{title}</h3>
        <CopyButton text={copyText} label="Copy" />
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-on-surface-variant dark:text-[#c4c7c5]"
          >
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 dark:border-[#8ab4f8]"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
