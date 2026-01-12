'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LogoComparison from '@/components/LogoComparison'
import Footer from '@/components/Footer'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        
        {/* Quick Links Section */}
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Discover JesseRai</h2>
            <div className={styles.linksGrid}>
              <Link href="/services" className={styles.linkCard}>
                <h3>Our Services</h3>
                <p>Explore our full range of hair and nail care services</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/bookings" className={styles.linkCard}>
                <h3>Book Now</h3>
                <p>Schedule your appointment with us today</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/photos" className={styles.linkCard}>
                <h3>Client Gallery</h3>
                <p>See our work and share yours with #jesseraisalon for $5 off</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/about" className={styles.linkCard}>
                <h3>About Us</h3>
                <p>Learn more about our salon and our story</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/team" className={styles.linkCard}>
                <h3>Our Team</h3>
                <p>Meet the talented professionals behind JesseRai</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/apply" className={styles.linkCard}>
                <h3>Join Our Team</h3>
                <p>Explore career opportunities with us</p>
                <span className={styles.arrow}>→</span>
              </Link>
              
              <Link href="/contact" className={styles.linkCard}>
                <h3>Contact</h3>
                <p>Get in touch with us - we would love to hear from you</p>
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

