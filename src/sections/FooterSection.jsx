export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><a href="#top">KARINĒ</a><span>Luxury salon & wellness</span></div>
      <div className="footer-links">
        <a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#gallery">Gallery</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a>
      </div>
      <div className="footer-social"><span>Instagram</span><span>TikTok</span><span>Pinterest</span></div>
      <small>© {new Date().getFullYear()} KARINĒ. Built for a real booking integration.</small>
    </footer>
  )
}
