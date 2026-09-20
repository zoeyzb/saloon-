import { useEffect, useRef } from 'react'
import { ArrowDownRight, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useReducedMotion from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const root = useRef()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || window.innerWidth < 768) return
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger:{trigger:root.current,start:'top top',end:'+=85%',scrub:.5,pin:true,anticipatePin:1}
      })
      .to('.hero-bg-img',{scale:1.045,ease:'none'},0)
      .to('.hero-copy',{y:-26,opacity:.34,ease:'none'},0)
      .to('.hero-glass',{x:36,y:-12,opacity:.45,ease:'none'},0)
      .to('.hero-stats',{y:-12,opacity:.2,ease:'none'},.35)
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero-bg">
        <img
          className="hero-bg-img"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=82"
          srcSet="
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=720&q=78 720w,
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
      <div className="hero-frame" />
      <div className="hero-copy">
        <span className="eyebrow">Luxury salon & wellness</span>
        <h1><span>MORE</span><span>THAN BEAUTY.</span></h1>
        <h2>A More Confident You.</h2>
        <p>Expert artistry, premium care and a quieter kind of luxury — designed around the person you already are.</p>
        <div className="hero-actions">
          <a className="primary" href="#contact">Book Your Appointment <ArrowDownRight size={17}/></a>
          <a className="secondary" href="#about"><Play size={14} fill="currentColor"/> Discover Kariné</a>
        </div>
        <div className="hero-trust">
          <div className="avatar-stack" aria-hidden="true"><i/><i/><i/><i/></div>
          <span>Trusted by 10,000+ happy clients</span>
        </div>
      </div>
      <div className="hero-glass">
        <span>Private Ritual</span>
        <strong>Beauty, considered.</strong>
        <p>Quiet detail. Warm light. Deliberate care.</p>
      </div>
      <div className="hero-stats">
        {[
          ['01','Expert Stylists'],
          ['02','Premium Products'],
          ['03','Luxury Experience'],
          ['04','A More Confident You'],
        ].map(([n,t]) => <div key={n}><span>{n}</span><strong>{t}</strong></div>)}
      </div>
    </section>
  )
}
