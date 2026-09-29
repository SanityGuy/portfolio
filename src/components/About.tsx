import technologies from "../hooks/technologies";
import principles from "../hooks/principles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <>
        <section
        id="about"
        className="border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Curious by default.
              <br />
              <span className="text-brand-accent">
                Focused on structure.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Driven by designing reliable, scalable systems and refining user
            experience through clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
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

            <p className="pt-3">Stack:</p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="rounded-full border border-brand-accent bg-white px-3 py-1.5 font-mono text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {technology.icon ? (
                    <FontAwesomeIcon
                      icon={technology.icon}
                      size="lg"
                      className={`${technology.color} mr-1`}
                    />
                  ) : (
                    <span className={`${technology.color} mr-1 font-bold`} />
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
                className={`flex gap-4 p-5 sm:p-6 ${
                  index !== principles.length - 1
                    ? "border-b border-slate-200/80 dark:border-white/10"
                    : ""
                }`}
              >
                <span className="shrink-0 font-bold text-brand-accent">
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
        </>
    )
}