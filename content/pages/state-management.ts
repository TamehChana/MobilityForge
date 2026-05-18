import { definePage } from "./define-page";

export const stateManagement = definePage({
  slug: "state-management",
  title: "State Management",
  description: "Local, global, server, and form state strategies.",
  intro:
    "State is data the app remembers while running: user, role, loading, errors, lists, drafts, and network status. Use the right tool for each type.",
  whyItMatters:
    "Poor state management causes stale data, spinners that never stop, wrong users on screen, and dashboards that do not update after login.",
  howToApply: [
    {
      heading: "Recommended strategy",
      body: "Local UI → useState. Global session → Zustand or Context. Server data → TanStack Query. Forms → React Hook Form. Sensitive tokens → secure storage. Preferences → AsyncStorage/MMKV.",
    },
  ],
  commonMistakes: [
    "Everything in global state",
    "Duplicating server data in manual state",
    "Not clearing session on logout",
  ],
  checklist: [
    {
      title: "State checklist",
      items: [
        "Session cleared on logout",
        "Server lists use TanStack Query or equivalent",
        "Loading and error states per screen",
        "No sensitive tokens in plain storage",
      ],
    },
  ],
});
