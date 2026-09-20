import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from './components/navigation/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import PricingSection from './sections/PricingSection'
import GallerySection from './sections/GallerySection'
import ReviewsSection from './sections/ReviewsSection'
import StorySection from './sections/StorySection'
import BookingSection from './sections/BookingSection'
import FooterSection from './sections/FooterSection'

const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))

function AtelierFallback() {
  return (
    <section id="about" className="experience experience--fallback">
      <div className="atelier-fallback" aria-hidden="true">
        <i className="atelier-pedestal"/>
        <i className="atelier-bottle atelier-bottle--a"/>
        <i className="atelier-bottle atelier-bottle--b"/>
        <i className="atelier-ring"/>
      </div>
      <div className="experience-spotlight"/>
      <div className="experience-title"><span>BEAUTY</span><em>IN MOTION.</em></div>
      <div className="product-note"><span>01 / KARINĒ ATELIER</span><strong>Ritual objects</strong><p>Interactive product study.</p></div>
      <p className="experience-copy">A tactile salon experience built around confidence, craft and the quiet ritual of being looked after.</p>
    </section>
  )
}

function DeferredExperience() {
  const gate = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const activate = () => setActive(true)
    const idleId = 'requestIdleCallback' in window
      ? window.requestIdleCallback(activate, { timeout: 1600 })
      : window.setTimeout(activate, 650)

    const node = gate.current
    const observer = node ? new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) activate()
    }, { rootMargin: '700px 0px' }) : null

    if (node && observer) observer.observe(node)

    return () => {
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      else clearTimeout(idleId)
      observer?.disconnect()
    }
  }, [])

  return (
    <div ref={gate} className="experience-gate">
      {active ? (
        <Suspense fallback={<AtelierFallback/>}>
          <ExperienceSection />
        </Suspense>
      ) : <AtelierFallback/>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <DeferredExperience />
        <PricingSection />
        <GallerySection />
        <ReviewsSection />
        <StorySection />
        <BookingSection />
      </main>
      <FooterSection />
    </>
  )
}