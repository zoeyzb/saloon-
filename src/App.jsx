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
import useLenis from './hooks/useLenis'
import useScrollMotion from './hooks/useScrollMotion'

const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))

function AtelierFallback() {
  return (
    <section id="about" className="atelier-v3 section-pad atelier-v3--fallback">
      <div className="atelier-v3__head">
        <span className="eyebrow">The atelier</span>
        <h2>OBJECTS,<br/><em>LIGHT & TOUCH.</em></h2>
        <p>The digital space mirrors the salon itself: restrained, tactile and intentionally slow.</p>
      </div>
      <div className="atelier-v3__stage atelier-v3__stage--fallback" aria-hidden="true">
        <i className="atelier-pedestal"/>
        <i className="atelier-bottle atelier-bottle--a"/>
        <i className="atelier-bottle atelier-bottle--b"/>
        <i className="atelier-ring"/>
      </div>
    </section>
  )
}

function DeferredExperience() {
  const gate = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const activate = () => setActive(true)
    const node = gate.current
    const observer = node ? new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) activate()
    }, { rootMargin: '900px 0px' }) : null

    if (node && observer) observer.observe(node)

    const idleId = 'requestIdleCallback' in window
      ? window.requestIdleCallback(activate, { timeout: 2200 })
      : window.setTimeout(activate, 1200)

    return () => {
      observer?.disconnect()
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      else clearTimeout(idleId)
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
  useLenis()
  useScrollMotion()

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
