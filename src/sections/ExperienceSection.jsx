import SalonScene from '../components/three/SalonScene'

export default function ExperienceSection() {
  return (
    <section id="about" className="atelier-v3 section-pad">
      <div className="atelier-v3__head" data-reveal>
        <span className="eyebrow">The atelier</span>
        <h2>OBJECTS,<br/><em>LIGHT & TOUCH.</em></h2>
        <p>The digital space mirrors the salon itself: restrained, tactile and intentionally slow.</p>
      </div>

      <div className="atelier-v3__stage" data-reveal>
        <div className="atelier-v3__meta">
          <span>Interactive study</span>
          <span>Move to explore</span>
        </div>
        <SalonScene/>
        <div className="atelier-v3__footer">
          <span>01 / FORM</span>
          <span>02 / LIGHT</span>
          <span>03 / MATERIAL</span>
        </div>
      </div>
    </section>
  )
}
