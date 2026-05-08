document.addEventListener("DOMContentLoaded", function () {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    document.documentElement.classList.add("is-safari");
  }

  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);
  document.getElementById("mobile-menu-btn").addEventListener("click", toggleMobileMenu);
  document.getElementById("sidebar-overlay").addEventListener("click", closeMobileMenu);
  document.getElementById("copy-email-btn").addEventListener("click", copyEmail);
  document.getElementById("btn-top").addEventListener("click", scrollToTop);

  document.getElementById("pm-close").addEventListener("click", function () {
    document.getElementById("project-modal").close();
  });
  document.getElementById("em-close").addEventListener("click", function () {
    document.getElementById("exp-modal").close();
  });

  document.getElementById("project-modal").addEventListener("close", function () {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  });
  document.getElementById("exp-modal").addEventListener("close", function () {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  });

  window.addEventListener("scroll", handleScroll);

  document.documentElement.className = State.theme;
  document.getElementById("lang-toggle").textContent = State.lang;
  renderApp();
});
