'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingCalendar from '@/components/BookingCalendar'
import Chatbot from '@/components/Chatbot'
import styles from './bookings.module.css'

export default function BookingsPage() {
  return (
    <>
      <Navigation />
      <main className={styles.bookingsPage}>
        <div className={styles.hero}>
          <h1>Book Your Appointment</h1>
          <p className={styles.subtitle}>
            Select your preferred stylist, date, and time
          </p>
        </div>

        <div className={styles.container}>
          <BookingCalendar />
        </div>
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}
