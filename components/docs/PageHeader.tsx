type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-200 pb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
        MobilityForge Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
    </header>
  );
}
