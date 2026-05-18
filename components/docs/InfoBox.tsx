import type { ReactNode } from "react";

type InfoBoxProps = {
  title: string;
  children: ReactNode;
};

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <aside className="rounded-2xl border border-brand-200 bg-brand-50 p-5 dark:border-[#394457] dark:bg-[#1a2332]">
      <p className="text-sm font-medium text-brand-800 dark:text-[#d2e3fc]">{title}</p>
      <div className="mt-2 text-sm leading-6 text-on-surface-variant dark:text-[#c4c7c5]">
        {children}
      </div>
    </aside>
  );
}
