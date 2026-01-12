'use client'

import { useState } from 'react'
import styles from './BookingCalendar.module.css'

const stylists = [
  { id: 1, name: 'Jessica Angell', specialty: 'Owner & Master Stylist' },
  { id: 2, name: 'Maria Rodriguez', specialty: 'Color Specialist' },
  { id: 3, name: 'Taylor Chen', specialty: 'Precision Cuts' },
  { id: 4, name: 'Sam Williams', specialty: 'Nail Technician' },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
]

const services = [
  { id: 1, name: 'Haircut & Style', duration: '60 min' },
  { id: 2, name: 'Color Service', duration: '90 min' },
  { id: 3, name: 'Highlights', duration: '120 min' },
  { id: 4, name: 'Manicure', duration: '45 min' },
  { id: 5, name: 'Pedicure', duration: '60 min' },
]

// Mock booked slots (stylist_id + date + time combinations)
const bookedSlots = new Set([
  '1-2026-01-13-10:00 AM',
  '1-2026-01-13-2:00 PM',
  '2-2026-01-14-11:00 AM',
  '3-2026-01-13-3:00 PM',
])

export default function BookingCalendar() {
  const [selectedStylist, setSelectedStylist] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const dates = generateDates()

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const isSlotBooked = (stylistId: number, date: string, time: string) => {
    return bookedSlots.has(`${stylistId}-${date}-${time}`)
  }

  const handleBooking = () => {
    if (selectedStylist && selectedService && selectedDate && selectedTime) {
      alert(`Booking confirmed!\n\nStylist: ${stylists.find(s => s.id === selectedStylist)?.name}\nService: ${services.find(s => s.id === selectedService)?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nThis is a demo booking. In production, this will be saved to the database.`)
    } else {
      alert('Please select a stylist, service, date, and time.')
    }
  }

  return (
    <div className={styles.bookingCalendar}>
      {/* Step 1: Select Service */}
      <div className={styles.section}>
        <h3>1. Select Service</h3>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <button
              key={service.id}
              className={`${styles.serviceCard} ${selectedService === service.id ? styles.selected : ''}`}
              onClick={() => setSelectedService(service.id)}
            >
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.serviceDuration}>{service.duration}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Stylist */}
      <div className={styles.section}>
        <h3>2. Select Stylist</h3>
        <div className={styles.stylistGrid}>
          {stylists.map((stylist) => (
            <button
              key={stylist.id}
              className={`${styles.stylistCard} ${selectedStylist === stylist.id ? styles.selected : ''}`}
              onClick={() => setSelectedStylist(stylist.id)}
            >
              <div className={styles.stylistAvatar}>
                {stylist.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className={styles.stylistInfo}>
                <span className={styles.stylistName}>{stylist.name}</span>
                <span className={styles.stylistSpecialty}>{stylist.specialty}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Select Date */}
      <div className={styles.section}>
        <h3>3. Select Date</h3>
        <div className={styles.dateScroll}>
          {dates.map((date, index) => (
            <button
              key={index}
              className={`${styles.dateCard} ${selectedDate === formatDate(date) ? styles.selected : ''}`}
              onClick={() => setSelectedDate(formatDate(date))}
            >
              <span className={styles.dateDay}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
              <span className={styles.dateNumber}>{date.getDate()}</span>
              <span className={styles.dateMonth}>{date.toLocaleDateString('en-US', { month: 'short' })}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 4: Select Time */}
      {selectedStylist && selectedDate && (
        <div className={styles.section}>
          <h3>4. Select Time</h3>
          <div className={styles.timeGrid}>
            {timeSlots.map((time, index) => {
              const isBooked = isSlotBooked(selectedStylist, selectedDate, time)
              return (
                <button
                  key={index}
                  className={`${styles.timeSlot} ${selectedTime === time ? styles.selected : ''} ${isBooked ? styles.booked : ''}`}
                  onClick={() => !isBooked && setSelectedTime(time)}
                  disabled={isBooked}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Booking Summary */}
      {selectedStylist && selectedService && selectedDate && selectedTime && (
        <div className={styles.summary}>
          <h3>Booking Summary</h3>
          <div className={styles.summaryContent}>
            <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
            <p><strong>Stylist:</strong> {stylists.find(s => s.id === selectedStylist)?.name}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
          </div>
          <button className={styles.bookButton} onClick={handleBooking}>
            Confirm Booking
          </button>
          <p className={styles.demoNote}>
            This is a demo booking system. In production, bookings will be saved to the database.
          </p>
        </div>
      )}
    </div>
  )
}
