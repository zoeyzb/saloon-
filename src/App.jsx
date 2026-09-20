import { useState } from 'react'
import Navbar from './components/navigation/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ExperienceSection from './sections/ExperienceSection'
import PricingSection from './sections/PricingSection'
import GallerySection from './sections/GallerySection'
import ReviewsSection from './sections/ReviewsSection'
import StorySection from './sections/StorySection'
import BookingSection from './sections/BookingSection'
import FooterSection from './sections/FooterSection'
import useLenis from './hooks/useLenis'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useLenis()

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
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
