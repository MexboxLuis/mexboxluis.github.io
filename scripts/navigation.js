const navLinks = document.querySelectorAll("nav ul a");
const sections = document.querySelectorAll("section");

function setActiveLink() {
  if (window.innerWidth <= 900) return; 

  let currentSection = null;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight * 0.7) {
      currentSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  if (currentSection) {
    const targetId = currentSection.id;
    const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

window.addEventListener("scroll", setActiveLink);

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.index a[href="#${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));
