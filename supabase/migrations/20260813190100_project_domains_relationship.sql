-- Replace projects.domains (a hardcoded text[] duplicating domain names per
-- project) with a proper many-to-many relationship to public.domains.
create table public.project_domains (
  project_id bigint not null references public.projects (id) on delete cascade,
  domain_id bigint not null references public.domains (id) on delete cascade,
  primary key (project_id, domain_id)
);

alter table public.project_domains enable row level security;

create policy "Allow public read access" on public.project_domains
  for select
  to anon, authenticated
  using (true);

grant select on table public.project_domains to anon;
grant select on table public.project_domains to authenticated;
grant all on table public.project_domains to service_role;

-- normalize a known typo ("e-comerce") before backfilling so it still
-- matches domains.title instead of silently dropping that reference
update public.projects
set domains = array_replace(domains, 'e-comerce', 'e-commerce')
where 'e-comerce' = any(domains);

insert into public.project_domains (project_id, domain_id)
select p.id, d.id
from public.projects p
cross join lateral unnest(p.domains) as domain_title
join public.domains d on d.title = domain_title
where p.domains is not null;

alter table public.projects drop column domains;
