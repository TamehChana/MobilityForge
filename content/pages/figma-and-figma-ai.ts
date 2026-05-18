import { definePage } from "./define-page";

export const figmaAndFigmaAi = definePage({
  slug: "figma-and-figma-ai",
  title: "Figma and Figma AI",
  description: "Design systems, prototypes, AI-assisted exploration, and developer handoff.",
  intro:
    "Figma is the primary design tool for wireframes, UI, design systems, prototypes, and handoff. Figma AI can speed first drafts, but humans must refine usability, accessibility, and brand.",
  whyItMatters:
    "Shared Figma files align designers and developers. AI drafts save time only when the team still validates flow, readability, and real user needs.",
  howToApply: [
    {
      heading: "Example Figma AI prompt",
      body: "Create a mobile wireframe for an apprenticeship tracking app with login, dashboard, weekly report submission, learning phases, mentor feedback, and profile screens.",
    },
    {
      heading: "Review AI output",
      body: "Check clarity, tap targets, text size, navigation, accessibility, and whether the flow solves the real problem, then refine manually.",
    },
  ],
  commonMistakes: [
    "Shipping AI layouts without review",
    "No shared components in Figma",
    "Missing developer handoff specs",
  ],
  checklist: [
    {
      title: "Figma AI review",
      items: [
        "Flow is simple for the user",
        "Text is readable",
        "Buttons are obvious",
        "Design is consistent",
        "Accessible contrast and sizing",
      ],
    },
  ],
});
