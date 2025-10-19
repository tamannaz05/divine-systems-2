import { useEffect } from 'react'

const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all sections
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section)
    })

    // Value numbers animation
    const valueObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('animated')
          ) {
            entry.target.classList.add('animated')
            entry.target.style.opacity = '0'
            entry.target.style.transform = 'translateY(20px)'
            entry.target.style.transition = 'all 0.8s ease'

            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, 200)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('.value-number').forEach((number) => {
      valueObserver.observe(number)
    })

    return () => {
      observer.disconnect()
      valueObserver.disconnect()
    }
  }, [])
}

export default useScrollAnimations
