# Pull request checklist

Copy into your PR description or GitHub PR template.

## Code quality

- [ ] Branch name follows convention (`feature/`, `fix/`, `chore/`)
- [ ] Commits are focused with clear messages
- [ ] No secrets, API keys, or `.env` files committed
- [ ] Service layer used for API calls (no raw `fetch` in screens)
- [ ] Loading, error, and empty states handled

## MobilityForge guides

- [ ] Changes match [Folder Structure](../docs/folder-structure) (or documented exception)
- [ ] [Clean Architecture](../docs/clean-architecture) respected (screens vs services vs hooks)
- [ ] [Git Workflow](../docs/git-workflow) followed

## Review

- [ ] Self-reviewed the diff
- [ ] At least one reviewer assigned
- [ ] Linked ticket / issue ID

## Testing

- [ ] Manually tested happy path
- [ ] Tested error / offline path where relevant
- [ ] Unit tests added or updated for business logic
