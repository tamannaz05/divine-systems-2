import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector('.hero')
      const speed = scrolled * 0.5

      if (scrolled < window.innerHeight && hero) {
        hero.style.transform = `translateY(${speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCtaClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#services')
    if (target) {
      const headerOffset = 120
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Business Intelligence & Data Engineering Excellence</h1>
        <p>
          Helping clients make better decisions by analyzing structured and
          unstructured data in on-premise and cloud environments. Your trusted
          partner for data migrations and BI solutions.
        </p>
        <a href="#services" className="cta-button click-animation" onClick={handleCtaClick}>
          Discover Our Services
        </a>
      </div>
    </section>
  )
}

export default Hero
