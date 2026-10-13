
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  ExternalLink,
  Globe,
  Database,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../hooks/projects";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotionReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28"
    >
      <style>{`
        .home-projects {
          --home-project-accent: #60a5fa;
          --home-project-line: rgba(148, 163, 184, .2);
        }

        .home-projects .home-project-card {
          position: relative;
          isolation: isolate;
          transition:
            transform .35s cubic-bezier(.2,.7,.2,1),
            border-color .3s ease,
            box-shadow .35s ease;
        }

        .home-projects .home-project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(96, 165, 250, .48);
          box-shadow: 0 22px 50px -32px rgba(59, 130, 246, .55);
        }

        .home-projects .home-project-number {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid rgba(148, 163, 184, .22);
          border-radius: 12px;
          color: var(--home-project-accent);
          background: rgba(96, 165, 250, .07);
          font-size: 12px;
          font-weight: 750;
          font-variant-numeric: tabular-nums;
          transition: transform .3s ease, background .3s ease;
        }

        .home-projects .home-project-card:hover .home-project-number {
          transform: rotate(-5deg);
          background: rgba(96, 165, 250, .14);
        }

        .home-projects .home-project-title {
          transition: color .25s ease;
        }

        .home-projects .home-project-card:hover .home-project-title {
          color: var(--home-project-accent);
        }

        .home-projects .home-project-chip {
          transition: border-color .2s ease, transform .2s ease;
        }

        .home-projects .home-project-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(96, 165, 250, .5);
        }

        .home-projects .home-project-arrow {
          transition: transform .25s ease;
        }

        .home-projects a:hover .home-project-arrow {
          transform: translate(2px, -2px);
        }

        .home-projects .home-project-reveal {
          opacity: 1;
          transform: none;
        }

        .home-projects.home-projects-animated .home-project-reveal {
          animation: home-project-entrance .65s cubic-bezier(.2,.7,.2,1) both;
        }

        @keyframes home-project-entrance {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .home-projects .home-project-heading-rule {
          transform: scaleX(1);
          transform-origin: left;
        }

        .home-projects.home-projects-animated .home-project-heading-rule {
          animation: home-project-rule .7s ease both;
        }

        @keyframes home-project-rule {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .home-projects .home-project-cta-arrow {
          transition: transform .25s ease;
        }

        .home-projects .home-project-cta:hover .home-project-cta-arrow {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .home-projects *,
          .home-projects *::before,
          .home-projects *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div
        className={`home-projects mx-auto max-w-6xl ${
          motionReady ? "home-projects-animated" : ""
        }`}
      >
        <div className="mb-12 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="home-project-reveal max-w-2xl">
            <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              <span className="h-px w-7 bg-brand-accent" />
              <Database size={13} />
              Selected work
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-6xl">
              Ideas into
              <span className="mt-1 block text-blue-500 dark:text-blue-400">
                working software.
              </span>
            </h2>

            <div className="home-project-heading-rule mt-5 h-0.5 w-16 bg-brand-accent" />

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              A selection of applications, platforms, and experiments built
              with curiosity, thoughtful engineering, and a focus on solving
              meaningful problems.
            </p>
          </div>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="home-project-card home-project-reveal flex min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-6 lg:p-7"
                style={{ animationDelay: `${index * 100}ms` }}
              >

                <div className="flex-1">
                  <h3 className="home-project-title break-words text-xl font-bold tracking-tight sm:text-2xl">
                    {project.name}
                    <span className="ml-6 inline-flex max-w-[100%] items-center gap-2 rounded-full border border-slate-200/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                      <Code size={14} className="text-blue-500" />
                      <span className="truncate">{project.category}</span>
                    </span>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                    {project.external && (
                      <>
                        {" "}
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-brand-accent hover:underline"
                        >
                          {project.externalLabel || "Learn more"}
                          <ExternalLink size={12} />
                        </a>
                      </>
                    )}
                  </p>

                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      Stack & Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((language) => (
                        <span
                          key={language.name}
                          className="home-project-chip inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300"
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
                          ) : null}
                          {language.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-5 dark:border-white/10">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-2 text-xs font-semibold text-brand-accent transition-colors hover:bg-brand-accent hover:text-white"
                    >
                      <Globe size={14} />
                      Live website
                      <ArrowRight
                        size={13}
                        className="home-project-arrow"
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200/80 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-brand-accent/40 hover:text-brand-accent dark:border-white/10 dark:text-slate-200"
                    >
                      <Code size={14} />
                      Source code
                      <ArrowRight
                        size={13}
                        className="home-project-arrow"
                      />
                    </a>
                  )}
                </div>
              </article>
            ))}

            <div
              className="home-project-reveal flex flex-col justify-between gap-7 rounded-2xl border border-dashed border-slate-300/80 bg-slate-50/60 p-6 dark:border-white/15 dark:bg-white/[0.02] sm:p-7"
              style={{ animationDelay: `${featuredProjects.length * 100}ms` }}
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  More than what you see here.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Explore the complete collection of projects, experiments,
                  and source code.
                </p>
              </div>

              <Link
                to="/projects"
                className="home-project-cta inline-flex min-h-11 w-fit items-center gap-3 rounded-lg border border-brand-accent/25 bg-brand-accent/10 px-4 py-3 text-sm font-semibold text-brand-accent hover:bg-brand-accent hover:text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                Explore all projects
                <ArrowRight
                  size={16}
                  className="home-project-cta-arrow"
                />
              </Link>
            </div>
          </div>
        ) : (
          <p className="rounded-xl border border-slate-200 p-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
            Projects will appear here once they have been added.
          </p>
        )}

      </div>
    </section>
  );
}
