import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { RepoCard } from "../components/RepoCard";
import { useRepos } from "../hooks/repos";

export default function Projects() {
  const { repos, loading, error } = useRepos();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* 1. Hero Explanation Section */}
      <section className="flex flex-col items-start gap-4 max-w-2xl">
        <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
          Portfolio & Code
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A selection of web platforms, mobile applications, and open-source utilities built with modern web technologies. Explore the live repositories below.
        </p>
      </section>

      {/* 2. Projects Section (2 rows in 1 horizontal scroll container) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
            Repositories
          </h2>
          <span className="text-xs text-slate-400">Scroll horizontally →</span>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16 text-slate-500 gap-2">
            <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
            <span>Loading repositories…</span>
          </div>
        )}

        {error && (
          <div className="p-4 text-center text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[300px] sm:auto-cols-[350px] gap-4">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. Contact Redirect Section */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-slate-100 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Interested in collaborating?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg">
            Have a project in mind or want to talk about software development? Feel free to reach out.
          </p>
        </div>

        <Link
          to="/contacts"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shrink-0"
        >
          <span>Get in Touch</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </section>
    </div>
  );
}