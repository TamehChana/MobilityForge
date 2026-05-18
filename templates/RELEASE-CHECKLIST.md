# Production release checklist

Use before every App Store / Play Store submission or production deploy.

## Pre-release

- [ ] Version number and changelog updated
- [ ] [Security checklist](https://your-docs-url/docs/security-checklist) — all items verified
- [ ] [Testing checklist](https://your-docs-url/docs/testing-checklist) — all items verified
- [ ] Auth flows tested (login, logout, expired session, role change)
- [ ] No debug logging of tokens or PII
- [ ] Backend migrations / config deployed before mobile release

## Build

- [ ] CI green on release branch
- [ ] Release build signed with correct credentials
- [ ] Environment points to production API (not staging)

## Store / deploy

- [ ] Release notes written for users
- [ ] Rollback plan documented (previous build ID / OTA version)
- [ ] [Monitoring](https://your-docs-url/docs/monitoring-and-maintenance) enabled (crashes, errors)

## Post-release

- [ ] Smoke test on production build
- [ ] Monitor crash rate for 24–48 hours
- [ ] Notify team in shared channel
