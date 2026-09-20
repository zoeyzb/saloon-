import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, Calendar, X } from 'lucide-react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    n: '01',
    title: 'Hair',
    copy: 'Precision cuts, dimensional colour and restorative treatments shaped around you.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85',
  },
  {
    n: '02',
    title: 'Skin',
    copy: 'High-touch facials and considered rituals designed for luminous, healthy skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85',
  },
  {
    n: '03',
    title: 'Nails',
    copy: 'Editorial detail, immaculate prep and refined finishes without the rushed appointment.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=85',
  },
  {
    n: '04',
    title: 'Wellness',
    copy: 'Slow, restorative care for moments when beauty and wellbeing need to meet.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
  },
]

function SilkSculpture() {
  const group = useRef()
  const ring = useRef()
  const { camera, pointer } = useThree()

  useFrame((state, delta) => {
    const sy = typeof window !== 'undefined' ? window.scrollY : 0
    const progress = Math.min(sy / Math.max(window.innerHeight * 1.6, 1), 1)

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.34 + progress * 1.05, 3.2, delta)
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.12 - progress * 0.18, 3.2, delta)
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, progress * 0.8, 2.5, delta)
      group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, 1 + progress * 0.18, 2.2, delta))
    }

    if (ring.current) ring.current.rotation.z += delta * 0.08

    camera.position.z = THREE.MathUtils.damp(camera.position.z, 5.4 - progress * 1.15, 2.2, delta)
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.18, 3, delta)
  })

  return (
    <group ref={group} position={[1.25, 0.1, 0]}>
      <Float speed={1.5} rotationIntensity={0.16} floatIntensity={0.25}>
        <mesh rotation={[0.25, 0.55, -0.25]} scale={1.16}>
          <torusKnotGeometry args={[1.05, 0.22, 220, 36, 2, 3]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.9}
            chromaticAberration={0.08}
            anisotropy={0.2}
            distortion={0.16}
            distortionScale={0.2}
            temporalDistortion={0.03}
            transmission={1}
            roughness={0.12}
            metalness={0.2}
            color="#c8b7a3"
          />
        </mesh>
      </Float>

      <mesh ref={ring} rotation={[1.12, 0.25, 0.5]} scale={1.7}>
        <torusGeometry args={[1.05, 0.018, 16, 180]} />
        <meshStandardMaterial color="#e8dfd3" metalness={0.95} roughness={0.18} />
      </mesh>

      <mesh rotation={[0.78, -0.6, -0.35]} position={[-0.15, 0.05, -0.4]} scale={2.15}>
        <torusGeometry args={[0.72, 0.012, 12, 180]} />
        <meshStandardMaterial color="#7b6958" metalness={0.9} roughness={0.22} />
      </mesh>

      <Sparkles count={32} scale={[4.8, 3.8, 2]} size={1.1} speed={0.12} opacity={0.42} color="#f1e8dc" />
    </group>
  )
}

function HeroScene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas dpr={[1, 1.65]} camera={{ position: [0, 0, 5.4], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.38} />
        <directionalLight position={[3, 3, 5]} intensity={3.1} color="#fff4e8" />
        <pointLight position={[-3, -1, 2]} intensity={1.8} color="#b48a72" />
        <Suspense fallback={null}>
          <SilkSculpture />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

function BookingDrawer({ open, setOpen }) {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', service: 'Hair', date: '', note: '' })

  const makeRequest = async (e) => {
    e.preventDefault()
    const summary = `KARINĒ appointment request\nName: ${form.name}\nService: ${form.service}\nPreferred date: ${form.date}\nNotes: ${form.note || '—'}`
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button className="drawer-backdrop" aria-label="Close booking" onClick={() => setOpen(false)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside className="booking-drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 230 }}>
            <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close"><X size={20}/></button>
            <span className="eyebrow">Private appointment</span>
            <h2>Reserve your time.</h2>
            <p className="drawer-copy">Choose your preferred service and date. This preview copies a clean request you can send to the salon; connect your live booking provider before launch.</p>
            <form onSubmit={makeRequest}>
              <label>Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
              <label>Service<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select></label>
              <label>Preferred date<input required type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label>
              <label>Anything we should know?<textarea rows="4" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} placeholder="Optional" /></label>
              <button className="primary wide" type="submit">{copied ? 'Request copied ✓' : 'Prepare appointment request'} <ArrowRight size={16}/></button>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const root = useRef()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.08, smoothWheel: true })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      gsap.to('.hero-copy', {
        yPercent: -28,
        opacity: 0.12,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.portrait-panel', {
        yPercent: 18,
        rotate: 1.5,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.utils.toArray('.service-card').forEach((card) => {
        gsap.fromTo(card, { y: 85, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: card, start: 'top 86%' },
        })
      })
    }, root)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      ctx.revert()
    }
  }, [])

  return (
    <div ref={root}>
      <BookingDrawer open={bookingOpen} setOpen={setBookingOpen} />

      <header className="nav">
        <a className="brand" href="#top">KARINĒ</a>
        <nav>
          <a href="#services">Services</a>
          <a href="#philosophy">Experience</a>
          <a href="#journal">Journal</a>
        </nav>
        <button className="nav-cta" onClick={() => setBookingOpen(true)}><Calendar size={15}/> Book</button>
      </header>

      <main>
        <section id="top" className="hero">
          <HeroScene />
          <div className="noise" />
          <div className="hero-photo" />
          <div className="hero-copy">
            <span className="eyebrow">Luxury salon · wellness</span>
            <h1><span>More than</span><span className="italic">beauty.</span></h1>
            <p>Artistry, ritual and restorative care — composed into one deeply personal experience.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => setBookingOpen(true)}>Book an appointment <ArrowRight size={16}/></button>
              <a className="text-link" href="#services">Explore treatments <ArrowDown size={16}/></a>
            </div>
          </div>
          <motion.div className="portrait-panel" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: .35 }}>
            <div className="portrait-image" />
            <div className="portrait-meta">
              <span>THE KARINĒ EXPERIENCE</span>
              <strong>Beauty, composed.</strong>
            </div>
          </motion.div>
          <div className="hero-index"><span>01</span><div/><span>SCROLL TO ENTER</span></div>
        </section>

        <section id="philosophy" className="statement">
          <span className="eyebrow">Our point of view</span>
          <h2>Quiet luxury.<br/><em>Deliberate care.</em></h2>
          <p>Not a beauty factory. Not a trend cycle. KARINĒ is a slower, more considered salon experience built around craft, comfort and results that still feel like you.</p>
        </section>

        <section id="services" className="services">
          <div className="section-heading">
            <span className="eyebrow">Selected rituals</span>
            <h2>Made for the way<br/>you want to feel.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image-wrap">
                  <img src={service.image} alt="" loading="lazy"/>
                  <span>{service.n}</span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <button onClick={() => setBookingOpen(true)} aria-label={`Book ${service.title}`}>Reserve <ArrowRight size={15}/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cinematic">
          <div className="cinematic-photo" />
          <div className="cinematic-overlay" />
          <div className="cinematic-copy">
            <span className="eyebrow">The room changes you</span>
            <h2>A pause from<br/><em>everything else.</em></h2>
            <p>Warm light, considered details, no conveyor-belt appointments.</p>
          </div>
        </section>

        <section id="journal" className="reviews">
          <span className="eyebrow">Words we keep</span>
          <div className="marquee"><div>“I finally felt listened to.” <i>— Hair</i> &nbsp;&nbsp;&nbsp; “Everything felt calm, never rushed.” <i>— Skin</i> &nbsp;&nbsp;&nbsp; “The kind of place you want to stay in.” <i>— Wellness</i>&nbsp;&nbsp;&nbsp;</div></div>
          <div className="marquee reverse"><div>BEAUTY WITHOUT NOISE &nbsp;·&nbsp; CARE WITHOUT RUSH &nbsp;·&nbsp; DETAIL WITHOUT EXCESS &nbsp;·&nbsp; BEAUTY WITHOUT NOISE &nbsp;·&nbsp;</div></div>
        </section>

        <section className="final-cta">
          <div>
            <span className="eyebrow">Your time, reserved</span>
            <h2>Come as you are.<br/><em>Leave more yourself.</em></h2>
          </div>
          <button className="primary large" onClick={() => setBookingOpen(true)}>Book an appointment <ArrowRight size={18}/></button>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">KARINĒ</a>
        <span>Luxury salon & wellness</span>
        <span>© {new Date().getFullYear()} KARINĒ</span>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)