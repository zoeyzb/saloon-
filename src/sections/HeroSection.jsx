import { ArrowDownRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section id="top" className="hero hero-v3">
      <div className="hero-v3__media" data-parallax>
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1800&q=82"
          srcSet="
            https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=720&q=76 720w,
            https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80 1200w,
            https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1800&q=82 1800w
          "
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-v3__veil" />

      <div className="hero-v3__content">
        <motion.div
          className="hero-v3__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <span>KARINĒ</span>
          <span>Luxury salon & wellness</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9, delay: .08, ease: [0.22, .61, .36, 1] }}
        >
          BEAUTY<br/>
          <em>WITHOUT THE NOISE.</em>
        </motion.h1>

        <motion.div
          className="hero-v3__bottom"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .22 }}
        >
          <p>Private appointments for hair, skin, nails, bridal and restorative care — precise, calm and entirely considered.</p>
          <a href="#contact" className="primary hero-v3__cta">Book an appointment <ArrowDownRight size={16}/></a>
        </motion.div>
      </div>

      <div className="hero-v3__index" aria-hidden="true">
        <span>01</span>
        <span>KARINĒ / 2026</span>
      </div>
    </section>
  )
}
