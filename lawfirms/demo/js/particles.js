/* particles.js — a light canvas particle field for dark hero bands.
   Small drifting dots with faint connecting lines, colored from the
   current theme (--glow-gold), so it reacts live to the theme picker.
   No library, no dependency: one canvas per `.particles-canvas` element,
   each animated independently via requestAnimationFrame. Skipped
   entirely under prefers-reduced-motion, and runs fewer particles on
   phones to stay smooth. */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function hexToRgb(hex) {
    hex = hex.replace("#", "").trim();
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }

  function initCanvas(canvas) {
    var ctx = canvas.getContext("2d");
    var container = canvas.parentElement;
    var isSmall = window.innerWidth < 700;
    var count = isSmall ? 22 : 50;
    var maxLinkDist = isSmall ? 85 : 115;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var width = 0, height = 0;
    var running = true;

    function resize() {
      var rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * 0.5 + 0.25,
      });
    }

    function currentColor() {
      var hex = getComputedStyle(document.documentElement).getPropertyValue("--glow-gold").trim() || "#d9a441";
      return hexToRgb(hex);
    }

    function tick() {
      if (!running) return;
      var c = currentColor();
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + p.a + ")";
        ctx.fill();
      }

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLinkDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + (0.14 * (1 - dist / maxLinkDist)) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(tick);
    }

    // Pause the loop when the canvas scrolls out of view — saves battery
    // on long pages with several particle fields.
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !running) {
            running = true;
            requestAnimationFrame(tick);
          } else if (!entry.isIntersecting) {
            running = false;
          }
        });
      });
      io.observe(canvas);
    }

    tick();
  }

  function start() {
    document.querySelectorAll(".particles-canvas").forEach(initCanvas);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
