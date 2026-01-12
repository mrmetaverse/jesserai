import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.ownerSection}>
          <div className={styles.ownerImage}>
            <img src="/jesse.jpg" alt="Jessica Angell" />
          </div>
          <div className={styles.ownerInfo}>
            <h2 className={styles.title}>Meet Jessica Angell</h2>
            <h3 className={styles.ownerTitle}>Owner & Master Stylist</h3>
            <p>
              With years of experience and a passion for the art of hair, Jessica founded 
              JesseRai to bring high-quality, affordable salon services to the Annapolis community.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Located in the heart of Annapolis, JesseRai brings a fresh approach to hair care. 
              Our salon combines premium quality services with accessible pricing, making 
              exceptional hair care available to our entire community.
            </p>
            <p>
              Founded by Jessica Angell, a passionate stylist with years of experience, 
              JesseRai is built on the belief that everyone deserves to look and feel their best. 
              We have taken over the beloved location formerly occupied by Raymond Salon at 108 Old Solomons Island Road.
            </p>
            <p>
              Our team is dedicated to creating a welcoming atmosphere where clients feel 
              comfortable, heard, and valued. We stay current with the latest techniques and 
              trends while honoring timeless, classic styles.
            </p>
            <h4>Why Choose JesseRai?</h4>
            <ul>
              <li>Experienced, professional stylists</li>
              <li>Premium products and techniques</li>
              <li>Affordable pricing for locals</li>
              <li>Personalized consultations</li>
              <li>Welcoming, relaxing atmosphere</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
