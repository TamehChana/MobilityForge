type KeyTakeawaysProps = {
  items: string[];
};

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (!items.length) return null;
  return (
    <section className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 dark:border-brand-800 dark:bg-brand-950/30">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-800 dark:text-brand-200">
        Key takeaways
      </h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
