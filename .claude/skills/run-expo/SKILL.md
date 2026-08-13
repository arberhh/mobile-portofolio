---
name: run-expo
description: Launch and drive this Expo/React Native portfolio app for local development and testing.
---

# Running this app

This is an Expo (SDK 57) React Native app. `expo start` boots the
Metro bundler; pick a platform from there.

## Setup

Env vars are required before the app can fetch data — the Supabase
client reads them at build time and will fail (or throw on the
non-null assertions) without them:

```bash
cp .env.example .env
# fill in EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY
```

## Launch

```bash
npx expo start --ios      # opens iOS Simulator (Xcode installed, confirmed working)
npx expo start --android
npx expo start --web      # see gotcha below
```

Default Metro port is 8081. To stop: `lsof -ti:8081 -sTCP:LISTEN | xargs -r kill`.

## Verify it's running

Don't just launch it — confirm data actually loaded:

1. Wait for Metro to finish bundling (watch the log for `Bundling
   complete`, not a fixed sleep).
2. Screenshot the simulator: `xcrun simctl io booted screenshot
   /tmp/verify.png`, then look at it. Confirm the profile name /
   project cards render instead of the red error banner.
3. Faster signal without a screenshot: tail the Metro log for the
   literal error strings from `supabase-service/index.ts` —
   `"Error fetching developer profile"` / `"Error fetching
   projects"`. If those appear, the fetch failed (env vars missing/
   wrong, or RLS blocking the read — see gotcha below). If the bundle
   finished and neither string appears, that's a decent proxy the
   fetch succeeded.

## Gotchas

- **Web platform isn't installed.** `expo start --web` fails with
  `CommandError: ... don't have the required dependencies installed`
  until you run `npx expo install react-dom react-native-web`.
- **RLS fails silently.** The `profile`/`projects`/`domains` tables
  have Row Level Security enabled. A missing `SELECT` policy for
  `anon` doesn't error — PostgREST just returns 0 rows, which shows
  up in the app as "Cannot coerce the result to a single JSON object"
  (profile) or an empty list (projects). Table-level `GRANT`s alone
  are not enough; check `pg_policies` on the Supabase project.
