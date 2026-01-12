'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Footer has dark background, so we use white text in light mode and black text in dark mode (inverted)
  const logoTextSrc = mounted && theme === 'dark' ? '/examplelogotextblack1.png' : '/examplelogotextwhite1.png'

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">
            <img src="/examplelogo1.png" alt="JesseRai Logo" className={styles.logoImage} />
            <img src={logoTextSrc} alt="JesseRai" className={styles.logoText} />
          </Link>
          <div className={styles.address}>
            <p>108 Old Solomons Island Rd #L1</p>
            <p>Annapolis, MD 21401</p>
            <p className={styles.formerly}>(Formerly Raymond Salon)</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkSection}>
            <h4>Salon</h4>
            <Link href="/services">Services</Link>
            <Link href="/bookings">Book Appointment</Link>
            <Link href="/photos">Gallery</Link>
            <Link href="/about">About Us</Link>
            <Link href="/team">Our Team</Link>
          </div>

          <div className={styles.linkSection}>
            <h4>Company</h4>
            <Link href="/apply">Careers</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/press">Press</Link>
          </div>

          <div className={styles.linkSection}>
            <h4>Connect</h4>
            <a href="https://www.facebook.com/littlejhiggs/photos" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/jesseraihair" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} JesseRai Salon. All rights reserved.</p>
          <p>Owner: Jessica Angell</p>
          <p className={styles.credit}>
            Made with 💜 by{' '}
            <a href="https://alton.tech" target="_blank" rel="noopener noreferrer">
              Jesse Alton
            </a>
            {' '}@{' '}
            <a href="https://virgent.ai/" target="_blank" rel="noopener noreferrer">
              Virgent AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
