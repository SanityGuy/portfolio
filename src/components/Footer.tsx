import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = footerRef.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotionReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`relative overflow-hidden border-t border-slate-200/80 px-4 py-8 dark:border-white/10 sm:px-6 sm:py-9 home-footer ${
        motionReady ? "home-footer-animated" : ""
      }`}
    >
      <style>{`
        .home-footer .home-footer-reveal {
          opacity: 1;
          transform: none;
        }

        .home-footer.home-footer-animated .home-footer-reveal {
          animation: home-footer-entrance .6s cubic-bezier(.2,.7,.2,1) both;
        }

        @keyframes home-footer-entrance {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-footer *,
          .home-footer *::before,
          .home-footer *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="home-footer-reveal mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs font-medium tracking-wider text-slate-500 dark:text-slate-400 md:flex-row md:text-left">
        <span>
          © {new Date().getFullYear()} SouyanDev
        </span>

        <span className="max-w-sm">
          Always ready to give my clients the best service.
        </span>

        <span className="inline-flex items-center gap-1.5 transition-transform duration-200 hover:scale-[1.02]">
          Built with
          <Heart
            size={16}
            className="shrink-0 fill-current text-brand-accent transition-transform duration-300 hover:scale-125"
          />
          by SouyanDev
        </span>
      </div>
    </footer>
  );
}