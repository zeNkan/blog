import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://backman.fyi/",
  author: "Lars Backman",
  profile: "https://githib.com/zenkan/",
  desc: "Yet another cyber security blog",
  title: "backmanfyi",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/zenkan/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zenkan",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/backmanfyi.bsky.social",
    linkTitle: `${SITE.title} on BlueSky`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/backmanlars/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hello@backman.fyi",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `RSS feed`,
    active: true,
  },
];
