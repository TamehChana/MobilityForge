# MobilityForge

**MobilityForge** is a reusable mobile engineering playbook — a hosted documentation platform that teaches developers and teams how to build real-world mobile applications through a secure cross-platform engineering workflow.

> Build mobile apps as secure engineering systems — not just screens.

## Who it is for

- Developers and apprentices learning production mobile engineering
- Startups, agencies, and in-house product teams
- Mentors, tech leads, and reviewers who want one shared standard
- **Any company** — fork, white-label, and deploy for your own projects ([CUSTOMIZE.md](./CUSTOMIZE.md))

## What you get

- **20 guides** from “Start Here” through adoption, architecture, security, CI/CD, and monitoring
- **Key takeaways**, **related guides**, and **code examples** on every page
- **On-page table of contents** and **copy checklist** buttons
- **Dark mode**, categorized sidebar, and **full-text search**
- **Repo templates** (`templates/`, `.github/pull_request_template.md`) for PRs and releases
- **GitHub Actions CI** (`build:clean` on every push/PR)
- **Phased adoption plan** for rolling out the playbook across an organization

## Tech stack (this site)

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel (recommended) |

Mobile apps *documented* in the guides use **React Native + TypeScript** by default.

## Documentation index

| Guide | Path |
|-------|------|
| Start Here | `/docs/start-here` |
| Adopt This Playbook | `/docs/adopt-this-playbook` |
| Mobile Engineering in 2026 | `/docs/mobile-engineering-2026` |
| Recommended Stack | `/docs/recommended-stack` |
| Design Workflow | `/docs/design-workflow` |
| Figma and Figma AI | `/docs/figma-and-figma-ai` |
| Clean Architecture | `/docs/clean-architecture` |
| Folder Structure | `/docs/folder-structure` |
| Reusable Components | `/docs/reusable-components` |
| API Integration | `/docs/api-integration` |
| Authentication & Authorization | `/docs/authentication-and-authorization` |
| State Management | `/docs/state-management` |
| Security Checklist | `/docs/security-checklist` |
| Testing Checklist | `/docs/testing-checklist` |
| Git Workflow | `/docs/git-workflow` |
| CI/CD & Release | `/docs/cicd-and-release-management` |
| Monitoring & Maintenance | `/docs/monitoring-and-maintenance` |
| Team Collaboration | `/docs/team-collaboration` |
| Project Documentation Template | `/docs/project-documentation-template` |
| Organization Adoption Plan | `/docs/organization-adoption-plan` |

## Run locally

```powershell
cd E:\MobilityForge
npm install
npm run dev
```

If you see stale routes or 500 errors after big changes:

```powershell
npm run dev:clean
```

Open [http://localhost:3000](http://localhost:3000) — docs start at [http://localhost:3000/docs/start-here](http://localhost:3000/docs/start-here).

## Build for production

```powershell
npm run build:clean
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the repo; framework preset: **Next.js**.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL (for sitemap/metadata).
5. Deploy.

## Customize for your company

See **[CUSTOMIZE.md](./CUSTOMIZE.md)** — homepage branding, metadata, stack defaults, and how to add new guides.

## Project structure

```
app/              Next.js routes (home, docs)
components/       Layout, docs UI, homepage
content/          Page content, navigation, universal metadata
lib/              Search and utilities
types/            TypeScript types
scripts/          install.bat, repair-install.bat, clean-and-dev.bat
```

## Troubleshooting install

- **ENOSPC**: Free disk space on `C:`, then `npm cache clean --force`
- **TAR_ENTRY_ERROR**: Delete `node_modules`, run `.\scripts\repair-install.bat` once
- Run only **one** `npm install` at a time
- **Corrupt `.next`** (`Cannot find module './611.js'`, 500 on every page):
  1. Press **Ctrl+C** in every terminal running `npm run dev`
  2. Run **`npm run dev:reset`** (stops port 3000, deletes `.next`, starts dev)
  3. Do **not** run `npm run build:clean` while `npm run dev` is active

## License

Use and adapt for your organization. Attribution appreciated when you fork publicly.
