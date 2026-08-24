---
name: commit-conventions
description: Enforce commit message and PR title type prefixes (feat, fix, refactor, docs, chore, test) and the repo's existing feature/fix/chore/refactor branch-naming pattern. Load before every git commit, before creating a branch, and before creating or renaming any PR title.
---

# Commit & PR conventions

This repo uses a fixed set of six type prefixes for commit messages and PR
titles. Every commit and PR title must start with exactly one:

- `feat` — new feature or capability
- `fix` — bug fix
- `refactor` — code change with no behavior change
- `docs` — documentation only
- `chore` — tooling, deps, config, maintenance
- `test` — adding or fixing tests

## Format

`<type>: <imperative, lowercase summary>`

Examples:
- `fix: crop project logos correctly and order by created_at`
- `chore: downgrade Expo SDK to 54`
- `refactor: extract useEffect into hooks`

## Rules

- Pick exactly one type based on the primary intent of the diff (check
  `git diff`/`git status` before writing the message). If a change mixes
  concerns (e.g. a fix plus an unrelated chore), prefer splitting into
  separate commits rather than picking a compound type.
- Type is lowercase, followed by `: ` (colon, single space).
- Description is imperative mood ("add", not "added"/"adds"), no leading
  capital after the colon, no trailing period.
- Body (if present) explains *why*, not what — same as the general repo
  commit guidance.
- Branch names follow `<type>/<short-slug>`, matching this repo's actual
  history — note the one exception: use `feature/` (not `feat/`) for new
  features in branch names, e.g. `feature/slideshow-autoplay-toggle`,
  `fix/project-card-image-crop-and-order`,
  `chore/patch-postcss-uuid-vulnerabilities`,
  `refactor/move-screen-effects-to-hooks`. Commit messages and PR titles
  still use `feat:`, not `feature:`.
- PR titles use the same `<type>: <summary>` format as commit messages.

## When to apply

Before running `git commit`, before creating a branch, and before
`gh pr create` or renaming a PR title: confirm the message/title/branch
starts with one of the six types above (branch: `feature` for feat) and
matches the format. If it doesn't, fix the type or reword before
proceeding — don't commit or open the PR with a non-conforming message.
