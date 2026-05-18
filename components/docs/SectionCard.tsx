type SectionCardProps = {
  heading: string;
  body: string;
};

export function SectionCard({ heading, body }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-outline bg-surface p-5 shadow-elevation-1 dark:border-[#3c4043] dark:bg-[#28292a]">
      <h3 className="text-title text-on-surface dark:text-[#e3e3e3]">{heading}</h3>
      <p className="mt-2 text-sm leading-7 text-on-surface-variant dark:text-[#c4c7c5]">{body}</p>
    </section>
  );
}
