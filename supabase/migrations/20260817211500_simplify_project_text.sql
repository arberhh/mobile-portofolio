-- Rewrite project text to cut buzzword bloat and use simpler words.
-- Content/meaning is preserved, just shorter and plainer.
-- Each block below has a BEFORE comment with the original text for comparison.
--
-- A few facts were also added in from ARBER-HAXHIMUSA-CV.pdf that weren't
-- in the original DB text at all (not just reworded):
--   - Twig: "over 1 million installs" (short/long_description, techical_contributions)
--   - ArcadeQuest: UxCam (tools_technologies), Supabase Edge Functions
--     (tools_technologies), the NUX onboarding flow (techical_contributions)
-- The CV doesn't say whether UxCam/Edge Functions/NUX applied to the
-- ArcadeQuest app, the AQ Shop app, or both (both were built in the same
-- role) - I only added them to ArcadeQuest here. Say if any should move to
-- or also be added to AQ Shop.

-- ============================================================
-- Twig
-- ============================================================
-- BEFORE short_description / long_description (identical):
--   "During my time as a Mobile Developer at Twig, I focused on enhancing
--   the Twig app. I integrated new features for both Android and iOS and
--   addressed user feedback. Additionally, I redesigned and improved
--   crucial aspects of the app for better usability. Notably, I developed
--   native modules to enhance app functionality."
--
-- BEFORE tools_technologies:
--   - React Native, React, JavaScript for front-end development.
--   - MongoDB for database management.
--   - Utilized CSS, HTML for styling and layout design.
--   - I integrated native Android and iOS SDKs to implement
--     platform-specific functionality
--
-- BEFORE non_technical_contributions:
--   - Actively participated in agile methodologies including user story
--     creation, sprint planning, and sprint retrospectives, contributing
--     to the efficient execution of development processes.
--   - Contributed to discussions and decisions related to Twig's strategic
--     areas including fintech, sustainability, logistics, and fundraising,
--     aligning mobile development efforts with company objectives.
--   - Mentored and onboarded new team members, sharing knowledge and best
--     practices to foster a collaborative and supportive work environment.
--
-- BEFORE techical_contributions:
--   - Developed and implemented impactful mobile features using React
--     Native, contributing to a significant increase in app installations.
--   - Ensured excellent performance, quality, and responsiveness of
--     applications through meticulous coding and optimization techniques.
--   - Integrated native SDKs for Android and iOS platforms, unlocking
--     additional functionality and enhancing the overall user experience.
--   - Collaborated closely with the core team as a key mobile developer,
--     overseeing multiple projects and delivering successful outcomes.
--   - Utilized data-driven insights to drive strategic optimizations,
--     resulting in measurable improvements such as increased conversion
--     rates and user engagement.
--   - Led the rebuilding of the entire app with a new design, significantly
--     improving the overall user experience and app performance.
--   - Identified and resolved critical bugs, such as a pod version issue
--     affecting thousands of users, ensuring smooth app functionality.
update public.projects
set
  short_description = 'At Twig, I worked as a mobile developer on an app with over 1 million installs. I added features for Android and iOS, fixed issues from user feedback, and made the app easier to use.',
  long_description = 'At Twig, I worked as a mobile developer on an app with over 1 million installs. I added new features for Android and iOS, fixed issues from user feedback, and improved parts of the app to make it easier to use. I also built native modules to add more functionality.',
  tools_technologies = array[
    'React Native, React, and JavaScript for the front end.',
    'MongoDB for the database.',
    'CSS and HTML for styling.',
    'Native Android and iOS SDKs for platform-specific features.'
  ],
  non_technical_contributions = array[
    'Took part in agile work: user stories, sprint planning, and retrospectives.',
    'Joined talks on Twig''s key areas like fintech, sustainability, logistics, and fundraising.',
    'Helped new team members learn the ropes and shared what I knew.'
  ],
  techical_contributions = array[
    'Helped grow the app to over 1 million installs with new mobile features built in React Native.',
    'Wrote clean code and optimized the app for speed and reliability.',
    'Added native SDKs on Android and iOS for more features and a better user experience.',
    'Worked closely with the core team as a lead mobile developer across several projects.',
    'Used data to guide changes that improved conversions and engagement.',
    'Led a full rebuild of the app with a new design, making it faster and easier to use.',
    'Fixed major bugs, including a pod version issue that affected thousands of users.'
  ]
where title = 'Twig';

-- ============================================================
-- ArcadeQuest
-- ============================================================
-- BEFORE short_description / long_description (identical):
--   "I worked on a mobile app that provided users with their Fortnite
--   profiles, including kill counts in all game modes. Additionally, the
--   app featured live updates on the Fortnite item shop, showcasing new
--   items, quests, and integrated subscription management through
--   RevenueCat."
--
-- BEFORE tools_technologies:
--   - Utilized analytics tools like Mixpanel for tracking user
--     interactions and engagement.
--   - Implemented error monitoring with Sentry for proactive issue
--     detection and resolution.
--   - Managed payments integration using RevenueCat and Stripe for
--     subscription management, in-app purchases, and game purchases
--     within the live shopping app.
--
-- BEFORE non_technical_contributions:
--   - Contributed to brainstorming sessions for feature ideation and
--     development across both mobile applications and other internal
--     services within the company.
--   - Conducted analytics on user journeys within the apps to optimize
--     user experience and engagement.
--   - Engaged in troubleshooting and testing activities to ensure app
--     functionality and stability.
--
-- BEFORE techical_contributions:
--   - Developed the mobile application using React Native, Android
--     Studio, Xcode, and TypeScript.
--   - Integrated features such as displaying Fortnite user profiles with
--     kill statistics across game modes, live updates on the Fortnite
--     item shop, quests for user participation and challenges, and
--     subscription management using RevenueCat.
--   - Built APIs for fetching and displaying Fortnite item shop data on
--     the mobile app.
--   - Implemented a mini-game system using Node.js, allowing users to
--     challenge each other for high scores, and integrated a Unity game
--     within the React Native app.
update public.projects
set
  short_description = 'I built a mobile app that shows Fortnite players their stats, like kill counts in every game mode. It also had live updates on the Fortnite item shop, quests, and subscriptions through RevenueCat.',
  long_description = 'I built a mobile app that shows Fortnite players their stats, like kill counts in every game mode. It also had live updates on the Fortnite item shop, quests, and subscriptions through RevenueCat.',
  tools_technologies = array[
    'Used Mixpanel and UxCam to track how users interact with the app.',
    'Used Sentry to catch and fix errors early.',
    'Set up RevenueCat and Stripe for subscriptions and in-app purchases.',
    'Built Supabase Edge Functions for backend tasks, like calling outside APIs and running jobs on a schedule.'
  ],
  non_technical_contributions = array[
    'Joined brainstorms for new features across our apps and internal tools.',
    'Looked at user data to improve the app experience.',
    'Tested and debugged the app to keep it stable.'
  ],
  techical_contributions = array[
    'Built the app with React Native, Android Studio, Xcode, and TypeScript.',
    'Added Fortnite profile stats, live item shop updates, quests, and RevenueCat subscriptions.',
    'Built APIs to pull and show Fortnite item shop data.',
    'Built a mini-game system in Node.js so users could compete for high scores, and added a Unity game inside the app.',
    'Built a new onboarding flow that improved user retention and conversions.'
  ]
where title = 'ArcadeQuest';

-- ============================================================
-- AQ Shop
-- ============================================================
-- BEFORE short_description:
--   "Designed and developed a mobile app for indie game live shopping,
--   featuring real-time showcases, product discovery, and in-app
--   purchases. Utilized React Native, Android Studio, Xcode, and
--   TypeScript for development."
--
-- BEFORE long_description:
--   "I led the development of a mobile app for indie game live shopping,
--   enabling users to discover and purchase new releases seamlessly.
--   Leveraging React Native, Android Studio, Xcode, and TypeScript, I
--   crafted an intuitive interface and integrated real-time showcases for
--   enhanced product discovery. Additionally, I implemented a system for
--   showcasing discounted games and facilitating in-app purchases,
--   ensuring a smooth shopping experience. Through collaboration and
--   iteration, I played a key role in shaping the app's features to meet
--   user needs effectively."
--
-- BEFORE aproach:
--   "I applied a modular file structure and clean code principles to
--   optimize our React Native app's development. This approach enhanced
--   scalability, readability, and maintainability, resulting in efficient
--   collaboration and faster iteration cycles."
--
-- BEFORE tools_technologies (identical to ArcadeQuest's original):
--   - Utilized analytics tools like Mixpanel for tracking user
--     interactions and engagement.
--   - Implemented error monitoring with Sentry for proactive issue
--     detection and resolution.
--   - Managed payments integration using RevenueCat and Stripe for
--     subscription management, in-app purchases, and game purchases
--     within the live shopping app.
--
-- BEFORE non_technical_contributions (identical to ArcadeQuest's original):
--   - Contributed to brainstorming sessions for feature ideation and
--     development across both mobile applications and other internal
--     services within the company.
--   - Conducted analytics on user journeys within the apps to optimize
--     user experience and engagement.
--   - Engaged in troubleshooting and testing activities to ensure app
--     functionality and stability.
--
-- BEFORE techical_contributions:
--   - Designed and developed a mobile application focused on live
--     shopping for indie games and featuring a product hunt-like system
--     for newly released games on Steam.
--   - Leveraged React Native, Android Studio, Xcode, and TypeScript for
--     app development.
--   - Integrated features for live streaming of indie game showcases,
--     product discovery, and user engagement through real-time
--     interactions.
--   - Implemented functionality for showcasing discounted games and
--     enabling users to make purchases directly within the app.
update public.projects
set
  short_description = 'Built a mobile app for live shopping on indie games, with live showcases, product discovery, and in-app purchases. Made with React Native, Android Studio, Xcode, and TypeScript.',
  long_description = 'I led development of a mobile app for live shopping on indie games, so users could find and buy new releases easily. Using React Native, Android Studio, Xcode, and TypeScript, I built a simple interface with live showcases for product discovery. I also added a way to show discounted games and made in-app purchases smooth. I worked closely with the team to shape the app around what users needed.',
  aproach = 'I used a modular file structure and clean code to make the React Native app easier to grow, read, and maintain. This made it easier for the team to work together and move fast.',
  tools_technologies = array[
    'Used Mixpanel to track how users interact with the app.',
    'Used Sentry to catch and fix errors early.',
    'Set up RevenueCat and Stripe for subscriptions and in-app purchases.'
  ],
  non_technical_contributions = array[
    'Joined brainstorms for new features across our apps and internal tools.',
    'Looked at user data to improve the app experience.',
    'Tested and debugged the app to keep it stable.'
  ],
  techical_contributions = array[
    'Built a mobile app for live shopping on indie games, with a Product-Hunt-style system for new Steam releases.',
    'Built the app with React Native, Android Studio, Xcode, and TypeScript.',
    'Added live streaming for game showcases and real-time ways for users to engage.',
    'Added discounted game listings and let users buy directly in the app.'
  ]
where title = 'AQ Shop';
