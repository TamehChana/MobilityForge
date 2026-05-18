/** Default key takeaways and related links when a page omits them. */
export const PAGE_METADATA: Record<
  string,
  { keyTakeaways: string[]; relatedSlugs: string[] }
> = {
  "mobile-engineering-2026": {
    keyTakeaways: [
      "Treat mobile as full-stack: UI, API, auth, security, and ops together.",
      "Define users, roles, and data flow before the first screen.",
      "Use the same workflow on every project. Only the product changes.",
    ],
    relatedSlugs: ["recommended-stack", "clean-architecture", "start-here"],
  },
  "recommended-stack": {
    keyTakeaways: [
      "Default to React Native + TypeScript unless requirements forbid it.",
      "Pick backend per project; document the choice in the repo README.",
      "Keep dependencies updated on a schedule, not only when something breaks.",
    ],
    relatedSlugs: ["folder-structure", "clean-architecture", "api-integration"],
  },
  "design-workflow": {
    keyTakeaways: [
      "Requirements and wireframes come before production code.",
      "Design for real devices, roles, and error states, not only happy paths.",
      "Handoff includes tokens, spacing, and component names developers will use.",
    ],
    relatedSlugs: ["figma-and-figma-ai", "reusable-components", "project-documentation-template"],
  },
  "figma-and-figma-ai": {
    keyTakeaways: [
      "Use a design system so screens stay consistent across the app.",
      "AI assists exploration; humans approve final UI and accessibility.",
      "Export specs developers can implement without guessing margins or colors.",
    ],
    relatedSlugs: ["design-workflow", "reusable-components"],
  },
  "clean-architecture": {
    keyTakeaways: [
      "Screens orchestrate; they should not contain business rules or raw fetch logic.",
      "Services own API calls; hooks own screen-level state wiring.",
      "Dependencies point inward: UI, hooks, services, then API.",
    ],
    relatedSlugs: ["folder-structure", "api-integration", "state-management"],
  },
  "folder-structure": {
    keyTakeaways: [
      "Same folder layout on every repo so anyone can navigate on day one.",
      "Group by feature or domain when the app grows past a few screens.",
      "Keep shared UI, hooks, and services in predictable top-level folders.",
    ],
    relatedSlugs: ["clean-architecture", "reusable-components", "project-documentation-template"],
  },
  "reusable-components": {
    keyTakeaways: [
      "Build primitives once (buttons, inputs, cards) and compose screens from them.",
      "Props should be explicit; avoid one-off copies of the same UI pattern.",
      "Document variants and accessibility expectations in the component file or Storybook.",
    ],
    relatedSlugs: ["design-workflow", "folder-structure"],
  },
  "api-integration": {
    keyTakeaways: [
      "Never scatter fetch calls across screens. Use a service layer.",
      "Handle loading, empty, error, and retry states in every data-driven screen.",
      "Validate API contracts with types or schema tools where possible.",
    ],
    relatedSlugs: ["authentication-and-authorization", "state-management", "security-checklist"],
  },
  "authentication-and-authorization": {
    keyTakeaways: [
      "Store tokens securely (Keychain/Keystore); never log secrets.",
      "Authorization is enforced on the backend; the app only reflects allowed actions.",
      "Plan logout, session expiry, and role changes explicitly.",
    ],
    relatedSlugs: ["api-integration", "security-checklist"],
  },
  "state-management": {
    keyTakeaways: [
      "Use the smallest state scope that works: local first, then shared, then global.",
      "Server state (API data) is not the same as UI state. Keep them separate.",
      "Avoid duplicating the same data in multiple stores without a single source of truth.",
    ],
    relatedSlugs: ["clean-architecture", "api-integration"],
  },
  "security-checklist": {
    keyTakeaways: [
      "Run this checklist before every production release. No exceptions.",
      "Assume devices can be compromised; protect tokens and sensitive data in transit and at rest.",
      "Validate inputs on the server; the app is not a security boundary alone.",
    ],
    relatedSlugs: ["testing-checklist", "authentication-and-authorization", "cicd-and-release-management"],
  },
  "testing-checklist": {
    keyTakeaways: [
      "Test critical paths manually even when you have automated tests.",
      "Unit-test business logic and services; integration-test API boundaries.",
      "Define release test scope in writing so nothing is forgotten under pressure.",
    ],
    relatedSlugs: ["security-checklist", "git-workflow", "cicd-and-release-management"],
  },
  "git-workflow": {
    keyTakeaways: [
      "Short-lived feature branches; merge via reviewed pull requests.",
      "Commits tell a story: small, focused, with clear messages.",
      "Link PRs to tickets and MobilityForge checklists when relevant.",
    ],
    relatedSlugs: ["team-collaboration", "cicd-and-release-management"],
  },
  "cicd-and-release-management": {
    keyTakeaways: [
      "Automate lint, test, and build on every PR to main.",
      "Use staged releases: internal, then beta, then production with a rollback plan.",
      "Version and changelog every store submission.",
    ],
    relatedSlugs: ["testing-checklist", "monitoring-and-maintenance", "git-workflow"],
  },
  "monitoring-and-maintenance": {
    keyTakeaways: [
      "Crash and error reporting from day one of production, not after an incident.",
      "Define who responds to alerts and within what SLA.",
      "Use real metrics to prioritize fixes, not only loudest user complaints.",
    ],
    relatedSlugs: ["cicd-and-release-management", "security-checklist"],
  },
  "team-collaboration": {
    keyTakeaways: [
      "Clear roles: who designs, who implements, who reviews, who releases.",
      "Written handoffs beat verbal-only instructions across time zones and turnover.",
      "Mentors reference shared docs instead of repeating the same advice every sprint.",
    ],
    relatedSlugs: ["git-workflow", "adopt-this-playbook", "organization-adoption-plan"],
  },
  "project-documentation-template": {
    keyTakeaways: [
      "Every repo README answers: what, who, how to run, how to release, where docs live.",
      "Copy this template on project day one and keep it current.",
      "Link to MobilityForge (or your fork) from the README.",
    ],
    relatedSlugs: ["start-here", "folder-structure", "adopt-this-playbook"],
  },
};

export function enrichPage<T extends { slug: string; keyTakeaways?: string[]; relatedSlugs?: string[] }>(
  page: T,
): T {
  const meta = PAGE_METADATA[page.slug];
  if (!meta) return page;
  return {
    ...page,
    keyTakeaways: page.keyTakeaways?.length ? page.keyTakeaways : meta.keyTakeaways,
    relatedSlugs: page.relatedSlugs?.length ? page.relatedSlugs : meta.relatedSlugs,
  };
}
