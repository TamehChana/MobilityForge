import { formatChecklistForCopy } from "@/lib/format-checklist";
import { CopyButton } from "./CopyButton";

type ChecklistBlockProps = {
  title: string;
  items: string[];
};

export function ChecklistBlock({ title, items }: ChecklistBlockProps) {
  const copyText = formatChecklistForCopy([{ title, items }]);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <CopyButton text={copyText} label="Copy" />
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300"
              aria-hidden
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
