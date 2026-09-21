export default function StorySection() {
  return (
    <section className="story-v3 section-pad">
      <div className="story-v3__image" data-reveal>
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </div>
      <div className="story-v3__copy" data-reveal>
        <span className="eyebrow">Our philosophy</span>
        <h2>A SALON<br/><em>THAT KNOWS WHEN TO STOP.</em></h2>
        <p>Good beauty work should feel precise, personal and effortless. No over-styling. No rushing. No performance for the sake of performance.</p>
        <div className="story-v3__values">
          <span>Private</span><span>Precise</span><span>Unhurried</span>
        </div>
      </div>
    </section>
  )
}
