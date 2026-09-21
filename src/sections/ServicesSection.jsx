import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="services-v3">
      <div className="services-v3__head section-pad" data-reveal>
        <span className="eyebrow">What we do</span>
        <div>
          <h2>FIVE RITUALS.<br/><em>ONE STANDARD.</em></h2>
          <p>Every service is treated like a private appointment, not a slot on a schedule.</p>
        </div>
      </div>

      <div className="services-v3__list">
        {services.map((service, index) => (
          <article className="service-row" key={service.id} data-reveal>
            <div className="service-row__index">{service.id}</div>
            <div className="service-row__image">
              <img src={service.image} alt={service.title} loading="lazy" decoding="async"/>
            </div>
            <div className="service-row__content">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <small>{service.detail}</small>
            </div>
            <a href="#contact" className="service-row__action" aria-label={`Book ${service.title}`}>
              <span>Book</span><ArrowUpRight size={17}/>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
