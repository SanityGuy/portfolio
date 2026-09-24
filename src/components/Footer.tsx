import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200/80 px-4 py-8 text-center text-xs font-medium tracking-wider text-slate-500 dark:border-white/10 sm:flex-row sm:px-6 sm:text-left">
        <span>
          © {new Date().getFullYear()} SouyanDev
        </span>

        <span>Always ready to give my clients the best service.</span>

        <span>
          Built with <Heart size={16} className="text-brand-accent inline fill-current" /> by SouyanDev
        </span>
      </footer>
  )
};