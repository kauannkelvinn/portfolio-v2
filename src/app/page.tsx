'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Statistics from '@/components/Statistics'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const bigFooterRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const footer = bigFooterRef.current
      if (!footer) return

      gsap.set(footer, {
        y: '100%',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
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
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="bg-portfolio-white relative w-full overflow-x-hidden">
      <main ref={mainRef} className="relative z-10 flex w-full flex-col pb-24">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Statistics />
      </main>

      <div
        ref={bigFooterRef}
        className="bg-portfolio-footer text-portfolio-white fixed bottom-0 left-1/2 z-20 h-[90vh] w-screen -translate-x-1/2 will-change-transform"
      >
        <Footer />
      </div>
    </div>
  )
}
