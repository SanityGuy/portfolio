import projects from "../hooks/projects";
import { Link } from "react-router-dom";
import { Globe, Code } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
    return (
        <>
        <section
        id="projects"
        className="border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            A selection of web platforms, mobile applications, and software
            utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/70 sm:p-7"
            >
              <div className="min-w-0">
                <h3 className="mb-2 text-xl font-bold tracking-tight transition group-hover:text-brand-accent">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}

                  {project.external && (
                    <>
                      {" "}
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-accent"
                      >
                        {project.externalLabel}
                      </a>
                    </>
                  )}
                </p>

                <p className="pt-4 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                  Languages used:
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.languages.map((language) => (
                    <span
                      key={language.name}
                      className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300"
                    >
                      {language.icon ? (
                        <FontAwesomeIcon
                          icon={language.icon}
                          size="lg"
                          className={`${language.color} mr-1`}
                        />
                      ) : "prefix" in language ? (
                        <span
                          className={`${language.color} mr-1 font-bold`}
                        >
                          {language.prefix}
                        </span>
                      ) : null}

                      {language.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200/80 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {project.category}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {project.website && (
                    <>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
                      >
                        <Globe size={14} className='shrink-0' />
                        View Web
                      </a>

                      <span className="hidden text-sm text-slate-500 sm:inline">
                        /
                      </span>
                    </>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
                  >
                    <Code size={14} className='shrink-0' />
                    View Source
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="flex justify-center md:col-span-2">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-6 py-3 text-sm font-semibold text-brand-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950">
                <Code size={16} className="shrink-0" />
                View All Projects
              </Link>
          </div>
        </div>
      </section>
        </>
    )
}