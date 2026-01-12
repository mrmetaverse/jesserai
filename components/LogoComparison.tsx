import styles from './LogoComparison.module.css'

export default function LogoComparison() {
  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h3 className={styles.title}>Logo Options for Review</h3>
        <p className={styles.note}>
          We have created two logo placements for you to review. Let us know which style you prefer!
        </p>
        
        <div className={styles.grid}>
          <div className={styles.option}>
            <div className={styles.preview}>
              <div className={styles.logoBox}>
                <img src="/examplelogo1.png" alt="Logo Option 1" />
                <h2>JesseRai</h2>
              </div>
            </div>
            <p className={styles.label}>Option 1</p>
            <p className={styles.usage}>Currently shown in: Navigation & Hero</p>
          </div>

          <div className={styles.option}>
            <div className={styles.preview}>
              <div className={styles.logoBox}>
                <img src="/examplelogo2.png" alt="Logo Option 2" className={styles.inverted} />
                <h2>JesseRai</h2>
              </div>
            </div>
            <p className={styles.label}>Option 2</p>
            <p className={styles.usage}>Currently shown in: Footer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
