import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import LogoComparison from '@/components/LogoComparison'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <LogoComparison />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
