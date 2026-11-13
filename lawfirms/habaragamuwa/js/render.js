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
  const telHref = (p) => "tel:" + p.replace(/\s+/g, "");
  const waHref = (p) => {
    const digits = p.replace(/\D/g, "");
    return "https://wa.me/" + digits;
  };

  function renderMeta() {
    document.title = S.meta.title;
    document.documentElement.lang = S.meta.lang || "en";
    $("#page-title").textContent = S.meta.title;
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

  function renderHeader() {
    const initials = S.firm.shortName || S.firm.name.slice(0, 2).toUpperCase();
    $("#brand-mark").textContent = initials;
    $("#footer-brand-mark").textContent = initials;
    $("#brand-name").textContent = S.firm.name;
    $("#footer-brand-name").textContent = S.firm.name;
    $("#brand-tagline").textContent = S.firm.tagline;
    $("#footer-brand-tagline").textContent = S.firm.tagline;

    $("#header-phone").setAttribute("href", telHref(S.firm.phone));
    $("#header-phone-text").textContent = S.firm.phone;

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
    $("#hero-eyebrow").textContent = S.hero.eyebrow;
    $("#hero-headline-text").textContent = S.hero.headline + " ";
    $("#hero-sub").textContent = S.hero.subcopy;

    const primary = $("#hero-cta-primary");
    primary.textContent = S.hero.primaryCta.label;
    primary.href = S.hero.primaryCta.href;
    const secondary = $("#hero-cta-secondary");
    secondary.textContent = S.hero.secondaryCta.label;
    secondary.href = S.hero.secondaryCta.href;

    // Rotating word — simple fade/slide cycle, no extra library needed.
    const rotateEl = $("#hero-rotate");
    const words = S.hero.rotatingWords;
    let i = 0;
    rotateEl.textContent = words[0];
    setInterval(() => {
      i = (i + 1) % words.length;
      rotateEl.classList.add("is-swapping");
      setTimeout(() => {
        rotateEl.textContent = words[i];
        rotateEl.classList.remove("is-swapping");
      }, 300);
    }, 2600);
  }

  function renderStats() {
    const grid = $("#stats-grid");
    S.stats.forEach((stat) => {
      const item = el("div", "stat-item");
      item.innerHTML = `<span class="stat-number" data-count="${stat.number}">0</span><span class="stat-suffix">${stat.suffix}</span><span class="stat-label">${stat.label}</span>`;
      grid.appendChild(item);
    });
  }

  const ICONS = { scale: "icon-scale", home: "icon-home", briefcase: "icon-briefcase", heart: "icon-heart" };

  function renderServices() {
    const grid = $("#services-grid");
    S.services.forEach((svc) => {
      const card = el("div", "service-card tilt-card");
      card.innerHTML = `
        <div class="service-icon"><svg class="icon" viewBox="0 0 24 24"><use href="#${ICONS[svc.icon] || "icon-scale"}"/></svg></div>
        <h3>${svc.title}</h3>
        <p>${svc.description}</p>`;
      grid.appendChild(card);
    });
  }

  function renderAbout() {
    $("#about-eyebrow").textContent = S.about.eyebrow;
    $("#about-heading").textContent = S.about.heading;
    const paras = $("#about-paragraphs");
    S.about.paragraphs.forEach((p) => paras.appendChild(el("p", null, p)));
    const bullets = $("#about-bullets");
    S.about.bullets.forEach((b) => bullets.appendChild(el("li", null, b)));
    $("#about-years").textContent = S.firm.yearsInPractice + "+";
  }

  function renderAttorneys() {
    const grid = $("#attorneys-grid");
    S.attorneys.forEach((person) => {
      const card = el("div", "attorney-card tilt-card");
      card.innerHTML = `
        <div class="attorney-avatar">${person.initials}</div>
        <h3>${person.name}</h3>
        <p class="attorney-role">${person.role}</p>
        <p class="attorney-bio">${person.bio}</p>`;
      grid.appendChild(card);
    });
  }

  function renderTestimonials() {
    const track = $("#testimonials-track");
    S.testimonials.forEach((t) => {
      const card = el("div", "testimonial-card");
      card.innerHTML = `
        <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
        <p class="testimonial-name">${t.name} <span>&mdash; ${t.context}</span></p>`;
      track.appendChild(card);
    });
  }

  function renderContact() {
    const phoneEl = $("#contact-phone");
    phoneEl.href = telHref(S.firm.phone);
    phoneEl.textContent = S.firm.phone;

    const waEl = $("#contact-whatsapp");
    waEl.href = waHref(S.firm.whatsapp);
    waEl.textContent = S.firm.whatsapp;

    const emailEl = $("#contact-email");
    emailEl.href = "mailto:" + S.firm.email;
    emailEl.textContent = S.firm.email;

    $("#contact-address").textContent = S.firm.address;
    $("#contact-hours").textContent = S.firm.hoursWeekday + " · " + S.firm.hoursSaturday;

    const form = document.getElementById("consultation-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = ($("#f-name") ? $("#f-name").value : "").trim();
        const phone = ($("#f-phone") ? $("#f-phone").value : "").trim();
        const subject = ($("#f-subject") ? $("#f-subject").value : "").trim();
        const msg = ($("#f-message") ? $("#f-message").value : "").trim();

        const digits = S.firm.whatsapp.replace(/\D/g, "");
        const waTarget = digits.startsWith("94")
          ? digits
          : digits.startsWith("0")
            ? "94" + digits.slice(1)
            : "94" + digits;

        let waText = `Hello ${S.firm.name},\n\nI would like to request an initial consultation regarding a legal matter.\n\n*Name:* ${name || "Client"}\n*Phone:* ${phone || "Not specified"}`;
        if (subject) waText += `\n*Matter/Subject:* ${subject}`;
        if (msg) waText += `\n*Details:* ${msg}`;

        const waUrl = `https://wa.me/${waTarget}?text=${encodeURIComponent(waText)}`;
        const note = document.getElementById("form-note");
        if (note) {
          note.hidden = false;
          note.style.color = "#25D366";
          note.style.fontWeight = "600";
          note.textContent = "✓ Opening WhatsApp chat with our chambers...";
        }
        window.open(waUrl, "_blank");
      });
    }
  }

  function renderFooter() {
    $("#footer-blurb").textContent = S.footer.blurb;
    const list = $("#footer-practice-list");
    S.footer.practiceAreas.forEach((area) => list.appendChild(el("li", null, area)));

    $("#footer-address").textContent = S.firm.address;
    const fp = $("#footer-phone");
    fp.href = telHref(S.firm.phone);
    fp.textContent = S.firm.phone;
    const fe = $("#footer-email");
    fe.href = "mailto:" + S.firm.email;
    fe.textContent = S.firm.email;

    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-copyright-name").textContent = S.firm.name;
  }

  function renderPoweredBy() {
    var badge = document.createElement("span");
    badge.className = "powered-by-badge";
    badge.textContent = "Powered by Drylest Private Limited";
    document.body.appendChild(badge);
  }

  renderMeta();
  renderHeader();
  renderHero();
  renderStats();
  renderServices();
  renderAbout();
  renderAttorneys();
  renderTestimonials();
  renderContact();
  renderFooter();
  renderPoweredBy();

  document.dispatchEvent(new CustomEvent("site:rendered"));
})();
