/* render.js — takes window.SITE (content.js) and builds every repeating
   section of the page. Edit content.js to change what's on the site;
   this file only needs touching if you're changing the SITE's structure
   (adding a new field, a new kind of section). */
(function () {
  const S = window.SITE;
  if (!S) return;

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const setText = (sel, value) => {
    const node = $(sel);
    if (node) node.textContent = value;
  };
  const telHref = (p) => "tel:" + p.replace(/\s+/g, "");
  const waHref = (p) => "https://wa.me/" + p.replace(/\D/g, "");
  const pad = (n) => String(n).padStart(2, "0");

  function renderMeta() {
    document.title = S.meta.title;
    document.documentElement.lang = S.meta.lang || "en";
    setText("#page-title", S.meta.title);
    $("#meta-description").setAttribute("content", S.meta.description);
    $("#og-title").setAttribute("content", S.meta.title);
    $("#og-description").setAttribute("content", S.meta.description);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      name: S.firm.name,
      description: S.meta.description,
      telephone: S.firm.phone,
      email: S.firm.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: S.firm.address,
        addressLocality: S.firm.city,
        addressCountry: "LK",
      },
      areaServed: "Sri Lanka",
      priceRange: "$$",
    };
    $("#schema-ld").textContent = JSON.stringify(schema, null, 2);
  }

  function renderMasthead() {
    const initials = S.firm.shortName || S.firm.name.slice(0, 2).toUpperCase();
    setText("#brand-mark", initials);
    setText("#footer-brand-mark", initials);
    setText("#brand-name", S.firm.name);
    setText("#footer-brand-name", S.firm.name);
    setText("#brand-tagline", S.firm.tagline);
    setText("#footer-brand-tagline", S.firm.tagline);

    $("#header-phone").setAttribute("href", telHref(S.firm.phone));
    setText("#header-phone-text", S.firm.phone);

    const navList = $("#nav-list");
    S.nav.forEach((item) => {
      const li = el("li");
      const a = el("a", null, item.label);
      a.href = item.href;
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  function renderHero() {
    setText("#hero-ref", S.hero.reference);
    setText("#hero-headline", S.hero.headline);
    setText("#hero-sub", S.hero.subcopy);
    setText("#hero-caption", S.hero.photoCaption);

    const cta = $("#hero-cta");
    cta.textContent = S.hero.primaryCta.label;
    cta.href = S.hero.primaryCta.href;

    const phone = $("#hero-phone");
    phone.textContent = S.firm.phone;
    phone.href = telHref(S.firm.phone);

    const register = $("#register");
    S.stats.forEach((stat) => {
      const li = el("li");
      li.innerHTML =
        '<span class="register__num" data-count="' + stat.number + '">0</span>' +
        '<span class="register__label">' + stat.label + "</span>";
      li.querySelector(".register__num").dataset.suffix = stat.suffix || "";
      register.appendChild(li);
    });
  }

  function renderPractice() {
    setText("#practice-label", S.practice.label);
    setText("#practice-heading", S.practice.heading);
    setText("#practice-intro", S.practice.intro);

    const list = $("#practice-list");
    S.services.forEach((svc, i) => {
      const row = el("li", "docket__row reveal");
      row.innerHTML =
        '<span class="docket__index">' + pad(i + 1) + "</span>" +
        '<h3 class="docket__title">' + svc.title + "</h3>" +
        '<div class="docket__body"><p>' + svc.description + "</p>" +
        (svc.detail ? '<span class="docket__detail">' + svc.detail + "</span>" : "") +
        "</div>";
      list.appendChild(row);
    });
  }

  function renderAbout() {
    setText("#about-label", S.about.label);
    setText("#about-heading", S.about.heading);
    setText("#about-caption", S.about.photoCaption);

    const paras = $("#about-paragraphs");
    S.about.paragraphs.forEach((p) => paras.appendChild(el("p", null, p)));

    const bullets = $("#about-bullets");
    S.about.bullets.forEach((b) => bullets.appendChild(el("li", null, b)));
  }

  function renderCounsel() {
    setText("#attorneys-label", S.attorneys.label);
    setText("#attorneys-heading", S.attorneys.heading);

    const list = $("#counsel-list");
    S.attorneys.people.forEach((person) => {
      const li = el("li", "reveal");
      li.innerHTML =
        '<span class="counsel__mark" aria-hidden="true">' + person.initials + "</span>" +
        '<h3 class="counsel__name">' + person.name + "</h3>" +
        '<p class="counsel__role">' + person.role + " · " + person.area + "</p>" +
        '<p class="counsel__bio">' + person.bio + "</p>";
      list.appendChild(li);
    });
  }

  function renderQuotes() {
    setText("#testimonials-label", S.testimonials.label);
    setText("#testimonials-heading", S.testimonials.heading);

    const list = $("#quotes-list");
    S.testimonials.items.forEach((t) => {
      const li = el("li", "reveal");
      li.innerHTML =
        "<figure>" +
        "<blockquote>&ldquo;" + t.quote + "&rdquo;</blockquote>" +
        "<figcaption>" + t.name + " · " + t.context + "</figcaption>" +
        "</figure>";
      list.appendChild(li);
    });
  }

  function renderContact() {
    setText("#contact-label", S.contact.label);
    setText("#contact-heading", S.contact.heading);
    setText("#contact-intro", S.contact.intro);

    const phoneEl = $("#contact-phone");
    phoneEl.href = telHref(S.firm.phone);
    phoneEl.textContent = S.firm.phone;

    const waEl = $("#contact-whatsapp");
    waEl.href = waHref(S.firm.whatsapp);
    waEl.textContent = S.firm.whatsapp;

    const emailEl = $("#contact-email");
    emailEl.href = "mailto:" + S.firm.email;
    emailEl.textContent = S.firm.email;

    setText("#contact-address", S.firm.address);
    setText("#contact-hours", S.firm.hoursWeekday + " · " + S.firm.hoursSaturday);

    const note = $("#form-note");
    note.textContent = S.contact.formNote;
    $("#consultation-form").addEventListener("submit", function (e) {
      e.preventDefault();
      note.hidden = false;
    });
  }

  function renderColophon() {
    setText("#footer-blurb", S.footer.blurb);
    const list = $("#footer-practice-list");
    S.footer.practiceAreas.forEach((area) => list.appendChild(el("li", null, area)));

    setText("#footer-address", S.firm.address);
    const fp = $("#footer-phone");
    fp.href = telHref(S.firm.phone);
    fp.textContent = S.firm.phone;
    const fe = $("#footer-email");
    fe.href = "mailto:" + S.firm.email;
    fe.textContent = S.firm.email;

    setText("#footer-year", new Date().getFullYear());
    setText("#footer-copyright-name", S.firm.name);
  }

  function renderPoweredBy() {
    const badge = el("span", "powered-by-badge", "Powered by Drylest Private Limited");
    document.body.appendChild(badge);
  }

  renderMeta();
  renderMasthead();
  renderHero();
  renderPractice();
  renderAbout();
  renderCounsel();
  renderQuotes();
  renderContact();
  renderColophon();
  renderPoweredBy();

  document.dispatchEvent(new CustomEvent("site:rendered"));
})();
