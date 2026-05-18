import { definePage } from "./define-page";

export const mobileEngineering2026 = definePage({
  slug: "mobile-engineering-2026",
  title: "Mobile Engineering in 2026",
  description:
    "Why mobile development is full-stack systems engineering, not just screens.",
  intro:
    "In 2026, mobile apps are part of larger digital systems: design, frontend, backend, database, authentication, security, testing, release, monitoring, and maintenance. Tools like React Native, Flutter, Firebase, and Supabase matter — but a repeatable engineering workflow matters more.",
  whyItMatters:
    "Teams that treat mobile apps as a collection of screens ship fast demos that fail in production. Your organization needs engineers who think in systems: plan before code, enforce security on the backend, test before release, and document for the next developer.",
  workflow: [
    { label: "Define users & roles" },
    { label: "Design UX" },
    { label: "Architect layers" },
    { label: "Build & integrate APIs" },
    { label: "Secure & test" },
    { label: "Release & monitor" },
  ],
  howToApply: [
    {
      heading: "Start every project with clarity",
      body: "Before opening the code editor, document target users, roles, core features, data handled, backend needs, security risks, and what success looks like for v1.",
    },
    {
      heading: "Use MobilityForge as the standard",
      body: "Leads reference these guides in code review. New developers follow one page per week during onboarding, then apply patterns on every production project.",
    },
  ],
  commonMistakes: [
    "Building login and dashboard screens before requirements exist",
    "Choosing tools without a workflow for security, testing, or release",
    "Confusing a working demo with a production-ready product",
    "Leaving documentation until the project is 'finished'",
  ],
  checklist: [
    {
      title: "Project start checklist",
      items: [
        "Define target users (e.g. Apprentice, Mentor, Admin, Director)",
        "Define roles and permissions",
        "List core features for v1",
        "Identify data the app will handle",
        "Choose backend strategy (Firebase, Supabase, or custom API)",
        "List security risks early",
        "Agree testing and release expectations",
      ],
    },
  ],
});
