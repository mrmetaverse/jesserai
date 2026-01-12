import type { Metadata } from 'next'
import { Lora, Zeyada } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
import StructuredData from '@/components/StructuredData'
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
  metadataBase: new URL('https://jesserai.vercel.app'),
  title: {
    default: 'JesseRai Salon | Premium Hair Salon in Annapolis, MD',
    template: '%s | JesseRai Salon',
  },
  description: 'High-quality, affordable hair salon in Annapolis, Maryland. Expert styling, coloring, cuts, highlights, balayage, and nail services. Located at 108 Old Solomons Island Rd near Harbor Center. Book with Jessica Angell and team.',
  keywords: [
    'hair salon Annapolis MD',
    'Annapolis hair salon',
    'hair stylist Annapolis',
    'balayage Annapolis',
    'hair color Annapolis',
    'highlights Annapolis',
    'haircut Annapolis',
    'nail salon Annapolis',
    'Jessica Angell stylist',
    'JesseRai Salon',
    'Harbor Center salon',
    'Old Solomons Island Road salon',
    'affordable hair salon Maryland',
    'best hair salon Annapolis',
    'manicure Annapolis',
    'pedicure Annapolis',
  ],
  authors: [{ name: 'Jessica Angell' }],
  creator: 'JesseRai Salon',
  publisher: 'JesseRai Salon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/examplelogo1.png',
    apple: '/examplelogo1.png',
  },
  openGraph: {
    title: 'JesseRai Salon | Premium Hair Salon in Annapolis, MD',
    description: 'High-quality, affordable hair salon in Annapolis. Expert styling, coloring, and nail services by Jessica Angell and team.',
    url: 'https://jesserai.vercel.app',
    siteName: 'JesseRai Salon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/jesse.jpg',
        width: 800,
        height: 1067,
        alt: 'Jessica Angell - Owner of JesseRai Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JesseRai Salon | Premium Hair Salon in Annapolis, MD',
    description: 'High-quality, affordable hair salon in Annapolis, Maryland.',
    images: ['/jesse.jpg'],
  },
  alternates: {
    canonical: 'https://jesserai.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${zeyada.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
