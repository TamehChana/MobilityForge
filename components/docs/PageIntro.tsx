type PageIntroProps = {
  children: string;
};

export function PageIntro({ children }: PageIntroProps) {
  return (
    <p className="text-[15px] leading-7 text-ink-variant dark:text-[#c4c7c5]">
      {children}
    </p>
  );
}
