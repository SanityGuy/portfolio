import { useEffect, useRef, useState } from "react";
import { useRepoCount } from "../hooks/repos";
import CodeCard from "./CodeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Layers, Sparkles, Infinity } from "lucide-react";

export default function Hero() {
  const repoCount = useRepoCount();
  const sectionRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotionReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="hero"
        ref={sectionRef}
        className={`relative grid min-h-[100vh] grid-cols-1 items-center gap-14 px-4 pb-16 pt-28 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:grid-cols-12 lg:gap-10 lg:px-0 lg:pb-24 lg:pt-36 home-hero ${
          motionReady ? "home-hero-animated" : ""
        }`}
      >
        <style>{`
          .home-hero .home-hero-reveal {
            opacity: 1;
            transform: none;
          }

          .home-hero.home-hero-animated .home-hero-reveal {
            animation: home-hero-entrance .65s cubic-bezier(.2,.7,.2,1) both;
          }

          @keyframes home-hero-entrance {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .home-hero .home-hero-rule {
            transform: scaleX(1);
            transform-origin: left;
          }

          .home-hero.home-hero-animated .home-hero-rule {
            animation: home-hero-rule-anim .7s ease both;
          }

          @keyframes home-hero-rule-anim {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .home-hero .home-hero-btn {
            transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease, border-color .25s ease;
          }

          .home-hero .home-hero-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 16px 36px -20px rgba(59, 130, 246, .45);
            border-color: rgba(96, 165, 250, .5);
          }

          .home-hero .home-hero-stat {
            transition: transform .25s ease;
          }

          .home-hero .home-hero-stat:hover {
            transform: translateY(-2px);
          }

          @media (prefers-reduced-motion: reduce) {
            .home-hero *,
            .home-hero *::before,
            .home-hero *::after {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        <div className="flex flex-col justify-center lg:col-span-7 home-hero-reveal">
          <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
            <span className="h-px w-7 bg-brand-accent" />
            <Sparkles size={13} />
            2+ Years of Experience
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-5xl md:text-[3.4rem] lg:text-6xl">
            I build{" "}
            <span className="mt-1 block text-brand-accent">
              software that ships.
            </span>
          </h1>

          <div className="home-hero-rule mt-5 h-0.5 w-16 bg-brand-accent" />

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Student developer focused on fullstack web applications, database
            management, and application development. I emphasize clean
            structure, performance, and long term maintainability.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="home-hero-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-accent bg-white px-6 text-sm font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-100 sm:w-auto"
            >
              <Layers size={22} className="text-brand-accent" />
              Explore my work
            </a>

            <a
              href="https://github.com/SanityGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="home-hero-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 sm:w-auto"
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
            <div className="home-hero-stat flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {repoCount !== null ? repoCount : "…"}
              </strong>

              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
                Projects
              </span>
            </div>

            <div className="home-hero-stat flex flex-col">
              <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                05
              </strong>

              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
                Core Languages
              </span>
            </div>

            <div className="home-hero-stat flex flex-col">
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