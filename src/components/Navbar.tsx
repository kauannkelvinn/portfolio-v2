'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import TranslateMenu from './TranslateMenu'

interface NavbarProps {
  dict: {
    work: string
    about: string
    statistics: string
    contact: string
  }
  lang: {
    pt: string
    en: string
  }
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsLangOpen(false)
  }

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen)
    setIsMenuOpen(false)
  }

  const switchLang = (newLocale: string) => {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = newLocale

    setIsLangOpen(false)
    setIsMenuOpen(false)

    setTimeout(() => {
      router.push(segments.join('/'), { scroll: false })
    }, 400)
  }

  return (
    <header className="flex w-full flex-col">
      <div className="border-portfolio-black text-36 tracking-tightest hidden w-full items-center justify-between border-b-[3px] py-7.5 md:flex">
        <nav>
          <ul className="text-portfolio-percent flex gap-22 font-medium">
            <li>
              <a href="#work" className="transition-opacity hover:opacity-70">
                {dict.work}
              </a>
            </li>
            <li>
              <a href="#about" className="transition-opacity hover:opacity-70">
                {dict.about}
              </a>
            </li>
          </ul>
        </nav>

        <nav className="text-portfolio-black flex items-center gap-22 font-medium">
          <TranslateMenu lang={lang} />

          <ul className="text-portfolio-black flex items-center gap-22 font-medium">
            <li>
              <a
                href="#statistics"
                className="flex items-center transition-opacity hover:opacity-70"
              >
                {dict.statistics}
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-opacity hover:opacity-70">
                {dict.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-portfolio-black flex w-full flex-col border-b-2 md:hidden">
        <div className="flex w-full items-end justify-between pt-6 pb-3">
          <button
            onClick={toggleLang}
            className="pb-1 transition-opacity focus:outline-none active:opacity-75"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/translate.png`}
              alt="Translate"
              width={28}
              height={28}
              loading="eager"
              className="h-7 w-auto transform-gpu"
            />
          </button>

          <button
            onClick={toggleMenu}
            className="relative mb-1 h-5 w-5.25 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="bg-portfolio-black absolute top-0 left-0 z-30 h-0.75 w-5.25" />
            <div
              className={`bg-portfolio-black absolute top-2 left-0 z-20 h-[2.5px] w-5.25 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? '-translate-y-2' : ''
              }`}
            />
            <div
              className={`bg-portfolio-black absolute top-4 left-0 z-10 h-[2.5px] w-5.25 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? '-translate-y-4' : ''
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {(isMenuOpen || isLangOpen) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full overflow-hidden"
            >
              <div className="text-portfolio-black tracking-tightest flex w-full pt-4 pb-4 text-[18px] font-medium">
                {isMenuOpen && (
                  <div className="flex w-full justify-between">
                    <a href="#work" onClick={() => setIsMenuOpen(false)}>
                      {dict.work}
                    </a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                      {dict.about}
                    </a>
                    <a href="#statistics" onClick={() => setIsMenuOpen(false)}>
                      {dict.statistics}
                    </a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                      {dict.contact}
                    </a>
                  </div>
                )}

                {isLangOpen && (
                  <div className="flex w-full justify-start gap-8">
                    <button
                      onClick={() => switchLang('pt')}
                      className="transition-opacity active:opacity-75"
                    >
                      {lang.pt}
                    </button>
                    <button
                      onClick={() => switchLang('en')}
                      className="transition-opacity active:opacity-75"
                    >
                      {lang.en}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
