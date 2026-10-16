import { useEffect, useRef, useState } from "react";
import technologies from "../hooks/technologies";
import principles from "../hooks/principles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code2 } from "lucide-react";

export default function About() {
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
        id="about"
        ref={sectionRef}
        className={`relative overflow-hidden border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28 home-about ${
          motionReady ? "home-about-animated" : ""
        }`}
      >
        <style>{`
          .home-about .home-about-reveal {
            opacity: 1;
            transform: none;
          }

          .home-about.home-about-animated .home-about-reveal {
            animation: home-about-entrance .65s cubic-bezier(.2,.7,.2,1) both;
          }

          @keyframes home-about-entrance {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .home-about .home-about-rule {
            transform: scaleX(1);
            transform-origin: left;
          }

          .home-about.home-about-animated .home-about-rule {
            animation: home-about-rule-anim .7s ease both;
          }

          @keyframes home-about-rule-anim {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .home-about .home-about-chip {
            transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
          }

          .home-about .home-about-chip:hover {
            transform: translateY(-2px);
            border-color: rgba(96, 165, 250, .5);
            box-shadow: 0 10px 25px -15px rgba(59, 130, 246, .4);
          }

          .home-about .home-about-card {
            transition: border-color .3s ease, box-shadow .3s ease;
          }

          .home-about .home-about-card:hover {
            border-color: rgba(96, 165, 250, .35);
            box-shadow: 0 20px 40px -28px rgba(59, 130, 246, .35);
          }

          .home-about .home-about-principle {
            transition: background-color .25s ease;
          }

          .home-about .home-about-principle:hover {
            background-color: rgba(96, 165, 250, 0.03);
          }

          @media (prefers-reduced-motion: reduce) {
            .home-about *,
            .home-about *::before,
            .home-about *::after {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end lg:mb-16 home-about-reveal">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="h-px w-7 bg-brand-accent" />
                <Code2 size={13} />
                Background & Stack
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Curious by default.
                <span className="mt-1 block text-brand-accent">
                  Focused on structure.
                </span>
              </h2>

              <div className="home-about-rule mt-5 h-0.5 w-16 bg-brand-accent" />
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Driven by designing reliable, scalable systems and refining user
              experience through clean code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-md home-about-reveal" style={{ animationDelay: "100ms" }}>
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

              <p className="pt-3 font-semibold text-slate-900 dark:text-slate-200">Stack:</p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="home-about-chip inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {technology.icon ? (
                      <FontAwesomeIcon
                        icon={technology.icon}
                        size="lg"
                        className={`${technology.color} mr-1.5`}
                      />
                    ) : (
                      <span className={`${technology.color} mr-1.5 font-bold`} />
                    )}

                    {technology.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="home-about-card overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 home-about-reveal" style={{ animationDelay: "200ms" }}>
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`home-about-principle flex gap-4 p-5 sm:p-6 ${
                    index !== principles.length - 1
                      ? "border-b border-slate-200/80 dark:border-white/10"
                      : ""
                  }`}
                >
                  <span className="shrink-0 font-bold text-brand-accent font-mono text-sm">
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
        </div>
      </section>
    </>
  );
}