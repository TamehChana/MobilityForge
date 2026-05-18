export type NavItem = {
  slug: string;
  title: string;
  description: string;
  category?: "start" | "build" | "quality" | "delivery" | "org";
};

export type ChecklistGroup = {
  title: string;
  items: string[];
};

export type DocSection = {
  heading: string;
  body: string;
};

export type CodeExample = {
  title?: string;
  language: string;
  code: string;
};

export type StepFlowItem = {
  label: string;
};

export type DocPageContent = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  whyItMatters: string;
  keyTakeaways?: string[];
  howToApply: DocSection[];
  commonMistakes: string[];
  checklist: ChecklistGroup[];
  codeExamples?: CodeExample[];
  workflow?: StepFlowItem[];
  relatedSlugs?: string[];
};
