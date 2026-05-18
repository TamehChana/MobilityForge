import { definePage } from "./define-page";

export const apiIntegration = definePage({
  slug: "api-integration",
  title: "API Integration",
  description: "Service-layer pattern for backend communication.",
  intro:
    "Screens should not call the backend directly. Use a service layer: screen, hook, service, API, then database.",
  whyItMatters:
    "Centralized API logic means one place to update URLs, tokens, and error handling when the backend changes.",
  workflow: [
    { label: "Screen" },
    { label: "Hook / logic" },
    { label: "Service layer" },
    { label: "Backend API" },
    { label: "Database" },
  ],
  howToApply: [
    {
      heading: "Service files",
      body: "apiClient.ts, authService.ts, userService.ts, reportService.ts, taskService.ts. Screens call authService.login(), not fetch() directly.",
    },
  ],
  codeExamples: [
    {
      language: "typescript",
      code: `// services/reportService.ts
export async function submitWeeklyReport(data: WeeklyReport) {
  return apiClient.post("/reports", data);
}`,
    },
  ],
  commonMistakes: [
    "fetch() in every screen",
    "Repeated base URLs",
    "No shared error handling",
    "Secrets in the mobile app",
  ],
  checklist: [
    {
      title: "API checklist",
      items: [
        "apiClient handles base URL and auth header",
        "One service file per domain",
        "Errors mapped to user-friendly messages",
        "Loading states handled in hooks",
      ],
    },
  ],
});
