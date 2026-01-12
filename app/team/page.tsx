'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './team.module.css'

const teamMembers = [
  {
    name: 'Jessica Angell',
    title: 'Owner & Master Stylist',
    bio: 'With years of experience and a passion for the art of hair, Jessica founded JesseRai to bring high-quality, affordable salon services to the Annapolis community. Her expertise spans cutting-edge color techniques, precision cuts, and creating personalized looks that enhance each client\'s natural beauty. Jessica believes that everyone deserves to feel confident and beautiful, and she has built JesseRai on the foundation of exceptional service, artistry, and genuine care for every guest who walks through our doors.',
    specialties: ['Color Specialist', 'Precision Cuts', 'Balayage Expert', 'Bridal Styling'],
    image: '/jesse.jpg',
  },
]

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className={styles.teamPage}>
        <div className={styles.hero}>
          <h1>Meet Our Team</h1>
          <p className={styles.subtitle}>
            The talented professionals behind JesseRai
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.intro}>
            <p>
              At JesseRai, our team is our greatest asset. We are passionate professionals 
              dedicated to providing exceptional service and creating beautiful results. 
              Get to know the people who will help you look and feel your best.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <div className={styles.memberImage}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={styles.photo} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h2>{member.name}</h2>
                  <h3 className={styles.memberTitle}>{member.title}</h3>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <div className={styles.specialties}>
                    <h4>Specialties</h4>
                    <ul>
                      {member.specialties.map((specialty, idx) => (
                        <li key={idx}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.joinTeam}>
            <h3>Join Our Growing Team</h3>
            <p>
              We are always looking for talented, passionate professionals to join the JesseRai family.
            </p>
            <a href="/apply" className={styles.applyButton}>
              View Open Positions
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
