import { useState, useEffect } from 'react'

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.clientHeight
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute('id')
        }
      })
      if (current) {
        setActiveLink(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 120
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }

  const handleThemeToggle = () => {
    toggleTheme()
    // Add click animation
    const button = document.querySelector('.theme-toggle')
    if (button) {
      button.style.transform = 'scale(0.95)'
      setTimeout(() => {
        button.style.transform = 'scale(1)'
      }, 150)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, '#home')}>
          Divine Systems
        </a>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="navLinks">
          {['home', 'about', 'services', 'team', 'value', 'contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={activeLink === link ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, `#${link}`)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
