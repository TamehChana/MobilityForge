type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-outline pb-8 dark:border-[#3c4043]">
      <p className="chip">MobilityForge guide</p>
      <h1 className="mt-4 text-display text-ink dark:text-[#e3e3e3] sm:text-[2.5rem]">
        {title}
      </h1>
      <p className="mt-4 text-body-lg text-ink-variant dark:text-[#c4c7c5]">
        {description}
      </p>
    </header>
  );
}
