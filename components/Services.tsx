import styles from './Services.module.css'

const services = [
  {
    title: 'Haircuts & Styling',
    description: 'Expert cuts and styles for all hair types, from classic to contemporary looks that complement your lifestyle.',
  },
  {
    title: 'Color Services',
    description: 'Full color, highlights, balayage, and color correction using premium products for vibrant, lasting results.',
  },
  {
    title: 'Treatments',
    description: 'Deep conditioning, keratin treatments, and restorative services to keep your hair healthy and beautiful.',
  },
  {
    title: 'Special Occasions',
    description: 'Updos, styling for weddings, proms, and special events. Let us make your day unforgettable.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.intro}>
          Exceptional hair care services tailored to bring out your best look
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
