import { useState, MouseEvent } from "react";
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
import type { Project } from "../../../hooks/projects";

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
      <div className="relative rounded-2xl border border-slate-200/80 p-2 bg-slate-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="absolute right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300">
          <ImageIcon size={13} className="text-brand-accent" />
          {availableScreenshots.length > 0
            ? `${activeIndex + 1} / ${availableScreenshots.length}`
            : "Preview"}
        </div>

        <div className="relative [perspective:1200px]">
          <div className="absolute inset-x-3 bottom-0 top-3 rounded-xl border border-brand-accent/20 bg-brand-accent/5 dark:border-brand-accent/20 dark:bg-brand-accent/10" />

          <div className="group/image relative z-10 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl transition duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900 [transform:rotateX(1deg)_rotateY(-2deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)]">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200/80 bg-slate-50 px-3 dark:border-white/10 dark:bg-slate-900">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-yellow-400/80" />
                <span className="size-2.5 rounded-full bg-green-400/80" />
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200/80 bg-white px-2 py-1 dark:border-white/10 dark:bg-slate-800/80">
                <Globe size={12} className="shrink-0 text-brand-accent" />
                <span className="truncate font-mono text-[11px] text-slate-500 dark:text-slate-400">
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
              <div className="flex aspect-[16/10] flex-col items-center justify-center bg-slate-100/50 px-6 text-center dark:bg-slate-950/50">
                <div className="flex size-16 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/10 text-brand-accent">
                  <FolderKanban size={28} strokeWidth={1.8} />
                </div>

                <h4 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-100">
                  {project.name}
                </h4>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Project preview coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {availableScreenshots.length > 1 && (
        <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
          {availableScreenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show screenshot ${index + 1} of ${project.name}`}
              aria-pressed={activeScreenshot === src}
              className={`relative w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:w-28 ${
                activeScreenshot === src
                  ? "border-brand-accent shadow-md"
                  : "border-slate-200/80 hover:border-brand-accent/50 dark:border-white/10 dark:hover:border-brand-accent/50"
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
                <span className="absolute inset-x-0 bottom-0 h-1 bg-brand-accent" />
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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      className="project-showcase-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl transition duration-300 hover:border-brand-accent/40 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-brand-accent/40"
    >
      <style>{`
        .project-showcase-card {
          position: relative;
          isolation: isolate;
        }

        .project-showcase-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(96, 165, 250, 0.35),
            transparent 40%
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-showcase-card:hover::before {
          opacity: 1;
        }
      `}</style>

      <div
        className={`grid min-w-0 items-center gap-7 p-6 sm:gap-9 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 ${
          reversed ? "lg:[&>.project-copy]:order-2" : ""
        }`}
      >
        <div className="project-copy flex min-w-0 flex-col items-start">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              <Layers3 size={13} />
              {project.category}
            </span>

            <span className="font-medium text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500">
              Project 0{index + 1}
            </span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-brand-accent dark:text-white sm:text-4xl">
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
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:underline"
            >
              {project.externalLabel || "Related project"}
              <ArrowUpRight size={15} />
            </a>
          )}

          <div className="mt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
              {project.languages.map((language) => (
                <span
                  key={language.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:border-brand-accent/50 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300"
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
                    <Code2 size={14} className="text-brand-accent" />
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
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-5 py-2.5 text-sm font-semibold text-brand-accent transition hover:-translate-y-0.5 hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:focus-visible:ring-offset-slate-900"
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
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
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
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
            <span className="h-px w-7 bg-brand-accent" />
            <Layers3 size={13} />
            Selected Work
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] text-slate-900 dark:text-white sm:text-4xl">
            My Top Projects
            <span className="text-brand-accent">.</span>
          </h2>

          <div className="mt-4 h-0.5 w-16 bg-brand-accent" />

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            A closer look at the applications, tools, and ideas I'm bringing
            to life through software engineering.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300">
          <Code2 size={14} className="text-brand-accent" />
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