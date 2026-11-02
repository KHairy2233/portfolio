/**
 * Mahmoud Khairy Portfolio - Dynamic Projects Engine
 * Pure Vanilla JavaScript (ES6+)
 * Renders verified projects, handles filtering, instant search, and bilingual updates.
 */

document.addEventListener("DOMContentLoaded", () => {
  initProjectsSection();
});

let allProjectsData = [];
let currentCategory = "all";
let currentSearchQuery = "";

async function initProjectsSection() {
  const gridContainer = document.getElementById("projectsGrid");
  if (!gridContainer) return;

  // Load project records
  allProjectsData = await window.dataProvider.loadProjects();

  // Initial render
  renderProjects();

  // Setup filter buttons
  setupCategoryFilters();

  // Setup live search
  setupLiveSearch();

  // Listen for language changes and re-render
  window.addEventListener("languageChanged", () => {
    renderProjects();
  });
}

function renderProjects() {
  const gridContainer = document.getElementById("projectsGrid");
  const noResultsEl = document.getElementById("noProjectsNotice");
  if (!gridContainer) return;

  const currentLang = window.i18n ? window.i18n.getLang() : "en";

  // Filter projects by category
  let filtered = allProjectsData.filter((p) => {
    const matchesCategory = currentCategory === "all" || p.category === currentCategory;
    if (!matchesCategory) return false;

    if (!currentSearchQuery) return true;

    const q = currentSearchQuery.toLowerCase();
    const title = (p.title[currentLang] || p.title.en).toLowerCase();
    const subtitle = (p.subtitle[currentLang] || p.subtitle.en).toLowerCase();
    const tools = (p.tools || []).join(" ").toLowerCase();

    return title.includes(q) || subtitle.includes(q) || tools.includes(q);
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    if (noResultsEl) noResultsEl.style.display = "block";
    return;
  }

  if (noResultsEl) noResultsEl.style.display = "none";

  const cardsHtml = filtered
    .map((project) => {
      const title = project.title[currentLang] || project.title.en;
      const subtitle = project.subtitle[currentLang] || project.subtitle.en;
      const catLabel = project.categoryLabel[currentLang] || project.categoryLabel.en;
      const viewDetailsText = window.i18n ? window.i18n.getText("proj_view_details") : "Case Study & Details";
      const sourceCodeText = window.i18n ? window.i18n.getText("proj_github_code") : "Source Code";

      const badgeClass =
        project.category === "bi"
          ? "badge-cyan"
          : project.category === "python-ml"
          ? "badge-emerald"
          : project.category === "sql-dwh"
          ? "badge-purple"
          : "badge-cyan";

      const tagsHtml = (project.tools || [])
        .slice(0, 4)
        .map((t) => `<span class="tech-tag">${t}</span>`)
        .join("");

      return `
        <article class="project-card reveal active">
          <a href="project.html?id=${project.id}" class="project-thumb-link" aria-label="${title}">
            <span class="badge ${badgeClass} project-category-badge">${catLabel}</span>
            <img src="${project.thumbnail}" alt="${title}" class="project-thumb-img" loading="lazy" onerror="this.src='assets/images/projects/cottonil_overview.png'">
          </a>

          <div class="project-content">
            <h3 class="project-title">
              <a href="project.html?id=${project.id}">${title}</a>
            </h3>
            <p class="project-desc">${subtitle}</p>

            <div class="project-tags">
              ${tagsHtml}
            </div>

            <div class="project-footer">
              <a href="project.html?id=${project.id}" class="btn btn-outline btn-sm">
                <span>${viewDetailsText}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: ${currentLang === 'ar' ? 'scaleX(-1)' : 'none'}"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </a>

              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-sm" aria-label="${sourceCodeText}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  gridContainer.innerHTML = cardsHtml;
}

function setupCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderProjects();
    });
  });
}

function setupLiveSearch() {
  const searchInput = document.getElementById("projectSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim();
    renderProjects();
  });
}
