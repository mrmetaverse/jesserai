import type { Metadata } from 'next'
import { Lora, Zeyada } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
import './globals.css'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const zeyada = Zeyada({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zeyada',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JesseRai Salon | Premium Hair Salon in Annapolis, MD',
  description: 'High-quality, affordable hair salon in Annapolis, Maryland. Expert styling, coloring, and hair care services by Jessica Angell and team.',
  keywords: 'hair salon, Annapolis, Maryland, hair styling, hair coloring, Jessica Angell, JesseRai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${zeyada.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
