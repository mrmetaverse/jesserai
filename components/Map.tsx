import styles from './Map.module.css'

interface MapProps {
  className?: string
}

export default function Map({ className }: MapProps) {
  const address = "108 Old Solomons Island Rd #L1, Annapolis, MD 21401"
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5!2d-76.5!3d38.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU4JzEzLjIiTiA3NsKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=108+Old+Solomons+Island+Rd+%23L1%2C+Annapolis%2C+MD+21401`
  
  return (
    <div className={`${styles.mapContainer} ${className || ''}`}>
      <div className={styles.mapWrapper}>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JesseRai Salon Location"
        ></iframe>
      </div>
      <a 
        href={`https://www.google.com/maps/dir//${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.directionsLink}
      >
        Get Directions →
      </a>
    </div>
  )
}
