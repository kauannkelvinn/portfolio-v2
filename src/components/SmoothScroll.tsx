'use client'

import { useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

function LenisScrollTriggerBridge() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)
    ScrollTrigger.refresh()

    return () => {
      lenis.off('scroll', onScroll)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.refresh()
    }
  }, [lenis])

  return null
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
      }}
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  )
}
