import { definePage } from "./define-page";

export const organizationAdoptionPlan = definePage({
  slug: "organization-adoption-plan",
  title: "Organization Adoption Plan",
  description: "Phased rollout so any organization can adopt this workflow sustainably.",
  intro:
    "Rolling out a playbook too fast creates resistance; rolling out too slow leaves old habits in place. This phased plan works for startups, agencies, in-house product teams, and apprenticeship programs.",
  whyItMatters:
    "Sustainable adoption turns MobilityForge from a document into culture. Phases give teams wins early while building toward security, testing, and monitoring discipline.",
  keyTakeaways: [
    "Start with documentation + one pilot project.",
    "Add review gates before adding automation.",
    "Measure outcomes, not just page views.",
  ],
  workflow: [
    { label: "Phase 1: Publish playbook" },
    { label: "Phase 2: Train + pilot" },
    { label: "Phase 3: PR + Git standards" },
    { label: "Phase 4: Security + test gates" },
    { label: "Phase 5: CI/CD + monitoring" },
    { label: "Phase 6: Continuous improvement" },
  ],
  howToApply: [
    {
      heading: "Phase 1 — Publish (week 1–2)",
      body: "Host MobilityForge. Announce Start Here. Leaders read Adopt This Playbook. No enforcement yet — awareness only.",
    },
    {
      heading: "Phase 2 — Pilot project (week 3–6)",
      body: "One team builds a feature using Folder Structure, API Integration, and Design Workflow. Retrospective: what helped, what was missing.",
    },
    {
      heading: "Phase 3 — Collaboration standards (week 7–10)",
      body: "Require Git Workflow: feature branches, PR descriptions, one reviewer minimum. Link MobilityForge in PR template.",
    },
    {
      heading: "Phase 4 — Quality gates (week 11–14)",
      body: "Security Checklist and Testing Checklist required before merge to main for production apps. Mentors use pages in review comments.",
    },
    {
      heading: "Phase 5 — Delivery (week 15+)",
      body: "Introduce CI/CD stages from CI/CD page. Enable crash monitoring per Monitoring page. Track release quality metrics.",
    },
    {
      heading: "Phase 6 — Maintain (ongoing)",
      body: "Quarterly playbook review. Update stack page when defaults change. Add new checklists when incidents teach new lessons.",
    },
  ],
  commonMistakes: [
    "Skipping pilot and enforcing everything at once",
    "No feedback loop from teams",
    "Playbook owner leaves with no successor",
  ],
  checklist: [
    {
      title: "Adoption success signals",
      items: [
        "New hires complete Start Here in week one",
        "PRs reference playbook pages",
        "Release checklist used on every production build",
        "Fewer security issues found late",
        "Repos have consistent README structure",
      ],
    },
  ],
  relatedSlugs: ["adopt-this-playbook", "start-here", "team-collaboration"],
});
