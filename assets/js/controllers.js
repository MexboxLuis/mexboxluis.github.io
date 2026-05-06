function toggleTheme() {
  State.theme = State.theme === "dark" ? "light" : "dark";
  document.documentElement.className = State.theme;
  localStorage.setItem("portfolio_theme", State.theme);
}

function toggleLanguage() {
  State.lang = State.lang === "EN" ? "ES" : "EN";
  document.getElementById("lang-toggle").textContent = State.lang;
  localStorage.setItem("portfolio_lang", State.lang);
  renderApp();
}

function openMobileMenu() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
  var btn = document.getElementById("mobile-menu-btn");
  btn.innerHTML = '<i data-lucide="x"></i>';
  lucide.createIcons();
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("active");
  document.body.style.overflow = "";
  var btn = document.getElementById("mobile-menu-btn");
  btn.innerHTML = '<i data-lucide="menu"></i>';
  lucide.createIcons();
}

function toggleMobileMenu() {
  var sb = document.getElementById("sidebar");
  if (sb.classList.contains("open")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function handleScroll() {
  var sections = ["about", "education", "projects", "experience", "contact"];
  var scrollPos = window.scrollY + window.innerHeight / 3;

  for (var i = 0; i < sections.length; i++) {
    var el = document.getElementById(sections[i]);
    if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
      if (State.activeSection !== sections[i]) {
        State.activeSection = sections[i];
        updateNavActive();
      }
      break;
    }
  }
}

function copyEmail() {
  var email = document.getElementById("hero-email").value;
  navigator.clipboard.writeText(email).then(function () {
    var btn = document.getElementById("copy-email-btn");
    btn.innerHTML = '<i data-lucide="check"></i>';
    lucide.createIcons();
    setTimeout(function () {
      btn.innerHTML = '<i data-lucide="copy"></i>';
      lucide.createIcons();
    }, 2000);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openProjectModal(index) {
  var data = DB[State.lang];
  var p = data.projects.items[index];
  document.getElementById("pm-title").textContent = p.title;
  document.getElementById("pm-desc").textContent = p.desc;
  document.getElementById("pm-tech-lbl").textContent = data.global.labels.techLbl;
  document.getElementById("pm-tech").textContent = p.details.tech;
  document.getElementById("pm-purp-lbl").textContent = data.global.labels.purpLbl;
  document.getElementById("pm-purp").textContent = p.details.purp;
  document.getElementById("pm-how-lbl").textContent = data.global.labels.howLbl;
  document.getElementById("pm-how").textContent = p.details.how;
  var modal = document.getElementById("project-modal");
  var body = modal.querySelector(".modal-body");
  body.scrollTop = 0;
  modal.showModal();
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  lucide.createIcons();
}

function openExpModal(index) {
  var data = DB[State.lang];
  var c = data.experience.categories[index];

  document.getElementById("em-title").innerHTML =
    '<i data-lucide="' + c.icon + '"></i> ' + c.title;
  document.getElementById("em-desc").textContent = data.experience.desc;

  document.getElementById("em-role-period").innerHTML = '<strong>' + c.role + '</strong> &bull; ' + c.period;
  document.getElementById("em-summary").textContent = c.summary;

  document.getElementById("em-highlights-lbl").textContent = data.global.labels.highlightsLbl;
  var hlList = document.getElementById("em-highlights");
  hlList.innerHTML = "";
  c.highlights.forEach(function (hl) {
    var li = document.createElement("li");
    li.innerHTML = '<i data-lucide="check-circle-2" class="hl-icon"></i> <span>' + hl + '</span>';
    hlList.appendChild(li);
  });

  document.getElementById("em-skills-lbl").textContent = data.global.labels.techLbl;
  var skillsGrid = document.getElementById("em-skills");
  skillsGrid.innerHTML = "";
  c.skills.forEach(function (s) {
    var span = document.createElement("span");
    span.className = "slide-tag";
    span.textContent = s;
    skillsGrid.appendChild(span);
  });

  var githubBtn = document.getElementById("em-github");
  if (c.github) {
    githubBtn.href = c.github;
    githubBtn.style.display = "flex";
    githubBtn.innerHTML = BRAND_SVGS.github + "<span>" + data.global.labels.repoLbl + "</span>";
  } else {
    githubBtn.style.display = "none";
  }

  var modal = document.getElementById("exp-modal");
  var body = modal.querySelector(".modal-body");
  
  modal.showModal();
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  setTimeout(function() {
    body.scrollTop = 0;
  }, 50);
  lucide.createIcons();
}
