'use client'

import { useCallback } from 'react'
import { useLenis } from 'lenis/react'

export function useScrollToSection() {
  const lenis = useLenis()

  const scrollToSection = useCallback(
    (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      lenis?.scrollTo(`#${sectionId}`, { force: true })
    },
    [lenis]
  )

  const scrollToTop = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault()
      lenis?.scrollTo(0, { force: true })
    },
    [lenis]
  )

  return { scrollToSection, scrollToTop }
}
