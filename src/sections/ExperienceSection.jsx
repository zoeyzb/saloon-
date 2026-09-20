import SalonScene from '../components/three/SalonScene'

export default function ExperienceSection() {
  return (
    <section id="about" className="experience section-pad">
      <div className="experience-shell">
        <div className="experience-copy-block" data-reveal>
          <span className="eyebrow">The Kariné ritual</span>
          <h2>BEAUTY,<br/><em>CONSIDERED.</em></h2>
          <p>Luxury should feel intentional, not loud. Explore the objects — every movement is rendered in real time.</p>
          <div className="experience-meta">
            <span><b>01</b> Sculpted care</span>
            <span><b>02</b> Warm materials</span>
            <span><b>03</b> Quiet precision</span>
          </div>
        </div>

        <div className="experience-stage" data-reveal>
          <div className="experience-stage__label">
            <span>Interactive atelier</span>
            <span>Move your cursor</span>
          </div>
          <SalonScene/>
          <div className="experience-stage__caption">
            <small>01 / OBJECT STUDY</small>
            <p>Hover to shift the composition.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
