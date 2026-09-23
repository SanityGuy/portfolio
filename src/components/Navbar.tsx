import { useEffect, useState } from "react";

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

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-3.5 sm:px-6">
      <nav className="mx-auto flex min-h-[60px] max-w-6xl items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
        >
          <span
            className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-brand-accent/10"
            aria-hidden="true"
          >
            <i className="fa-solid fa-user text-xl text-brand-accent sm:text-xl" />
          </span>

          <span>
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition duration-200 hover:rotate-12 hover:bg-brand-accent/10 dark:border-white/10 dark:text-slate-200"
          >
            <i
              className={`fa-solid ${
                darkMode ? "fa-sun" : "fa-moon"
              } text-sm`}
            />
          </button>

          <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-brand-accent hover:text-white dark:text-white"
          >
            <i className="fa-brands fa-github text-sm text-brand-accent" />

            <span className="hidden sm:inline">View GitHub</span>

            <span className="text-xs opacity-70">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}