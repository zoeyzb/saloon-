import { reviews } from '../data/content'

function Lane({reverse=false,slow=false,offset=0}) {
  const set = [...reviews.slice(offset), ...reviews.slice(0,offset), ...reviews]
  return (
    <div className={`review-lane ${reverse?'review-lane--reverse':''} ${slow?'review-lane--slow':''}`}>
      <div className="review-lane__track">
        {set.map(([quote,name,service],i)=>(
          <article className="review-card" key={`${name}-${i}`}>
            <div className="review-stars">★★★★★</div>
            <p>“{quote}”</p>
            <footer><strong>{name}</strong><span>{service}</span></footer>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews section-pad">
      <div className="reviews-head">
        <span className="eyebrow">What our clients say</span>
        <h2>FELT IN<br/><em>THE DETAILS.</em></h2>
      </div>
      <Lane/>
      <Lane reverse offset={2}/>
      <Lane slow offset={4}/>
    </section>
  )
}
