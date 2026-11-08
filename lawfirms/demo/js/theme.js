/* theme.js — lets a prospective client pick their own brand color live,
   right on the demo site. Swaps a handful of CSS custom properties, so
   every section (buttons, headings, the animated hero glow, icons) re-
   themes instantly, everywhere, with no page reload.

   This is a SALES/DEMO tool as much as a real feature: once a client
   picks a palette, hard-code their choice into css/styles.css's :root
   block (see the PALETTES list below for the hex values) instead of
   shipping the picker to their live site. */
(function () {
  var PALETTES = [
    { id: "brown", name: "Heritage Brown", brown: "#604b33", brownLight: "#94744e", glowGold: "#d9a441", glowAmber: "#e2672a", glowTeal: "#2f7d8c" },
    { id: "navy", name: "Navy & Gold", brown: "#16284a", brownLight: "#3c5d8f", glowGold: "#d9a441", glowAmber: "#3b6fd1", glowTeal: "#2f7d8c" },
    { id: "emerald", name: "Emerald & Brass", brown: "#1f4d3b", brownLight: "#3f7d63", glowGold: "#2f9e6c", glowAmber: "#d9a441", glowTeal: "#237a86" },
    { id: "burgundy", name: "Burgundy Elegance", brown: "#5c1f2e", brownLight: "#8c3b4d", glowGold: "#a33350", glowAmber: "#d9a441", glowTeal: "#c75a6e" },
    { id: "charcoal", name: "Charcoal Slate", brown: "#2b2f33", brownLight: "#55606a", glowGold: "#9aa5ad", glowAmber: "#4a6fa5", glowTeal: "#2f7d8c" },
    { id: "purple", name: "Royal Purple", brown: "#3b2250", brownLight: "#6a4a8c", glowGold: "#d9a441", glowAmber: "#7c4fb0", glowTeal: "#b0417c" },
  ];
  var STORAGE_KEY = "lawfirm-theme";

  function applyPalette(p) {
    var root = document.documentElement.style;
    root.setProperty("--brown", p.brown);
    root.setProperty("--brown-light", p.brownLight);
    root.setProperty("--glow-gold", p.glowGold);
    root.setProperty("--glow-amber", p.glowAmber);
    root.setProperty("--glow-teal", p.glowTeal);
  }

  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }
  function save(id) {
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      /* private browsing / storage blocked — theme just won't persist */
    }
  }

  var savedId = getSaved();
  var active = null;
  for (var i = 0; i < PALETTES.length; i++) {
    if (PALETTES[i].id === savedId) active = PALETTES[i];
  }
  if (!active) active = PALETTES[0];
  applyPalette(active);

  function buildWidget() {
    var wrap = document.createElement("div");
    wrap.className = "theme-picker";
    wrap.innerHTML =
      '<button type="button" class="theme-picker-toggle" aria-expanded="false" aria-label="Choose a theme color">' +
      '<span class="theme-picker-dot"></span><span class="theme-picker-label">Theme</span>' +
      "</button>" +
      '<div class="theme-picker-panel" hidden>' +
      '<p class="theme-picker-title">Pick your brand color</p>' +
      '<div class="theme-picker-swatches"></div>' +
      "</div>";
    document.body.appendChild(wrap);

    var toggle = wrap.querySelector(".theme-picker-toggle");
    var panel = wrap.querySelector(".theme-picker-panel");
    var swatchRow = wrap.querySelector(".theme-picker-swatches");
    var dot = wrap.querySelector(".theme-picker-dot");
    dot.style.background = active.brown;

    PALETTES.forEach(function (p) {
      var sw = document.createElement("button");
      sw.type = "button";
      sw.className = "theme-swatch" + (p.id === active.id ? " is-active" : "");
      sw.style.background = "linear-gradient(135deg," + p.brown + "," + p.brownLight + ")";
      sw.title = p.name;
      sw.setAttribute("aria-label", p.name);
      sw.addEventListener("click", function () {
        applyPalette(p);
        save(p.id);
        dot.style.background = p.brown;
        swatchRow.querySelectorAll(".theme-swatch").forEach(function (s) {
          s.classList.remove("is-active");
        });
        sw.classList.add("is-active");
      });
      swatchRow.appendChild(sw);
    });

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = panel.hidden;
      panel.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildWidget);
  } else {
    buildWidget();
  }
})();
