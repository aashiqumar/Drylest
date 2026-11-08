/* render.js — reads window.SITE (content.js) and builds every repeating
   section. Edit content.js to change the site's words; this file only
   needs touching to change structure. */
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
  const telHref = (p) => "tel:" + p.replace(/[^\d+]/g, "");
  const currentPage = document.body.dataset.page || "index";
  const pageContent = { services: S.servicesPage, about: S.aboutPage, contact: S.contactPage }[currentPage];

  function renderMeta() {
    const meta = pageContent ? pageContent.meta : S.meta;
    document.title = meta.title;
    document.documentElement.lang = S.meta.lang || "en";
    $("#page-title").textContent = meta.title;
    $("#meta-description").setAttribute("content", meta.description);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      name: S.firm.name,
      description: meta.description,
      telephone: S.firm.phone,
      email: S.firm.email,
      address: { "@type": "PostalAddress", streetAddress: S.firm.address },
    };
    $("#schema-ld").textContent = JSON.stringify(schema, null, 2);
  }

  function renderHeader() {
    $("#brand-name").textContent = S.firm.name;
    $("#footer-brand-name").textContent = S.firm.name;
    $("#header-phone").setAttribute("href", telHref(S.firm.phone));
    $("#header-phone-text").textContent = S.firm.phone;

    const navList = $("#nav-list");
    S.nav.forEach((item) => {
      const li = el("li");
      const a = el("a", item.page === currentPage ? "is-active" : null, item.label);
      a.href = item.href;
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  /* ---------- Inner-page hero (Services/About/Contact use a short
     breadcrumb-style hero instead of the homepage's big CTA hero) ---------- */
  function renderPageHero() {
    const host = $("#page-hero");
    if (!host || !pageContent || !pageContent.hero) return;
    host.querySelector(".page-hero-bg img").src = pageContent.hero.image;
    const h1 = host.querySelector("h1");
    if (h1) h1.textContent = pageContent.hero.heading;
  }

  function renderHero() {
    $("#hero-headline").textContent = S.hero.headline;
    $("#hero-sub").textContent = S.hero.subcopy;
    const cta = $("#hero-cta");
    cta.textContent = S.hero.cta.label;
    cta.href = S.hero.cta.href;

    const ratingEl = $("#hero-rating");
    if (ratingEl && S.hero.rating) {
      const stars = Array(5).fill('<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z"/></svg>').join("");
      ratingEl.innerHTML = `
        <span class="hero-rating-stars">${stars}</span>
        <span class="hero-rating-text"><strong>${S.hero.rating.score}</strong> · ${S.hero.rating.count} ${S.hero.rating.label}</span>`;
    }

    const trustEl = $("#hero-trust");
    if (trustEl && S.hero.trustPoints) {
      trustEl.innerHTML = S.hero.trustPoints
        .map(
          (p) => `<span class="hero-trust-item"><img src="icons/${p.icon}.svg" alt="">${p.text}</span>`
        )
        .join("");
    }
  }

  function renderTrusted() {
    $("#trusted-heading").textContent = S.trusted.heading;
    $("#trusted-paragraph").textContent = S.trusted.paragraph;
    $("#trusted-person").textContent = S.trusted.personName;
  }

  function renderServiceOptions() {
    const select = $("#f-service");
    if (select && !select.children.length) {
      S.consultation.services.forEach((name) => {
        const opt = el("option", null, name);
        opt.value = name;
        select.appendChild(opt);
      });
    }
  }

  function renderServices() {
    const grid = $("#services-grid");
    S.services.forEach((svc) => {
      const item = el("div", "service-item");
      item.innerHTML = `
        <img src="icons/${svc.icon}.svg" alt="" aria-hidden="true">
        <h3>${svc.title}</h3>
        <p>${svc.description}</p>`;
      grid.appendChild(item);
    });

    renderServiceOptions();
  }

  function renderBanner() {
    $("#banner-heading").textContent = S.banner.heading;
    const cta = $("#banner-cta");
    cta.textContent = S.banner.cta.label;
    cta.href = S.banner.cta.href;
  }

  const SOCIAL = [
    { icon: "social-facebook", label: "Facebook" },
    { icon: "social-x-overlay", label: "Twitter" },
    { icon: "social-instagram", label: "Instagram" },
    { icon: "social-telegram", label: "Telegram" },
  ];

  function renderAttorneys() {
    $("#attorneys-heading").textContent = S.attorneys.heading;
    $("#attorneys-subheading").textContent = S.attorneys.subheading;
    const grid = $("#attorneys-grid");
    S.attorneys.people.forEach((person) => {
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
  }

  function renderExcellence() {
    $("#excellence-heading").textContent = S.excellence.heading;
    $("#excellence-paragraph").textContent = S.excellence.paragraph;
    const cta = $("#excellence-cta");
    cta.textContent = S.excellence.cta.label;
    cta.href = S.excellence.cta.href;
  }

  function renderTestimonial() {
    $("#testimonial-heading").textContent = S.testimonial.heading;
    $("#testimonial-subheading").textContent = S.testimonial.subheading;
    $("#testimonial-quote").textContent = S.testimonial.quote;
    $("#testimonial-name").textContent = S.testimonial.name;
    $("#testimonial-role").textContent = S.testimonial.role;
    $("#testimonial-caption").textContent = S.testimonial.photoCaption;
  }

  function renderConsultation() {
    $("#consultation-heading").textContent = S.consultation.heading;
    $("#consultation-paragraph").textContent = S.consultation.paragraph;
  }

  function wireConsultationForm() {
    const form = $("#consultation-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = ($("#f-name") ? $("#f-name").value : "").trim();
      const phone = ($("#f-phone") ? $("#f-phone").value : "").trim();
      const email = ($("#f-email") ? $("#f-email").value : "").trim();
      const service = ($("#f-service") ? $("#f-service").value : "").trim();
      const msg = ($("#f-message") ? $("#f-message").value : "").trim();

      const firmName = (S.firm && S.firm.name) || "Apex Law Chambers";
      const firmPhone = (S.firm && S.firm.phone) || "+94770872373";
      const digits = firmPhone.replace(/\D/g, "");
      const waTarget = digits.startsWith("94") ? digits : (digits.startsWith("0") ? "94" + digits.slice(1) : "94" + digits);

      let waText = `Hello ${firmName},\n\nI would like to request an initial consultation regarding a legal matter.\n\n*Name:* ${name || "Client"}\n*Phone:* ${phone || "Not specified"}`;
      if (email) waText += `\n*Email:* ${email}`;
      if (service) waText += `\n*Practice Area:* ${service}`;
      if (msg) waText += `\n*Details:* ${msg}`;

      const waUrl = `https://wa.me/${waTarget}?text=${encodeURIComponent(waText)}`;
      const note = $("#form-note");
      if (note) {
        note.hidden = false;
        note.textContent = "✓ Opening WhatsApp chat with our chambers...";
      }
      window.open(waUrl, "_blank");
    });

    const mailBtn = $("#btn-submit-mail");
    if (mailBtn) {
      mailBtn.addEventListener("click", function () {
        const name = ($("#f-name") ? $("#f-name").value : "").trim();
        const phone = ($("#f-phone") ? $("#f-phone").value : "").trim();
        const email = ($("#f-email") ? $("#f-email").value : "").trim();
        const service = ($("#f-service") ? $("#f-service").value : "").trim();
        const msg = ($("#f-message") ? $("#f-message").value : "").trim();

        const firmEmail = (S.firm && S.firm.email) || "hello@drylest.site";
        const subject = encodeURIComponent(`Legal Consultation Request: ${service || "General Inquiry"} - ${name || "Client"}`);
        const body = encodeURIComponent(`Dear Counsel,\n\nI would like to request an initial legal consultation.\n\nName: ${name || "Client"}\nPhone: ${phone || "Not specified"}\nEmail: ${email || "Not specified"}\nPractice Area: ${service || "General"}\n\nDetails:\n${msg || "No details provided"}\n`);

        window.location.href = `mailto:${firmEmail}?subject=${subject}&body=${body}`;
      });
    }
  }

  function renderBlog() {
    if (!$("#blog-grid")) return;
    $("#blog-heading").textContent = S.blog.heading;
    $("#blog-subheading").textContent = S.blog.subheading;
    const grid = $("#blog-grid");
    S.blog.posts.forEach((post) => {
      const card = el("div", "blog-card");
      card.innerHTML = `
        <div class="blog-photo"><img src="${post.image}" alt="${post.title}"></div>
        <div class="blog-body">
          <div>
            <p class="blog-date">${post.date}</p>
            <p class="blog-title">${post.title}</p>
          </div>
          <a class="blog-readmore" href="#">Read more <img src="icons/blog-arrow.svg" alt=""></a>
        </div>`;
      grid.appendChild(card);
    });
  }

  function renderFooter() {
    $("#footer-blurb").textContent = S.footer.blurb;
    const list = $("#footer-practice-list");
    S.footer.practiceAreas.forEach((area) => list.appendChild(el("li", null, area)));

    const links = $("#footer-links-list");
    S.footer.links.forEach((l) => {
      const li = el("li");
      const a = el("a", null, l.label);
      a.href = l.href;
      li.appendChild(a);
      links.appendChild(li);
    });

    $("#footer-address").textContent = S.firm.address;
    const fp = $("#footer-phone");
    fp.href = telHref(S.firm.phone);
    fp.textContent = S.firm.phone;
    const fe = $("#footer-email");
    fe.href = "mailto:" + S.firm.email;
    fe.textContent = S.firm.email;

    $("#footer-copyright").textContent = S.firm.copyright;
  }

  renderMeta();
  renderHeader();
  renderPageHero();

  if (currentPage === "index") {
    renderHero();
    renderTrusted();
    renderServices();
    renderBanner();
    renderAttorneys();
    renderExcellence();
    renderTestimonial();
    renderConsultation();
  }
  if (currentPage === "services" && window.renderServicesPage) window.renderServicesPage(S, pageContent, { $, el });
  if (currentPage === "about" && window.renderAboutPage) window.renderAboutPage(S, pageContent, { $, el });
  if (currentPage === "contact" && window.renderContactPage) window.renderContactPage(S, pageContent, { $, el, telHref });
  renderServiceOptions();
  wireConsultationForm();
  renderBlog();

  renderFooter();

  (function renderPoweredBy() {
    var badge = document.createElement("span");
    badge.className = "powered-by-badge";
    badge.textContent = "Powered by Drylest Private Limited";
    document.body.appendChild(badge);
  })();

  document.dispatchEvent(new CustomEvent("site:rendered"));
})();
