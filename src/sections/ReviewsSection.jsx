import { reviews } from '../data/content'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-v3 section-pad">
      <div className="reviews-v3__head" data-reveal>
        <span className="eyebrow">Client notes</span>
        <h2>QUIETLY<br/><em>MEMORABLE.</em></h2>
      </div>
      <div className="reviews-v3__grid">
        {reviews.map(([quote,name,service],i)=>(
          <article className="review-v3" key={name} data-reveal>
            <span>{String(i+1).padStart(2,'0')}</span>
            <p>“{quote}”</p>
            <footer><strong>{name}</strong><small>{service}</small></footer>
          </article>
        ))}
      </div>
    </section>
  )
}
