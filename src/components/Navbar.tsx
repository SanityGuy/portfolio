import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Sun, Moon, ExternalLink, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logoUrl from "/android-chrome-192x192.png";

const navigation = [
  { label: "Projects", path: "/projects", hash: "#projects" },
  { label: "Contact", path: "/contacts", hash: "#contact" },
];

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "";

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

  const handleNavClick = (hash: string) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-5 sm:py-3.5">
      <nav className="mx-auto flex min-h-[58px] max-w-6xl items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3.5 py-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 sm:min-h-[60px] sm:gap-4 sm:px-4">
        <Link
          to="/"
          onClick={() => handleNavClick("#hero")}
          className="flex min-w-0 shrink-0 items-center gap-2.5 text-base font-bold tracking-tight transition hover:opacity-90 sm:text-lg"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brand-accent/40 bg-brand-accent/10 shadow-sm"
            aria-hidden="true"
          >
            <img
              src={logoUrl}
              alt="Souyan"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="truncate font-semibold text-slate-900 dark:text-white">
            Souyan<span className="text-brand-accent font-extrabold">Dev</span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1.5 md:flex">
          {navigation.map((item) =>
            isHomePage ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.hash)}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-brand-accent/10 hover:text-brand-accent dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-brand-accent/10 hover:text-brand-accent dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-700 transition duration-200 hover:scale-105 hover:bg-brand-accent/10 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-200 sm:h-10 sm:w-10"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center gap-2 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-3 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-brand-accent hover:text-white dark:text-white sm:h-10 sm:px-3.5"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="text-brand-accent transition-colors group-hover:text-white"
            />

            <span className="hidden sm:inline">GitHub</span>

            <ExternalLink size={14} className="transition-colors group-hover:text-white" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-700 transition dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-200 md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/95 md:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) =>
              isHomePage ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.hash)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-brand-accent/10 hover:text-brand-accent dark:text-slate-200 dark:hover:text-white"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-brand-accent/10 hover:text-brand-accent dark:text-slate-200 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}