# Mahmoud Khairy — Bilingual Data Analyst & Data Specialist Portfolio

[![Live Site](https://img.shields.io/badge/Live_Portfolio-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://imaginative-capybara-41bedc.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-KHairy2233-181717?style=flat&logo=github&logoColor=white)](https://github.com/KHairy2233)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mahmoud_Khairy-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahmoud-khairy-44189b354)
[![Email](https://img.shields.io/badge/Email-mahkar908%40gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:mahkar908@gmail.com)

A high-performance, responsive bilingual (English & Arabic) personal portfolio website for **Mahmoud Khairy**, Data Analyst & Data Specialist.

Built purely with **HTML5, CSS3, and Vanilla JavaScript (ES6+)** with zero framework dependencies.

---

## 🌟 Key Features

- **🌐 Full Bilingual Support:** Seamless English (LTR) and Arabic (RTL) language switcher with local storage persistence.
- **🎨 Modern Dark Theme:** Custom design with deep navy backgrounds, cyan glowing accents, and squircle layered portrait composition.
- **📊 Dynamic Project Engine:**
  - 14 verified real-world analytics and automation projects.
  - Interactive category filtering (Business Intelligence, Python Analytics, SQL & Warehousing, Web Scraping & AI Automation).
  - Live client-side instant project search.
  - Dedicated individual project detail pages with interactive image galleries, KPI metrics, business problems, and GitHub repository links.
- **⚡ Zero External Frameworks:** Pure semantic HTML5, CSS3 Custom Properties, and ES6+ JavaScript. Fast loading and accessible.
- **📱 Fully Responsive:** Optimized fluid layouts across mobile (375px+), tablet (768px), and large desktop viewports.
- **📄 Interactive & Printable CV:** Integrated printable CV (`cv/cv-print.html`) and direct PDF download.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript (ES6+)
- **Data Layer:** Structured JSON (`assets/data/projects.json`) with embedded bundle fallback (`assets/js/projects-bundle.js`)
- **Hosting & Deployment:** Netlify (configured via `netlify.toml`, `_headers`, and `_redirects`)
- **Version Control:** Git & GitHub

---

## 📂 Project Directory Structure

```text
portfolio/
├── index.html                 # Main single-page portfolio (EN & AR)
├── project.html               # Dynamic project detail page template
├── 404.html                   # Custom 404 error page
├── netlify.toml               # Netlify configuration & security headers
├── _headers                   # HTTP response & security headers
├── _redirects                 # Client-side routing redirects
├── README.md                  # Project documentation
├── .gitignore                 # Ignored files for version control
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens, palette, and typography
│   │   ├── base.css           # CSS reset and global element styling
│   │   ├── layout.css         # Grid layouts, hero squircle, and sections
│   │   ├── components.css     # Buttons, cards, pills, modal, and forms
│   │   └── animations.css     # Smooth fade-in, glow pulses, and transitions
│   ├── js/
│   │   ├── i18n.js            # Bilingual dictionary (English & Arabic)
│   │   ├── data.js            # Unified async data provider
│   │   ├── projects.js        # Projects grid renderer, filter, and search
│   │   ├── project-detail.js  # Project detail page controller
│   │   ├── projects-bundle.js # Embedded offline data fallback
│   │   └── main.js            # Navigation, smooth scroll, and theme/UI logic
│   ├── data/
│   │   └── projects.json      # Complete dataset of 14 projects
│   └── images/
│       ├── me/                # Profile photo & avatar assets
│       └── projects/          # High-resolution project dashboards & screenshots
└── cv/
    ├── Mahmoud_Khairy_CV.pdf  # Authoritative latest curriculum vitae
    └── cv-print.html          # Clean web-printable resume template
```

---

## 🚀 Local Development

Since this project requires no build tools or package managers, you can run it locally with any static HTTP server:

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 2: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 👤 Contact & Profile

- **Name:** Mahmoud Khairy Ramadan
- **Role:** Data Analyst & Data Specialist
- **Location:** Cairo, Egypt
- **Email:** [mahkar908@gmail.com](mailto:mahkar908@gmail.com)
- **Phone:** +20 112 702 2267
- **LinkedIn:** [linkedin.com/in/mahmoud-khairy-44189b354](https://www.linkedin.com/in/mahmoud-khairy-44189b354)
- **GitHub:** [github.com/KHairy2233](https://github.com/KHairy2233)

---

© 2026 Mahmoud Khairy. All Rights Reserved.
