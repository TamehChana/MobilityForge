import { definePage } from "./define-page";

export const projectDocumentationTemplate = definePage({
  slug: "project-documentation-template",
  title: "Project Documentation Template",
  description: "README sections every mobile project should include.",
  intro:
    "Every mobile project README should answer what the app is, how to run it, how auth works, and how to release it for the next developer.",
  whyItMatters:
    "Documentation is how teams survive handoffs, apprenticeship rotation, and production support.",
  howToApply: [
    {
      heading: "Copy into project README",
      body: "Use the sections below as a template for every new mobile repo in your organization.",
    },
  ],
  codeExamples: [
    {
      title: "README template",
      language: "markdown",
      code: `# Project name
## Purpose
## Target users
## Features
## Tech stack
## Folder structure
## Setup
## Environment variables
## API integration
## Authentication flow
## Roles & permissions
## Testing
## Git workflow
## Release checklist
## Monitoring
## Known issues
## Future improvements`,
    },
  ],
  commonMistakes: [
    "Empty README with only install steps",
    "No env var documentation",
    "Undocumented auth and roles",
  ],
  checklist: [
    {
      title: "README complete when",
      items: [
        "New developer can run app from README alone",
        "Auth and roles documented",
        "Release steps documented",
      ],
    },
  ],
});
