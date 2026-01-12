'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/app/context/ThemeContext'
import styles from './Hero.module.css'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoTextSrc = mounted && theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
          aria-hidden="true"
        >
          <source src="/bwwalk.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Welcome to</h2>
        <div className={styles.logoContainer}>
          <img src={logoTextSrc} alt="JesseRai" className={styles.heroLogoText} />
        </div>
        <p className={styles.tagline}>
          Premium Hair Care in the Heart of Annapolis
        </p>
        <p className={styles.description}>
          High-quality styling and exceptional service at prices that work for our local community
        </p>
        <a href="/bookings" className={styles.cta}>
          Book Your Appointment
        </a>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </section>
  )
}
