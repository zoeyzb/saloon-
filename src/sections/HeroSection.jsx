import { ArrowDownRight, Play, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" data-parallax>
        <img
          className="hero-bg-img"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=82"
          srcSet="
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=720&q=76 720w,
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80 1200w,
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=82 1800w
          "
          sizes="100vw"
          fetchPriority="high"
          decoding="async"
          alt=""
        />
      </div>
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="hero-frame" />

      <div className="hero-copy">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .05 }}
        >
          Luxury salon · beauty · wellness
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9, delay: .12, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span>MORE THAN</span>
          <span><em>BEAUTY.</em></span>
        </motion.h1>

        <motion.div
          className="hero-subcopy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .75, delay: .28 }}
        >
          <p>Precision artistry, private rituals and thoughtful care — built around the person already in the chair.</p>
          <div className="hero-actions">
            <a className="primary magnetic" href="#contact">Book appointment <ArrowDownRight size={17}/></a>
            <a className="secondary" href="#about"><Play size={14} fill="currentColor"/> Enter the atelier</a>
          </div>
        </motion.div>
      </div>

      <motion.aside
        className="hero-card"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8, delay: .38 }}
      >
        <div className="hero-card__top">
          <span>Private appointment</span>
          <Sparkles size={15}/>
        </div>
        <strong>A slower, more considered kind of beauty.</strong>
        <p>Hair · skin · nails · bridal</p>
        <div className="hero-card__rule"/>
        <small>01 / KARINÉ ATELIER</small>
      </motion.aside>

      <div className="hero-rail" aria-hidden="true">
        <span>01</span>
        <span>Scroll to discover</span>
      </div>
    </section>
  )
}
