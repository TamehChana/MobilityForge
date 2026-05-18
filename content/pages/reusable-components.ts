import { definePage } from "./define-page";

export const reusableComponents = definePage({
  slug: "reusable-components",
  title: "Reusable Components",
  description: "Shared UI building blocks and design consistency.",
  intro:
    "Build AppButton, AppInput, AppCard, ScreenContainer, LoadingSpinner, EmptyState, and ErrorMessage once — reuse everywhere.",
  whyItMatters:
    "Consistency, faster development, easier design updates, and cleaner reviews when every screen uses the same primitives.",
  howToApply: [
    {
      heading: "Usage",
      body: "Use <AppButton title=\"Submit Report\" onPress={handleSubmit} /> instead of custom buttons per screen. Keep business logic out of presentational components.",
    },
  ],
  codeExamples: [
    {
      language: "tsx",
      code: `<AppButton title="Submit Report" onPress={handleSubmit} variant="primary" />`,
    },
  ],
  commonMistakes: [
    "New button styles on every screen",
    "Logic inside UI components",
    "Overly specific components that cannot reuse",
  ],
  checklist: [
    {
      title: "Components checklist",
      items: [
        "Buttons use AppButton",
        "Forms use AppInput",
        "Loading and empty states shared",
        "Design tokens for colors and spacing",
      ],
    },
  ],
});
