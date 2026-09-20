import { reviews } from '../data/content'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews section-pad">
      <div className="reviews-head">
        <span className="eyebrow">What our clients say</span>
        <h2>FELT IN<br/><em>THE DETAILS.</em></h2>
      </div>
      <div className="reviews-grid">
        {reviews.map(([quote,name,service])=>(
          <article className="review-card" key={name}>
            <div className="review-stars">★★★★★</div>
            <p>“{quote}”</p>
            <footer><strong>{name}</strong><span>{service}</span></footer>
          </article>
        ))}
      </div>
    </section>
  )
}