
import {
  faReact,
  faNodeJs,
  faJs,
  faTypescript,
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
      'https://yavuzceliker.github.io/sample-images/image-1.jpg',
      'https://yavuzceliker.github.io/sample-images/image-2.jpg',
      'https://yavuzceliker.github.io/sample-images/image-3.jpg',
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
    name: "Emcapture",
    description:
      "A mobile application designed around organizing and preserving personal information through a focused, modern interface.",
    category: "Mobile Application",
    screenshots: [
      'https://yavuzceliker.github.io/sample-images/image-4.jpg',
      'https://yavuzceliker.github.io/sample-images/image-5.jpg',
      'https://yavuzceliker.github.io/sample-images/image-6.jpg',
    ],
    languages: [
      {
        name: "React Native",
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
    github: "https://github.com/SanityGuy/emcapture",
  },
  {
    name: "TKSkor / TKScore",
    description:
      "A web application for calculating TKA/TKAD-based academic scores with validation, localization, and responsive UI.",
    category: "Web Application",
    screenshots: [
      "https://yavuzceliker.github.io/sample-images/image-7.jpg",
      "https://yavuzceliker.github.io/sample-images/image-8.jpg",
      "https://yavuzceliker.github.io/sample-images/image-9.jpg", 
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
      "https://yavuzceliker.github.io/sample-images/image-10.jpg",
      "https://yavuzceliker.github.io/sample-images/image-11.jpg",
      "https://yavuzceliker.github.io/sample-images/image-12.jpg",
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
];

export default projects;
