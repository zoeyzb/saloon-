import { useEffect, useState } from 'react'
import { CalendarDays, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = ['Services','About','Pricing','Gallery','Reviews','Contact']

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="KARINĒ home">KARINĒ</a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-book" href="#contact"><CalendarDays size={14}/> <span>Book Appointment</span></a>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={20}/></button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X/></button>
            <div className="mobile-menu__inner">
              <span className="eyebrow">KARINĒ</span>
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{opacity:0,y:18}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:i*0.05}}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
