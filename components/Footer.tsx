import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>JesseRai</h2>
          <p>Annapolis, Maryland</p>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} JesseRai Salon. All rights reserved.</p>
          <p>Owner: Jessica Angell</p>
        </div>
      </div>
    </footer>
  )
}
