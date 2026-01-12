import styles from './Services.module.css'

const hairServices = [
  {
    category: 'Haircuts & Styling',
    items: [
      { name: "Women's Cut & Style", price: 'From $65', description: 'Transform your look with precision cuts and expert styling' },
      { name: "Men's Cut", price: 'From $45', description: 'Classic and contemporary cuts for the modern gentleman' },
      { name: "Bang Trim", price: '$15', description: 'Quick refresh between full cuts' },
      { name: "Blowout Styling", price: 'From $45', description: 'Professional styling for any occasion' },
    ]
  },
  {
    category: 'Color Services',
    items: [
      { name: 'Full Color', price: 'From $90', description: 'Rich, vibrant all-over color with premium products' },
      { name: 'Partial Highlights', price: 'From $110', description: 'Dimensional highlights to brighten your look' },
      { name: 'Full Highlights', price: 'From $145', description: 'Complete highlight coverage for maximum impact' },
      { name: 'Balayage', price: 'From $165', description: 'Hand-painted highlights for natural, sun-kissed color' },
      { name: 'Color Correction', price: 'Consultation Required', description: 'Expert correction for previous color mishaps' },
      { name: 'Gloss Treatment', price: 'From $45', description: 'Add shine and tone to refresh your color' },
    ]
  },
  {
    category: 'Texture & Treatments',
    items: [
      { name: 'Keratin Treatment', price: 'From $250', description: 'Smooth, frizz-free hair for months' },
      { name: 'Deep Conditioning Treatment', price: 'From $35', description: 'Intensive hydration and repair' },
      { name: 'Perms & Waves', price: 'From $125', description: 'Create lasting curls and body' },
    ]
  },
  {
    category: 'Special Occasions',
    items: [
      { name: 'Updo Styling', price: 'From $85', description: 'Elegant updos for weddings and special events' },
      { name: 'Bridal Hair', price: 'From $150', description: 'Complete bridal hair services including trial' },
      { name: 'Special Event Styling', price: 'From $75', description: 'Look stunning for any occasion' },
    ]
  }
]

const nailServices = [
  {
    category: 'Manicures',
    items: [
      { name: 'Classic Manicure', price: '$35', description: 'Shape, buff, cuticle care, and polish' },
      { name: 'Gel Manicure', price: '$55', description: 'Long-lasting gel polish with no dry time' },
      { name: 'French Manicure', price: '$45', description: 'Timeless French tips, classic or gel' },
    ]
  },
  {
    category: 'Pedicures',
    items: [
      { name: 'Classic Pedicure', price: '$50', description: 'Complete foot care with massage and polish' },
      { name: 'Spa Pedicure', price: '$70', description: 'Luxurious treatment with scrub and mask' },
      { name: 'Gel Pedicure', price: '$65', description: 'Long-lasting gel polish for toes' },
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.intro}>
          Premium hair and nail services for the Annapolis community
        </p>

        <div className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>Hair Services</h3>
          {hairServices.map((category, idx) => (
            <div key={idx} className={styles.categorySection}>
              <h4 className={styles.subCategoryTitle}>{category.category}</h4>
              <div className={styles.serviceGrid}>
                {category.items.map((service, index) => (
                  <div key={index} className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                      <span className={styles.serviceName}>{service.name}</span>
                      <span className={styles.servicePrice}>{service.price}</span>
                    </div>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>Nail Services</h3>
          {nailServices.map((category, idx) => (
            <div key={idx} className={styles.categorySection}>
              <h4 className={styles.subCategoryTitle}>{category.category}</h4>
              <div className={styles.serviceGrid}>
                {category.items.map((service, index) => (
                  <div key={index} className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                      <span className={styles.serviceName}>{service.name}</span>
                      <span className={styles.servicePrice}>{service.price}</span>
                    </div>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.consultationNote}>
          <p>
            <strong>First time with us?</strong> We recommend booking a complimentary consultation 
            to discuss your hair goals and find the perfect service for you.
          </p>
        </div>
      </div>
    </section>
  )
}
