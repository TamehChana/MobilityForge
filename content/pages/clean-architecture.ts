import { definePage } from "./define-page";

export const cleanArchitecture = definePage({
  slug: "clean-architecture",
  title: "Clean Architecture",
  description: "Separate screens, components, hooks, services, and state.",
  intro:
    "Do not put UI, validation, API calls, token storage, navigation, and state updates in one screen file. Separate responsibilities so each part can be tested and changed safely.",
  whyItMatters:
    "Without layers, every feature change risks breaking unrelated code. Clean architecture supports teamwork, reviews, and long-term maintenance.",
  howToApply: [
    {
      heading: "Layers",
      body: "Screens (UI) → hooks/features (logic) → services (API) → store (session) → types → utils → navigation → storage.",
    },
    {
      heading: "Good login split",
      body: "LoginScreen.tsx (UI), useLogin.ts (logic), authService.ts (API), authStore.ts (session), secureStorage.ts (tokens).",
    },
  ],
  codeExamples: [
    {
      title: "Bad: everything in LoginScreen",
      language: "text",
      code: "// LoginScreen.tsx contains UI + API + storage + navigation + state",
    },
    {
      title: "Good: separated files",
      language: "text",
      code: "LoginScreen.tsx → useLogin.ts → authService.ts → authStore.ts → secureStorage.ts",
    },
  ],
  commonMistakes: [
    "God screens with hundreds of lines",
    "API calls inside components",
    "No shared types for API responses",
  ],
  checklist: [
    {
      title: "Architecture checklist",
      items: [
        "Screens mostly render UI",
        "API calls only in services",
        "Business logic in hooks or features",
        "Types defined for main entities",
      ],
    },
  ],
});
