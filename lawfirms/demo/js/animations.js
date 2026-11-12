/* animations.js — GSAP-driven motion. Runs after render.js, so every
   dynamically-built card (.reveal, .tilt-card, .stat-number) already
   exists in the DOM by the time this executes. */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(max-width: 860px)").matches || "ontouchstart" in window;
  const hasGSAP = typeof gsap !== "undefined";

  /* ---------- Nav: mobile toggle + scroll shrink ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!hasGSAP) return; // CSS alone keeps the page fully usable without GSAP

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero entrance ---------- */
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from(".hero-copy .reveal", {
      opacity: 0,
      y: 24,
      duration: reduceMotion ? 0 : 0.8,
      stagger: reduceMotion ? 0 : 0.12,
    })
    .from(
      ".hero-bg__photo",
      { opacity: 0, scale: 1.08, duration: reduceMotion ? 0 : 1.4, ease: "power2.out" },
      "-=0.6"
    )
    .from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.3");

  /* ---------- Scroll reveals for everything below the hero ---------- */
  document.querySelectorAll(".section .reveal").forEach((elx) => {
    gsap.from(elx, {
      opacity: 0,
      y: 28,
      duration: reduceMotion ? 0 : 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: elx, start: "top 88%", once: true },
    });
  });

  /* ---------- Staggered card grids ---------- */
  [".services-grid", ".attorneys-grid", ".testimonials-track"].forEach((sel) => {
    const grid = document.querySelector(sel);
    if (!grid) return;
    gsap.from(grid.children, {
      opacity: 0,
      y: 24,
      duration: reduceMotion ? 0 : 0.6,
      stagger: reduceMotion ? 0 : 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: grid, start: "top 85%", once: true },
    });
  });

  /* ---------- Animated counters ---------- */
  document.querySelectorAll(".stat-number").forEach((numEl) => {
    const target = parseFloat(numEl.dataset.count);
    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: reduceMotion ? 0 : 1.6,
      ease: "power1.out",
      scrollTrigger: { trigger: numEl, start: "top 90%", once: true },
      onUpdate: () => (numEl.textContent = Math.round(counter.val).toLocaleString()),
    });
  });

  /* ---------- Hero photo: subtle parallax drift toward the cursor ---------- */
  const hero = document.querySelector(".hero");
  const heroPhoto = document.querySelector(".hero-bg__photo");
  if (hero && heroPhoto && !reduceMotion && !isTouch) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(heroPhoto, {
        x: px * -16,
        y: py * -10,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
    hero.addEventListener("mouseleave", () => {
      gsap.to(heroPhoto, { x: 0, y: 0, duration: 0.8 });
    });
  }

  /* ---------- Card tilt ---------- */
  if (!reduceMotion && !isTouch) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: px * 8,
          rotateX: -py * 8,
          transformPerspective: 700,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5 });
      });
    });
  }
})();
