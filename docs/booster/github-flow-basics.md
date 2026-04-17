# GitHub Flow Basics (TMDB Project)

This is a minimal workflow for a solo project with product-like discipline.

## Core Rules

- `main` is always stable and deployable.
- Every change is done in a separate branch.
- All changes go to `main` through Pull Requests.
- Merge only after CI is green.

## Branch Naming

- `feature/<short-name>` - new functionality
- `fix/<short-name>` - bug fixes
- `refactor/<short-name>` - internal improvements
- `docs/<short-name>` - documentation updates
- `chore/<short-name>` - config/tooling/maintenance

Examples:

- `feature/main-page-sections`
- `fix/search-empty-state`
- `docs/update-booster-notes`

## Daily Flow

1. Update local `main`:
   - `git switch main`
   - `git pull origin main`
2. Create a branch for one task:
   - `git switch -c feature/<task-name>`
3. Implement in small commits.
4. Push branch:
   - `git push -u origin <branch-name>`
5. Open PR into `main`.
6. Wait for CI checks (`lint`, `build`).
7. Merge PR to `main`.
8. Delete merged branch.

## Branch Cleanup Commands

After merge, clean both local and remote branch copies:

- Switch to main and sync:
  - `git switch main`
  - `git pull origin main`
- Delete local merged branch:
  - `git branch -d <branch-name>`
- Delete remote branch:
  - `git push origin --delete <branch-name>`
- Prune stale remote-tracking branches:
  - `git fetch --prune`

## Commit Style

Use short Conventional Commit prefixes:

- `feat:`
- `fix:`
- `refactor:`
- `docs:`
- `chore:`

Examples:

- `feat: add category page tabs`
- `fix: reset search result on clear`
- `docs: update vercel setup notes`

## PR Minimum Template

Each PR should include:

- what changed
- why it was needed
- how it was tested
- Vercel preview link

Use: `.github/PULL_REQUEST_TEMPLATE.md`.

## CI + Vercel

- GitHub Actions CI validates code quality on PR/push.
- Vercel creates Preview Deployments for branches/PRs.
- `main` updates trigger production deployment.

## Keep It Simple

- One task per branch/PR when possible.
- Prefer small PRs over large ones.
- Do not push directly to `main`.
