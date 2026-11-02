/**
 * Mahmoud Khairy Portfolio - Internationalization (i18n) Engine
 * Pure Vanilla JavaScript (ES6+)
 * Supports full English and Arabic localization with automatic RTL/LTR toggling.
 */

const translations = {
  en: {
    // Branding & Site Identity
    site_name: "Mahmoud Khairy",
    site_title_tag: "Mahmoud Khairy | Data Analyst & Data Specialist",
    loading_text: "Loading project case study...",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cv: "Download CV",
    cv_print: "View & Print CV",
    lang_toggle: "العربية",

    // Hero Section
    hero_badge: "Available for Data Analyst & Specialist Roles",
    hero_greeting: "Hello, I am",
    hero_name: "Mahmoud Khairy",
    hero_title: "Data Analyst & Data Specialist",
    hero_tagline: "Bridging the gap between raw figures and strategic decisions. Specializing in Power BI dashboards, SQL Server data warehouses, Python exploratory analytics, and automated data pipelines.",
    hero_cta_projects: "Explore Projects",
    hero_cta_contact: "Get in Touch",
    hero_stat_projects: "12+ Projects",
    hero_stat_projects_desc: "End-to-end analytical solutions",
    hero_stat_tech: "Multi-Tool",
    hero_stat_tech_desc: "Power BI, SQL, Python, Excel",
    hero_stat_quality: "Production Ready",
    hero_stat_quality_desc: "Clean schemas & verified data",

    // About Section
    about_badge: "Profile",
    about_title: "About Me",
    about_subtitle: "Turning complex datasets into clear, actionable business narratives",
    about_bio_p1: "I am a passionate, results-driven Data Analyst and Data Specialist with extensive hands-on experience in extracting, modeling, analyzing, and visualizing data from diverse sources.",
    about_bio_p2: "My background spans end-to-end analytical workflows: from building Medallion-architecture data warehouses in SQL Server to developing high-impact Power BI executive dashboards featuring Market Basket Analysis and What-If forecasting simulators. I also build automated web scrapers and predictive machine learning models in Python.",
    about_bio_p3: "I focus on delivering actionable clarity—empowering leadership teams with data-backed confidence, streamlining operational reporting cycles, and discovering untapped revenue opportunities.",
    about_info_location_label: "Location:",
    about_info_location: "Egypt (Available for On-site & Remote worldwide)",
    about_info_email_label: "Email:",
    about_info_role_label: "Primary Focus:",
    about_info_role: "BI Dashboards, DWH Architecture, Exploratory Analytics",
    about_info_availability_label: "Status:",
    about_info_availability: "Open to Full-time, Contract & Freelance roles",

    // Skills Section
    skills_badge: "Expertise",
    skills_title: "Skills & Technologies",
    skills_subtitle: "A proven toolkit spanning data engineering, visual analytics, and machine learning",
    skills_cat_bi: "Business Intelligence & Reporting",
    skills_cat_db: "Database Systems & Engineering",
    skills_cat_programming: "Programming & Data Science",
    skills_cat_scraping: "Data Extraction & Automation",
    skills_cat_methodologies: "Analytical Methodologies",

    // Experience Section
    exp_badge: "Career",
    exp_title: "Work Experience",
    exp_subtitle: "Practical industry experience driving business value through data",
    exp_menwer_role: "Data Specialist",
    exp_menwer_company: "Menwer",
    exp_menwer_period: "Professional Experience",
    exp_menwer_badge: "Full-Time",
    exp_menwer_p1: "Oversee operational data integrity, reporting pipelines, and standardized data collection protocols across organizational departments.",
    exp_menwer_p2: "Design structured data audits to eliminate discrepancies, identify process inefficiencies, and validate multi-system data flows.",
    exp_menwer_p3: "Collaborate closely with cross-functional managers to translate operational needs into clear analytical indicators and automated summaries.",

    exp_codveda_role: "Data Analyst Intern",
    exp_codveda_company: "Codveda Technologies",
    exp_codveda_period: "Internship Program",
    exp_codveda_badge: "Internship",
    exp_codveda_p1: "Conducted deep-dive Exploratory Data Analysis (EDA) on commercial datasets to uncover performance trends, customer patterns, and anomalies.",
    exp_codveda_p2: "Built interactive dashboards using Power BI and Excel to communicate analytical findings to senior team members.",
    exp_codveda_p3: "Authored reusable Python scripts and SQL queries for data cleansing, aggregation, and automated preprocessing.",

    // Projects Section
    proj_badge: "Portfolio",
    proj_title: "Featured Projects",
    proj_subtitle: "Real, verified projects directly from my GitHub repositories",
    proj_filter_all: "All Projects",
    proj_filter_bi: "Power BI & BI",
    proj_filter_python: "Python & ML",
    proj_filter_sql: "SQL & Data Engineering",
    proj_filter_scraping: "Web Scraping & Automation",
    proj_search_placeholder: "Search projects by name, tool, or keyword...",
    proj_view_details: "Case Study & Details",
    proj_github_code: "Source Code",
    proj_no_results: "No projects match your search criteria.",

    // Education & Certifications
    edu_badge: "Credentials",
    edu_title: "Education & Certifications",
    edu_subtitle: "Academic background and continuous professional development",
    edu_degree_title: "Higher Education in Data & Information Systems",
    edu_degree_institution: "University Studies",
    edu_degree_desc: "Rigorous coursework emphasizing database management, computer science principles, mathematical statistics, and quantitative decision analysis.",
    cert_1_title: "Enterprise Power BI & Advanced DAX",
    cert_1_org: "Specialized BI Training",
    cert_1_desc: "Star-schema dimensional modeling, complex calculation groups, row-level security (RLS), and custom analytical measures.",
    cert_2_title: "Relational Database Design & T-SQL Mastery",
    cert_2_org: "SQL Server & Database Architecture",
    cert_2_desc: "ACID transactions, indexing strategies, stored procedures, ETL pipelines, and Medallion architecture.",
    cert_3_title: "Python for Data Science & Machine Learning",
    cert_3_org: "Data Science Specialization",
    cert_3_desc: "Pandas, NumPy, data wrangling, feature engineering, classification and regression modeling with Scikit-learn.",

    // Contact Section
    contact_badge: "Get in Touch",
    contact_title: "Let's Work Together",
    contact_subtitle: "Have an analytical project, dashboard request, or role opportunity? Send a message.",
    contact_email_title: "Direct Email",
    contact_linkedin_title: "LinkedIn Profile",
    contact_github_title: "GitHub Repositories",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email Address",
    contact_form_subject: "Subject",
    contact_form_message: "Your Message",
    contact_form_send: "Send Message",
    contact_form_sending: "Sending...",
    contact_form_success: "Thank you! Your message has been prepared.",

    // Footer
    footer_rights: "All Rights Reserved.",
    footer_copy: "© 2026 Mahmoud Khairy. All Rights Reserved.",
    footer_tech_note: "Engineered with semantic HTML5, modern CSS3, and Vanilla JavaScript (ES6+). Zero frameworks.",
    footer_back_to_top: "Back to top",

    // Project Detail Page
    detail_back: "Back to all projects",
    detail_overview: "Project Overview",
    detail_business_problem: "Business Problem & Objective",
    detail_tools: "Tools & Technologies Used",
    detail_implementation: "Implementation & Architecture",
    detail_findings: "Key Findings & Business Impact",
    detail_gallery: "Screenshots & Dashboards",
    detail_view_repo: "View on GitHub",
    detail_next_project: "Next Project",
    detail_prev_project: "Previous Project",
    detail_not_found: "Project not found.",
    detail_not_found_desc: "The requested project could not be found or has been moved."
  },

  ar: {
    // Branding & Site Identity
    site_name: "محمود خيري",
    site_title_tag: "محمود خيري | محلل بيانات وأخصائي بيانات",
    loading_text: "جاري تحميل تفاصيل ودراسة المشروع...",

    // Navigation
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_education: "التعليم",
    nav_contact: "تواصل معي",
    nav_cv: "تحميل السيرة الذاتية",
    cv_print: "عرض وطباعة السيرة",
    lang_toggle: "English",

    // Hero Section
    hero_badge: "متاح لفرص العمل كأخصائي ومحلل بيانات",
    hero_greeting: "أهلاً بك، أنا",
    hero_name: "محمود خيري",
    hero_title: "محلل بيانات وأخصائي بيانات",
    hero_tagline: "تحويل البيانات والأرقام المعقدة إلى رؤى استراتيجية تدعم اتخاذ القرارات. متخصص في لوحات باور بي آي التفاعلية، ومستودعات بيانات SQL Server، والتحليلات الاستكشافية ببايثون، وخطوط الأتمتة.",
    hero_cta_projects: "استكشف المشاريع",
    hero_cta_contact: "تواصل معي الآن",
    hero_stat_projects: "+12 مشروعاً",
    hero_stat_projects_desc: "حلول تحليلية متكاملة وموثقة",
    hero_stat_tech: "أدوات متقدمة",
    hero_stat_tech_desc: "Power BI, SQL, Python, Excel",
    hero_stat_quality: "جاهز للإنتاج",
    hero_stat_quality_desc: "نماذج بيانات دقيقة ونتائج مثبتة",

    // About Section
    about_badge: "الملف التعريفي",
    about_title: "نبذة عني",
    about_subtitle: "شغف عميق بتحويل البيانات الصامتة إلى حلول وقرارات تجارية تصنع الفارق",
    about_bio_p1: "أنا محمود خيري، محلل بيانات وأخصائي بيانات أتمتع بشغف كبير وخبرة عملية متقدمة في استخراج البيانات ونمذجتها وتحليلها وبناء لوحات المتابعة التفاعلية لمختلف المجالات.",
    about_bio_p2: "تغطي خبرتي دورة حياة التحليل كاملة: بدءاً من تصميم مستودعات البيانات وفق معمارية الميدالية (Medallion) على SQL Server، وحتى تطوير لوحات تحكم تنفيذية على Power BI تشمل تحليل سلة المشتريات (Market Basket Analysis) ونماذج المحاكاة التقديرية (What-If). كما أمتلك مهارات واسعة في سحب البيانات آلياً (Web Scraping) ونمذجة التعلم الآلي ببايثون.",
    about_bio_p3: "أركز دائماً على تقديم قيمة ملموسة ووضوح رقمي تام—مما يمكن الإدارة من اتخاذ قراراتها بثقة، واختصار أوقات التقارير الدورية، واكتشاف فرص النمو الكامنة خلف الأرقام.",
    about_info_location_label: "الموقع:",
    about_info_location: "مصر (متاح للعمل الحضوري وعن بُعد عالمياً)",
    about_info_email_label: "البريد الإلكتروني:",
    about_info_role_label: "مجال التركيز الأساسي:",
    about_info_role: "لوحات ذكاء الأعمال، معمارية مستودعات البيانات، التحليل الاستكشافي",
    about_info_availability_label: "الحالة المهنية:",
    about_info_availability: "متاح للوظائف بدوام كامل، والعقود، والمشاريع المستقلة",

    // Skills Section
    skills_badge: "المهارات التقنية",
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "منظومة أدوات متكاملة تشمل هندسة البيانات، والتحليل المرئي، وتعلم الآلة",
    skills_cat_bi: "ذكاء الأعمال والتقارير التفاعلية",
    skills_cat_db: "أنظمة قواعد البيانات وهندستها",
    skills_cat_programming: "البرمجة وعلوم البيانات",
    skills_cat_scraping: "سحب البيانات والأتمتة الرقمية",
    skills_cat_methodologies: "المنهجيات والممارسات التحليلية",

    // Experience Section
    exp_badge: "المسار المهني",
    exp_title: "الخبرات العملية",
    exp_subtitle: "تطبيق عملي مباشر في بيئات العمل لتحقيق أقصى استفادة من البيانات",
    exp_menwer_role: "أخصائي بيانات (Data Specialist)",
    exp_menwer_company: "منور (Menwer)",
    exp_menwer_period: "خبرة مهنية",
    exp_menwer_badge: "دوام كامل",
    exp_menwer_p1: "الإشراف على دقة وسلامة البيانات التشغيلية، ومتابعة تدفقات التقارير، وتطبيق معايير جمع وتوثيق البيانات بين مختلف الأقسام.",
    exp_menwer_p2: "إجراء عمليات تدقيق وتدقيق منتظمة للبيانات للقضاء على التعارضات، واكتشاف جوانب القصور التشغيلي، وضمان تكامل الأنظمة.",
    exp_menwer_p3: "التنسيق الوثيق مع القيادات وفرق العمل لتحويل المتطلبات التشغيلية إلى مؤشرات أداء رقمية وتقارير تلخيصية مؤتمتة.",

    exp_codveda_role: "متدرب تحليل بيانات (Data Analyst Intern)",
    exp_codveda_company: "كودفيدا تكنولوجيز (Codveda Technologies)",
    exp_codveda_period: "برنامج تدريب مهني",
    exp_codveda_badge: "تدريب عملي",
    exp_codveda_p1: "إجراء تحليلات استكشافية متعمقة (EDA) على مجموعات بيانات تجارية حقيقية لاكتشاف اتجاهات الأداء وسلوكيات العملاء.",
    exp_codveda_p2: "بناء لوحات تفاعلية باستخدام Power BI و Excel لعرض النتائج التحليلية ومناقشتها مع المشرفين وأعضاء الفريق.",
    exp_codveda_p3: "كتابة سكربتات بايثون واستعلامات SQL قابلة لإعادة الاستخدام لمعالجة وتنقية البيانات وتجهيزها للتحليل.",

    // Projects Section
    proj_badge: "معرض الأعمال",
    proj_title: "أبرز المشاريع",
    proj_subtitle: "مشاريع عملية أصلية وموثقة مستخرجة مباشرة من حسابي على GitHub",
    proj_filter_all: "جميع المشاريع",
    proj_filter_bi: "باور بي آي وذكاء الأعمال",
    proj_filter_python: "بايثون وتعلم الآلة",
    proj_filter_sql: "قواعد البيانات وهندستها",
    proj_filter_scraping: "سحب البيانات والأتمتة",
    proj_search_placeholder: "ابحث في المشاريع بالاسم، الأداة، أو الكلمة المفتاحية...",
    proj_view_details: "تفاصيل ودراسة المشروع",
    proj_github_code: "الكود المصدري",
    proj_no_results: "لم يتم العثور على مشاريع تطابق معايير البحث.",

    // Education & Certifications
    edu_badge: "المؤهلات والشهادات",
    edu_title: "التعليم والشهادات المهنية",
    edu_subtitle: "تأهيل أكاديمي وتطوير مهني مستمر لمواكبة أحدث تقنيات البيانات",
    edu_degree_title: "دراسات جامعية في البيانات ونظم المعلومات",
    edu_degree_institution: "التعليم الأكاديمي الجامعي",
    edu_degree_desc: "مسار دراسي متكامل ركز على تصميم وإدارة قواعد البيانات، ومبادئ علوم الحاسب، والإحصاء الرياضي، والتحليل الكمي للقرارات.",
    cert_1_title: "احتراف Power BI وصيغ DAX المتقدمة",
    cert_1_org: "تدريب متخصص في ذكاء الأعمال",
    cert_1_desc: "النمذجة النجمية (Star Schema)، ومجموعات العمليات الحسابية المعقدة، وأمان البيانات على مستوى الصف (RLS).",
    cert_2_title: "تصميم قواعد البيانات العلائقية وإتقان T-SQL",
    cert_2_org: "معمارية SQL Server وقواعد البيانات",
    cert_2_desc: "معاملات ACID، وإجراءات التخزين، واستراتيجيات الفهرسة، وأنابيب ETL، ومعمارية الميدالية لمستودعات البيانات.",
    cert_3_title: "بايثون لعلوم البيانات وتعلم الآلة",
    cert_3_org: "تخصص علوم البيانات والذكاء الاصطناعي",
    cert_3_desc: "مكتبات Pandas و NumPy، وتنظيف البيانات، وهندسة المتغيرات، وتدريب نماذج التصنيف والانحدار مع Scikit-learn.",

    // Contact Section
    contact_badge: "تواصل معي",
    contact_title: "لنبدأ العمل معاً",
    contact_subtitle: "هل لديك مشروع تحليلي، طلب لوحة تحكم، أو فرصة عمل مناسبة؟ يسعدني تواصلك دائماً.",
    contact_email_title: "البريد الإلكتروني المباشر",
    contact_linkedin_title: "حساب LinkedIn",
    contact_github_title: "حساب GitHub",
    contact_form_name: "الاسم الكريم",
    contact_form_email: "البريد الإلكتروني",
    contact_form_subject: "الموضوع",
    contact_form_message: "رسالتك",
    contact_form_send: "إرسال الرسالة",
    contact_form_sending: "جاري الإرسال...",
    contact_form_success: "شكراً لك! تم تجهيز رسالتك بنجاح.",

    // Footer
    footer_rights: "جميع الحقوق محفوظة.",
    footer_copy: "© 2026 محمود خيري. جميع الحقوق محفوظة.",
    footer_tech_note: "تم البناء باستخدام HTML5 دلالي، و CSS3 حديث، و Vanilla JavaScript (ES6+). بدون أي أطر عمل خارجية.",
    footer_back_to_top: "العودة للأعلى",

    // Project Detail Page
    detail_back: "العودة لجميع المشاريع",
    detail_overview: "نظرة عامة على المشروع",
    detail_business_problem: "المشكلة التجارية والهدف",
    detail_tools: "الأدوات والتقنيات المستخدمة",
    detail_implementation: "مراحل التنفيذ والمعمارية",
    detail_findings: "أبرز النتائج والأثر التجاري",
    detail_gallery: "معرض الصور واللوحات التفاعلية",
    detail_view_repo: "عرض المستودع على GitHub",
    detail_next_project: "المشروع التالي",
    detail_prev_project: "المشروع السابق",
    detail_not_found: "المشروع غير موجود.",
    detail_not_found_desc: "تعذر العثور على المشروع المطلوب أو ربما تم نقله."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("mk_portfolio_lang") || "en";
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupListeners();
  }

  getLang() {
    return this.currentLang;
  }

  getText(key) {
    const langDict = translations[this.currentLang] || translations.en;
    return langDict[key] || translations.en[key] || key;
  }

  applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    this.currentLang = lang;
    localStorage.setItem("mk_portfolio_lang", lang);

    const isRtl = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRtl);
    document.body.classList.toggle("ltr", !isRtl);

    // Update text elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = this.getText(key);
      if (text) {
        el.textContent = text;
      }
    });

    // Update placeholder attributes with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = this.getText(key);
      if (text) {
        el.setAttribute("placeholder", text);
      }
    });

    // Update language switcher buttons text
    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.textContent = lang === "en" ? "العربية" : "English";
      btn.setAttribute("aria-label", lang === "en" ? "Switch to Arabic" : "Switch to English");
    });

    // Update browser title if not on individual project detail page
    if (!window.location.pathname.includes("project.html")) {
      document.title = this.getText("site_title_tag");
    }

    // Dispatch event so other components can react
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === "en" ? "ar" : "en";
    this.applyLanguage(nextLang);
  }

  setupListeners() {
    document.addEventListener("click", (e) => {
      const target = e.target.closest(".lang-switch-btn");
      if (target) {
        e.preventDefault();
        this.toggleLanguage();
      }
    });
  }
}

// Global instance
window.i18n = new I18nManager();
