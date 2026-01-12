'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from './contact.module.css'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className={styles.contactPage}>
        <div className={styles.hero}>
          <h1>Get In Touch</h1>
          <p className={styles.subtitle}>
            We would love to hear from you
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
