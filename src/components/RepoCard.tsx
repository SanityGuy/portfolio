
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeCommit,
  faCode,
  faBookBookmark,
  faArrowUpRightFromSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useRepos, useRepoCount, Repository } from "../hooks/repos";

const GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  Authorization: `Bearer ${import.meta.env.VITE_PAT_TOKEN}`,
};

const USERNAME = "SanityGuy";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);


const formatRepoName = (name: string) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export function RepoCommits({ repoName }: { repoName: string }) {
  const [commits, setCommits] = useState<number | string>("…");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${USERNAME}/${repoName}/commits?per_page=1`, {
      headers: GITHUB_HEADERS,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch commits");
        const link = res.headers.get("Link");

        if (link) {
          const match = link.match(/page=(\d+)>; rel="last"/);

          if (match) {
            setCommits(parseInt(match[1], 10));
            return;
          }
        }

        return res.json().then((data) => {
          setCommits(Array.isArray(data) ? data.length : "N/A");
        });
      })
      .catch(() => {
        setCommits("N/A");
      });
  }, [repoName]);

  return (
    <div
      className="flex items-center gap-1.5"
      title="Total Commits"
    >
      <FontAwesomeIcon
        icon={faCodeCommit}
        className="text-emerald-500 text-xs"
      />
      <span>{commits}</span>
    </div>
  );
}

export function RepoCard({ repo }: { repo: Repository }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800">
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50">
              <FontAwesomeIcon
                icon={faBookBookmark}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                {formatRepoName(repo.name)}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Public repository
              </p>
            </div>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-blue-500 dark:hover:bg-slate-800"
            title="View on GitHub"
            aria-label={`View ${repo.name} on GitHub`}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </a>
        </div>

        <p className="mb-5 min-h-10 break-words text-sm leading-5 text-slate-500 dark:text-slate-400 line-clamp-2">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
          <FontAwesomeIcon icon={faCode} className="text-[10px]" />
          {repo.language || "Plain"}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="flex items-center gap-1.5" title="Stars">
          <FontAwesomeIcon
            icon={faStar}
            className="text-amber-400"
          />
          <span className="font-medium">
            {formatNumber(repo.stargazers_count)}
          </span>
        </div>

        <RepoCommits repoName={repo.name} />
      </div>
    </article>
  );
}

export function RepoCards() {
  const { repos, loading, error } = useRepos();

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 py-12 text-sm text-slate-500">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-lg text-blue-500"
        />
        <span>Loading repositories…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
        {error}
      </div>
    );
  }

  if (!repos.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center dark:border-slate-700">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          No repositories found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default function RepoCount() {
  const count = useRepoCount();

  if (count === null) return "Loading…";
  return count;
}
