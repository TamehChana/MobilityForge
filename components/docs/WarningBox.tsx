import type { ReactNode } from "react";

type WarningBoxProps = {
  title: string;
  children: ReactNode;
};

export function WarningBox({ title, children }: WarningBoxProps) {
  return (
    <aside className="rounded-2xl border border-[#f9ab00]/40 bg-[#fef7e0] p-5 dark:border-[#fdd663]/30 dark:bg-[#3c2f05]">
      <p className="text-sm font-medium text-[#b06000] dark:text-[#fdd663]">{title}</p>
      <div className="mt-2 text-sm leading-6 text-[#5f4200] dark:text-[#e8eaed]">{children}</div>
    </aside>
  );
}
