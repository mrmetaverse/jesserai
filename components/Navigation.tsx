'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button 
          onClick={() => scrollToSection('home')}
          className={styles.logo}
          aria-label="JesseRai Salon Home"
        >
          <img src="/examplelogo1.png" alt="JesseRai Logo" className={styles.logoImage} />
          <h2>JesseRai</h2>
        </button>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li>
            <button onClick={() => scrollToSection('services')}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <a href="/team">
              Our Team
            </a>
          </li>
          <li>
            <a href="/apply">
              Apply Now
            </a>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
