'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Chatbot from '@/components/Chatbot'
import Footer from '@/components/Footer'
import styles from './home.module.css'

const primaryLinks = [
  {
    href: '/bookings',
    icon: '📅',
    title: 'Book Now',
    description: 'Schedule your appointment online',
    color: 'accent'
  },
  {
    href: '/services',
    icon: '✂️',
    title: 'Our Services',
    description: 'Hair, color, and nail services',
    color: 'default'
  },
  {
    href: '/photos',
    icon: '📸',
    title: 'Client Gallery',
    description: 'Share with #jesseraisalon for $5 off',
    color: 'default'
  }
]

const secondaryLinks = [
  { href: '/about', icon: '◆', title: 'About', description: 'Our story' },
  { href: '/team', icon: '◇', title: 'Our Team', description: 'Meet our stylists' },
  { href: '/apply', icon: '◈', title: 'Careers', description: 'Join us' },
  { href: '/contact', icon: '◉', title: 'Contact', description: 'Get in touch' },
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Primary Actions */}
        <section className={styles.primaryActions}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get Started</h2>
            <div className={styles.primaryGrid}>
              {primaryLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className={`${styles.primaryCard} ${link.color === 'accent' ? styles.accentCard : ''}`}
                >
                  <span className={styles.cardIcon}>{link.icon}</span>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.locationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Visit Us in Annapolis</h2>
            <p className={styles.locationText}>
              108 Old Solomons Island Rd #L1, Annapolis, MD 21401
            </p>
            <div className={styles.locationGrid}>
              <div className={styles.hours}>
                <h3>Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hourRow}>
                    <span>Tuesday - Friday</span>
                    <span>9am - 7pm</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Saturday</span>
                    <span>9am - 5pm</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Sunday - Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <div className={styles.mapWrapper}>
                <Map />
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Links */}
        <section className={styles.secondaryLinks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore More</h2>
            <div className={styles.secondaryGrid}>
              {secondaryLinks.map((link, index) => (
                <Link key={index} href={link.href} className={styles.secondaryCard}>
                  <span className={styles.secondaryIcon}>{link.icon}</span>
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}

