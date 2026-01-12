'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className={styles.aboutPage}>
        <div className={styles.hero}>
          <h1>About JesseRai</h1>
          <p className={styles.subtitle}>
            Bringing exceptional hair care to the Annapolis community
          </p>
        </div>
        <About />
      </main>
      <Footer />
    </>
  )
}
