-- Add this portfolio app itself as a project entry: picked back up in
-- August 2026 after a ~two-year gap and rebuilt end to end using Claude
-- Code (Anthropic's agentic coding tool) as an AI pair programmer, with
-- a real engineering workflow (Linear via MCP, custom Claude Code skills,
-- CI/CD, an automated GitHub reviewer) built up around it along the way.
--
-- banner_url is a generated wordmark; images are real screenshots of the
-- running app (mobile-width Home, wide-web Home with the sidebar, and the
-- profile screen), captured via Playwright against a local `expo start
-- --web` and uploaded to the `portofolio/mobile-portfolio/` storage path.
-- github is set, unlike the employer projects - this one really is public.

-- Resync the projects/domains id sequences before inserting, same
-- precaution as 20260817213000_add_jubileemedia_nectar_project.sql.
select setval(pg_get_serial_sequence('public.projects', 'id'), (select max(id) from public.projects));
select setval(pg_get_serial_sequence('public.domains', 'id'), (select max(id) from public.domains));

-- 'developer-tools' and 'ai' don't exist yet as domains, add them before linking.
insert into public.domains (title, icon)
values
  ('developer-tools', 'code'),
  ('ai', 'robot')
on conflict do nothing;

with new_project as (
  insert into public.projects (
    title,
    short_description,
    long_description,
    personal,
    github,
    banner_url,
    images,
    tools_technologies,
    non_technical_contributions,
    techical_contributions
  )
  values (
    'Mobile Portfolio',
    'Picked this portfolio app back up after a roughly two-year gap and rebuilt it end to end using Claude Code as an AI pair programmer, including a full redesign, first-class web support, and a real engineering workflow around it.',
    'This portfolio app itself. I picked the project back up in August 2026 after a roughly two-year gap and used Claude Code, Anthropic''s agentic coding tool, to rebuild it end to end: a new dark, monospace "Technical Terminal" design, first-class web support, and a proper engineering workflow around it, not just the code. Working sessions ran as a loop of planning in Linear through its MCP server, directing Claude Code through the implementation, and reviewing the resulting pull requests.',
    true,
    'https://github.com/arberhh/mobile-portofolio',
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/mobile-portfolio/banner.png',
    array[
      'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/mobile-portfolio/screen-home-mobile.png',
      'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/mobile-portfolio/screen-home-web.png',
      'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/mobile-portfolio/screen-profile-web.png'
    ],
    array[
      'React Native (Expo SDK 57), TypeScript, and react-native-web for a single iOS/Android/web codebase.',
      'Claude Code as an AI pair programmer, directed through custom Claude Code skills (commit-conventions, design-handoff-sync, run-expo) checked into the repo.',
      'Linear via its MCP server for planning, turning discussions directly into tracked ARB-* tickets referenced in every commit and pull request.',
      'GitHub Actions for CI: TypeScript checks, oxlint/ESLint, oxfmt formatting, Jest, a Knip deadcode check, a web export build sanity check, npm audit, and CodeQL, all gating every pull request.',
      'The official Claude Code GitHub App for automated pull request review and in-PR assistance, alongside Dependabot for dependency updates.',
      'EAS for OTA updates, and Supabase (Postgres, PostgREST, RLS) as the read-only content backend for this app.',
      'GitHub Pages, via a scripted gh-pages deploy, for the live web build.'
    ],
    array[
      'Set the product and design direction and reviewed it against a written design-handoff spec instead of a live Figma file.',
      'Planned and tracked all work as Linear tickets, letting planning discussions become tickets directly through the Linear MCP server rather than a separate project-management step.',
      'Reviewed every pull request the agent opened before merging, including catching and correcting a few cases where it misapplied instructions.',
      'Iterated on the AI workflow itself — commit/PR conventions, skills, and CI gates — so the agent''s output matched the standards of a real engineering process.'
    ],
    array[
      'Picked the project back up after a roughly two-year gap and used Claude Code, directed through custom checked-in skills, to rebuild it end to end.',
      'Authored reusable Claude Code skills for this repo: commit-conventions (enforces commit/PR/branch naming and Linear ticket IDs), design-handoff-sync (turns a written design spec into code and a PR without Figma), and run-expo (launches and drives the app for local verification).',
      'Connected Linear through its MCP server so planning discussions become tracked ARB-* tickets directly, referenced in every commit and pull request.',
      'Built the CI pipeline from scratch, gating every pull request on type-checking, linting, formatting, tests, a deadcode check, a web build sanity check, and security scanning.',
      'Installed and configured the official Claude Code GitHub App for automated pull request review and in-PR assistance.',
      'Added first-class web support: react-native-web, a `.web.tsx` platform-split pattern for web-only layout, and a GitHub Actions workflow that builds and publishes the web export to GitHub Pages.',
      'Upgraded Expo SDK 54 to 57 and React Navigation to v7, moved secrets out of source into environment variables, and set up the local Supabase CLI project with migration-based schema management.',
      'Rebuilt the visual design in a dark, monospace "Technical Terminal" direction with a lime accent, replacing the app''s original look.',
      'Structured all project content as versioned Supabase migrations instead of manual dashboard edits, so adding a new portfolio entry, like this one, is just a migration.'
    ]
  )
  returning id
)
insert into public.project_domains (project_id, domain_id)
select new_project.id, d.id
from new_project
cross join public.domains d
where d.title in ('technology', 'developer-tools', 'ai');
