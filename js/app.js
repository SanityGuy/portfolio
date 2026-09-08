document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const experience = document.getElementById("experience");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle ? themeToggle.querySelector(".theme-icon") : null;
    const cursorGlow = document.querySelector(".cursor-glow");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const savedTheme = localStorage.getItem("souyan-theme");
    if (savedTheme === "light") {
        root.classList.remove("dark");
    } else if (savedTheme === "dark") {
        root.classList.add("dark");
    }

    function updateThemeButton() {
        if (!themeToggle || !themeIcon) return;

        const isLightMode = !root.classList.contains("dark");
        themeIcon.textContent = isLightMode ? "☀" : "☾";
        themeToggle.setAttribute(
            "aria-label",
            isLightMode ? "Switch to dark mode" : "Switch to light mode"
        );
    }

    updateThemeButton();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            root.classList.toggle("dark");
            const nextTheme = root.classList.contains("dark") ? "dark" : "light";
            localStorage.setItem("souyan-theme", nextTheme);
            updateThemeButton();

            if (!prefersReducedMotion && typeof gsap !== "undefined") {
                gsap.fromTo(
                    themeToggle,
                    { rotate: -15, scale: 0.85 },
                    { rotate: 0, scale: 1, duration: 0.3, ease: "back.out(2)" }
                );
            }
        });
    }

    if (cursorGlow && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("pointermove", (event) => {
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
        });
    } else if (cursorGlow) {
        cursorGlow.style.display = "none";
    }

    if (prefersReducedMotion || typeof gsap === "undefined") {
        document.querySelectorAll(".reveal, .project-card").forEach((element) => {
            element.style.opacity = "1";
            element.style.transform = "none";
        });
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    if (typeof ScrollToPlugin !== "undefined") {
        gsap.registerPlugin(ScrollToPlugin);
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: { y: target, offsetY: 70 },
                    ease: "power3.out",
                });
            }
        });
    });

    const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
    });

    const animateIfPresent = (selector, vars, position) => {
        if (document.querySelector(selector)) {
            introTimeline.from(selector, vars, position);
        }
    };

    animateIfPresent(".site-header", { y: -25, opacity: 0, duration: 0.6 });
    animateIfPresent(".availability-pill", { y: 15, opacity: 0, duration: 0.4 }, "-=.2");
    animateIfPresent(".hero-copy h1", { y: 30, opacity: 0, duration: 0.6 }, "-=.2");
    animateIfPresent(".hero-description", { y: 20, opacity: 0, duration: 0.5 }, "-=.3");
    animateIfPresent(".hero-actions", { y: 20, opacity: 0, duration: 0.45 }, "-=.25");
    animateIfPresent(".hero-stats", { y: 15, opacity: 0, duration: 0.45 }, "-=.25");
    animateIfPresent(".hero-visual", { scale: 0.92, opacity: 0, duration: 0.8 }, "-=.6");

    gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
            },
        });
    });

    if (document.querySelectorAll(".project-card").length > 0) {
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".project-grid",
                    start: "top 85%",
                    once: true,
                },
            }
        );
    }

    function updateExperience() {
        if (!experience) return;
        const startYear = 2024;
        const years = Math.floor(new Date().getFullYear() - startYear);
        experience.textContent = `${years}+ YEARS OF EXPERIENCE`;
    }

    updateExperience();
});