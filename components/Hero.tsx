import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
          aria-hidden="true"
        >
          <source src="/bwwalk.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Welcome to</h2>
        <h1 className={styles.title}>JesseRai</h1>
        <p className={styles.tagline}>
          Premium Hair Care in the Heart of Annapolis
        </p>
        <p className={styles.description}>
          High-quality styling and exceptional service at prices that work for our local community
        </p>
        <a href="#contact" className={styles.cta}>
          Book Your Appointment
        </a>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </section>
  )
}
