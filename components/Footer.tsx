'use client'

import { useTheme } from '@/app/context/ThemeContext'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const logoTextSrc = theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src="/examplelogo1.png" alt="JesseRai Logo" className={styles.logoImage} />
          <img src={logoTextSrc} alt="JesseRai" className={styles.logoText} />
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
