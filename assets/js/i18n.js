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
    hero_stat_projects: "14 Projects",
    hero_stat_projects_desc: "End-to-End Analytical Solutions",
    hero_stat_tech: "150K+ Records",
    hero_stat_tech_desc: "Analyzed & Modeled (Python & SQL)",
    hero_stat_quality: "2 Departments",
    hero_stat_quality_desc: "Data Audits & KPI Reporting (Menwer)",

    // About Section
    about_badge: "Profile",
    about_title: "About Me",
    about_subtitle: "Turning complex operational datasets into clear, actionable business narratives",
    about_bio_p1: "I am Mahmoud Khairy, a results-driven Data Analyst and Data Specialist skilled in Python, SQL, Power BI, Excel, and Tableau. I possess comprehensive hands-on expertise spanning the complete data lifecycle: data cleaning, exploratory data analysis (EDA), data modeling, dashboard development, data warehousing, and predictive analytics.",
    about_bio_p2: "I have built 14 end-to-end projects, including an enterprise Medallion-architecture SQL Server data warehouse, retail and supply chain analytics platforms, and machine learning models. Currently serving as a Data Specialist at Menwer, I oversee operational data integrity across two departments, conduct rigorous data audits to resolve multi-system tracking anomalies, and deliver executive KPI reports to management.",
    about_bio_p3: "My technical capabilities span 5 core pillars: Data Analysis, Business Intelligence, Data Management & Operations, Analytics Engineering, and AI Automation. I focus on delivering data-backed clarity that empowers leadership teams, streamlines recurring reporting cycles, and uncovers actionable revenue opportunities.",
    about_info_location_label: "Location:",
    about_info_location: "Cairo, Egypt (Available for On-site & Remote worldwide)",
    about_info_email_label: "Email:",
    about_info_phone_label: "Phone:",
    about_info_phone: "+20 112 702 2267",
    about_info_role_label: "Primary Focus:",
    about_info_role: "Data Analyst & Data Specialist",
    about_info_availability_label: "Status:",
    about_info_availability: "Open to Full-time, Contract & Freelance roles",

    // Skills Section
    skills_badge: "Expertise",
    skills_title: "Skills & Technologies",
    skills_subtitle: "A proven toolkit spanning business intelligence, database engineering, data science, and automation",
    skills_cat_bi: "Business Intelligence & Reporting",
    skills_cat_db: "Database Systems & Analytics Engineering",
    skills_cat_programming: "Data Analysis & Programming",
    skills_cat_mgmt: "Data Management & Operations",
    skills_cat_scraping: "Web Scraping & AI Automation",
    skills_cat_methodologies: "Analytical Methodologies & Business Focus",

    // Experience Section
    exp_badge: "Career",
    exp_title: "Work Experience",
    exp_subtitle: "Practical industry experience driving business value through data",
    exp_menwer_role: "Data Specialist",
    exp_menwer_company: "Menwer",
    exp_menwer_period: "Oct 2026 – Present",
    exp_menwer_badge: "Full-Time",
    exp_menwer_p1: "Oversee data integrity and standardized data collection across 2 departments.",
    exp_menwer_p2: "Run data audits to resolve tracking anomalies and multi-system discrepancies.",
    exp_menwer_p3: "Maintain and update the operational data sheet with accurate records.",
    exp_menwer_p4: "Deliver weekly KPI reports to the manager on performance and key trends.",

    exp_codveda_role: "Data Analyst Intern",
    exp_codveda_company: "Codveda Technologies",
    exp_codveda_period: "Jun 2026 – Jul 2026",
    exp_codveda_badge: "Remote Internship",
    exp_codveda_p1: "Analyzed 150,000+ records using Python, Pandas, and SQL to find sales trends.",
    exp_codveda_p2: "Developed 5+ interactive Power BI and Excel dashboards for team reviews.",
    exp_codveda_p3: "Cleaned data and performed EDA with reusable Python and SQL scripts.",

    // Projects Section
    proj_badge: "Portfolio",
    proj_title: "Featured Projects",
    proj_subtitle: "14 real, verified projects directly from my GitHub repositories",
    proj_filter_all: "All Projects (14)",
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
    edu_subtitle: "Academic degree and verified industry certifications",
    edu_degree_title: "Bachelor of Computer Science",
    edu_degree_institution: "Egyptian E-Learning University",
    edu_degree_period: "2022 – 2026",
    edu_degree_desc: "Rigorous academic curriculum emphasizing computer science principles, database design and administration, software architecture, data structures, algorithms, and quantitative decision statistics.",
    cert_1_title: "Data Analysis Certificate",
    cert_1_org: "Neuro Tech",
    cert_1_desc: "Comprehensive practical data analysis covering data exploration (EDA), data cleaning, statistical evaluation, and executive insight generation.",
    cert_2_title: "Data Analysis Certificate",
    cert_2_org: "Mazen Analytics",
    cert_2_desc: "Specialized training focused on business intelligence dashboards, dimensional modeling, and performance metric evaluation.",
    cert_3_title: "Data Analysis Certificate",
    cert_3_org: "Skillera",
    cert_3_desc: "Hands-on data analytics methodologies, SQL database querying, practical analytics workflows, and business problem-solving.",

    // Contact Section
    contact_badge: "Get in Touch",
    contact_title: "Let's Work Together",
    contact_subtitle: "Have an analytical project, dashboard request, or role opportunity? Send a message.",
    contact_email_title: "Direct Email",
    contact_phone_title: "Phone & WhatsApp",
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
    hero_stat_projects: "14 مشروعاً",
    hero_stat_projects_desc: "حلول تحليلية متكاملة وموثقة",
    hero_stat_tech: "+150 ألف سجل",
    hero_stat_tech_desc: "تحليل وتدقيق ونمذجة (Python & SQL)",
    hero_stat_quality: "قسمان تشغيليان",
    hero_stat_quality_desc: "إدارة وتدقيق سلامة البيانات في منور",

    // About Section
    about_badge: "الملف التعريفي",
    about_title: "نبذة عني",
    about_subtitle: "شغف عميق بتحويل البيانات الصامتة إلى حلول وقرارات تجارية تصنع الفارق",
    about_bio_p1: "أنا محمود خيري، محلل بيانات وأخصائي بيانات أتمتع بشغف كبير وخبرة عملية متقدمة في استخدام Python و SQL و Power BI و Excel و Tableau. أمتلك خبرة عملية متكاملة تغطي دورة حياة البيانات بالكامل: تنظيف البيانات، والتحليل الاستكشافي (EDA)، ونمذجة البيانات، وتطوير لوحات المتابعة التفاعلية، ومستودعات البيانات، والتحليلات التنبؤية.",
    about_bio_p2: "قمت ببناء 14 مشروعاً تحليلياً متكاملاً، بما في ذلك مستودع بيانات متطور بمعمارية الميدالية (Medallion Architecture) على SQL Server، ولوحات تفاعلية لقطاعات التجزئة وسلاسل الإمداد، ونماذج تنبؤية بتعلم الآلة. وأعمل حالياً أخصائي بيانات في شركة منور (Menwer) للإشراف على سلامة وجودة البيانات عبر قسمين، وتنفيذ عمليات تدقيق شاملة لحل تعارضات التتبع بين الأنظمة، وتقديم تقارير مؤشرات الأداء الأسبوعية للإدارة العليا.",
    about_bio_p3: "تتوزع كفاءاتي وخبراتي التقنية عبر 5 محاور رئيسية: تحليل البيانات، وذكاء الأعمال، وإدارة البيانات والعمليات، وهندسة البيانات والتحليلات، والأتمتة بالذكاء الاصطناعي. وأركز دائماً على تحويل البيانات التشغيلية المعقدة إلى رؤى وقرارات تجارية واضحة تمكّن القيادات من اتخاذ قرارات مدروسة وتختصر دورات التقارير وتكشف فرص النمو.",
    about_info_location_label: "الموقع:",
    about_info_location: "القاهرة، مصر (متاح للعمل الحضوري وعن بُعد عالمياً)",
    about_info_email_label: "البريد الإلكتروني:",
    about_info_phone_label: "الهاتف:",
    about_info_phone: "+20 112 702 2267",
    about_info_role_label: "المسمى والتركيز المهني:",
    about_info_role: "محلل بيانات وأخصائي بيانات",
    about_info_availability_label: "الحالة المهنية:",
    about_info_availability: "متاح للوظائف بدوام كامل، والعقود، والمشاريع المستقلة",

    // Skills Section
    skills_badge: "المهارات التقنية",
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "منظومة أدوات متكاملة تشمل ذكاء الأعمال، وهندسة قواعد البيانات، وعلوم البيانات، والأتمتة",
    skills_cat_bi: "ذكاء الأعمال والتقارير التفاعلية",
    skills_cat_db: "أنظمة قواعد البيانات وهندسة التحليلات",
    skills_cat_programming: "البرمجة وتحليل البيانات",
    skills_cat_mgmt: "إدارة البيانات والعمليات التشغيلية",
    skills_cat_scraping: "سحب البيانات والأتمتة بالذكاء الاصطناعي",
    skills_cat_methodologies: "المنهجيات والممارسات التحليلية",

    // Experience Section
    exp_badge: "المسار المهني",
    exp_title: "الخبرات العملية",
    exp_subtitle: "تطبيق عملي مباشر في بيئات العمل لتحقيق أقصى استفادة من البيانات",
    exp_menwer_role: "أخصائي بيانات (Data Specialist)",
    exp_menwer_company: "منور (Menwer)",
    exp_menwer_period: "أكتوبر 2026 – الحاضر",
    exp_menwer_badge: "دوام كامل",
    exp_menwer_p1: "الإشراف على دقة وسلامة البيانات وتوحيد معايير جمعها عبر قسمين تشغيليين.",
    exp_menwer_p2: "إجراء عمليات تدقيق وتدقيق منتظمة للبيانات للقضاء على التعارضات واختلالات التتبع بين الأنظمة المختلفة.",
    exp_menwer_p3: "صيانة وتحديث سجلات البيانات التشغيلية بدقة وموثوقية عالية.",
    exp_menwer_p4: "إعداد وتقديم تقارير أسبوعية متكاملة لمؤشرات الأداء الرئيسية (KPIs) للإدارة حول الأداء وأبرز الاتجاهات.",

    exp_codveda_role: "متدرب تحليل بيانات (Data Analyst Intern)",
    exp_codveda_company: "كودفيدا تكنولوجيز (Codveda Technologies)",
    exp_codveda_period: "يونيو 2026 – يوليو 2026",
    exp_codveda_badge: "تدريب عن بُعد",
    exp_codveda_p1: "تحليل أكثر من 150,000 سجل تجاري باستخدام Python و Pandas و SQL لاستخراج اتجاهات المبيعات.",
    exp_codveda_p2: "تطوير أكثر من 5 لوحات متابعة تفاعلية على Power BI و Excel لعروض ومراجعات فرق العمل.",
    exp_codveda_p3: "تنظيف البيانات وإجراء التحليلات الاستكشافية (EDA) عبر سكربتات واستعلامات بايثون و SQL قابلة لإعادة الاستخدام.",

    // Projects Section
    proj_badge: "معرض الأعمال",
    proj_title: "أبرز المشاريع",
    proj_subtitle: "14 مشروعاً عملياً أصلياً وموثقاً مستخرجاً مباشرة من حسابي على GitHub",
    proj_filter_all: "جميع المشاريع (14)",
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
    edu_subtitle: "تأهيل أكاديمي وشهادات مهنية معتمدة في علوم وتحليل البيانات",
    edu_degree_title: "بكالوريوس علوم الحاسب",
    edu_degree_institution: "الجامعة المصرية للتعلم الإلكتروني الأهلية",
    edu_degree_period: "2022 – 2026",
    edu_degree_desc: "مسار دراسي متكامل ركز على أسس علوم الحاسب، وتصميم وإدارة قواعد البيانات، وهندسة البرمجيات، وهياكل البيانات، والخوارزميات، والإحصاء الرياضي التطبيقي.",
    cert_1_title: "شهادة تحليل البيانات",
    cert_1_org: "نيورو تك (Neuro Tech)",
    cert_1_desc: "شهادة تدريبية عملية في تحليل البيانات تغطي الفحص الاستكشافي، وتنظيف البيانات، والتقييم الإحصائي، وتوليد الرؤى التجارية.",
    cert_2_title: "شهادة تحليل البيانات",
    cert_2_org: "مازن أناليتكس (Mazen Analytics)",
    cert_2_desc: "تدريب متخصص يركز على تصميم لوحات ذكاء الأعمال التفاعلية، والنمذجة البُعدية للبيانات، ومتابعة مؤشرات الأداء.",
    cert_3_title: "شهادة تحليل البيانات",
    cert_3_org: "سكيليرّا (Skillera)",
    cert_3_desc: "شهادة تطبيقية تركز على استعلامات قواعد البيانات بلغة SQL، ومسارات العمل التحليلية، وحل المشكلات التجارية بالبيانات.",

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
