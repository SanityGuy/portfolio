import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Layers, ArrowRightLeft, Handshake, FolderGit, Globe } from "lucide-react";
import { projects } from "../hooks/projects";
import { RepoCard } from "../components/RepoCard";
import { useRepos } from "../hooks/repos";

export default function Projects() {
  const { repos, loading, error } = useRepos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-28 md:px-8 lg:py-36 lg:px-0">
      <section className="flex flex-col items-start max-w-3xl">
        <div className="mb-6 inline-flex w-fit uppercase items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
            <FontAwesomeIcon icon={faGithub} size="lg" className="shrink-0 text-brand-accent" />
            <span>Portfolio & Open Source</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
          Crafting Code, <br className="hidden sm:inline" />
          <span className="text-brand-accent">Shipping Solutions.</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-relaxed">
          Explore a live stream of my public repositories—ranging from fullstack web platforms and database integrations to lightweight developer tools.
        </p>
      </section>

      <section className="mt-12 sm:mt-16 space-y-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl flex items-center gap-2">
              <Layers size={24} className="text-brand-accent" />
              <span>GitHub Codebases</span>
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Automatically synchronized with GitHub API
            </p>
          </div>

          {!loading && !error && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 self-start sm:self-auto">
              <ArrowRightLeft size={14} className="text-brand-accent" />
              <span>Swipe / Scroll horizontally</span>
            </div>
          )}
        </div>

        {loading && (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-500 gap-3">
            <FontAwesomeIcon icon={faSpinner} spin className="text-2xl text-brand-accent" />
            <span className="text-sm font-medium">Fetching active repositories…</span>
          </div>
        )}

        {error && (
          <div className="p-4 text-center text-sm text-red-600 bg-red-50/80 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900/50">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto pb-4 pt-1 px-1 -mx-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[280px] xs:auto-cols-[320px] sm:auto-cols-[360px] gap-4 sm:gap-5">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl flex items-center gap-2">
          <FolderGit size={24} className="text-brand-accent" />
          <span>My Top Projects</span>
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          A curated selection of my most impactful and innovative projects, showcasing my skills in fullstack development, database management, and software engineering.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-3 p-5 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-lg">
              <div className="flex items-center justify-between gap-2 p-4 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <div className="flex flex-row items-center gap-2">
                  {project.languages.map((language) => (
                    <span key={language.name} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300">
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
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-2 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-2 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white">
                      <Globe size={16} />
                    </a>
                  )}
                </div>
              </div>
              <hr className="border-slate-200 dark:border-white/10" />
              <div className="flex flex-col gap-1 bg-white/5 dark:bg-slate-900/5 p-4 rounded-xl">
                <p className="mt-2 text-md leading-relaxed tracking-tight text-slate-600 dark:text-slate-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-20 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 md:p-10 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
        <div className="max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Let’s build something together.
            <Handshake size={24} className="text-brand-accent inline-block ml-1" />
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Have a project idea, an open-source opportunity, or technical questions? I’m always open to discussing new software challenges.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-4 sm:mt-6">
          <Link
          to="/contacts"
          className="group ne-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-6 py-3 text-sm font-semibold text-brand-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        >
          <span>Get in Touch</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        </div>
      </section>
    </div>
  );
}