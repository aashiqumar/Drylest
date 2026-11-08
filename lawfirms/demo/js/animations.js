/* animations.js — Lenis for buttery smooth/inertia scrolling, GSAP +
   ScrollTrigger for scroll-linked reveals, synced to Lenis's own raf loop
   so scroll-driven animation never lags behind the smoothed scroll. */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(max-width: 900px)").matches || "ontouchstart" in window;
  const hasGSAP = typeof gsap !== "undefined";
  const hasLenis = typeof Lenis !== "undefined";

  /* ---------- Smooth scroll (desktop; native momentum is already fine
     on touch, so Lenis is skipped there to keep phones fast) ---------- */
  let lenis = null;
  if (hasLenis && !reduceMotion && !isTouch) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4), // quart-out: smooth, no bounce
      smoothWheel: true,
    });
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      });
    }

    // Smooth-scroll same-page anchor links through Lenis instead of the
    // browser's instant jump.
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -20, duration: 1.3 });
      });
    });
  }

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
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 60);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!hasGSAP) return; // CSS alone keeps the page fully usable without GSAP/Lenis

  gsap.registerPlugin(ScrollTrigger);
  if (lenis) ScrollTrigger.defaults({ scroller: window });

  /* ---------- Hero entrance ---------- */
  gsap
    .timeline({ defaults: { ease: reduceMotion ? "power1.out" : "back.out(1.5)" } })
    .from(".hero-copy .reveal, .hero > .btn, .hero-trust", {
      opacity: 0,
      y: 30,
      scale: reduceMotion ? 1 : 0.94,
      duration: reduceMotion ? 0 : 0.85,
      stagger: reduceMotion ? 0 : 0.12,
    })
    .from(".trusted-card", { opacity: 0, y: 44, scale: reduceMotion ? 1 : 0.96, duration: reduceMotion ? 0 : 0.85 }, "-=0.3");

  /* ---------- Scroll reveals for singular elements ---------- */
  const heroHandled = new Set(document.querySelectorAll(".hero-copy .reveal, .hero > .btn, .hero-trust, .trusted-card"));
  document.querySelectorAll(".reveal").forEach((elx) => {
    if (heroHandled.has(elx)) return;
    gsap.from(elx, {
      opacity: 0,
      y: 36,
      scale: reduceMotion ? 1 : 0.92,
      duration: reduceMotion ? 0 : 0.8,
      ease: reduceMotion ? "power1.out" : "back.out(1.6)",
      scrollTrigger: { trigger: elx, start: "top 88%", once: true },
    });
  });

  /* ---------- Staggered grids: a fluid "pop" as each card lands ---------- */
  [
    ".services-grid", ".attorneys-grid", ".blog-grid",
    ".steps-grid", ".practice-grid", ".plans-grid", ".faq-list",
    ".about-stats-grid", ".contact-details-grid",
  ].forEach((sel) => {
    const grid = document.querySelector(sel);
    if (!grid) return;
    gsap.from(grid.children, {
      opacity: 0,
      y: 34,
      scale: reduceMotion ? 1 : 0.88,
      duration: reduceMotion ? 0 : 0.7,
      stagger: reduceMotion ? 0 : 0.09,
      ease: reduceMotion ? "power1.out" : "back.out(1.7)",
      scrollTrigger: { trigger: grid, start: "top 85%", once: true },
    });
  });

  /* ---------- Animated counters (About page stats) ---------- */
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

  /* ---------- Progress bars (About page) ---------- */
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const pct = parseFloat(bar.dataset.percent) || 0;
    gsap.to(bar, {
      width: pct + "%",
      duration: reduceMotion ? 0 : 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: bar, start: "top 90%", once: true },
    });
  });

  /* ---------- FAQ answer height recalculation after GSAP/open state ---------- */
  document.querySelectorAll(".faq-item.is-open .faq-answer").forEach((a) => {
    requestAnimationFrame(() => (a.style.maxHeight = a.scrollHeight + "px"));
  });

  /* ---------- Subtle parallax on full-bleed background photos ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".hero-bg img, .banner-bg img, .consultation-bg img, .footer-bg img, .page-hero-bg img, .video-bg img, .faq-bg img").forEach((img) => {
      gsap.to(img, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest("section, footer"),
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });
  }
})();
