# Security review checklist

Required for PRs touching auth, payments, PII, or admin features.

## Data & storage

- [ ] Tokens in secure storage (Keychain / Keystore), not AsyncStorage
- [ ] No secrets in mobile source or git history
- [ ] Sensitive fields not logged

## Network

- [ ] HTTPS only; certificate pinning considered for high-risk apps
- [ ] Auth headers set in one place (`apiClient`)
- [ ] Timeouts and error handling on all API calls

## Authorization

- [ ] Permissions enforced on **backend**; UI only hides disallowed actions
- [ ] Role changes take effect without stale client cache exposing data

## Input & output

- [ ] User input validated server-side
- [ ] Deep links and push payloads do not bypass auth

## Release

- [ ] Dependency audit run (`npm audit` or equivalent)
- [ ] ProGuard / minification enabled for Android release where applicable

**MobilityForge:** Full list at `/docs/security-checklist`
