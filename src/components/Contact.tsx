import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTelegram,
  faGoogle,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <>
        <section
        id="contact"
        className="border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:p-12 md:p-14 lg:p-20">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Let's build something
              <br />
              <span className="text-brand-accent">worth shipping.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Open for software projects, collaborations, or technical
              inquiries. Reach out directly.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:flex-wrap sm:items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <a
                href="mailto:souyan.zakharov@gmail.com"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="lg"
                  className="text-brand-accent"
                />
                Email Me
              </a>

              <a
                href="https://github.com/SanityGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="text-brand-accent"
                />
                View GitHub Profile
              </a>

              <a
                href="https://t.me/souyanka404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="xl"
                  className="text-brand-accent"
                />
                Telegram
              </a>

              <a
                href="https://discord.gg/3w7k7u9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  size="xl"
                  className="text-brand-accent"
                />
                Discord Server
              </a>
            </div>

            <hr className="mt-10 border-t border-slate-200/80 dark:border-white/10" />
          </div>
        </div>
      </section>
        </>
    )
}