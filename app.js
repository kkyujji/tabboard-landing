const pageData = window.tabboardPageData;

const featureGrid = document.querySelector("#featureGrid");
const usecaseGrid = document.querySelector("#usecaseGrid");
const faqList = document.querySelector("#faqList");

function renderFeatures() {
  featureGrid.innerHTML = pageData.features
    .map((feature) => `
      <article class="info-card">
        <div class="card-icon" aria-hidden="true">${feature.icon}</div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `)
    .join("");
}

function renderUsecases() {
  usecaseGrid.innerHTML = pageData.usecases
    .map((usecase) => `
      <article class="usecase-card">
        <span class="usecase-label">${usecase.title}</span>
        <h3>${usecase.subtitle}</h3>
        <p>${usecase.description}</p>
      </article>
    `)
    .join("");
}

function renderFaqs() {
  faqList.innerHTML = pageData.faqs
    .map((faq, index) => `
      <details class="faq-item" ${index === 0 ? "open" : ""}>
        <summary>${faq.question}</summary>
        <p>${faq.answer}</p>
      </details>
    `)
    .join("");

  faqList.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqList.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

renderFeatures();
renderUsecases();
renderFaqs();
initSmoothScroll();
