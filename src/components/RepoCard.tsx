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
    <div className="flex items-center gap-1.5" title="Total Commits">
      <FontAwesomeIcon icon={faCodeCommit} className="text-emerald-500 text-xs" />
      <span>{commits}</span>
    </div>
  );
}

export function RepoCard({ repo }: { repo: Repository }) {
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <FontAwesomeIcon icon={faBookBookmark} className="text-slate-400 text-xs shrink-0" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 truncate text-sm">
              {repo.name}
            </h3>
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
            title="View on GitHub"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 min-h-[2rem]">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-1.5" title="Primary Language">
          <FontAwesomeIcon icon={faCode} className="text-blue-500 text-xs" />
          <span>{repo.language || "Plain"}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1" title="Stars">
            <FontAwesomeIcon icon={faStar} className="text-amber-400 text-xs" />
            <span>{repo.stargazers_count}</span>
          </div>

          <RepoCommits repoName={repo.name} />
        </div>
      </div>
    </div>
  );
}

export function RepoCards() {
  const { repos, loading, error } = useRepos();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-slate-500 gap-2">
        <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
        <span>Loading repositories…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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