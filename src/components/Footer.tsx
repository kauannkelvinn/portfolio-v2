'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false)

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="hidden h-full w-full flex-col justify-between px-7.5 pt-27.5 pb-12.5 md:flex">
        <div className="flex w-full items-start justify-between leading-12">
          <div className="flex flex-col">
            <h2 className="text-64 tracking-tightest font-medium">Kauan Kelvin</h2>
            <p className="text-36 mt-2 tracking-tighter">Full Stack Software Engineer</p>
          </div>

          <div className="text-36 text-portfolio-nav tracking-tightest flex flex-col items-end gap-3">
            <a href="#work" className="hover:text-portfolio-white transition">
              Work
            </a>
            <a href="#about" className="hover:text-portfolio-white transition">
              About
            </a>
            <a href="#statistics" className="hover:text-portfolio-white transition">
              Statistics
            </a>
          </div>
        </div>

        <div className="mt-auto flex w-full items-end justify-between pt-8">
          <div className="text-36 flex items-center gap-6">
            <span>© 2026</span>
            <div className="ml-8 flex items-center gap-13">
              <span className="cursor-pointer transition hover:opacity-70">Portuguese</span>
              <span className="cursor-pointer transition hover:opacity-70">English</span>
            </div>
          </div>

          <div className="text-36 tracking-tightest flex items-center gap-20">
            <a
              href="https://www.linkedin.com/in/kauannkelvinn/"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              Linkedin
            </a>
            <a
              href="https://x.com/kevyingwashere"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              Twitter
            </a>
            <a
              href="https://github.com/kauannkelvinn"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              Github
            </a>
            <a
              href="mailto:contato@kauankelvin.com"
              className="transition-opacity hover:opacity-70"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between px-5 pt-25 pb-6 md:hidden">
        <div className="mb-auto flex w-full items-start justify-between">
          <div className="flex flex-col leading-6">
            <span className="text-30 tracking-tightest font-medium">Kauan Kelvin</span>
            <span className="mt-1 max-w-75 text-[20px] tracking-tighter">
              Full Stack Software Engineer
            </span>
          </div>

          <div className="text-portfolio-nav tracking-tightest flex flex-col items-end gap-2 text-[20px]">
            <a
              href="https://www.linkedin.com/in/kauannkelvinn/"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              Linkedin
            </a>
            <a
              href="https://x.com/kevyingwashere"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              Twitter
            </a>
            <a
              href="https://github.com/kauannkelvinn"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              Github
            </a>
            <a
              href="mailto:contato@kauankelvin.com"
              className="transition-opacity active:opacity-70"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col pt-8">
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full overflow-hidden"
              >
                <div className="flex flex-col items-start gap-2 pb-5 text-[18px] font-medium">
                  <button
                    onClick={() => setIsLangOpen(false)}
                    className="transition-opacity active:opacity-70"
                  >
                    Portuguese
                  </button>
                  <button
                    onClick={() => setIsLangOpen(false)}
                    className="transition-opacity active:opacity-70"
                  >
                    English
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex w-full items-center justify-between">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center transition-opacity focus:outline-none active:opacity-70"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/global.png`}
                alt="global"
                width={24}
                height={24}
                loading="eager"
                className="h-5 w-auto transform-gpu object-contain"
              />
            </button>

            <span className="absolute left-1/2 -translate-x-1/2 text-[18px] font-medium">
              © 2026
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[18px] font-medium transition-opacity active:opacity-70"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
