type SectionCardProps = {
  heading: string;
  body: string;
};

export function SectionCard({ heading, body }: SectionCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 dark:border-slate-700 dark:bg-slate-900/40 dark:ring-slate-800">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{heading}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{body}</p>
    </section>
  );
}
