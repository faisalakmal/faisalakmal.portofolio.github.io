const projectList = document.querySelector("#project-list");
const currentYear = document.querySelector("#current-year");

if (currentYear) currentYear.textContent = String(new Date().getFullYear());

function makeProjectCard(project) {
  const link = document.createElement("a");
  link.className = "project-card";
  link.href = `https://github.com/faisalakmal/${encodeURIComponent(project.repository)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `View ${project.title} on GitHub`);

  const top = document.createElement("span");
  top.className = "project-card__top";
  top.setAttribute("aria-hidden", "true");
  const repositoryLabel = document.createElement("span");
  repositoryLabel.textContent = "GitHub repository";
  const arrow = document.createElement("span");
  arrow.textContent = "↗";
  top.append(repositoryLabel, arrow);

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const content = document.createElement("span");
  content.className = "project-card__content";
  content.append(title, description);

  const technologies = document.createElement("ul");
  technologies.className = "project-card__tags";
  technologies.setAttribute("aria-label", "Technologies");
  project.technologies.forEach((technology) => {
    const tag = document.createElement("li");
    tag.textContent = technology;
    technologies.append(tag);
  });

  link.append(top, content, technologies);
  return link;
}

async function loadProjects() {
  if (!projectList) return;

  try {
    const response = await fetch("assets/data/projects.json");
    if (!response.ok) throw new Error(`Project data returned ${response.status}`);

    const projects = await response.json();
    if (!Array.isArray(projects)) throw new Error("Project data is not a list");

    projectList.replaceChildren(...projects.map(makeProjectCard));
  } catch {
    const status = document.createElement("p");
    status.className = "project-status";
    status.setAttribute("role", "status");
    status.textContent = "Projects could not be loaded. Visit GitHub to browse the repositories.";
    projectList.replaceChildren(status);
  } finally {
    projectList.setAttribute("aria-busy", "false");
  }
}

const sectionLinks = [...document.querySelectorAll('.section-nav__link[href^="#"]')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveSection(section) {
  sectionLinks.forEach((link) => {
    const active = link.hash === `#${section.id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function updateActiveSection() {
  if (!sections.length) return;

  // Keep the active menu item aligned with the section crossing this reading line.
  const readingLine = window.innerHeight * 0.34;
  const atPageEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let activeSection = atPageEnd ? sections[sections.length - 1] : sections[0];

  if (!atPageEnd) {
    for (const section of sections) {
      if (section.getBoundingClientRect().top > readingLine) break;
      activeSection = section;
    }
  }

  setActiveSection(activeSection);
}

let scrollFrame = 0;
function scheduleActiveSectionUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    updateActiveSection();
    scrollFrame = 0;
  });
}

window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
window.addEventListener("resize", scheduleActiveSectionUpdate);
updateActiveSection();

loadProjects();
