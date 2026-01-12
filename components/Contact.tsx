import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Visit Us</h2>
        <p className={styles.subtitle}>
          Ready for a fresh new look? We would love to see you.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3>Location</h3>
            <p>
              108 Old Solomons Island Rd #L1<br />
              Annapolis, MD 21401
            </p>
            <p className={styles.note}>
              Formerly Raymond Salon
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Hours</h3>
            <p>
              Tuesday - Friday: 9am - 7pm<br />
              Saturday: 9am - 5pm<br />
              Sunday - Monday: Closed
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Contact</h3>
            <p>
              Phone: (410) 555-HAIR<br />
              Email: hello@jesserai.com
            </p>
            <p className={styles.note}>
              Walk-ins welcome, appointments preferred
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h4>Book Your Appointment Today</h4>
          <p>Call us or stop by to schedule your visit</p>
          <a href="tel:410555-4247" className={styles.phoneButton}>
            (410) 555-HAIR
          </a>
        </div>

        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <div className={styles.linkGrid}>
            <Link href="/bookings" className={styles.quickLink}>
              📅 Book Online
            </Link>
            <Link href="/team" className={styles.quickLink}>
              👥 Meet Our Team
            </Link>
            <Link href="/apply" className={styles.quickLink}>
              💼 Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
