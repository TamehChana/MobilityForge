type KeyTakeawaysProps = {
  items: string[];
};

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (!items.length) return null;
  return (
    <section className="rounded-2xl border border-brand-200 bg-brand-50 p-6 dark:border-[#394457] dark:bg-[#1a2332]">
      <h2 className="text-sm font-medium text-brand-800 dark:text-[#d2e3fc]">Key takeaways</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-ink-variant dark:text-[#c4c7c5]"
          >
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white dark:bg-[#8ab4f8] dark:text-[#062e6f]"
              aria-hidden
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
