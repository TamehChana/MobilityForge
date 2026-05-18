import { definePage } from "./define-page";

export const gitWorkflow = definePage({
  slug: "git-workflow",
  title: "Git Workflow",
  description: "Branches, pull requests, reviews, and commit discipline.",
  intro:
    "main = stable. feature/* = new work. Pull requests = review before merge. Clear commits = understandable history.",
  whyItMatters:
    "Professional Git habits protect main branch quality and teach apprentices how real teams collaborate.",
  howToApply: [
    {
      heading: "Branch examples",
      body: "feature/auth-flow, feature/report-submission, fix/token-expiry, chore/update-dependencies.",
    },
    {
      heading: "PR review checks",
      body: "Folder structure, services for APIs, reusable components, security issues, tests done, docs updated.",
    },
  ],
  commonMistakes: [
    "Pushing directly to main",
    "Vague commit messages",
    "No pull request or review",
    "Many unrelated features in one branch",
  ],
  checklist: [
    {
      title: "PR checklist",
      items: [
        "Branch named clearly",
        "PR description explains change",
        "Reviewed by mentor or peer",
        "No secrets in diff",
      ],
    },
  ],
});
