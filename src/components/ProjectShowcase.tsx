
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Globe,
  Layers3,
} from "lucide-react";
import type { projects as projectData } from "../hooks/projects";

type Project = (typeof projectData)[number];

function ProjectScreenshot({
  project,
}: {
  project: Project;
}) {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const screenshots = project.screenshots ?? [];

  const availableScreenshots = screenshots.filter(
    (src) => !failedImages.includes(src),
  );

  const mainScreenshot = availableScreenshots[0];
  const secondaryScreenshot = availableScreenshots[1];

  return (
    <div className="relative mx-auto w-full max-w-xl py-6 sm:px-3 sm:py-10">
      <div className="absolute inset-4 rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950" />

      <div className="relative [perspective:1400px]">
        {secondaryScreenshot && (
          <div className="absolute -right-1 -top-3 z-0 aspect-video w-[72%] overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 dark:border-slate-700 dark:bg-slate-800 sm:-right-3 sm:-top-5">
            <img
              src={secondaryScreenshot}
              alt={`${project.name} secondary preview`}
              loading="lazy"
              onError={() =>
                setFailedImages((current) =>
                  current.includes(secondaryScreenshot)
                    ? current
                    : [...current, secondaryScreenshot],
                )
              }
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}

        <div className="relative z-10 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xl transition-transform duration-500 ease-out [transform:rotateY(-7deg)_rotateX(2deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)] dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-10 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 dark:border-slate-700 dark:bg-slate-800">
            <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />

            <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Globe size={11} className="shrink-0 text-slate-400" />
              <span className="truncate text-[10px] text-slate-400">
                {project.website || project.github || project.name}
              </span>
            </div>
          </div>

          {mainScreenshot ? (
            <img
              src={mainScreenshot}
              alt={`${project.name} application screenshot`}
              loading="lazy"
              onError={() =>
                setFailedImages((current) =>
                  current.includes(mainScreenshot)
                    ? current
                    : [...current, mainScreenshot],
                )
              }
              className="aspect-[16/10] w-full bg-slate-100 object-cover object-top dark:bg-slate-950"
            />
          ) : (
            <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-slate-50 px-6 text-center dark:bg-slate-950">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <FolderGit2
                  size={26}
                  strokeWidth={1.5}
                  className="text-brand-accent"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {project.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Project preview coming soon
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {availableScreenshots.length > 2 && (
        <div className="relative z-10 mt-5 flex justify-center gap-2">
          {availableScreenshots.slice(2).map((src, index) => (
            <div
              key={src}
              className="w-20 overflow-hidden rounded-lg border border-slate-200 shadow-sm dark:border-slate-700 sm:w-24"
            >
              <img
                src={src}
                alt={`${project.name} additional screenshot ${index + 3}`}
                loading="lazy"
                onError={() =>
                  setFailedImages((current) =>
                    current.includes(src) ? current : [...current, src],
                  )
                }
                className="aspect-video w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div
        className={`grid items-center gap-6 p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex min-w-0 flex-col items-start">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-accent">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />

            <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.languages.map((language) => (
              <span
                key={language.name}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {language.icon ? (
                  <FontAwesomeIcon
                    icon={language.icon}
                    className={language.color}
                  />
                ) : "prefix" in language ? (
                  <span className={`${language.color} font-bold`}>
                    {language.prefix}
                  </span>
                ) : (
                  <Code2 size={13} />
                )}

                {language.name}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-offset-slate-900"
              >
                <FontAwesomeIcon icon={faGithub} />
                Source Code
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-slate-700 dark:text-slate-200"
              >
                <ExternalLink size={15} />
                Live Preview
              </a>
            )}
          </div>
        </div>

        <ProjectScreenshot project={project} />
      </div>
    </article>
  );
}

export default function ProjectShowcases({
  projects,
}: {
  projects: readonly Project[];
}) {
  return (
    <section className="mt-20 sm:mt-28">
      <div className="mb-10 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <Layers3 size={14} className="text-brand-accent" />
          Selected Work
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          My Top Projects
          <span className="text-brand-accent">.</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
          A closer look at the products, tools, and experiments I've built.
          Each project represents a different approach to solving problems
          through software.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
