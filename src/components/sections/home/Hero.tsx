import { useEffect, useRef, useState } from "react";
import { useRepoCount } from "../../../hooks/repos";
import CodeCard from "../../CodeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Layers, Home, Infinity } from "lucide-react";

export default function Hero() {
  const repoCount = useRepoCount();
  const sectionRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMotionReady(true);
      return;
    }

    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setMotionReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotionReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative grid min-h-[90vh] grid-cols-1 items-center gap-12 px-4 pb-16 pt-24 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-28 md:px-8 lg:grid-cols-12 lg:gap-10 lg:px-0 lg:pb-24 lg:pt-32 home-hero ${
        motionReady ? "home-hero-animated" : "opacity-0"
      }`}
    >
      <div className="absolute -top-20 left-1/4 -translate-x-1/2 w-[320px] sm:w-[500px] h-[250px] bg-brand-accent/15 blur-[100px] pointer-events-none rounded-full dark:bg-brand-accent/10" />

      <style>{`
        .home-hero .home-hero-reveal {
          opacity: 1;
          transform: none;
        }

        .home-hero.home-hero-animated .home-hero-reveal {
          animation: home-hero-entrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes home-hero-entrance {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .home-hero .home-hero-rule {
          transform-origin: left;
        }

        .home-hero.home-hero-animated .home-hero-rule {
          animation: home-hero-rule-anim 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes home-hero-rule-anim {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .home-hero-btn {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }

        .home-hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -16px rgba(59, 130, 246, 0.35);
          border-color: rgba(96, 165, 250, 0.6);
        }

        .home-hero-btn:active {
          transform: translateY(0);
        }

        .home-hero-stat {
          transition: transform 0.2s ease;
        }

        .home-hero-stat:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .home-hero *,
          .home-hero *::before,
          .home-hero *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="flex flex-col justify-center lg:col-span-7 home-hero-reveal z-10">
        <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
          <span className="h-px w-7 bg-brand-accent" />
          <Home size={13} className="text-brand-accent" />
          <span>2+ Years of Experience</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-[3.4rem] lg:text-6xl text-slate-900 dark:text-white">
          I build{" "}
          <span className="mt-1 block bg-gradient-to-r from-brand-accent to-blue-500 bg-clip-text text-transparent">
            software that ships.
          </span>
        </h1>

        <div className="home-about-rule mt-5 h-0.5 w-16 bg-brand-accent" />

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Student developer focused on full-stack web applications, database
          architecture, and scalable software. I emphasize clean code structure,
          high performance, and long-term maintainability.
        </p>

        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="home-hero-btn flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-brand-accent bg-brand-accent/10 px-6 text-sm font-semibold text-slate-900 dark:text-white sm:w-auto shadow-sm"
          >
            <Layers size={20} className="text-brand-accent" />
            Explore my work
          </a>

          <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero-btn flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 sm:w-auto shadow-sm"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="text-brand-accent"
            />
            View GitHub Profile
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5 dark:border-white/10 dark:bg-slate-900/60 backdrop-blur-sm sm:mt-14 sm:gap-6 md:max-w-xl shadow-sm">
          <div className="home-hero-stat flex flex-col items-center text-center justify-center border-r border-slate-200/60 dark:border-white/10 pr-2">
            <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              {repoCount !== null ? repoCount : "…"}
            </strong>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
              Projects
            </span>
          </div>

          <div className="home-hero-stat flex flex-col items-center text-center justify-center border-r border-slate-200/60 dark:border-white/10 pr-2">
            <strong className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              05
            </strong>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
              Core Languages
            </span>
          </div>

          <div className="home-hero-stat flex flex-col items-center text-center justify-center">
            <Infinity
              size={32}
              className="text-brand-accent sm:h-9 sm:w-9 mb-0.5"
            />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-[11px]">
              To Build
            </span>
          </div>
        </div>
      </div>

      <div className="z-10 lg:col-span-5">
        <CodeCard />
      </div>
    </section>
  );
}