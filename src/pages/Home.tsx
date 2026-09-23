import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Mail } from 'lucide-react'

import technologies from '../hooks/technologies'
import principles from '../hooks/principles'
import projects from '../hooks/projects'

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="grid min-h-[90vh] grid-cols-1 items-center gap-12 pb-16 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-8"
      >
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
            <i className="fa-solid fa-hourglass" aria-hidden="true" />
            <span>2+ YEARS OF EXPERIENCE</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            I build{" "}
            <span className="text-brand-accent">
              software that ships.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-md">
            Student developer focused on fullstack web applications, database
            management, and application development. I emphasize clean
            structure, performance, and long term maintainability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-brand-accent bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:shadow-lg hover:shadow-brand-accent/25 dark:bg-slate-900 dark:text-slate-100"
            >
              <i className="fa-solid fa-layer-group text-xs" />
              Explore my work
            </a>

            <a
              href="https://github.com/SanityGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
            >
              <FontAwesomeIcon icon={faGithub} size={"xl"} className="text-brand-accent" />
              View GitHub Profile
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-slate-200/80 pt-8 dark:border-white/10 sm:gap-12">
            <div className="flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                17+
              </strong>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Projects
              </span>
            </div>

            <div className="flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                05
              </strong>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Languages
              </span>
            </div>

            <div className="flex flex-col">
              <strong className="text-4xl font-black leading-none tracking-tight text-brand-accent sm:text-5xl">
                ∞
              </strong>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                To Build
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:col-span-5 sm:min-h-[420px]">
          <div className="animate-float-reverse absolute right-[10%] top-[10%] h-14 w-14 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent2 shadow-[0_0_35px_rgba(11,132,255,0.5)]" />

          <div className="pointer-events-none absolute h-[160px] w-[340px] -rotate-[22deg] rounded-full border border-brand-accent/30 opacity-50 sm:h-[180px] sm:w-[400px]" />

          <div className="pointer-events-none absolute h-[200px] w-[400px] rotate-[55deg] rounded-full border border-brand-accent2/20 opacity-30 sm:h-[230px] sm:w-[460px]" />

          <div className="relative z-10 w-full max-w-sm rotate-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-2xl backdrop-blur-xl transition duration-300 hover:rotate-0 dark:border-white/10 dark:bg-slate-900/70 sm:max-w-md sm:rotate-2">
            <div className="flex h-10 items-center justify-between border-b border-slate-200/80 px-4 font-mono text-xs text-slate-400 dark:border-white/10">
              <div className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
              </div>

              <span>souyan.ts</span>
            </div>

            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
              <span className="text-purple-500 dark:text-purple-400">
                const
              </span>{" "}
              developer = {"{"}
              {"\n  "}
              <span className="text-brand-accent">name</span>:{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Souyan"
              </span>
              ,{"\n  "}
              <span className="text-brand-accent">focus</span>: [{"\n    "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Full Stack Web"
              </span>
              ,{"\n    "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Database Management"
              </span>
              ,{"\n    "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Application Development"
              </span>
              {"\n  "}],{"\n  "}
              <span className="text-brand-accent">status</span>: [{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Building"
              </span>
              ,{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                "Learning"
              </span>
              {" ]\n}"};
            </pre>
          </div>

          <div className="animate-float-slow absolute left-[2%] top-[12%] z-20 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 font-mono text-xs shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
            <i className="fa-brands fa-js mr-1 text-yellow-400" />
            JavaScript
          </div>

          <div className="animate-float-reverse absolute bottom-[18%] right-0 z-20 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 font-mono text-xs shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
            <i className="fa-brands fa-java mr-1 text-red-500" />
            Java
          </div>

          <div className="animate-float-mid absolute bottom-[8%] left-[8%] z-20 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 font-mono text-xs shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
            <i className="fa-brands fa-react mr-1 text-cyan-400" />
            React
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-slate-200/80 py-20 dark:border-white/10 sm:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Curious by default.
              <br />
              <span className="text-slate-500 dark:text-slate-400">
                Focused on structure.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Driven by designing reliable, scalable systems and refining user
            experience through clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-md">
            <p>
              I am a software developer focused on software building,
              interface design, and system management. My work spans custom
              web platforms, microserver infrastructure, desktop tools, and
              utility software.
            </p>

            <p>
              I emphasize basic software engineering practices: clean code
              separation, readable design patterns, efficient backend
              management, and thoughtful user interfaces.
            </p>

            <p className="pt-3">Technologies:</p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="rounded-full border border-brand-accent bg-white px-3 py-1.5 font-mono text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {technology.icon ? (
                    <i className={`${technology.icon} ${technology.color} mr-1`} />
                  ) : (
                    <span className={`${technology.color} mr-1 font-bold`}>
                      {technology.prefix}
                    </span>
                  )}

                  {technology.name}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className={`flex gap-4 p-6 ${
                  index !== principles.length - 1
                    ? "border-b border-slate-200/80 dark:border-white/10"
                    : ""
                }`}
              >
                <span className="font-bold text-brand-accent">
                  {principle.number}
                </span>

                <div>
                  <strong className="text-base font-bold text-slate-900 dark:text-white">
                    {principle.title}
                  </strong>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-slate-200/80 py-20 dark:border-white/10 sm:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            A selection of web platforms, mobile applications, and software
            utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/70"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold tracking-tight transition group-hover:text-brand-accent">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}

                  {project.external && (
                    <>
                      {" "}
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-accent"
                      >
                        {project.externalLabel}
                      </a>
                    </>
                  )}
                </p>

                <p className="pt-4 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                  Languages used:
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.languages.map((language) => (
                    <span
                      key={language.name}
                      className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300"
                    >
                      {language.icon ? (
                        <i className={`${language.icon} ${language.color} mr-1`} />
                      ) : "prefix" in language ? (
                        <span
                          className={`${language.color} mr-1 font-bold`}
                        >
                          {language.prefix}
                        </span>
                      ) : null}
                      {language.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-6 dark:border-white/10">
                <span className="text-xs font-medium text-slate-500">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.website && (
                    <>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
                      >
                        <i className="fa-solid fa-globe" />
                        View Web
                      </a>

                      <span className="text-sm text-slate-500">/</span>
                    </>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
                  >
                    <i className="fa-brands fa-github" />
                    View Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-slate-200/80 py-20 dark:border-white/10 sm:py-28"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:p-14 lg:p-20">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Let's build something
              <br />
              <span className="text-brand-accent">worth shipping.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Open for software projects, collaborations, or technical
              inquiries. Reach out directly.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:souyan.zakharov@gmail.com"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <Mail size={24} className="text-brand-accent" />
                Email Me
              </a>

              <a
                href="https://github.com/SanityGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <FontAwesomeIcon icon={faGithub} size={"xl"} className="text-brand-accent" />
                View GitHub Profile
              </a>

              <a
                href="https://t.me/souyanka404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <i className="fa-brands fa-telegram text-brand-accent" />
                Telegram
              </a>
            </div>

            <hr className="mt-8 border-t border-slate-200/80 dark:border-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
