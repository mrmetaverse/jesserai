'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/app/context/ThemeContext'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoTextSrc = mounted && theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="/">
            <img src="/examplelogo1.png" alt="JesseRai Logo" className={styles.logoImage} />
            <img src={logoTextSrc} alt="JesseRai" className={styles.logoText} />
          </a>
          <p>Annapolis, Maryland</p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkSection}>
            <h4>Salon</h4>
            <a href="/services">Services</a>
            <a href="/bookings">Book Appointment</a>
            <a href="/about">About Us</a>
            <a href="/team">Our Team</a>
          </div>

          <div className={styles.linkSection}>
            <h4>Company</h4>
            <a href="/apply">Careers</a>
            <a href="/contact">Contact</a>
            <a href="/press">Press</a>
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
          <p className={styles.credit}>Made with love by Jesse Alton @ Virgent AI</p>
        </div>
      </div>
    </footer>
  )
}
