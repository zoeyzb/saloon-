import { ArrowDownRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <img
          className="hero-bg-img"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
          srcSet="
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=640&q=76 640w,
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=78 1000w,
            https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80 1400w
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
        <span className="eyebrow hero-reveal hero-reveal--1">Luxury salon & wellness</span>
        <h1 className="hero-reveal hero-reveal--2"><span>MORE</span><span>THAN BEAUTY.</span></h1>
        <h2 className="hero-reveal hero-reveal--3">A More Confident You.</h2>
        <p className="hero-reveal hero-reveal--4">Expert artistry, premium care and a quieter kind of luxury — designed around the person you already are.</p>
        <div className="hero-actions hero-reveal hero-reveal--5">
          <a className="primary" href="#contact">Book Your Appointment <ArrowDownRight size={17}/></a>
          <a className="secondary" href="#about"><Play size={14} fill="currentColor"/> Discover Kariné</a>
        </div>
        <div className="hero-trust hero-reveal hero-reveal--6">
          <div className="avatar-stack" aria-hidden="true"><i/><i/><i/><i/></div>
          <span>Trusted by 10,000+ happy clients</span>
        </div>
      </div>
      <div className="hero-glass hero-reveal hero-reveal--5">
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