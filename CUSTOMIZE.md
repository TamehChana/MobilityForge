# Customize MobilityForge for your organization

MobilityForge is built to be **reused across companies and projects**. You keep the engineering workflow; you swap branding and optional defaults.

## Quick customization checklist

1. **Homepage** (`app/page.tsx`): Replace organization name, hero copy, and footer.
2. **Page header label** (`components/docs/PageHeader.tsx`): e.g. "Your Company Guide".
3. **Metadata** (`app/layout.tsx`): Site title and description for SEO.
4. **PR template** (`.github/pull_request_template.md`): Set your hosted docs URL.
5. **Release templates** (`templates/`): Replace `your-docs-url` with your MobilityForge URL.
6. **README**: Your repo name, deploy URL, and license.
7. **Stack defaults** (`content/pages/recommended-stack.ts`): Your approved tools if different from React Native + TypeScript.
8. **Adoption**: Share `Adopt This Playbook` and `Organization Adoption Plan` with leads.

## What not to change (unless you have a good reason)

- Navigation order in `content/navigation.ts`: follows the learning path.
- Checklist structure: teams rely on consistent release gates.
- Service-layer and security patterns: these are framework-agnostic best practices.

## Adding a new guide

1. Create `content/pages/your-topic.ts` using `definePage()`.
2. Register it in `content/pages/index.ts`.
3. Add an entry to `DOC_NAV` in `content/navigation.ts`.
4. Optionally add `keyTakeaways` / `relatedSlugs` in `content/universal-metadata.ts`.

## Fork vs. copy

- **Internal host**: Deploy to Vercel; link from every mobile repo README.
- **White-label**: Fork the repo, customize homepage + metadata, keep content pages.
- **Per-client**: Same playbook; add a client-specific appendix page only when contracts require it.

## Measuring success

- New developers complete **Start Here** in week one.
- PR templates link to checklist pages.
- Production releases use **Security Checklist** and **Testing Checklist**.
- Fewer repeated code-review comments on the same topics.
