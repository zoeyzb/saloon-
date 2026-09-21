import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="services-x section-pad">
      <div className="services-x__intro" data-reveal>
        <span className="eyebrow">The menu</span>
        <h2>WHAT WE<br/><em>DO BEST.</em></h2>
        <p>Five focused categories. No bloated menu. No rushed chair time.</p>
      </div>

      <div className="services-x__mosaic">
        {services.map((service, index) => (
          <article className={`service-tile service-tile--${index + 1}`} key={service.id} data-reveal>
            <img src={service.image} alt={service.title} loading="lazy" decoding="async"/>
            <div className="service-tile__shade" />
            <div className="service-tile__top">
              <span>{service.id}</span>
              <a href="#contact" aria-label={`Book ${service.title}`}><ArrowUpRight size={17}/></a>
            </div>
            <div className="service-tile__copy">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <small>{service.detail}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
