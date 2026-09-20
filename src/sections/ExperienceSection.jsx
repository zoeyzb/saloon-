import SalonScene from '../components/three/SalonScene'

export default function ExperienceSection() {
  return (
    <section id="about" className="experience">
      <div className="atelier-fallback" aria-hidden="true">
        <i className="atelier-pedestal"/>
        <i className="atelier-bottle atelier-bottle--a"/>
        <i className="atelier-bottle atelier-bottle--b"/>
        <i className="atelier-ring"/>
      </div>
      <div className="experience-canvas"><SalonScene/></div>
      <div className="experience-spotlight"/>
      <div className="experience-title">
        <span>BEAUTY</span>
        <em>IN MOTION.</em>
      </div>
      <div className="product-note">
        <span>01 / KARINĒ ATELIER</span>
        <strong>Ritual objects</strong>
        <p>Move across the objects. The scene redraws only when you interact.</p>
      </div>
      <p className="experience-copy">A tactile salon experience built around confidence, craft and the quiet ritual of being looked after.</p>
    </section>
  )
}