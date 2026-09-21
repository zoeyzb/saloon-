import { ArrowUpRight } from 'lucide-react'
import { prices } from '../data/content'

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-v3 section-pad">
      <div className="pricing-v3__head" data-reveal>
        <span className="eyebrow">Signature menu</span>
        <h2>STARTING PRICES.<br/><em>NO THEATRE.</em></h2>
        <p>Your stylist confirms the final quote before the service begins.</p>
      </div>

      <div className="pricing-v3__menu" data-reveal>
        {prices.map(([name,price],i) => (
          <a href="#contact" className="price-v3" key={name}>
            <span>{String(i+1).padStart(2,'0')}</span>
            <strong>{name}</strong>
            <b>{price}</b>
            <ArrowUpRight size={17}/>
          </a>
        ))}
      </div>
    </section>
  )
}
