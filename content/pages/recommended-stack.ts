import { definePage } from "./define-page";

export const recommendedStack = definePage({
  slug: "recommended-stack",
  title: "Recommended Stack",
  description: "Default 2026 stack and when to choose Firebase, Supabase, or custom backends.",
  intro:
    "The recommended default mobile stack is React Native + Expo + TypeScript, with backend and tooling chosen per project. The stack supports cross-platform delivery while keeping architecture, security, and testing consistent across your portfolio.",
  whyItMatters:
    "A shared default stack reduces decision fatigue and helps mentors review code predictably. Flexibility remains — but every project should document why a different backend was chosen.",
  howToApply: [
    {
      heading: "Default mobile stack",
      body: "React Native, Expo, TypeScript, reusable components, Zustand or Context for session state, TanStack Query for server data, React Hook Form + Zod for forms, secure storage for tokens, GitHub, GitHub Actions or EAS Build, Sentry or Crashlytics for monitoring.",
    },
    {
      heading: "When to use Firebase",
      body: "Rapid prototypes, auth-heavy apps, realtime features, small teams without a dedicated backend engineer. Watch vendor lock-in and complex query limits.",
    },
    {
      heading: "When to use Supabase",
      body: "Postgres-backed apps, SQL relationships, Row Level Security for authorization, teams comfortable with SQL and open-source tooling.",
    },
    {
      heading: "When to use a custom backend",
      body: "Complex business logic, strict compliance, custom payments, or multi-service architecture (NestJS, Express, Django, Laravel + PostgreSQL/MongoDB).",
    },
  ],
  commonMistakes: [
    "Picking a backend because of a tutorial, not project requirements",
    "Putting secret keys in the mobile app",
    "No typed models shared between app and API",
    "Skipping CI/CD because 'we will add it later'",
  ],
  checklist: [
    {
      title: "Stack decision",
      items: [
        "Document chosen stack in project README",
        "Confirm Expo vs bare React Native if needed",
        "Confirm auth provider and token strategy",
        "Confirm monitoring tool",
        "Confirm CI/CD path (EAS, GitHub Actions)",
      ],
    },
  ],
});
