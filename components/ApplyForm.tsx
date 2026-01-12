'use client'

import { useState } from 'react'
import styles from './ApplyForm.module.css'

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your application! We will be in touch soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.formSection}>
      <h3>Apply Now</h3>
      <p className={styles.formIntro}>
        Fill out the form below and attach your resume. We look forward to hearing from you!
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="position">Position Applying For *</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select a position</option>
              <option value="stylist">Hair Stylist</option>
              <option value="colorist">Colorist</option>
              <option value="nail-tech">Nail Technician</option>
              <option value="assistant">Salon Assistant</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="experience">Years of Experience *</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 5 years"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Tell Us About Yourself *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Share your experience, skills, and why you want to join JesseRai..."
            required
          />
        </div>

        <div className={styles.formNote}>
          <p>
            <strong>Next Steps:</strong> Please email your resume to{' '}
            <a href="mailto:careers@jesserai.com">careers@jesserai.com</a> after 
            submitting this form, or bring it with you to the salon.
          </p>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  )
}
