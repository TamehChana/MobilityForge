import { definePage } from "./define-page";

export const authenticationAndAuthorization = definePage({
  slug: "authentication-and-authorization",
  title: "Authentication and Authorization",
  description: "Login, roles, tokens, and backend-enforced permissions.",
  intro:
    "Authentication answers who the user is. Authorization answers what they are allowed to do. The app guides UI; the backend enforces rules.",
  whyItMatters:
    "Mobile apps can be reverse-engineered. Hiding an admin screen is not security — backend role checks on every protected request are.",
  workflow: [
    { label: "Login" },
    { label: "Backend verifies" },
    { label: "Token issued" },
    { label: "Secure storage" },
    { label: "Role-based UI" },
    { label: "Backend checks every request" },
  ],
  howToApply: [
    {
      heading: "Example roles (customize per product)",
      body: "Apprentice: submit reports. Mentor: review reports. Admin: manage users. Director: view analytics. Document permissions before coding.",
    },
  ],
  commonMistakes: [
    "Frontend-only role checks",
    "Passwords stored locally",
    "Insecure token storage",
    "Trusting role sent from the app without server verification",
  ],
  checklist: [
    {
      title: "Auth checklist",
      items: [
        "Login/logout flows tested",
        "Token expiry handled",
        "Backend validates role on protected routes",
        "Database rules match API rules",
      ],
    },
  ],
});
