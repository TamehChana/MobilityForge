import type { CodeExample } from "@/types/docs";

/** Default code examples for guides that omit them — keeps depth consistent across the playbook. */
export const PAGE_CODE_EXAMPLES: Record<string, CodeExample[]> = {
  "start-here": [
    {
      title: "README link to MobilityForge",
      language: "markdown",
      code: `## Engineering standards
All mobile work follows [MobilityForge](https://your-docs-url/docs/start-here).
PRs must link the relevant checklist page before merge.`,
    },
  ],
  "adopt-this-playbook": [
    {
      title: "PR template snippet",
      language: "markdown",
      code: `## MobilityForge checklist
- [ ] Relevant guide: /docs/___
- [ ] Security checklist (if release): /docs/security-checklist
- [ ] Testing checklist: /docs/testing-checklist`,
    },
  ],
  "organization-adoption-plan": [
    {
      title: "Quarterly playbook review agenda",
      language: "markdown",
      code: `1. Pages teams skipped or disputed
2. Stack default changes
3. New checklist items from incidents
4. Onboarding survey results`,
    },
  ],
  "mobile-engineering-2026": [
    {
      title: "Project brief (day one)",
      language: "markdown",
      code: `# Project: [Name]
## Users & roles
- Apprentice, Mentor, Admin, …
## v1 features
- …
## Backend
- Supabase | Firebase | REST API
## Security notes
- PII fields, auth method, retention`,
    },
  ],
  "recommended-stack": [
    {
      title: "package.json scripts (React Native + Expo)",
      language: "json",
      code: `{
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "lint": "eslint .",
    "test": "jest"
  }
}`,
    },
  ],
  "design-workflow": [
    {
      title: "Feature spec template",
      language: "markdown",
      code: `## Feature: Weekly report
**User:** Apprentice
**Goal:** Submit hours and notes
**Screens:** List, Form, Success
**States:** loading, empty, error, offline
**API:** POST /reports`,
    },
  ],
  "figma-and-figma-ai": [
    {
      title: "Design handoff comment",
      language: "markdown",
      code: `Component: PrimaryButton
Token: color/brand-600, spacing/4
States: default, pressed, disabled
RN component: components/ui/Button.tsx`,
    },
  ],
  "authentication-and-authorization": [
    {
      title: "Secure token storage (Expo)",
      language: "typescript",
      code: `import * as SecureStore from "expo-secure-store";

export async function saveSession(token: string) {
  await SecureStore.setItemAsync("access_token", token);
}

// Never store tokens in AsyncStorage for production apps`,
    },
  ],
  "state-management": [
    {
      title: "Server state with a custom hook",
      language: "typescript",
      code: `export function useReports() {
  const [data, setData] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    reportService.list()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}`,
    },
  ],
  "security-checklist": [
    {
      title: "apiClient: auth header only",
      language: "typescript",
      code: `// Good: token from secure storage, added in one place
headers: { Authorization: \`Bearer \${token}\` }

// Bad: API secret in mobile source
const STRIPE_SECRET = "sk_live_..."; // NEVER`,
    },
  ],
  "testing-checklist": [
    {
      title: "Service unit test (Jest)",
      language: "typescript",
      code: `import { submitWeeklyReport } from "./reportService";

jest.mock("./apiClient");

it("posts report payload", async () => {
  await submitWeeklyReport({ hours: 40, week: "2026-W20" });
  expect(apiClient.post).toHaveBeenCalledWith("/reports", expect.any(Object));
});`,
    },
  ],
  "git-workflow": [
    {
      title: "Conventional commit",
      language: "bash",
      code: `git checkout -b feature/weekly-report-form
git commit -m "feat(reports): add submit form validation"
git push -u origin feature/weekly-report-form`,
    },
  ],
  "cicd-and-release-management": [
    {
      title: "GitHub Actions: lint and test",
      language: "yaml",
      code: `name: CI
on: [pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: npm ci
      - run: npm run lint
      - run: npm test`,
    },
  ],
  "monitoring-and-maintenance": [
    {
      title: "Crash boundary (concept)",
      language: "typescript",
      code: `// Wrap root navigator; log to Sentry/Crashlytics
export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary onError={(err) => logCrash(err)}>
      {children}
    </ErrorBoundary>
  );
}`,
    },
  ],
  "team-collaboration": [
    {
      title: "PR description template",
      language: "markdown",
      code: `## What
Brief summary of the change

## How to test
1. …
2. …

## Checklists
- [ ] /docs/testing-checklist
- [ ] Screenshots (UI)`,
    },
  ],
};

export function getPageCodeExamples(slug: string): CodeExample[] | undefined {
  return PAGE_CODE_EXAMPLES[slug];
}
