import { useEffect, useState } from "react";

export default function RepoCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/SanityGuy", {
      headers: {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Authorization": `Bearer ${import.meta.env.VITE_PAT_TOKEN}`,
      },
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

  if (count === null) return "Loading…";
  return count;
}   