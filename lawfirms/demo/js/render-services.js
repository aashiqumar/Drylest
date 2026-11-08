/* render-services.js — builds the Services page from SITE.servicesPage.
   Loaded before render.js, which calls window.renderServicesPage(). */
window.renderServicesPage = function (S, P, helpers) {
  const $ = helpers.$;
  const el = helpers.el;

  // ---- process ----
  $("#process-heading").textContent = P.process.heading;
  $("#process-paragraph-1").textContent = P.process.paragraph1;
  $("#process-paragraph-2").textContent = P.process.paragraph2;
  const learnmore = $("#process-learnmore");
  learnmore.childNodes[0].textContent = P.process.linkLabel + " ";
  learnmore.href = P.process.linkHref;

  const stepsGrid = $("#steps-grid");
  P.process.steps.forEach((step) => {
    const card = el("div", "step-card");
    card.innerHTML = `
      <div>
        <h3>${step.number}. ${step.title}</h3>
        <p>${step.description}</p>
      </div>
      <div class="step-icon"><img src="icons/${step.icon}.svg" alt=""></div>`;
    stepsGrid.appendChild(card);
  });

  // ---- banner ----
  $("#banner-heading").textContent = P.banner.heading;
  const bannerCta = $("#banner-cta");
  bannerCta.textContent = P.banner.cta.label;
  bannerCta.href = P.banner.cta.href;

  // ---- practice areas (full grid) ----
  $("#practice-heading").textContent = P.practiceAreas.heading;
  $("#practice-subheading").textContent = P.practiceAreas.subheading;
  const practiceGrid = $("#practice-grid");
  P.practiceAreas.cards.forEach((card) => {
    const item = el("div", "practice-card");
    item.innerHTML = `
      <img src="icons/${card.icon}.svg" alt="" aria-hidden="true">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <a class="practice-readmore" href="#">Read more <img src="icons/arrow-learnmore.svg" alt=""></a>`;
    practiceGrid.appendChild(item);
  });

  // ---- FAQ accordion ----
  $("#faq-heading").textContent = P.faq.heading;
  const faqList = $("#faq-list");
  P.faq.items.forEach((item, i) => {
    const row = el("div", "faq-item" + (i === 0 ? " is-open" : ""));
    row.innerHTML = `
      <button class="faq-question" type="button" aria-expanded="${i === 0 ? "true" : "false"}">
        <span>${item.question}</span>
        <img src="icons/icon-chevron.svg" alt="">
      </button>
      <div class="faq-answer"><p>${item.answer}</p></div>`;
    faqList.appendChild(row);

    const btn = row.querySelector(".faq-question");
    const answer = row.querySelector(".faq-answer");
    function setOpen(open) {
      row.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      answer.style.maxHeight = open ? answer.scrollHeight + "px" : "0px";
    }
    btn.addEventListener("click", () => {
      const willOpen = !row.classList.contains("is-open");
      faqList.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== row) {
          other.classList.remove("is-open");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = "0px";
        }
      });
      setOpen(willOpen);
    });
    if (i === 0) requestAnimationFrame(() => setOpen(true));
  });

  // ---- pricing plans ----
  $("#plans-heading").textContent = P.plans.heading;
  $("#plans-subheading").textContent = P.plans.subheading;
  const plansGrid = $("#plans-grid");
  P.plans.cards.forEach((plan) => {
    const card = el("div", "plan-card");
    const features = P.plans.features
      .map((f) => `<li><img src="icons/icon-checkmark.svg" alt="">${f}</li>`)
      .join("");
    card.innerHTML = `
      <div class="plan-icon"><img src="icons/${plan.icon}.svg" alt=""></div>
      <h3>${plan.name}</h3>
      <p class="plan-price">${plan.price}<span>/${plan.period}</span></p>
      <ul class="plan-features">${features}</ul>
      <a class="btn btn-block" href="contact.html">${P.plans.cta}</a>`;
    plansGrid.appendChild(card);
  });
};
