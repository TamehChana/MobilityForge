import { definePage } from "./define-page";

export const teamCollaboration = definePage({
  slug: "team-collaboration",
  title: "Team Collaboration",
  description: "Roles, handoffs, and shared responsibility on mobile projects.",
  intro:
    "Mobile apps are built by teams: product, design, mobile, backend, QA, security, and release, even when one person wears multiple hats.",
  whyItMatters:
    "Clear roles and handoffs reduce confusion, duplicate work, and security gaps between frontend and backend.",
  workflow: [
    { label: "Product defines feature" },
    { label: "Requirements" },
    { label: "Figma prototype" },
    { label: "Architecture review" },
    { label: "Feature branch" },
    { label: "API ready" },
    { label: "Test & PR" },
    { label: "Release & monitor" },
  ],
  howToApply: [
    {
      heading: "Collaboration rules",
      body: "Clear task ownership, weekly check-ins, code reviews, documentation updates, respectful feedback, shared learning via MobilityForge.",
    },
  ],
  commonMistakes: [
    "Developers working in isolation",
    "Design changes without developer notice",
    "Backend APIs changing without mobile team awareness",
  ],
  checklist: [
    {
      title: "Team checklist",
      items: [
        "Roles defined for the project",
        "Weekly sync scheduled",
        "PR reviews required",
        "Docs updated when architecture changes",
      ],
    },
  ],
});
