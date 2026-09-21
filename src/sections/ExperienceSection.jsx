import SalonScene from '../components/three/SalonScene'

export default function ExperienceSection() {
  return (
    <section id="about" className="atelier-x">
      <div className="atelier-x__copy section-pad" data-reveal>
        <span className="eyebrow">Karinē objects</span>
        <h2>LIGHT.<br/>FORM.<br/><em>RITUAL.</em></h2>
        <p>A small interactive sculpture built from the same ideas as the salon: restraint, polish and tactile contrast.</p>
        <div className="atelier-x__legend">
          <span>01 Chrome</span><span>02 Glass</span><span>03 Warm metal</span>
        </div>
      </div>

      <div className="atelier-x__scene" data-reveal>
        <div className="atelier-x__hint"><span>Interactive object study</span><span>Move cursor</span></div>
        <SalonScene/>
      </div>
    </section>
  )
}
