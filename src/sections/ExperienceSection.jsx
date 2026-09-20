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
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.timeline({scrollTrigger:{trigger:root.current,start:'top top',end:'+=120%',scrub:true,pin:true}})
        .fromTo('.experience-title',{y:90,opacity:0},{y:-50,opacity:1,ease:'none'})
        .fromTo('.experience-copy',{y:40,opacity:0},{y:-15,opacity:1,ease:'none'},.25)
        .to('.experience-canvas',{scale:1.12,ease:'none'},0)
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="about" className="experience" ref={root}>
      <div className="experience-canvas"><SalonScene/></div>
      <div className="experience-title">
        <span>BEAUTY</span>
        <em>IN MOTION.</em>
      </div>
      <p className="experience-copy">A tactile salon experience built around confidence, craft, and the quiet ritual of being looked after.</p>
    </section>
  )
}
