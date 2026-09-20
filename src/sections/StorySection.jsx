export default function StorySection() {
  return (
    <section className="story">
      <img
        className="story-image"
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1500&q=80"
        loading="lazy"
        decoding="async"
        alt=""
      />
      <div className="story-overlay"/>
      <div className="story-copy">
        <span className="eyebrow">Our philosophy</span>
        <h2>MORE THAN<br/><em>A SALON.</em></h2>
        <p>A private ritual.<br/>A quiet reset.<br/>A more confident version of you.</p>
      </div>
    </section>
  )
}
