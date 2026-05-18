import type { ReactNode } from "react";

type InfoBoxProps = {
  title: string;
  children: ReactNode;
};

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <aside className="rounded-lg border border-brand-200 bg-brand-50 p-4 dark:border-brand-800 dark:bg-brand-950/40">
      <p className="text-sm font-semibold text-brand-800 dark:text-brand-200">{title}</p>
      <div className="mt-2 text-sm leading-6 text-brand-900/90 dark:text-brand-100/90">{children}</div>
    </aside>
  );
}
