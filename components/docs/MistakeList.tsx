type MistakeListProps = {
  items: string[];
};

export function MistakeList({ items }: MistakeListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-amber-950/90">
          <span className="shrink-0 font-medium text-amber-700" aria-hidden>
            ×
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
