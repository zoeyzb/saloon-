import { ArrowUpRight } from 'lucide-react'
import { prices } from '../data/content'

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing section-pad">
      <div className="pricing-intro">
        <span className="eyebrow">Signature menu</span>
        <h2>LUXURY<br/><em>WITH CLARITY.</em></h2>
        <p>Transparent starting prices. Your stylist confirms the final quote during consultation.</p>
      </div>
      <div className="pricing-list">
        {prices.map(([name,price],i) => (
          <a href="#contact" className="price-row" key={name}>
            <span>{String(i+1).padStart(2,'0')}</span>
            <strong>{name}</strong>
            <b>{price}</b>
            <ArrowUpRight size={18}/>
          </a>
        ))}
      </div>
    </section>
  )
}
