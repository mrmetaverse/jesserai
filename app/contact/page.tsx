'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import Contact from '@/components/Contact'
import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'
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
        <section className={styles.formSection}>
          <div className={styles.container}>
            <ContactForm />
          </div>
        </section>
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <h2 className={styles.mapTitle}>Visit Us</h2>
            <p className={styles.mapSubtitle}>
              108 Old Solomons Island Rd #L1, Annapolis, MD 21401
            </p>
            <Map />
          </div>
        </section>
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}
