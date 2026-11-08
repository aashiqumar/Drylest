/* render-contact.js — builds the Contact Us page from SITE.contactPage.
   Loaded before render.js, which calls window.renderContactPage(). */
window.renderContactPage = function (S, P, helpers) {
  const $ = helpers.$;
  const el = helpers.el;

  $("#contact-heading").textContent = P.hero.heading;
  $("#contact-paragraph").textContent = P.hero.paragraph;

  const grid = $("#contact-details-grid");
  P.details.forEach((detail) => {
    const card = el("div", "contact-detail-card");
    const lines = detail.lines.map((line) => `<p>${line}</p>`).join("");
    card.innerHTML = `
      <img src="icons/${detail.icon}.svg" alt="" aria-hidden="true">
      <div><h4>${detail.label}</h4>${lines}</div>`;
    grid.appendChild(card);
  });

  // Map pins, positioned proportionally to the 1440px-wide source design.
  const mapSection = $("#map-section");
  const pins = [
    { left: 823, top: 65 },
    { left: 922, top: 175 },
    { left: 397, top: 100 },
  ];
  pins.forEach((pos) => {
    const pin = el("img", "map-pin");
    pin.src = "icons/icon-map-pin.svg";
    pin.alt = "";
    pin.style.left = (pos.left / 1440) * 100 + "%";
    pin.style.top = pos.top + "px";
    mapSection.appendChild(pin);
  });

  $("#banner-heading").textContent = P.banner.heading;
  $("#banner-subtext").textContent = P.banner.subtext;
  const bannerCta = $("#banner-cta");
  bannerCta.textContent = P.banner.cta.label;
  bannerCta.href = P.banner.cta.href;
};
