'use client'

import { useCallback } from 'react'
import { useLenis } from 'lenis/react'

export function useScrollToSection() {
  const lenis = useLenis()

  const scrollToSection = useCallback(
    (id: string) => (event?: React.MouseEvent) => {
      if (event) {
        event.preventDefault()
      }

      if (!lenis) return

      if (id === 'contact') {
        lenis.scrollTo('bottom', { duration: 1.2 })
        return
      }

      const element = document.getElementById(id)
      if (element) {
        const targetPos = element.offsetTop

        lenis.scrollTo(targetPos, {
          duration: 1.2,
          offset: 0,
        })
      }
    },
    [lenis]
  )

  const scrollToTop = useCallback(
    (event?: React.MouseEvent) => {
      if (event) {
        event.preventDefault()
      }
      if (lenis) {
        lenis.scrollTo('top', { duration: 1.2 })
      }
    },
    [lenis]
  )

  return { scrollToSection, scrollToTop }
}
