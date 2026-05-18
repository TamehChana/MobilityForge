# Deploy MobilityForge to Vercel

## Prerequisites

- GitHub account
- [Vercel](https://vercel.com) account
- Project builds locally: `npm run build`

## Steps

### 1. Push to GitHub

```powershell
cd E:\MobilityForge
git add .
git commit -m "MobilityForge: mobile engineering playbook"
git remote add origin https://github.com/YOUR_USER/mobilityforge.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Root directory: `.` (default)
5. Build command: `npm run build` (default)
6. Output: Next.js default

### 3. Environment variable (recommended)

After first deploy, copy your Vercel URL and add:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-app.vercel.app` |

Redeploy so sitemap and metadata use the correct domain.

### 4. Verify

- Home page loads
- `/docs/mobile-engineering-2026` loads
- Sidebar search works
- `/sitemap.xml` lists all pages

## Custom domain (optional)

Vercel: Project, **Settings**, **Domains**, then add your domain.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on Vercel | Run `npm run build` locally and fix errors first |
| Wrong sitemap URLs | Set `NEXT_PUBLIC_SITE_URL` and redeploy |
| 404 on docs | Ensure `app/docs/[slug]/page.tsx` is committed |
