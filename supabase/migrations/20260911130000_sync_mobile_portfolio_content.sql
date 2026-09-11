-- Sync the "Mobile Portfolio" project's long_description and
-- non_technical_contributions to what the repo's own migration history
-- already says they should be.
--
-- What happened: 20260910200000_add_mobile_portfolio_project.sql was
-- merged (PR #49), which Supabase's GitHub integration applies once, by
-- filename. Three follow-up PRs (#50/#51) then edited that SAME file's
-- content to fix the wording, but editing an already-applied migration
-- file is a silent no-op on the live database; the runner sees a
-- filename it already ran and skips it. So the live row was still the
-- very first version, even though the repo's copy of that file had moved
-- on. Confirmed directly against the live database via a read-only
-- PostgREST query before writing this.
--
-- Same lesson this migration itself is an example of following: never
-- edit an already-merged migration file again, since any future
-- correction to this project's content must be yet another new
-- migration.
update public.projects
set
  long_description = 'This portfolio app itself, dormant for roughly two years before I picked it back up in August 2026. Rather than writing every line by hand, I ran Claude Code as an AI pair programmer: scoped and planned the work in Linear through its MCP server, directed the agent through implementation session by session, and reviewed every pull request it opened before merging. Along the way I also built out the tooling that made that loop reliable, custom Claude Code skills, CI/CD, and an automated GitHub reviewer, so the process itself, not just this one redesign, became the reusable part.',
  non_technical_contributions = array[
    'Scoped and planned the features and tooling the rebuild needed before any code was written.',
    'Worked through detailed back-and-forth with the agent on what to build, then broke it down into Linear epics, tickets, and subtickets.',
    'Planned the app''s "Technical Terminal" redesign, a dark, monospace look with a lime accent.'
  ]
where title = 'Mobile Portfolio';
