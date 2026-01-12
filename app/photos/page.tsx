'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import styles from './photos.module.css'

export default function PhotosPage() {
  return (
    <>
      <Navigation />
      <main className={styles.photosPage}>
        <div className={styles.hero}>
          <h1>Client Gallery</h1>
          <p className={styles.subtitle}>
            See the beautiful transformations from our talented team
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.promotion}>
            <div className={styles.promoCard}>
              <h2>Share & Save!</h2>
              <div className={styles.hashtag}>#jesseraisalon</div>
              <p className={styles.promoText}>
                Post your gorgeous new look on Instagram or Facebook with <strong>#jesseraisalon</strong> and 
                get <strong>$5 off</strong> your next haircut or nail service!
              </p>
              <div className={styles.promoSteps}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>1</span>
                  <p>Get your hair or nails done at JesseRai</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  <p>Post your photo with #jesseraisalon</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  <p>Show us your post at your next visit</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>4</span>
                  <p>Enjoy $5 off your service!</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3>Follow Us</h3>
            <div className={styles.linkGrid}>
              <a 
                href="https://www.facebook.com/littlejhiggs/photos" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <span className={styles.icon}>📘</span>
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/jesseraihair" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <span className={styles.icon}>📸</span>
                <span>Instagram</span>
              </a>
            </div>
            <p className={styles.followNote}>
              Tag us in your posts and use <strong>#jesseraisalon</strong> to be featured in our gallery 
              and receive your discount!
            </p>
          </div>

          <div className={styles.galleryPlaceholder}>
            <div className={styles.placeholderContent}>
              <h3>Gallery Coming Soon</h3>
              <p>
                We are building our community gallery featuring beautiful transformations from our clients. 
                Start tagging us with <strong>#jesseraisalon</strong> and your photos will appear here!
              </p>
              <p className={styles.note}>
                In the meantime, visit our{' '}
                <a href="https://www.facebook.com/littlejhiggs/photos" target="_blank" rel="noopener noreferrer">
                  Facebook page
                </a>{' '}
                to see our latest work.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}
