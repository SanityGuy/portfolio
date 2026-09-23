import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-lightBg font-sans text-slate-900 transition-colors duration-300 dark:bg-brand-darkBg dark:text-slate-100">
      <div
        className="noise-bg pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        aria-hidden="true"
      />

      <NavBar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200/80 px-4 py-8 text-center text-xs font-medium tracking-wider text-slate-500 dark:border-white/10 sm:flex-row sm:px-6 sm:text-left">
        <span>
          © {new Date().getFullYear()} SouyanDev
        </span>

        <span>Always ready to give my clients the best service.</span>

        <span>
          Built with <i className="fa-solid fa-heart text-brand-accent" /> & clarity.
        </span>
      </footer>
    </div>
  );
}