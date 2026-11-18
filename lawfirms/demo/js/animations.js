/* animations.js — GSAP motion. Runs after render.js, so every
   dynamically-built row already exists in the DOM by the time this
   executes. The page gets one orchestrated moment (the brief settling
   onto the photograph on load) and quiet reveals after that. */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof gsap !== "undefined";

  /* ---------- Nav: mobile drawer + masthead compression ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      })
    );
  }

  const masthead = document.getElementById("masthead");
  if (masthead) {
    const onScroll = () => masthead.classList.toggle("is-scrolled", window.scrollY > 40);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Counters run with or without GSAP, so the register never sits at 0. */
  function countUp(node) {
    const target = parseFloat(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    if (isNaN(target)) return;
    if (reduceMotion || !hasGSAP) {
      node.textContent = target.toLocaleString() + suffix;
      return;
    }
    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 1.4,
      ease: "power2.out",
      delay: 0.5,
      onUpdate: () => (node.textContent = Math.round(counter.val).toLocaleString() + suffix),
    });
  }
  document.querySelectorAll(".register__num").forEach(countUp);

  if (!hasGSAP) return; // CSS alone keeps the page fully usable without GSAP

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- The one orchestrated moment: the brief settling ---------- */
  const d = reduceMotion ? 0 : 1;
  const load = gsap.timeline({ defaults: { ease: "power3.out" } });

  load
    .from(".hero__photo", { opacity: 0, scale: 1.07, duration: 1.3 * d })
    .from(".brief", { opacity: 0, y: 34 * d, duration: 0.9 * d }, "-=0.75")
    .from(
      ".brief__ref, .brief__headline, .brief__sub, .brief__actions, .register",
      { opacity: 0, y: 16 * d, duration: 0.6 * d, stagger: 0.09 * d },
      "-=0.55"
    )
    .from(".hero__caption", { opacity: 0, duration: 0.6 * d }, "-=0.3");

  /* ---------- Hero photograph drifts as the page scrolls ---------- */
  if (!reduceMotion) {
    gsap.to(".hero__photo", {
      yPercent: 9,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  /* ---------- Quiet reveals below the fold ---------- */
  document.querySelectorAll(".band .reveal").forEach((node) => {
    gsap.from(node, {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
      duration: reduceMotion ? 0 : 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: node, start: "top 90%", once: true },
    });
  });

  [".band__head", ".split__copy", ".plate", ".enquiry"].forEach((sel) => {
    document.querySelectorAll(sel).forEach((node) => {
      gsap.from(node, {
        opacity: 0,
        y: reduceMotion ? 0 : 24,
        duration: reduceMotion ? 0 : 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: node, start: "top 88%", once: true },
      });
    });
  });
})();
