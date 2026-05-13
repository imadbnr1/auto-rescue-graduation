
const langButtons = document.querySelectorAll("[data-switch]");
const sections = document.querySelectorAll(".lang-section");
const panes = document.querySelectorAll(".lang-pane");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");

function setLang(lang) {
  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.switch === lang));
  sections.forEach(section => section.classList.toggle("active", section.dataset.section === lang));
  panes.forEach(pane => pane.classList.toggle("active", pane.dataset.pane === lang));
  document.documentElement.lang = lang === "ar" ? "ar" : "fr";
}

langButtons.forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.switch)));

document.querySelectorAll(".toc-item").forEach(item => {
  item.addEventListener("click", () => {
    const target = document.getElementById(item.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 600);
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
