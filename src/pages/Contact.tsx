import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MessageCircleMore } from "lucide-react";

export default function Contact() {
    return (
        <>
        <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-28 md:px-8 lg:px-0 lg:py-36">
            <section className="flex max-w-3xl flex-col items-start">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
                <MessageCircleMore size={24} className="text-brand-accent" />
                <span>Contact Me</span>
                </div>

                <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Get In Touch,
                <br className="hidden sm:inline" />
                <span className="text-brand-accent">Let's Connect.</span>
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Feel free to reach out through any of the platforms below, and let's start a conversation!
                </p>
            </section>
        </main>
        </>
    );
}