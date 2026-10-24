import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero(): JSX.Element {
  return (
    <section className="flex max-w-3xl flex-col items-start">
      <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
        <span className="h-px w-7 bg-brand-accent" />
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          className="shrink-0 text-brand-accent"
        />
        <span>Portfolio & Open Source</span>
      </div>

      <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-[3.4rem] lg:text-6xl text-slate-900 dark:text-white">
        Crafting Code,
        <span className="mt-1 block bg-gradient-to-r from-brand-accent to-blue-500 bg-clip-text text-transparent">
          Shipping Solutions.
        </span>
      </h1>

      <div className="mt-5 h-0.5 w-16 bg-brand-accent" />

      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        Explore my public repositories, from full-stack web platforms and
        mobile applications to lightweight developer tools and software
        experiments.
      </p>
    </section>
  );
}