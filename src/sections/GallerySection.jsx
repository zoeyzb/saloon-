import { gallery } from '../data/content'

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-head section-pad">
        <span className="eyebrow">Editorial notes</span>
        <h2>DETAILS<br/><em>WORTH NOTICING.</em></h2>
      </div>
      <div className="gallery-track">
        {gallery.map((src,i)=>(
          <figure key={src} className={`gallery-shot gallery-shot--${i+1}`}>
            <img src={src} alt="" loading="lazy"/>
            <figcaption>{String(i+1).padStart(2,'0')} / KARINĒ</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
