/**
 * Mahmoud Khairy Portfolio - Project Detail Controller
 * Pure Vanilla JavaScript (ES6+)
 * Renders individual project deep-dive pages, screenshot gallery, and interactive lightbox.
 */

document.addEventListener("DOMContentLoaded", () => {
  initProjectDetailPage();
  initLightbox();
});

let currentProject = null;

async function initProjectDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const allProjects = await window.dataProvider.loadProjects();

  if (!projectId) {
    // Default to the first featured project if none specified
    currentProject = allProjects[0] || null;
  } else {
    currentProject = allProjects.find((p) => p.id === projectId) || null;
  }

  renderProjectDetails();

  // Re-render when language toggled
  window.addEventListener("languageChanged", () => {
    renderProjectDetails();
  });
}

function renderProjectDetails() {
  const container = document.getElementById("projectDetailContainer");
  if (!container) return;

  const currentLang = window.i18n ? window.i18n.getLang() : "en";

  if (!currentProject) {
    document.title = currentLang === "ar"
      ? `المشروع غير موجود | محمود خيري | محلل بيانات وأخصائي بيانات`
      : `Project Not Found | Mahmoud Khairy | Data Analyst & Data Specialist`;
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 4rem 2rem;">
        <h2 style="margin-bottom: 1rem;">${window.i18n?.getText("detail_not_found")}</h2>
        <p style="margin-bottom: 2rem;">${window.i18n?.getText("detail_not_found_desc")}</p>
        <a href="index.html#projects" class="btn btn-primary">${window.i18n?.getText("detail_back")}</a>
      </div>
    `;
    return;
  }

  const p = currentProject;
  const title = p.title[currentLang] || p.title.en;
  const subtitle = p.subtitle[currentLang] || p.subtitle.en;
  const catLabel = p.categoryLabel[currentLang] || p.categoryLabel.en;
  const overview = p.overview[currentLang] || p.overview.en;
  const businessProblem = p.businessProblem[currentLang] || p.businessProblem.en;
  const implementationList = p.implementation[currentLang] || p.implementation.en || [];
  const findingsList = p.findings[currentLang] || p.findings.en || [];
  const metricsList = p.metrics || [];

  // Update Page Title
  document.title = currentLang === "ar"
    ? `${title} | محمود خيري | محلل بيانات وأخصائي بيانات`
    : `${title} | Mahmoud Khairy | Data Analyst & Data Specialist`;

  // Tools tags
  const toolsHtml = (p.tools || [])
    .map((t) => `<span class="tech-tag" style="font-size: 0.9rem; padding: 0.4rem 0.85rem;">${t}</span>`)
    .join("");

  // Metrics HTML
  const metricsHtml = metricsList
    .map((m) => {
      const label = m.label[currentLang] || m.label.en;
      return `
        <div class="stat-card">
          <div class="stat-content">
            <div class="stat-number" style="font-size: 1.25rem; color: var(--accent-cyan);">${m.value}</div>
            <div class="stat-label">${label}</div>
          </div>
        </div>
      `;
    })
    .join("");

  // Implementation steps
  const implHtml = implementationList
    .map(
      (step, idx) => `
      <li class="timeline-bullet" style="margin-bottom: 1rem;">
        <strong style="color: var(--text-white); margin-right: 0.4rem;">${idx + 1}.</strong> ${step}
      </li>
    `
    )
    .join("");

  // Findings list
  const findingsHtml = findingsList
    .map(
      (item) => `
      <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.85rem; color: var(--text-secondary);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${item}</span>
      </li>
    `
    )
    .join("");

  // Gallery items
  const galleryHtml = (p.images || [])
    .map((img) => {
      const caption = img.caption[currentLang] || img.caption.en;
      return `
        <figure class="gallery-item card" style="padding: 0; overflow: hidden; cursor: pointer;" onclick="openLightbox('${img.url}', '${caption.replace(/'/g, "\\'")}')">
          <div style="aspect-ratio: 16/9; overflow: hidden; background: #090d15;">
            <img src="${img.url}" alt="${caption}" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-normal);" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <figcaption style="padding: 0.85rem 1.25rem; font-size: 0.875rem; color: var(--text-secondary); background: var(--bg-card); border-top: 1px solid var(--border-subtle);">
            ${caption}
          </figcaption>
        </figure>
      `;
    })
    .join("");

  const backText = window.i18n ? window.i18n.getText("detail_back") : "Back to all projects";
  const repoText = window.i18n ? window.i18n.getText("detail_view_repo") : "View on GitHub";
  const overviewTitle = window.i18n ? window.i18n.getText("detail_overview") : "Project Overview";
  const problemTitle = window.i18n ? window.i18n.getText("detail_business_problem") : "Business Problem & Objective";
  const toolsTitle = window.i18n ? window.i18n.getText("detail_tools") : "Tools & Technologies Used";
  const implTitle = window.i18n ? window.i18n.getText("detail_implementation") : "Implementation & Architecture";
  const findingsTitle = window.i18n ? window.i18n.getText("detail_findings") : "Key Findings & Business Impact";
  const galleryTitle = window.i18n ? window.i18n.getText("detail_gallery") : "Screenshots & Dashboards";

  container.innerHTML = `
    <!-- Top Bar Navigation -->
    <div style="margin-bottom: var(--space-8); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <a href="index.html#projects" class="btn btn-secondary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: ${currentLang === 'ar' ? 'scaleX(-1)' : 'none'}"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        <span>${backText}</span>
      </a>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span class="badge badge-cyan">${catLabel}</span>
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>${repoText}</span>
        </a>
      </div>
    </div>

    <!-- Header Block -->
    <header style="margin-bottom: var(--space-10);">
      <h1 style="font-size: var(--fs-4xl); margin-bottom: var(--space-4); line-height: 1.2;">${title}</h1>
      <p style="font-size: var(--fs-lg); color: var(--text-secondary); max-width: 820px; line-height: 1.7;">${subtitle}</p>
    </header>

    <!-- Project Metrics Grid -->
    ${metricsHtml ? `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-10);">${metricsHtml}</div>` : ''}

    <!-- Main Detail Grid -->
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-10); align-items: start; margin-bottom: var(--space-12);">
      <div>
        <!-- Business Problem -->
        <div class="card" style="margin-bottom: var(--space-8); border-left: 4px solid var(--accent-cyan);">
          <h2 style="font-size: var(--fs-xl); margin-bottom: var(--space-4); display: flex; align-items: center; gap: 0.5rem;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            ${problemTitle}
          </h2>
          <p style="font-size: var(--fs-base); line-height: 1.75; color: var(--text-secondary);">${businessProblem}</p>
        </div>

        <!-- Overview -->
        <div class="card" style="margin-bottom: var(--space-8);">
          <h2 style="font-size: var(--fs-xl); margin-bottom: var(--space-4);">${overviewTitle}</h2>
          <p style="font-size: var(--fs-base); line-height: 1.75; color: var(--text-secondary);">${overview}</p>
        </div>

        <!-- Implementation & Steps -->
        <div class="card" style="margin-bottom: var(--space-8);">
          <h2 style="font-size: var(--fs-xl); margin-bottom: var(--space-4);">${implTitle}</h2>
          <ul style="padding: 0;">${implHtml}</ul>
        </div>

        <!-- Findings -->
        <div class="card">
          <h2 style="font-size: var(--fs-xl); margin-bottom: var(--space-4);">${findingsTitle}</h2>
          <ul style="padding: 0;">${findingsHtml}</ul>
        </div>
      </div>

      <!-- Right Column: Sidebar Info -->
      <aside>
        <div class="card" style="margin-bottom: var(--space-6);">
          <h3 style="font-size: var(--fs-md); margin-bottom: var(--space-4); color: var(--text-white);">${toolsTitle}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${toolsHtml}
          </div>
        </div>

        <div class="card" style="background: rgba(56, 189, 248, 0.05); border-color: rgba(56, 189, 248, 0.2);">
          <h3 style="font-size: var(--fs-md); margin-bottom: var(--space-3); color: var(--text-white);">${repoText}</h3>
          <p style="font-size: var(--fs-sm); margin-bottom: var(--space-4);">Explore the complete code repository, scripts, and documentation on GitHub.</p>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub Repository</span>
          </a>
        </div>
      </aside>
    </div>

    <!-- Visual Dashboards & Screenshots Gallery -->
    ${
      galleryHtml
        ? `
      <section style="margin-top: var(--space-12);">
        <h2 style="font-size: var(--fs-2xl); margin-bottom: var(--space-6);">${galleryTitle}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
          ${galleryHtml}
        </div>
      </section>
    `
        : ""
    }

    <!-- Bottom Back to Projects CTA -->
    <div style="margin-top: var(--space-16); padding-top: var(--space-8); border-top: 1px solid var(--border-subtle); text-align: center;">
      <a href="index.html#projects" class="btn btn-secondary btn-lg">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: ${currentLang === 'ar' ? 'scaleX(-1)' : 'none'}"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        <span>${backText}</span>
      </a>
    </div>
  `;
}

/* ==========================================================================
   Interactive Lightbox
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector(".lightbox-close");

  const close = () => {
    lightbox.classList.remove("active");
  };

  closeBtn?.addEventListener("click", close);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      close();
    }
  });
}

function openLightbox(url, caption) {
  const lightbox = document.getElementById("imageLightbox");
  const imgEl = document.getElementById("lightboxImg");
  const capEl = document.getElementById("lightboxCaption");

  if (!lightbox || !imgEl) return;

  imgEl.src = url;
  if (capEl) capEl.textContent = caption || "";
  lightbox.classList.add("active");
}

window.openLightbox = openLightbox;
