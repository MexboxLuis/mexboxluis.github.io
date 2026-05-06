var defaultLang = "EN";
if (navigator.language && navigator.language.toLowerCase().startsWith("es")) {
  defaultLang = "ES";
}
var defaultTheme = "light";
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  defaultTheme = "dark";
}

var savedLang = localStorage.getItem("portfolio_lang");
if (savedLang === "US") { savedLang = "EN"; localStorage.setItem("portfolio_lang", "EN"); }

var State = {
  lang: savedLang || defaultLang,
  theme: localStorage.getItem("portfolio_theme") || defaultTheme,
  activeSection: "about",
  projectsExpanded: false
};
