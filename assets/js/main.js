/**
 * Mahmoud Khairy Portfolio - Main Application Script
 * Vanilla JavaScript (ES6+)
 * Handles navigation, mobile menu, scroll spy, scroll reveals, and contact form.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollSpy();
  initScrollReveals();
  initContactForm();
});

/* ==========================================================================
   Header & Mobile Navigation
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header background
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close on link click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/* ==========================================================================
   Scroll Spy (Active Navigation Indicator)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}` || href === `index.html#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    { rootMargin: "-25% 0px -65% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   Scroll Reveals (IntersectionObserver)
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value.trim() || "";
    const email = form.elements["email"]?.value.trim() || "";
    const subject = form.elements["subject"]?.value.trim() || "Portfolio Contact Request";
    const message = form.elements["message"]?.value.trim() || "";

    if (!name || !email || !message) {
      alert(window.i18n?.getLang() === "ar" ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill in all required fields.");
      return;
    }

    const mailtoRecipient = "mahkar908@gmail.com";
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${mailtoRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn ? submitBtn.innerHTML : "";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = window.i18n?.getText("contact_form_sending") || "Sending...";
    }

    setTimeout(() => {
      window.location.href = mailtoLink;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = window.i18n?.getText("contact_form_success") || "Message Prepared!";
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          form.reset();
        }, 3500);
      }
    }, 400);
  });
}
