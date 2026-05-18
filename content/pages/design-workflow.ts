import { definePage } from "./define-page";

export const designWorkflow = definePage({
  slug: "design-workflow",
  title: "Design Workflow",
  description: "Plan UX before coding with requirements, wireframes, and handoff.",
  intro:
    "Good mobile development starts before code. Understand the user, map flows, design in Figma, prototype, collect feedback, then hand off to developers.",
  whyItMatters:
    "Skipping design forces developers to guess layout, spacing, and navigation — causing rework, inconsistent UI, and poor usability.",
  workflow: [
    { label: "Problem" },
    { label: "Requirements" },
    { label: "Wireframe" },
    { label: "UI design" },
    { label: "Prototype" },
    { label: "Feedback" },
    { label: "Handoff" },
    { label: "Development" },
  ],
  howToApply: [
    {
      heading: "Standard design steps",
      body: "Sketch or generate wireframes → refine in Figma → build reusable components → define colors, typography, spacing → clickable prototype → test with users or mentors → developer handoff with specs.",
    },
  ],
  commonMistakes: [
    "Coding before understanding the user",
    "No wireframes or prototype",
    "Inconsistent colors and spacing across screens",
    "Developers guessing design details",
  ],
  checklist: [
    {
      title: "Design checklist",
      items: [
        "User problem documented",
        "Main flows wireframed",
        "UI matches design system",
        "Prototype reviewed",
        "Handoff notes for developers",
      ],
    },
  ],
});
