'use client'

import { useCallback } from 'react'
import { useLenis } from 'lenis/react'

function getSectionScrollTarget(sectionId: string, currentScroll: number) {
  const element = document.getElementById(sectionId)
  if (!element) return null

  return currentScroll + element.getBoundingClientRect().top
}

export function useScrollToSection() {
  const lenis = useLenis()

  const scrollToSection = useCallback(
    (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      if (!lenis) return

      const target = getSectionScrollTarget(sectionId, lenis.scroll)
      if (target === null) return

      lenis.scrollTo(target, { force: true, offset: 0 })
    },
    [lenis]
  )

  const scrollToTop = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault()
      lenis?.scrollTo(0, { force: true, offset: 0 })
    },
    [lenis]
  )

  return { scrollToSection, scrollToTop }
}
