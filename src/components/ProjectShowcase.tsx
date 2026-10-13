
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderKanban,
  Globe,
  Image as ImageIcon,
  Layers3,
} from "lucide-react";
import type { Project } from "../hooks/projects";

function ProjectGallery({ project }: { project: Project }) {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = project.screenshots ?? [];
  const availableScreenshots = screenshots.filter(
    (src) => !failedImages.includes(src),
  );

  const activeScreenshot =
    availableScreenshots[
      Math.min(activeIndex, availableScreenshots.length - 1)
    ];

  const handleImageError = (src: string) => {
    setFailedImages((current) =>
      current.includes(src) ? current : [...current, src],
    );
  };

  return (
    <div className="min-w-0">
      <div className="relative rounded-2xl border border-blue-100 bg-slate-50 p-3 dark:border-blue-400/10 dark:bg-slate-950 sm:p-5">
        <div className="absolute right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300">
          <ImageIcon size={13} className="text-brand-accent" />
          {availableScreenshots.length > 0
            ? `${activeIndex + 1} / ${availableScreenshots.length}`
            : "Preview"}
        </div>

        <div className="relative [perspective:1200px]">
          <div className="absolute inset-x-3 bottom-0 top-3 rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30" />

          <div className="group/image relative z-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 [transform:rotateX(1deg)_rotateY(-2deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)]">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 dark:border-slate-700 dark:bg-slate-800">
                <Globe size={12} className="shrink-0 text-blue-500" />
                <span className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {project.website || project.github || project.name}
                </span>
              </div>
            </div>

            {activeScreenshot ? (
              <img
                key={activeScreenshot}
                src={activeScreenshot}
                alt={`${project.name} screenshot ${activeIndex + 1}`}
                loading="lazy"
                onError={() => handleImageError(activeScreenshot)}
                className="aspect-[16/10] w-full bg-slate-100 object-cover object-top dark:bg-slate-950"
              />
            ) : (
              <div className="flex aspect-[16/10] flex-col items-center justify-center bg-slate-100 px-6 text-center dark:bg-slate-950">
                <div className="flex size-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 dark:border-blue-900/50 dark:bg-slate-900 dark:text-blue-400">
                  <FolderKanban size={30} strokeWidth={1.6} />
                </div>

                <h4 className="mt-4 text-base font-semibold text-slate-800 dark:text-slate-100">
                  {project.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Project preview coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {availableScreenshots.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {availableScreenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show screenshot ${index + 1} of ${project.name}`}
              aria-pressed={activeScreenshot === src}
              className={`relative w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:w-28 ${
                activeScreenshot === src
                  ? "border-blue-500 shadow-sm"
                  : "border-slate-200 hover:border-blue-300 dark:border-slate-700 dark:hover:border-blue-700"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                onError={() => handleImageError(src)}
                className="aspect-video w-full object-cover object-top"
              />
              {activeScreenshot === src && (
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/[0.04] dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/30 dark:hover:shadow-blue-950/20">
      <div
        className={`grid min-w-0 items-center gap-7 p-5 sm:gap-9 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 ${
          reversed ? "lg:[&>.project-copy]:order-2" : ""
        }`}
      >
        <div className="project-copy flex min-w-0 flex-col items-start">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
              <Layers3 size={13} />
              {project.category}
            </span>

            <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
              Project {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            {project.description}
          </p>

          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline dark:text-blue-300"
            >
              {project.externalLabel || "Related project"}
              <ArrowUpRight size={15} />
            </a>
          )}

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
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
                  ) : language.prefix ? (
                    <span className={`${language.color} font-bold`}>
                      {language.prefix}
                    </span>
                  ) : (
                    <Code2 size={14} className="text-blue-500" />
                  )}
                  {language.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex w-full flex-wrap gap-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <ExternalLink size={16} />
                Live Preview
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
              >
                <FontAwesomeIcon icon={faGithub} className="text-base" />
                Source Code
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        <ProjectGallery project={project} />
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
    <section className="mt-16 sm:mt-20">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <Layers3 size={14} />
            Selected Work
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Top Projects
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            A closer look at the applications, tools, and ideas I'm bringing
            to life through software.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <Code2 size={14} className="text-blue-500" />
          {projects.length} featured projects
        </span>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
