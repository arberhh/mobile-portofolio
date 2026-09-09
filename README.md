# mobile-portofolio

[![CI](https://github.com/arberhh/mobile-portofolio/actions/workflows/ci.yml/badge.svg)](https://github.com/arberhh/mobile-portofolio/actions/workflows/ci.yml)
[![CodeQL](https://github.com/arberhh/mobile-portofolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/arberhh/mobile-portofolio/actions/workflows/codeql.yml)

📱 Expo Portfolio: Showcase of 4 React Native apps. Clean, modular code. Features UI designs, animations. Ready for collaboration. Connect with me!

## <img width="30" height="30" src="https://img.icons8.com/color/48/expo.png" alt="expo"/> Try it now

Since May 2026, Expo Go only opens EAS Update links for the project owner or their org members, so scanning a QR code no longer works for outside visitors.

Want to run it yourself? See [docs/SETUP.md](docs/SETUP.md) for local setup and running instructions.

## 📁 Project Structure Overview

This project keeps code files organized in a TypeScript Expo project. It splits things into reusable pieces, screens for each view, and navigation to move between them. The context folder holds app-wide state, and themes keep the styling the same everywhere.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for a full technical breakdown — data flow, web-specific behavior, theming, and CI/CD.

## 💾 Supabase

This app uses Supabase as its backend. It's not just a demo — it shows I can set up and use a real backend. I use Supabase to store and show my projects, domains, and profile info.

## 🔒 Security

This repo is checked automatically so it's safe to clone and run:

- **[CodeQL](.github/workflows/codeql.yml)** static analysis scans the JS/TS source on every push, PR, and weekly, for common vulnerability patterns.
- **[Dependabot](.github/dependabot.yml)** opens weekly PRs for outdated/vulnerable npm and GitHub Actions dependencies, and raises alerts for known CVEs.
- **`npm audit`** runs in [CI](.github/workflows/ci.yml) on every PR/push, gated at high severity.
- The app itself only holds a public Supabase URL and anon key (`EXPO_PUBLIC_*` env vars), scoped by row-level security policies to public, read-only access on the `projects`, `domains`, and `profile` tables — there's no user auth or write path in the client.

See [SECURITY.md](SECURITY.md) for how to report a vulnerability.

---

Expo icon by [Icons8](https://icons8.com).
