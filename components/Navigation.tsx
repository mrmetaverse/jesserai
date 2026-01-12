'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/app/context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
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

  const logoTextSrc = mounted && theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button 
          onClick={() => scrollToSection('home')}
          className={styles.logo}
          aria-label="JesseRai Salon Home"
        >
          <img src={logoTextSrc} alt="JesseRai" className={styles.logoText} />
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
            <a href="/bookings">
              Book Now
            </a>
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
