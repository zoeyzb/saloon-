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

const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))

function DeferredExperience() {
  const gate = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = gate.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true)
        observer.disconnect()
      }
    }, { rootMargin: '500px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={gate} className="experience-gate">
      {active ? (
        <Suspense fallback={<div className="experience-loading"><span>KARINĒ</span><b>Preparing the atelier</b></div>}>
          <ExperienceSection />
        </Suspense>
      ) : (
        <div className="experience-loading"><span>KARINĒ</span><b>Beauty in motion</b></div>
      )}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useLenis()

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
