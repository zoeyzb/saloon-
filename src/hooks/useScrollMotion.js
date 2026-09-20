import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollMotion() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section') || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })

      gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 54, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: Math.min(index * 0.05, 0.2),
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%', once: true },
          },
        )
      })
    })

    return () => context.revert()
  }, [])
}
