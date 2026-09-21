import { ArrowDownRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section id="top" className="hero-x">
      <div className="hero-x__grid" aria-hidden="true" />

      <motion.div
        className="hero-x__portrait"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        data-parallax
      >
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=84"
          srcSet="
            https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=76 720w,
            https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=80 1100w,
            https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1500&q=84 1500w
          "
          sizes="(max-width: 800px) 100vw, 58vw"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <div className="hero-x__shade" />

      <div className="hero-x__copy">
        <motion.span
          className="hero-x__kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .65, delay: .05 }}
        >
          KARINĒ / PRIVATE SALON
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9, delay: .12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>BEAUTY,</span>
          <em>EDITED.</em>
        </motion.h1>

        <motion.div
          className="hero-x__footer"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .75, delay: .28 }}
        >
          <p>Hair, skin, nails and bridal care with the excess removed.</p>
          <a href="#contact" className="hero-x__book">
            Book a private appointment <ArrowDownRight size={16}/>
          </a>
        </motion.div>
      </div>

      <div className="hero-x__stamp" aria-hidden="true">
        <span>01</span>
        <span>Scroll</span>
      </div>
    </section>
  )
}
