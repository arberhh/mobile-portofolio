---
name: design-handoff-sync
description: Check ~/Desktop/Dev/portofolio/design-handoff/README.md for design changes not yet implemented, apply them to this Expo/React Native app, verify via run-expo, and open a GitHub PR. Trigger on "sync the design handoff", "check for new design changes", "implement the latest handoff".
---

# Design handoff → code → PR

On-demand pipeline sourced from a local handoff folder instead of Figma or
claude.ai/design. Run this whenever the handoff README may have changed —
it is not scheduled or automatic.

## Source folder

```
DESIGN_HANDOFF_DIR=/Users/arberhaxhimusa/Desktop/Dev/portofolio/design-handoff
```

This is a plain folder, not a git repo, and lives outside `mobile-portofolio`.
It currently holds only `README.md` (a prose restyle spec — colors,
typography, per-screen structure). It is *not* itemized as a checklist, so
"new" is tracked by content hash, not by checkbox state — see below.

A `reference.html` is mentioned inside the README's own "Files" section but
does not currently exist on disk in this folder. Don't treat its absence as
an error — the README's "Restyle spec" section already has concrete hex
colors, font sizes, and spacing, which is enough to implement from. If
`reference.html` shows up in the folder on a later run, read it too, as a
visual cross-check against the prose spec.

## 0. Preconditions

- `gh` must be authenticated and `origin` must point at the GitHub repo —
  already true for this repo, no setup needed.
- No Figma/claude.ai/design auth needed for this path.

## 1. Check for new content (hash gate)

State lives in this repo at `.claude/skills/design-handoff-sync/state.json`,
tracking the sha256 of every file in `DESIGN_HANDOFF_DIR` as of the last
successful sync:

```bash
find "$DESIGN_HANDOFF_DIR" -type f ! -name '.DS_Store' -exec shasum -a 256 {} \; | sort
```

Compare that output against `files` in `state.json`. Two cases:

- **No `state.json`, or hashes differ from the recorded ones** → there is
  new/changed content. Continue to step 2.
- **Hashes match exactly** → nothing changed since the last sync. Tell the
  user "no new design changes since the last sync" and stop — do not
  create a branch, do not open a PR.

Note the coarseness of this gate: it hashes the whole folder, so *any* edit
to the README (even a typo fix) triggers a full re-run of every screen
described in it, not just the changed part. That's an accepted tradeoff for
keeping the README free-form instead of a checklist — when you re-run,
re-read the existing code for each screen before touching it, since parts
may already match the spec from a previous sync and shouldn't be redone.

## 2. Branch

```bash
git fetch origin main
git switch -c design-handoff/<short-description> origin/main
```

Pick `<short-description>` from what actually changed (e.g. the design
direction's name, `technical-terminal`).

## 3. Read the spec

Read every file in `DESIGN_HANDOFF_DIR` (currently just `README.md`; also
`reference.html` if present). Extract:

- Which screens are in scope (per the current README: Profile, Home,
  Project Details).
- The fidelity note — this is a **re-skin, not a re-architecture**: keep
  existing structure, copy, section order, and interaction mechanics
  (back button, dark/light toggle, settings FAB, carousel) exactly as they
  are; only change visual language (colors, type, spacing, decoration).
- Exact tokens (dark and light variants) and typography rules given in the
  "Restyle spec" section.

## 4. Implement

- Apply the token/typography changes to the existing screens/components —
  don't create parallel new screens.
- Preserve both color-scheme variants (dark primary + light) since the
  README defines both and the app already has a working toggle.
- Keep the diff scoped to what the spec actually describes; don't touch
  unrelated screens.

## 5. Typecheck

```bash
npm run ts:check
```

## 6. Verify in the simulator

Load the `run-expo` skill and follow it to launch the app and confirm:

1. Metro bundles cleanly.
2. Each in-scope screen renders correctly in **both** dark and light mode
   (toggle and screenshot both) — compare against the token spec, not just
   "does it look plausible."
3. Existing interactions (nav, FAB, carousel, toggle) still work.

Fix and re-verify before proceeding if anything's off.

## 7. Update state and commit

Recompute the hash list from step 1's command and write it into
`.claude/skills/design-handoff-sync/state.json`:

```json
{
  "last_synced_at": "<ISO 8601 timestamp>",
  "files": {
    "<absolute path>": "<sha256>"
  }
}
```

Commit the code changes together with this state file update (never
`git add -A` — stage the specific files you touched plus the state file):

```bash
git commit -m "$(cat <<'EOF'
<what changed, e.g. Restyle Profile/Home/Project Details to Technical Terminal direction>

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

## 8. Open the PR

```bash
git push -u origin design-handoff/<short-description>
gh pr create --title "<short summary>" --body "$(cat <<'EOF'
## Summary
- <what changed, referencing the design-handoff README section(s) implemented>

## Test plan
- [x] npm run ts:check
- [x] Verified in iOS Simulator, dark and light mode

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Report the PR URL back to the user. Do not merge it.
