type PageIntroProps = {
  children: string;
};

export function PageIntro({ children }: PageIntroProps) {
  return (
    <p className="text-base leading-7 text-slate-700">{children}</p>
  );
}
