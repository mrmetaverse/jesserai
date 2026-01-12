'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './press.module.css'

export default function PressPage() {
  return (
    <>
      <Navigation />
      <main className={styles.pressPage}>
        <div className={styles.hero}>
          <h1>Press & Media</h1>
          <p className={styles.subtitle}>
            News, updates, and coverage about JesseRai Salon
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.intro}>
            <p>
              For press inquiries, media kits, or collaboration opportunities, 
              please contact us at press@jesserai.com
            </p>
          </div>

          <div className={styles.section}>
            <h2>About JesseRai</h2>
            <p>
              JesseRai is a premier hair salon located in the heart of Annapolis, Maryland. 
              Founded by master stylist Jessica Angell, we are dedicated to providing 
              high-quality, affordable hair care services to our local community.
            </p>
            <p>
              We specialize in cuts, color, styling, and nail services, creating a 
              welcoming environment where clients feel valued and beautiful.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Contact Information</h2>
            <p><strong>Location:</strong> 108 Old Solomons Island Rd #L1, Annapolis, MD 21401</p>
            <p><strong>Phone:</strong> (410) 555-HAIR</p>
            <p><strong>Email:</strong> hello@jesserai.com</p>
            <p><strong>Press Inquiries:</strong> press@jesserai.com</p>
          </div>

          <div className={styles.section}>
            <h2>Social Media</h2>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/littlejhiggs/photos" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://www.instagram.com/jesseraihair" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
