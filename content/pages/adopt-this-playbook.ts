import { definePage } from "./define-page";

export const adoptThisPlaybook = definePage({
  slug: "adopt-this-playbook",
  title: "Adopt This Playbook",
  description: "How any company, agency, or engineering team can customize and reuse MobilityForge.",
  intro:
    "MobilityForge is designed to be forked in spirit: your organization keeps the workflow, swaps the product name, and adjusts stack choices per client or product line. The goal is one repeatable standard for every React Native (or cross-platform) project, not one hero developer's personal style.",
  whyItMatters:
    "Companies that document engineering only in people's heads lose quality when staff rotate. A hosted playbook becomes an asset: onboarding, audits, client delivery, and apprenticeship all use the same source of truth.",
  keyTakeaways: [
    "Rename branding on the homepage. The workflow stays universal.",
    "Pick mandatory vs optional pages for your maturity level.",
    "Wire checklists into GitHub/GitLab PR templates.",
    "Review and update the playbook quarterly like product code.",
  ],
  howToApply: [
    {
      heading: "Step 1: Assign an owner",
      body: "One engineering lead (or guild) owns MobilityForge updates. They approve changes to stack defaults, checklists, and adoption plan, similar to a style guide owner.",
    },
    {
      heading: "Step 2: Define your non-negotiables",
      body: "Example: every repo must use service-layer APIs, backend authorization, PR review, and security checklist before store release. Optional for v1 prototypes: E2E tests, full CI/CD.",
    },
    {
      heading: "Step 3: Map pages to project types",
      body: "MVP / prototype: Design Workflow, Clean Architecture, API Integration, Security basics. Production app: full playbook. Client delivery: add Project Documentation Template + Team Collaboration.",
    },
    {
      heading: "Step 4: Integrate with your tools",
      body: "Link MobilityForge in README, Notion/Confluence, Slack onboarding, and PR description templates. Example PR line: 'Security checklist: /docs/security-checklist (all items verified).'",
    },
    {
      heading: "Step 5: Measure adoption",
      body: "Track: time to first PR, release incidents, security findings, onboarding survey scores. Improve pages that teams skip or misunderstand.",
    },
  ],
  commonMistakes: [
    "Copying the playbook once but never maintaining it",
    "Making every rule mandatory on day one (teams rebel)",
    "No link from real repos back to MobilityForge",
    "Only juniors read it while seniors skip reviews",
  ],
  checklist: [
    {
      title: "Company rollout",
      items: [
        "Owner assigned",
        "Mandatory pages listed in engineering handbook",
        "PR template links to relevant checklists",
        "New repos use Project Documentation Template",
        "Quarterly review scheduled",
      ],
    },
  ],
  relatedSlugs: ["organization-adoption-plan", "start-here", "team-collaboration"],
});
