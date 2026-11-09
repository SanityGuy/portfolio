
import {
  faReact,
  faNodeJs,
  faJs,
  faTypescript,
  faJava,
  faLaravel,
  faPhp,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ProjectLanguage = {
  name: string;
  icon?: IconDefinition;
  color: string;
  prefix?: string;
};

export type Project = {
  name: string;
  description: string;
  category: string;
  screenshots: string[];
  languages: ProjectLanguage[];
  github?: string;
  website?: string;
  external?: string;
  externalLabel?: string;
};

export const projects: Project[] = [
  {
    name: "RuLang",
    description:
      "An open-source programming language project inspired by Arwildo (JawaScript), built around Russian JS syntax, translation, and a custom development workflow.",
    category: "Programming Language",
    screenshots: [
      '/projects/rulang_1.png',
      '/projects/rulang_2.png',
      '/projects/rulang_3.png',
    ],
    languages: [
      {
        name: "JavaScript",
        icon: faJs,
        color: "text-yellow-400",
      },
      {
        name: "Node.js",
        icon: faNodeJs,
        color: "text-green-500",
      },
    ],
    github: "https://github.com/SanityGuy/rulang",
    external: "https://github.com/arwildo/jawascript",
    externalLabel: "Arwildo (JawaScript)",
  },
  {
    name: "Conclave",
    description:
      "A minecraft staff chat lightweight plugin to help server staff communicate with each other in-game without using external platforms.",
    category: "Mobile Application",
    screenshots: [
      '/projects/conclave_1.png',
      '/projects/conclave_2.png',
      '/projects/conclave_3.png',
    ],
    languages: [
      {
        name: "Java",
        icon: faJava,
        color: "text-red-400",
      },
      {
        name: "Docker",
        icon: faDocker,
        color: "text-blue-400",
      },
    ],
    github: "https://github.com/SanityGuy/conclave",
  },
  {
    name: "TKSkor / TKScore",
    description:
      "A web application for calculating TKA/TKAD-based academic scores with validation, localization, and responsive UI.",
    category: "Web Application",
    screenshots: [
      '/projects/tkskor_1.png',
      '/projects/tkskor_2.png',
      '/projects/tkskor_3.png',
    ],
    languages: [
      {
        name: "React Vite",
        icon: faReact,
        color: "text-cyan-400",
      },
      {
        name: "TypeScript",
        icon: faTypescript,
        prefix: "TS",
        color: "text-brand-accent",
      },
    ],
    github: "https://github.com/SanityGuy/tkskor",
    website: "https://tkskor.my.id",
  },
  {
    name: "SkyFlix",
    description:
      "An aviation media platform for discovering, indexing, and watching aviation videos through a clean, modern interface.",
    category: "Web Application",
    screenshots: [
      '/projects/skyflix_1.png',
      '/projects/skyflix_2.png',
      '/projects/skyflix_3.png',
    ],
    languages: [
      {
        name: "React",
        icon: faReact,
        color: "text-cyan-400",
      },
      {
        name: "TypeScript",
        icon: faTypescript,
        prefix: "TS",
        color: "text-brand-accent",
      },
      {
        name: "Node.js",
        icon: faNodeJs,
        color: "text-green-500",
      },
    ],
    github: "https://github.com/SanityGuy/skyflix",
  },
  {
    name: "SoLMS",
    description: 
     "A lightweight learning management system (LMS) for educational institutions, featuring course management, user roles, and progress tracking.",
    category: "Web Application",
    screenshots: [
      '/projects/solms_1.png',
      '/projects/solms_2.png',
      '/projects/solms_3.png',
    ],
    languages: [
      {
        name: "PHP",
        icon: faPhp,
        color: "text-blue-600",
      },
      {
        name: "Laravel",
        icon: faLaravel,
        color: "text-red-500",
      },
    ],
    github: "https://github.com/SanityGuy/solms",
  },
  {
    name: "SkyHelp",
    description:
      "A custom discord bot made using discord.py, designed to provide server management tools, moderation commands, and user engagement features for our SkyFlix Network Discord server.",
    category: "Discord Application Bot",
    screenshots: [
      '/projects/skyhelp_1.png',
      '/projects/skyhelp_2.png',
      '/projects/skyhelp_3.png',
    ],
    languages: [
      {
        name: "Python",
        icon: faPython,
        color: "text-blue-500",
      },
    ],
    github: "https://github.com/SanityGuy/skyhelp",
  },
];

export default projects;
