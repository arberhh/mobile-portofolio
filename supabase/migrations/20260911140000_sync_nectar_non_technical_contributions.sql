-- Replace Nectar's non_technical_contributions with the actual biggest
-- non-technical contributions
update public.projects
set
  non_technical_contributions = array[
    'Catch and clearly document new bugs and issues, making it easier for the whole team to track and prioritize them.',
    'Look for proactive ways to solve problems, often fixing issues directly rather than waiting on someone else.',
    'Explain fixes and reasoning to the team so it helps everyone grow, not just the codebase.'
  ]
where title = 'Nectar';
