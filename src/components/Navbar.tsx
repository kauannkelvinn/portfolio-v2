'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import TranslateMenu from './TranslateMenu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsLangOpen(false)
  }

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen)
    setIsMenuOpen(false)
  }

  return (
    <header className="flex w-full flex-col">
      <div className="border-portfolio-black text-36 tracking-tightest hidden w-full items-center justify-between border-b-[3px] py-7.5 md:flex">
        <nav>
          <ul className="text-portfolio-percent flex gap-22 font-medium">
            <li>
              <a href="#work" className="transition-opacity hover:opacity-70">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="transition-opacity hover:opacity-70">
                About
              </a>
            </li>
          </ul>
        </nav>

        <nav className="text-portfolio-black flex items-center gap-22 font-medium">
          <TranslateMenu />

          <ul className="text-portfolio-black flex items-center gap-22 font-medium">
            <li>
              <a
                href="#statistics"
                className="flex items-center transition-opacity hover:opacity-70"
              >
                Statistics
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-opacity hover:opacity-70">
                Contact
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
            <Image
              src="/images/translate.svg"
              alt="Translate"
              width={28}
              height={28}
              className="h-7 w-7"
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
                      Work
                    </a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                      About
                    </a>
                    <a href="#statistics" onClick={() => setIsMenuOpen(false)}>
                      Statistics
                    </a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </a>
                  </div>
                )}

                {isLangOpen && (
                  <div className="flex w-full justify-start gap-8">
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="transition-opacity active:opacity-75"
                    >
                      Portuguese
                    </button>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="transition-opacity active:opacity-75"
                    >
                      English
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
