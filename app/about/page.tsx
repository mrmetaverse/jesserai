'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Map from '@/components/Map'
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
        <section className={styles.locationSection}>
          <div className={styles.container}>
            <h2 className={styles.locationTitle}>Find Us</h2>
            <p className={styles.locationAddress}>
              108 Old Solomons Island Rd #L1, Annapolis, MD 21401
            </p>
            <Map />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
