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
    <section id="about" className="atelier-x">
      <div className="atelier-x__copy section-pad">
        <span className="eyebrow">Karinē objects</span>
        <h2>LIGHT.<br/>FORM.<br/><em>RITUAL.</em></h2>
        <p>A small interactive sculpture built from the same ideas as the salon: restraint, polish and tactile contrast.</p>
        <div className="atelier-x__legend">
          <span>01 Chrome</span><span>02 Glass</span><span>03 Warm metal</span>
        </div>
      </div>
      <div className="atelier-x__scene atelier-x__scene--fallback" aria-hidden="true">
        <i className="atelier-ring"/>
        <i className="atelier-pedestal"/>
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
      ? window.requestIdleCallback(activate, { timeout: 1600 })
      : window.setTimeout(activate, 900)

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
