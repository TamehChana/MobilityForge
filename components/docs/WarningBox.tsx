import type { ReactNode } from "react";

type WarningBoxProps = {
  title: string;
  children: ReactNode;
};

export function WarningBox({ title, children }: WarningBoxProps) {
  return (
    <aside className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
      <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">{title}</p>
      <div className="mt-2 text-sm leading-6 text-amber-900/90 dark:text-amber-100/90">{children}</div>
    </aside>
  );
}
