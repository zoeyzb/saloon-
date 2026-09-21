import { gallery } from '../data/content'

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-v3 section-pad">
      <div className="gallery-v3__head" data-reveal>
        <span className="eyebrow">Editorial notes</span>
        <h2>THE DETAILS<br/><em>DO THE TALKING.</em></h2>
      </div>
      <div className="gallery-v3__grid">
        {gallery.map((src,i)=>(
          <figure key={src} className={`gallery-v3__shot gallery-v3__shot--${i+1}`} data-reveal>
            <img src={src} alt="" loading="lazy" decoding="async"/>
            <figcaption>{String(i+1).padStart(2,'0')} / KARINĒ</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
