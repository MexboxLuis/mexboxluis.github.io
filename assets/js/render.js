var BRAND_SVGS = {
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
};

function getIcon(name) {
  if (BRAND_SVGS[name]) return BRAND_SVGS[name];
  return '<i data-lucide="' + name + '"></i>';
}

function sortProjects(items) {
  return items.slice().sort(function (a, b) {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.date.localeCompare(a.date);
  });
}

function sortExperience(categories) {
  var MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
    ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
    jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11
  };
  function parseStart(period) {
    var part = period.split("–")[0].trim().split(/\s+/);
    var m = (part[0] || "").toLowerCase().replace(/\.$/, "");
    var y = parseInt(part[1], 10) || 0;
    return y * 12 + (MONTHS[m] || 0);
  }
  return categories.slice().sort(function (a, b) {
    return parseStart(a.period) - parseStart(b.period);
  });
}

function renderSidebar(data) {
  document.getElementById("sb-name").textContent = data.global.name;
  document.getElementById("sb-role").textContent = data.global.role;
  document.getElementById("lbl-theme").textContent = data.global.labels.darkMode;
  document.getElementById("lbl-lang").textContent = data.global.labels.language;

  var nav = document.getElementById("nav-menu");
  nav.innerHTML = "";
  Object.entries(data.global.nav).forEach(function (entry) {
    var key = entry[0];
    var label = entry[1];
    var a = document.createElement("a");
    a.href = "#" + key;
    a.className = "nav-link";
    a.dataset.section = key;
    a.textContent = label;
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var el = document.getElementById(key);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      State.activeSection = key;
      updateNavActive();
      closeMobileMenu();
    });
    nav.appendChild(a);
  });
  updateNavActive();
}

function updateNavActive() {
  document.querySelectorAll(".nav-link").forEach(function (link) {
    if (link.dataset.section === State.activeSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function renderHero(data) {
  var titleEl = document.getElementById("hero-title");
  titleEl.innerHTML = data.hero.title[0] + '<br><span class="hero-title-muted">' + data.hero.title[1] + "</span>";

  document.getElementById("hero-desc").textContent = data.hero.desc;
  document.getElementById("hero-email").value = data.global.email;
  document.getElementById("hero-cv-text").textContent = data.hero.cvBtn;
  document.getElementById("hero-cv").href = data.hero.cvLink;

  var socialsEl = document.getElementById("hero-socials");
  socialsEl.innerHTML = "";
  data.socials.forEach(function (s) {
    var a = document.createElement("a");
    a.href = s.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "social-icon";
    a.setAttribute("aria-label", s.label);
    a.innerHTML = getIcon(s.icon);
    socialsEl.appendChild(a);
  });
}

function renderEducation(data) {
  document.getElementById("edu-title").textContent = data.education.title;
  document.getElementById("edu-desc").textContent = data.education.desc;

  var timeline = document.getElementById("edu-timeline");
  timeline.innerHTML = "";
  data.education.items.forEach(function (item) {
    var isMobile = window.matchMedia("(max-width: 639px)").matches;

    var div = document.createElement("div");
    div.className = "timeline-item";

    var dot = document.createElement("div");
    dot.className = "timeline-dot";

    var card = document.createElement("div");
    card.className = "timeline-card";

    var inner = document.createElement("div");
    inner.className = "timeline-card-inner";

    var iconEl = document.createElement("div");
    iconEl.className = "timeline-icon";
    iconEl.innerHTML = '<i data-lucide="' + item.icon + '"></i>';

    var details = document.createElement("div");
    details.className = "timeline-details";

    var titleEl = document.createElement("h3");
    titleEl.className = "timeline-title";
    titleEl.textContent = item.title;

    var instEl = document.createElement("p");
    instEl.className = "timeline-institution";
    instEl.textContent = item.inst;

    var meta = document.createElement("div");
    meta.className = "timeline-meta";
    meta.innerHTML =
      '<span><i data-lucide="map-pin"></i> ' + item.loc + "</span>" +
      '<span><i data-lucide="calendar"></i> ' + item.period + "</span>";

    var desc = document.createElement("p");
    desc.className = "timeline-desc";
    desc.textContent = item.desc;

    details.appendChild(titleEl);
    details.appendChild(instEl);
    details.appendChild(meta);
    details.appendChild(desc);
    inner.appendChild(iconEl);
    inner.appendChild(details);
    card.appendChild(inner);

    if (isMobile) {
      var chevronSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
      var toggle = document.createElement("button");
      toggle.className = "timeline-toggle";
      toggle.innerHTML = data.global.labels.expandDesc + " " + chevronSvg;
      toggle.addEventListener("click", function () {
        var isOpen = desc.classList.toggle("expanded");
        toggle.classList.toggle("open", isOpen);
        toggle.innerHTML = (isOpen
          ? data.global.labels.collapseDesc
          : data.global.labels.expandDesc) + " " + chevronSvg;
      });
      card.appendChild(toggle);
    }

    div.appendChild(dot);
    div.appendChild(card);
    timeline.appendChild(div);
  });
}


function buildProjectCard(p, originalIndex, data) {
  var container = document.createElement("div");
  container.className = "flip-container perspective-1000";

  var inner = document.createElement("div");
  inner.className = "flip-inner transform-style-3d";

  inner.innerHTML =
    '<div class="flip-front backface-hidden">' +
    '<div class="flip-front-content">' +
    '<h3 class="flip-front-title">' + p.title + "</h3>" +
    '<p class="flip-front-desc line-clamp-3">' + p.desc + "</p>" +
    "</div>" +
    '<div class="flip-front-tags">' +
    p.tech.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
    "</div></div>" +
    '<div class="flip-back backface-hidden rotate-y-180">' +
    '<img class="flip-back-img" src="' + p.img + '" alt="' + p.title + '">' +
    '<div class="flip-back-overlay">' +
    '<div class="flip-back-actions">' +
    (p.github ? '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" class="btn-github" onclick="event.stopPropagation()">' + getIcon("github") + " GitHub</a>" : "") +
    "</div>" +
    '<button class="btn-readmore" onclick="event.stopPropagation(); openProjectModal(' + originalIndex + ')">' +
    data.global.labels.readMore + "</button>" +
    "</div></div>";

  container.appendChild(inner);
  return container;
}

function renderProjects(data) {
  document.getElementById("proj-title").textContent = data.projects.title;
  document.getElementById("proj-desc").textContent = data.projects.desc;

  var sorted = sortProjects(data.projects.items);
  var INITIAL_COUNT = 4;
  var grid = document.getElementById("proj-grid");
  var btn = document.getElementById("proj-show-more");
  grid.innerHTML = "";

  var originalIndices = sorted.map(function (s) {
    return data.projects.items.indexOf(s);
  });

  var isExpanded = State.projectsExpanded;

  sorted.forEach(function (p, i) {
    var card = buildProjectCard(p, originalIndices[i], data);
    if (i >= INITIAL_COUNT) {
      if (!isExpanded) {
        card.classList.add("proj-hidden");
      } else {
        card.classList.add("proj-reveal");
      }
    }
    grid.appendChild(card);
  });

  if (sorted.length > INITIAL_COUNT) {
    btn.style.display = "";
    btn.innerHTML = isExpanded ? '<i data-lucide="chevrons-up"></i> ' + data.global.labels.showLess : '<i data-lucide="chevrons-down"></i> ' + data.global.labels.showMore;
    btn.onclick = function () {
      State.projectsExpanded = !State.projectsExpanded;
      var hiddenCards = grid.querySelectorAll(".flip-container");
      for (var i = INITIAL_COUNT; i < hiddenCards.length; i++) {
        if (State.projectsExpanded) {
          hiddenCards[i].classList.remove("proj-hidden");
          hiddenCards[i].classList.add("proj-reveal");
        } else {
          hiddenCards[i].classList.add("proj-hidden");
          hiddenCards[i].classList.remove("proj-reveal");
        }
      }
      if (State.projectsExpanded) {
        btn.innerHTML = '<i data-lucide="chevrons-up"></i> ' + data.global.labels.showLess;
      } else {
        btn.innerHTML = '<i data-lucide="chevrons-down"></i> ' + data.global.labels.showMore;
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      lucide.createIcons();
    };
  } else {
    btn.style.display = "none";
  }
}

function renderExperience(data) {
  document.getElementById("exp-title").textContent = data.experience.title;
  document.getElementById("exp-desc").textContent = data.experience.desc;

  var grid = document.getElementById("exp-grid");
  grid.innerHTML = "";
  var sorted = sortExperience(data.experience.categories);
  sorted.forEach(function (c, i) {
    var originalIndex = data.experience.categories.indexOf(c);
    var btn = document.createElement("button");
    btn.className = "exp-card " + c.gradient;
    if (i === sorted.length - 1 && sorted.length % 2 !== 0) btn.classList.add("exp-card-span-full");
    btn.addEventListener("click", function () { openExpModal(originalIndex); });

    btn.innerHTML =
      '<div class="exp-card-pattern"></div>' +
      '<div class="exp-card-content">' +
      '<div class="exp-card-header">' +
      '<div class="exp-card-icon"><i data-lucide="' + c.icon + '"></i></div>' +
      '<div class="exp-card-arrow"><i data-lucide="chevron-right"></i></div>' +
      "</div>" +
      '<h3 class="exp-card-title">' + c.title + "</h3>" +
      '<p class="exp-card-count">' + c.role + ' &bull; ' + c.period + "</p>" +
      "</div>";

    grid.appendChild(btn);
  });
}

function renderContact(data) {
  document.getElementById("contact-title").textContent = data.contact.title;
  document.getElementById("contact-subtitle").textContent = data.contact.sub;
  document.getElementById("contact-desc").textContent = data.contact.desc;
  document.getElementById("contact-btn").textContent = data.global.labels.backToTop;
  document.getElementById("footer-made").textContent = data.global.labels.madeWith;
  document.getElementById("footer-name").textContent = data.global.name;
  document.getElementById("footer-rights").textContent = data.global.rights;

  var socials = document.getElementById("contact-socials");
  socials.innerHTML = "";
  data.socials.forEach(function (s) {
    var a = document.createElement("a");
    a.href = s.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "contact-social-card";
    a.innerHTML =
      '<div class="contact-social-inner">' +
      '<div class="contact-social-body">' +
      '<div class="contact-social-icon">' + getIcon(s.icon) + "</div>" +
      '<div>' +
      '<p class="contact-social-label">' + s.label + "</p>" +
      '<p class="contact-social-user truncate">' + s.user + "</p>" +
      "</div></div></div>";
    socials.appendChild(a);
  });
}

function renderApp() {
  var data = DB[State.lang];
  document.documentElement.lang = State.lang === "EN" ? "en" : "es";
  renderSidebar(data);
  renderHero(data);
  renderEducation(data);
  renderProjects(data);
  renderExperience(data);
  renderContact(data);
  lucide.createIcons();
}
