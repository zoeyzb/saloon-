import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SalonScene from '../components/three/SalonScene'
import useReducedMotion from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceSection() {
  const root = useRef()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || window.innerWidth < 768) return
    const ctx = gsap.context(() => {
      gsap.timeline({scrollTrigger:{trigger:root.current,start:'top top',end:'+=80%',scrub:.5,pin:true}})
        .fromTo('.experience-title',{y:55,opacity:.45},{y:-24,opacity:1,ease:'none'})
        .fromTo('.experience-copy',{y:20,opacity:.15},{y:-8,opacity:1,ease:'none'},.08)
        .fromTo('.product-note',{x:24,opacity:0},{x:0,opacity:1,ease:'none'},.2)
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="about" className="experience" ref={root}>
      <div className="experience-canvas"><SalonScene/></div>
      <div className="experience-spotlight"/>
      <div className="experience-title">
        <span>BEAUTY</span>
        <em>IN MOTION.</em>
      </div>
      <div className="product-note">
        <span>01 / KARINĒ ATELIER</span>
        <strong>Ritual objects</strong>
        <p>Formulated as part of the experience, not decoration.</p>
      </div>
      <p className="experience-copy">A tactile salon experience built around confidence, craft and the quiet ritual of being looked after.</p>
    </section>
  )
}
