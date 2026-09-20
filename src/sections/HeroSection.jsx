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
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger:{trigger:root.current,start:'top top',end:'+=125%',scrub:true,pin:true,anticipatePin:1}
      })
      .to('.hero-bg',{scale:1.08,ease:'none'},0)
      .to('.hero-copy',{y:-44,opacity:.22,ease:'none'},0)
      .to('.hero-glass',{x:80,y:-20,opacity:.35,ease:'none'},0)
      .to('.hero-frame',{scale:1.06,borderRadius:'2rem',ease:'none'},.25)
      .to('.hero-stats',{y:-24,opacity:0,ease:'none'},.5)
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero-bg" />
      <div className="hero-vignette" />
      <div className="hero-frame" />
      <div className="hero-copy">
        <span className="eyebrow">Luxury salon & wellness</span>
        <h1><span>MORE</span><span>THAN BEAUTY.</span></h1>
        <h2>A More Confident You.</h2>
        <p>At Kariné, expert artistry, premium care and a considered luxury experience come together around your most confident, authentic self.</p>
        <div className="hero-actions">
          <a className="primary" href="#contact">Book Your Appointment <ArrowDownRight size={17}/></a>
          <a className="secondary" href="#about"><Play size={14} fill="currentColor"/> Watch Our Story</a>
        </div>
        <div className="hero-trust">
          <div className="avatar-stack" aria-hidden="true"><i/><i/><i/><i/></div>
          <span>Trusted by 10,000+ happy clients</span>
        </div>
      </div>
      <div className="hero-glass">
        <span>Private Ritual</span>
        <strong>Beauty, considered.</strong>
        <p>Quiet detail, warm light, deliberate care.</p>
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
