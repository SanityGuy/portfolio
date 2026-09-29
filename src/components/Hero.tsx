import RepoCount from "../hooks/repos";
import CodeCard from "./CodeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Layers, Hourglass, Infinity } from "lucide-react";

export default function Hero() {
  return (
    <>
    <section
        id="hero"
        className="grid min-h-[100vh] grid-cols-1 items-center gap-14 px-4 pb-16 pt-28 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:grid-cols-12 lg:gap-10 lg:px-0 lg:pb-24 lg:pt-36"
      >
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
            <Hourglass size={16} className="shrink-0 text-brand-accent" />
            <span>2+ YEARS OF EXPERIENCE</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem] lg:text-6xl">
            I build{" "}
            <span className="text-brand-accent">
              software that ships.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Student developer focused on fullstack web applications, database
            management, and application development. I emphasize clean
            structure, performance, and long term maintainability.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-accent bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:shadow-lg hover:shadow-brand-accent/25 dark:bg-slate-900 dark:text-slate-100 sm:w-auto"
            >
              <Layers size={22} className="text-brand-accent" />
              Explore my work
            </a>

            <a
              href="https://github.com/SanityGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 sm:w-auto"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="text-brand-accent"
              />
              View GitHub Profile
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-slate-200/80 pt-8 dark:border-white/10 sm:mt-14 sm:gap-8 md:max-w-lg">
            <div className="flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                <RepoCount />+
              </strong>

              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
                Projects
              </span>
            </div>

            <div className="flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                05
              </strong>

              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
                Core Languages
              </span>
            </div>

            <div className="flex flex-col">
              <Infinity
                size={36}
                className="text-brand-accent sm:h-10 sm:w-10"
              />

              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
                To Build
              </span>
            </div>
          </div>
        </div>

        <CodeCard />
        
      </section>
    </>
  );
}