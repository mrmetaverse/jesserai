'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import styles from './services.module.css'

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className={styles.servicesPage}>
        <div className={styles.hero}>
          <h1>Our Services</h1>
          <p className={styles.subtitle}>
            Premium hair and nail care services for the Annapolis community
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </>
  )
}
