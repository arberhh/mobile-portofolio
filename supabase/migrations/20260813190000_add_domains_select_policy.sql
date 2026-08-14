-- public.domains has row level security enabled but no policies, so PostgREST
-- silently returns 0 rows to anon/authenticated instead of erroring.
create policy "Allow public read access" on public.domains
  for select
  to anon, authenticated
  using (true);
