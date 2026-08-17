-- Add JubileeMedia's Nectar (dating app) as a new project, using
-- Arber-Haxhimusa-CV.pdf as the source for role/tool facts. Written in the
-- same short/plain style as the other projects.
--
-- banner_url/images are left null - there are no screenshots for this
-- project yet, add them once available.
-- github is left null - not an open-source project.

-- "dating" doesn't exist yet as a domain, add it before linking.
insert into public.domains (title, icon)
values ('dating', 'heart')
on conflict do nothing;

with new_project as (
  insert into public.projects (
    title,
    short_description,
    long_description,
    personal,
    tools_technologies,
    non_technical_contributions,
    techical_contributions
  )
  values (
    'Nectar',
    'At JubileeMedia, I build and maintain Nectar, a dating app for iOS and Android, using React Native (Expo) and TypeScript.',
    'At JubileeMedia, I build and maintain Nectar, a dating app for iOS and Android, using React Native (Expo) and TypeScript. I set up Development, Staging, and Production environments with one shared config, and built CI/CD pipelines with Expo and GitHub Actions to automate builds and app store releases. I also split the app into clear modules for components, hooks, and services, so it''s easier to grow and maintain.',
    false,
    array[
      'React Native (Expo) and TypeScript for the app.',
      'Firebase, Pushwoosh, OneSignal, and SendBird for notifications and messaging.',
      'Firebase Auth for sign-in on iOS and Android.',
      'RevenueCat for subscriptions and payments.',
      'Hasura and Apollo Client with GraphQL codegen for typed data.',
      'Mixpanel and Firebase Remote Config for A/B tests and event tracking.',
      'Expo and GitHub Actions for CI/CD, building and releasing to the App Store and Google Play.'
    ],
    array[
      'Tested APIs against the backend and reported data issues to the backend team.',
      'Worked closely with QA to track down and fix product issues.',
      'Mentored teammates on the codebase — answered questions and paired on tasks they were stuck on.',
      'Onboarded new engineers onto the team and tech stack.',
      'Helped the team improve how tickets were triaged and worked through.'
    ],
    array[
      'Built and maintain the Nectar app end to end with React Native and TypeScript.',
      'Set up Development, Staging, and Production environments with one shared config file.',
      'Built CI/CD pipelines with Expo and GitHub Actions to automate builds and app store releases.',
      'Added Firebase auth for iOS and Android sign-in.',
      'Split the app into modules (components, hooks, services) to make it easier to maintain.',
      'Set up subscriptions and payments with RevenueCat.',
      'Set up Hasura with Apollo Client and GraphQL codegen for fully typed queries.',
      'Ran A/B tests and tracked events with Mixpanel and Firebase Remote Config.',
      'Added global state with React Context.',
      'Updated the app to use the React Compiler.'
    ]
  )
  returning id
)
insert into public.project_domains (project_id, domain_id)
select new_project.id, d.id
from new_project
cross join public.domains d
where d.title in ('dating', 'technology', 'social-media');
