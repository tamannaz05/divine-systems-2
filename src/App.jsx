import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Value from './components/Value'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import useTheme from './hooks/useTheme'
import useScrollAnimations from './hooks/useScrollAnimations'

function App() {
  const { theme, toggleTheme } = useTheme()
  useScrollAnimations()

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Team />
      <Value />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
