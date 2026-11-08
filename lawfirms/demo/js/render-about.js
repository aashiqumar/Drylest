/* render-about.js — builds the About Us page from SITE.aboutPage.
   Loaded before render.js, which calls window.renderAboutPage(). */
window.renderAboutPage = function (S, P, helpers) {
  const $ = helpers.$;
  const el = helpers.el;

  const SOCIAL = [
    { icon: "social-facebook", label: "Facebook" },
    { icon: "social-x-overlay", label: "Twitter" },
    { icon: "social-instagram", label: "Instagram" },
    { icon: "social-telegram", label: "Telegram" },
  ];

  // ---- attorneys ----
  $("#attorneys-heading").textContent = P.attorneys.heading;
  $("#attorneys-subheading").textContent = P.attorneys.subheading;
  const grid = $("#attorneys-grid");
  P.attorneys.people.forEach((person) => {
    const card = el("div", "attorney-card");
    const social = SOCIAL.map(
      (s) => `<a href="#" aria-label="${s.label}"><img src="icons/${s.icon}.svg" alt=""></a>`
    ).join("");
    card.innerHTML = `
      <div class="attorney-photo"><img src="${person.photo}" alt="${person.name}"></div>
      <p class="attorney-name">${person.name}</p>
      <p class="attorney-role">${person.role}</p>
      <div class="attorney-social">${social}</div>`;
    grid.appendChild(card);
  });

  // ---- video banner ----
  $("#video-heading").textContent = P.video.heading;
  $("#video-subtext").textContent = P.video.subtext;

  // ---- stats ----
  const statsGrid = $("#about-stats-grid");
  P.stats.forEach((stat) => {
    const item = el("div", "stat-item");
    item.innerHTML = `<span class="stat-number" data-count="${stat.number}">0</span><span class="stat-suffix">${stat.suffix}</span><span class="stat-label">${stat.label}</span>`;
    statsGrid.appendChild(item);
  });

  // ---- advocacy split ----
  $("#advocacy-heading").textContent = P.advocacy.heading;
  $("#advocacy-paragraph").textContent = P.advocacy.paragraph;
  const advocacyCta = $("#advocacy-cta");
  advocacyCta.textContent = P.advocacy.cta.label;
  advocacyCta.href = P.advocacy.cta.href;

  // ---- protect split w/ progress bars ----
  $("#protect-heading").textContent = P.protect.heading;
  $("#protect-paragraph").textContent = P.protect.paragraph;
  const progressList = $("#progress-list");
  P.protect.bars.forEach((bar) => {
    const row = el("div", "progress-row reveal");
    row.innerHTML = `
      <div class="progress-label"><span>${bar.label}</span><span>${bar.percent}%</span></div>
      <div class="progress-track"><div class="progress-fill" data-percent="${bar.percent}"></div></div>`;
    progressList.appendChild(row);
  });
};
