'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'
import { useRef } from 'react'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Statistics from '@/components/Statistics'
import Footer from '@/components/Footer'
import pt from '@/app/dictionaries/pt.json'

gsap.registerPlugin(ScrollTrigger)

export default function HomeClient({ dict }: { dict: typeof pt }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const bigFooterRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (typeof window !== 'undefined') {
        window.history.scrollRestoration = 'manual'
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }

      const splitInstances: SplitType[] = []
      let refreshTimeout: ReturnType<typeof setTimeout> | undefined
      let cancelled = false

      document.fonts.ready.then(() => {
        if (cancelled) return

        const footer = bigFooterRef.current
        if (!footer) return

        gsap.set(['.reveal-text', '.reveal-lines'], { opacity: 1 })

        gsap.set(footer, {
          y: '100%',
          opacity: 1,
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        })

        const splitElements = document.querySelectorAll('.reveal-lines')

        splitElements.forEach((el) => {
          const split = new SplitType(el as HTMLElement, { types: 'lines' })
          splitInstances.push(split)

          split.lines?.forEach((line) => {
            const wrapper = document.createElement('div')
            wrapper.style.overflow = 'hidden'
            wrapper.style.display = 'block'
            line.parentNode?.insertBefore(wrapper, line)
            wrapper.appendChild(line)
          })

          if (split.lines && split.lines.length > 0) {
            const isHero = el.closest('#hero') !== null

            gsap.fromTo(
              split.lines,
              { y: '110%' },
              {
                y: '0%',
                duration: isHero ? 1.5 : 1.2,
                delay: isHero ? 0.4 : 0,
                ease: 'expo.out',
                stagger: 0.08,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            )
          }
        })

        const revealContainers = gsap.utils.toArray<HTMLElement>('.overflow-hidden')

        revealContainers.forEach((container) => {
          const textsInside = container.querySelectorAll('.reveal-text')

          if (textsInside.length > 0) {
            const isHero = container.closest('#hero') !== null

            gsap.fromTo(
              textsInside,
              { y: '110%' },
              {
                y: '0%',
                duration: isHero ? 1.5 : 1.2,
                delay: isHero ? 0.4 : 0,
                ease: 'expo.out',
                stagger: 0.1,
                scrollTrigger: {
                  trigger: container,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                  invalidateOnRefresh: true,
                },
              }
            )
          }
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'bottom bottom',
            end: '+=100%',
            scrub: 1,
            pin: true,
          },
        })

        tl.to(footer, {
          y: '0%',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          duration: 1,
          ease: 'power2.inOut',
        })

        refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100)
      })

      return () => {
        cancelled = true
        if (refreshTimeout) clearTimeout(refreshTimeout)
        splitInstances.forEach((split) => split.revert())
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="bg-portfolio-white relative w-full overflow-x-hidden">
      <main ref={mainRef} className="relative z-10 flex w-full flex-col pb-24">
        <Navbar dict={dict.nav} lang={dict.footer.mobile} />
        <Hero dict={dict.hero} />
        <Work dict={dict.work} />
        <About dict={dict.about} />
        <Statistics dict={dict.statistics} />
      </main>

      <div
        ref={bigFooterRef}
        className="bg-portfolio-footer text-portfolio-white fixed bottom-0 left-1/2 z-20 h-[90vh] w-screen -translate-x-1/2 opacity-0 will-change-transform"
      >
        <Footer dict={dict.footer} nav={dict.nav} />
      </div>
    </div>
  )
}
