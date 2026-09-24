import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Sun, Moon } from "lucide-react";

import logoUrl from "/android-chrome-192x192.png";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      return;
    }

    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 py-3 sm:px-5 sm:py-3.5">
      <nav className="mx-auto flex min-h-[58px] max-w-6xl items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:min-h-[60px] sm:gap-4 sm:px-4">
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex min-w-0 shrink-0 items-center gap-2.5 text-base font-bold tracking-tight sm:text-lg"
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-accent/10"
            aria-hidden="true"
          >
            <img
              src={logoUrl}
              alt="Souyan"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="truncate">
            Souyan<span className="text-brand-accent">Dev</span>
          </span>
        </button>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-brand-accent/10 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition duration-200 hover:rotate-12 hover:bg-brand-accent/10 dark:border-white/10 dark:text-slate-200"
          >
            {darkMode ? (
              <Sun size={20} className="text-slate-400" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>

          <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-3 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-brand-accent hover:text-white dark:text-white sm:px-3.5"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="text-brand-accent"
            />

            <span className="hidden sm:inline">View GitHub</span>

            <span className="text-xs opacity-70">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
