'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/app/context/ThemeContext'
import styles from './LogoComparison.module.css'

export default function LogoComparison() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h3 className={styles.title}>Logo Option for Review</h3>
        <p className={styles.note}>
          We are currently using Logo 1 throughout the site. Here is Logo 2 as an alternative option for your consideration.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.option}>
            <div className={styles.preview}>
              <div className={styles.logoBox}>
                <img src="/examplelogo1.png" alt="Logo 1 (Current)" />
                {mounted && (
                  <img 
                    src={theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'} 
                    alt="JesseRai" 
                    className={styles.logoText}
                  />
                )}
              </div>
            </div>
            <p className={styles.label}>Logo 1 (Current)</p>
            <p className={styles.usage}>Used throughout the site</p>
          </div>

          <div className={styles.option}>
            <div className={styles.preview}>
              <div className={styles.logoBox}>
                <img src="/examplelogo2.png" alt="Logo Option 2" />
                {mounted && (
                  <img 
                    src={theme === 'dark' ? '/examplelogotextwhite1.png' : '/examplelogotextblack1.png'} 
                    alt="JesseRai" 
                    className={styles.logoText}
                  />
                )}
              </div>
            </div>
            <p className={styles.label}>Logo 2 (Alternative)</p>
            <p className={styles.usage}>Available option</p>
          </div>
        </div>
      </div>
    </section>
  )
}
