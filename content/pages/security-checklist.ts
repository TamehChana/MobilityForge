import { definePage } from "./define-page";

export const securityChecklist = definePage({
  slug: "security-checklist",
  title: "Security Checklist",
  description: "Pre-release security checks for every mobile project.",
  intro:
    "Never trust the mobile app alone. The client is installed on user devices and can be inspected. Secrets, business rules, and permissions must be enforced on the backend.",
  whyItMatters:
    "A single security mistake in a tracker, payment flow, or health-related app can expose users and damage trust in your product and organization.",
  howToApply: [
    {
      heading: "Shift-left security",
      body: "Include security in requirements, design reviews, pull requests, and release checklists — not only a final scan before launch.",
    },
    {
      heading: "Backend is the authority",
      body: "The app may hide admin UI from apprentices, but every protected API must verify authentication, role, and resource ownership (prevent IDOR).",
    },
  ],
  commonMistakes: [
    "Hardcoded API keys or JWT secrets in the app",
    "Frontend-only role checks",
    "Tokens in plain AsyncStorage",
    "Skipping input validation on the backend",
    "Logging passwords or tokens",
  ],
  checklist: [
    {
      title: "Pre-release security checklist",
      items: [
        "No hardcoded private secrets in the mobile app",
        "HTTPS only in production",
        "Tokens stored with secure storage",
        "Backend enforces authentication and authorization",
        "Role checks on backend for every protected action",
        "Input validation on app and backend",
        "API ownership checks (no IDOR on reports, profiles, payments)",
        "No sensitive data in logs",
        "Safe error messages for users",
        "Third-party libraries reviewed",
        "Permissions requested only when needed",
        "Payments verified server-side",
        "Security-sensitive flows tested",
        "Monitoring enabled after release",
      ],
    },
  ],
});
