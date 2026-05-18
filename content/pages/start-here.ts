import { definePage } from "./define-page";

export const startHere = definePage({
  slug: "start-here",
  title: "Start Here",
  description: "Your learning path through MobilityForge — usable on any mobile project, any company.",
  intro:
    "MobilityForge is a reusable mobile engineering playbook. Whether you are an apprentice, a junior developer, a senior engineer, or a team lead, use this page as your map. You do not read everything at once — you follow the path that matches your current project phase.",
  whyItMatters:
    "Without a shared starting point, every project reinvents folder structure, security habits, and release steps. Teams waste time arguing about basics instead of shipping value. A single playbook scales across products, clients, and team changes.",
  keyTakeaways: [
    "Use MobilityForge per project phase, not as a one-time read.",
    "Copy checklists into each repo README and PR templates.",
    "Adapt examples to your product — the workflow stays the same.",
    "Mentors review against the same pages every sprint.",
  ],
  workflow: [
    { label: "Read Start Here" },
    { label: "Adopt playbook" },
    { label: "Pick stack" },
    { label: "Design → Build" },
    { label: "Secure & test" },
    { label: "Release & monitor" },
  ],
  howToApply: [
    {
      heading: "If you are starting a new project",
      body: "Read Recommended Stack → Folder Structure → Clean Architecture → Design Workflow. Define users, roles, and backend choice in writing before coding. Copy the Project Documentation Template into your repo on day one.",
    },
    {
      heading: "If you are mid-project",
      body: "Jump to the guide that matches your pain: API Integration for backend mess, Security Checklist before release, State Management if data feels chaotic, Git Workflow if collaboration is breaking.",
    },
    {
      heading: "If you are a mentor or lead",
      body: "Use Organization Adoption Plan to roll out the playbook. In code review, link to the relevant MobilityForge page instead of rewriting the same advice every PR.",
    },
    {
      heading: "Suggested 8-week learning path (any team)",
      body: "Week 1: Mobile Engineering + Stack. Week 2: Design + Figma. Week 3: Architecture + Folder Structure + Components. Week 4: API + Auth + State. Week 5: Security + Testing. Week 6: Git + CI/CD. Week 7: Monitoring + Collaboration. Week 8: Document a real feature using the full workflow.",
    },
  ],
  commonMistakes: [
    "Reading randomly without tying pages to the current sprint goal",
    "Skipping Adopt This Playbook when onboarding a new company or client",
    "Treating checklists as optional instead of release gates",
    "Not customizing the Project Documentation Template per repo",
  ],
  checklist: [
    {
      title: "Before your first task",
      items: [
        "Bookmark Start Here and Security Checklist",
        "Confirm team agreed default stack (or documented exception)",
        "Know where design files and API docs live",
        "Know who approves releases",
      ],
    },
    {
      title: "Every new project",
      items: [
        "Copy Project Documentation Template to README",
        "Run project start checklist from Mobile Engineering page",
        "Assign a security reviewer for release checklist",
      ],
    },
  ],
  relatedSlugs: ["adopt-this-playbook", "mobile-engineering-2026", "organization-adoption-plan"],
});
