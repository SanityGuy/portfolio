import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTelegram,
    faDiscord,
    faInstagram,
    faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import {
    MessageCircle,
    Mail,
    ArrowUpRight,
    Send,
    Users,
} from "lucide-react";

export default function ContactPage() {
    const pageRef = useRef<HTMLElement>(null);
    const [motionReady, setMotionReady] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
        }

        const section = pageRef.current;
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

    const contactChannels = [
        {
        name: "Telegram",
        handle: "@souyanka404",
        description: "Fastest response for direct messaging, project inquiries, and quick chats.",
        href: "https://t.me/souyanka404",
        icon: <FontAwesomeIcon icon={faTelegram} className="text-sky-500" size="xl" />,
        badge: "Fastest Response",
        primary: true,
        },
        {
        name: "Discord Direct",
        handle: "pozynoj.shtorm",
        description: "Available for voice calls, detailed technical discussions, and code reviews.",
        href: "https://discord.com/users/pozynoj.shtorm",
        icon: <FontAwesomeIcon icon={faDiscord} className="text-indigo-500" size="xl" />,
        badge: "Direct DM",
        primary: true,
        },
        {
        name: "Discord Server",
        handle: "SkyFlix Network",
        description: "Join our developer community server to hang out, share ideas, and build together.",
        href: "https://discord.gg/EZ4XBunzYg",
        icon: <Users className="text-brand-accent" size={24} />,
        badge: "Community Hub",
        primary: false,
        },
        {
        name: "GitHub",
        handle: "SanityGuy",
        description: "Check out my latest open-source repositories, activity, and project codebases.",
        href: "https://github.com/SanityGuy",
        icon: <FontAwesomeIcon icon={faGithub} className="text-slate-900 dark:text-white" size="xl" />,
        badge: "Code & Projects",
        primary: false,
        },
        {
        name: "Instagram",
        handle: "@sanityguy730",
        description: "Casual updates, software updates, and personal hobby highlights.",
        href: "https://instagram.com/ssanitguy730",
        icon: <FontAwesomeIcon icon={faInstagram} className="text-pink-500" size="xl" />,
        badge: "Social",
        primary: false,
        },
        {
        name: "Snapchat",
        handle: "@souyanbzmn27",
        description: "Quick daily updates, story posts, and casual developer snippets.",
        href: "https://snapchat.com/add/souyanbzmn27",
        icon: <FontAwesomeIcon icon={faSnapchat} className="text-yellow-400" size="xl" />,
        badge: "Casual",
        primary: false,
        },
    ];

    return (
        <>
        <main
            ref={pageRef}
            className={`relative overflow-hidden mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32 md:px-8 lg:px-0 lg:py-36 contact-page ${
            motionReady ? "contact-page-animated" : ""
            }`}
        >
            <style>{`
            .contact-page .contact-reveal {
                opacity: 1;
                transform: none;
            }

            .contact-page.contact-page-animated .contact-reveal {
                animation: contact-entrance .65s cubic-bezier(.2,.7,.2,1) both;
            }

            @keyframes contact-entrance {
                from { opacity: 0; transform: translateY(18px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .contact-page .contact-heading-rule {
                transform: scaleX(1);
                transform-origin: left;
            }

            .contact-page.contact-page-animated .contact-heading-rule {
                animation: contact-rule-anim .7s ease both;
            }

            @keyframes contact-rule-anim {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
            }

            .contact-page .contact-card {
                position: relative;
                isolation: isolate;
                transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .3s ease, box-shadow .35s ease;
            }

            .contact-page .contact-card:hover {
                transform: translateY(-5px);
                border-color: rgba(96, 165, 250, .48);
                box-shadow: 0 22px 50px -32px rgba(59, 130, 246, .55);
            }

            .contact-page .contact-card-arrow {
                transition: transform .25s ease;
            }

            .contact-page .contact-card:hover .contact-card-arrow {
                transform: translate(3px, -3px);
            }

            @media (prefers-reduced-motion: reduce) {
                .contact-page *,
                .contact-page *::before,
                .contact-page *::after {
                animation: none !important;
                transition: none !important;
                }
            }
            `}</style>

            <section className="mb-14 max-w-2xl lg:mb-16 contact-reveal">
            <div className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="h-px w-7 bg-brand-accent" />
                <MessageCircle size={13} />
                Let's Connect
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-6xl text-slate-900 dark:text-white">
                Get in touch,
                <span className="mt-1 block text-brand-accent">
                start a conversation.
                </span>
            </h1>

            <div className="contact-heading-rule mt-5 h-0.5 w-16 bg-brand-accent" />

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                I'm always open to discussing new software projects, creative ideas, technical inquiries,
                or collaborative opportunities. Reach out directly on your preferred platform!
            </p>
            </section>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel, index) => (
                <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-reveal flex min-w-0 flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-6 lg:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
                >
                <div>
                    <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-slate-800/60">
                        {channel.icon}
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                        {channel.badge}
                    </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                    {channel.name}
                    <ArrowUpRight size={16} className="contact-card-arrow text-slate-400 dark:text-slate-500" />
                    </h3>

                    <span className="mt-0.5 font-mono text-xs font-semibold text-brand-accent">
                    {channel.handle}
                    </span>

                    <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400">
                    {channel.description}
                    </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-200/80 pt-4 font-semibold text-xs text-brand-accent dark:border-white/10">
                    <span>Connect on {channel.name}</span>
                    <Send size={12} className="contact-card-arrow" />
                </div>
                </a>
            ))}
            </div>

            <section className="contact-reveal mt-12 rounded-3xl border border-dashed border-slate-300/80 bg-slate-50/60 p-6 dark:border-white/15 dark:bg-white/[0.02] sm:p-8 md:p-10" style={{ animationDelay: `${contactChannels.length * 80}ms` }}>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent">
                    <Mail size={14} />
                    Prefer Direct Email?
                </div>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    Send an email directly
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    For formal inquiries, client requests, or long-form messages, you can email me anytime.
                </p>
                </div>

                <a
                href="mailto:souyan.zakharov@gmail.com"
                className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-brand-accent/25 bg-brand-accent/10 px-5 py-2.5 text-sm font-semibold text-brand-accent transition hover:-translate-y-0.5 hover:bg-brand-accent hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                <Mail size={16} />
                souyan.zakharov@gmail.com
                <ArrowUpRight size={15} />
                </a>
            </div>
            </section>
        </main>
        </>
    );
}