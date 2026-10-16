import { useEffect, useState } from "react";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

const GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  Authorization: `Bearer ${import.meta.env.VITE_PAT_TOKEN}`,
};

const USERNAME = "SanityGuy";

export function useRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`, {
      headers: GITHUB_HEADERS,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data: Repository[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repositories:", err);
        setError("Unable to load repositories.");
        setLoading(false);
      });
  }, []);

  return { repos, loading, error };
}

export function useRepoCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`, {
      headers: GITHUB_HEADERS,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => setCount(data.public_repos))
      .catch((err) => {
        console.error("Failed to update repo count:", err);
        setCount(null);
      });
  }, []);

  return count;
}