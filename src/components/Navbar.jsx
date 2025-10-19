import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active link based on scroll position
      // For full-screen sections, detect which section is most visible
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      let maxVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const viewportHeight = window.innerHeight;

        // Calculate how much of the section is visible in viewport
        const visibleTop = Math.max(0, sectionTop);
        const visibleBottom = Math.min(viewportHeight, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // If this section is more visible than previous ones, mark it as current
        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActiveLink(current);
      }
    };

    // Initial call to set active link on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    // Special case: Home section should scroll to absolute top (0)
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      // For other sections, scroll to exact section top
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    // Add click animation
    const button = document.querySelector(".theme-toggle");
    if (button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleLinkClick(e, "#home")}
        >
          <img
            src="/logo.png"
            alt="Divine Systems Logo"
            className="logo-image"
          />
          <span className="logo-text">Divine Systems</span>
        </a>
        <ul
          className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
          id="navLinks"
        >
          {["home", "about", "services", "team", "value", "contact"].map(
            (link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={activeLink === link ? "active" : ""}
                  onClick={(e) => handleLinkClick(e, `#${link}`)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`}></i>
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
