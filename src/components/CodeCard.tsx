import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faJava, faReact } from "@fortawesome/free-brands-svg-icons";

export default function CodeCard() {
    return (
        <>
        <div className="relative flex min-h-[330px] w-full items-center justify-center sm:min-h-[400px] md:min-h-[440px] lg:col-span-5 lg:min-h-[480px]">
          <div className="animate-float-reverse absolute right-[8%] top-[8%] h-10 w-10 rounded-full bg-brand-accent shadow-[0_0_35px_rgba(11,132,255,0.5)] sm:h-14 sm:w-14" />

          <div className="pointer-events-none absolute h-[130px] w-[280px] -rotate-[22deg] rounded-full border border-brand-accent/30 opacity-50 sm:h-[180px] sm:w-[400px]" />

          <div className="pointer-events-none absolute h-[170px] w-[330px] rotate-[55deg] rounded-full border border-brand-accent2/20 opacity-30 sm:h-[230px] sm:w-[460px]" />

          <div className="relative z-10 w-[calc(100%-2rem)] max-w-sm rotate-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-2xl backdrop-blur-xl transition duration-300 hover:rotate-0 dark:border-white/10 dark:bg-slate-900/70 sm:w-full sm:max-w-md sm:rotate-2">
            <div className="flex h-10 items-center justify-between border-b border-slate-200/80 px-4 font-mono text-xs text-slate-400 dark:border-white/10">
              <div className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
                <i className="h-2.5 w-2.5 rounded-full bg-slate-400/40" />
              </div>

              <span>souyan.ts</span>
            </div>

            <pre className="overflow-x-auto p-4 font-mono text-[10px] leading-relaxed text-slate-700 dark:text-slate-300 sm:p-5 sm:text-sm">
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

          <div className="animate-float-slow absolute left-0 top-[5%] z-20 rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1.5 font-mono text-[10px] shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 sm:left-[2%] sm:top-[12%] sm:px-3.5 sm:text-xs">
            <FontAwesomeIcon
              icon={faJs}
              size="lg"
              className="mr-1 text-yellow-400"
            />
            JavaScript
          </div>

          <div className="animate-float-reverse absolute bottom-[14%] right-0 z-20 rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1.5 font-mono text-[10px] shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 sm:bottom-[18%] sm:px-3.5 sm:text-xs">
            <FontAwesomeIcon
              icon={faJava}
              size="lg"
              className="mr-1 text-red-500"
            />
            Java
          </div>

          <div className="animate-float-mid absolute bottom-[4%] left-[3%] z-20 rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1.5 font-mono text-[10px] shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 sm:bottom-[8%] sm:left-[8%] sm:px-3.5 sm:text-xs">
            <FontAwesomeIcon
              icon={faReact}
              size="lg"
              className="mr-1 text-cyan-400"
            />
            React
          </div>
        </div>
        </>
    )
}