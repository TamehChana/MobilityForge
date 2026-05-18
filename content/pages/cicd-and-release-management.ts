import { definePage } from "./define-page";

export const cicdAndReleaseManagement = definePage({
  slug: "cicd-and-release-management",
  title: "CI/CD and Release Management",
  description: "Automated checks, builds, and controlled releases.",
  intro:
    "CI/CD automates checks and builds when code changes. Adopt gradually: TypeScript, lint, and tests, then GitHub Actions, then EAS Build for mobile.",
  whyItMatters:
    "Controlled releases prevent broken builds reaching users and reduce manual mistakes during launch week.",
  workflow: [
    { label: "Feature complete" },
    { label: "Code review" },
    { label: "Tests pass" },
    { label: "Build" },
    { label: "Internal test" },
    { label: "Release" },
    { label: "Monitor" },
  ],
  howToApply: [
    {
      heading: "Gradual adoption",
      body: "Stage 1: TS check, lint, basic tests, PR review. Stage 2: GitHub Actions, dependency scan. Stage 3: EAS Build, internal test tracks, release notes.",
    },
  ],
  commonMistakes: [
    "Releasing without checklist",
    "Wrong environment variables in production",
    "Skipping internal testing",
  ],
  checklist: [
    {
      title: "Release checklist",
      items: [
        "Features complete and reviewed",
        "Tests and security checklist done",
        "Version number updated",
        "Env vars verified",
        "Backend ready",
        "Release notes written",
        "Monitoring enabled",
      ],
    },
  ],
});
