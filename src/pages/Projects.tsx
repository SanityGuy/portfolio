import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Layers, ArrowRightLeft, Sparkles } from "lucide-react";
import { RepoCard } from "../components/RepoCard";
import { useRepos } from "../hooks/repos";

export default function Projects() {
  const { repos, loading, error } = useRepos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-24">
      <section className="flex flex-col items-start max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
          <Sparkles size={14} className="text-brand-accent shrink-0" />
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
              <Layers size={20} className="text-brand-accent" />
              <span>GitHub Codebases</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
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

      <section className="mt-16 sm:mt-20 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 md:p-10 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
        <div className="max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Let’s build something together.
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Have a project idea, an open-source opportunity, or technical questions? I’m always open to discussing new software challenges.
          </p>
        </div>

        <Link
          to="/contacts"
          className="inline-flex h-12 items-center justify-center gap-2 px-6 bg-brand-accent hover:opacity-90 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md shadow-brand-accent/20 shrink-0 w-full sm:w-auto"
        >
          <span>Get in Touch</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </section>
    </div>
  );
}