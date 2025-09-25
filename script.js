// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);

  // Add click animation
  themeToggle.style.transform = "scale(0.95)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 150);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = mobileMenuToggle.querySelector("i");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuIcon.className = navLinks.classList.contains("open")
    ? "fas fa-times"
    : "fas fa-bars";
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuIcon.className = "fas fa-bars";
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 120; // Increased offset for better clearance
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Scroll to Top Button
const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Click Animation Effect
document.querySelectorAll(".click-animation").forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 600);
  });
});

// Observe value numbers for simple fade-in animation (no counter needed)
const valueObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animated");
        // Simple fade-in animation for value numbers
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(20px)";
        entry.target.style.transition = "all 0.8s ease";

        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 200);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".value-number").forEach((number) => {
  valueObserver.observe(number);
});

// Hover Effects for Service Cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Team Cards Hover Effect
document.querySelectorAll(".team-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const avatar = this.querySelector(".team-avatar");
    avatar.style.transform = "scale(1.1) rotate(5deg)";
  });

  card.addEventListener("mouseleave", function () {
    const avatar = this.querySelector(".team-avatar");
    avatar.style.transform = "scale(1) rotate(0deg)";
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero::before");
  const speed = scrolled * 0.5;

  if (scrolled < window.innerHeight) {
    document.querySelector(".hero").style.transform = `translateY(${speed}px)`;
  }
});

// Loading Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Animate hero content
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.animation = "fadeInUp 1s ease-out";
});

// Navbar Active Link Highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;
    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
            .nav-links a.active {
                color: var(--secondary) !important;
            }
            .nav-links a.active::after {
                width: 100% !important;
            }
        `;
document.head.appendChild(style);

// Form Submission Handling (if contact form is added)
function handleFormSubmission(formElement) {
  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      submitButton.textContent = "Message Sent!";
      submitButton.style.background = "var(--accent)";

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = "";
        this.reset();
      }, 2000);
    }, 1500);
  });
}

// Initialize any contact forms
document.querySelectorAll("form").forEach(handleFormSubmission);

// Keyboard Navigation Support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu
    navLinks.classList.remove("open");
    menuIcon.className = "fas fa-bars";
  }
});

// Performance Optimization - Debounce Scroll Events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events for better performance
const debouncedScrollHandler = debounce(() => {
  // Navbar scroll effect
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll to top button
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Add some interactive easter eggs
let clickCount = 0;
document.querySelector(".logo").addEventListener("click", (e) => {
  e.preventDefault();
  clickCount++;

  if (clickCount === 5) {
    // Easter egg - create floating particles
    createFloatingParticles();
    clickCount = 0;
  }
});

function createFloatingParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: var(--accent);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    animation: float-particle 3s ease-out forwards;
                `;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 3000);
  }
}

// Add the floating particle animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
            @keyframes float-particle {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(0);
                }
            }
        `;
document.head.appendChild(particleStyle);

console.log("🎉 Divine Systems website loaded successfully!");
console.log("💡 Tip: Click the logo 5 times for a surprise!");
