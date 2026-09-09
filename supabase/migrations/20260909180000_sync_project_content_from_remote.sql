-- Record the current project content as of 2026-09-09. This content was
-- edited directly on the remote database (via Studio) after
-- 20260817211500_simplify_project_text.sql / 20260817213000_..._nectar_project.sql
-- and was never captured as a migration, so replaying migrations from
-- scratch would have reverted Twig/ArcadeQuest/AQ Shop/Nectar back to the
-- older "simplified" text. This migration is a no-op on the remote
-- database (values already match) and only exists to bring migration
-- history back in sync with what's actually live.
update public.projects
set
  short_description = 'Built and maintained a React Native mobile application with more than 1 million installs, delivering iOS and Android features, native integrations, performance improvements, and a full product redesign.',
  long_description = 'At Twig, I worked as a Mobile Developer on a production application with more than 1 million installs. I developed and maintained features for iOS and Android using React Native, integrated native SDKs, resolved critical production issues, and used product data to improve conversion and engagement. I also contributed to rebuilding the application with a new design, improving usability, performance, and maintainability.',
  aproach = NULL,
  tools_technologies = array['React Native, React, and JavaScript for cross-platform mobile development.', 'MongoDB for application data.', 'Native Android and iOS SDKs for platform-specific functionality.', 'Analytics and product data for conversion and engagement optimization.'],
  non_technical_contributions = array['Participated in user-story development, sprint planning, and retrospectives.', 'Collaborated with designers, product managers, backend engineers, and QA.', 'Supported onboarding and knowledge sharing for other team members.'],
  techical_contributions = array['Developed mobile features for an application with more than 1 million installs.', 'Improved application performance, reliability, and responsiveness.', 'Integrated native SDKs across Android and iOS.', 'Resolved critical production issues, including a pod versioning problem affecting iOS users.', 'Contributed to a full application rebuild with a new design and improved performance.', 'Used data-driven insights to improve conversion and user engagement.']
where title = 'Twig';

update public.projects
set
  short_description = 'Built React Native applications for Fortnite players, including player statistics, live item shop updates, quests, subscriptions, onboarding, and engagement-focused mini-games.',
  long_description = 'At ArcadeQuest, I led the development of mobile applications using React Native and TypeScript. The products provided Fortnite player statistics, live item shop data, quests, subscriptions, and interactive features. I also built backend integrations with Node.js and Supabase Edge Functions, implemented payment systems, improved onboarding, and contributed to mini-games that increased engagement and retention.',
  aproach = NULL,
  tools_technologies = array['React Native and TypeScript for cross-platform mobile development.', 'Node.js APIs for Fortnite item shop data and application services.', 'Supabase Edge Functions for external API integrations and scheduled backend tasks.', 'RevenueCat and Stripe for subscriptions and in-app purchases.', 'Mixpanel, UXCam, and Sentry for analytics, user research, and error monitoring.'],
  non_technical_contributions = array['Collaborated with product and backend teams to plan and deliver features.', 'Used product analytics to improve the user experience.', 'Tested and debugged the application to maintain production stability.'],
  techical_contributions = array['Led development of React Native mobile applications for Fortnite players.', 'Built player statistics, live item shop updates, quests, and subscription features.', 'Created Node.js APIs to retrieve and display Fortnite item shop data.', 'Created Supabase Edge Functions for external API calls, data processing, and scheduled jobs.', 'Implemented a new user experience that improved onboarding, retention, and conversion.', 'Built a mini-games system with Node.js and Unity to increase engagement.', 'Managed iOS and Android builds, releases, and production updates.']
where title = 'ArcadeQuest';

update public.projects
set
  short_description = 'Built a React Native mobile shopping experience for discovering and purchasing indie games, with live showcases, discounted listings, and in-app purchases.',
  long_description = 'I led development of a mobile application for discovering and purchasing indie games. The product combined live game showcases, product discovery, discounted listings, and in-app purchases in a simple cross-platform experience. I worked closely with the team to shape the product around user needs while maintaining a modular architecture that was easy to extend and maintain.',
  aproach = 'Used a modular React Native architecture and clean, maintainable code to help the team deliver features quickly while keeping the application easy to extend, test, and support.',
  tools_technologies = array['React Native and TypeScript for cross-platform mobile development.', 'Mixpanel for product analytics and user behavior tracking.', 'Sentry for error monitoring and debugging.', 'RevenueCat and Stripe for subscriptions and in-app purchases.', 'Android Studio and Xcode for platform development and release management.'],
  non_technical_contributions = array['Participated in feature discovery and product brainstorming.', 'Used user data to guide improvements to the application experience.', 'Tested and debugged features to maintain product stability.'],
  techical_contributions = array['Led development of a mobile shopping experience for indie games.', 'Built a Product Hunt-style discovery system for new Steam releases.', 'Implemented live game showcases and real-time user engagement features.', 'Added discounted game listings and direct in-app purchasing.', 'Built and maintained the application across Android and iOS.']
where title = 'AQ Shop';

update public.projects
set
  short_description = 'Build and maintain Nectar, a React Native dating application for iOS and Android, owning mobile architecture, typed GraphQL integrations, authentication, subscriptions, notifications, analytics, and releases.',
  long_description = 'At JubileeMedia, I build and maintain Nectar''s dating experience using React Native, Expo, and TypeScript. I own mobile architecture and delivery across Development, Staging, and Production environments, including CI/CD pipelines, authentication, subscriptions, notifications, typed GraphQL integrations, analytics, and App Store and Google Play releases. I also work with backend and QA teams to validate APIs, investigate data issues, and deliver features from concept through production.',
  aproach = NULL,
  tools_technologies = array['React Native, Expo, and TypeScript for cross-platform mobile development.', 'Hasura, Apollo Client, and GraphQL Code Generator for typed data operations.', 'Firebase Authentication for iOS and Android sign-in.', 'RevenueCat for subscriptions and payments.', 'Pushwoosh, OneSignal, Firebase, and Sendbird for notifications and messaging.', 'Mixpanel and Firebase Remote Config for analytics, A/B testing, and feature rollouts.', 'Expo and GitHub Actions for CI/CD, builds, and App Store and Google Play releases.'],
  non_technical_contributions = array['Validate backend APIs and GraphQL operations and report data issues to backend engineers.', 'Collaborate with QA to investigate and resolve product issues.', 'Mentor teammates through codebase support, pairing, and technical guidance.', 'Onboard new engineers to the codebase, architecture, and technology stack.', 'Help improve ticket triage and team delivery processes.'],
  techical_contributions = array['Set up the app from the ground up and helped shape key architectural decisions throughout the project.', 'Configure Development, Staging, and Production environments with centralized configuration.', 'Build CI/CD pipelines with Expo and GitHub Actions for automated mobile releases.', 'Implement and maintain Firebase Authentication flows for iOS and Android.', 'Organize the application into scalable modules for components, hooks, and services.', 'Implement subscriptions and payment flows with RevenueCat.', 'Set up Hasura, Apollo Client, and GraphQL Code Generator for fully typed queries and mutations.', 'Run A/B tests and staged feature rollouts with Firebase Remote Config.', 'Implement Mixpanel tracking for user behavior, conversion funnels, and feature performance.', 'Integrate notification and messaging services across the mobile application.']
where title = 'Nectar';
