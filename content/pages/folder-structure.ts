import { definePage } from "./define-page";

export const folderStructure = definePage({
  slug: "folder-structure",
  title: "Folder Structure",
  description: "Standard React Native project layout any team can reuse.",
  intro:
    "Every React Native project should use a predictable folder structure so any developer can navigate the codebase on day one, no matter who built it last.",
  whyItMatters:
    "Random folder layouts slow onboarding and cause duplicated patterns. A standard structure makes reviews faster and mentorship easier.",
  howToApply: [
    {
      heading: "Recommended src/ layout",
      body: "app/, screens/, components/, features/, services/, hooks/, store/, types/, utils/, navigation/, constants/, assets/.",
    },
    {
      heading: "Feature-based auth example",
      body: "features/auth/screens/LoginScreen.tsx, hooks/useLogin.ts, services/authService.ts, store/authStore.ts, types/authTypes.ts, components/LoginForm.tsx.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      code: `src/
  screens/
  components/
  features/
  services/
  hooks/
  store/
  types/
  utils/
  navigation/
  constants/
  assets/`,
    },
  ],
  commonMistakes: [
    "New folder names on every project",
    "Screens folder mixed with API utilities",
    "No feature grouping for large modules",
  ],
  checklist: [
    {
      title: "Structure checklist",
      items: [
        "README documents folder purpose",
        "New features follow feature/ pattern",
        "Shared UI in components/",
        "API only in services/",
      ],
    },
  ],
});
