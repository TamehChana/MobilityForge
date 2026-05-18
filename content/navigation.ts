import type { NavItem } from "@/types/docs";

/** Ordered playbook — reusable for any team or company. */
export const DOC_NAV: NavItem[] = [
  {
    slug: "start-here",
    title: "Start Here",
    description: "Learning path and how to use MobilityForge on any mobile project.",
    category: "start",
  },
  {
    slug: "adopt-this-playbook",
    title: "Adopt This Playbook",
    description: "How any company or team can customize and roll out MobilityForge.",
    category: "org",
  },
  {
    slug: "mobile-engineering-2026",
    title: "Mobile Engineering in 2026",
    description: "Why mobile development is full-stack systems engineering, not just screens.",
    category: "build",
  },
  {
    slug: "recommended-stack",
    title: "Recommended Stack",
    description: "Default 2026 stack and how to choose backends per project.",
    category: "build",
  },
  {
    slug: "design-workflow",
    title: "Design Workflow",
    description: "Plan UX before coding with requirements, wireframes, and handoff.",
    category: "build",
  },
  {
    slug: "figma-and-figma-ai",
    title: "Figma and Figma AI",
    description: "Design systems, prototypes, AI-assisted exploration, and developer handoff.",
    category: "build",
  },
  {
    slug: "clean-architecture",
    title: "Clean Architecture",
    description: "Separate screens, components, hooks, services, and state.",
    category: "build",
  },
  {
    slug: "folder-structure",
    title: "Folder Structure",
    description: "Standard React Native project layout any team can reuse.",
    category: "build",
  },
  {
    slug: "reusable-components",
    title: "Reusable Components",
    description: "Shared UI building blocks and design consistency.",
    category: "build",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    description: "Service-layer pattern for backend communication.",
    category: "build",
  },
  {
    slug: "authentication-and-authorization",
    title: "Authentication and Authorization",
    description: "Login, roles, tokens, and backend-enforced permissions.",
    category: "build",
  },
  {
    slug: "state-management",
    title: "State Management",
    description: "Local, global, server, and form state strategies.",
    category: "build",
  },
  {
    slug: "security-checklist",
    title: "Security Checklist",
    description: "Pre-release security checks for every mobile project.",
    category: "quality",
  },
  {
    slug: "testing-checklist",
    title: "Testing Checklist",
    description: "Unit, integration, manual, and release testing expectations.",
    category: "quality",
  },
  {
    slug: "git-workflow",
    title: "Git Workflow",
    description: "Branches, pull requests, reviews, and commit discipline.",
    category: "delivery",
  },
  {
    slug: "cicd-and-release-management",
    title: "CI/CD and Release Management",
    description: "Automated checks, builds, and controlled releases.",
    category: "delivery",
  },
  {
    slug: "monitoring-and-maintenance",
    title: "Monitoring and Maintenance",
    description: "Post-launch crashes, errors, and continuous improvement.",
    category: "delivery",
  },
  {
    slug: "team-collaboration",
    title: "Team Collaboration",
    description: "Roles, handoffs, and shared responsibility on mobile teams.",
    category: "org",
  },
  {
    slug: "project-documentation-template",
    title: "Project Documentation Template",
    description: "README template every mobile project should include.",
    category: "org",
  },
  {
    slug: "organization-adoption-plan",
    title: "Organization Adoption Plan",
    description: "Phased rollout of this workflow across teams and projects.",
    category: "org",
  },
];

export const FIRST_DOC_SLUG = "start-here";

export const NAV_CATEGORIES: { id: NavItem["category"]; label: string }[] = [
  { id: "start", label: "Getting started" },
  { id: "build", label: "Build" },
  { id: "quality", label: "Quality & security" },
  { id: "delivery", label: "Delivery" },
  { id: "org", label: "Organization" },
];

export function getNavItem(slug: string): NavItem | undefined {
  return DOC_NAV.find((item) => item.slug === slug);
}

export function getAdjacentNav(slug: string): {
  prev: NavItem | null;
  next: NavItem | null;
} {
  const index = DOC_NAV.findIndex((item) => item.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? DOC_NAV[index - 1] : null,
    next: index < DOC_NAV.length - 1 ? DOC_NAV[index + 1] : null,
  };
}
