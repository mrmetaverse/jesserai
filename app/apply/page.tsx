import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ApplyForm from '@/components/ApplyForm'
import styles from './apply.module.css'

export const metadata = {
  title: 'Join Our Team | JesseRai Salon',
  description: 'Join the JesseRai team. We are looking for passionate, talented stylists and nail technicians to join our growing salon in Annapolis, MD.',
}

export default function ApplyPage() {
  return (
    <>
      <Navigation />
      <main className={styles.applyPage}>
        <div className={styles.hero}>
          <h1>Join Our Team</h1>
          <p className={styles.subtitle}>
            Become part of something special at JesseRai
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.intro}>
            <h2>Why Work at JesseRai?</h2>
            <p>
              We are building a team of passionate, creative professionals who share our commitment 
              to exceptional service and artistry. At JesseRai, you will find a supportive environment 
              where your talents can flourish and your career can grow.
            </p>
          </div>

          <div className={styles.benefits}>
            <h3>What We Offer</h3>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <h4>Competitive Compensation</h4>
                <p>Commission-based pay structure with opportunities for advancement</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Flexible Scheduling</h4>
                <p>Work-life balance with full-time and part-time positions available</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Professional Development</h4>
                <p>Ongoing education and training to advance your skills</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Supportive Culture</h4>
                <p>Work alongside talented professionals in a positive environment</p>
              </div>
            </div>
          </div>

          <div className={styles.positions}>
            <h3>Open Positions</h3>
            <div className={styles.positionList}>
              <div className={styles.position}>
                <h4>Hair Stylist</h4>
                <p>Licensed stylist with expertise in cuts, color, and styling. Passion for customer service and staying current with trends.</p>
              </div>
              <div className={styles.position}>
                <h4>Colorist</h4>
                <p>Experienced in all color techniques including balayage, highlights, and color correction. Strong consultation skills required.</p>
              </div>
              <div className={styles.position}>
                <h4>Nail Technician</h4>
                <p>Licensed nail technician skilled in manicures, pedicures, and gel services. Detail-oriented with excellent customer service.</p>
              </div>
              <div className={styles.position}>
                <h4>Salon Assistant</h4>
                <p>Entry-level position assisting stylists and providing excellent client care. Great opportunity to learn and grow.</p>
              </div>
            </div>
          </div>

          <ApplyForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
