import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="services section-pad">
      <div className="section-kicker">
        <span className="eyebrow">Our services</span>
        <span>01 — 05</span>
      </div>
      <div className="section-heading">
        <h2>CRAFTED<br/>FOR YOUR<br/><em>EVERY MOOD.</em></h2>
        <p>Five signatures, each shaped around the way you want to look, feel and move through the world.</p>
      </div>
      <div className="service-scroller">
        {services.map(service => (
          <article className="service-card" key={service.id}>
            <div className="service-media">
              <img src={service.image} alt={service.title} loading="lazy"/>
              <span>{service.id}</span>
            </div>
            <div className="service-meta">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <small>{service.detail}</small>
              <a href="#contact" aria-label={`Book ${service.title}`}><ArrowUpRight size={18}/></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
