import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
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
        id="contact"
        ref={sectionRef}
        className={`relative overflow-hidden border-t border-slate-200/80 px-4 py-20 dark:border-white/10 sm:px-6 sm:py-24 md:px-8 lg:px-0 lg:py-28 home-contact ${
          motionReady ? "home-contact-animated" : ""
        }`}
      >
        <style>{`
          .home-contact .home-contact-reveal {
            opacity: 1;
            transform: none;
          }

          .home-contact.home-contact-animated .home-contact-reveal {
            animation: home-contact-entrance .65s cubic-bezier(.2,.7,.2,1) both;
          }

          @keyframes home-contact-entrance {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .home-contact .home-contact-rule {
            transform: scaleX(1);
          }

          .home-contact.home-contact-animated .home-contact-rule {
            animation: home-contact-rule-anim .7s ease both;
          }

          @keyframes home-contact-rule-anim {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .home-contact .home-contact-card {
            transition: border-color .35s ease, box-shadow .35s ease;
          }

          .home-contact .home-contact-card:hover {
            border-color: rgba(96, 165, 250, .45);
            box-shadow: 0 25px 60px -30px rgba(59, 130, 246, .5);
          }

          .home-contact .home-contact-link {
            transition: transform .25s cubic-bezier(.2,.7,.2,1), border-color .25s ease, box-shadow .25s ease;
          }

          .home-contact .home-contact-link:hover {
            transform: translateY(-3px);
            border-color: rgba(96, 165, 250, .5);
            box-shadow: 0 16px 36px -20px rgba(59, 130, 246, .45);
          }

          .home-contact .home-contact-cta-arrow {
            transition: transform .25s ease;
          }

          .home-contact a:hover .home-contact-cta-arrow {
            transform: translateX(4px);
          }

          @media (prefers-reduced-motion: reduce) {
            .home-contact *,
            .home-contact *::before,
            .home-contact *::after {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        <div className="mx-auto max-w-7xl">
          <div className="home-contact-card relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:p-12 md:p-14 lg:p-20 home-contact-reveal">
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="h-px w-7 bg-brand-accent" />
                <Mail size={13} />
                Get In Touch
                <span className="h-px w-7 bg-brand-accent" />
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Let's build something
                <span className="mt-1 block text-brand-accent">worth shipping.</span>
              </h2>

              <div className="home-contact-rule mx-auto mt-5 h-0.5 w-16 bg-brand-accent" />

              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Open for software or simple projects, collaborations, or technical
                inquiries. Reach out directly.
              </p>

              <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-3.5 sm:grid-cols-2">
                <a
                  href="mailto:souyan.zakharov@gmail.com"
                  className="home-contact-link flex h-12 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="lg"
                    className="text-brand-accent"
                  />
                  Email Me
                </a>

                <a
                  href="https://t.me/souyanka404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-contact-link flex h-12 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    size="xl"
                    className="text-brand-accent"
                  />
                  Telegram
                </a>
              </div>

              <hr className="mt-10 w-full max-w-xl border-t border-slate-200/80 dark:border-white/10" />

              <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Or view more ways to contact me
                </p>

                <Link
                  to="/contacts"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-brand-accent/25 bg-brand-accent/10 px-5 text-sm font-semibold text-brand-accent transition hover:-translate-y-0.5 hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  Contact Page
                  <ArrowRight size={15} className="home-contact-cta-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}