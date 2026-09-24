import { 
  faJs as JavaScript,
  faTypescript as TypeScript,
  faJava as Java,
  faPython as Python,
  faReact as React,
  faHtml5 as HTML,
  faGitAlt as Git,
  faNodeJs as NodeJS,
  faGolang as Go
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase as SQLite } from "@fortawesome/free-solid-svg-icons";

export const technologies = [
  {
    name: "JavaScript",
    icon: JavaScript,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    color: "text-brand-accent",
  },
  {
    name: "Java",
    icon: Java,
    color: "text-red-500",
  },
  {
    name: "Python",
    icon: Python,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: React,
    color: "text-cyan-400",
  },
  {
    name: "HTML / CSS",
    icon: HTML,
    color: "text-orange-500",
  },
  {
    name: "SQLite",
    icon: SQLite,
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: Git,
    color: "text-orange-600",
  },
  {
    name: "NodeJS",
    icon: NodeJS,
    color: "text-green-500",
  },
  {
    name: "Go",
    icon: Go,
    color: "text-cyan-500",
  },
];

export default technologies;