import { definePage } from "./define-page";

export const testingChecklist = definePage({
  slug: "testing-checklist",
  title: "Testing Checklist",
  description: "Unit, integration, manual, and release testing expectations.",
  intro:
    "A serious team does not only say 'it works on my phone.' Test validation, auth, authorization, errors, loading, and real devices before release.",
  whyItMatters:
    "Users expose bugs demos hide: bad network, expired sessions, wrong roles, and edge-case form input.",
  howToApply: [
    {
      heading: "Test types",
      body: "Unit tests for utils and validation, component tests for UI, integration tests for flows, manual testing on real devices, security tests for sensitive actions.",
    },
  ],
  commonMistakes: [
    "No testing before release",
    "Only testing the happy path",
    "Skipping authorization tests",
  ],
  checklist: [
    {
      title: "Release testing",
      items: [
        "Login and logout tested",
        "Wrong password shows error",
        "Apprentice cannot access admin actions",
        "Poor network shows proper error",
        "Forms validate required fields",
        "API failure does not crash app",
        "Loading states verified",
      ],
    },
  ],
});
