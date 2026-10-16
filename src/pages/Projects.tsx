
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  Layers,
  ArrowRightLeft,
  Handshake,
} from "lucide-react";
import ProjectShowcases from "../components/ProjectShowcase";
import projects from "../hooks/projects";
import { RepoCard } from "../components/RepoCard";
import { useRepos } from "../hooks/repos";

export default function Projects() {
  const { repos, loading, error } = useRepos();

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-28 md:px-8 lg:px-0 lg:py-36">
      <section className="flex max-w-3xl flex-col items-start">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            className="shrink-0 text-brand-accent"
          />
          <span>Portfolio & Open Source</span>
        </div>

        <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Crafting Code,
          <br className="hidden sm:inline" />
          <span className="text-brand-accent">Shipping Solutions.</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Explore my public repositories, from full-stack web platforms and
          mobile applications to lightweight developer tools and software
          experiments.
        </p>
      </section>

      <section className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              <Layers size={24} className="text-brand-accent" />
              <span>GitHub Codebases</span>
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Automatically synchronized with GitHub API
            </p>
          </div>

          {!loading && !error && (
            <div className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-slate-500 dark:text-slate-400 sm:self-auto">
              <ArrowRightLeft size={14} className="text-brand-accent" />
              <span>Swipe / Scroll horizontally</span>
            </div>
          )}
        </div>

        {loading && (
          <div className="flex h-64 items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 text-slate-500 dark:border-slate-800">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="text-2xl text-brand-accent"
            />
            <span className="text-sm font-medium">
              Fetching active repositories…
            </span>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50/80 p-4 text-center text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/30">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="-mx-1 overflow-x-auto px-1 pb-4 pt-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            <div className="grid auto-cols-[280px] grid-flow-col grid-rows-2 gap-4 sm:auto-cols-[360px] sm:gap-5">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        )}
      </section>

      <ProjectShowcases projects={projects} />

      <section className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60 sm:mt-20 sm:flex-row sm:items-center sm:p-8 md:p-10">
        <div className="max-w-xl">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Let’s build something together.
            <Handshake
              size={24}
              className="ml-1 inline-block text-brand-accent"
            />
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Have a project idea, an open-source opportunity, or technical
            questions? I’m always open to discussing new software challenges.
          </p>
        </div>

        <Link
          to="/contacts"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-6 py-3 text-sm font-semibold text-brand-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        >
          <span>Get in Touch</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xs transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </section>
    </main>
  );
}
