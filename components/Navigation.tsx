'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
        <Link 
          href="/"
          className={styles.logo}
          aria-label="JesseRai Salon Home"
        >
          <img src={logoTextSrc} alt="JesseRai" className={styles.logoText} />
        </Link>

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
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/bookings">
              Book Now
            </Link>
          </li>
          <li>
            <Link href="/photos">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
